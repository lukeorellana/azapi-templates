```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dscpConfigurations@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      destinationIpRanges = [
        {
          endIP = "string"
          startIP = "string"
        }
      ]
      destinationPortRanges = [
        {
          end = int
          start = int
        }
      ]
      markings = [
        int
      ]
      protocol = "string"
      qosDefinitionCollection = [
        {
          destinationIpRanges = [
            {
              endIP = "string"
              startIP = "string"
            }
          ]
          destinationPortRanges = [
            {
              end = int
              start = int
            }
          ]
          markings = [
            int
          ]
          protocol = "string"
          sourceIpRanges = [
            {
              endIP = "string"
              startIP = "string"
            }
          ]
          sourcePortRanges = [
            {
              end = int
              start = int
            }
          ]
        }
      ]
      sourceIpRanges = [
        {
          endIP = "string"
          startIP = "string"
        }
      ]
      sourcePortRanges = [
        {
          end = int
          start = int
        }
      ]
    }
  })
}

```

### dscpConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the network interface. | DscpConfigurationPropertiesFormat |


### DscpConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| destinationIpRanges | Destination IP ranges. | QosIpRange[] |
| destinationPortRanges | Destination port ranges. | QosPortRange[] |
| markings | List of markings to be used in the configuration. | int[] |
| protocol | RNM supported protocol types. | 'Ah''All''DoNotUse''Esp''Gre''Icmp''Tcp''Udp''Vxlan' |
| qosDefinitionCollection | QoS object definitions | QosDefinition[] |
| sourceIpRanges | Source IP ranges. | QosIpRange[] |
| sourcePortRanges | Sources port ranges. | QosPortRange[] |


### QosIpRange

| Name | Description | Value |
|-|-|-|
| endIP | End IP Address. | string |
| startIP | Start IP Address. | string |


### QosPortRange

| Name | Description | Value |
|-|-|-|
| end | Qos Port Range end. | int |
| start | Qos Port Range start. | int |


### QosDefinition

| Name | Description | Value |
|-|-|-|
| destinationIpRanges | Destination IP ranges. | QosIpRange[] |
| destinationPortRanges | Destination port ranges. | QosPortRange[] |
| markings | List of markings to be used in the configuration. | int[] |
| protocol | RNM supported protocol types. | 'Ah''All''DoNotUse''Esp''Gre''Icmp''Tcp''Udp''Vxlan' |
| sourceIpRanges | Source IP ranges. | QosIpRange[] |
| sourcePortRanges | Sources port ranges. | QosPortRange[] |


