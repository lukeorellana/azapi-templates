```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/packetCoreControlPlanes/packetCoreDataPlanes@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      userPlaneAccessInterface = {
        ipv4Address = "string"
        ipv4Gateway = "string"
        ipv4Subnet = "string"
        name = "string"
      }
      userPlaneAccessVirtualIpv4Addresses = [
        "string"
      ]
    }
  })
}

```

### packetCoreControlPlanes/packetCoreDataPlanes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-64Valid characters:Alphanumeric, underscores and hyphens.Start with alphanumeric. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:packetCoreControlPlanes |
| properties | Packet core data plane Properties. | PacketCoreDataPlanePropertiesFormat(required) |


### PacketCoreDataPlanePropertiesFormat

| Name | Description | Value |
|-|-|-|
| userPlaneAccessInterface | The user plane interface on the access network. For 5G networks, this is the N3 interface. For 4G networks, this is the S1-U interface. | InterfaceProperties(required) |
| userPlaneAccessVirtualIpv4Addresses | The virtual IP address(es) for the user plane on the access network in a High Availability (HA) system. In an HA deployment the access network router should be configured to forward traffic for this address to the control plane access interface on the active or standby node. In non-HA system this list should be omitted or empty. | string[]Constraints:Pattern =^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$ |


### InterfaceProperties

| Name | Description | Value |
|-|-|-|
| ipv4Address | The IPv4 address. | stringConstraints:Pattern =^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$ |
| ipv4Gateway | The default IPv4 gateway (router). | stringConstraints:Pattern =^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$ |
| ipv4Subnet | The IPv4 subnet. | stringConstraints:Pattern =^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2]))$ |
| name | The logical name for this interface. This should match one of the interfaces configured on your Azure Stack Edge device. | string |


