import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkFrontdoorwebapplicationfirewallpoliciesProps extends IAzAPIBaseProps {
/**
   * The pricing tier of web application firewall policy. Defaults to Classic_AzureFrontDoor if not specified.
   */
readonly sku?: Sku;

/**
   * Gets a unique read-only string that changes whenever the resource is updated.
   */
readonly etag?: string;

/**
   * Describes custom rules inside the policy.
   */
readonly customRules?: CustomRuleList;

/**
   * Describes managed rules inside the policy.
   */
readonly managedRules?: ManagedRuleSetList;

/**
   * Describes settings for the policy.
   */
readonly policySettings?: PolicySettings;

/**
   * List of rules
   */
readonly rules?: CustomRule[];

/**
   * Describes what action to be applied when rule matches.
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
   * Describes priority of the rule. Rules with a lower value will be evaluated before rules with a higher value.
   */
readonly priority: number;

/**
   * Time window for resetting the rate limit count. Default is 1 minute.
   */
readonly rateLimitDurationInMinutes?: number;

/**
   * Number of allowed requests per client within the time window.
   */
readonly rateLimitThreshold?: number;

/**
   * Describes type of rule.
   */
readonly ruleType: 'MatchRule''RateLimitRule';

/**
   * List of possible match values.
   */
readonly matchValue: string[];

/**
   * Request variable to compare with.
   */
readonly matchVariable: 'Cookies''PostArgs''QueryString''RemoteAddr''RequestBody''RequestHeader''RequestMethod''RequestUri''SocketAddr';

/**
   * Describes if the result of this condition should be negated.
   */
readonly negateCondition?: bool;

/**
   * Comparison type to use for matching with the variable value.
   */
readonly operator: 'Any''BeginsWith''Contains''EndsWith''Equal''GeoMatch''GreaterThan''GreaterThanOrEqual''IPMatch''LessThan''LessThanOrEqual''RegEx';

/**
   * Match against a specific key from the QueryString, PostArgs, RequestHeader or Cookies variables. Default is null.
   */
readonly selector?: string;

/**
   * List of transforms.
   */
readonly transforms?: String array containing any of:'Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode';

/**
   * List of rule sets.
   */
readonly managedRuleSets?: ManagedRuleSet[];

/**
   * Describes the exclusions that are applied to all rules in the set.
   */
readonly exclusions?: ManagedRuleExclusion[];

/**
   * Defines the rule group overrides to apply to the rule set.
   */
readonly ruleGroupOverrides?: ManagedRuleGroupOverride[];

/**
   * Defines the rule set action.
   */
readonly ruleSetAction?: 'Block''Log''Redirect';

/**
   * Defines the rule set type to use.
   */
readonly ruleSetType: string;

/**
   * Defines the version of the rule set to use.
   */
readonly ruleSetVersion: string;

/**
   * The variable type to be excluded.
   */
readonly matchVariable: 'QueryStringArgNames''RequestBodyJsonArgNames''RequestBodyPostArgNames''RequestCookieNames''RequestHeaderNames';

/**
   * Selector value for which elements in the collection this exclusion applies to.
   */
readonly selector: string;

/**
   * Comparison operator to apply to the selector when specifying which elements in the collection this exclusion applies to.
   */
readonly selectorMatchOperator: 'Contains''EndsWith''Equals''EqualsAny''StartsWith';

/**
   * Describes the exclusions that are applied to all rules in the group.
   */
readonly exclusions?: ManagedRuleExclusion[];

/**
   * Describes the managed rule group to override.
   */
readonly ruleGroupName: string;

/**
   * List of rules that will be disabled. If none specified, all rules in the group will be disabled.
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
   * Describes the exclusions that are applied to this specific rule.
   */
readonly exclusions?: ManagedRuleExclusion[];

/**
   * Identifier for the managed rule.
   */
readonly ruleId: string;

/**
   * If the action type is block, customer can override the response body. The body must be specified in base64 encoding.
   */
readonly customBlockResponseBody?: string;

/**
   * If the action type is block, customer can override the response status code.
   */
readonly customBlockResponseStatusCode?: number;

/**
   * Describes if the policy is in enabled or disabled state. Defaults to Enabled if not specified.
   */
readonly enabledState?: 'Disabled''Enabled';

/**
   * Describes if it is in detection mode or prevention mode at policy level.
   */
readonly mode?: 'Detection''Prevention';

/**
   * If action type is redirect, this field represents redirect URL for the client.
   */
readonly redirectUrl?: string;

/**
   * Describes if policy managed rules will inspect the request body content.
   */
readonly requestBodyCheck?: 'Disabled''Enabled';
}

/**
 * NetworkFrontdoorwebapplicationfirewallpolicies resource
 */
export class NetworkFrontdoorwebapplicationfirewallpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkFrontdoorwebapplicationfirewallpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/FrontDoorWebApplicationFirewallPolicies@2022-05-01";
  }

  protected getResourceBody(props: NetworkFrontdoorwebapplicationfirewallpoliciesProps): string {
    return JSON.stringify(
        {properties: {customRules: {rules: [{action: "string", enabledState: "string", matchConditions: [{matchValue: ["string"], matchVariable: "string", negateCondition: "${bool}", operator: "string", selector: "string", transforms: ["string"]}], name: "string", priority: "${int}", rateLimitDurationInMinutes: "${int}", rateLimitThreshold: "${int}", ruleType: "string"}]}, managedRules: {managedRuleSets: [{exclusions: [{matchVariable: "string", selector: "string", selectorMatchOperator: "string"}], ruleGroupOverrides: [{exclusions: [{matchVariable: "string", selector: "string", selectorMatchOperator: "string"}], ruleGroupName: "string", rules: [{action: "string", enabledState: "string", exclusions: [{matchVariable: "string", selector: "string", selectorMatchOperator: "string"}], ruleId: "string"}]}], ruleSetAction: "string", ruleSetType: "string", ruleSetVersion: "string"}]}, policySettings: {customBlockResponseBody: "string", customBlockResponseStatusCode: "${int}", enabledState: "string", mode: "string", redirectUrl: "string", requestBodyCheck: "string"}}, sku: {name: "string"}, etag: "string"}
    );
  }
}
