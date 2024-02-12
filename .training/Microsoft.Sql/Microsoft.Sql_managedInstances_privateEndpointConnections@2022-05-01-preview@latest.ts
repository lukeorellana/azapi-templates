import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * SqlManagedinstancesPrivateendpointconnections resource
 */
export class SqlManagedinstancesPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlManagedinstancesPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/managedInstances/privateEndpointConnections@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlManagedinstancesPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {description: "string", status: "string"}}}
    );
  }
}
