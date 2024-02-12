import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DeviceupdateAccountsProps extends IAzAPIBaseProps {
/**
   * The type of identity used for the resource.
   */
readonly identity?: ManagedServiceIdentity;

/**
   * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
   */
readonly type: 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned';

/**
   * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
   */
readonly userAssignedIdentities?: object;

/**
   * CMK encryption at rest properties
   */
readonly encryption?: Encryption;

/**
   * List of private endpoint connections associated with the account.
   */
readonly privateEndpointConnections?: PrivateEndponumberConnection[];

/**
   * Whether or not public network access is allowed for the account.
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * Device Update Sku
   */
readonly sku?: 'Free''Standard';

/**
   * The URI of the key vault
   */
readonly keyVaultKeyUri?: string;

/**
   * The full resourceId of the user assigned identity to be used for key vault access. Identity has to be also assigned to the Account
   */
readonly userAssignedIdentity?: string;

/**
   * Array of group IDs.
   */
readonly groupIds?: string[];

/**
   * The resource of private end point.
   */
readonly privateEndpoint?: PrivateEndponumber;

/**
   * A collection of information about the state of the connection between service consumer and provider.
   */
readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;

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
