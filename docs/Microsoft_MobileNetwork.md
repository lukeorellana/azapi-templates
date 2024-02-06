## Microsoft.MobileNetwork/mobileNetworks@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/mobileNetworks@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      publicLandMobileNetworkIdentifier = {
        mcc = "string"
        mnc = "string"
      }
    }
  })
}

```

### mobileNetworks

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-64Valid characters:Alphanumerics and hyphens.Start with alphanumeric. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Mobile network properties. | MobileNetworkPropertiesFormat(required) |


### MobileNetworkPropertiesFormat

| Name | Description | Value |
|-|-|-|
| publicLandMobileNetworkIdentifier | The unique public land mobile network identifier for the network. This is made up of the mobile country code and mobile network code, as defined inhttps://www.itu.int/rec/T-REC-E.212. The values 001-01 and 001-001 can be used for testing and the values 999-99 and 999-999 can be used on internal private networks. | PlmnId(required) |


### PlmnId

| Name | Description | Value |
|-|-|-|
| mcc | Mobile country code (MCC). | string (required)Constraints:Pattern =^\d{3}$ |
| mnc | Mobile network code (MNC). | string (required)Constraints:Pattern =^\d{2,3}$ |
## Microsoft.MobileNetwork/mobileNetworks/dataNetworks@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/mobileNetworks/dataNetworks@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      description = "string"
    }
  })
}

```

### mobileNetworks/dataNetworks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-64Valid characters:Alphanumeric, hyphens and a period/dot (.)Start and end with alphanumeric.Note: A period/dot (.) must be followed by an alphanumeric character. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:mobileNetworks |
| properties | Data network properties. | DataNetworkPropertiesFormat |


### DataNetworkPropertiesFormat

| Name | Description | Value |
|-|-|-|
| description | An optional description for this data network. | string |
## Microsoft.MobileNetwork/mobileNetworks/services@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/mobileNetworks/services@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      pccRules = [
        {
          ruleName = "string"
          rulePrecedence = int
          ruleQosPolicy = {
            5qi = int
            allocationAndRetentionPriorityLevel = int
            guaranteedBitRate = {
              downlink = "string"
              uplink = "string"
            }
            maximumBitRate = {
              downlink = "string"
              uplink = "string"
            }
            preemptionCapability = "string"
            preemptionVulnerability = "string"
          }
          serviceDataFlowTemplates = [
            {
              direction = "string"
              ports = [
                "string"
              ]
              protocol = "string"
              remoteIpList = "string"
              templateName = "string"
            }
          ]
          trafficControl = "string"
        }
      ]
      servicePrecedence = int
      serviceQosPolicy = {
        5qi = int
        allocationAndRetentionPriorityLevel = int
        maximumBitRate = {
          downlink = "string"
          uplink = "string"
        }
        preemptionCapability = "string"
        preemptionVulnerability = "string"
      }
    }
  })
}

