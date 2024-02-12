```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AgFoodPlatform/farmBeats/extensions@2021-09-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    additionalApiProperties = {}
    extensionVersion = "string"
  })
}

```

### farmBeats/extensions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:farmBeats |
| additionalApiProperties | Additional Api Properties. | object |
| extensionVersion | Extension Version. | string |


