import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DeviceupdateAccountsPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * DeviceupdateAccountsPrivateendpointconnections resource
 */
export class DeviceupdateAccountsPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DeviceupdateAccountsPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DeviceUpdate/accounts/privateEndpointConnections@2022-12-01-preview";
  }

  protected getResourceBody(props: DeviceupdateAccountsPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {groupIds: ["string"], privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
