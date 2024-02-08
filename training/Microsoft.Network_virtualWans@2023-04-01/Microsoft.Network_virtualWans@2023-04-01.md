```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualWans@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      allowBranchToBranchTraffic = bool
      allowVnetToVnetTraffic = bool
      disableVpnEncryption = bool
      type = "string"
    }
  })
}

```

### virtualWans

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the virtual WAN. | VirtualWanProperties |


### VirtualWanProperties

| Name | Description | Value |
|-|-|-|
| allowBranchToBranchTraffic | True if branch to branch traffic is allowed. | bool |
| allowVnetToVnetTraffic | True if Vnet to Vnet traffic is allowed. | bool |
| disableVpnEncryption | Vpn encryption to be disabled or not. | bool |
| type | The type of the VirtualWAN. | string |


