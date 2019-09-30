[CmdletBinding()]
param(
    [String] $SourceDirectoryPath = (Resolve-Path "$PSScriptRoot\..\public"),
    [String] $WebAppName = 'fblocks',
    [String] $ResourceGroupName = 'fblocks'
)

. "$PSScriptRoot\Utils.ps1"

function Main {
    $publishProfile = GetMSDeployPublishProfile
    if (-not $publishProfile) {
        throw "Can't get MSDeploy publish profile"
    }

    DeployDirectory $SourceDirectoryPath $publishProfile
}

function GetMSDeployPublishProfile {
    $allPublishProfiles = RunCmd az webapp deployment list-publishing-profiles `
        --name $WebAppName `
        --resource-group $ResourceGroupName `
        | ConvertFrom-Json

    Write-Verbose "Found $($allPublishProfiles.Count) publish profiles"

    $allPublishProfiles `
        | Where-Object { $_.publishMethod -ieq 'MSDeploy' } `
        | Select-Object -First 1
}

function DeployDirectory($publishDir, $publishProfile) {
	Write-Host "Deploying '$publishDir' to '$($publishProfile.destinationAppUrl)'"

    $siteName = $publishProfile.msdeploySite

	$dest = JoinHashtable @{
        ContentPath = $siteName
        ComputerName = "https://$($publishProfile.publishUrl)/msdeploy.axd?site=$siteName"
        UserName = $publishProfile.userName
        Password = $publishProfile.userPWD
        AuthType = 'Basic'
    }

    $msDeployExe = & "$PSScriptRoot\Find-MSDeployExe.ps1"
    & "$msDeployExe" `
        -verb:sync `
        -source:contentPath="$publishDir" `
        -dest:"$dest"
}

function JoinHashtable([Hashtable] $table) {
    (
        $table.Keys `
            | ForEach-Object { $_ + '=' + $table.Item($_) }
    ) -join ','
}

Main
