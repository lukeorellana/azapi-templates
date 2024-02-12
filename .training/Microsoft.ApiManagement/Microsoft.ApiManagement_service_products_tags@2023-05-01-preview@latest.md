```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/products/tags@2023-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

### service/products/tags

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:products |


