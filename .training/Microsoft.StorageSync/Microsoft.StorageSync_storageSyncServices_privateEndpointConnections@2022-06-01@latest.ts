import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StoragesyncStoragesyncservicesPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * StoragesyncStoragesyncservicesPrivateendpointconnections resource
 */
export class StoragesyncStoragesyncservicesPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StoragesyncStoragesyncservicesPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorageSync/storageSyncServices/privateEndpointConnections@2022-06-01";
  }

  protected getResourceBody(props: StoragesyncStoragesyncservicesPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
