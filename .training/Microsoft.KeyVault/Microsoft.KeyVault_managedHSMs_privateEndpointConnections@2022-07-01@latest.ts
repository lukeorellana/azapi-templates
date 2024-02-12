import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KeyvaultManagedhsmsPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * KeyvaultManagedhsmsPrivateendpointconnections resource
 */
export class KeyvaultManagedhsmsPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KeyvaultManagedhsmsPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.KeyVault/managedHSMs/privateEndpointConnections@2022-07-01";
  }

  protected getResourceBody(props: KeyvaultManagedhsmsPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "None", description: "string", status: "string"}, provisioningState: "string"}, sku: {family: "B", name: "string"}, etag: "string"}
    );
  }
}