```

### mobileNetworks/services

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-64Valid characters:Alphanumerics and hyphens.Start with alphanumeric.The following words cannot be used on their own as the name:default,requested,service. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:mobileNetworks |
| properties | Service Properties. | ServicePropertiesFormat(required) |


### ServicePropertiesFormat

| Name | Description | Value |
|-|-|-|
| pccRules | The set of data flow policy rules that make up this service. | PccRuleConfiguration[] (required)Constraints:Min length = 1 |
| servicePrecedence | A precedence value that is used to decide between services when identifying the QoS values to use for a particular SIM. A lower value means a higher priority. This value should be unique among all services configured in the mobile network. | int (required)Constraints:Min value = 0Max value = 255 |
| serviceQosPolicy | The QoS policy to use for packets matching this service. This can be overridden for particular flows using the ruleQosPolicy field in a PccRuleConfiguration. If this field is null then the UE's SIM policy will define the QoS settings. | QosPolicy |


### PccRuleConfiguration

| Name | Description | Value |
|-|-|-|
| ruleName | The name of the rule. This must be unique within the parent service. You must not use any of the following reserved strings -default,requestedorservice. | string (required)Constraints:Max length = 64Pattern =^(?!(default|requested|service)$)[a-zA-Z0-9][a-zA-Z0-9_-]*$ |
| rulePrecedence | A precedence value that is used to decide between data flow policy rules when identifying the QoS values to use for a particular SIM. A lower value means a higher priority. This value should be unique among all data flow policy rules configured in the mobile network. | int (required)Constraints:Min value = 0Max value = 255 |
| ruleQosPolicy | The QoS policy to use for packets matching this rule. If this field is null then the parent service will define the QoS settings. | PccRuleQosPolicy |
| serviceDataFlowTemplates | The set of data flow templates to use for this data flow policy rule. | ServiceDataFlowTemplate[] (required)Constraints:Min length = 1Max length = 15 |
| trafficControl | Determines whether flows that match this data flow policy rule are permitted. | 'Blocked''Enabled' |


### PccRuleQosPolicy

| Name | Description | Value |
|-|-|-|
| 5qi | 5G QoS Flow Indicator value. The 5QI identifies a specific QoS forwarding treatment to be provided to a flow. See 3GPP TS23.501 section 5.7.2.1 for a full description of the 5QI parameter, and table 5.7.4-1 for the definition the 5QI values. | intConstraints:Min value = 1Max value = 127 |
| allocationAndRetentionPriorityLevel | QoS Flow allocation and retention priority (ARP) level. Flows with higher priority preempt flows with lower priority, if the settings ofpreemptionCapabilityandpreemptionVulnerabilityallow it. 1 is the highest level of priority. If this field is not specified then5qiis used to derive the ARP value. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters. | intConstraints:Min value = 1Max value = 15 |
| guaranteedBitRate | The guaranteed bit rate (GBR) for all service data flows that use this data flow policy rule. This is an optional setting. If you do not provide a value, there will be no GBR set for the data flow policy rule that uses this QoS definition. | Ambr |
| maximumBitRate | The maximum bit rate (MBR) for all service data flows that use this data flow policy rule or service. | Ambr(required) |
| preemptionCapability | QoS Flow preemption capability. The preemption capability of a QoS Flow controls whether it can preempt another QoS Flow with a lower priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters. | 'MayPreempt''NotPreempt' |
| preemptionVulnerability | QoS Flow preemption vulnerability. The preemption vulnerability of a QoS Flow controls whether it can be preempted by a QoS Flow with a higher priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters. | 'NotPreemptable''Preemptable' |


### Ambr

| Name | Description | Value |
|-|-|-|
| downlink | Downlink bit rate. | string (required)Constraints:Pattern =^\d+(\.\d+)? (bps|Kbps|Mbps|Gbps|Tbps)$ |
| uplink | Uplink bit rate. | string (required)Constraints:Pattern =^\d+(\.\d+)? (bps|Kbps|Mbps|Gbps|Tbps)$ |


### ServiceDataFlowTemplate

| Name | Description | Value |
|-|-|-|
| direction | The direction of this flow. | 'Bidirectional''Downlink''Uplink' (required) |
| ports | The port(s) to which UEs will connect for this flow. You can specify zero or more ports or port ranges. If you specify one or more ports or port ranges then you must specify a value other thanipin theprotocolfield. This is an optional setting. If you do not specify it then connections will be allowed on all ports. Port ranges must be specified as {FirstPort}-{LastPort}. For example: [8080,8082-8085]. | string[]Constraints:Pattern =^([1-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])(-([1-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$ |
| protocol | A list of the allowed protocol(s) for this flow. If you want this flow to be able to use any protocol within the internet protocol suite, use the valueip. If you only want to allow a selection of protocols, you must use the corresponding IANA Assigned Internet Protocol Number for each protocol, as described inhttps://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml. For example, for UDP, you must use 17. If you use the valueipthen you must leave the fieldportunspecified. | string (required)Constraints:Min length = 1Pattern =^(ip|[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$"} |
| remoteIpList | The remote IP address(es) to which UEs will connect for this flow. If you want to allow connections on any IP address, use the valueany. Otherwise, you must provide each of the remote IP addresses to which the packet core instance will connect for this flow. You must provide each IP address in CIDR notation, including the netmask (for example, 192.0.2.54/24). | string (required)Constraints:Min length = 1Pattern =^(any|(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2])))$"} |
| templateName | The name of the data flow template. This must be unique within the parent data flow policy rule. You must not use any of the following reserved strings -default,requestedorservice. | string (required)Constraints:Max length = 64Pattern =^(?!(default|requested|service)$)[a-zA-Z0-9][a-zA-Z0-9_-]*$ |


### QosPolicy

| Name | Description | Value |
|-|-|-|
| 5qi | 5G QoS Flow Indicator value. The 5QI identifies a specific QoS forwarding treatment to be provided to a flow. See 3GPP TS23.501 section 5.7.2.1 for a full description of the 5QI parameter, and table 5.7.4-1 for the definition the 5QI values. | intConstraints:Min value = 1Max value = 127 |
| allocationAndRetentionPriorityLevel | QoS Flow allocation and retention priority (ARP) level. Flows with higher priority preempt flows with lower priority, if the settings ofpreemptionCapabilityandpreemptionVulnerabilityallow it. 1 is the highest level of priority. If this field is not specified then5qiis used to derive the ARP value. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters. | intConstraints:Min value = 1Max value = 15 |
| maximumBitRate | The maximum bit rate (MBR) for all service data flows that use this data flow policy rule or service. | Ambr(required) |
| preemptionCapability | QoS Flow preemption capability. The preemption capability of a QoS Flow controls whether it can preempt another QoS Flow with a lower priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters. | 'MayPreempt''NotPreempt' |
| preemptionVulnerability | QoS Flow preemption vulnerability. The preemption vulnerability of a QoS Flow controls whether it can be preempted by a QoS Flow with a higher priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters. | 'NotPreemptable''Preemptable' |
## Microsoft.MobileNetwork/mobileNetworks/simPolicies@2023-09-01

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
## Microsoft.MobileNetwork/mobileNetworks/sites@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/mobileNetworks/sites@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
  })
}

```

