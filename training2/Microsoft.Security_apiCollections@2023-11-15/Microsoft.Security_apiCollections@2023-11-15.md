```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/apiCollections@2023-11-15"
  name = "string"
  parent_id = "string"
}

```

### apiCollections

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |


