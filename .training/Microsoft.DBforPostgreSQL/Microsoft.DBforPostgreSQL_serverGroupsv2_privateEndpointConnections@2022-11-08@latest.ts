import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlServergroupsv2PrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * DbforpostgresqlServergroupsv2Privateendpointconnections resource
 */
export class DbforpostgresqlServergroupsv2Privateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbforpostgresqlServergroupsv2PrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforPostgreSQL/serverGroupsv2/privateEndpointConnections@2022-11-08";
  }

  protected getResourceBody(props: DbforpostgresqlServergroupsv2PrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
