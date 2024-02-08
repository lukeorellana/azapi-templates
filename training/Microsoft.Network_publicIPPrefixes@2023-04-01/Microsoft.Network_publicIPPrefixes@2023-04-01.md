```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/publicIPPrefixes@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      customIPPrefix = {
        id = "string"
      }
      ipTags = [
        {
          ipTagType = "string"
          tag = "string"
        }
      ]
      natGateway = {
        id = "string"
        location = "string"
        properties = {
          idleTimeoutInMinutes = int
          publicIpAddresses = [
            {
              id = "string"
            }
          ]
          publicIpPrefixes = [
            {
              id = "string"
            }
          ]
        }
        sku = {
          name = "Standard"
        }
        tags = {}
        zones = [
          "string"
        ]
      }
      prefixLength = int
      publicIPAddressVersion = "string"
    }
    zones = [
      "string"
    ]
    sku = {
      name = "Standard"
      tier = "string"
    }
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

### publicIPPrefixes

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The public IP prefix SKU. | PublicIPPrefixSku |
| extendedLocation | The extended location of the public ip address. | ExtendedLocation |
| properties | Public IP prefix properties. | PublicIPPrefixPropertiesFormat |
| zones | A list of availability zones denoting the IP allocated for the resource needs to come from. | string[] |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'EdgeZone' |


### PublicIPPrefixPropertiesFormat

| Name | Description | Value |
|-|-|-|
| customIPPrefix | The customIpPrefix that this prefix is associated with. | object |
| ipTags | The list of tags associated with the public IP prefix. | IpTag[] |
| natGateway | NatGateway of Public IP Prefix. | NatGateway |
| prefixLength | The Length of the Public IP Prefix. | int |
| publicIPAddressVersion | The public IP address version. | 'IPv4''IPv6' |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### IpTag

| Name | Description | Value |
|-|-|-|
| ipTagType | The IP tag type. Example: FirstPartyUsage. | string |
| tag | The value of the IP tag associated with the public IP. Example: SQL. | string |


### NatGateway

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Nat Gateway properties. | NatGatewayPropertiesFormat |
| sku | The nat gateway SKU. | NatGatewaySku |
| tags | Resource tags. | object |
| zones | A list of availability zones denoting the zone in which Nat Gateway should be deployed. | string[] |


### NatGatewayPropertiesFormat

| Name | Description | Value |
|-|-|-|
| idleTimeoutInMinutes | The idle timeout of the nat gateway. | int |
| publicIpAddresses | An array of public ip addresses associated with the nat gateway resource. | SubResource[] |
| publicIpPrefixes | An array of public ip prefixes associated with the nat gateway resource. | SubResource[] |


### NatGatewaySku

| Name | Description | Value |
|-|-|-|
| name | Name of Nat Gateway SKU. | 'Standard' |


### PublicIPPrefixSku

| Name | Description | Value |
|-|-|-|
| name | Name of a public IP prefix SKU. | 'Standard' |
| tier | Tier of a public IP prefix SKU. | 'Global''Regional' |


