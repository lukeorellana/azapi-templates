import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MediaMediaservicesProps extends IAzAPIBaseProps {
/**
   * The Managed Identity for the Media Services account.
   */
readonly identity?: MediaServiceIdentity;

/**
   * The identity type.
   */
readonly type: string;

/**
   * The user assigned managed identities.
   */
readonly userAssignedIdentities?: object;

/**
   * The account encryption properties.
   */
readonly encryption?: AccountEncryption;

/**
   * The Key Delivery properties for Media Services account.
   */
readonly keyDelivery?: KeyDelivery;

/**
   * Whether or not public network access is allowed for resources under the Media Services account.
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * The storage accounts for this resource.
   */
readonly storageAccounts?: StorageAccount[];

/**
   * 
   */
readonly storageAuthentication?: 'ManagedIdentity''System';

/**
   * The Key Vault identity.
   */
readonly identity?: ResourceIdentity;

/**
   * The properties of the key used to encrypt the account.
   */
readonly keyVaultProperties?: KeyVaultProperties;

/**
   * The type of key used to encrypt the Account Key.
   */
readonly type: 'CustomerKey''SystemKey';

/**
   * The user assigned managed identity's ARM ID to use when accessing a resource.
   */
readonly userAssignedIdentity?: string;

/**
   * Indicates whether to use System Assigned Managed Identity. Mutual exclusive with User Assigned Managed Identity.
   */
readonly useSystemAssignedIdentity: bool;

/**
   * The URL of the Key Vault key used to encrypt the account. The key may either be versioned (for examplehttps://vault/keys/mykey/version1) or reference a key without a version (for examplehttps://vault/keys/mykey).
   */
readonly keyIdentifier?: string;

/**
   * The access control properties for Key Delivery.
   */
readonly accessControl?: AccessControl;

/**
   * The behavior for IP access control in Key Delivery.
   */
readonly defaultAction?: 'Allow''Deny';

/**
   * The IP allow list for access control in Key Delivery. If the default action is set to 'Allow', the IP allow list must be empty.
   */
readonly ipAllowList?: string[];

/**
   * The ID of the storage account resource. Media Services relies on tables and queues as well as blobs, so the primary storage account must be a Standard Storage account (either Microsoft.ClassicStorage or Microsoft.Storage). Blob only storage accounts can be added as secondary storage accounts.
   */
readonly id?: string;

/**
   * The storage account identity.
   */
readonly identity?: ResourceIdentity;

/**
   * The type of the storage account.
   */
readonly type: 'Primary''Secondary';
}

/**
 * MediaMediaservices resource
 */
export class MediaMediaservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MediaMediaservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Media/mediaservices@2021-11-01";
  }

  protected getResourceBody(props: MediaMediaservicesProps): string {
    return JSON.stringify(
        {properties: {encryption: {identity: {userAssignedIdentity: "string", useSystemAssignedIdentity: "${bool}"}, keyVaultProperties: {keyIdentifier: "string"}, type: "string"}, keyDelivery: {accessControl: {defaultAction: "string", ipAllowList: ["string"]}}, publicNetworkAccess: "string", storageAccounts: [{id: "string", identity: {userAssignedIdentity: "string", useSystemAssignedIdentity: "${bool}"}, type: "string"}], storageAuthentication: "string"}}
    );
  }
}
