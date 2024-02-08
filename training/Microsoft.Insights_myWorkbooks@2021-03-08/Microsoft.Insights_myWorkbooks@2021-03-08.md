```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/myWorkbooks@2021-03-08"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    identity_ids = []
  body = jsonencode({
    properties = {
      category = "string"
      displayName = "string"
      serializedData = "string"
      sourceId = "string"
      storageUri = "string"
      tags = [
        "string"
      ]
      version = "string"
    }
    kind = "string"
    etag = {}
      type =  "UserAssigned"
    }
  })
}

```

### myWorkbooks

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| kind | The kind of workbook. Choices are user and shared. | 'shared''user' |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| etag | Resource etag | object |
| identity | Identity used for BYOS | MyWorkbookManagedIdentity |
| properties | Metadata describing a workbook for an Azure resource. | MyWorkbookProperties |


### MyWorkbookManagedIdentity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'None''UserAssigned' |
| userAssignedIdentities | Customer Managed Identity | MyWorkbookUserAssignedIdentities |


### MyWorkbookProperties

| Name | Description | Value |
|-|-|-|
| category | Workbook category, as defined by the user at creation time. | string (required) |
| displayName | The user-defined name of the private workbook. | string (required) |
| serializedData | Configuration of this particular private workbook. Configuration data is a string containing valid JSON | string (required) |
| sourceId | Optional resourceId for a source resource. | string |
| storageUri | BYOS Storage Account URI | string |
| tags | A list of 0 or more tags that are associated with this private workbook definition | string[] |
| version | This instance's version of the data model. This can change as new features are added that can be marked private workbook. | string |


