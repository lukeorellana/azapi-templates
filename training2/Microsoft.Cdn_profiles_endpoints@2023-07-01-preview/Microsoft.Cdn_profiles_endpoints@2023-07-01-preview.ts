import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CdnProfilesEndpointsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:profiles;

/**
   * List of content types on which compression applies. The value should be a valid MIME type.
   */
readonly contentTypesToCompress?: string[];

/**
   * A reference to the origin group.
   */
readonly defaultOriginGroup?: ResourceReference;

/**
   * A policy that specifies the delivery rules to be used for an endpoint.
   */
readonly deliveryPolicy?: EndponumberPropertiesUpdateParametersDeliveryPolicy;

/**
   * List of rules defining the user's geo access within a CDN endpoint. Each geo filter defines an access rule to a specified path or content, e.g. block APAC for path /pictures/
   */
readonly geoFilters?: GeoFilter[];

/**
   * Indicates whether content compression is enabled on CDN. Default value is false. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on CDN when requested content is smaller than 1 byte or larger than 1 MB.
   */
readonly isCompressionEnabled?: bool;

/**
   * Indicates whether HTTP traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
   */
readonly isHttpAllowed?: bool;

/**
   * Indicates whether HTTPS traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
   */
readonly isHttpsAllowed?: bool;

/**
   * Specifies what scenario the customer wants this CDN endpoint to optimize for, e.g. Download, Media services. With this information, CDN can apply scenario driven optimization.
   */
readonly optimizationType?: 'DynamicSiteAcceleration''GeneralMediaStreaming''GeneralWebDelivery''LargeFileDownload''VideoOnDemandMediaStreaming';

/**
   * The origin groups comprising of origins that are used for load balancing the traffic based on availability.
   */
readonly originGroups?: DeepCreatedOriginGroup[];

/**
   * The host header value sent to the origin with each request. This property at Endpoint is only allowed when endpoint uses single origin and can be overridden by the same property specified at origin.If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default.
   */
readonly originHostHeader?: string;

/**
   * A directory path on the origin that CDN can use to retrieve content from, e.g. contoso.cloudapp.net/originpath.
   */
readonly originPath?: string;

/**
   * The source of the content being delivered via CDN.
   */
readonly origins: DeepCreatedOrigin[];

/**
   * Path to a file hosted on the origin which helps accelerate delivery of the dynamic content and calculate the most optimal routes for the CDN. This is relative to the origin path. This property is only relevant when using a single origin.
   */
readonly probePath?: string;

/**
   * Defines how CDN caches requests that include query strings. You can ignore any query strings when caching, bypass caching to prevent requests that contain query strings from being cached, or cache every request with a unique URL.
   */
readonly queryStringCachingBehavior?: 'BypassCaching''IgnoreQueryString''NotSet''UseQueryString';

/**
   * List of keys used to validate the signed URL hashes.
   */
readonly urlSigningKeys?: UrlSigningKey[];

/**
   * Defines the Web Application Firewall policy for the endpoint (if applicable)
   */
readonly webApplicationFirewallPolicyLink?: EndponumberPropertiesUpdateParametersWebApplicationFire...;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * User-friendly description of the policy.
   */
readonly description?: string;

/**
   * A list of the delivery rules.
   */
readonly rules: DeliveryRule[];

/**
   * A list of actions that are executed when all the conditions of a rule are satisfied.
   */
readonly actions: DeliveryRuleActionAutoGenerated[];

/**
   * A list of conditions that must be matched for the actions to be executed
   */
readonly conditions?: DeliveryRuleCondition[];

/**
   * The order in which the rules are applied for the endpoint. Possible values {0,1,2,3,â¦â¦â¦}. A rule with a lesser order will be applied before a rule with a greater order. Rule with order 0 is a special rule. It does not require any condition and actions listed in it will always be applied.
   */
readonly order: number;

/**
   * Defines the parameters for the action.
   */
readonly parameters: AfdUrlSigningActionParameters;

/**
   * Algorithm to use for URL signing
   */
readonly algorithm?: 'SHA256';

