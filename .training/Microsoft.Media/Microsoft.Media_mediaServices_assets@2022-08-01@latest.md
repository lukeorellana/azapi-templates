```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaServices/assets@2022-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      alternateId = "string"
      container = "string"
      description = "string"
      storageAccountName = "string"
    }
  })
}

```

### mediaServices/assets

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:mediaServices |
| properties | The resource properties. | AssetProperties |


### AssetProperties

| Name | Description | Value |
|-|-|-|
| alternateId | The alternate ID of the Asset. | string |
| container | The name of the asset blob container. | string |
| description | The Asset description. | string |
| storageAccountName | The name of the storage account. | string |


