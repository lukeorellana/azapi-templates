```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/connectedEnvironments/storages@2023-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureFile = {
        accessMode = "string"
        accountKey = "string"
        accountName = "string"
        shareName = "string"
      }
    }
  })
}

```

### connectedEnvironments/storages

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:connectedEnvironments |
| properties | Storage properties | ConnectedEnvironmentStorageProperties |


### ConnectedEnvironmentStorageProperties

| Name | Description | Value |
|-|-|-|
| azureFile | Azure file properties | AzureFileProperties |


### AzureFileProperties

| Name | Description | Value |
|-|-|-|
| accessMode | Access mode for storage | 'ReadOnly''ReadWrite' |
| accountKey | Storage account key for azure file. | string |
| accountName | Storage account name for azure file. | string |
| shareName | Azure file share name. | string |


