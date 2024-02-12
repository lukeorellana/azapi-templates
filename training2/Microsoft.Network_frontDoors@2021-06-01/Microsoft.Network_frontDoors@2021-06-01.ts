import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * Backend pools available to routing rules.
   */
readonly backendPools?: BackendPool[];

/**
   * Settings for all backendPools
   */
readonly backendPoolsSettings?: BackendPoolsSettings;

/**
   * Operational status of the Front Door load balancer. Permitted values are 'Enabled' or 'Disabled'
   */
readonly enabledState?: 'Disabled''Enabled';

/**
   * A friendly name for the frontDoor
   */
readonly friendlyName?: string;

/**
   * Frontend endpoints available to routing rules.
   */
readonly frontendEndpoints?: FrontendEndponumber[];

/**
   * Health probe settings associated with this Front Door instance.
   */
readonly healthProbeSettings?: HealthProbeSettingsModel[];

/**
   * Load balancing settings associated with this Front Door instance.
   */
readonly loadBalancingSettings?: LoadBalancingSettingsModel[];

/**
   * Routing rules associated with this Front Door.
   */
readonly routingRules?: RoutingRule[];

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The set of backends for this pool
   */
readonly backends?: Backend[];

/**
   * L7 health probe settings for a backend pool
   */
readonly healthProbeSettings?: SubResource;

/**
   * Load balancing settings for a backend pool
   */
readonly loadBalancingSettings?: SubResource;

/**
   * Location of the backend (IP address or FQDN)
   */
readonly address?: string;

/**
   * The value to use as the host header sent to the backend. If blank or unspecified, this defaults to the incoming host.
   */
readonly backendHostHeader?: string;

/**
   * Whether to enable use of this backend. Permitted values are 'Enabled' or 'Disabled'
   */
readonly enabledState?: 'Disabled''Enabled';

/**
   * The HTTP TCP port number. Must be between 1 and 65535.
   */
readonly httpPort?: number;

/**
   * The HTTPS TCP port number. Must be between 1 and 65535.
   */
readonly httpsPort?: number;

/**
   * Priority to use for load balancing. Higher priorities will not be used for load balancing if any lower priority backend is healthy.
   */
readonly priority?: number;

/**
   * The Alias of the Private Link resource. Populating this optional field indicates that this backend is 'Private'
   */
readonly privateLinkAlias?: string;

/**
   * A custom message to be included in the approval request to connect to the Private Link
   */
readonly privateLinkApprovalMessage?: string;

/**
   * The location of the Private Link resource. Required only if 'privateLinkResourceId' is populated
   */
readonly privateLinkLocation?: string;

/**
   * The Resource Id of the Private Link resource. Populating this optional field indicates that this backend is 'Private'
   */
readonly privateLinkResourceId?: string;

/**
   * Weight of this endpoint for load balancing purposes.
   */
readonly weight?: number;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Whether to enforce certificate name check on HTTPS requests to all backend pools. No effect on non-HTTPS requests.
   */
readonly enforceCertificateNameCheck?: 'Disabled''Enabled';

/**
   * Send and receive timeout on forwarding request to the backend. When timeout is reached, the request fails and returns.
   */
readonly sendRecvTimeoutSeconds?: number;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The host name of the frontendEndpoint. Must be a domain name.
   */
readonly hostName?: string;

/**
   * Whether to allow session affinity on this host. Valid options are 'Enabled' or 'Disabled'
   */
readonly sessionAffinityEnabledState?: 'Disabled''Enabled';

/**
   * UNUSED. This field will be ignored. The TTL to use in seconds for session affinity, if applicable.
   */
readonly sessionAffinityTtlSeconds?: number;

/**
   * Defines the Web Application Firewall policy for each host (if applicable)
   */
readonly webApplicationFirewallPolicyLink?: FrontendEndponumberUpdateParametersWebApplicationFirewa...;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Whether to enable health probes to be made against backends defined under backendPools. Health probes can only be disabled if there is a single enabled backend in single enabled backend pool.
   */
readonly enabledState?: 'Disabled''Enabled';

/**
   * Configures which HTTP method to use to probe the backends defined under backendPools.
   */
readonly healthProbeMethod?: 'GET''HEAD';