/**
   * Resource reference to the Azure Key Vault secret. Expected to be in format of /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/keyGroups/{keyGroupName}
   */
readonly keyGroupReference: ResourceReference;

/**
   * Defines which query string parameters in the url to be considered for expires, key id etc.
   */
readonly parameterNameOverride?: UrlSigningParamIdentifier[];

/**
   * 
   */
readonly typeName: 'DeliveryRuleAfdUrlSigningActionParameters';

/**
   * Indicates the purpose of the parameter
   */
readonly paramIndicator: 'Expires''KeyId''Signature';

/**
   * Parameter name
   */
readonly paramName: string;

/**
   * Defines the parameters for the action.
   */
readonly parameters: CacheExpirationActionParameters;

/**
   * Caching behavior for the requests
   */
readonly cacheBehavior: 'BypassCache''Override''SetIfMissing';

/**
   * The duration for which the content needs to be cached. Allowed format is [d.]hh:mm:ss
   */
readonly cacheDuration?: string;

/**
   * The level at which the content needs to be cached.
   */
readonly cacheType: 'All';

/**
   * 
   */
readonly typeName: 'DeliveryRuleCacheExpirationActionParameters';

/**
   * Defines the parameters for the action.
   */
readonly parameters: CacheKeyQueryStringActionParameters;

/**
   * query parameters to include or exclude (comma separated).
   */
readonly queryParameters?: string;

/**
   * Caching behavior for the requests
   */
readonly queryStringBehavior: 'Exclude''ExcludeAll''Include''IncludeAll';

/**
   * 
   */
readonly typeName: 'DeliveryRuleCacheKeyQueryStringBehaviorActionParameters';

/**
   * Defines the parameters for the action.
   */
readonly parameters: HeaderActionParameters;

/**
   * Action to perform
   */
readonly headerAction: 'Append''Delete''Overwrite';

/**
   * Name of the header to modify
   */
readonly headerName: string;

/**
   * 
   */
readonly typeName: 'DeliveryRuleHeaderActionParameters';

/**
   * Value for the specified action
   */
readonly value?: string;

/**
   * Defines the parameters for the action.
   */
readonly parameters: HeaderActionParameters;

/**
   * Defines the parameters for the action.
   */
readonly parameters: OriginGroupOverrideActionParameters;

/**
   * defines the OriginGroup that would override the DefaultOriginGroup.
   */
readonly originGroup: ResourceReference;

/**
   * 
   */
readonly typeName: 'DeliveryRuleOriginGroupOverrideActionParameters';

/**
   * Defines the parameters for the action.
   */
readonly parameters: RouteConfigurationOverrideActionParameters;

/**
   * The caching configuration associated with this rule. To disable caching, do not provide a cacheConfiguration object.
   */
readonly cacheConfiguration?: CacheConfiguration;

/**
   * A reference to the origin group override configuration. Leave empty to use the default origin group on route.
   */
readonly originGroupOverride?: OriginGroupOverride;

/**
   * 
   */
readonly typeName: 'DeliveryRuleRouteConfigurationOverrideActionParameters';

/**
   * Caching behavior for the requests
   */
readonly cacheBehavior?: 'HonorOrigin''OverrideAlways''OverrideIfOriginMissing';

/**
   * The duration for which the content needs to be cached. Allowed format is [d.]hh:mm:ss
   */
readonly cacheDuration?: string;

/**
   * Indicates whether content compression is enabled. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on AzureFrontDoor when requested content is smaller than 1 byte or larger than 1 MB.
   */
readonly isCompressionEnabled?: 'Disabled''Enabled';

/**
   * query parameters to include or exclude (comma separated).
   */
readonly queryParameters?: string;

/**
   * Defines how Frontdoor caches requests that include query strings. You can ignore any query strings when caching, ignore specific query strings, cache every request with a unique URL, or cache specific query strings.
   */
readonly queryStringCachingBehavior?: 'IgnoreQueryString''IgnoreSpecifiedQueryStrings''IncludeSpecifiedQueryStrings''UseQueryString';

