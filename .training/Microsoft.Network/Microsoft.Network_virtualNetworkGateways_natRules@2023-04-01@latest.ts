import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVirtualnetworkgatewaysNatrulesProps extends IAzAPIBaseProps {

}

/**
 * NetworkVirtualnetworkgatewaysNatrules resource
 */
export class NetworkVirtualnetworkgatewaysNatrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkVirtualnetworkgatewaysNatrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/virtualNetworkGateways/natRules@2023-04-01";
  }

  protected getResourceBody(props: NetworkVirtualnetworkgatewaysNatrulesProps): string {
    return JSON.stringify(
        {properties: {externalMappings: [{addressSpace: "string", portRange: "string"}], internalMappings: [{addressSpace: "string", portRange: "string"}], ipConfigurationId: "string", mode: "string", type: "string"}}
    );
  }
}
