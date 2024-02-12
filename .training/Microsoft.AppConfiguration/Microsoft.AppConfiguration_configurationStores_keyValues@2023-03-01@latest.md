```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppConfiguration/configurationStores/keyValues@2023-03-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      contentType = "string"
      tags = {}
      value = "string"
    }
  })
}

```

### configurationStores/keyValues

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:configurationStores |
| properties | All key-value properties. | KeyValueProperties |


### KeyValueProperties

| Name | Description | Value |
|-|-|-|
| contentType | The content type of the key-value's value.Providing a proper content-type can enable transformations of values when they are retrieved by applications. | string |
| tags | A dictionary of tags that can help identify what a key-value may be applicable for. | object |
| value | The value of the key-value. | string |


