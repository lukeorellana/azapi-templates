## Microsoft.ChangeAnalysis/profile@2020-04-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ChangeAnalysis/profile@2020-04-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  identity {
    type =  "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      notifications = {
        activationState = "string"
        azureMonitorWorkspaceProperties = {
          includeChangeDetails = "string"
          workspaceId = "string"
          workspaceResourceId = "string"
        }
      }
    }
    systemData = {}
  })
}

```

### profile

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The location where the resource is to be deployed. | string |
| identity | The identity block returned by ARM resource that supports managed identity. | ResourceIdentity |
| properties | The properties of a configuration profile. | ConfigurationProfileResourceProperties |
| systemData | Top level metadatahttps://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/common-api-contracts.md#system-metadata-for-all-azure-resources | SystemData |


### ResourceIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identities. | 'None''SystemAssigned' |


### ConfigurationProfileResourceProperties

| Name | Description | Value |
|-|-|-|
| notifications | Settings of change notification configuration for a subscription. | NotificationSettings |


### NotificationSettings

| Name | Description | Value |
|-|-|-|
| activationState | The state of notifications feature. | 'Disabled''Enabled''None' |
| azureMonitorWorkspaceProperties | Configuration properties of an Azure Monitor workspace that receives change notifications. | AzureMonitorWorkspaceProperties |


### AzureMonitorWorkspaceProperties

| Name | Description | Value |
|-|-|-|
| includeChangeDetails | The mode of includeChangeDetails feature. The flag configures whether to include or exclude content of the change before and after values. | 'Exclude''Include''None' |
| workspaceId | The Azure Monitor workspace ID - the unique identifier for the Log Analytics workspace. | string |
| workspaceResourceId | The Azure Monitor workspace ARM Resource ID. The resource ID should be in the following format: /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName} | string |
