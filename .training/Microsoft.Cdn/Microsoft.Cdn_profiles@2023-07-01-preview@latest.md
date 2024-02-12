```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles@2023-07-01-preview"
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
      originResponseTimeoutSeconds = int
    }
    sku = {
      name = "string"
    }
  })
}

```

### profiles

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Alphanumerics and hyphens.Start and end with alphanumeric. |
| location | Resource location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The pricing tier (defines Azure Front Door Standard or Premium or a CDN provider, feature list and rate) of the profile. | Sku(required) |
| identity | Managed service identity (system assigned and/or user assigned identities). | ManagedServiceIdentity |
| properties | The JSON object that contains the properties required to create a profile. | ProfileProperties |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### ProfileProperties

| Name | Description | Value |
|-|-|-|
| originResponseTimeoutSeconds | Send and receive timeout on forwarding request to the origin. When timeout is reached, the request fails and returns. | intConstraints:Min value = 16 |


### Sku

| Name | Description | Value |
|-|-|-|
| name | Name of the pricing tier. | 'Custom_Verizon''Premium_AzureFrontDoor''Premium_Verizon''StandardPlus_955BandWidth_ChinaCdn''StandardPlus_AvgBandWidth_ChinaCdn''StandardPlus_ChinaCdn''Standard_955BandWidth_ChinaCdn''Standard_Akamai''Standard_AvgBandWidth_ChinaCdn''Standard_AzureFrontDoor''Standard_ChinaCdn''Standard_Microsoft''Standard_Verizon' |