### mobileNetworks/sites

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-64Valid characters:Alphanumerics and hyphens.Start with alphanumeric. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:mobileNetworks |
| properties | Site properties. | SitePropertiesFormat |
## Microsoft.MobileNetwork/mobileNetworks/slices@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/mobileNetworks/slices@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      description = "string"
      snssai = {
        sd = "string"
        sst = int
      }
    }
  })
}

```

### mobileNetworks/slices

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-64Valid characters:Alphanumerics and hyphens.Start with alphanumeric. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:mobileNetworks |
| properties | Slice properties. | SlicePropertiesFormat(required) |


### SlicePropertiesFormat

| Name | Description | Value |
|-|-|-|
| description | An optional description for this network slice. | string |
| snssai | Single-network slice selection assistance information (S-NSSAI). Unique at the scope of a mobile network. | Snssai(required) |


### Snssai

| Name | Description | Value |
|-|-|-|
| sd | Slice differentiator (SD). | stringConstraints:Pattern =^[A-Fa-f0-9]{6}$ |
| sst | Slice/service type (SST). | int (required)Constraints:Min value = 0Max value = 255 |
## Microsoft.MobileNetwork/packetCoreControlPlanes@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/packetCoreControlPlanes@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type =  "UserAssigned"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      controlPlaneAccessInterface = {
        ipv4Address = "string"
        ipv4Gateway = "string"
        ipv4Subnet = "string"
        name = "string"
      }
      controlPlaneAccessVirtualIpv4Addresses = [
        "string"
      ]
      coreNetworkTechnology = "string"
      diagnosticsUpload = {
        storageAccountContainerUrl = "string"
      }
      eventHub = {
        id = "string"
        reportingInterval = int
      }
      installation = {
        desiredState = "string"
      }
      localDiagnosticsAccess = {
        authenticationType = "string"
        httpsServerCertificate = {
          certificateUrl = "string"
        }
      }
      platform = {
        azureStackEdgeDevice = {
          id = "string"
        }
        azureStackHciCluster = {
          id = "string"
        }
        connectedCluster = {
          id = "string"
        }
        customLocation = {
          id = "string"
        }
        type = "string"
      }
      signaling = {
        nasReroute = {
          macroMmeGroupId = int
        }
      }
      sites = [
        {
          id = "string"
        }
      ]
      sku = "string"
      ueMtu = int
      version = "string"
    }
  })
}

```

### packetCoreControlPlanes

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-64Valid characters:Alphanumeric, underscores and hyphens.Start with alphanumeric. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The identity used to retrieve the ingress certificate from Azure key vault. | ManagedServiceIdentity |
| properties | Packet core control plane Properties. | PacketCoreControlPlanePropertiesFormat(required) |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (currently only UserAssigned allowed). | 'None''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### PacketCoreControlPlanePropertiesFormat