/**
   * Protocol this rule will use when forwarding traffic to backends.
   */
readonly forwardingProtocol?: 'HttpOnly''HttpsOnly''MatchRequest';

/**
   * defines the OriginGroup that would override the DefaultOriginGroup on route.
   */
readonly originGroup?: ResourceReference;

/**
   * Defines the parameters for the action.
   */
readonly parameters: UrlRedirectActionParameters;

/**
   * Fragment to add to the redirect URL. Fragment is the part of the URL that comes after #. Do not include the #.
   */
readonly customFragment?: string;

/**
   * Host to redirect. Leave empty to use the incoming host as the destination host.
   */
readonly customHostname?: string;

/**
   * The full path to redirect. Path cannot be empty and must start with /. Leave empty to use the incoming path as destination path.
   */
readonly customPath?: string;

/**
   * The set of query strings to be placed in the redirect URL. Setting this value would replace any existing query string; leave empty to preserve the incoming query string. Query string must be in {key}={value} format. ? and & will be added automatically so do not include them.
   */
readonly customQueryString?: string;

/**
   * Protocol to use for the redirect. The default value is MatchRequest
   */
readonly destinationProtocol?: 'Http''Https''MatchRequest';

/**
   * The redirect type the rule will use when redirecting traffic.
   */
readonly redirectType: 'Found''Moved''PermanentRedirect''TemporaryRedirect';

/**
   * 
   */
readonly typeName: 'DeliveryRuleUrlRedirectActionParameters';

/**
   * Defines the parameters for the action.
   */
readonly parameters: UrlRewriteActionParameters;

/**
   * Define the relative URL to which the above requests will be rewritten by.
   */
readonly destination: string;

/**
   * Whether to preserve unmatched path. Default value is true.
   */
readonly preserveUnmatchedPath?: bool;

/**
   * define a request URI pattern that identifies the type of requests that may be rewritten. If value is blank, all strings are matched.
   */
readonly sourcePattern: string;

/**
   * 
   */
readonly typeName: 'DeliveryRuleUrlRewriteActionParameters';

/**
   * Defines the parameters for the action.
   */
readonly parameters: UrlSigningActionParameters;

/**
   * Algorithm to use for URL signing
   */
readonly algorithm?: 'SHA256';

/**
   * Defines which query string parameters in the url to be considered for expires, key id etc.
   */
readonly parameterNameOverride?: UrlSigningParamIdentifier[];

/**
   * 
   */
readonly typeName: 'DeliveryRuleUrlSigningActionParameters';

/**
   * Defines the parameters for the condition.
   */
readonly parameters: ClientPortMatchConditionParameters;

/**
   * The match value for the condition of the delivery rule
   */
readonly matchValues?: string[];

/**
   * Describes if this is negate condition or not
   */
readonly negateCondition?: bool;

/**
   * Describes operator to be matched
   */
readonly operator: 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx';

/**
   * List of transforms
   */
readonly transforms?: String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode';

/**
   * 
   */
readonly typeName: 'DeliveryRuleClientPortConditionParameters';

/**
   * Defines the parameters for the condition.
   */
readonly parameters: CookiesMatchConditionParameters;

/**
   * The match value for the condition of the delivery rule
   */
readonly matchValues?: string[];

/**
   * Describes if this is negate condition or not
   */
readonly negateCondition?: bool;

/**
   * Describes operator to be matched
   */
readonly operator: 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx';

/**
   * Name of Cookies to be matched
   */
readonly selector?: string;

/**
   * List of transforms
   */
readonly transforms?: String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode';

/**
   * 
   */
readonly typeName: 'DeliveryRuleCookiesConditionParameters';

/**
   * Defines the parameters for the condition.
   */
readonly parameters: HostNameMatchConditionParameters;

/**
   * The match value for the condition of the delivery rule
   */
readonly matchValues?: string[];

/**
   * Describes if this is negate condition or not
   */
readonly negateCondition?: bool;

/**
   * Describes operator to be matched
   */
readonly operator: 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx';

/**
   * List of transforms
   */
