```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridNetwork/networkFunctions@2023-09-01"
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
      allowSoftwareUpdate = bool
      networkFunctionDefinitionVersionResourceReference = {
        idType = "string"
        // For remaining properties, see DeploymentResourceIdReference objects
      }
      nfviId = "string"
      nfviType = "string"
      roleOverrideValues = [
        "string"
      ]
      configurationType = "string"
      // For remaining properties, see NetworkFunctionPropertiesFormat objects
    }
    etag = "string"
  })
}

```

### networkFunctions

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| etag | A unique read-only string that changes whenever the resource is updated. | string |
| identity | The managed identity of the network function. | ManagedServiceIdentity |
| properties | Network function properties. | NetworkFunctionPropertiesFormat |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### NetworkFunctionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| allowSoftwareUpdate | Indicates if software updates are allowed during deployment. | bool |
| networkFunctionDefinitionVersionResourceReference | The network function definition version resource reference. | DeploymentResourceIdReference |
| nfviId | The nfviId for the network function. | string |
| nfviType | The nfvi type for the network function. | 'AzureArcKubernetes''AzureCore''AzureOperatorNexus''Unknown' |
| roleOverrideValues | The role configuration override values from the user. | string[] |
| configurationType | Set the object type | OpenSecret(required) |


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


### NetworkFunctionValueWithoutSecrets

| Name | Description | Value |
|-|-|-|
| configurationType | The value which indicates if NF  values are secrets | 'Open' (required) |
| deploymentValues | The JSON-serialized deployment values from the user. | string |


### NetworkFunctionValueWithSecrets

| Name | Description | Value |
|-|-|-|
| configurationType | The value which indicates if NF  values are secrets | 'Secret' (required) |
| secretDeploymentValues | The JSON-serialized secret deployment values from the user. This contains secrets like passwords,keys etc | stringConstraints:Sensitive value. Pass in as a secure parameter. |


