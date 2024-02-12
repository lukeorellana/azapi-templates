```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Maps/accounts/creators@2023-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      storageUnits = int
    }
  })
}

```

### accounts/creators

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:accounts |
| properties | The Creator resource properties. | CreatorProperties(required) |


### CreatorProperties

| Name | Description | Value |
|-|-|-|
| storageUnits | The storage units to be allocated. Integer values from 1 to 100, inclusive. | int (required)Constraints:Min value = 1Max value = 100 |


