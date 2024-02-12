import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ElasticsanElasticsansPrivateendpointconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:elasticSans;

/**
   * List of resources private endpoint is mapped
   */
readonly groupIds?: string[];

/**
   * Private Endpoint resource
   */
readonly privateEndpoint?: PrivateEndponumber;

/**
   * Private Link Service Connection State.
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
readonly status?: 'Approved''Failed''Pending''Rejected';
}

/**
 * ElasticsanElasticsansPrivateendpointconnections resource
 */
export class ElasticsanElasticsansPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ElasticsanElasticsansPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ElasticSan/elasticSans/privateEndpointConnections@2023-01-01";
  }

  protected getResourceBody(props: ElasticsanElasticsansPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {groupIds: ["string"], privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
