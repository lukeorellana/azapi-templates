```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/storages@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      storageType = "string"
      // For remaining properties, see StorageProperties objects
    }
  })
}

```

### Spring/storages

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:Spring |
| properties | Properties of the storage resource payload. | StorageProperties |


### StorageProperties

| Name | Description | Value |
|-|-|-|
| storageType | Set the object type | StorageAccount(required) |


### StorageAccount

| Name | Description | Value |
|-|-|-|
| storageType | The type of the storage. | 'StorageAccount' (required) |
| accountKey | The account key of the Azure Storage Account. | string (required) |
| accountName | The account name of the Azure Storage Account. | string (required) |


