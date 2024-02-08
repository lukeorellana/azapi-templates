```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/assessmentProjects@2019-10-01"
  name = "string"
  location = "string"
  parent_id = "string"
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      assessmentSolutionId = "string"
      customerStorageAccountArmId = "string"
      customerWorkspaceId = "string"
      customerWorkspaceLocation = "string"
      projectStatus = "string"
      publicNetworkAccess = "string"
    }
    eTag = "string"
  })
}

```

### assessmentProjects

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
| assessmentSolutionId | Assessment solution ARM id tracked by Microsoft.Migrate/migrateProjects. | string |
| customerStorageAccountArmId | The ARM id of the storage account used for interactions when public access is disabled. | string |
| customerWorkspaceId | The ARM id of service map workspace created by customer. | string |
| customerWorkspaceLocation | Location of service map workspace created by customer. | string |
| projectStatus | Assessment project status. | 'Active''Inactive' |
| publicNetworkAccess | This value can be set to 'enabled' to avoid breaking changes on existing customer resources and templates. If set to 'disabled', traffic over public interface is not allowed, and private endpoint connections would be the exclusive access method. | string |


