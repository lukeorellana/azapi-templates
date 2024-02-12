```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationalInsights/workspaces@2022-10-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      defaultDataCollectionRuleResourceId = "string"
      features = {
        clusterResourceId = "string"
        disableLocalAuth = bool
        enableDataExport = bool
        enableLogAccessUsingOnlyResourcePermissions = bool
        immediatePurgeDataOn30Days = bool
      }
      forceCmkForQuery = bool
      publicNetworkAccessForIngestion = "string"
      publicNetworkAccessForQuery = "string"
      retentionInDays = int
      sku = {
        capacityReservationLevel = int
        name = "string"
      }
      workspaceCapping = {
        dailyQuotaGb = int
      }
    }
    etag = "string"
  })
}

```

### workspaces

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 4-63Valid characters:Alphanumerics and hyphens.Start and end with alphanumeric. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| etag | The etag of the workspace. | string |
| identity | The identity of the resource. | Identity |
| properties | Workspace properties. | WorkspaceProperties |


### Identity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity. | 'None''SystemAssigned''UserAssigned' (required) |
| userAssignedIdentities | The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### WorkspaceProperties

| Name | Description | Value |
|-|-|-|
| defaultDataCollectionRuleResourceId | The resource ID of the default Data Collection Rule to use for this workspace. Expected format is - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/dataCollectionRules/{dcrName}. | string |
| features | Workspace features. | WorkspaceFeatures |
| forceCmkForQuery | Indicates whether customer managed storage is mandatory for query management. | bool |
| publicNetworkAccessForIngestion | The network access type for accessing Log Analytics ingestion. | 'Disabled''Enabled' |
| publicNetworkAccessForQuery | The network access type for accessing Log Analytics query. | 'Disabled''Enabled' |
| retentionInDays | The workspace data retention in days. Allowed values are per pricing plan. See pricing tiers documentation for details. | int |
| sku | The SKU of the workspace. | WorkspaceSku |
| workspaceCapping | The daily volume cap for ingestion. | WorkspaceCapping |


### WorkspaceFeatures

| Name | Description | Value |
|-|-|-|
| clusterResourceId | Dedicated LA cluster resourceId that is linked to the workspaces. | string |
| disableLocalAuth | Disable Non-AAD based Auth. | bool |
| enableDataExport | Flag that indicate if data should be exported. | bool |
| enableLogAccessUsingOnlyResourcePermissions | Flag that indicate which permission to use - resource or workspace or both. | bool |
| immediatePurgeDataOn30Days | Flag that describes if we want to remove the data after 30 days. | bool |


### WorkspaceSku

| Name | Description | Value |
|-|-|-|
| capacityReservationLevel | The capacity reservation level in GB for this workspace, when CapacityReservation sku is selected. | int |
| name | The name of the SKU. | 'CapacityReservation''Free''LACluster''PerGB2018''PerNode''Premium''Standalone''Standard' (required) |


### WorkspaceCapping

| Name | Description | Value |
|-|-|-|
| dailyQuotaGb | The workspace daily quota for ingestion. | int |


