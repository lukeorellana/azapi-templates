import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVirtualhubsBgpconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:virtualHubs;

/**
   * The reference to the HubVirtualNetworkConnection resource.
   */
readonly hubVirtualNetworkConnection?: SubResource;

/**
   * Peer ASN.
   */
readonly peerAsn?: number;

/**
   * Peer IP.
   */
readonly peerIp?: string;

/**
   * Resource ID.
   */
readonly id?: string;
}

/**
 * NetworkVirtualhubsBgpconnections resource
 */
export class NetworkVirtualhubsBgpconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkVirtualhubsBgpconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/virtualHubs/bgpConnections@2023-04-01";
  }

  protected getResourceBody(props: NetworkVirtualhubsBgpconnectionsProps): string {
    return JSON.stringify(
        {properties: {hubVirtualNetworkConnection: {id: "string"}, peerAsn: "${int}", peerIp: "string"}}
    );
  }
}
