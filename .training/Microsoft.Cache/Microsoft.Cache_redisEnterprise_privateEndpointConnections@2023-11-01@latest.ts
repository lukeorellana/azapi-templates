import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CacheRedisenterprisePrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * CacheRedisenterprisePrivateendpointconnections resource
 */
export class CacheRedisenterprisePrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CacheRedisenterprisePrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Cache/redisEnterprise/privateEndpointConnections@2023-11-01";
  }

  protected getResourceBody(props: CacheRedisenterprisePrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
