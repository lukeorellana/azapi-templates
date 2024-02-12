```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationalInsights/queryPacks/queries@2019-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      body = "string"
      description = "string"
      displayName = "string"
      related = {
        categories = [
          "string"
        ]
        resourceTypes = [
          "string"
        ]
        solutions = [
          "string"
        ]
      }
      tags = {}
    }
  })
}

```

### queryPacks/queries

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:queryPacks |
| properties | Properties that define an Log Analytics QueryPack-Query resource. | LogAnalyticsQueryPackQueryProperties |


### LogAnalyticsQueryPackQueryProperties

| Name | Description | Value |
|-|-|-|
| body | Body of the query. | string (required) |
| description | Description of the query. | string |
| displayName | Unique display name for your query within the Query Pack. | string (required) |
| properties | Additional properties that can be set for the query. | For Bicep, you can use theany()function. |
| related | The related metadata items for the function. | LogAnalyticsQueryPackQueryPropertiesRelated |
| tags | Tags associated with the query. | object |


### LogAnalyticsQueryPackQueryPropertiesRelated

| Name | Description | Value |
|-|-|-|
| categories | The related categories for the function. | string[] |
| resourceTypes | The related resource types for the function. | string[] |
| solutions | The related Log Analytics solutions for the function. | string[] |


