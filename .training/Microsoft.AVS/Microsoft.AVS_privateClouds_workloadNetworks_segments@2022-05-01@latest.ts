import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AvsPrivatecloudsWorkloadnetworksSegmentsProps extends IAzAPIBaseProps {

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
