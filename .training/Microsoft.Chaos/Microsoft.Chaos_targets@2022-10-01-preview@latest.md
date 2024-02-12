```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Chaos/targets@2022-10-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {}
  })
}

```

### targets

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Location of the target resource. | string |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | The properties of the target resource. | object (required) |