readonly transforms?: String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode';

/**
   * 
   */
readonly typeName: 'DeliveryRuleHostNameConditionParameters';

/**
   * Defines the parameters for the condition.
   */
readonly parameters: HttpVersionMatchConditionParameters;

/**
   * The match value for the condition of the delivery rule
   */
readonly matchValues?: string[];

/**
   * Describes if this is negate condition or not
   */
readonly negateCondition?: bool;

/**
   * Describes operator to be matched
   */
readonly operator: 'Equal';

/**
   * List of transforms
   */
readonly transforms?: String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode';

/**
   * 
   */
readonly typeName: 'DeliveryRuleHttpVersionConditionParameters';

/**
   * Defines the parameters for the condition.
   */
readonly parameters: IsDeviceMatchConditionParameters;

/**
   * The match value for the condition of the delivery rule
   */
readonly matchValues?: String array containing any of:'Desktop''Mobile';

/**
   * Describes if this is negate condition or not
   */
readonly negateCondition?: bool;

/**
   * Describes operator to be matched
   */
readonly operator: 'Equal';

/**
   * List of transforms
   */
readonly transforms?: String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode';

/**
   * 
   */
readonly typeName: 'DeliveryRuleIsDeviceConditionParameters';

/**
   * Defines the parameters for the condition.
   */
readonly parameters: PostArgsMatchConditionParameters;

/**
   * The match value for the condition of the delivery rule
   */
readonly matchValues?: string[];

/**
   * Describes if this is negate condition or not
   */
readonly negateCondition?: bool;

/**
   * Describes operator to be matched
   */
readonly operator: 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx';

/**
   * Name of PostArg to be matched
   */
readonly selector?: string;

/**
   * List of transforms
   */
readonly transforms?: String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode';

/**
   * 
   */
readonly typeName: 'DeliveryRulePostArgsConditionParameters';

/**
   * Defines the parameters for the condition.
   */
readonly parameters: QueryStringMatchConditionParameters;

/**
   * The match value for the condition of the delivery rule
   */
readonly matchValues?: string[];

/**
   * Describes if this is negate condition or not
   */
readonly negateCondition?: bool;

/**
   * Describes operator to be matched
   */
readonly operator: 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx';

/**
   * List of transforms
   */
readonly transforms?: String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode';

/**
   * 
   */
readonly typeName: 'DeliveryRuleQueryStringConditionParameters';

/**
   * Defines the parameters for the condition.
   */
readonly parameters: RemoteAddressMatchConditionParameters;

/**
   * Match values to match against. The operator will apply to each value in here with OR semantics. If any of them match the variable with the given operator this match condition is considered a match.
   */
readonly matchValues?: string[];

/**
   * Describes if this is negate condition or not
   */
readonly negateCondition?: bool;

/**
   * Describes operator to be matched
   */
readonly operator: 'Any''GeoMatch''IPMatch';

/**
   * List of transforms
   */
readonly transforms?: String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode';

/**
   * 
   */
readonly typeName: 'DeliveryRuleRemoteAddressConditionParameters';

/**
   * Defines the parameters for the condition.
   */
readonly parameters: RequestBodyMatchConditionParameters;

/**
   * The match value for the condition of the delivery rule
   */
readonly matchValues?: string[];

/**
   * Describes if this is negate condition or not
   */
readonly negateCondition?: bool;

/**
   * Describes operator to be matched
   */
readonly operator: 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx';

/**
   * List of transforms
   */
readonly transforms?: String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode';

/**
   * 
   */
readonly typeName: 'DeliveryRuleRequestBodyConditionParameters';

/**
   * Defines the parameters for the condition.
   */
readonly parameters: RequestHeaderMatchConditionParameters;

/**
   * The match value for the condition of the delivery rule
   */
readonly matchValues?: string[];

/**
   * Describes if this is negate condition or not
   */
readonly negateCondition?: bool;

/**
   * Describes operator to be matched
   */
readonly operator: 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx';

/**
   * Name of Header to be matched
   */