/**
   * The number of seconds between health probes.
   */
readonly intervalInSeconds?: number;

/**
   * The path to use for the health probe. Default is /
   */
readonly path?: string;

/**
   * Protocol scheme to use for this probe
   */
readonly protocol?: 'Http''Https';

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The additional latency in milliseconds for probes to fall into the lowest latency bucket
   */
readonly additionalLatencyMilliseconds?: number;

/**
   * The number of samples to consider for load balancing decisions
   */
readonly sampleSize?: number;

/**
   * The number of samples within the sample period that must succeed
   */
readonly successfulSamplesRequired?: number;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Protocol schemes to match for this rule
   */
readonly acceptedProtocols?: String array containing any of:'Http''Https';

/**
   * Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled'
   */
readonly enabledState?: 'Disabled''Enabled';

/**
   * Frontend endpoints associated with this rule
   */
readonly frontendEndpoints?: SubResource[];

/**
   * The route patterns of the rule.
   */
readonly patternsToMatch?: string[];

/**
   * A reference to the routing configuration.
   */
readonly routeConfiguration?: RouteConfiguration;

/**
   * A reference to a specific Rules Engine Configuration to apply to this route.
   */
readonly rulesEngine?: SubResource;

/**
   * Defines the Web Application Firewall policy for each routing rule (if applicable)
   */
readonly webApplicationFirewallPolicyLink?: RoutingRuleUpdateParametersWebApplicationFirewallPol...;

/**
   * Set the object type
   */
readonly @odata.type: #Microsoft.Azure.FrontDoor.Models.FrontdoorForwardingConfiguration#Microsoft.Azure.FrontDoor.Models.FrontdoorRedirectConfiguration;

/**
   * 
   */
readonly @odata.type: '#Microsoft.Azure.FrontDoor.Models.FrontdoorForwardingConfiguration';

/**
   * A reference to the BackendPool which this rule routes to.
   */
readonly backendPool?: SubResource;

/**
   * The caching configuration associated with this rule.
   */
readonly cacheConfiguration?: CacheConfiguration;

/**
   * A custom path used to rewrite resource paths matched by this rule. Leave empty to use incoming path.
   */
readonly customForwardingPath?: string;

/**
   * Protocol this rule will use when forwarding traffic to backends.
   */
readonly forwardingProtocol?: 'HttpOnly''HttpsOnly''MatchRequest';

/**
   * The duration for which the content needs to be cached. Allowed format is in ISO 8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations). HTTP requires the value to be no more than a year
   */
readonly cacheDuration?: string;

/**
   * Whether to use dynamic compression for cached content
   */
readonly dynamicCompression?: 'Disabled''Enabled';

/**
   * query parameters to include or exclude (comma separated).
   */
readonly queryParameters?: string;

/**
   * Treatment of URL query terms when forming the cache key.
   */
readonly queryParameterStripDirective?: 'StripAll''StripAllExcept''StripNone''StripOnly';

/**
   * 
   */
readonly @odata.type: '#Microsoft.Azure.FrontDoor.Models.FrontdoorRedirectConfiguration';

/**
   * Fragment to add to the redirect URL. Fragment is the part of the URL that comes after #. Do not include the #.
   */
readonly customFragment?: string;

/**
   * Host to redirect. Leave empty to use the incoming host as the destination host.
   */
readonly customHost?: string;

/**
   * The full path to redirect. Path cannot be empty and must start with /. Leave empty to use the incoming path as destination path.
   */
readonly customPath?: string;

/**
   * The set of query strings to be placed in the redirect URL. Setting this value would replace any existing query string; leave empty to preserve the incoming query string. Query string must be in {key}={value} format. The first ? and & will be added automatically so do not include them in the front, but do separate multiple query strings with &.
   */
readonly customQueryString?: string;

/**
   * The protocol of the destination to where the traffic is redirected
   */
readonly redirectProtocol?: 'HttpOnly''HttpsOnly''MatchRequest';

/**
   * The redirect type the rule will use when redirecting traffic.
   */
readonly redirectType?: 'Found''Moved''PermanentRedirect''TemporaryRedirect';

/**
   * Resource ID.
   */
readonly id?: string;
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
