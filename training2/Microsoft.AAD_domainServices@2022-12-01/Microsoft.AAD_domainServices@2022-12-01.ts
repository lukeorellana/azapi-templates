import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AadDomainservicesProps extends IAzAPIBaseProps {
/**
   * Resource etag
   */
readonly etag?: string;

/**
   * Configuration diagnostics data containing latest execution from client.
   */
readonly configDiagnostics?: ConfigDiagnostics;

/**
   * Domain Configuration Type
   */
readonly domainConfigurationType?: string;

/**
   * The name of the Azure domain that the user would like to deploy Domain Services to.
   */
readonly domainName?: string;

/**
   * DomainSecurity Settings
   */
readonly domainSecuritySettings?: DomainSecuritySettings;

/**
   * Enabled or Disabled flag to turn on Group-based filtered sync
   */
readonly filteredSync?: 'Disabled''Enabled';

/**
   * Secure LDAP Settings
   */
readonly ldapsSettings?: LdapsSettings;

/**
   * Notification Settings
   */
readonly notificationSettings?: NotificationSettings;

/**
   * List of ReplicaSets
   */
readonly replicaSets?: ReplicaSet[];

/**
   * Resource Forest Settings
   */
readonly resourceForestSettings?: ResourceForestSettings;

/**
   * Sku Type
   */
readonly sku?: string;

/**
   * All or CloudOnly, All users in AAD are synced to AAD DS domain or only users actively syncing in the cloud
   */
readonly syncScope?: 'All''CloudOnly';

/**
   * Last domain configuration diagnostics DateTime
   */
readonly lastExecuted?: string;

/**
   * List of Configuration Diagnostics validator results.
   */
readonly validatorResults?: ConfigDiagnosticsValidatorResult[];

/**
   * List of resource config validation issues.
   */
readonly issues?: ConfigDiagnosticsValidatorResultIssue[];

/**
   * Replica set location and subnet name
   */
readonly replicaSetSubnetDisplayName?: string;

/**
   * Status for individual validator after running diagnostics.
   */
readonly status?: 'Failure''None''OK''Running''Skipped''Warning';

/**
   * Validator identifier
   */
readonly validatorId?: string;

/**
   * List of domain resource property name or values used to compose a rich description.
   */
readonly descriptionParams?: string[];

/**
   * Validation issue identifier.
   */
readonly id?: string;

/**
   * A flag to determine whether or not ChannelBinding is enabled or disabled.
   */
readonly channelBinding?: 'Disabled''Enabled';

/**
   * A flag to determine whether or not KerberosArmoring is enabled or disabled.
   */
readonly kerberosArmoring?: 'Disabled''Enabled';

/**
   * A flag to determine whether or not KerberosRc4Encryption is enabled or disabled.
   */
readonly kerberosRc4Encryption?: 'Disabled''Enabled';

/**
   * A flag to determine whether or not LdapSigning is enabled or disabled.
   */
readonly ldapSigning?: 'Disabled''Enabled';

/**
   * A flag to determine whether or not NtlmV1 is enabled or disabled.
   */
readonly ntlmV1?: 'Disabled''Enabled';

/**
   * A flag to determine whether or not SyncKerberosPasswords is enabled or disabled.
   */
readonly syncKerberosPasswords?: 'Disabled''Enabled';

/**
   * A flag to determine whether or not SyncNtlmPasswords is enabled or disabled.
   */
readonly syncNtlmPasswords?: 'Disabled''Enabled';

/**
   * A flag to determine whether or not SyncOnPremPasswords is enabled or disabled.
   */
readonly syncOnPremPasswords?: 'Disabled''Enabled';

/**
   * A flag to determine whether or not TlsV1 is enabled or disabled.
   */
readonly tlsV1?: 'Disabled''Enabled';

/**
   * A flag to determine whether or not Secure LDAP access over the internet is enabled or disabled.
   */
readonly externalAccess?: 'Disabled''Enabled';

/**
   * A flag to determine whether or not Secure LDAP is enabled or disabled.
   */
readonly ldaps?: 'Disabled''Enabled';

/**
   * The certificate required to configure Secure LDAP. The parameter passed here should be a base64encoded representation of the certificate pfx file.
   */
readonly pfxCertificate?: string;

/**
   * The password to decrypt the provided Secure LDAP certificate pfx file.
   */
readonly pfxCertificatePassword?: string;

/**
   * The list of additional recipients
   */
readonly additionalRecipients?: string[];

/**
   * Should domain controller admins be notified
   */
readonly notifyDcAdmins?: 'Disabled''Enabled';

/**
   * Should global admins be notified
   */
readonly notifyGlobalAdmins?: 'Disabled''Enabled';

/**
   * The name of the virtual network that Domain Services will be deployed on. The id of the subnet that Domain Services will be deployed on. /virtualNetwork/vnetName/subnets/subnetName.
   */
readonly subnetId?: string;

/**
   * Resource Forest
   */
readonly resourceForest?: string;

/**
   * List of settings for Resource Forest
   */
readonly settings?: ForestTrust[];

/**
   * Friendly Name
   */
readonly friendlyName?: string;

/**
   * Remote Dns ips
   */
readonly remoteDnsIps?: string;

/**
   * Trust Direction
   */
readonly trustDirection?: string;

/**
   * Trusted Domain FQDN
   */
readonly trustedDomainFqdn?: string;

/**
   * Trust Password
   */
readonly trustPassword?: string;
}

/**
 * AadDomainservices resource
 */
export class AadDomainservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AadDomainservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AAD/domainServices@2022-12-01";
  }

  protected getResourceBody(props: AadDomainservicesProps): string {
    return JSON.stringify(
        {properties: {configDiagnostics: {lastExecuted: "string", validatorResults: [{issues: [{descriptionParams: ["string"], id: "string"}], replicaSetSubnetDisplayName: "string", status: "string", validatorId: "string"}]}, domainConfigurationType: "string", domainName: "string", domainSecuritySettings: {channelBinding: "string", kerberosArmoring: "string", kerberosRc4Encryption: "string", ldapSigning: "string", ntlmV1: "string", syncKerberosPasswords: "string", syncNtlmPasswords: "string", syncOnPremPasswords: "string", tlsV1: "string"}, filteredSync: "string", ldapsSettings: {externalAccess: "string", ldaps: "string", pfxCertificate: "string", pfxCertificatePassword: "string"}, notificationSettings: {additionalRecipients: ["string"], notifyDcAdmins: "string", notifyGlobalAdmins: "string"}, replicaSets: [{location: "string", subnetId: "string"}], resourceForestSettings: {resourceForest: "string", settings: [{friendlyName: "string", remoteDnsIps: "string", trustDirection: "string", trustedDomainFqdn: "string", trustPassword: "string"}]}, sku: "string", syncScope: "string"}, etag: "string"}
    );
  }
}
