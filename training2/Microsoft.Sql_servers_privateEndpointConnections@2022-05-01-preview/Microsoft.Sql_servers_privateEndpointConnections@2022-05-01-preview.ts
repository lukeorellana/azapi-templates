import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersPrivateendpointconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:servers;

/**
   * Private endpoint which the connection belongs to.
   */
readonly privateEndpoint?: PrivateEndponumberProperty;

/**
   * Connection state of the private endpoint connection.
   */
readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateProperty;

/**
   * Resource id of the private endpoint.
   */
readonly id?: string;

/**
   * The private link service connection description.
   */
readonly description: string;

/**
   * The private link service connection status.
   */
readonly status: 'Approved''Disconnected''Pending''Rejected';
}

/**
 * SqlServersPrivateendpointconnections resource
 */
export class SqlServersPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/privateEndpointConnections@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {description: "string", status: "string"}}}
    );
  }
}
