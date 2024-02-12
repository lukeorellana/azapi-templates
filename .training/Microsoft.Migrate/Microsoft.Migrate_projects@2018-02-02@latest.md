```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/projects@2018-02-02"
  name = "string"
  location = "string"
  parent_id = "string"
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      customerWorkspaceId = "string"
      customerWorkspaceLocation = "string"
      provisioningState = "string"
    }
    eTag = "string"
  })
}

```

### projects

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Azure location in which project is created. | string |
| tags | Tags provided by Azure Tagging service. | For Bicep, you can use theany()function. |
| eTag | For optimistic concurrency control. | string |
| properties | Properties of the project. | ProjectProperties |


### ProjectProperties

| Name | Description | Value |
|-|-|-|
| customerWorkspaceId | ARM ID of the Service Map workspace created by user. | string |
| customerWorkspaceLocation | Location of the Service Map workspace created by user. | string |
| provisioningState | Provisioning state of the project. | 'Accepted''Creating''Deleting''Failed''Moving''Succeeded' |


