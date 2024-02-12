import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkDnsresolversInboundendpointsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:dnsResolvers;

/**
   * IP configurations for the inbound endpoint.
   */
readonly ipConfigurations: IpConfiguration[];

/**
   * Private IP address of the IP configuration.
   */
readonly privateIpAddress?: string;

/**
   * Private IP address allocation method.
   */
readonly privateIpAllocationMethod?: 'Dynamic''Static';

/**
   * The reference to the subnet bound to the IP configuration.
   */
readonly subnet: SubResource;

/**
   * Resource ID.
   */
readonly id: string;
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
