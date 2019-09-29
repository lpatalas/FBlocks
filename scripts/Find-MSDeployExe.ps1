[CmdletBinding()]
param()

$regKeyPath = 'HKLM:\SOFTWARE\Microsoft\IIS Extensions\MSDeploy'
if (-not (Test-Path $regKeyPath)) {
    throw "Can't find MSDeploy registry key: $regKeyPath"
}

$regKey = Get-ChildItem $regKeyPath `
    | Sort-Object Name -Descending `
    | Select-Object -First 1

$installPath = $regKey.GetValue('InstallPath')
$msdeployExePath = Join-Path $installPath 'msdeploy.exe'

if (-not (Test-Path $msdeployExePath)) {
    throw "Can't find msdeploy.exe at path: $msdeployExePath"
}

Get-Item -LiteralPath $msdeployExePath
