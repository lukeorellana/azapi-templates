```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/capacityReservationGroups@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
    zones = [
      "string"
    ]
  })
}

```

### capacityReservationGroups

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| properties | capacity reservation group Properties. | CapacityReservationGroupProperties |
| zones | Availability Zones to use for this capacity reservation group. The zones can be assigned only during creation. If not provided, the group supports only regional resources in the region. If provided, enforces each capacity reservation in the group to be in one of the zones. | string[] |


