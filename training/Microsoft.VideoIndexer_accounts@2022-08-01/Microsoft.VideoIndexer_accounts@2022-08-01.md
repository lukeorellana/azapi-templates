```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.VideoIndexer/accounts@2022-08-01"
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
      accountId = "string"
      mediaServices = {
        resourceId = "string"
        userAssignedIdentity = "string"
      }
    }
  })
}

```

### accounts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | Managed service identity (system assigned and/or user assigned identities) | ManagedServiceIdentity |
| properties | List of account properties | AccountPropertiesForPutRequest |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | object |


### AccountPropertiesForPutRequest

| Name | Description | Value |
|-|-|-|
| accountId | The account's data-plane ID. This can be set only when connecting an existing classic account | string |
| mediaServices | The media services details | MediaServicesForPutRequest |


### MediaServicesForPutRequest

| Name | Description | Value |
|-|-|-|
| resourceId | The media services resource id | string |
| userAssignedIdentity | The user assigned identity to be used to grant permissions | string |


