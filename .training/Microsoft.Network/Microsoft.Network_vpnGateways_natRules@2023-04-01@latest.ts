import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVpngatewaysNatrulesProps extends IAzAPIBaseProps {

}

/**
 * NetworkVpngatewaysNatrules resource
 */
export class NetworkVpngatewaysNatrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkVpngatewaysNatrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/vpnGateways/natRules@2023-04-01";
  }

  protected getResourceBody(props: NetworkVpngatewaysNatrulesProps): string {
    return JSON.stringify(
        {properties: {externalMappings: [{addressSpace: "string", portRange: "string"}], internalMappings: [{addressSpace: "string", portRange: "string"}], ipConfigurationId: "string", mode: "string", type: "string"}}
    );
  }
}
