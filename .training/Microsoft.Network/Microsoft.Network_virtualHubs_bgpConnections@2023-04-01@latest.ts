import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVirtualhubsBgpconnectionsProps extends IAzAPIBaseProps {

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
