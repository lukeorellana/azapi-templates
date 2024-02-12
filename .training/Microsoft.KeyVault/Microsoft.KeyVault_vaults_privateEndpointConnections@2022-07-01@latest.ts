import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KeyvaultVaultsPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * KeyvaultVaultsPrivateendpointconnections resource
 */
export class KeyvaultVaultsPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KeyvaultVaultsPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.KeyVault/vaults/privateEndpointConnections@2022-07-01";
  }

  protected getResourceBody(props: KeyvaultVaultsPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "None", description: "string", status: "string"}, provisioningState: "string"}, etag: "string"}
    );
  }
}
