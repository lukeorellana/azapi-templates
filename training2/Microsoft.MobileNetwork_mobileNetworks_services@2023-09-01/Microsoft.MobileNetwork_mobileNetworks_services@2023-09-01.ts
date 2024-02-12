import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:mobileNetworks;

/**
   * The set of data flow policy rules that make up this service.
   */
readonly pccRules: PccRuleConfiguration[] Constranumbers:Min length = 1;

/**
   * A precedence value that is used to decide between services when identifying the QoS values to use for a particular SIM. A lower value means a higher priority. This value should be unique among all services configured in the mobile network.
   */
readonly servicePrecedence: number Constranumbers:Min value = 0Max value = 255;

/**
   * The QoS policy to use for packets matching this service. This can be overridden for particular flows using the ruleQosPolicy field in a PccRuleConfiguration. If this field is null then the UE's SIM policy will define the QoS settings.
   */
readonly serviceQosPolicy?: QosPolicy;

/**
   * The name of the rule. This must be unique within the parent service. You must not use any of the following reserved strings -default,requestedorservice.
   */
readonly ruleName: string Constranumbers:Max length = 64Pattern =^(?!(default;

/**
   * A precedence value that is used to decide between data flow policy rules when identifying the QoS values to use for a particular SIM. A lower value means a higher priority. This value should be unique among all data flow policy rules configured in the mobile network.
   */
readonly rulePrecedence: number Constranumbers:Min value = 0Max value = 255;

/**
   * The QoS policy to use for packets matching this rule. If this field is null then the parent service will define the QoS settings.
   */
readonly ruleQosPolicy?: PccRuleQosPolicy;

/**
   * The set of data flow templates to use for this data flow policy rule.
   */
readonly serviceDataFlowTemplates: ServiceDataFlowTemplate[] Constranumbers:Min length = 1Max length = 15;

/**
   * Determines whether flows that match this data flow policy rule are permitted.
   */
readonly trafficControl?: 'Blocked''Enabled';

/**
   * 5G QoS Flow Indicator value. The 5QI identifies a specific QoS forwarding treatment to be provided to a flow. See 3GPP TS23.501 section 5.7.2.1 for a full description of the 5QI parameter, and table 5.7.4-1 for the definition the 5QI values.
   */
readonly 5qi?: numberConstranumbers:Min value = 1Max value = 127;

/**
   * QoS Flow allocation and retention priority (ARP) level. Flows with higher priority preempt flows with lower priority, if the settings ofpreemptionCapabilityandpreemptionVulnerabilityallow it. 1 is the highest level of priority. If this field is not specified then5qiis used to derive the ARP value. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
   */
readonly allocationAndRetentionPriorityLevel?: numberConstranumbers:Min value = 1Max value = 15;

/**
   * The guaranteed bit rate (GBR) for all service data flows that use this data flow policy rule. This is an optional setting. If you do not provide a value, there will be no GBR set for the data flow policy rule that uses this QoS definition.
   */
readonly guaranteedBitRate?: Ambr;

/**
   * The maximum bit rate (MBR) for all service data flows that use this data flow policy rule or service.
   */
readonly maximumBitRate: Ambr;

/**
   * QoS Flow preemption capability. The preemption capability of a QoS Flow controls whether it can preempt another QoS Flow with a lower priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
   */
readonly preemptionCapability?: 'MayPreempt''NotPreempt';

/**
   * QoS Flow preemption vulnerability. The preemption vulnerability of a QoS Flow controls whether it can be preempted by a QoS Flow with a higher priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
   */
readonly preemptionVulnerability?: 'NotPreemptable''Preemptable';

/**
   * Downlink bit rate.
   */
readonly downlink: string Constranumbers:Pattern =^\d+(\.\d+)? (bps;

/**
   * Uplink bit rate.
   */
readonly uplink: string Constranumbers:Pattern =^\d+(\.\d+)? (bps;

/**
   * The direction of this flow.
   */
readonly direction: 'Bidirectional''Downlink''Uplink';

/**
   * The port(s) to which UEs will connect for this flow. You can specify zero or more ports or port ranges. If you specify one or more ports or port ranges then you must specify a value other thanipin theprotocolfield. This is an optional setting. If you do not specify it then connections will be allowed on all ports. Port ranges must be specified as {FirstPort}-{LastPort}. For example: [8080,8082-8085].
   */
readonly ports?: string[]Constranumbers:Pattern =^([1-9];

/**
   * A list of the allowed protocol(s) for this flow. If you want this flow to be able to use any protocol within the internet protocol suite, use the valueip. If you only want to allow a selection of protocols, you must use the corresponding IANA Assigned Internet Protocol Number for each protocol, as described inhttps://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml. For example, for UDP, you must use 17. If you use the valueipthen you must leave the fieldportunspecified.
   */
readonly protocol: string Constranumbers:Min length = 1Pattern =^(ip;

/**
   * The remote IP address(es) to which UEs will connect for this flow. If you want to allow connections on any IP address, use the valueany. Otherwise, you must provide each of the remote IP addresses to which the packet core instance will connect for this flow. You must provide each IP address in CIDR notation, including the netmask (for example, 192.0.2.54/24).
   */
readonly remoteIpList: string Constranumbers:Min length = 1Pattern =^(any;

/**
   * The name of the data flow template. This must be unique within the parent data flow policy rule. You must not use any of the following reserved strings -default,requestedorservice.
   */
readonly templateName: string Constranumbers:Max length = 64Pattern =^(?!(default;

/**
   * 5G QoS Flow Indicator value. The 5QI identifies a specific QoS forwarding treatment to be provided to a flow. See 3GPP TS23.501 section 5.7.2.1 for a full description of the 5QI parameter, and table 5.7.4-1 for the definition the 5QI values.
   */
readonly 5qi?: numberConstranumbers:Min value = 1Max value = 127;

/**
   * QoS Flow allocation and retention priority (ARP) level. Flows with higher priority preempt flows with lower priority, if the settings ofpreemptionCapabilityandpreemptionVulnerabilityallow it. 1 is the highest level of priority. If this field is not specified then5qiis used to derive the ARP value. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
   */
readonly allocationAndRetentionPriorityLevel?: numberConstranumbers:Min value = 1Max value = 15;

/**
   * The maximum bit rate (MBR) for all service data flows that use this data flow policy rule or service.
   */
readonly maximumBitRate: Ambr;

/**
   * QoS Flow preemption capability. The preemption capability of a QoS Flow controls whether it can preempt another QoS Flow with a lower priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
   */
readonly preemptionCapability?: 'MayPreempt''NotPreempt';

/**
   * QoS Flow preemption vulnerability. The preemption vulnerability of a QoS Flow controls whether it can be preempted by a QoS Flow with a higher priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
   */
readonly preemptionVulnerability?: 'NotPreemptable''Preemptable';
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
