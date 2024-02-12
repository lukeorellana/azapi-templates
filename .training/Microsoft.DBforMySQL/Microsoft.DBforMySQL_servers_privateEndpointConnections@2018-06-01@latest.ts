import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformysqlServersPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * DbformysqlServersPrivateendpointconnections resource
 */
export class DbformysqlServersPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbformysqlServersPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforMySQL/servers/privateEndpointConnections@2018-06-01";
  }

  protected getResourceBody(props: DbformysqlServersPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {description: "string", status: "string"}}}
    );
  }
}
