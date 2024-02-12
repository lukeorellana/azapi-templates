```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/mobileNetworks/simPolicies@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      defaultSlice = {
        id = "string"
      }
      registrationTimer = int
      rfspIndex = int
      sliceConfigurations = [
        {
          dataNetworkConfigurations = [
            {
              5qi = int
              additionalAllowedSessionTypes = [
                "string"
              ]
              allocationAndRetentionPriorityLevel = int
              allowedServices = [
                {
                  id = "string"
                }
              ]
              dataNetwork = {
                id = "string"
              }
              defaultSessionType = "string"
              maximumNumberOfBufferedPackets = int
              preemptionCapability = "string"
              preemptionVulnerability = "string"
              sessionAmbr = {
                downlink = "string"
                uplink = "string"
              }
            }
          ]
          defaultDataNetwork = {
            id = "string"
          }
          slice = {
            id = "string"
          }
        }
      ]
      ueAmbr = {
        downlink = "string"
        uplink = "string"
      }
    }
  })
}

```

### mobileNetworks/simPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-64Valid characters:Alphanumerics and hyphens.Start with alphanumeric. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:mobileNetworks |
| properties | SIM policy Properties. | SimPolicyPropertiesFormat(required) |


### SimPolicyPropertiesFormat

| Name | Description | Value |
|-|-|-|
| defaultSlice | The default slice to use if the UE does not explicitly specify it. This slice must exist in thesliceConfigurationsmap. The slice must be in the same location as the SIM policy. | SliceResourceId(required) |
| registrationTimer | UE periodic registration update timer (5G) or UE periodic tracking area update timer (4G), in seconds. | intConstraints:Min value = 30 |
| rfspIndex | RAT/Frequency Selection Priority Index, defined in 3GPP TS 36.413. This is an optional setting and by default is unspecified. | intConstraints:Min value = 1Max value = 256 |
| sliceConfigurations | The allowed slices and the settings to use for them. The list must not contain duplicate items and must contain at least one item. | SliceConfiguration[] (required)Constraints:Min length = 1 |
| ueAmbr | Aggregate maximum bit rate across all non-GBR QoS flows of all PDU sessions of a given UE. See 3GPP TS23.501 section 5.7.2.6 for a full description of the UE-AMBR. | Ambr(required) |


### SliceResourceId

| Name | Description | Value |
|-|-|-|
| id | Slice resource ID. | string (required)Constraints:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+/[sS][lL][iI][cC][eE][sS]/[^/?#]+$ |


### SliceConfiguration

| Name | Description | Value |
|-|-|-|
| dataNetworkConfigurations | The allowed data networks and the settings to use for them. The list must not contain duplicate items and must contain at least one item. | DataNetworkConfiguration[] (required)Constraints:Min length = 1 |
| defaultDataNetwork | The default data network to use if the UE does not explicitly specify it. Configuration for this object must exist in thedataNetworkConfigurationsmap. The data network must be in the same location as the SIM policy. | DataNetworkResourceId(required) |
| slice | A reference to the slice that these settings apply to. The slice must be in the same location as the SIM policy. | SliceResourceId(required) |


### DataNetworkConfiguration

| Name | Description | Value |
|-|-|-|
| 5qi | Default 5G QoS Flow Indicator value. The 5QI identifies a specific QoS forwarding treatment to be provided to a flow. See 3GPP TS23.501 section 5.7.2.1 for a full description of the 5QI parameter, and table 5.7.4-1 for the definition the 5QI values. | intConstraints:Min value = 0Max value = 255 |
| additionalAllowedSessionTypes | Allowed session types in addition to the default session type. Must not duplicate the default session type. | String array containing any of:'IPv4''IPv6'Constraints:Max length = 1 |
| allocationAndRetentionPriorityLevel | Default QoS Flow allocation and retention priority (ARP) level. Flows with higher priority preempt flows with lower priority, if the settings ofpreemptionCapabilityandpreemptionVulnerabilityallow it. 1 is the highest level of priority. If this field is not specified then5qiis used to derive the ARP value. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters. | intConstraints:Min value = 1Max value = 15 |
| allowedServices | List of services that can be used as part of this SIM policy. The list must not contain duplicate items and must contain at least one item. The services must be in the same location as the SIM policy. | ServiceResourceId[] (required)Constraints:Min length = 1 |
| dataNetwork | A reference to the data network that these settings apply to. The data network must be in the same location as the SIM policy. | DataNetworkResourceId(required) |
| defaultSessionType | The default PDU session type, which is used if the UE does not request a specific session type. | 'IPv4''IPv6' |
| maximumNumberOfBufferedPackets | The maximum number of downlink packets to buffer at the user plane for High Latency Communication - Extended Buffering. See 3GPP TS29.272 v15.10.0 section 7.3.188 for a full description. This maximum is not guaranteed because there is a internal limit on buffered packets across all PDU sessions. | intConstraints:Min value = 0 |
| preemptionCapability | Default QoS Flow preemption capability. The preemption capability of a QoS Flow controls whether it can preempt another QoS Flow with a lower priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters. | 'MayPreempt''NotPreempt' |
| preemptionVulnerability | Default QoS Flow preemption vulnerability. The preemption vulnerability of a QoS Flow controls whether it can be preempted by a QoS Flow with a higher priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters. | 'NotPreemptable''Preemptable' |
| sessionAmbr | Aggregate maximum bit rate across all non-GBR QoS flows of a given PDU session. See 3GPP TS23.501 section 5.7.2.6 for a full description of the Session-AMBR. | Ambr(required) |


### ServiceResourceId

| Name | Description | Value |
|-|-|-|
| id | Service resource ID. | string (required)Constraints:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+/[sS][eE][rR][vV][iI][cC][eE][sS]/[^/?#]+$ |


### DataNetworkResourceId

| Name | Description | Value |
|-|-|-|
| id | Data network resource ID. | string (required)Constraints:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+/[dD][aA][tT][aA][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+$ |


### Ambr

| Name | Description | Value |
|-|-|-|
| downlink | Downlink bit rate. | string (required)Constraints:Pattern =^\d+(\.\d+)? (bps|Kbps|Mbps|Gbps|Tbps)$ |
| uplink | Uplink bit rate. | string (required)Constraints:Pattern =^\d+(\.\d+)? (bps|Kbps|Mbps|Gbps|Tbps)$ |


