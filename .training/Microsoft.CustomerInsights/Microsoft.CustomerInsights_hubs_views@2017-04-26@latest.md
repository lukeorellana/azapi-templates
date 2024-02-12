```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs/views@2017-04-26"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      definition = "string"
      displayName = {}
      userId = "string"
    }
  })
}

```

### hubs/views

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-512Valid characters:Alphanumerics and underscores.Start with letter. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hubs |
| properties | The view in Customer 360 web application. | View |


### View

| Name | Description | Value |
|-|-|-|
| definition | View definition. | string (required) |
| displayName | Localized display name for the view. | object |
| userId | the user ID. | string |


