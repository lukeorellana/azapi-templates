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
   * The default slice to use if the UE does not explicitly specify it. This slice must exist in thesliceConfigurationsmap. The slice must be in the same location as the SIM policy.
   */
readonly defaultSlice: SliceResourceId;

/**
   * UE periodic registration update timer (5G) or UE periodic tracking area update timer (4G), in seconds.
   */
readonly registrationTimer?: numberConstranumbers:Min value = 30;

/**
   * RAT/Frequency Selection Priority Index, defined in 3GPP TS 36.413. This is an optional setting and by default is unspecified.
   */
readonly rfspIndex?: numberConstranumbers:Min value = 1Max value = 256;

/**
   * The allowed slices and the settings to use for them. The list must not contain duplicate items and must contain at least one item.
   */
readonly sliceConfigurations: SliceConfiguration[] Constranumbers:Min length = 1;

/**
   * Aggregate maximum bit rate across all non-GBR QoS flows of all PDU sessions of a given UE. See 3GPP TS23.501 section 5.7.2.6 for a full description of the UE-AMBR.
   */
readonly ueAmbr: Ambr;

/**
   * Slice resource ID.
   */
readonly id: string Constranumbers:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+/[sS][lL][iI][cC][eE][sS]/[^/?#]+$;

/**
   * The allowed data networks and the settings to use for them. The list must not contain duplicate items and must contain at least one item.
   */
readonly dataNetworkConfigurations: DataNetworkConfiguration[] Constranumbers:Min length = 1;

/**
   * The default data network to use if the UE does not explicitly specify it. Configuration for this object must exist in thedataNetworkConfigurationsmap. The data network must be in the same location as the SIM policy.
   */
readonly defaultDataNetwork: DataNetworkResourceId;

/**
   * A reference to the slice that these settings apply to. The slice must be in the same location as the SIM policy.
   */
readonly slice: SliceResourceId;

/**
   * Default 5G QoS Flow Indicator value. The 5QI identifies a specific QoS forwarding treatment to be provided to a flow. See 3GPP TS23.501 section 5.7.2.1 for a full description of the 5QI parameter, and table 5.7.4-1 for the definition the 5QI values.
   */
readonly 5qi?: numberConstranumbers:Min value = 0Max value = 255;

/**
   * Allowed session types in addition to the default session type. Must not duplicate the default session type.
   */
readonly additionalAllowedSessionTypes?: String array containing any of:'IPv4''IPv6'Constranumbers:Max length = 1;

/**
   * Default QoS Flow allocation and retention priority (ARP) level. Flows with higher priority preempt flows with lower priority, if the settings ofpreemptionCapabilityandpreemptionVulnerabilityallow it. 1 is the highest level of priority. If this field is not specified then5qiis used to derive the ARP value. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
   */
readonly allocationAndRetentionPriorityLevel?: numberConstranumbers:Min value = 1Max value = 15;

/**
   * List of services that can be used as part of this SIM policy. The list must not contain duplicate items and must contain at least one item. The services must be in the same location as the SIM policy.
   */
readonly allowedServices: ServiceResourceId[] Constranumbers:Min length = 1;

/**
   * A reference to the data network that these settings apply to. The data network must be in the same location as the SIM policy.
   */
readonly dataNetwork: DataNetworkResourceId;

/**
   * The default PDU session type, which is used if the UE does not request a specific session type.
   */
readonly defaultSessionType?: 'IPv4''IPv6';

/**
   * The maximum number of downlink packets to buffer at the user plane for High Latency Communication - Extended Buffering. See 3GPP TS29.272 v15.10.0 section 7.3.188 for a full description. This maximum is not guaranteed because there is a internal limit on buffered packets across all PDU sessions.
   */
readonly maximumNumberOfBufferedPackets?: numberConstranumbers:Min value = 0;

/**
   * Default QoS Flow preemption capability. The preemption capability of a QoS Flow controls whether it can preempt another QoS Flow with a lower priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
   */
readonly preemptionCapability?: 'MayPreempt''NotPreempt';

/**
   * Default QoS Flow preemption vulnerability. The preemption vulnerability of a QoS Flow controls whether it can be preempted by a QoS Flow with a higher priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
   */
readonly preemptionVulnerability?: 'NotPreemptable''Preemptable';

/**
   * Aggregate maximum bit rate across all non-GBR QoS flows of a given PDU session. See 3GPP TS23.501 section 5.7.2.6 for a full description of the Session-AMBR.
   */
readonly sessionAmbr: Ambr;

/**
   * Service resource ID.
   */
readonly id: string Constranumbers:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+/[sS][eE][rR][vV][iI][cC][eE][sS]/[^/?#]+$;

/**
   * Data network resource ID.
   */
readonly id: string Constranumbers:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+/[dD][aA][tT][aA][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+$;

/**
   * Downlink bit rate.
   */
readonly downlink: string Constranumbers:Pattern =^\d+(\.\d+)? (bps;

/**
   * Uplink bit rate.
   */
readonly uplink: string Constranumbers:Pattern =^\d+(\.\d+)? (bps;
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
