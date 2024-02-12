import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BatchBatchaccountsProps extends IAzAPIBaseProps {
/**
   * The identity of the Batch account.
   */
readonly identity?: BatchAccountIdentity;

/**
   * The type of identity used for the Batch account.
   */
readonly type: 'None''SystemAssigned''UserAssigned';

/**
   * The list of user identities associated with the Batch account.
   */
readonly userAssignedIdentities?: object;

/**
   * List of allowed authentication modes for the Batch account that can be used to authenticate with the data plane. This does not affect authentication with the control plane.
   */
readonly allowedAuthenticationModes?: String array containing any of:'AAD''SharedKey''TaskAuthenticationToken';

/**
   * The properties related to the auto-storage account.
   */
readonly autoStorage?: AutoStorageBasePropertiesOrAutoStorageProperties;

/**
   * Configures how customer data is encrypted inside the Batch account. By default, accounts are encrypted using a Microsoft managed key. For additional control, a customer-managed key can be used instead.
   */
readonly encryption?: EncryptionProperties;

/**
   * A reference to the Azure key vault associated with the Batch account.
   */
readonly keyVaultReference?: KeyVaultReference;

/**
   * The network profile only takes effect when publicNetworkAccess is enabled.
   */
readonly networkProfile?: NetworkProfile;

/**
   * The pool allocation mode also affects how clients may authenticate to the Batch Service API. If the mode is BatchService, clients may authenticate using access keys or Azure Active Directory. If the mode is UserSubscription, clients must use Azure Active Directory. The default is BatchService.
   */
readonly poolAllocationMode?: 'BatchService''UserSubscription';

/**
   * If not specified, the default value is 'enabled'.
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * The authentication mode which the Batch service will use to manage the auto-storage account.
   */
readonly authenticationMode?: 'BatchAccountManagedIdentity''StorageKeys';

/**
   * The identity referenced here must be assigned to pools which have compute nodes that need access to auto-storage.
   */
readonly nodeIdentityReference?: ComputeNodeIdentityReference;

/**
   * The resource ID of the storage account to be used for auto-storage account.
   */
readonly storageAccountId: string;

/**
   * The ARM resource id of the user assigned identity.
   */
readonly resourceId?: string;

/**
   * Type of the key source.
   */
readonly keySource?: 'Microsoft.Batch''Microsoft.KeyVault';

/**
   * Additional details when using Microsoft.KeyVault
   */
readonly keyVaultProperties?: KeyVaultProperties;

/**
   * Full path to the versioned secret. Examplehttps://mykeyvault.vault.azure.net/keys/testkey/6e34a81fef704045975661e297a4c053. To be usable the following prerequisites must be met:The Batch Account has a System Assigned identityThe account identity has been granted Key/Get, Key/Unwrap and Key/Wrap permissionsThe KeyVault has soft-delete and purge protection enabled
   */
readonly keyIdentifier?: string;

/**
   * The resource ID of the Azure key vault associated with the Batch account.
   */
readonly id: string;

/**
   * The URL of the Azure key vault associated with the Batch account.
   */
readonly url: string;

/**
   * Network access profile for batchAccount endpoint (Batch account data plane API).
   */
readonly accountAccess?: EndponumberAccessProfile;

/**
   * Network access profile for nodeManagement endpoint (Batch service managing compute nodes for Batch pools).
   */
readonly nodeManagementAccess?: EndponumberAccessProfile;

/**
   * Default action for endpoint access. It is only applicable when publicNetworkAccess is enabled.
   */
readonly defaultAction: 'Allow''Deny';

/**
   * Array of IP ranges to filter client IP address.
   */
readonly ipRules?: IPRule[];

/**
   * Action when client IP address is matched.
   */
readonly action: 'Allow';

/**
   * IPv4 address, or IPv4 address range in CIDR format.
   */
readonly value: string;
}

/**
 * BatchBatchaccounts resource
 */
export class BatchBatchaccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BatchBatchaccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Batch/batchAccounts@2022-10-01";
  }

  protected getResourceBody(props: BatchBatchaccountsProps): string {
    return JSON.stringify(
        {properties: {allowedAuthenticationModes: ["string"], autoStorage: {authenticationMode: "string", nodeIdentityReference: {resourceId: "string"}, storageAccountId: "string"}, encryption: {keySource: "string", keyVaultProperties: {keyIdentifier: "string"}}, keyVaultReference: {id: "string", url: "string"}, networkProfile: {accountAccess: {defaultAction: "string", ipRules: [{action: "Allow", value: "string"}]}, nodeManagementAccess: {defaultAction: "string", ipRules: [{action: "Allow", value: "string"}]}}, poolAllocationMode: "string", publicNetworkAccess: "string"}}
    );
  }
}
