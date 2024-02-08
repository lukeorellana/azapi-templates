```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/apps/bindings@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      bindingParameters = {}
      key = "string"
      resourceId = "string"
    }
  })
}

```

### Spring/apps/bindings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:apps |
| properties | Properties of the Binding resource | BindingResourceProperties |


### BindingResourceProperties

| Name | Description | Value |
|-|-|-|
| bindingParameters | Binding parameters of the Binding resource | object |
| key | The key of the bound resource | string |
| resourceId | The Azure resource id of the bound resource | string |


