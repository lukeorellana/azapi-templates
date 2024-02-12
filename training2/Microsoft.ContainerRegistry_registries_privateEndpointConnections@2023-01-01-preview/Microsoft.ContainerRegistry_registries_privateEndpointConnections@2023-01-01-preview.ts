import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesPrivateendpointconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:registries;

/**
   * The resource of private endpoint.
   */
readonly privateEndpoint?: PrivateEndponumber;

/**
   * A collection of information about the state of the connection between service consumer and provider.
   */
readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;

/**
   * This is private endpoint resource created with Microsoft.Network resource provider.
   */
readonly id?: string;

/**
   * A message indicating if changes on the service provider require any updates on the consumer.
   */
readonly actionsRequired?: 'None''Recreate';

/**
   * The description for connection status. For example if connection is rejected it can indicate reason for rejection.
   */
readonly description?: string;

/**
   * The private link service connection status.
   */
readonly status?: 'Approved''Disconnected''Pending''Rejected';
}

/**
 * ContainerregistryRegistriesPrivateendpointconnections resource
 */
export class ContainerregistryRegistriesPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerregistryRegistriesPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerRegistry/registries/privateEndpointConnections@2023-01-01-preview";
  }

  protected getResourceBody(props: ContainerregistryRegistriesPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
