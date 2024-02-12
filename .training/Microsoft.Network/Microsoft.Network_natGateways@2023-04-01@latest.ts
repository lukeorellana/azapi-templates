import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNatgatewaysProps extends IAzAPIBaseProps {

}

/**
 * NetworkNatgateways resource
 */
export class NetworkNatgateways extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNatgatewaysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/natGateways@2023-04-01";
  }

  protected getResourceBody(props: NetworkNatgatewaysProps): string {
    return JSON.stringify(
        {properties: {idleTimeoutInMinutes: "${int}", publicIpAddresses: [{id: "string"}], publicIpPrefixes: [{id: "string"}]}, zones: ["string"], sku: {name: "Standard"}}
    );
  }
}
