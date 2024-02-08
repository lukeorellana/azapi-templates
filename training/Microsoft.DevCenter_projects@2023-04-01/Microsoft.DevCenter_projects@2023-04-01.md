```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevCenter/projects@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      description = "string"
      devCenterId = "string"
      maxDevBoxesPerUser = int
    }
  })
}

```

### projects

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of a project. | ProjectProperties |


### ProjectProperties

| Name | Description | Value |
|-|-|-|
| description | Description of the project. | string |
| devCenterId | Resource Id of an associated DevCenter | string |
| maxDevBoxesPerUser | When specified, limits the maximum number of Dev Boxes a single user can create across all pools in the project. This will have no effect on existing Dev Boxes when reduced. | int |


