import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatafactoryFactoriesPrivateendpointconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:factories;

/**
   * The resource of private endpoint.
   */
readonly privateEndpoint?: PrivateEndponumberOrArmIdWrapper;

/**
   * The state of a private link connection
   */
readonly privateLinkServiceConnectionState?: PrivateLinkConnectionState;

/**
   * The resource Id for private endpoint
   */
readonly id?: string;

/**
   * ActionsRequired for a private link connection
   */
readonly actionsRequired?: string;

/**
   * Description of a private link connection
   */
readonly description?: string;

/**
   * Status of a private link connection
   */
readonly status?: string;
}

/**
 * DatafactoryFactoriesPrivateendpointconnections resource
 */
export class DatafactoryFactoriesPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatafactoryFactoriesPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataFactory/factories/privateEndpointConnections@2018-06-01";
  }

  protected getResourceBody(props: DatafactoryFactoriesPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
