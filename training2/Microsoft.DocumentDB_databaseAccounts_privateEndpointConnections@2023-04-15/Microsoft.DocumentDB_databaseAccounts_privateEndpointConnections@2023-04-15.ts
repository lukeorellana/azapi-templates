import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsPrivateendpointconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:databaseAccounts;

/**
   * Group id of the private endpoint.
   */
readonly groupId?: string;

/**
   * Private endpoint which the connection belongs to.
   */
readonly privateEndpoint?: PrivateEndponumberProperty;

/**
   * Connection State of the Private Endpoint Connection.
   */
readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateProperty;

/**
   * Provisioning state of the private endpoint.
   */
readonly provisioningState?: string;

/**
   * Resource id of the private endpoint.
   */
readonly id?: string;

/**
   * The private link service connection description.
   */
readonly description?: string;

/**
   * The private link service connection status.
   */
readonly status?: string;
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
