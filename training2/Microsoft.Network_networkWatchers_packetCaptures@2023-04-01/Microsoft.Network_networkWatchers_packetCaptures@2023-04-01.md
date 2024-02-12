```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkWatchers/packetCaptures@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      bytesToCapturePerPacket = int
      filters = [
        {
          localIPAddress = "string"
          localPort = "string"
          protocol = "string"
          remoteIPAddress = "string"
          remotePort = "string"
        }
      ]
      scope = {
        exclude = [
          "string"
        ]
        include = [
          "string"
        ]
      }
      storageLocation = {
        filePath = "string"
        storageId = "string"
        storagePath = "string"
      }
      target = "string"
      targetType = "string"
      timeLimitInSeconds = int
      totalBytesPerSession = int
    }
  })
}

```

### networkWatchers/packetCaptures

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkWatchers |
| properties | Properties of the packet capture. | PacketCaptureParametersOrPacketCaptureResultProperti...(required) |


### PacketCaptureParametersOrPacketCaptureResultProperti...

| Name | Description | Value |
|-|-|-|
| bytesToCapturePerPacket | Number of bytes captured per packet, the remaining bytes are truncated. | int |
| filters | A list of packet capture filters. | PacketCaptureFilter[] |
| scope | A list of AzureVMSS instances which can be included or excluded to run packet capture. If both included and excluded are empty, then the packet capture will run on all instances of AzureVMSS. | PacketCaptureMachineScope |
| storageLocation | The storage location for a packet capture session. | PacketCaptureStorageLocation(required) |
| target | The ID of the targeted resource, only AzureVM and AzureVMSS as target type are currently supported. | string (required) |
| targetType | Target type of the resource provided. | 'AzureVM''AzureVMSS' |
| timeLimitInSeconds | Maximum duration of the capture session in seconds. | int |
| totalBytesPerSession | Maximum size of the capture output. | int |


### PacketCaptureFilter

| Name | Description | Value |
|-|-|-|
| localIPAddress | Local IP Address to be filtered on. Notation: "127.0.0.1" for single address entry. "127.0.0.1-127.0.0.255" for range. "127.0.0.1;127.0.0.5"? for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null. | string |
| localPort | Local port to be filtered on. Notation: "80" for single port entry."80-85" for range. "80;443;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null. | string |
| protocol | Protocol to be filtered on. | 'Any''TCP''UDP' |
| remoteIPAddress | Local IP Address to be filtered on. Notation: "127.0.0.1" for single address entry. "127.0.0.1-127.0.0.255" for range. "127.0.0.1;127.0.0.5;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null. | string |
| remotePort | Remote port to be filtered on. Notation: "80" for single port entry."80-85" for range. "80;443;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null. | string |


### PacketCaptureMachineScope

| Name | Description | Value |
|-|-|-|
| exclude | List of AzureVMSS instances which has to be excluded from the AzureVMSS from running packet capture. | string[] |
| include | List of AzureVMSS instances to run packet capture on. | string[] |


### PacketCaptureStorageLocation

| Name | Description | Value |
|-|-|-|
| filePath | A valid local path on the targeting VM. Must include the name of the capture file (*.cap). For linux virtual machine it must start with /var/captures. Required if no storage ID is provided, otherwise optional. | string |
| storageId | The ID of the storage account to save the packet capture session. Required if no local file path is provided. | string |
| storagePath | The URI of the storage path to save the packet capture. Must be a well-formed URI describing the location to save the packet capture. | string |


