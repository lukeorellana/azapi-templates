import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkDnsresolversOutboundendpointsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:dnsResolvers;

/**
   * The reference to the subnet used for the outbound endpoint.
   */
readonly subnet: SubResource;

/**
   * Resource ID.
   */
readonly id: string;
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