readonly selector?: string;

/**
   * List of transforms
   */
readonly transforms?: String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode';

/**
   * 
   */
readonly typeName: 'DeliveryRuleRequestHeaderConditionParameters';

/**
   * Defines the parameters for the condition.
   */
readonly parameters: RequestMethodMatchConditionParameters;

/**
   * The match value for the condition of the delivery rule
   */
readonly matchValues?: String array containing any of:'DELETE''GET''HEAD''OPTIONS''POST''PUT''TRACE';

/**
   * Describes if this is negate condition or not
   */
readonly negateCondition?: bool;

/**
   * Describes operator to be matched
   */
readonly operator: 'Equal';

/**
   * List of transforms
   */
readonly transforms?: String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode';

/**
   * 
   */
readonly typeName: 'DeliveryRuleRequestMethodConditionParameters';

/**
   * Defines the parameters for the condition.
   */
readonly parameters: RequestSchemeMatchConditionParameters;

/**
   * The match value for the condition of the delivery rule
   */
readonly matchValues?: String array containing any of:'HTTP''HTTPS';

/**
   * Describes if this is negate condition or not
   */
readonly negateCondition?: bool;

/**
   * Describes operator to be matched
   */
readonly operator: 'Equal';

/**
   * List of transforms
   */
readonly transforms?: String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode';

/**
   * 
   */
readonly typeName: 'DeliveryRuleRequestSchemeConditionParameters';

/**
   * Defines the parameters for the condition.
   */
readonly parameters: RequestUriMatchConditionParameters;

/**
   * The match value for the condition of the delivery rule
   */
readonly matchValues?: string[];

/**
   * Describes if this is negate condition or not
   */
readonly negateCondition?: bool;

/**
   * Describes operator to be matched
   */
readonly operator: 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx';

/**
   * List of transforms
   */
readonly transforms?: String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode';

/**
   * 
   */
readonly typeName: 'DeliveryRuleRequestUriConditionParameters';

/**
   * Defines the parameters for the condition.
   */
readonly parameters: ServerPortMatchConditionParameters;

/**
   * The match value for the condition of the delivery rule
   */
readonly matchValues?: string[];

/**
   * Describes if this is negate condition or not
   */
readonly negateCondition?: bool;

/**
   * Describes operator to be matched
   */
readonly operator: 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx';

/**
   * List of transforms
   */
readonly transforms?: String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode';

/**
   * 
   */
readonly typeName: 'DeliveryRuleServerPortConditionParameters';

/**
   * Defines the parameters for the condition.
   */
readonly parameters: SocketAddrMatchConditionParameters;

/**
   * The match value for the condition of the delivery rule
   */
readonly matchValues?: string[];

/**
   * Describes if this is negate condition or not
   */
readonly negateCondition?: bool;

/**
   * Describes operator to be matched
   */
readonly operator: 'Any''IPMatch';

/**
   * List of transforms
   */
readonly transforms?: String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode';

/**
   * 
   */
readonly typeName: 'DeliveryRuleSocketAddrConditionParameters';

/**
   * Defines the parameters for the condition.
   */
readonly parameters: SslProtocolMatchConditionParameters;

/**
   * The match value for the condition of the delivery rule
   */
readonly matchValues?: String array containing any of:'TLSv1''TLSv1.1''TLSv1.2';

/**
   * Describes if this is negate condition or not
   */
readonly negateCondition?: bool;

/**
   * Describes operator to be matched
   */
readonly operator: 'Equal';

/**
   * List of transforms
   */
readonly transforms?: String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode';

/**
   * 
   */
readonly typeName: 'DeliveryRuleSslProtocolConditionParameters';

/**
   * Defines the parameters for the condition.
   */
readonly parameters: UrlFileExtensionMatchConditionParameters;

/**
   * The match value for the condition of the delivery rule
   */
readonly matchValues?: string[];

/**
   * Describes if this is negate condition or not
   */
readonly negateCondition?: bool;

/**
   * Describes operator to be matched
   */
readonly operator: 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx';

