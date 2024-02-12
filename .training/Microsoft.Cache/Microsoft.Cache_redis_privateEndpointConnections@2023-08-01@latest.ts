import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CacheRedisPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * CacheRedisPrivateendpointconnections resource
 */
export class CacheRedisPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CacheRedisPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Cache/redis/privateEndpointConnections@2023-08-01";
  }

  protected getResourceBody(props: CacheRedisPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
