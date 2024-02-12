import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AvsPrivatecloudsWorkloadnetworksSegmentsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: workloadNetworks;

/**
   * Gateway which to connect segment to.
   */
readonly connectedGateway?: string;

/**
   * Display name of the segment.
   */
readonly displayName?: string;

/**
   * NSX revision number.
   */
readonly revision?: number;

/**
   * Subnet which to connect segment to.
   */
readonly subnet?: WorkloadNetworkSegmentSubnet;

/**
   * DHCP Range assigned for subnet.
   */
readonly dhcpRanges?: string[];

/**
   * Gateway address.
   */
readonly gatewayAddress?: string;
}

/**
 * AvsPrivatecloudsWorkloadnetworksSegments resource
 */
export class AvsPrivatecloudsWorkloadnetworksSegments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AvsPrivatecloudsWorkloadnetworksSegmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AVS/privateClouds/workloadNetworks/segments@2022-05-01";
  }

  protected getResourceBody(props: AvsPrivatecloudsWorkloadnetworksSegmentsProps): string {
    return JSON.stringify(
        {properties: {connectedGateway: "string", displayName: "string", revision: "${int}", subnet: {dhcpRanges: ["string"], gatewayAddress: "string"}}}
    );
  }
}
