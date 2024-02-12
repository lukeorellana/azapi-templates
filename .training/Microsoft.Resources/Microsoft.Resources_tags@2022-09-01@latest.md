```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Resources/tags@2022-09-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      tags = {
        tagName1 = "tagValue1"
        tagName2 = "tagValue2"
      }
    }
  })
}

```

### tags

| Name | Description | Value |
|-|-|-|
| name | The resource name | 'default' |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | The set of tags. | Tags(required) |


### Tags

| Name | Description | Value |
|-|-|-|
| tags | Dictionary of {string} | object |


