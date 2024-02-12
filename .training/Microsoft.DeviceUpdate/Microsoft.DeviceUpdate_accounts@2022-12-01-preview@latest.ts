import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DeviceupdateAccountsProps extends IAzAPIBaseProps {

}

/**
 * DeviceupdateAccounts resource
 */
export class DeviceupdateAccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DeviceupdateAccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DeviceUpdate/accounts@2022-12-01-preview";
  }

  protected getResourceBody(props: DeviceupdateAccountsProps): string {
    return JSON.stringify(
        {properties: {encryption: {keyVaultKeyUri: "string", userAssignedIdentity: "string"}, privateEndpointConnections: [{properties: {groupIds: ["string"], privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}], publicNetworkAccess: "string", sku: "string"}}
    );
  }
}
