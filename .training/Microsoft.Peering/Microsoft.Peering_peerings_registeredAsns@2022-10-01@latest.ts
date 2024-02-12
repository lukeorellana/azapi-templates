import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PeeringPeeringsRegisteredasnsProps extends IAzAPIBaseProps {

}

/**
 * PeeringPeeringsRegisteredasns resource
 */
export class PeeringPeeringsRegisteredasns extends AzAPIBase {
  constructor(scope: Construct, id: string, props: PeeringPeeringsRegisteredasnsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Peering/peerings/registeredAsns@2022-10-01";
  }

  protected getResourceBody(props: PeeringPeeringsRegisteredasnsProps): string {
    return JSON.stringify(
        {properties: {asn: "${int}"}}
    );
  }
}
