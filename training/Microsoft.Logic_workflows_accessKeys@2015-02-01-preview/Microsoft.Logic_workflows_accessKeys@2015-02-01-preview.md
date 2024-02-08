```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logic/workflows/accessKeys@2015-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      notAfter = "string"
      notBefore = "string"
    }
  })
}

```

### workflows/accessKeys

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workflows |
| properties | Gets or sets the workflow access key properties. | WorkflowAccessKeyProperties |


### WorkflowAccessKeyProperties

| Name | Description | Value |
|-|-|-|
| notAfter | Gets or sets the not-after time. | string |
| notBefore | Gets or sets the not-before time. | string |


