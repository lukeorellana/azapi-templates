import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkExpressrouteportsProps extends IAzAPIBaseProps {

}

/**
 * NetworkExpressrouteports resource
 */
export class NetworkExpressrouteports extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkExpressrouteportsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/ExpressRoutePorts@2023-04-01";
  }

  protected getResourceBody(props: NetworkExpressrouteportsProps): string {
    return JSON.stringify(
        {properties: {bandwidthInGbps: "${int}", billingType: "string", encapsulation: "string", links: [{id: "string", name: "string", properties: {adminState: "string", macSecConfig: {cakSecretIdentifier: "string", cipher: "string", cknSecretIdentifier: "string", sciState: "string"}}}], peeringLocation: "string"}}
    );
  }
}
