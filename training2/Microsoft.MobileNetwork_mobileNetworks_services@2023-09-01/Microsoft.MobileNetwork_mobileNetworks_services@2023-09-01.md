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


