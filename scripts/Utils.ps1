function RunCmd {
    [CmdletBinding(SupportsShouldProcess)]
    param(
        [Parameter(Mandatory)]
        [String] $CommandName,

        [Parameter(ValueFromRemainingArguments)]
        [Object[]] $CommandArguments
    )

    $commandString = "$CommandName $CommandArguments"
    Write-Verbose "Running: $CommandString"

    if ($PSCmdlet.ShouldProcess($commandString)) {
        & $CommandName @CommandArguments

        if ($LASTEXITCODE -ne 0) {
            throw "'$CommandString' exited with error code $LASTEXITCODE"
        }
    }
}
