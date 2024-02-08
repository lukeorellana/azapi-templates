```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsResolvers@2022-07-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      virtualNetwork = {
        id = "string"
      }
    }
  })
}

```

### dnsResolvers

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the DNS resolver. | DnsResolverProperties(required) |


### DnsResolverProperties

| Name | Description | Value |
|-|-|-|
| virtualNetwork | The reference to the virtual network. This cannot be changed after creation. | SubResource(required) |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string (required) |


