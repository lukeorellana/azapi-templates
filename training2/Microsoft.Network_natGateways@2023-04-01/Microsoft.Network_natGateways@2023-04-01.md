```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/natGateways@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
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
    zones = [
      "string"
    ]
    sku = {
      name = "Standard"
    }
  })
}

```

### natGateways

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The nat gateway SKU. | NatGatewaySku |
| properties | Nat Gateway properties. | NatGatewayPropertiesFormat |
| zones | A list of availability zones denoting the zone in which Nat Gateway should be deployed. | string[] |


### NatGatewayPropertiesFormat

| Name | Description | Value |
|-|-|-|
| idleTimeoutInMinutes | The idle timeout of the nat gateway. | int |
| publicIpAddresses | An array of public ip addresses associated with the nat gateway resource. | SubResource[] |
| publicIpPrefixes | An array of public ip prefixes associated with the nat gateway resource. | SubResource[] |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### NatGatewaySku

| Name | Description | Value |
|-|-|-|
| name | Name of Nat Gateway SKU. | 'Standard' |


