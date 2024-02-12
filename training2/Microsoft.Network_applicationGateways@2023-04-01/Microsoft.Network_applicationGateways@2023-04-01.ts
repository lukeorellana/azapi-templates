import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkApplicationgatewaysProps extends IAzAPIBaseProps {
/**
   * The identity of the application gateway, if configured.
   */
readonly identity?: ManagedServiceIdentity;

/**
   * A list of availability zones denoting where the resource needs to come from.
   */
readonly zones?: string[];

/**
   * The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine.
   */
readonly type?: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
readonly userAssignedIdentities?: object;

/**
   * Authentication certificates of the application gateway resource. For default limits, seeApplication Gateway limits.
   */
readonly authenticationCertificates?: ApplicationGatewayAuthenticationCertificate[];

/**
   * Autoscale Configuration.
   */
readonly autoscaleConfiguration?: ApplicationGatewayAutoscaleConfiguration;

/**
   * Backend address pool of the application gateway resource. For default limits, seeApplication Gateway limits.
   */
readonly backendAddressPools?: ApplicationGatewayBackendAddressPool[];

/**
   * Backend http settings of the application gateway resource. For default limits, seeApplication Gateway limits.
   */
readonly backendHttpSettingsCollection?: ApplicationGatewayBackendHttpSettings[];

/**
   * Backend settings of the application gateway resource. For default limits, seeApplication Gateway limits.
   */
readonly backendSettingsCollection?: ApplicationGatewayBackendSettings[];

/**
   * Custom error configurations of the application gateway resource.
   */
readonly customErrorConfigurations?: ApplicationGatewayCustomError[];

/**
   * Whether FIPS is enabled on the application gateway resource.
   */
readonly enableFips?: bool;

/**
   * Whether HTTP2 is enabled on the application gateway resource.
   */
readonly enableHttp2?: bool;

/**
   * Reference to the FirewallPolicy resource.
   */
readonly firewallPolicy?: SubResource;

/**
   * If true, associates a firewall policy with an application gateway regardless whether the policy differs from the WAF Config.
   */
readonly forceFirewallPolicyAssociation?: bool;

/**
   * Frontend IP addresses of the application gateway resource. For default limits, seeApplication Gateway limits.
   */
readonly frontendIPConfigurations?: ApplicationGatewayFrontendIPConfiguration[];

/**
   * Frontend ports of the application gateway resource. For default limits, seeApplication Gateway limits.
   */
readonly frontendPorts?: ApplicationGatewayFrontendPort[];

/**
   * Subnets of the application gateway resource. For default limits, seeApplication Gateway limits.
   */
readonly gatewayIPConfigurations?: ApplicationGatewayIPConfiguration[];

/**
   * Global Configuration.
   */
readonly globalConfiguration?: ApplicationGatewayGlobalConfiguration;

/**
   * Http listeners of the application gateway resource. For default limits, seeApplication Gateway limits.
   */
readonly httpListeners?: ApplicationGatewayHttpListener[];

/**
   * Listeners of the application gateway resource. For default limits, seeApplication Gateway limits.
   */
readonly listeners?: ApplicationGatewayListener[];

/**
   * Load distribution policies of the application gateway resource.
   */
readonly loadDistributionPolicies?: ApplicationGatewayLoadDistributionPolicy[];

/**
   * PrivateLink configurations on application gateway.
   */
readonly privateLinkConfigurations?: ApplicationGatewayPrivateLinkConfiguration[];

/**
   * Probes of the application gateway resource.
   */
readonly probes?: ApplicationGatewayProbe[];

/**
   * Redirect configurations of the application gateway resource. For default limits, seeApplication Gateway limits.
   */
readonly redirectConfigurations?: ApplicationGatewayRedirectConfiguration[];

/**
   * Request routing rules of the application gateway resource.
   */
readonly requestRoutingRules?: ApplicationGatewayRequestRoutingRule[];

/**
   * Rewrite rules for the application gateway resource.
   */
readonly rewriteRuleSets?: ApplicationGatewayRewriteRuleSet[];

/**
   * Routing rules of the application gateway resource.
   */
readonly routingRules?: ApplicationGatewayRoutingRule[];

/**
   * SKU of the application gateway resource.
   */
readonly sku?: ApplicationGatewaySku;

/**
   * SSL certificates of the application gateway resource. For default limits, seeApplication Gateway limits.
   */
readonly sslCertificates?: ApplicationGatewaySslCertificate[];

/**
   * SSL policy of the application gateway resource.
   */
readonly sslPolicy?: ApplicationGatewaySslPolicy;

/**
   * SSL profiles of the application gateway resource. For default limits, seeApplication Gateway limits.
   */
readonly sslProfiles?: ApplicationGatewaySslProfile[];

/**
   * Trusted client certificates of the application gateway resource. For default limits, seeApplication Gateway limits.
   */
readonly trustedClientCertificates?: ApplicationGatewayTrustedClientCertificate[];

/**
   * Trusted Root certificates of the application gateway resource. For default limits, seeApplication Gateway limits.
   */
readonly trustedRootCertificates?: ApplicationGatewayTrustedRootCertificate[];

/**
   * URL path map of the application gateway resource. For default limits, seeApplication Gateway limits.
   */
readonly urlPathMaps?: ApplicationGatewayUrlPathMap[];

/**
   * Web application firewall configuration.
   */
readonly webApplicationFirewallConfiguration?: ApplicationGatewayWebApplicationFirewallConfiguratio...;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Certificate public data.
   */
readonly data?: string;

/**
   * Upper bound on number of Application Gateway capacity.
   */
readonly maxCapacity?: number;

/**
   * Lower bound on number of Application Gateway capacity.
   */
readonly minCapacity: number;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Backend addresses.
   */
readonly backendAddresses?: ApplicationGatewayBackendAddress[];

/**
   * Fully qualified domain name (FQDN).
   */
readonly fqdn?: string;

/**
   * IP address.
   */
readonly ipAddress?: string;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Cookie name to use for the affinity cookie.
   */
readonly affinityCookieName?: string;

/**
   * Array of references to application gateway authentication certificates.
   */
readonly authenticationCertificates?: SubResource[];

/**
   * Connection draining of the backend http settings resource.
   */
readonly connectionDraining?: ApplicationGatewayConnectionDraining;

/**
   * Cookie based affinity.
   */
readonly cookieBasedAffinity?: 'Disabled''Enabled';

/**
   * Host header to be sent to the backend servers.
   */
readonly hostName?: string;

/**
   * Path which should be used as a prefix for all HTTP requests. Null means no path will be prefixed. Default value is null.
   */
readonly path?: string;

/**
   * Whether to pick host header should be picked from the host name of the backend server. Default value is false.
   */
readonly pickHostNameFromBackendAddress?: bool;

/**
   * The destination port on the backend.
   */
readonly port?: number;

/**
   * Probe resource of an application gateway.
   */
readonly probe?: SubResource;

/**
   * Whether the probe is enabled. Default value is false.
   */
readonly probeEnabled?: bool;

/**
   * The protocol used to communicate with the backend.
   */
readonly protocol?: 'Http''Https''Tcp''Tls';

/**
   * Request timeout in seconds. Application Gateway will fail the request if response is not received within RequestTimeout. Acceptable values are from 1 second to 86400 seconds.
   */
readonly requestTimeout?: number;

/**
   * Array of references to application gateway trusted root certificates.
   */
readonly trustedRootCertificates?: SubResource[];

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The number of seconds connection draining is active. Acceptable values are from 1 second to 3600 seconds.
   */
readonly drainTimeoutInSec: number;

/**
   * Whether connection draining is enabled or not.
   */
readonly enabled: bool;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Server name indication to be sent to the backend servers for Tls protocol.
   */
readonly hostName?: string;

/**
   * Whether to pick server name indication from the host name of the backend server for Tls protocol. Default value is false.
   */
readonly pickHostNameFromBackendAddress?: bool;

/**
   * The destination port on the backend.
   */
readonly port?: number;

/**
   * Probe resource of an application gateway.
   */
readonly probe?: SubResource;

/**
   * The protocol used to communicate with the backend.
   */
readonly protocol?: 'Http''Https''Tcp''Tls';

/**
   * Connection timeout in seconds. Application Gateway will fail the request if response is not received within ConnectionTimeout. Acceptable values are from 1 second to 86400 seconds.
   */
readonly timeout?: number;

/**
   * Array of references to application gateway trusted root certificates.
   */
readonly trustedRootCertificates?: SubResource[];

/**
   * Error page URL of the application gateway custom error.
   */
readonly customErrorPageUrl?: string;

/**
   * Status code of the application gateway custom error.
   */
readonly statusCode?: 'HttpStatus400''HttpStatus403''HttpStatus404''HttpStatus405''HttpStatus408''HttpStatus500''HttpStatus502''HttpStatus503''HttpStatus504';

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * PrivateIPAddress of the network interface IP Configuration.
   */
readonly privateIPAddress?: string;

/**
   * The private IP address allocation method.
   */
readonly privateIPAllocationMethod?: 'Dynamic''Static';

/**
   * Reference to the application gateway private link configuration.
   */
readonly privateLinkConfiguration?: SubResource;

/**
   * Reference to the PublicIP resource.
   */
readonly publicIPAddress?: SubResource;

/**
   * Reference to the subnet resource.
   */
readonly subnet?: SubResource;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Frontend port.
   */
readonly port?: number;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Reference to the subnet resource. A subnet from where application gateway gets its private address.
   */
readonly subnet?: SubResource;

/**
   * Enable request buffering.
   */
readonly enableRequestBuffering?: bool;

/**
   * Enable response buffering.
   */
readonly enableResponseBuffering?: bool;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Custom error configurations of the HTTP listener.
   */
readonly customErrorConfigurations?: ApplicationGatewayCustomError[];

/**
   * Reference to the FirewallPolicy resource.
   */
readonly firewallPolicy?: SubResource;

/**
   * Frontend IP configuration resource of an application gateway.
   */
readonly frontendIPConfiguration?: SubResource;

/**
   * Frontend port resource of an application gateway.
   */
readonly frontendPort?: SubResource;

/**
   * Host name of HTTP listener.
   */
readonly hostName?: string;

/**
   * List of Host names for HTTP Listener that allows special wildcard characters as well.
   */
readonly hostNames?: string[];

/**
   * Protocol of the HTTP listener.
   */
readonly protocol?: 'Http''Https''Tcp''Tls';

/**
   * Applicable only if protocol is https. Enables SNI for multi-hosting.
   */
readonly requireServerNameIndication?: bool;

/**
   * SSL certificate resource of an application gateway.
   */
readonly sslCertificate?: SubResource;

/**
   * SSL profile resource of the application gateway.
   */
readonly sslProfile?: SubResource;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Frontend IP configuration resource of an application gateway.
   */
readonly frontendIPConfiguration?: SubResource;

/**
   * Frontend port resource of an application gateway.
   */
readonly frontendPort?: SubResource;

/**
   * Protocol of the listener.
   */
readonly protocol?: 'Http''Https''Tcp''Tls';

/**
   * SSL certificate resource of an application gateway.
   */
readonly sslCertificate?: SubResource;

/**
   * SSL profile resource of the application gateway.
   */
readonly sslProfile?: SubResource;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Load Distribution Targets resource of an application gateway.
   */
readonly loadDistributionAlgorithm?: 'IpHash''LeastConnections''RoundRobin';

/**
   * Load Distribution Targets resource of an application gateway.
   */
readonly loadDistributionTargets?: ApplicationGatewayLoadDistributionTarget[];

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Backend address pool resource of the application gateway.
   */
readonly backendAddressPool?: SubResource;

/**
   * Weight per server. Range between 1 and 100.
   */
readonly weightPerServer?: number;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * An array of application gateway private link ip configurations.
   */
readonly ipConfigurations?: ApplicationGatewayPrivateLinkIpConfiguration[];

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Whether the ip configuration is primary or not.
   */
readonly primary?: bool;

/**
   * The private IP address of the IP configuration.
   */
readonly privateIPAddress?: string;

/**
   * The private IP address allocation method.
   */
readonly privateIPAllocationMethod?: 'Dynamic''Static';

/**
   * Reference to the subnet resource.
   */
readonly subnet?: SubResource;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Host name to send the probe to.
   */
readonly host?: string;

/**
   * The probing interval in seconds. This is the time interval between two consecutive probes. Acceptable values are from 1 second to 86400 seconds.
   */
readonly interval?: number;

/**
   * Criterion for classifying a healthy probe response.
   */
readonly match?: ApplicationGatewayProbeHealthResponseMatch;

/**
   * Minimum number of servers that are always marked healthy. Default value is 0.
   */
readonly minServers?: number;

/**
   * Relative path of probe. Valid path starts from '/'. Probe is sent to {Protocol}://{host}:{port}{path}.
   */
readonly path?: string;

/**
   * Whether the host header should be picked from the backend http settings. Default value is false.
   */
readonly pickHostNameFromBackendHttpSettings?: bool;

/**
   * Whether the server name indication should be picked from the backend settings for Tls protocol. Default value is false.
   */
readonly pickHostNameFromBackendSettings?: bool;

/**
   * Custom port which will be used for probing the backend servers. The valid value ranges from 1 to 65535. In case not set, port from http settings will be used. This property is valid for Basic, Standard_v2 and WAF_v2 only.
   */
readonly port?: number;

/**
   * The protocol used for the probe.
   */
readonly protocol?: 'Http''Https''Tcp''Tls';

/**
   * The probe timeout in seconds. Probe marked as failed if valid response is not received with this timeout period. Acceptable values are from 1 second to 86400 seconds.
   */
readonly timeout?: number;

/**
   * The probe retry count. Backend server is marked down after consecutive probe failure count reaches UnhealthyThreshold. Acceptable values are from 1 second to 20.
   */
readonly unhealthyThreshold?: number;

/**
   * Body that must be contained in the health response. Default value is empty.
   */
readonly body?: string;

/**
   * Allowed ranges of healthy status codes. Default range of healthy status codes is 200-399.
   */
readonly statusCodes?: string[];

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Include path in the redirected url.
   */
readonly includePath?: bool;

/**
   * Include query string in the redirected url.
   */
readonly includeQueryString?: bool;

/**
   * Path rules specifying redirect configuration.
   */
readonly pathRules?: SubResource[];

/**
   * HTTP redirection type.
   */
readonly redirectType?: 'Found''Permanent''SeeOther''Temporary';

/**
   * Request routing specifying redirect configuration.
   */
readonly requestRoutingRules?: SubResource[];

/**
   * Reference to a listener to redirect the request to.
   */
readonly targetListener?: SubResource;

/**
   * Url to redirect the request to.
   */
readonly targetUrl?: string;

/**
   * Url path maps specifying default redirect configuration.
   */
readonly urlPathMaps?: SubResource[];

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Backend address pool resource of the application gateway.
   */
readonly backendAddressPool?: SubResource;

/**
   * Backend http settings resource of the application gateway.
   */
readonly backendHttpSettings?: SubResource;

/**
   * Http listener resource of the application gateway.
   */
readonly httpListener?: SubResource;

/**
   * Load Distribution Policy resource of the application gateway.
   */
readonly loadDistributionPolicy?: SubResource;

/**
   * Priority of the request routing rule.
   */
readonly priority?: number;

/**
   * Redirect configuration resource of the application gateway.
   */
readonly redirectConfiguration?: SubResource;

/**
   * Rewrite Rule Set resource in Basic rule of the application gateway.
   */
readonly rewriteRuleSet?: SubResource;

/**
   * Rule type.
   */
readonly ruleType?: 'Basic''PathBasedRouting';

/**
   * URL path map resource of the application gateway.
   */
readonly urlPathMap?: SubResource;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Rewrite rules in the rewrite rule set.
   */
readonly rewriteRules?: ApplicationGatewayRewriteRule[];

/**
   * Set of actions to be done as part of the rewrite Rule.
   */
readonly actionSet?: ApplicationGatewayRewriteRuleActionSet;

/**
   * Conditions based on which the action set execution will be evaluated.
   */
readonly conditions?: ApplicationGatewayRewriteRuleCondition[];

/**
   * Rule Sequence of the rewrite rule that determines the order of execution of a particular rule in a RewriteRuleSet.
   */
readonly ruleSequence?: number;

/**
   * Request Header Actions in the Action Set.
   */
readonly requestHeaderConfigurations?: ApplicationGatewayHeaderConfiguration[];

/**
   * Response Header Actions in the Action Set.
   */
readonly responseHeaderConfigurations?: ApplicationGatewayHeaderConfiguration[];

/**
   * Url Configuration Action in the Action Set.
   */
readonly urlConfiguration?: ApplicationGatewayUrlConfiguration;

/**
   * Header name of the header configuration.
   */
readonly headerName?: string;

/**
   * Header value of the header configuration.
   */
readonly headerValue?: string;

/**
   * Url path which user has provided for url rewrite. Null means no path will be updated. Default value is null.
   */
readonly modifiedPath?: string;

/**
   * Query string which user has provided for url rewrite. Null means no query string will be updated. Default value is null.
   */
readonly modifiedQueryString?: string;

/**
   * If set as true, it will re-evaluate the url path map provided in path based request routing rules using modified path. Default value is false.
   */
readonly reroute?: bool;

/**
   * Setting this parameter to truth value with force the pattern to do a case in-sensitive comparison.
   */
readonly ignoreCase?: bool;

/**
   * Setting this value as truth will force to check the negation of the condition given by the user.
   */
readonly negate?: bool;

/**
   * The pattern, either fixed string or regular expression, that evaluates the truthfulness of the condition.
   */
readonly pattern?: string;

/**
   * The condition parameter of the RewriteRuleCondition.
   */
readonly variable?: string;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Backend address pool resource of the application gateway.
   */
readonly backendAddressPool?: SubResource;

/**
   * Backend settings resource of the application gateway.
   */
readonly backendSettings?: SubResource;

/**
   * Listener resource of the application gateway.
   */
readonly listener?: SubResource;

/**
   * Priority of the routing rule.
   */
readonly priority: number;

/**
   * Rule type.
   */
readonly ruleType?: 'Basic''PathBasedRouting';

/**
   * Capacity (instance count) of an application gateway.
   */
readonly capacity?: number;

/**
   * Tier of an application gateway.
   */
readonly tier?: 'Basic''Standard''Standard_v2''WAF''WAF_v2';

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Base-64 encoded pfx certificate. Only applicable in PUT Request.
   */
readonly data?: string;

/**
   * Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault.
   */
readonly keyVaultSecretId?: string;

/**
   * Password for the pfx file specified in data. Only applicable in PUT request.
   */
readonly password?: string;

/**
   * Ssl cipher suites to be enabled in the specified order to application gateway.
   */
readonly cipherSuites?: String array containing any of:'TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA''TLS_DHE_DSS_WITH_AES_128_CBC_SHA''TLS_DHE_DSS_WITH_AES_128_CBC_SHA256''TLS_DHE_DSS_WITH_AES_256_CBC_SHA''TLS_DHE_DSS_WITH_AES_256_CBC_SHA256''TLS_DHE_RSA_WITH_AES_128_CBC_SHA''TLS_DHE_RSA_WITH_AES_128_GCM_SHA256''TLS_DHE_RSA_WITH_AES_256_CBC_SHA''TLS_DHE_RSA_WITH_AES_256_GCM_SHA384''TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA''TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256''TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256''TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA''TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384''TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384''TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA''TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256''TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256''TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA''TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384''TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384''TLS_RSA_WITH_3DES_EDE_CBC_SHA''TLS_RSA_WITH_AES_128_CBC_SHA''TLS_RSA_WITH_AES_128_CBC_SHA256''TLS_RSA_WITH_AES_128_GCM_SHA256''TLS_RSA_WITH_AES_256_CBC_SHA''TLS_RSA_WITH_AES_256_CBC_SHA256''TLS_RSA_WITH_AES_256_GCM_SHA384';

/**
   * Ssl protocols to be disabled on application gateway.
   */
readonly disabledSslProtocols?: String array containing any of:'TLSv1_0''TLSv1_1''TLSv1_2''TLSv1_3';

/**
   * Minimum version of Ssl protocol to be supported on application gateway.
   */
readonly minProtocolVersion?: 'TLSv1_0''TLSv1_1''TLSv1_2''TLSv1_3';

/**
   * Name of Ssl predefined policy.
   */
readonly policyName?: 'AppGwSslPolicy20150501''AppGwSslPolicy20170401''AppGwSslPolicy20170401S''AppGwSslPolicy20220101''AppGwSslPolicy20220101S';

/**
   * Type of Ssl Policy.
   */
readonly policyType?: 'Custom''CustomV2''Predefined';

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Client authentication configuration of the application gateway resource.
   */
readonly clientAuthConfiguration?: ApplicationGatewayClientAuthConfiguration;

/**
   * SSL policy of the application gateway resource.
   */
readonly sslPolicy?: ApplicationGatewaySslPolicy;

/**
   * Array of references to application gateway trusted client certificates.
   */
readonly trustedClientCertificates?: SubResource[];

/**
   * Verify client certificate issuer name on the application gateway.
   */
readonly verifyClientCertIssuerDN?: bool;

/**
   * Verify client certificate revocation status.
   */
readonly verifyClientRevocation?: 'None''OCSP';

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Certificate public data.
   */
readonly data?: string;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Certificate public data.
   */
readonly data?: string;

/**
   * Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault.
   */
readonly keyVaultSecretId?: string;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Default backend address pool resource of URL path map.
   */
readonly defaultBackendAddressPool?: SubResource;

/**
   * Default backend http settings resource of URL path map.
   */
readonly defaultBackendHttpSettings?: SubResource;

/**
   * Default Load Distribution Policy resource of URL path map.
   */
readonly defaultLoadDistributionPolicy?: SubResource;

/**
   * Default redirect configuration resource of URL path map.
   */
readonly defaultRedirectConfiguration?: SubResource;

/**
   * Default Rewrite rule set resource of URL path map.
   */
readonly defaultRewriteRuleSet?: SubResource;

/**
   * Path rule of URL path map resource.
   */
readonly pathRules?: ApplicationGatewayPathRule[];

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Backend address pool resource of URL path map path rule.
   */
readonly backendAddressPool?: SubResource;

/**
   * Backend http settings resource of URL path map path rule.
   */
readonly backendHttpSettings?: SubResource;

/**
   * Reference to the FirewallPolicy resource.
   */
readonly firewallPolicy?: SubResource;

/**
   * Load Distribution Policy resource of URL path map path rule.
   */
readonly loadDistributionPolicy?: SubResource;

/**
   * Path rules of URL path map.
   */
readonly paths?: string[];

/**
   * Redirect configuration resource of URL path map path rule.
   */
readonly redirectConfiguration?: SubResource;

/**
   * Rewrite rule set resource of URL path map path rule.
   */
readonly rewriteRuleSet?: SubResource;

/**
   * The disabled rule groups.
   */
readonly disabledRuleGroups?: ApplicationGatewayFirewallDisabledRuleGroup[];

/**
   * Whether the web application firewall is enabled or not.
   */
readonly enabled: bool;

/**
   * The exclusion list.
   */
readonly exclusions?: ApplicationGatewayFirewallExclusion[];

/**
   * Maximum file upload size in Mb for WAF.
   */
readonly fileUploadLimitInMb?: number;

/**
   * Web application firewall mode.
   */
readonly firewallMode: 'Detection''Prevention';

/**
   * Maximum request body size for WAF.
   */
readonly maxRequestBodySize?: number;

/**
   * Maximum request body size in Kb for WAF.
   */
readonly maxRequestBodySizeInKb?: number;

/**
   * Whether allow WAF to check request Body.
   */
readonly requestBodyCheck?: bool;

/**
   * The type of the web application firewall rule set. Possible values are: 'OWASP'.
   */
readonly ruleSetType: string;

/**
   * The version of the rule set type.
   */
readonly ruleSetVersion: string;

/**
   * The name of the rule group that will be disabled.
   */
readonly ruleGroupName: string;

/**
   * The list of rules that will be disabled. If null, all rules of the rule group will be disabled.
   */
readonly rules?: number[];

/**
   * The variable to be excluded.
   */
readonly matchVariable: string;

/**
   * When matchVariable is a collection, operator used to specify which elements in the collection this exclusion applies to.
   */
readonly selector: string;

/**
   * When matchVariable is a collection, operate on the selector to specify which elements in the collection this exclusion applies to.
   */
readonly selectorMatchOperator: string;
}