| Name | Description | Value |
|-|-|-|
| controlPlaneAccessInterface | The control plane interface on the access network. For 5G networks, this is the N2 interface. For 4G networks, this is the S1-MME interface. | InterfaceProperties(required) |
| controlPlaneAccessVirtualIpv4Addresses | The virtual IP address(es) for the control plane on the access network in a High Availability (HA) system. In an HA deployment the access network router should be configured to anycast traffic for this address to the control plane access interfaces on the active and standby nodes. In non-HA system this list should be omitted or empty. | string[]Constraints:Pattern =^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$ |
| coreNetworkTechnology | The core network technology generation (5G core or EPC / 4G core). | '5GC''EPC + 5GC''EPC' |
| diagnosticsUpload | Configuration for uploading packet core diagnostics | DiagnosticsUploadConfiguration |
| eventHub | Configuration for sending packet core events to an Azure Event Hub. | EventHubConfiguration |
| installation | The installation state of the packet core control plane resource. | Installation |
| interopSettings | Settings to allow interoperability with third party components e.g. RANs and UEs. | For Bicep, you can use theany()function. |
| localDiagnosticsAccess | The kubernetes ingress configuration to control access to packet core diagnostics over local APIs. | LocalDiagnosticsAccessConfiguration(required) |
| platform | The platform where the packet core is deployed. | PlatformConfiguration(required) |
| signaling | Signaling configuration for the packet core. | SignalingConfiguration |
| sites | Site(s) under which this packet core control plane should be deployed. The sites must be in the same location as the packet core control plane. | SiteResourceId[] (required)Constraints:Min length = 1 |
| sku | The SKU defining the throughput and SIM allowances for this packet core control plane deployment. | 'G0''G1''G10''G2''G5' (required) |
| ueMtu | The MTU (in bytes) signaled to the UE. The same MTU is set on the user plane data links for all data networks. The MTU set on the user plane access link is calculated to be 60 bytes greater than this value to allow for GTP encapsulation. | intConstraints:Min value = 1280Max value = 1930 |
| version | The desired version of the packet core software. | string |


### InterfaceProperties

| Name | Description | Value |
|-|-|-|
| ipv4Address | The IPv4 address. | stringConstraints:Pattern =^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$ |
| ipv4Gateway | The default IPv4 gateway (router). | stringConstraints:Pattern =^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$ |
| ipv4Subnet | The IPv4 subnet. | stringConstraints:Pattern =^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2]))$ |
| name | The logical name for this interface. This should match one of the interfaces configured on your Azure Stack Edge device. | string |


### DiagnosticsUploadConfiguration

| Name | Description | Value |
|-|-|-|
| storageAccountContainerUrl | The Storage Account Container URL to upload diagnostics to. | string (required) |


### EventHubConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID  of Azure Event Hub to send packet core events to. | string (required)Constraints:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[eE][vV][eE][nN][tT][hH][uU][bB]/[nN][aA][mM][eE][sS][pP][aA][cC][eE][sS]/[^/?#]+/[eV][vV][eE][nN][tT][hH][uU][bB][sS]/[^/?#]+$ |
| reportingInterval | The duration (in seconds) between UE usage reports. | intConstraints:Min value = 30Max value = 3600 |


### Installation

| Name | Description | Value |
|-|-|-|
| desiredState | The desired installation state | 'Installed''Uninstalled' |


### LocalDiagnosticsAccessConfiguration

| Name | Description | Value |
|-|-|-|
| authenticationType | How to authenticate users who access local diagnostics APIs. | 'AAD''Password' (required) |
| httpsServerCertificate | The HTTPS server TLS certificate used to secure local access to diagnostics. | HttpsServerCertificate |


### HttpsServerCertificate

| Name | Description | Value |
|-|-|-|
| certificateUrl | The certificate URL, unversioned. For example:https://contosovault.vault.azure.net/certificates/ingress. | string (required) |


### PlatformConfiguration

