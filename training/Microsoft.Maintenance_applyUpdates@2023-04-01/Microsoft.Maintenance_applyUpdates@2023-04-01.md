```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Maintenance/applyUpdates@2023-04-01"
  name = "default"
  parent_id = "string"
}

```

### applyUpdates

| Name | Description | Value |
|-|-|-|
| name | The resource name | 'default' |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |


