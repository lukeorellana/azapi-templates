import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVirtualroutersPeeringsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:virtualRouters;

/**
   * Peer ASN.
   */
readonly peerAsn?: number;

/**
   * Peer IP.
   */
readonly peerIp?: string;
}

/**
 * NetworkVirtualroutersPeerings resource
 */
export class NetworkVirtualroutersPeerings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkVirtualroutersPeeringsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/virtualRouters/peerings@2023-04-01";
  }

  protected getResourceBody(props: NetworkVirtualroutersPeeringsProps): string {
    return JSON.stringify(
        {properties: {peerAsn: "${int}", peerIp: "string"}}
    );
  }
}
