```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/contentTypes/contentItems@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {}
  })
}

```

### service/contentTypes/contentItems

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:contentTypes |
| properties | Properties of the content item. | ContentItemContractProperties |


### ContentItemContractProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | For Bicep, you can use theany()function. |