| Name | Description | Value |
|-|-|-|
| azureStackEdgeDevice | The Azure Stack Edge device where the packet core is deployed. If the device is part of a fault tolerant pair, either device in the pair can be specified. | AzureStackEdgeDeviceResourceId |
| azureStackHciCluster | The Azure Stack HCI cluster where the packet core is deployed. | AzureStackHCIClusterResourceId |
| connectedCluster | Azure Arc connected cluster where the packet core is deployed. | ConnectedClusterResourceId |
| customLocation | Azure Arc custom location where the packet core is deployed. | CustomLocationResourceId |
| type | The platform type where packet core is deployed. | '3P-AZURE-STACK-HCI''AKS-HCI' (required) |


### AzureStackEdgeDeviceResourceId

| Name | Description | Value |
|-|-|-|
| id | Azure Stack Edge device resource ID. | string (required)Constraints:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[dD][aA][tT][aA][bB][oO][xX][eE][dD][gG][eE]/[dD][aA][tT][aA][bB][oO][xX][eE][dD][gG][eE][dD][eE][vV][iI][cC][eE][sS]/[^/?#]+$ |


### AzureStackHCIClusterResourceId

| Name | Description | Value |
|-|-|-|
| id | Azure Stack HCI cluster resource ID. | string (required)Constraints:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[aA][zZ][uU][rR][eE][sS][tT][aA][cC][kK][hH][cC][iI]/[cC][lL][uU][sS][tT][eE][rR][sS]/[^/?#]+$ |


### ConnectedClusterResourceId

| Name | Description | Value |
|-|-|-|
| id | Azure Arc connected cluster resource ID. | string (required)Constraints:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[kK][uU][bB][eE][rR][nN][eE][tT][eE][sS]/[cC][oO][nN][nN][eE][cC][tT][eE][dD][cC][lL][uU][sS][tT][eE][rR][sS]/[^/?#]+$ |


### CustomLocationResourceId

| Name | Description | Value |
|-|-|-|
| id | Azure Arc custom location resource ID. | string (required)Constraints:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[eE][xX][tT][eE][nN][dD][eE][dD][lL][oO][cC][aA][tT][iI][oO][nN]/[cC][uU][sS][tT][oO][mM][lL][oO][cC][aA][tT][iI][oO][nN][sS]/[^/?#]+$ |


### SignalingConfiguration

| Name | Description | Value |
|-|-|-|
| nasReroute | Configuration enabling 4G NAS reroute. | NASRerouteConfiguration |


### NASRerouteConfiguration

| Name | Description | Value |
|-|-|-|
| macroMmeGroupId | The macro network's MME group ID. This is where unknown UEs are sent to via NAS reroute. | int (required)Constraints:Min value = 0Max value = 65535 |


### SiteResourceId

| Name | Description | Value |
|-|-|-|
| id | Site resource ID. | string (required)Constraints:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+/[sS][iI][tT][eE][sS]/[^/?#]+$ |
## Microsoft.MobileNetwork/packetCoreControlPlanes/diagnosticsPackages@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/packetCoreControlPlanes/diagnosticsPackages@2023-09-01"
  name = "string"
  parent_id = "string"
}

```

### packetCoreControlPlanes/diagnosticsPackages

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:packetCoreControlPlanes |
## Microsoft.MobileNetwork/packetCoreControlPlanes/packetCaptures@2023-09-01

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
## Microsoft.MobileNetwork/packetCoreControlPlanes/packetCoreDataPlanes@2023-09-01

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
## Microsoft.MobileNetwork/packetCoreControlPlanes/packetCoreDataPlanes/attachedDataNetworks@2023-09-01

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
## Microsoft.MobileNetwork/simGroups@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/simGroups@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type =  "UserAssigned"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      encryptionKey = {
        keyUrl = "string"
      }
      mobileNetwork = {
        id = "string"
      }
    }
  })
}

```

### simGroups

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-64Valid characters:Alphanumeric, underscores and hyphensStart with alphanumeric |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The identity used to retrieve the encryption key from Azure key vault. | ManagedServiceIdentity |
| properties | SIM group Properties. | SimGroupPropertiesFormat(required) |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (currently only UserAssigned allowed). | 'None''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### SimGroupPropertiesFormat

| Name | Description | Value |
|-|-|-|
| encryptionKey | A key to encrypt the SIM data that belongs to this SIM group. | KeyVaultKey |
| mobileNetwork | Mobile network that this SIM group belongs to. The mobile network must be in the same location as the SIM group. | MobileNetworkResourceId |


### KeyVaultKey

| Name | Description | Value |
|-|-|-|
| keyUrl | The key URL, unversioned. For example:https://contosovault.vault.azure.net/keys/azureKey. | string |


### MobileNetworkResourceId

| Name | Description | Value |
|-|-|-|
| id | Mobile network resource ID. | string (required)Constraints:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+$ |
## Microsoft.MobileNetwork/simGroups/sims@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/simGroups/sims@2023-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authenticationKey = "string"
      deviceType = "string"
      integratedCircuitCardIdentifier = "string"
      internationalMobileSubscriberIdentity = "string"
      operatorKeyCode = "string"
      simPolicy = {
        id = "string"
      }
      staticIpConfiguration = [
        {
          attachedDataNetwork = {
            id = "string"
          }
          slice = {
            id = "string"
          }
          staticIp = {
            ipv4Address = "string"
          }
        }
      ]
    }
  })
}

