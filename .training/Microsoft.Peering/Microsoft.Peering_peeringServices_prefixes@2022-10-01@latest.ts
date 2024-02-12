import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PeeringPeeringservicesPrefixesProps extends IAzAPIBaseProps {

}

/**
 * PeeringPeeringservicesPrefixes resource
 */
export class PeeringPeeringservicesPrefixes extends AzAPIBase {
  constructor(scope: Construct, id: string, props: PeeringPeeringservicesPrefixesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Peering/peeringServices/prefixes@2022-10-01";
  }

  protected getResourceBody(props: PeeringPeeringservicesPrefixesProps): string {
    return JSON.stringify(
        {properties: {peeringServicePrefixKey: "string", prefix: "string"}}
    );
  }
}
