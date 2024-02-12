import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SearchSearchservicesPrivateendpointconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:searchServices;

/**
   * The group id from the provider of resource the private link service connection is for.
   */
readonly groupId?: string;

/**
   * The private endpoint resource from Microsoft.Network provider.
   */
readonly privateEndpoint?: PrivateEndponumberConnectionPropertiesPrivateEndponumber;

/**
   * Describes the current state of an existing Private Link Service connection to the Azure Private Endpoint.
   */
readonly privateLinkServiceConnectionState?: PrivateEndponumberConnectionPropertiesPrivateLinkServic...;

/**
   * The provisioning state of the private link service connection. Can be Updating, Deleting, Failed, Succeeded, or Incomplete
   */
readonly provisioningState?: 'Canceled''Deleting''Failed''Incomplete''Succeeded''Updating';

/**
   * The resource id of the private endpoint resource from Microsoft.Network provider.
   */
readonly id?: string;

/**
   * A description of any extra actions that may be required.
   */
readonly actionsRequired?: string;

/**
   * The description for the private link service connection state.
   */
readonly description?: string;

/**
   * Status of the the private link service connection. Can be Pending, Approved, Rejected, or Disconnected.
   */
readonly status?: 'Approved''Disconnected''Pending''Rejected';
}

/**
 * SearchSearchservicesPrivateendpointconnections resource
 */
export class SearchSearchservicesPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SearchSearchservicesPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Search/searchServices/privateEndpointConnections@2022-09-01";
  }

  protected getResourceBody(props: SearchSearchservicesPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {groupId: "string", privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}, provisioningState: "string"}}
    );
  }
}
