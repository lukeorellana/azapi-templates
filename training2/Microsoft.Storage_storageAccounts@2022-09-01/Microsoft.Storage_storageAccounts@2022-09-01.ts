import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorageStorageaccountsProps extends IAzAPIBaseProps {
/**
   * Required. Gets or sets the SKU name.
   */
readonly sku: Sku;

/**
   * Required. Indicates the type of storage account.
   */
readonly kind: 'BlobStorage''BlockBlobStorage''FileStorage''Storage''StorageV2';

/**
   * Optional. Set the extended location of the resource. If not set, the storage account will be created in Azure main region. Otherwise it will be created in the specified extended location
   */
readonly extendedLocation?: ExtendedLocation;

/**
   * The identity of the resource.
   */
readonly identity?: Identity;

/**
   * The type of the extended location.
   */
readonly type?: 'EdgeZone';

/**
   * The identity type.
   */
readonly type: 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned';

/**
   * Gets or sets a list of key value pairs that describe the set of User Assigned identities that will be used with this storage account. The key is the ARM resource identifier of the identity. Only 1 User Assigned identity is permitted here.
   */
readonly userAssignedIdentities?: object;

/**
   * Required for storage accounts where kind = BlobStorage. The access tier is used for billing. The 'Premium' access tier is the default value for premium block blobs storage account type and it cannot be changed for the premium block blobs storage account type.
   */
readonly accessTier?: 'Cool''Hot''Premium';

/**
   * Allow or disallow public access to all blobs or containers in the storage account. The default interpretation is true for this property.
   */
readonly allowBlobPublicAccess?: bool;

/**
   * Allow or disallow cross AAD tenant object replication. The default interpretation is true for this property.
   */
readonly allowCrossTenantReplication?: bool;

/**
   * Restrict copy to and from Storage Accounts within an AAD tenant or with Private Links to the same VNet.
   */
readonly allowedCopyScope?: 'AAD''PrivateLink';

/**
   * Indicates whether the storage account permits requests to be authorized with the account access key via Shared Key. If false, then all requests, including shared access signatures, must be authorized with Azure Active Directory (Azure AD). The default value is null, which is equivalent to true.
   */
readonly allowSharedKeyAccess?: bool;

/**
   * Provides the identity based authentication settings for Azure Files.
   */
readonly azureFilesIdentityBasedAuthentication?: AzureFilesIdentityBasedAuthentication;

/**
   * User domain assigned to the storage account. Name is the CNAME source. Only one custom domain is supported per storage account at this time. To clear the existing custom domain, use an empty string for the custom domain name property.
   */
readonly customDomain?: CustomDomain;

/**
   * A boolean flag which indicates whether the default authentication is OAuth or not. The default interpretation is false for this property.
   */
readonly defaultToOAuthAuthentication?: bool;

/**
   * Allows you to specify the type of endpoint. Set this to AzureDNSZone to create a large number of accounts in a single subscription, which creates accounts in an Azure DNS Zone and the endpoint URL will have an alphanumeric DNS Zone identifier.
   */
readonly dnsEndpointType?: 'AzureDnsZone''Standard';

/**
   * Encryption settings to be used for server-side encryption for the storage account.
   */
readonly encryption?: Encryption;

/**
   * The property is immutable and can only be set to true at the account creation time. When set to true, it enables object level immutability for all the new containers in the account by default.
   */
readonly immutableStorageWithVersioning?: ImmutableStorageAccount;

/**
   * Account HierarchicalNamespace enabled if sets to true.
   */
readonly isHnsEnabled?: bool;

/**
   * Enables local users feature, if set to true
   */
readonly isLocalUserEnabled?: bool;

/**
   * NFS 3.0 protocol support enabled if set to true.
   */
readonly isNfsV3Enabled?: bool;

/**
   * Enables Secure File Transfer Protocol, if set to true
   */
readonly isSftpEnabled?: bool;

/**
   * KeyPolicy assigned to the storage account.
   */
readonly keyPolicy?: KeyPolicy;

/**
   * Allow large file shares if sets to Enabled. It cannot be disabled once it is enabled.
   */
readonly largeFileSharesState?: 'Disabled''Enabled';

/**
   * Set the minimum TLS version to be permitted on requests to storage. The default interpretation is TLS 1.0 for this property.
   */
readonly minimumTlsVersion?: 'TLS1_0''TLS1_1''TLS1_2';

/**
   * Network rule set
   */
readonly networkAcls?: NetworkRuleSet;

/**
   * Allow or disallow public network access to Storage Account. Value is optional but if passed in, must be 'Enabled' or 'Disabled'.
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * Maintains information about the network routing choice opted by the user for data transfer
   */
readonly routingPreference?: RoutingPreference;

/**
   * SasPolicy assigned to the storage account.
   */
readonly sasPolicy?: SasPolicy;

/**
   * Allows https traffic only to storage service if sets to true. The default value is true since API version 2019-04-01.
   */
readonly supportsHttpsTrafficOnly?: bool;

/**
   * Required if directoryServiceOptions are AD, optional if they are AADKERB.
   */
readonly activeDirectoryProperties?: ActiveDirectoryProperties;

/**
   * Default share permission for users using Kerberos authentication if RBAC role is not assigned.
   */
readonly defaultSharePermission?: 'None''StorageFileDataSmbShareContributor''StorageFileDataSmbShareElevatedContributor''StorageFileDataSmbShareReader';

/**
   * Indicates the directory service used. Note that this enum may be extended in the future.
   */
readonly directoryServiceOptions: 'AADDS''AADKERB''AD''None';

/**
   * Specifies the Active Directory account type for Azure Storage.
   */
readonly accountType?: 'Computer''User';

/**
   * Specifies the security identifier (SID) for Azure Storage.
   */
readonly azureStorageSid?: string;

/**
   * Specifies the domain GUID.
   */
readonly domainGuid: string;

/**
   * Specifies the primary domain that the AD DNS server is authoritative for.
   */
readonly domainName: string;

/**
   * Specifies the security identifier (SID).
   */
readonly domainSid?: string;

/**
   * Specifies the Active Directory forest to get.
   */
readonly forestName?: string;

/**
   * Specifies the NetBIOS domain name.
   */
readonly netBiosDomainName?: string;

/**
   * Specifies the Active Directory SAMAccountName for Azure Storage.
   */
readonly samAccountName?: string;

/**
   * Indicates whether indirect CName validation is enabled. Default value is false. This should only be set on updates.
   */
readonly useSubDomainName?: bool;

/**
   * The identity to be used with service-side encryption at rest.
   */
readonly identity?: EncryptionIdentity;

/**
   * The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.Storage, Microsoft.Keyvault
   */
readonly keySource?: 'Microsoft.Keyvault''Microsoft.Storage';

/**
   * Properties provided by key vault.
   */
readonly keyvaultproperties?: KeyVaultProperties;

/**
   * A boolean indicating whether or not the service applies a secondary layer of encryption with platform managed keys for data at rest.
   */
readonly requireInfrastructureEncryption?: bool;

/**
   * List of services which support encryption.
   */
readonly services?: EncryptionServices;

/**
   * ClientId of the multi-tenant application to be used in conjunction with the user-assigned identity for cross-tenant customer-managed-keys server-side encryption on the storage account.
   */
readonly federatedIdentityClientId?: string;

/**
   * Resource identifier of the UserAssigned identity to be associated with server-side encryption on the storage account.
   */
readonly userAssignedIdentity?: string;

/**
   * The name of KeyVault key.
   */
readonly keyname?: string;

/**
   * The Uri of KeyVault.
   */
readonly keyvaulturi?: string;

/**
   * The version of KeyVault key.
   */
readonly keyversion?: string;

/**
   * The encryption function of the blob storage service.
   */
readonly blob?: EncryptionService;

/**
   * The encryption function of the file storage service.
   */
readonly file?: EncryptionService;

/**
   * The encryption function of the queue storage service.
   */
readonly queue?: EncryptionService;

/**
   * The encryption function of the table storage service.
   */
readonly table?: EncryptionService;

/**
   * A boolean indicating whether or not the service encrypts the data as it is stored. Encryption at rest is enabled by default today and cannot be disabled.
   */
readonly enabled?: bool;

/**
   * Encryption key type to be used for the encryption service. 'Account' key type implies that an account-scoped encryption key will be used. 'Service' key type implies that a default service key is used.
   */
readonly keyType?: 'Account''Service';

/**
   * A boolean flag which enables account-level immutability. All the containers under such an account have object-level immutability enabled by default.
   */
readonly enabled?: bool;

/**
   * Specifies the default account-level immutability policy which is inherited and applied to objects that do not possess an explicit immutability policy at the object level. The object-level immutability policy has higher precedence than the container-level immutability policy, which has a higher precedence than the account-level immutability policy.
   */
readonly immutabilityPolicy?: AccountImmutabilityPolicyProperties;

/**
   * This property can only be changed for disabled and unlocked time-based retention policies. When enabled, new blocks can be written to an append blob while maintaining immutability protection and compliance. Only new blocks can be added and any existing blocks cannot be modified or deleted.
   */
readonly allowProtectedAppendWrites?: bool;

/**
   * The immutability period for the blobs in the container since the policy creation, in days.
   */
readonly immutabilityPeriodSinceCreationInDays?: number;

/**
   * The ImmutabilityPolicy state defines the mode of the policy. Disabled state disables the policy, Unlocked state allows increase and decrease of immutability retention time and also allows toggling allowProtectedAppendWrites property, Locked state only allows the increase of the immutability retention time. A policy can only be created in a Disabled or Unlocked state and can be toggled between the two states. Only a policy in an Unlocked state can transition to a Locked state which cannot be reverted.
   */
readonly state?: 'Disabled''Locked''Unlocked';

/**
   * The key expiration period in days.
   */
readonly keyExpirationPeriodInDays: number;

/**
   * Specifies whether traffic is bypassed for Logging/Metrics/AzureServices. Possible values are any combination of Logging,Metrics,AzureServices (For example, "Logging, Metrics"), or None to bypass none of those traffics.
   */
readonly bypass?: 'AzureServices''Logging''Metrics''None';

/**
   * Specifies the default action of allow or deny when no other rules match.
   */
readonly defaultAction: 'Allow''Deny';

/**
   * Sets the IP ACL rules
   */
readonly ipRules?: IPRule[];

/**
   * Sets the resource access rules
   */
readonly resourceAccessRules?: ResourceAccessRule[];

/**
   * Sets the virtual network rules
   */
readonly virtualNetworkRules?: VirtualNetworkRule[];

/**
   * The action of IP ACL rule.
   */
readonly action?: 'Allow';

/**
   * Specifies the IP or IP range in CIDR format. Only IPV4 address is allowed.
   */
readonly value: string;

/**
   * Resource Id
   */
readonly resourceId?: string;

/**
   * Tenant Id
   */
readonly tenantId?: string;

/**
   * The action of virtual network rule.
   */
readonly action?: 'Allow';

/**
   * Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}.
   */
readonly id: string;

/**
   * Gets the state of virtual network rule.
   */
readonly state?: 'Deprovisioning''Failed''NetworkSourceDeleted''Provisioning''Succeeded';

/**
   * A boolean flag which indicates whether internet routing storage endpoints are to be published
   */
readonly publishInternetEndpoints?: bool;

/**
   * A boolean flag which indicates whether microsoft routing storage endpoints are to be published
   */
readonly publishMicrosoftEndpoints?: bool;

/**
   * Routing Choice defines the kind of network routing opted by the user.
   */
readonly routingChoice?: 'InternetRouting''MicrosoftRouting';

/**
   * The SAS expiration action. Can only be Log.
   */
readonly expirationAction: 'Log';

/**
   * The SAS expiration period, DD.HH:MM:SS.
   */
readonly sasExpirationPeriod: string;
}

