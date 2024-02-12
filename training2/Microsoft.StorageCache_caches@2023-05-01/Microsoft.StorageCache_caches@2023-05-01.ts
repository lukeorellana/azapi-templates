import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StoragecacheCachesProps extends IAzAPIBaseProps {
/**
   * SKU for the cache.
   */
readonly sku?: CacheSku;

/**
   * The identity of the cache, if configured.
   */
readonly identity?: CacheIdentity;

/**
   * The type of identity used for the cache
   */
readonly type?: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * A dictionary where each key is a user assigned identity resource ID, and each key's value is an empty dictionary.
   */
readonly userAssignedIdentities?: object;

/**
   * The size of this Cache, in GB.
   */
readonly cacheSizeGB?: number;

/**
   * Specifies Directory Services settings of the cache.
   */
readonly directoryServicesSettings?: CacheDirectorySettings;

/**
   * Specifies encryption settings of the cache.
   */
readonly encryptionSettings?: CacheEncryptionSettings;

/**
   * Specifies network settings of the cache.
   */
readonly networkSettings?: CacheNetworkSettings;

/**
   * Specifies security settings of the cache.
   */
readonly securitySettings?: CacheSecuritySettings;

/**
   * Subnet used for the cache.
   */
readonly subnet?: string;

/**
   * Upgrade settings of the cache.
   */
readonly upgradeSettings?: CacheUpgradeSettings;

/**
   * Availability zones for resources. This field should only contain a single element in the array.
   */
readonly zones?: string[];

/**
   * Specifies settings for joining the HPC Cache to an Active Directory domain.
   */
readonly activeDirectory?: CacheActiveDirectorySettings;

/**
   * Specifies settings for Extended Groups. Extended Groups allows users to be members of more than 16 groups.
   */
readonly usernameDownload?: CacheUsernameDownloadSettings;

/**
   * The NetBIOS name to assign to the HPC Cache when it joins the Active Directory domain as a server. Length must 1-15 characters from the class [-0-9a-zA-Z].
   */
readonly cacheNetBiosName: string;

/**
   * Active Directory admin credentials used to join the HPC Cache to a domain.
   */
readonly credentials?: CacheActiveDirectorySettingsCredentials;

/**
   * The fully qualified domain name of the Active Directory domain controller.
   */
readonly domainName: string;

/**
   * The Active Directory domain's NetBIOS name.
   */
readonly domainNetBiosName: string;

/**
   * Primary DNS IP address used to resolve the Active Directory domain controller's fully qualified domain name.
   */
readonly primaryDnsIpAddress: string;

/**
   * Secondary DNS IP address used to resolve the Active Directory domain controller's fully qualified domain name.
   */
readonly secondaryDnsIpAddress?: string;

/**
   * Plain text password of the Active Directory domain administrator. This value is stored encrypted and not returned on response.
   */
readonly password?: string;

/**
   * Username of the Active Directory domain administrator. This value is stored encrypted and not returned on response.
   */
readonly username: string;

/**
   * Determines if the certificate should be automatically downloaded. This applies to 'caCertificateURI' only if 'requireValidCertificate' is true.
   */
readonly autoDownloadCertificate?: bool;

/**
   * The URI of the CA certificate to validate the LDAP secure connection. This field must be populated when 'requireValidCertificate' is set to true.
   */
readonly caCertificateURI?: string;

/**
   * When present, these are the credentials for the secure LDAP connection.
   */
readonly credentials?: CacheUsernameDownloadSettingsCredentials;

/**
   * Whether or not the LDAP connection should be encrypted.
   */
readonly encryptLdapConnection?: bool;

/**
   * Whether or not Extended Groups is enabled.
   */
readonly extendedGroups?: bool;

/**
   * The URI of the file containing group information (in /etc/group file format). This field must be populated when 'usernameSource' is set to 'File'.
   */
readonly groupFileURI?: string;

/**
   * The base distinguished name for the LDAP domain.
   */
readonly ldapBaseDN?: string;

/**
   * The fully qualified domain name or IP address of the LDAP server to use.
   */
readonly ldapServer?: string;

/**
   * Determines if the certificates must be validated by a certificate authority. When true, caCertificateURI must be provided.
   */
readonly requireValidCertificate?: bool;

/**
   * The URI of the file containing user information (in /etc/passwd file format). This field must be populated when 'usernameSource' is set to 'File'.
   */
readonly userFileURI?: string;

/**
   * This setting determines how the cache gets username and group names for clients.
   */
readonly usernameSource?: 'AD''File''LDAP''None';

/**
   * The Bind Distinguished Name identity to be used in the secure LDAP connection. This value is stored encrypted and not returned on response.
   */
readonly bindDn?: string;

/**
   * The Bind password to be used in the secure LDAP connection. This value is stored encrypted and not returned on response.
   */
readonly bindPassword?: string;

/**
   * Specifies the location of the key encryption key in key vault.
   */
readonly keyEncryptionKey?: KeyVaultKeyReference;

/**
   * Specifies whether the service will automatically rotate to the newest version of the key in the key vault.
   */
readonly rotationToLatestKeyVersionEnabled?: bool;

/**
   * The URL referencing a key encryption key in key vault.
   */
readonly keyUrl: string;

/**
   * Describes a resource Id to source key vault.
   */
readonly sourceVault: KeyVaultKeyReferenceSourceVault;

/**
   * Resource Id.
   */
readonly id?: string;

/**
   * DNS search domain
   */
readonly dnsSearchDomain?: string;

/**
   * DNS servers for the cache to use.  It will be set from the network configuration if no value is provided.
   */
readonly dnsServers?: string[];

/**
   * The IPv4 maximum transmission unit configured for the subnet.
   */
readonly mtu?: number;

/**
   * NTP server IP Address or FQDN for the cache to use. The default is time.windows.com.
   */
readonly ntpServer?: string;

/**
   * NFS access policies defined for this cache.
   */
readonly accessPolicies?: NfsAccessPolicy[];

/**
   * The set of rules describing client accesses allowed under this policy.
   */
readonly accessRules: NfsAccessRule[];

/**
   * Access allowed by this rule.
   */
readonly access: 'no''ro''rw';

/**
   * GID value that replaces 0 when rootSquash is true. This will use the value of anonymousUID if not provided.
   */
readonly anonymousGID?: string;

/**
   * UID value that replaces 0 when rootSquash is true. 65534 will be used if not provided.
   */
readonly anonymousUID?: string;

/**
   * Filter applied to the scope for this rule. The filter's format depends on its scope. 'default' scope matches all clients and has no filter value. 'network' scope takes a filter in CIDR format (for example, 10.99.1.0/24). 'host' takes an IP address or fully qualified domain name as filter. If a client does not match any filter rule and there is no default rule, access is denied.
   */
readonly filter?: string;

/**
   * Map root accesses to anonymousUID and anonymousGID.
   */
readonly rootSquash?: bool;

/**
   * Scope for this rule. The scope and filter determine which clients match the rule.
   */
readonly scope: 'default''host''network';

/**
   * For the default policy, allow access to subdirectories under the root export. If this is set to no, clients can only mount the path '/'. If set to yes, clients can mount a deeper path, like '/a/b'.
   */
readonly submountAccess?: bool;

/**
   * Allow SUID semantics.
   */
readonly suid?: bool;

/**
   * When upgradeScheduleEnabled is true, this field holds the user-chosen upgrade time. At the user-chosen time, the firmware update will automatically be installed on the cache.
   */
readonly scheduledTime?: string;

/**
   * True if the user chooses to select an installation time between now and firmwareUpdateDeadline. Else the firmware will automatically be installed after firmwareUpdateDeadline if not triggered earlier via the upgrade operation.
   */
readonly upgradeScheduleEnabled?: bool;
}

/**
 * StoragecacheCaches resource
 */
export class StoragecacheCaches extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StoragecacheCachesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorageCache/caches@2023-05-01";
  }

  protected getResourceBody(props: StoragecacheCachesProps): string {
    return JSON.stringify(
        {properties: {cacheSizeGB: "${int}", directoryServicesSettings: {activeDirectory: {cacheNetBiosName: "string", credentials: {password: "string", username: "string"}, domainName: "string", domainNetBiosName: "string", primaryDnsIpAddress: "string", secondaryDnsIpAddress: "string"}, usernameDownload: {autoDownloadCertificate: "${bool}", caCertificateURI: "string", credentials: {bindDn: "string", bindPassword: "string"}, encryptLdapConnection: "${bool}", extendedGroups: "${bool}", groupFileURI: "string", ldapBaseDN: "string", ldapServer: "string", requireValidCertificate: "${bool}", userFileURI: "string", usernameSource: "string"}}, encryptionSettings: {keyEncryptionKey: {keyUrl: "string", sourceVault: {id: "string"}}, rotationToLatestKeyVersionEnabled: "${bool}"}, networkSettings: {dnsSearchDomain: "string", dnsServers: ["string"], mtu: "${int}", ntpServer: "string"}, securitySettings: {accessPolicies: [{accessRules: [{access: "string", anonymousGID: "string", anonymousUID: "string", filter: "string", rootSquash: "${bool}", scope: "string", submountAccess: "${bool}", suid: "${bool}"}], name: "string"}]}, subnet: "string", upgradeSettings: {scheduledTime: "string", upgradeScheduleEnabled: "${bool}"}, zones: ["string"]}, sku: {name: "string"}}
    );
  }
}
