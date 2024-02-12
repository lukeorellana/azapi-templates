```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/IpAllocations@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      allocationTags = {}
      ipamAllocationId = "string"
      prefix = "string"
      prefixLength = int
      prefixType = "string"
      type = "string"
    }
  })
}

```

### IpAllocations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the IpAllocation. | IpAllocationPropertiesFormat |


### IpAllocationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| allocationTags | IpAllocation tags. | object |
| ipamAllocationId | The IPAM allocation ID. | string |
| prefix | The address prefix for the IpAllocation. | string |
| prefixLength | The address prefix length for the IpAllocation. | int |
| prefixType | The address prefix Type for the IpAllocation. | 'IPv4''IPv6' |
| type | The type for the IpAllocation. | 'Hypernet''Undefined' |