/**
 * StorageStorageaccounts resource
 */
export class StorageStorageaccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorageStorageaccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Storage/storageAccounts@2022-09-01";
  }

  protected getResourceBody(props: StorageStorageaccountsProps): string {
    return JSON.stringify(
        {properties: {accessTier: "string", allowBlobPublicAccess: "${bool}", allowCrossTenantReplication: "${bool}", allowedCopyScope: "string", allowSharedKeyAccess: "${bool}", azureFilesIdentityBasedAuthentication: {activeDirectoryProperties: {accountType: "string", azureStorageSid: "string", domainGuid: "string", domainName: "string", domainSid: "string", forestName: "string", netBiosDomainName: "string", samAccountName: "string"}, defaultSharePermission: "string", directoryServiceOptions: "string"}, customDomain: {name: "string", useSubDomainName: "${bool}"}, defaultToOAuthAuthentication: "${bool}", dnsEndpointType: "string", encryption: {identity: {federatedIdentityClientId: "string", userAssignedIdentity: "string"}, keySource: "string", keyvaultproperties: {keyname: "string", keyvaulturi: "string", keyversion: "string"}, requireInfrastructureEncryption: "${bool}", services: {blob: {enabled: "${bool}", keyType: "string"}, file: {enabled: "${bool}", keyType: "string"}, queue: {enabled: "${bool}", keyType: "string"}, table: {enabled: "${bool}", keyType: "string"}}}, immutableStorageWithVersioning: {enabled: "${bool}", immutabilityPolicy: {allowProtectedAppendWrites: "${bool}", immutabilityPeriodSinceCreationInDays: "${int}", state: "string"}}, isHnsEnabled: "${bool}", isLocalUserEnabled: "${bool}", isNfsV3Enabled: "${bool}", isSftpEnabled: "${bool}", keyPolicy: {keyExpirationPeriodInDays: "${int}"}, largeFileSharesState: "string", minimumTlsVersion: "string", networkAcls: {bypass: "string", defaultAction: "string", ipRules: [{action: "Allow", value: "string"}], resourceAccessRules: [{resourceId: "string", tenantId: "string"}], virtualNetworkRules: [{action: "Allow", id: "string", state: "string"}]}, publicNetworkAccess: "string", routingPreference: {publishInternetEndpoints: "${bool}", publishMicrosoftEndpoints: "${bool}", routingChoice: "string"}, sasPolicy: {expirationAction: "Log", sasExpirationPeriod: "string"}, supportsHttpsTrafficOnly: "${bool}"}, sku: {name: "string"}, kind: "string", extendedLocation: {name: "string", type: "EdgeZone"}}
    );
  }
}
