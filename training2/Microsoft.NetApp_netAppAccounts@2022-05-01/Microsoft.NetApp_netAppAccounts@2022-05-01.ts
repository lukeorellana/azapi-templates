import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetappNetappaccountsProps extends IAzAPIBaseProps {
/**
   * The identity of the resource.
   */
readonly identity?: Identity;

/**
   * The identity type.
   */
readonly type: 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned';

/**
   * Gets or sets a list of key value pairs that describe the set of User Assigned identities that will be used with this storage account. The key is the ARM resource identifier of the identity. Only 1 User Assigned identity is permitted here.
   */
readonly userAssignedIdentities?: object;

/**
   * Active Directories
   */
readonly activeDirectories?: ActiveDirectory[];

/**
   * Encryption settings
   */
readonly encryption?: AccountEncryption;

/**
   * Id of the Active Directory
   */
readonly activeDirectoryId?: string;

/**
   * Users to be added to the Built-in Administrators active directory group. A list of unique usernames without domain specifier
   */
readonly administrators?: string[];

/**
   * Name of the active directory machine. This optional parameter is used only while creating kerberos volume
   */
readonly adName?: string;

/**
   * If enabled, AES encryption will be enabled for SMB communication.
   */
readonly aesEncryption?: bool;

/**
   * If enabled, NFS client local users can also (in addition to LDAP users) access the NFS volumes.
   */
readonly allowLocalNfsUsersWithLdap?: bool;

/**
   * Users to be added to the Built-in Backup Operator active directory group. A list of unique usernames without domain specifier
   */
readonly backupOperators?: string[];

/**
   * Comma separated list of DNS server IP addresses (IPv4 only) for the Active Directory domain
   */
readonly dns?: string;

/**
   * Name of the Active Directory domain
   */
readonly domain?: string;

/**
   * If enabled, Traffic between the SMB server to Domain Controller (DC) will be encrypted.
   */
readonly encryptDCConnections?: bool;

/**
   * kdc server IP addresses for the active directory machine. This optional parameter is used only while creating kerberos volume.
   */
readonly kdcIP?: string;

/**
   * Specifies whether or not the LDAP traffic needs to be secured via TLS.
   */
readonly ldapOverTLS?: bool;

/**
   * LDAP Search scope options
   */
readonly ldapSearchScope?: LdapSearchScopeOpt;

/**
   * Specifies whether or not the LDAP traffic needs to be signed.
   */
readonly ldapSigning?: bool;

/**
   * The Organizational Unit (OU) within the Windows Active Directory
   */
readonly organizationalUnit?: string;

/**
   * Plain text password of Active Directory domain administrator, value is masked in the response
   */
readonly password?: string;

/**
   * Domain Users in the Active directory to be given SeSecurityPrivilege privilege (Needed for SMB Continuously available shares for SQL). A list of unique usernames without domain specifier
   */
readonly securityOperators?: string[];

/**
   * When LDAP over SSL/TLS is enabled, the LDAP client is required to have base64 encoded Active Directory Certificate Service's self-signed root CA certificate, this optional parameter is used only for dual protocol with LDAP user-mapping volumes.
   */
readonly serverRootCACertificate?: string;

/**
   * The Active Directory site the service will limit Domain Controller discovery to
   */
readonly site?: string;

/**
   * NetBIOS name of the SMB server. This name will be registered as a computer account in the AD and used to mount volumes
   */
readonly smbServerName?: string;

/**
   * Username of Active Directory domain administrator
   */
readonly username?: string;

/**
   * This specifies the group DN, which overrides the base DN for group lookups.
   */
readonly groupDN?: string;

/**
   * This specifies the custom LDAP search filter to be used when looking up group membership from LDAP server.
   */
readonly groupMembershipFilter?: string;

/**
   * This specifies the user DN, which overrides the base DN for user lookups.
   */
readonly userDN?: string;

/**
   * Identity used to authenticate to KeyVault. Applicable if keySource is 'Microsoft.KeyVault'.
   */
readonly identity?: EncryptionIdentity;

/**
   * The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.NetApp, Microsoft.KeyVault
   */
readonly keySource?: 'Microsoft.KeyVault''Microsoft.NetApp';

/**
   * Properties provided by KeVault. Applicable if keySource is 'Microsoft.KeyVault'.
   */
readonly keyVaultProperties?: KeyVaultProperties;

/**
   * The ARM resource identifier of the user assigned identity used to authenticate with key vault. Applicable if identity.type has 'UserAssigned'. It should match key of identity.userAssignedIdentities.
   */
readonly userAssignedIdentity?: string;

/**
   * The name of KeyVault key.
   */
readonly keyName: string;

/**
   * The resource ID of KeyVault.
   */
readonly keyVaultResourceId: string;

/**
   * The Uri of KeyVault.
   */
readonly keyVaultUri: string;
}

/**
 * NetappNetappaccounts resource
 */
export class NetappNetappaccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetappNetappaccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.NetApp/netAppAccounts@2022-05-01";
  }

  protected getResourceBody(props: NetappNetappaccountsProps): string {
    return JSON.stringify(
        {properties: {activeDirectories: [{activeDirectoryId: "string", administrators: ["string"], adName: "string", aesEncryption: "${bool}", allowLocalNfsUsersWithLdap: "${bool}", backupOperators: ["string"], dns: "string", domain: "string", encryptDCConnections: "${bool}", kdcIP: "string", ldapOverTLS: "${bool}", ldapSearchScope: {groupDN: "string", groupMembershipFilter: "string", userDN: "string"}, ldapSigning: "${bool}", organizationalUnit: "string", password: "string", securityOperators: ["string"], serverRootCACertificate: "string", site: "string", smbServerName: "string", username: "string"}], encryption: {identity: {userAssignedIdentity: "string"}, keySource: "string", keyVaultProperties: {keyName: "string", keyVaultResourceId: "string", keyVaultUri: "string"}}}}
    );
  }
}