/**
   * List of transforms
   */
readonly transforms?: String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode';

/**
   * 
   */
readonly typeName: 'DeliveryRuleUrlFileExtensionMatchConditionParameters';

/**
   * Defines the parameters for the condition.
   */
readonly parameters: UrlFileNameMatchConditionParameters;

/**
   * The match value for the condition of the delivery rule
   */
readonly matchValues?: string[];

/**
   * Describes if this is negate condition or not
   */
readonly negateCondition?: bool;

/**
   * Describes operator to be matched
   */
readonly operator: 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx';

/**
   * List of transforms
   */
readonly transforms?: String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode';

/**
   * 
   */
readonly typeName: 'DeliveryRuleUrlFilenameConditionParameters';

/**
   * Defines the parameters for the condition.
   */
readonly parameters: UrlPathMatchConditionParameters;

/**
   * The match value for the condition of the delivery rule
   */
readonly matchValues?: string[];

/**
   * Describes if this is negate condition or not
   */
readonly negateCondition?: bool;

/**
   * Describes operator to be matched
   */
readonly operator: 'Any''BeginsWith''Contains''EndsWith''Equal''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''RegEx''Wildcard';

/**
   * List of transforms
   */
readonly transforms?: String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode';

/**
   * 
   */
readonly typeName: 'DeliveryRuleUrlPathMatchConditionParameters';

/**
   * Action of the geo filter, i.e. allow or block access.
   */
readonly action: 'Allow''Block';

/**
   * Two letter country or region codes defining user country or region access in a geo filter, e.g. AU, MX, US.
   */
readonly countryCodes: string[];

/**
   * Relative path applicable to geo filter. (e.g. '/mypictures', '/mypicture/kitty.jpg', and etc.)
   */
readonly relativePath: string;

/**
   * Health probe settings to the origin that is used to determine the health of the origin.
   */
readonly healthProbeSettings?: HealthProbeParameters;

/**
   * The source of the content being delivered via CDN within given origin group.
   */
readonly origins: ResourceReference[];

/**
   * The JSON object that contains the properties to determine origin health using real requests/responses.This property is currently not supported.
   */
readonly responseBasedOriginErrorDetectionSettings?: ResponseBasedOriginErrorDetectionParameters;

/**
   * Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported.
   */
readonly trafficRestorationTimeToHealedOrNewEndpointsInMinutes?: numberConstranumbers:Min value = 0Max value = 50;

/**
   * The number of seconds between health probes.Default is 240sec.
   */
readonly probeIntervalInSeconds?: numberConstranumbers:Min value = 1Max value = 255;

/**
   * The path relative to the origin that is used to determine the health of the origin.
   */
readonly probePath?: string;

/**
   * Protocol to use for health probe.
   */
readonly probeProtocol?: 'Http''Https''NotSet';

/**
   * The type of health probe request that is made.
   */
readonly probeRequestType?: 'GET''HEAD''NotSet';

/**
   * The list of Http status code ranges that are considered as server errors for origin and it is marked as unhealthy.
   */
readonly httpErrorRanges?: HttpErrorRangeParameters[];

/**
   * Type of response errors for real user requests for which origin will be deemed unhealthy
   */
readonly responseBasedDetectedErrorTypes?: 'None''TcpAndHttpErrors''TcpErrorsOnly';

/**
   * The percentage of failed requests in the sample where failover should trigger.
   */
readonly responseBasedFailoverThresholdPercentage?: numberConstranumbers:Min value = 0Max value = 100;

/**
   * The inclusive start of the http status code range.
   */
readonly begin?: numberConstranumbers:Min value = 100Max value = 999;

/**
   * The inclusive end of the http status code range.
   */
readonly end?: numberConstranumbers:Min value = 100Max value = 999;

/**
   * Origin is enabled for load balancing or not. By default, origin is always enabled.
   */
readonly enabled?: bool;

/**
   * The address of the origin. It can be a domain name, IPv4 address, or IPv6 address. This should be unique across all origins in an endpoint.
   */
readonly hostName: string;

