import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkDnsresolversInboundendpointsProps extends IAzAPIBaseProps {

}

/**
 * NetworkDnsresolversInboundendpoints resource
 */
export class NetworkDnsresolversInboundendpoints extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkDnsresolversInboundendpointsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/dnsResolvers/inboundEndpoints@2022-07-01";
  }

  protected getResourceBody(props: NetworkDnsresolversInboundendpointsProps): string {
    return JSON.stringify(
        {properties: {ipConfigurations: [{privateIpAddress: "string", privateIpAllocationMethod: "string", subnet: {id: "string"}}]}}
    );
  }
}
