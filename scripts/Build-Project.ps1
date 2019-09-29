[CmdletBinding()]
param()

. "$PSScriptRoot\Utils.ps1"

$initialLocation = Get-Location

try {
    $workspaceRoot = Resolve-Path (git rev-parse --show-toplevel)
    Set-Location $workspaceRoot
    RunCmd yarn install
    RunCmd yarn run build
}
finally {
    Set-Location $initialLocation
}
