import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PeeringPeeringsRegisteredprefixesProps extends IAzAPIBaseProps {

}

/**
 * PeeringPeeringsRegisteredprefixes resource
 */
export class PeeringPeeringsRegisteredprefixes extends AzAPIBase {
  constructor(scope: Construct, id: string, props: PeeringPeeringsRegisteredprefixesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Peering/peerings/registeredPrefixes@2022-10-01";
  }

  protected getResourceBody(props: PeeringPeeringsRegisteredprefixesProps): string {
    return JSON.stringify(
        {properties: {prefix: "string"}}
    );
  }
}
