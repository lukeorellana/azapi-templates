import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DigitaltwinsDigitaltwinsinstancesPrivateendpointconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:digitalTwinsInstances;

/**
   * The list of group ids for the private endpoint connection.
   */
readonly groupIds?: string[];

/**
   * The private endpoint.
   */
readonly privateEndpoint?: PrivateEndponumber;

/**
   * The connection state.
   */
readonly privateLinkServiceConnectionState?: ConnectionPropertiesPrivateLinkServiceConnectionStat...;

/**
   * Actions required for a private endpoint connection.
   */
readonly actionsRequired?: string;

/**
   * The description for the current state of a private endpoint connection.
   */
readonly description: string;

/**
   * The status of a private endpoint connection.
   */
readonly status: 'Approved''Disconnected''Pending''Rejected';
}

/**
 * DigitaltwinsDigitaltwinsinstancesPrivateendpointconnections resource
 */
export class DigitaltwinsDigitaltwinsinstancesPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DigitaltwinsDigitaltwinsinstancesPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DigitalTwins/digitalTwinsInstances/privateEndpointConnections@2023-01-31";
  }

  protected getResourceBody(props: DigitaltwinsDigitaltwinsinstancesPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {groupIds: ["string"], privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
