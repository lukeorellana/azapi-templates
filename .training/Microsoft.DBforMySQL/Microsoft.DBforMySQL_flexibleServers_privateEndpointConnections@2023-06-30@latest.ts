import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformysqlFlexibleserversPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * DbformysqlFlexibleserversPrivateendpointconnections resource
 */
export class DbformysqlFlexibleserversPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbformysqlFlexibleserversPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforMySQL/flexibleServers/privateEndpointConnections@2023-06-30";
  }

  protected getResourceBody(props: DbformysqlFlexibleserversPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}, provisioningState: "string"}}
    );
  }
}
