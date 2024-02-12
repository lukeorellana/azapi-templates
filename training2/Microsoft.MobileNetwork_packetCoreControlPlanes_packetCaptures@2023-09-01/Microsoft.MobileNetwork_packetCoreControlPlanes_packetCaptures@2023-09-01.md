```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/packetCoreControlPlanes/packetCaptures@2023-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      bytesToCapturePerPacket = int
      networkInterfaces = [
        "string"
      ]
      timeLimitInSeconds = int
      totalBytesPerSession = int
    }
  })
}

```

### packetCoreControlPlanes/packetCaptures

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:packetCoreControlPlanes |
| properties | Packet capture session properties. Packet capture file(s) derived from the name of this session will be uploaded to the Storage Account Container URL in the packet core control plane properties | PacketCapturePropertiesFormat(required) |


### PacketCapturePropertiesFormat

| Name | Description | Value |
|-|-|-|
| bytesToCapturePerPacket | Number of bytes captured per packet, the remaining bytes are truncated. The default "0" means the entire packet is captured. | intConstraints:Min value = 0Max value = 4294967295 |
| networkInterfaces | List of network interfaces to capture on. | string[]Constraints:Min length = 1 |
| timeLimitInSeconds | Maximum duration of the capture session in seconds. | intConstraints:Min value = 5Max value = 18000 |
| totalBytesPerSession | Maximum size of the capture output. | intConstraints:Min value = 1000Max value = 4294967295 |


