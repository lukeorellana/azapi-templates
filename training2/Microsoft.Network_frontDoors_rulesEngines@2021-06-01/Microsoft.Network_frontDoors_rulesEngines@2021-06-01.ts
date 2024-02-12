import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:frontDoors;

/**
   * A list of rules that define a particular Rules Engine Configuration.
   */
readonly rules?: RulesEngineRule[];

/**
   * Actions to perform on the request and response if all of the match conditions are met.
   */
readonly action: RulesEngineAction;

/**
   * A list of match conditions that must meet in order for the actions of this rule to run. Having no match conditions means the actions will always run.
   */
readonly matchConditions?: RulesEngineMatchCondition[];

/**
   * If this rule is a match should the rules engine continue running the remaining rules or stop. If not present, defaults to Continue.
   */
readonly matchProcessingBehavior?: 'Continue''Stop';

/**
   * A priority assigned to this rule.
   */
readonly priority: number;

/**
   * A list of header actions to apply from the request from AFD to the origin.
   */
readonly requestHeaderActions?: HeaderAction[];

/**
   * A list of header actions to apply from the response from AFD to the client.
   */
readonly responseHeaderActions?: HeaderAction[];

/**
   * Override the route configuration.
   */
readonly routeConfigurationOverride?: RouteConfiguration;

/**
   * Which type of manipulation to apply to the header.
   */
readonly headerActionType: 'Append''Delete''Overwrite';

/**
   * The name of the header this action will apply to.
   */
readonly headerName: string;

/**
   * The value to update the given header name with. This value is not used if the actionType is Delete.
   */
readonly value?: string;

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
   * Resource ID.
   */
readonly id?: string;

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
   * Describes if this is negate condition or not
   */
readonly negateCondition?: bool;

/**
   * Match values to match against. The operator will apply to each value in here with OR semantics. If any of them match the variable with the given operator this match condition is considered a match.
   */
readonly rulesEngineMatchValue: string[];

/**
   * Match Variable
   */
readonly rulesEngineMatchVariable: 'IsMobile''PostArgs''QueryString''RemoteAddr''RequestBody''RequestFilename''RequestFilenameExtension''RequestHeader''RequestMethod''RequestPath''RequestScheme''RequestUri';

/**
   * Describes operator to apply to the match condition.
   */
readonly rulesEngineOperator: 'Any''BeginsWith''Contains''EndsWith''Equal''GeoMatch''GreaterThan''GreaterThanOrEqual''IPMatch''LessThan''LessThanOrEqual';

/**
   * Name of selector in RequestHeader or RequestBody to be matched
   */
readonly selector?: string;

/**
   * List of transforms
   */
readonly transforms?: String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode';
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
