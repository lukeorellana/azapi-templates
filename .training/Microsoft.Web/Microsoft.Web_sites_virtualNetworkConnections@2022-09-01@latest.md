```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/virtualNetworkConnections@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      certBlob = "string"
      dnsServers = "string"
      isSwift = bool
      vnetResourceId = "string"
    }
    kind = "string"
  })
}

```

### sites/virtualNetworkConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| properties | Core resource properties | VnetInfo |


### VnetInfo

| Name | Description | Value |
|-|-|-|
| certBlob | A certificate file (.cer) blob containing the public key of the private key used to authenticate aPoint-To-Site VPN connection. | string |
| dnsServers | DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses. | string |
| isSwift | Flag that is used to denote if this is VNET injection | bool |
| vnetResourceId | The Virtual Network's resource ID. | string |


