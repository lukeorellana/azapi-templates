```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/workloadNetworks/dhcpConfigurations@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      displayName = "string"
      revision = int
      dhcpType = "string"
      // For remaining properties, see WorkloadNetworkDhcpEntity objects
    }
  })
}

```

### privateClouds/workloadNetworks/dhcpConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: workloadNetworks |
| properties | DHCP properties. | WorkloadNetworkDhcpEntity |


### WorkloadNetworkDhcpEntity

| Name | Description | Value |
|-|-|-|
| displayName | Display name of the DHCP entity. | string |
| revision | NSX revision number. | int |
| dhcpType | Set the object type | RELAYSERVER(required) |


### WorkloadNetworkDhcpRelay

| Name | Description | Value |
|-|-|-|
| dhcpType | Type of DHCP: SERVER or RELAY. | 'RELAY' (required) |
| serverAddresses | DHCP Relay Addresses. Max 3. | string[] |


### WorkloadNetworkDhcpServer

| Name | Description | Value |
|-|-|-|
| dhcpType | Type of DHCP: SERVER or RELAY. | 'SERVER' (required) |
| leaseTime | DHCP Server Lease Time. | int |
| serverAddress | DHCP Server Address. | string |


