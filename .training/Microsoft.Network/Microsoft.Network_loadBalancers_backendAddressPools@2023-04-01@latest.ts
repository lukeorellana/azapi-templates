import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkLoadbalancersBackendaddresspoolsProps extends IAzAPIBaseProps {

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