/**
   * The value of the HTTP port. Must be between 1 and 65535.
   */
readonly httpPort?: numberConstranumbers:Min value = 1Max value = 65535;

/**
   * The value of the HTTPS port. Must be between 1 and 65535.
   */
readonly httpsPort?: numberConstranumbers:Min value = 1Max value = 65535;

/**
   * The host header value sent to the origin with each request. If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default.
   */
readonly originHostHeader?: string;

/**
   * Priority of origin in given origin group for load balancing. Higher priorities will not be used for load balancing if any lower priority origin is healthy.Must be between 1 and 5.
   */
readonly priority?: numberConstranumbers:Min value = 1Max value = 5;

/**
   * The Alias of the Private Link resource. Populating this optional field indicates that this origin is 'Private'
   */
readonly privateLinkAlias?: string;

/**
   * A custom message to be included in the approval request to connect to the Private Link.
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
   * Weight of the origin in given origin group for load balancing. Must be between 1 and 1000
   */
readonly weight?: numberConstranumbers:Min value = 1Max value = 1000;

/**
   * Defines the customer defined key Id. This id will exist in the incoming request to indicate the key used to form the hash.
   */
readonly keyId: string;

/**
   * Defines the parameters for using customer key vault for Url Signing Key.
   */
readonly keySourceParameters: KeyVaultSigningKeyParameters;

/**
   * Resource group of the user's Key Vault containing the secret
   */
readonly resourceGroupName: string;

/**
   * The name of secret in Key Vault.
   */
readonly secretName: string;

/**
   * The version(GUID) of secret in Key Vault.
   */
readonly secretVersion: string;

/**
   * Subscription Id of the user's Key Vault containing the secret
   */
readonly subscriptionId: string;

/**
   * 
   */
readonly typeName: 'KeyVaultSigningKeyParameters';

/**
   * The name of the user's Key Vault containing the secret
   */
readonly vaultName: string;

/**
   * Resource ID.
   */
readonly id?: string;
}

/**
 * CdnProfilesEndpoints resource
 */
export class CdnProfilesEndpoints extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CdnProfilesEndpointsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Cdn/profiles/endpoints@2023-07-01-preview";
  }

  protected getResourceBody(props: CdnProfilesEndpointsProps): string {
    return JSON.stringify(
        {properties: {contentTypesToCompress: ["string"], defaultOriginGroup: {id: "string"}, deliveryPolicy: {description: "string", rules: [{actions: [{name: "string"}], conditions: [{name: "string"}], name: "string", order: "${int}"}]}, geoFilters: [{action: "string", countryCodes: ["string"], relativePath: "string"}], isCompressionEnabled: "${bool}", isHttpAllowed: "${bool}", isHttpsAllowed: "${bool}", optimizationType: "string", originGroups: [{name: "string", properties: {healthProbeSettings: {probeIntervalInSeconds: "${int}", probePath: "string", probeProtocol: "string", probeRequestType: "string"}, origins: [{id: "string"}], responseBasedOriginErrorDetectionSettings: {httpErrorRanges: [{begin: "${int}", end: "${int}"}], responseBasedDetectedErrorTypes: "string", responseBasedFailoverThresholdPercentage: "${int}"}, trafficRestorationTimeToHealedOrNewEndpointsInMinutes: "${int}"}}], originHostHeader: "string", originPath: "string", origins: [{name: "string", properties: {enabled: "${bool}", hostName: "string", httpPort: "${int}", httpsPort: "${int}", originHostHeader: "string", priority: "${int}", privateLinkAlias: "string", privateLinkApprovalMessage: "string", privateLinkLocation: "string", privateLinkResourceId: "string", weight: "${int}"}}], probePath: "string", queryStringCachingBehavior: "string", urlSigningKeys: [{keyId: "string", keySourceParameters: {resourceGroupName: "string", secretName: "string", secretVersion: "string", subscriptionId: "string", typeName: "KeyVaultSigningKeyParameters", vaultName: "string"}}], webApplicationFirewallPolicyLink: {id: "string"}}}
    );
  }
}
