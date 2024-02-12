```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/devOpsAuditingSettings@2022-05-01-preview"
  name = "Default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      isAzureMonitorTargetEnabled = bool
      isManagedIdentityInUse = bool
      state = "string"
      storageAccountAccessKey = "string"
      storageAccountSubscriptionId = "string"
      storageEndpoint = "string"
    }
  })
}

```

### servers/devOpsAuditingSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'Default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | ServerDevOpsAuditSettingsProperties |


### ServerDevOpsAuditSettingsProperties

| Name | Description | Value |
|-|-|-|
| isAzureMonitorTargetEnabled | Specifies whether DevOps audit events are sent to Azure Monitor.In order to send the events to Azure Monitor, specify 'State' as 'Enabled' and 'IsAzureMonitorTargetEnabled' as true.When using REST API to configure DevOps audit, Diagnostic Settings with 'DevOpsOperationsAudit' diagnostic logs category on the master database should be also created.Diagnostic Settings URI format:PUThttps://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/master/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-previewFor more information, seeDiagnostic Settings REST APIorDiagnostic Settings PowerShell | bool |
| isManagedIdentityInUse | Specifies whether Managed Identity is used to access blob storage | bool |
| state | Specifies the state of the audit. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required. | 'Disabled''Enabled' (required) |
| storageAccountAccessKey | Specifies the identifier key of the auditing storage account.If state is Enabled and storageEndpoint is specified, not specifying the storageAccountAccessKey will use SQL server system-assigned managed identity to access the storage.Prerequisites for using managed identity authentication:1. Assign SQL Server a system-assigned managed identity in Azure Active Directory (AAD).2. Grant SQL Server identity access to the storage account by adding 'Storage Blob Data Contributor' RBAC role to the server identity.For more information, seeAuditing to storage using Managed Identity authentication | string |
| storageAccountSubscriptionId | Specifies the blob storage subscription Id. | string |
| storageEndpoint | Specifies the blob storage endpoint (e.g.https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required. | string |


