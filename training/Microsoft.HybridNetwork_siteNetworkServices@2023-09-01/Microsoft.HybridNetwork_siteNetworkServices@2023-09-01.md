```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridNetwork/siteNetworkServices@2023-09-01"
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
      desiredStateConfigurationGroupValueReferences = {
        {customized property} = {
          id = "string"
        }
      }
      managedResourceGroupConfiguration = {
        location = "string"
        name = "string"
      }
      networkServiceDesignVersionResourceReference = {
        idType = "string"
        // For remaining properties, see DeploymentResourceIdReference objects
      }
      siteReference = {
        id = "string"
      }
    }
    sku = {
      name = "string"
    }
  })
}

```

### siteNetworkServices

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Sku of the site network service. | Sku |
| identity | The managed identity of the Site network service, if configured. | ManagedServiceIdentity |
| properties | Site network service properties. | SiteNetworkServicePropertiesFormat |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### SiteNetworkServicePropertiesFormat

| Name | Description | Value |
|-|-|-|
| desiredStateConfigurationGroupValueReferences | The goal state of the site network service resource. This has references to the configuration group value objects that describe the desired state of the site network service. | SiteNetworkServicePropertiesFormatDesiredStateConfig... |
| managedResourceGroupConfiguration | Managed resource group configuration. | ManagedResourceGroupConfiguration |
| networkServiceDesignVersionResourceReference | The network service design version resource reference. | DeploymentResourceIdReference |
| siteReference | The site details | ReferencedResource |


### SiteNetworkServicePropertiesFormatDesiredStateConfig...

| Name | Description | Value |
|-|-|-|
| {customized property} |  | ReferencedResource |


### ReferencedResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### ManagedResourceGroupConfiguration

| Name | Description | Value |
|-|-|-|
| location | Managed resource group location. | string |
| name | Managed resource group name. | string |


### DeploymentResourceIdReference

| Name | Description | Value |
|-|-|-|
| idType | Set the object type | OpenSecret(required) |


### OpenDeploymentResourceReference

| Name | Description | Value |
|-|-|-|
| idType | The resource reference arm id type. | 'Open' (required) |
| id | Resource ID. | string |


### SecretDeploymentResourceReference

| Name | Description | Value |
|-|-|-|
| idType | The resource reference arm id type. | 'Secret' (required) |
| id | Resource ID. | stringConstraints:Sensitive value. Pass in as a secure parameter. |


### Sku

| Name | Description | Value |
|-|-|-|
| name | Name of this Sku | 'Basic''Standard' (required) |


