import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkFirewallpoliciesProps extends IAzAPIBaseProps {
/**
   * The identity of the firewall policy.
   */
readonly identity?: ManagedServiceIdentity;

/**
   * The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine.
   */
readonly type?: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
readonly userAssignedIdentities?: object;

/**
   * The parent firewall policy from which rules are inherited.
   */
readonly basePolicy?: SubResource;

/**
   * DNS Proxy Settings definition.
   */
readonly dnsSettings?: DnsSettings;

/**
   * Explicit Proxy Settings definition.
   */
readonly explicitProxy?: ExplicitProxy;

/**
   * Insights on Firewall Policy.
   */
readonly insights?: FirewallPolicyInsights;

/**
   * The configuration for Intrusion detection.
   */
readonly intrusionDetection?: FirewallPolicyIntrusionDetection;

/**
   * The Firewall Policy SKU.
   */
readonly sku?: FirewallPolicySku;

/**
   * The private IP addresses/IP ranges to which traffic will not be SNAT.
   */
readonly snat?: FirewallPolicySnat;

/**
   * SQL Settings definition.
   */
readonly sql?: FirewallPolicySQL;

/**
   * The operation mode for Threat Intelligence.
   */
readonly threatIntelMode?: 'Alert''Deny''Off';

/**
   * ThreatIntel Allowlist for Firewall Policy.
   */
readonly threatIntelWhitelist?: FirewallPolicyThreatIntelWhitelist;

/**
   * TLS Configuration definition.
   */
readonly transportSecurity?: FirewallPolicyTransportSecurity;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Enable DNS Proxy on Firewalls attached to the Firewall Policy.
   */
readonly enableProxy?: bool;

/**
   * FQDNs in Network Rules are supported when set to true.
   */
readonly requireProxyForNetworkRules?: bool;

/**
   * List of Custom DNS Servers.
   */
readonly servers?: string[];

/**
   * When set to true, explicit proxy mode is enabled.
   */
readonly enableExplicitProxy?: bool;

/**
   * When set to true, pac file port and url needs to be provided.
   */
readonly enablePacFile?: bool;

/**
   * Port number for explicit proxy http protocol, cannot be greater than 64000.
   */
readonly httpPort?: number;

/**
   * Port number for explicit proxy https protocol, cannot be greater than 64000.
   */
readonly httpsPort?: number;

/**
   * SAS URL for PAC file.
   */
readonly pacFile?: string;

/**
   * Port number for firewall to serve PAC file.
   */
readonly pacFilePort?: number;

/**
   * A flag to indicate if the insights are enabled on the policy.
   */
readonly isEnabled?: bool;

/**
   * Workspaces needed to configure the Firewall Policy Insights.
   */
readonly logAnalyticsResources?: FirewallPolicyLogAnalyticsResources;

/**
   * Number of days the insights should be enabled on the policy.
   */
readonly retentionDays?: number;

/**
   * The default workspace Id for Firewall Policy Insights.
   */
readonly defaultWorkspaceId?: SubResource;

/**
   * List of workspaces for Firewall Policy Insights.
   */
readonly workspaces?: FirewallPolicyLogAnalyticsWorkspace[];

/**
   * Region to configure the Workspace.
   */
readonly region?: string;

/**
   * The workspace Id for Firewall Policy Insights.
   */
readonly workspaceId?: SubResource;

/**
   * Intrusion detection configuration properties.
   */
readonly configuration?: FirewallPolicyIntrusionDetectionConfiguration;

/**
   * Intrusion detection general state.
   */
readonly mode?: 'Alert''Deny''Off';

/**
   * List of rules for traffic to bypass.
   */
readonly bypassTrafficSettings?: FirewallPolicyIntrusionDetectionBypassTrafficSpecifi...[];

/**
   * IDPS Private IP address ranges are used to identify traffic direction (i.e. inbound, outbound, etc.). By default, only ranges defined by IANA RFC 1918 are considered private IP addresses. To modify default ranges, specify your Private IP address ranges with this property
   */
readonly privateRanges?: string[];

/**
   * List of specific signatures states.
   */
readonly signatureOverrides?: FirewallPolicyIntrusionDetectionSignatureSpecificati...[];

/**
   * Description of the bypass traffic rule.
   */
readonly description?: string;

/**
   * List of destination IP addresses or ranges for this rule.
   */
readonly destinationAddresses?: string[];

/**
   * List of destination IpGroups for this rule.
   */
readonly destinationIpGroups?: string[];

/**
   * List of destination ports or ranges.
   */
readonly destinationPorts?: string[];

/**
   * The rule bypass protocol.
   */
readonly protocol?: 'ANY''ICMP''TCP''UDP';

/**
   * List of source IP addresses or ranges for this rule.
   */
readonly sourceAddresses?: string[];

/**
   * List of source IpGroups for this rule.
   */
readonly sourceIpGroups?: string[];

/**
   * Signature id.
   */
readonly id?: string;

/**
   * The signature state.
   */
readonly mode?: 'Alert''Deny''Off';

/**
   * Tier of Firewall Policy.
   */
readonly tier?: 'Basic''Premium''Standard';

/**
   * The operation mode for automatically learning private ranges to not be SNAT
   */
readonly autoLearnPrivateRanges?: 'Disabled''Enabled';

/**
   * List of private IP addresses/IP address ranges to not be SNAT.
   */
readonly privateRanges?: string[];

/**
   * A flag to indicate if SQL Redirect traffic filtering is enabled. Turning on the flag requires no rule using port 11000-11999.
   */
readonly allowSqlRedirect?: bool;

/**
   * List of FQDNs for the ThreatIntel Allowlist.
   */
readonly fqdns?: string[];

/**
   * List of IP addresses for the ThreatIntel Allowlist.
   */
readonly ipAddresses?: string[];

/**
   * The CA used for intermediate CA generation.
   */
readonly certificateAuthority?: FirewallPolicyCertificateAuthority;

/**
   * Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault.
   */
readonly keyVaultSecretId?: string;
}

/**
 * NetworkFirewallpolicies resource
 */
export class NetworkFirewallpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkFirewallpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/firewallPolicies@2023-04-01";
  }

  protected getResourceBody(props: NetworkFirewallpoliciesProps): string {
    return JSON.stringify(
        {properties: {basePolicy: {id: "string"}, dnsSettings: {enableProxy: "${bool}", requireProxyForNetworkRules: "${bool}", servers: ["string"]}, explicitProxy: {enableExplicitProxy: "${bool}", enablePacFile: "${bool}", httpPort: "${int}", httpsPort: "${int}", pacFile: "string", pacFilePort: "${int}"}, insights: {isEnabled: "${bool}", logAnalyticsResources: {defaultWorkspaceId: {id: "string"}, workspaces: [{region: "string", workspaceId: {id: "string"}}]}, retentionDays: "${int}"}, intrusionDetection: {configuration: {bypassTrafficSettings: [{description: "string", destinationAddresses: ["string"], destinationIpGroups: ["string"], destinationPorts: ["string"], name: "string", protocol: "string", sourceAddresses: ["string"], sourceIpGroups: ["string"]}], privateRanges: ["string"], signatureOverrides: [{id: "string", mode: "string"}]}, mode: "string"}, sku: {tier: "string"}, snat: {autoLearnPrivateRanges: "string", privateRanges: ["string"]}, sql: {allowSqlRedirect: "${bool}"}, threatIntelMode: "string", threatIntelWhitelist: {fqdns: ["string"], ipAddresses: ["string"]}, transportSecurity: {certificateAuthority: {keyVaultSecretId: "string", name: "string"}}}}
    );
  }
}
