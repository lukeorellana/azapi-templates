import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DeviceupdateAccountsPrivateendpointconnectionproxiesProps extends IAzAPIBaseProps {

}

/**
 * DeviceupdateAccountsPrivateendpointconnectionproxies resource
 */
export class DeviceupdateAccountsPrivateendpointconnectionproxies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DeviceupdateAccountsPrivateendpointconnectionproxiesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DeviceUpdate/accounts/privateEndpointConnectionProxies@2022-12-01-preview";
  }

  protected getResourceBody(props: DeviceupdateAccountsPrivateendpointconnectionproxiesProps): string {
    return JSON.stringify(
        {properties: {}, remotePrivateEndpoint: {connectionDetails: [{}], id: "string", immutableResourceId: "string", immutableSubscriptionId: "string", location: "string", manualPrivateLinkServiceConnections: [{groupIds: ["string"], name: "string", requestMessage: "string"}], privateLinkServiceConnections: [{groupIds: ["string"], name: "string", requestMessage: "string"}], privateLinkServiceProxies: [{groupConnectivityInformation: [{customerVisibleFqdns: ["string"], privateLinkServiceArmRegion: "string", redirectMapId: "string"}], id: "string", remotePrivateEndpointConnection: {}, remotePrivateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}], vnetTrafficTag: "string"}, status: "string"}
    );
  }
}
