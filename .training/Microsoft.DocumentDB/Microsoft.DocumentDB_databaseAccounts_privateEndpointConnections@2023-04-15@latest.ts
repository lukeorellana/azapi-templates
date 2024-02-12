import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * DocumentdbDatabaseaccountsPrivateendpointconnections resource
 */
export class DocumentdbDatabaseaccountsPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/privateEndpointConnections@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {groupId: "string", privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {description: "string", status: "string"}, provisioningState: "string"}}
    );
  }
}
