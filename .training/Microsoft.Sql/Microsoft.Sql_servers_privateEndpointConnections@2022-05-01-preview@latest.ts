import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * SqlServersPrivateendpointconnections resource
 */
export class SqlServersPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/privateEndpointConnections@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {description: "string", status: "string"}}}
    );
  }
}
