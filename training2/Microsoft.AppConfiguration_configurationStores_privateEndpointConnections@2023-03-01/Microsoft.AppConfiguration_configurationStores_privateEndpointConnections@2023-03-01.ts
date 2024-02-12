import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppconfigurationConfigurationstoresPrivateendpointconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:configurationStores;

/**
   * The resource of private endpoint.
   */
readonly privateEndpoint?: PrivateEndponumber;

/**
   * A collection of information about the state of the connection between service consumer and provider.
   */
readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;

/**
   * The resource Id for private endpoint
   */
readonly id?: string;

/**
   * The private link service connection description.
   */
readonly description?: string;

/**
   * The private link service connection status.
   */
readonly status?: 'Approved''Disconnected''Pending''Rejected';
}

/**
 * AppconfigurationConfigurationstoresPrivateendpointconnections resource
 */
export class AppconfigurationConfigurationstoresPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppconfigurationConfigurationstoresPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppConfiguration/configurationStores/privateEndpointConnections@2023-03-01";
  }

  protected getResourceBody(props: AppconfigurationConfigurationstoresPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {description: "string", status: "string"}}}
    );
  }
}
