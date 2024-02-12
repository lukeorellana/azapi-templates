import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PeeringPeeringsRegisteredasnsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:peerings;

/**
   * The customer's ASN from which traffic originates.
   */
readonly asn?: number;
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
