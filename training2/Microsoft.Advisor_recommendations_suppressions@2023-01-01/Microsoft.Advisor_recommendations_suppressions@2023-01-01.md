```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Advisor/recommendations/suppressions@2023-01-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      suppressionId = "string"
      ttl = "string"
    }
  })
}

```

### recommendations/suppressions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:recommendations |
| properties | The properties of the suppression. | SuppressionProperties |


### SuppressionProperties

| Name | Description | Value |
|-|-|-|
| suppressionId | The GUID of the suppression. | string |
| ttl | The duration for which the suppression is valid. | string |


