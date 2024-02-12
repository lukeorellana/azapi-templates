import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlServersPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * DbforpostgresqlServersPrivateendpointconnections resource
 */
export class DbforpostgresqlServersPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbforpostgresqlServersPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforPostgreSQL/servers/privateEndpointConnections@2018-06-01";
  }

  protected getResourceBody(props: DbforpostgresqlServersPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {description: "string", status: "string"}}}
    );
  }
}
