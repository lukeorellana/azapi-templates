```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/clusters@2022-12-01"
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
      aadApplicationObjectId = "string"
      aadClientId = "string"
      aadServicePrincipalObjectId = "string"
      aadTenantId = "string"
      cloudManagementEndpoint = "string"
      desiredProperties = {
        diagnosticLevel = "string"
        windowsServerSubscription = "string"
      }
      softwareAssuranceProperties = {
        softwareAssuranceIntent = "string"
        softwareAssuranceStatus = "string"
      }
    }
  })
}

```

### clusters

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | Identity of Cluster resource | ManagedServiceIdentity |
| properties | Cluster properties. | ClusterProperties |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | object |


### ClusterProperties

| Name | Description | Value |
|-|-|-|
| aadApplicationObjectId | Object id of cluster AAD identity. | string |
| aadClientId | App id of cluster AAD identity. | string |
| aadServicePrincipalObjectId | Id of cluster identity service principal. | string |
| aadTenantId | Tenant id of cluster AAD identity. | string |
| cloudManagementEndpoint | Endpoint configured for management from the Azure portal. | string |
| desiredProperties | Desired properties of the cluster. | ClusterDesiredProperties |
| softwareAssuranceProperties | Software Assurance properties of the cluster. | SoftwareAssuranceProperties |


### ClusterDesiredProperties

| Name | Description | Value |
|-|-|-|
| diagnosticLevel | Desired level of diagnostic data emitted by the cluster. | 'Basic''Enhanced''Off' |
| windowsServerSubscription | Desired state of Windows Server Subscription. | 'Disabled''Enabled' |


### SoftwareAssuranceProperties

| Name | Description | Value |
|-|-|-|
| softwareAssuranceIntent | Customer Intent for Software Assurance Benefit. | 'Disable''Enable' |
| softwareAssuranceStatus | Status of the Software Assurance for the cluster. | 'Disabled''Enabled' |


