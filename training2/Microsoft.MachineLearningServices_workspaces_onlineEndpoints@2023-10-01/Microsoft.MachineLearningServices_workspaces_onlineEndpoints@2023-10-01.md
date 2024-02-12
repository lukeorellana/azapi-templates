```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/onlineEndpoints@2023-10-01"
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
      compute = "string"
      description = "string"
      keys = {
        primaryKey = "string"
        secondaryKey = "string"
        primaryKey = "string"
        secondaryKey = "string"
        primaryKey = "string"
        secondaryKey = "string"
      }
      mirrorTraffic = {
        {customized property} = int
      }
      properties = {
        {customized property} = "string"
        {customized property} = "string"
      }
      publicNetworkAccess = "string"
      traffic = {
        {customized property} = int
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

### workspaces/onlineEndpoints

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Sku details required for ARM contract for Autoscaling. | Sku |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| identity | Managed service identity (system assigned and/or user assigned identities) | ManagedServiceIdentity |
| properties | [Required] Additional attributes of the entity. | OnlineEndpointProperties(required) |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### OnlineEndpointProperties

| Name | Description | Value |
|-|-|-|
| authMode | [Required] Use 'Key' for key based authentication and 'AMLToken' for Azure Machine Learning token-based authentication. 'Key' doesn't expire but 'AMLToken' does. | 'AADToken''AMLToken''Key' (required) |
| compute | ARM resource ID of the compute if it exists.optional | string |
| description | Description of the inference endpoint. | string |
| keys | EndpointAuthKeys to set initially on an Endpoint.This property will always be returned as null. AuthKey values must be retrieved using the ListKeys API. | EndpointAuthKeys |
| mirrorTraffic | Percentage of traffic to be mirrored to each deployment without using returned scoring. Traffic values need to sum to utmost 50. | OnlineEndpointMirrorTraffic |
| properties | Property dictionary. Properties can be added, but not removed or altered. | EndpointPropertiesBaseProperties |
| publicNetworkAccess | Set to "Enabled" for endpoints that should allow public access when Private Link is enabled. | 'Disabled''Enabled' |
| traffic | Percentage of traffic from endpoint to divert to each deployment. Traffic values need to sum to 100. | OnlineEndpointTraffic |


### EndpointAuthKeys

| Name | Description | Value |
|-|-|-|
| primaryKey | The primary key. | string |
| secondaryKey | The secondary key. | string |
| primaryKey | The primary key. | string |
| secondaryKey | The secondary key. | string |
| primaryKey | The primary key. | string |
| secondaryKey | The secondary key. | string |


### OnlineEndpointMirrorTraffic

| Name | Description | Value |
|-|-|-|
| {customized property} |  | int |


### EndpointPropertiesBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |


### OnlineEndpointTraffic

| Name | Description | Value |
|-|-|-|
| {customized property} |  | int |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Free''Premium''Standard' |


