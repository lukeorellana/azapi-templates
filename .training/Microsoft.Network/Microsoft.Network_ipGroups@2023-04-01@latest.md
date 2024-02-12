```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/ipGroups@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      ipAddresses = [
        "string"
      ]
    }
  })
}

```

### ipGroups

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the IpGroups. | IpGroupPropertiesFormat |


### IpGroupPropertiesFormat

| Name | Description | Value |
|-|-|-|
| ipAddresses | IpAddresses/IpAddressPrefixes in the IpGroups resource. | string[] |


