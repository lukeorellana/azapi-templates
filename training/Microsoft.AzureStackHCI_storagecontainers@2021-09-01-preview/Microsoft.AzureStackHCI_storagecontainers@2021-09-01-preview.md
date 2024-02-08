```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/storagecontainers@2021-09-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      path = "string"
      provisioningState = "string"
      resourceName = "string"
    }
    extendedLocation = {
      name = "string"
      type = "string"
    }
  })
}

```

### storagecontainers

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| extendedLocation |  | StoragecontainersExtendedLocation |
| properties | Properties of a storage container resource | StoragecontainersProperties |


### StoragecontainersExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The extended location name. | string |
| type | The extended location type. | string |


### StoragecontainersProperties

| Name | Description | Value |
|-|-|-|
| path | Path of the storage container on the disk | string |
| provisioningState |  | string |
| resourceName | name of the object to be used in moc | string |


