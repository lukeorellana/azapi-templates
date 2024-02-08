```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/batchEndpoints@2023-10-01"
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
      authMode = "string"
      defaults = {
        deploymentName = "string"
      }
      description = "string"
      keys = {
        primaryKey = "string"
        secondaryKey = "string"
        primaryKey = "string"
        secondaryKey = "string"
        primaryKey = "string"
        secondaryKey = "string"
      }
      properties = {
        {customized property} = "string"
        {customized property} = "string"
      }
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
  })
}

```

### workspaces/batchEndpoints

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Sku details required for ARM contract for Autoscaling. | Sku |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| identity | Managed service identity (system assigned and/or user assigned identities) | ManagedServiceIdentity |
| properties | [Required] Additional attributes of the entity. | BatchEndpointProperties(required) |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### BatchEndpointProperties

| Name | Description | Value |
|-|-|-|
| authMode | [Required] Use 'Key' for key based authentication and 'AMLToken' for Azure Machine Learning token-based authentication. 'Key' doesn't expire but 'AMLToken' does. | 'AADToken''AMLToken''Key' (required) |
| defaults | Default values for Batch Endpoint | BatchEndpointDefaults |
| description | Description of the inference endpoint. | string |
| keys | EndpointAuthKeys to set initially on an Endpoint.This property will always be returned as null. AuthKey values must be retrieved using the ListKeys API. | EndpointAuthKeys |
| properties | Property dictionary. Properties can be added, but not removed or altered. | EndpointPropertiesBaseProperties |


### BatchEndpointDefaults

| Name | Description | Value |
|-|-|-|
| deploymentName | Name of the deployment that will be default for the endpoint.This deployment will end up getting 100% traffic when the endpoint scoring URL is invoked. | string |


### EndpointAuthKeys

| Name | Description | Value |
|-|-|-|
| primaryKey | The primary key. | string |
| secondaryKey | The secondary key. | string |
| primaryKey | The primary key. | string |
| secondaryKey | The secondary key. | string |
| primaryKey | The primary key. | string |
| secondaryKey | The secondary key. | string |


### EndpointPropertiesBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Free''Premium''Standard' |


