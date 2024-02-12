import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * The pricing tier (defines a CDN provider, feature list and rate) of the CdnWebApplicationFirewallPolicy.
   */
readonly sku: Sku;

/**
   * Gets a unique read-only string that changes whenever the resource is updated.
   */
readonly etag?: string;

/**
   * Describes custom rules inside the policy.
   */
readonly customRules?: CustomRuleList;

/**
   * Key-Value pair representing additional properties for Web Application Firewall policy.
   */
readonly extendedProperties?: CdnWebApplicationFirewallPolicyPropertiesExtendedPro...;

/**
   * Describes managed rules inside the policy.
   */
readonly managedRules?: ManagedRuleSetList;

/**
   * Describes  policySettings for policy
   */
readonly policySettings?: PolicySettings;

/**
   * Describes rate limit rules inside the policy.
   */
readonly rateLimitRules?: RateLimitRuleList;

/**
   * List of rules
   */
readonly rules?: CustomRule[];

/**
   * Describes what action to be applied when rule matches
   */
readonly action: 'Allow''Block''Log''Redirect';

/**
   * Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified.
   */
readonly enabledState?: 'Disabled''Enabled';

/**
   * List of match conditions.
   */
readonly matchConditions: MatchCondition[];

/**
   * Defines in what order this rule be evaluated in the overall list of custom rules
   */
readonly priority: number Constranumbers:Min value = 0Max value = 1000;

/**
   * List of possible match values.
   */
readonly matchValue: string[];

/**
   * Match variable to compare against.
   */
readonly matchVariable: 'Cookies''PostArgs''QueryString''RemoteAddr''RequestBody''RequestHeader''RequestMethod''RequestUri''SocketAddr';

/**
   * Describes if the result of this condition should be negated.
   */
readonly negateCondition?: bool;

/**
   * Describes operator to be matched
   */
readonly operator: 'Any''BeginsWith''Contains''EndsWith''Equal''GeoMatch''GreaterThan''GreaterThanOrEqual''IPMatch''LessThan''LessThanOrEqual''RegEx';

/**
   * Selector can used to match a specific key for QueryString, Cookies, RequestHeader or PostArgs.
   */
readonly selector?: string;

/**
   * List of transforms.
   */
readonly transforms?: String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode';

/**
   * 
   */
readonly {customized property}?: string;

/**
   * List of rule sets.
   */
readonly managedRuleSets?: ManagedRuleSet[];

/**
   * Verizon only : If the rule set supports anomaly detection mode, this describes the threshold for blocking requests.
   */
readonly anomalyScore?: numberConstranumbers:Min value = 0Max value = 20;

/**
   * Defines the rule overrides to apply to the rule set.
   */
readonly ruleGroupOverrides?: ManagedRuleGroupOverride[];

/**
   * Defines the rule set type to use.
   */
readonly ruleSetType: string;

/**
   * Defines the version of the rule set to use.
   */
readonly ruleSetVersion: string;

/**
   * Describes the managed rule group within the rule set to override
   */
readonly ruleGroupName: string;

/**
   * List of rules that will be enabled. If none specified, all rules in the group will be disabled.
   */
readonly rules?: ManagedRuleOverride[];

/**
   * Describes the override action to be applied when rule matches.
   */
readonly action?: 'Allow''Block''Log''Redirect';

/**
   * Describes if the managed rule is in enabled or disabled state. Defaults to Disabled if not specified.
   */
readonly enabledState?: 'Disabled''Enabled';

/**
   * Identifier for the managed rule.
   */
readonly ruleId: string;

/**
   * If the action type is block, customer can override the response body. The body must be specified in base64 encoding.
   */
readonly defaultCustomBlockResponseBody?: stringConstranumbers:Pattern =^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==;

/**
   * If the action type is block, this field defines the default customer overridable http response status code.
   */
readonly defaultCustomBlockResponseStatusCode?: number;

/**
   * If action type is redirect, this field represents the default redirect URL for the client.
   */
readonly defaultRedirectUrl?: string;

/**
   * describes if the policy is in enabled state or disabled state
   */
readonly enabledState?: 'Disabled''Enabled';

/**
   * Describes if it is in detection mode or prevention mode at policy level.
   */
readonly mode?: 'Detection''Prevention';

/**
   * List of rules
   */
readonly rules?: RateLimitRule[];

/**
   * Describes what action to be applied when rule matches
   */
readonly action: 'Allow''Block''Log''Redirect';

/**
   * Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified.
   */
readonly enabledState?: 'Disabled''Enabled';

/**
   * List of match conditions.
   */
readonly matchConditions: MatchCondition[];

/**
   * Defines in what order this rule be evaluated in the overall list of custom rules
   */
readonly priority: number Constranumbers:Min value = 0Max value = 1000;

/**
   * Defines rate limit duration. Default is 1 minute.
   */
readonly rateLimitDurationInMinutes: number Constranumbers:Min value = 0Max value = 60;

/**
   * Defines rate limit threshold.
   */
readonly rateLimitThreshold: number Constranumbers:Min value = 0;
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
