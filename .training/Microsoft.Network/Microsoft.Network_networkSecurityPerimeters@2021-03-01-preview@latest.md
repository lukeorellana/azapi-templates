```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkSecurityPerimeters@2021-03-01-preview"
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
      displayName = "string"
    }
  })
}

```

### networkSecurityPerimeters

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | The network security perimeter properties | NetworkSecurityPerimeterProperties |


### NetworkSecurityPerimeterProperties

| Name | Description | Value |
|-|-|-|
| description | A description of the network security perimeter. | string |
| displayName | A friendly name for the network security perimeter. | string |


