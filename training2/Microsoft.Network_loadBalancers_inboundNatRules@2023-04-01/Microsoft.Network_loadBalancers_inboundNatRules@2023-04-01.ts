import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkLoadbalancersInboundnatrulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:loadBalancers;

/**
   * A reference to backendAddressPool resource.
   */
readonly backendAddressPool?: SubResource;

/**
   * The port used for the internal endpoint. Acceptable values range from 1 to 65535.
   */
readonly backendPort?: number;

/**
   * Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
   */
readonly enableFloatingIP?: bool;

/**
   * Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
   */
readonly enableTcpReset?: bool;

/**
   * A reference to frontend IP addresses.
   */
readonly frontendIPConfiguration?: SubResource;

/**
   * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534.
   */
readonly frontendPort?: number;

/**
   * The port range end for the external endpoint. This property is used together with BackendAddressPool and FrontendPortRangeStart. Individual inbound NAT rule port mappings will be created for each backend address from BackendAddressPool. Acceptable values range from 1 to 65534.
   */
readonly frontendPortRangeEnd?: number;

/**
   * The port range start for the external endpoint. This property is used together with BackendAddressPool and FrontendPortRangeEnd. Individual inbound NAT rule port mappings will be created for each backend address from BackendAddressPool. Acceptable values range from 1 to 65534.
   */
readonly frontendPortRangeStart?: number;

/**
   * The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
   */
readonly idleTimeoutInMinutes?: number;

/**
   * The reference to the transport protocol used by the load balancing rule.
   */
readonly protocol?: 'All''Tcp''Udp';

/**
   * Resource ID.
   */
readonly id?: string;
}

/**
 * NetworkLoadbalancersInboundnatrules resource
 */
export class NetworkLoadbalancersInboundnatrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkLoadbalancersInboundnatrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/loadBalancers/inboundNatRules@2023-04-01";
  }

  protected getResourceBody(props: NetworkLoadbalancersInboundnatrulesProps): string {
    return JSON.stringify(
        {properties: {backendAddressPool: {id: "string"}, backendPort: "${int}", enableFloatingIP: "${bool}", enableTcpReset: "${bool}", frontendIPConfiguration: {id: "string"}, frontendPort: "${int}", frontendPortRangeEnd: "${int}", frontendPortRangeStart: "${int}", idleTimeoutInMinutes: "${int}", protocol: "string"}}
    );
  }
}
