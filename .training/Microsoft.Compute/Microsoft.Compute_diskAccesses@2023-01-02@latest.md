```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/diskAccesses@2023-01-02"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

### diskAccesses

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| extendedLocation | The extended location where the disk access will be created. Extended location cannot be changed. | ExtendedLocation |
| properties |  | DiskAccessProperties |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'EdgeZone' |


