import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DeviceupdateAccountsPrivateendpointconnectionproxiesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:accounts;

/**
   * Remote private endpoint details.
   */
readonly remotePrivateEndpoint?: RemotePrivateEndponumber;

/**
   * Operation status.
   */
readonly status?: string;

/**
   * List of connection details.
   */
readonly connectionDetails?: ConnectionDetails[];

/**
   * Remote endpoint resource ID.
   */
readonly id?: string;

/**
   * Original resource ID needed by Microsoft.Network.
   */
readonly immutableResourceId?: string;

/**
   * Original subscription ID needed by Microsoft.Network.
   */
readonly immutableSubscriptionId?: string;

/**
   * List of private link service connections that need manual approval.
   */
readonly manualPrivateLinkServiceConnections?: PrivateLinkServiceConnection[];

/**
   * List of automatically approved private link service connections.
   */
readonly privateLinkServiceConnections?: PrivateLinkServiceConnection[];

/**
   * List of private link service proxies.
   */
readonly privateLinkServiceProxies?: PrivateLinkServiceProxy[];

/**
   * Virtual network traffic tag.
   */
readonly vnetTrafficTag?: string;

/**
   * List of group IDs.
   */
readonly groupIds?: string[];

/**
   * Request message.
   */
readonly requestMessage?: string;

/**
   * Group connectivity information.
   */
readonly groupConnectivityInformation?: GroupConnectivityInformation[];

/**
   * NRP resource ID.
   */
readonly id?: string;

/**
   * Remote private endpoint connection details.
   */
readonly remotePrivateEndpointConnection?: PrivateLinkServiceProxyRemotePrivateEndponumberConnecti...;

/**
   * Remote private link service connection state
   */
readonly remotePrivateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;

/**
   * List of customer visible FQDNs.
   */
readonly customerVisibleFqdns?: string[];

/**
   * PrivateLinkService ARM region.
   */
readonly privateLinkServiceArmRegion?: string;

/**
   * Redirect map ID.
   */
readonly redirectMapId?: string;

/**
   * A message indicating if changes on the service provider require any updates on the consumer.
   */
readonly actionsRequired?: string;

/**
   * The reason for approval/rejection of the connection.
   */
readonly description?: string;

/**
   * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
   */
readonly status?: 'Approved''Pending''Rejected';
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
