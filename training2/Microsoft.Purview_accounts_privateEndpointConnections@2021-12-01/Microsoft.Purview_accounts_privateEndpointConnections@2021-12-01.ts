import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PurviewAccountsPrivateendpointconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:accounts;

/**
   * The private endpoint information.
   */
readonly privateEndpoint?: PrivateEndponumber;

/**
   * The private link service connection state.
   */
readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;

/**
   * The private endpoint identifier.
   */
readonly id?: string;

/**
   * The required actions.
   */
readonly actionsRequired?: string;

/**
   * The description.
   */
readonly description?: string;

/**
   * The status.
   */
readonly status?: 'Approved''Disconnected''Pending''Rejected''Unknown';
}

/**
 * PurviewAccountsPrivateendpointconnections resource
 */
export class PurviewAccountsPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: PurviewAccountsPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Purview/accounts/privateEndpointConnections@2021-12-01";
  }

  protected getResourceBody(props: PurviewAccountsPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
