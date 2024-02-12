import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PeeringPeeringservicesPrefixesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:peeringServices;

/**
   * The peering service prefix key
   */
readonly peeringServicePrefixKey?: string;

/**
   * The prefix from which your traffic originates.
   */
readonly prefix?: string;
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
