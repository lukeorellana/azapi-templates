import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PurviewAccountsPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * PurviewAccountsPrivateendpointconnections resource
 */
export class PurviewAccountsPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: PurviewAccountsPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Purview/accounts/privateEndpointConnections@2021-12-01";
  }

  protected getResourceBody(props: PurviewAccountsPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
