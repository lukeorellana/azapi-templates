import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorageStorageaccountsPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * StorageStorageaccountsPrivateendpointconnections resource
 */
export class StorageStorageaccountsPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorageStorageaccountsPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Storage/storageAccounts/privateEndpointConnections@2022-09-01";
  }

  protected getResourceBody(props: StorageStorageaccountsPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {}, privateLinkServiceConnectionState: {actionRequired: "string", description: "string", status: "string"}}}
    );
  }
}
