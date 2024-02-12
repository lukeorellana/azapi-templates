import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformariadbServersPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * DbformariadbServersPrivateendpointconnections resource
 */
export class DbformariadbServersPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbformariadbServersPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforMariaDB/servers/privateEndpointConnections@2018-06-01";
  }

  protected getResourceBody(props: DbformariadbServersPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {description: "string", status: "string"}}}
    );
  }
}
