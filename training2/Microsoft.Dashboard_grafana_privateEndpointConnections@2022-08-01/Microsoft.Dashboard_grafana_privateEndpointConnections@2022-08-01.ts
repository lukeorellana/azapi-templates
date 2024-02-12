import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DashboardGrafanaPrivateendpointconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:grafana;

/**
   * The private endpoint connection group ids.
   */
readonly groupIds?: string[];

/**
   * The resource of private end point.
   */
readonly privateEndpoint?: PrivateEndponumber;

/**
   * A collection of information about the state of the connection between service consumer and provider.
   */
readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;

/**
   * A message indicating if changes on the service provider require any updates on the consumer.
   */
readonly actionsRequired?: string;

/**
   * The reason for approval/rejection of the connection.
   */
readonly description?: string;

/**
   * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
   */
readonly status?: 'Approved''Pending''Rejected';
}

/**
 * DashboardGrafanaPrivateendpointconnections resource
 */
export class DashboardGrafanaPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DashboardGrafanaPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Dashboard/grafana/privateEndpointConnections@2022-08-01";
  }

  protected getResourceBody(props: DashboardGrafanaPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {groupIds: ["string"], privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
