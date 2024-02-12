import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PeeringPeeringsRegisteredprefixesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:peerings;

/**
   * The customer's prefix from which traffic originates.
   */
readonly prefix?: string;
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
