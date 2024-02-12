import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatalakestoreAccountsProps extends IAzAPIBaseProps {
/**
   * The Key Vault encryption identity, if any.
   */
readonly identity?: EncryptionIdentity;

/**
   * The type of encryption being used. Currently the only supported type is 'SystemAssigned'.
   */
readonly type: 'SystemAssigned';

/**
   * The default owner group for all new folders and files created in the Data Lake Store account.
   */
readonly defaultGroup?: string;

/**
   * The Key Vault encryption configuration.
   */
readonly encryptionConfig?: EncryptionConfig;

/**
   * The current state of encryption for this Data Lake Store account.
   */
readonly encryptionState?: 'Disabled''Enabled';

/**
   * The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced.
   */
readonly firewallAllowAzureIps?: 'Disabled''Enabled';

/**
   * The list of firewall rules associated with this Data Lake Store account.
   */
readonly firewallRules?: CreateFirewallRuleWithAccountParametersOrFirewallRul...[];

/**
   * The current state of the IP address firewall for this Data Lake Store account.
   */
readonly firewallState?: 'Disabled''Enabled';

/**
   * The commitment tier to use for next month.
   */
readonly newTier?: 'Commitment_100TB''Commitment_10TB''Commitment_1PB''Commitment_1TB''Commitment_500TB''Commitment_5PB''Consumption';

/**
   * The list of trusted identity providers associated with this Data Lake Store account.
   */
readonly trustedIdProviders?: CreateTrustedIdProviderWithAccountParametersOrTruste...[];

/**
   * The current state of the trusted identity provider feature for this Data Lake Store account.
   */
readonly trustedIdProviderState?: 'Disabled''Enabled';

/**
   * The list of virtual network rules associated with this Data Lake Store account.
   */
readonly virtualNetworkRules?: CreateVirtualNetworkRuleWithAccountParametersOrVirtu...[];

/**
   * The Key Vault information for connecting to user managed encryption keys.
   */
readonly keyVaultMetaInfo?: KeyVaultMetaInfo;

/**
   * The type of encryption configuration being used. Currently the only supported types are 'UserManaged' and 'ServiceManaged'.
   */
readonly type: 'ServiceManaged''UserManaged';

/**
   * The name of the user managed encryption key.
   */
readonly encryptionKeyName: string;

/**
   * The version of the user managed encryption key.
   */
readonly encryptionKeyVersion: string;

/**
   * The resource identifier for the user managed Key Vault being used to encrypt.
   */
readonly keyVaultResourceId: string;

/**
   * The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
   */
readonly endIpAddress: string;

/**
   * The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
   */
readonly startIpAddress: string;

/**
   * The URL of this trusted identity provider.
   */
readonly idProvider: string;

/**
   * The resource identifier for the subnet.
   */
readonly subnetId: string;
}

/**
 * DatalakestoreAccounts resource
 */
export class DatalakestoreAccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatalakestoreAccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataLakeStore/accounts@2016-11-01";
  }

  protected getResourceBody(props: DatalakestoreAccountsProps): string {
    return JSON.stringify(
        {properties: {defaultGroup: "string", encryptionConfig: {keyVaultMetaInfo: {encryptionKeyName: "string", encryptionKeyVersion: "string", keyVaultResourceId: "string"}, type: "string"}, encryptionState: "string", firewallAllowAzureIps: "string", firewallRules: [{name: "string", properties: {endIpAddress: "string", startIpAddress: "string"}}], firewallState: "string", newTier: "string", trustedIdProviders: [{name: "string", properties: {idProvider: "string"}}], trustedIdProviderState: "string", virtualNetworkRules: [{name: "string", properties: {subnetId: "string"}}]}}
    );
  }
}