/**
 * NetworkApplicationgateways resource
 */
export class NetworkApplicationgateways extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkApplicationgatewaysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/applicationGateways@2023-04-01";
  }

  protected getResourceBody(props: NetworkApplicationgatewaysProps): string {
    return JSON.stringify(
        {properties: {authenticationCertificates: [{id: "string", name: "string", properties: {data: "string"}}], autoscaleConfiguration: {maxCapacity: "${int}", minCapacity: "${int}"}, backendAddressPools: [{id: "string", name: "string", properties: {backendAddresses: [{fqdn: "string", ipAddress: "string"}]}}], backendHttpSettingsCollection: [{id: "string", name: "string", properties: {affinityCookieName: "string", authenticationCertificates: [{id: "string"}], connectionDraining: {drainTimeoutInSec: "${int}", enabled: "${bool}"}, cookieBasedAffinity: "string", hostName: "string", path: "string", pickHostNameFromBackendAddress: "${bool}", port: "${int}", probe: {id: "string"}, probeEnabled: "${bool}", protocol: "string", requestTimeout: "${int}", trustedRootCertificates: [{id: "string"}]}}], backendSettingsCollection: [{id: "string", name: "string", properties: {hostName: "string", pickHostNameFromBackendAddress: "${bool}", port: "${int}", probe: {id: "string"}, protocol: "string", timeout: "${int}", trustedRootCertificates: [{id: "string"}]}}], customErrorConfigurations: [{customErrorPageUrl: "string", statusCode: "string"}], enableFips: "${bool}", enableHttp2: "${bool}", firewallPolicy: {id: "string"}, forceFirewallPolicyAssociation: "${bool}", frontendIPConfigurations: [{id: "string", name: "string", properties: {privateIPAddress: "string", privateIPAllocationMethod: "string", privateLinkConfiguration: {id: "string"}, publicIPAddress: {id: "string"}, subnet: {id: "string"}}}], frontendPorts: [{id: "string", name: "string", properties: {port: "${int}"}}], gatewayIPConfigurations: [{id: "string", name: "string", properties: {subnet: {id: "string"}}}], globalConfiguration: {enableRequestBuffering: "${bool}", enableResponseBuffering: "${bool}"}, httpListeners: [{id: "string", name: "string", properties: {customErrorConfigurations: [{customErrorPageUrl: "string", statusCode: "string"}], firewallPolicy: {id: "string"}, frontendIPConfiguration: {id: "string"}, frontendPort: {id: "string"}, hostName: "string", hostNames: ["string"], protocol: "string", requireServerNameIndication: "${bool}", sslCertificate: {id: "string"}, sslProfile: {id: "string"}}}], listeners: [{id: "string", name: "string", properties: {frontendIPConfiguration: {id: "string"}, frontendPort: {id: "string"}, protocol: "string", sslCertificate: {id: "string"}, sslProfile: {id: "string"}}}], loadDistributionPolicies: [{id: "string", name: "string", properties: {loadDistributionAlgorithm: "string", loadDistributionTargets: [{id: "string", name: "string", properties: {backendAddressPool: {id: "string"}, weightPerServer: "${int}"}}]}}], privateLinkConfigurations: [{id: "string", name: "string", properties: {ipConfigurations: [{id: "string", name: "string", properties: {primary: "${bool}", privateIPAddress: "string", privateIPAllocationMethod: "string", subnet: {id: "string"}}}]}}], probes: [{id: "string", name: "string", properties: {host: "string", interval: "${int}", match: {body: "string", statusCodes: ["string"]}, minServers: "${int}", path: "string", pickHostNameFromBackendHttpSettings: "${bool}", pickHostNameFromBackendSettings: "${bool}", port: "${int}", protocol: "string", timeout: "${int}", unhealthyThreshold: "${int}"}}], redirectConfigurations: [{id: "string", name: "string", properties: {includePath: "${bool}", includeQueryString: "${bool}", pathRules: [{id: "string"}], redirectType: "string", requestRoutingRules: [{id: "string"}], targetListener: {id: "string"}, targetUrl: "string", urlPathMaps: [{id: "string"}]}}], requestRoutingRules: [{id: "string", name: "string", properties: {backendAddressPool: {id: "string"}, backendHttpSettings: {id: "string"}, httpListener: {id: "string"}, loadDistributionPolicy: {id: "string"}, priority: "${int}", redirectConfiguration: {id: "string"}, rewriteRuleSet: {id: "string"}, ruleType: "string", urlPathMap: {id: "string"}}}], rewriteRuleSets: [{id: "string", name: "string", properties: {rewriteRules: [{actionSet: {requestHeaderConfigurations: [{headerName: "string", headerValue: "string"}], responseHeaderConfigurations: [{headerName: "string", headerValue: "string"}], urlConfiguration: {modifiedPath: "string", modifiedQueryString: "string", reroute: "${bool}"}}, conditions: [{ignoreCase: "${bool}", negate: "${bool}", pattern: "string", variable: "string"}], name: "string", ruleSequence: "${int}"}]}}], routingRules: [{id: "string", name: "string", properties: {backendAddressPool: {id: "string"}, backendSettings: {id: "string"}, listener: {id: "string"}, priority: "${int}", ruleType: "string"}}], sku: {capacity: "${int}", name: "string", tier: "string"}, sslCertificates: [{id: "string", name: "string", properties: {data: "string", keyVaultSecretId: "string", password: "string"}}], sslPolicy: {cipherSuites: ["string"], disabledSslProtocols: ["string"], minProtocolVersion: "string", policyName: "string", policyType: "string"}, sslProfiles: [{id: "string", name: "string", properties: {clientAuthConfiguration: {verifyClientCertIssuerDN: "${bool}", verifyClientRevocation: "string"}, sslPolicy: {cipherSuites: ["string"], disabledSslProtocols: ["string"], minProtocolVersion: "string", policyName: "string", policyType: "string"}, trustedClientCertificates: [{id: "string"}]}}], trustedClientCertificates: [{id: "string", name: "string", properties: {data: "string"}}], trustedRootCertificates: [{id: "string", name: "string", properties: {data: "string", keyVaultSecretId: "string"}}], urlPathMaps: [{id: "string", name: "string", properties: {defaultBackendAddressPool: {id: "string"}, defaultBackendHttpSettings: {id: "string"}, defaultLoadDistributionPolicy: {id: "string"}, defaultRedirectConfiguration: {id: "string"}, defaultRewriteRuleSet: {id: "string"}, pathRules: [{id: "string", name: "string", properties: {backendAddressPool: {id: "string"}, backendHttpSettings: {id: "string"}, firewallPolicy: {id: "string"}, loadDistributionPolicy: {id: "string"}, paths: ["string"], redirectConfiguration: {id: "string"}, rewriteRuleSet: {id: "string"}}}]}}], webApplicationFirewallConfiguration: {disabledRuleGroups: [{ruleGroupName: "string", rules: ["${int}"]}], enabled: "${bool}", exclusions: [{matchVariable: "string", selector: "string", selectorMatchOperator: "string"}], fileUploadLimitInMb: "${int}", firewallMode: "string", maxRequestBodySize: "${int}", maxRequestBodySizeInKb: "${int}", requestBodyCheck: "${bool}", ruleSetType: "string", ruleSetVersion: "string"}}, zones: ["string"]}
    );
  }
}
