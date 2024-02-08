```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiCenter/services/workspaces/apis/versions@2024-03-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      lifecycleStage = "string"
      title = "string"
    }
  })
}

```

### services/workspaces/apis/versions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:apis |
| properties | API version properties entity. | ApiVersionProperties |


### ApiVersionProperties

| Name | Description | Value |
|-|-|-|
| lifecycleStage | Current lifecycle stage of the API. | 'deprecated''design''development''preview''production''retired''testing' (required) |
| title | API version title. | string (required)Constraints:Min length = 1Max length = 50 |