```

### simGroups/sims

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-64Valid characters:Alphanumeric, underscores and hyphensStart with alphanumeric |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:simGroups |
| properties | SIM Properties. | SimPropertiesFormat(required) |


### SimPropertiesFormat

| Name | Description | Value |
|-|-|-|
| authenticationKey | The Ki value for the SIM. | stringConstraints:Sensitive value. Pass in as a secure parameter.Pattern =^[0-9a-fA-F]{32}$ |
| deviceType | An optional free-form text field that can be used to record the device type this SIM is associated with, for example 'Video camera'. The Azure portal allows SIMs to be grouped and filtered based on this value. | string |
| integratedCircuitCardIdentifier | The integrated circuit card ID (ICCID) for the SIM. | stringConstraints:Pattern =^[0-9]{10,20}$ |
| internationalMobileSubscriberIdentity | The international mobile subscriber identity (IMSI) for the SIM. | string (required)Constraints:Pattern =^[0-9]{5,15}$ |
| operatorKeyCode | The Opc value for the SIM. | stringConstraints:Sensitive value. Pass in as a secure parameter.Pattern =^[0-9a-fA-F]{32}$ |
| simPolicy | The SIM policy used by this SIM. The SIM policy must be in the same location as the SIM. | SimPolicyResourceId |
| staticIpConfiguration | A list of static IP addresses assigned to this SIM. Each address is assigned at a defined network scope, made up of {attached data network, slice}. | SimStaticIpProperties[]Constraints:Min length = 1 |


### SimPolicyResourceId

| Name | Description | Value |
|-|-|-|
| id | SIM policy resource ID. | string (required)Constraints:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+/[sS][iI][mM][pP][oO][lL][iI][cC][iI][eE][sS]/[^/?#]+$ |


### SimStaticIpProperties

| Name | Description | Value |
|-|-|-|
| attachedDataNetwork | The attached data network on which the static IP address will be used. The combination of attached data network and slice defines the network scope of the IP address. The attached data network must be in the same location as the SIM. | AttachedDataNetworkResourceId |
| slice | The network slice on which the static IP address will be used. The combination of attached data network and slice defines the network scope of the IP address. The slice must be in the same location as the SIM. | SliceResourceId |
| staticIp | The static IP configuration for the SIM to use at the defined network scope. | SimStaticIpPropertiesStaticIp |


### AttachedDataNetworkResourceId

| Name | Description | Value |
|-|-|-|
| id | Attached data network resource ID. | string (required)Constraints:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[pP][aA][cC][kK][eE][tT][cC][oO][rR][eE][cC][oO][nN][tT][rR][oO][lL][pP][lL][aA][nN][eE][sS]/[^/?#]+/[pP][aA][cC][kK][eE][tT][cC][oO][rR][eE][dD][aA][tT][aA][pP][lL][aA][nN][eE][sS]/[^/?#]+/[aA][tT][tT][aA][cC][hH][eE][dD][dD][aA][tT][aA][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+$ |


### SliceResourceId

| Name | Description | Value |
|-|-|-|
| id | Slice resource ID. | string (required)Constraints:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+/[sS][lL][iI][cC][eE][sS]/[^/?#]+$ |


### SimStaticIpPropertiesStaticIp

| Name | Description | Value |
|-|-|-|
| ipv4Address | The IPv4 address assigned to the SIM at this network scope. This address must be in the userEquipmentStaticAddressPoolPrefix defined in the attached data network. | stringConstraints:Pattern =^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$ |
## Microsoft.MobileNetwork/sims@2022-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/sims@2022-03-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      authenticationKey = "string"
      deviceType = "string"
      integratedCircuitCardIdentifier = "string"
      internationalMobileSubscriberIdentity = "string"
      mobileNetwork = {
        id = "string"
      }
      operatorKeyCode = "string"
      simPolicy = {
        id = "string"
      }
      staticIpConfiguration = [
        {
          attachedDataNetwork = {
            id = "string"
          }
          slice = {
            id = "string"
          }
          staticIp = {
            ipv4Address = "string"
          }
        }
      ]
    }
  })
}

```

