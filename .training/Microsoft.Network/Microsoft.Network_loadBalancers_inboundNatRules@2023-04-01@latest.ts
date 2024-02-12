import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkLoadbalancersInboundnatrulesProps extends IAzAPIBaseProps {

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
