import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkDnsresolversOutboundendpointsProps extends IAzAPIBaseProps {

}

/**
 * NetworkDnsresolversOutboundendpoints resource
 */
export class NetworkDnsresolversOutboundendpoints extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkDnsresolversOutboundendpointsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/dnsResolvers/outboundEndpoints@2022-07-01";
  }

  protected getResourceBody(props: NetworkDnsresolversOutboundendpointsProps): string {
    return JSON.stringify(
        {properties: {subnet: {id: "string"}}}
    );
  }
}
