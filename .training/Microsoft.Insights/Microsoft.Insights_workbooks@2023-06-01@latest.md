```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/workbooks@2023-06-01"
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
      category = "string"
      description = "string"
      displayName = "string"
      serializedData = "string"
      sourceId = "string"
      storageUri = "string"
      tags = [
        "string"
      ]
      version = "string"
    }
    kind = "shared"
    etag = "string"
  })
}

```

### workbooks

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | The kind of workbook. Only valid value is shared. | 'shared' |
| etag | Resource etag | string |
| identity | Identity used for BYOS | WorkbookResourceIdentity |
| properties | Metadata describing a workbook for an Azure resource. | WorkbookProperties |


### WorkbookResourceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | object |


### WorkbookProperties

| Name | Description | Value |
|-|-|-|
| category | Workbook category, as defined by the user at creation time. | string (required) |
| description | The description of the workbook. | string |
| displayName | The user-defined name (display name) of the workbook. | string (required) |
| serializedData | Configuration of this particular workbook. Configuration data is a string containing valid JSON | string (required) |
| sourceId | ResourceId for a source resource. | string |
| storageUri | The resourceId to the storage account when bring your own storage is used | string |
| tags | Being deprecated, please use the other tags field | string[] |
| version | Workbook schema version format, like 'Notebook/1.0', which should match the workbook in serializedData | string |


