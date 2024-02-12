```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/packetCoreControlPlanes/packetCoreDataPlanes/attachedDataNetworks@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      dnsAddresses = [
        "string"
      ]
      naptConfiguration = {
        enabled = "string"
        pinholeLimits = int
        pinholeTimeouts = {
          icmp = int
          tcp = int
          udp = int
        }
        portRange = {
          maxPort = int
          minPort = int
        }
        portReuseHoldTime = {
          tcp = int
          udp = int
        }
      }
      userEquipmentAddressPoolPrefix = "string"
      userEquipmentStaticAddressPoolPrefix = "string"
      userPlaneDataInterface = {
        ipv4Address = "string"
        ipv4Gateway = "string"
        ipv4Subnet = "string"
        name = "string"
      }
    }
  })
}

```

### packetCoreControlPlanes/packetCoreDataPlanes/attache...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-64Valid characters:Alphanumeric, hyphens and a period/dot (.)Start and end with alphanumeric.Note: A period/dot (.) must be followed by an alphanumeric character. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:packetCoreDataPlanes |
| properties | Attached data network properties. | AttachedDataNetworkPropertiesFormat(required) |


### AttachedDataNetworkPropertiesFormat

| Name | Description | Value |
|-|-|-|
| dnsAddresses | The DNS servers to signal to UEs to use for this attached data network. This configuration is mandatory - if you don't want DNS servers, you must provide an empty array. | string[] (required)Constraints:Pattern =^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$ |
| naptConfiguration | The network address and port translation (NAPT) configuration.If this is not specified, the attached data network will use a default NAPT configuration with NAPT enabled. | NaptConfiguration |
| userEquipmentAddressPoolPrefix | The user equipment (UE) address pool prefixes for the attached data network from which the packet core instance will dynamically assign IP addresses to UEs.The packet core instance assigns an IP address to a UE when the UE sets up a PDU session.You must define at least one of userEquipmentAddressPoolPrefix and userEquipmentStaticAddressPoolPrefix. If you define both, they must be of the same size. | stringConstraints:Min length = 1Pattern =^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2]))$"} |
| userEquipmentStaticAddressPoolPrefix | The user equipment (UE) address pool prefixes for the attached data network from which the packet core instance will assign static IP addresses to UEs.The packet core instance assigns an IP address to a UE when the UE sets up a PDU session. The static IP address for a specific UE is set in StaticIPConfiguration on the corresponding SIM resource.At least one of userEquipmentAddressPoolPrefix and userEquipmentStaticAddressPoolPrefix must be defined. If both are defined, they must be of the same size. | stringConstraints:Min length = 1Pattern =^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2]))$"} |
| userPlaneDataInterface | The user plane interface on the data network. For 5G networks, this is the N6 interface. For 4G networks, this is the SGi interface. | InterfaceProperties(required) |


### NaptConfiguration

| Name | Description | Value |
|-|-|-|
| enabled | Whether NAPT is enabled for connections to this attached data network. | 'Disabled''Enabled' |
| pinholeLimits | Maximum number of UDP and TCP pinholes that can be open simultaneously on the core interface. For 5G networks, this is the N6 interface. For 4G networks, this is the SGi interface. | intConstraints:Min value = 1Max value = 65536 |
| pinholeTimeouts | Expiry times of inactive NAPT pinholes, in seconds. All timers must be at least 1 second. | PinholeTimeouts |
| portRange | Range of port numbers to use as translated ports on each translated address.If not specified and NAPT is enabled, this range defaults to 1,024 - 49,999.(Ports under 1,024 should not be used because these are special purpose ports reserved by IANA. Ports 50,000 and above are reserved for non-NAPT use.) | PortRange |
| portReuseHoldTime | The minimum time (in seconds) that will pass before a port that was used by a closed pinhole can be recycled for use by another pinhole. All hold times must be at least 1 second. | PortReuseHoldTimes |


### PinholeTimeouts

| Name | Description | Value |
|-|-|-|
| icmp | Pinhole timeout for ICMP pinholes in seconds. Default for ICMP Echo is 30 seconds. | intConstraints:Min value = 1 |
| tcp | Pinhole timeout for TCP pinholes in seconds. Default for TCP is 3 minutes. | intConstraints:Min value = 1 |
| udp | Pinhole timeout for UDP pinholes in seconds. Default for UDP is 30 seconds. | intConstraints:Min value = 1 |


### PortRange

| Name | Description | Value |
|-|-|-|
| maxPort | The maximum port number | intConstraints:Min value = 1024Max value = 65535 |
| minPort | The minimum port number | intConstraints:Min value = 1024Max value = 65535 |


### PortReuseHoldTimes

| Name | Description | Value |
|-|-|-|
| tcp | Minimum time in seconds that will pass before a TCP port that was used by a closed pinhole can be reused. Default for TCP is 2 minutes. | intConstraints:Min value = 1 |
| udp | Minimum time in seconds that will pass before a UDP port that was used by a closed pinhole can be reused. Default for UDP is 1 minute. | intConstraints:Min value = 1 |


### InterfaceProperties

| Name | Description | Value |
|-|-|-|
| ipv4Address | The IPv4 address. | stringConstraints:Pattern =^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$ |
| ipv4Gateway | The default IPv4 gateway (router). | stringConstraints:Pattern =^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$ |
| ipv4Subnet | The IPv4 subnet. | stringConstraints:Pattern =^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2]))$ |
| name | The logical name for this interface. This should match one of the interfaces configured on your Azure Stack Edge device. | string |