### sims

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Sim Properties. | SimPropertiesFormat(required) |


### SimPropertiesFormat

| Name | Description | Value |
|-|-|-|
| authenticationKey | The ki value for the sim. | stringConstraints:Sensitive value. Pass in as a secure parameter.Pattern =^[0-9a-fA-F]{32}$ |
| deviceType | An optional free-form text field that can be used to record the device type this sim is associated with, for example 'Video camera'. The Azure portal allows Sims to be grouped and filtered based on this value. | string |
| integratedCircuitCardIdentifier | The Integrated Circuit Card ID (ICC Id) for the sim. | stringConstraints:Pattern =^89[0-9]{17,18}$ |
| internationalMobileSubscriberIdentity | The International Mobile Subscriber Identity (IMSI) for the sim. | string (required)Constraints:Pattern =^[0-9]{5,15}$ |
| mobileNetwork | Mobile network that this sim belongs to | MobileNetworkResourceId |
| operatorKeyCode | The Opc value for the sim. | stringConstraints:Sensitive value. Pass in as a secure parameter.Pattern =^[0-9a-fA-F]{32}$ |
| simPolicy | The simPolicy used by this sim. | SimPolicyResourceId |
| staticIpConfiguration | A list of static IP addresses assigned to this sim. Each address is assigned at a defined network scope, made up of {attached data network, slice}. | SimStaticIpProperties[]Constraints:Min length = 1 |


### MobileNetworkResourceId

| Name | Description | Value |
|-|-|-|
| id | Mobile Network resource ID. | string (required)Constraints:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+$ |


### SimPolicyResourceId

| Name | Description | Value |
|-|-|-|
| id | SIM Policy resource ID. | string (required)Constraints:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+/[sS][iI][mM][pP][oO][lL][iI][cC][iI][eE][sS]/[^/?#]+$ |


### SimStaticIpProperties

| Name | Description | Value |
|-|-|-|
| attachedDataNetwork | The attached data network on which the static IP address will be used. The combination of attachedDataNetwork and slice defines the network scope of the IP address. | AttachedDataNetworkResourceId |
| slice | The network slice on which the static IP address will be used. The combination of attachedDataNetwork and slice defines the network scope of the IP address. | SliceResourceId |
| staticIp | The static IP configuration for the sim to use at the defined network scope. | SimStaticIpPropertiesStaticIp |


### AttachedDataNetworkResourceId

| Name | Description | Value |
|-|-|-|
| id | Attached Data Network resource ID. | string (required)Constraints:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[pP][aA][cC][kK][eE][tT][cC][oO][rR][eE][cC][oO][nN][tT][rR][oO][lL][pP][lL][aA][nN][eE][sS]/[^/?#]+/[pP][aA][cC][kK][eE][tT][cC][oO][rR][eE][dD][aA][tT][aA][pP][lL][aA][nN][eE][sS]/[^/?#]+/[aA][tT][tT][aA][cC][hH][eE][dD][dD][aA][tT][aA][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+$ |


### SliceResourceId

| Name | Description | Value |
|-|-|-|
| id | Slice resource ID. | string (required)Constraints:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+/[sS][lL][iI][cC][eE][sS]/[^/?#]+$ |


### SimStaticIpPropertiesStaticIp

| Name | Description | Value |
|-|-|-|
| ipv4Address | The IPv4 address assigned to the sim at this network scope. This address must be in the userEquipmentStaticAddressPoolPrefix defined in the attachedDataNetwork. | stringConstraints:Pattern =^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$ |
