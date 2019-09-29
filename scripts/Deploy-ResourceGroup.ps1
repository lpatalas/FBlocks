[CmdletBinding(SupportsShouldProcess)]
param(
    [String] $ResourceGroupName = 'fblocks',
    [String] $Location = 'westeurope'
)

. "$PSScriptRoot\Utils.ps1"

RunCmd az account show | Out-Null

Write-Host "Creating resource group '$ResourceGroupName'"
RunCmd az group create `
    --location $Location `
    --name $ResourceGroupName

$appServicePlanName = "$ResourceGroupName-appserviceplan"
Write-Host "Creating app service plan '$appServicePlanName'"
RunCmd az appservice plan create `
    --name $appServicePlanName `
    --resource-group $ResourceGroupName `
    --sku F1

$webAppName = "$ResourceGroupName-webapp"
Write-Host "Creating app service '$webAppName'"
RunCmd az webapp create `
    --name $webAppName `
    --plan $appServicePlanName `
    --resource-group $ResourceGroupName
