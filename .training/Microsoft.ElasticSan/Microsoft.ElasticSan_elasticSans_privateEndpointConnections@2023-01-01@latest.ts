import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ElasticsanElasticsansPrivateendpointconnectionsProps extends IAzAPIBaseProps {

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
