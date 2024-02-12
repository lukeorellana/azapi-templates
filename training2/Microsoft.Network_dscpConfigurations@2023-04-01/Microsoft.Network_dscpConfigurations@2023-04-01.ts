import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkDscpconfigurationsProps extends IAzAPIBaseProps {
/**
   * Destination IP ranges.
   */
readonly destinationIpRanges?: QosIpRange[];

/**
   * Destination port ranges.
   */
readonly destinationPortRanges?: QosPortRange[];

/**
   * List of markings to be used in the configuration.
   */
readonly markings?: number[];

/**
   * RNM supported protocol types.
   */
readonly protocol?: 'Ah''All''DoNotUse''Esp''Gre''Icmp''Tcp''Udp''Vxlan';

/**
   * QoS object definitions
   */
readonly qosDefinitionCollection?: QosDefinition[];

/**
   * Source IP ranges.
   */
readonly sourceIpRanges?: QosIpRange[];

/**
   * Sources port ranges.
   */
readonly sourcePortRanges?: QosPortRange[];

/**
   * End IP Address.
   */
readonly endIP?: string;

/**
   * Start IP Address.
   */
readonly startIP?: string;

/**
   * Qos Port Range end.
   */
readonly end?: number;

/**
   * Qos Port Range start.
   */
readonly start?: number;

/**
   * Destination IP ranges.
   */
readonly destinationIpRanges?: QosIpRange[];

/**
   * Destination port ranges.
   */
readonly destinationPortRanges?: QosPortRange[];

/**
   * List of markings to be used in the configuration.
   */
readonly markings?: number[];

/**
   * RNM supported protocol types.
   */
readonly protocol?: 'Ah''All''DoNotUse''Esp''Gre''Icmp''Tcp''Udp''Vxlan';

/**
   * Source IP ranges.
   */
readonly sourceIpRanges?: QosIpRange[];

/**
   * Sources port ranges.
   */
readonly sourcePortRanges?: QosPortRange[];
}

/**
 * NetworkDscpconfigurations resource
 */
export class NetworkDscpconfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkDscpconfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/dscpConfigurations@2023-04-01";
  }

  protected getResourceBody(props: NetworkDscpconfigurationsProps): string {
    return JSON.stringify(
        {properties: {destinationIpRanges: [{endIP: "string", startIP: "string"}], destinationPortRanges: [{end: "${int}", start: "${int}"}], markings: ["${int}"], protocol: "string", qosDefinitionCollection: [{destinationIpRanges: [{endIP: "string", startIP: "string"}], destinationPortRanges: [{end: "${int}", start: "${int}"}], markings: ["${int}"], protocol: "string", sourceIpRanges: [{endIP: "string", startIP: "string"}], sourcePortRanges: [{end: "${int}", start: "${int}"}]}], sourceIpRanges: [{endIP: "string", startIP: "string"}], sourcePortRanges: [{end: "${int}", start: "${int}"}]}}
    );
  }
}
