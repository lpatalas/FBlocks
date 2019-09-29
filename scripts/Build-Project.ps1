[CmdletBinding()]
param()

$initialLocation = Get-Location
$workspaceRoot = Resolve-Path (git rev-parse --show-toplevel)

function Main {
    Set-Location $workspaceRoot
    RunCmd yarn install
    RunCmd yarn run build
}

function RunCmd {
    param(
        [Parameter(Mandatory)]
        [String] $CommandName,

        [Parameter(ValueFromRemainingArguments)]
        [Object[]] $CommandArguments
    )

    Write-Verbose "Running: $CommandName $CommandArguments"
    & $CommandName @CommandArguments

    if ($LASTEXITCODE -ne 0) {
        throw "'$CommandName' exited with error code $LASTEXITCODE"
    }
}

try {
    Main
}
finally {
    Set-Location $initialLocation
}
