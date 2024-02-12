import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkLoadbalancersBackendaddresspoolsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:loadBalancers;

/**
   * Amount of seconds Load Balancer waits for before sending RESET to client and backend address.
   */
readonly drainPeriodInSeconds?: number;

/**
   * An array of backend addresses.
   */
readonly loadBalancerBackendAddresses?: LoadBalancerBackendAddress[];

/**
   * Backend address synchronous mode for the backend pool
   */
readonly syncMode?: 'Automatic''Manual';

/**
   * An array of gateway load balancer tunnel interfaces.
   */
readonly tunnelInterfaces?: GatewayLoadBalancerTunnelInterface[];

/**
   * A reference to a virtual network.
   */
readonly virtualNetwork?: SubResource;

/**
   * A list of administrative states which once set can override health probe so that Load Balancer will always forward new connections to backend, or deny new connections and reset existing connections.
   */
readonly adminState?: 'Down''None''Up';

/**
   * IP Address belonging to the referenced virtual network.
   */
readonly ipAddress?: string;

/**
   * Reference to the frontend ip address configuration defined in regional loadbalancer.
   */
readonly loadBalancerFrontendIPConfiguration?: SubResource;

/**
   * Reference to an existing subnet.
   */
readonly subnet?: SubResource;

/**
   * Reference to an existing virtual network.
   */
readonly virtualNetwork?: SubResource;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Identifier of gateway load balancer tunnel interface.
   */
readonly identifier?: number;

/**
   * Port of gateway load balancer tunnel interface.
   */
readonly port?: number;

/**
   * Protocol of gateway load balancer tunnel interface.
   */
readonly protocol?: 'Native''None''VXLAN';

/**
   * Traffic type of gateway load balancer tunnel interface.
   */
readonly type?: 'External''Internal''None';
}

/**
 * NetworkLoadbalancersBackendaddresspools resource
 */
export class NetworkLoadbalancersBackendaddresspools extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkLoadbalancersBackendaddresspoolsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/loadBalancers/backendAddressPools@2023-04-01";
  }

  protected getResourceBody(props: NetworkLoadbalancersBackendaddresspoolsProps): string {
    return JSON.stringify(
        {properties: {drainPeriodInSeconds: "${int}", loadBalancerBackendAddresses: [{name: "string", properties: {adminState: "string", ipAddress: "string", loadBalancerFrontendIPConfiguration: {id: "string"}, subnet: {id: "string"}, virtualNetwork: {id: "string"}}}], location: "string", syncMode: "string", tunnelInterfaces: [{identifier: "${int}", port: "${int}", protocol: "string", type: "string"}], virtualNetwork: {id: "string"}}}
    );
  }
}
