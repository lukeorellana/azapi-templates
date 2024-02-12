```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/contentTypes@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      id = "string"
      name = "string"
      version = "string"
    }
  })
}

```

### service/contentTypes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Properties of the content type. | ContentTypeContractProperties |


### ContentTypeContractProperties

| Name | Description | Value |
|-|-|-|
| description | Content type description. | string |
| id | Content type identifier | string |
| name | Content type name. Must be 1 to 250 characters long. | string |
| schema | Content type schema. | For Bicep, you can use theany()function. |
| version | Content type version. | string |


