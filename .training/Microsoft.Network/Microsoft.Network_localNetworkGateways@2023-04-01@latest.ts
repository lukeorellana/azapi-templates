import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkLocalnetworkgatewaysProps extends IAzAPIBaseProps {

}

/**
 * NetworkLocalnetworkgateways resource
 */
export class NetworkLocalnetworkgateways extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkLocalnetworkgatewaysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/localNetworkGateways@2023-04-01";
  }

  protected getResourceBody(props: NetworkLocalnetworkgatewaysProps): string {
    return JSON.stringify(
        {properties: {bgpSettings: {asn: "${int}", bgpPeeringAddress: "string", bgpPeeringAddresses: [{customBgpIpAddresses: ["string"], ipconfigurationId: "string"}], peerWeight: "${int}"}, fqdn: "string", gatewayIpAddress: "string", localNetworkAddressSpace: {addressPrefixes: ["string"]}}}
    );
  }
}
