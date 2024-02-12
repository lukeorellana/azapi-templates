import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkApplicationgatewaywebapplicationfirewallpoliciesProps extends IAzAPIBaseProps {
/**
   * The custom rules inside the policy.
   */
readonly customRules?: WebApplicationFirewallCustomRule[];

/**
   * Describes the managedRules structure.
   */
readonly managedRules: ManagedRulesDefinition;

/**
   * The PolicySettings for policy.
   */
readonly policySettings?: PolicySettings;

/**
   * Type of Actions.
   */
readonly action: 'Allow''Block''Log';

/**
   * List of user session identifier group by clauses.
   */
readonly groupByUserSession?: GroupByUserSession[];

/**
   * List of match conditions.
   */
readonly matchConditions: MatchCondition[];

/**
   * Priority of the rule. Rules with a lower value will be evaluated before rules with a higher value.
   */
readonly priority: number;

/**
   * Duration over which Rate Limit policy will be applied. Applies only when ruleType is RateLimitRule.
   */
readonly rateLimitDuration?: 'FiveMins''OneMin';

/**
   * Rate Limit threshold to apply in case ruleType is RateLimitRule. Must be greater than or equal to 1
   */
readonly rateLimitThreshold?: number;

/**
   * The rule type.
   */
readonly ruleType: 'Invalid''MatchRule''RateLimitRule';

/**
   * Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified.
   */
readonly state?: 'Disabled''Enabled';

/**
   * List of group by clause variables.
   */
readonly groupByVariables: GroupByVariable[];

/**
   * User Session clause variable.
   */
readonly variableName: 'ClientAddr''GeoLocation''None';

/**
   * Match value.
   */
readonly matchValues: string[];

/**
   * List of match variables.
   */
readonly matchVariables: MatchVariable[];

/**
   * Whether this is negate condition or not.
   */
readonly negationConditon?: bool;

/**
   * The operator to be matched.
   */
readonly operator: 'Any''BeginsWith''Contains''EndsWith''Equal''GeoMatch''GreaterThan''GreaterThanOrEqual''IPMatch''LessThan''LessThanOrEqual''Regex';

/**
   * List of transforms.
   */
readonly transforms?: String array containing any of:'HtmlEntityDecode''Lowercase''RemoveNulls''Trim''Uppercase''UrlDecode''UrlEncode';

/**
   * The selector of match variable.
   */
readonly selector?: string;

/**
   * Match Variable.
   */
readonly variableName: 'PostArgs''QueryString''RemoteAddr''RequestBody''RequestCookies''RequestHeaders''RequestMethod''RequestUri';

/**
   * The Exclusions that are applied on the policy.
   */
readonly exclusions?: OwaspCrsExclusionEntry[];

/**
   * The managed rule sets that are associated with the policy.
   */
readonly managedRuleSets: ManagedRuleSet[];

/**
   * The managed rule sets that are associated with the exclusion.
   */
readonly exclusionManagedRuleSets?: ExclusionManagedRuleSet[];

/**
   * The variable to be excluded.
   */
readonly matchVariable: 'RequestArgKeys''RequestArgNames''RequestArgValues''RequestCookieKeys''RequestCookieNames''RequestCookieValues''RequestHeaderKeys''RequestHeaderNames''RequestHeaderValues';

/**
   * When matchVariable is a collection, operator used to specify which elements in the collection this exclusion applies to.
   */
readonly selector: string;

/**
   * When matchVariable is a collection, operate on the selector to specify which elements in the collection this exclusion applies to.
   */
readonly selectorMatchOperator: 'Contains''EndsWith''Equals''EqualsAny''StartsWith';

/**
   * Defines the rule groups to apply to the rule set.
   */
readonly ruleGroups?: ExclusionManagedRuleGroup[];

/**
   * Defines the rule set type to use.
   */
readonly ruleSetType: string;

/**
   * Defines the version of the rule set to use.
   */
readonly ruleSetVersion: string;

/**
   * The managed rule group for exclusion.
   */
readonly ruleGroupName: string;

/**
   * List of rules that will be excluded. If none specified, all rules in the group will be excluded.
   */
readonly rules?: ExclusionManagedRule[];

/**
   * Identifier for the managed rule.
   */
readonly ruleId: string;

/**
   * Defines the rule group overrides to apply to the rule set.
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
   * The managed rule group to override.
   */
readonly ruleGroupName: string;

/**
   * List of rules that will be disabled. If none specified, all rules in the group will be disabled.
   */
readonly rules?: ManagedRuleOverride[];

/**
   * Describes the override action to be applied when rule matches.
   */
readonly action?: 'Allow''AnomalyScoring''Block''Log';

/**
   * Identifier for the managed rule.
   */
readonly ruleId: string;

/**
   * The state of the managed rule. Defaults to Disabled if not specified.
   */
readonly state?: 'Disabled''Enabled';

/**
   * If the action type is block, customer can override the response body. The body must be specified in base64 encoding.
   */
readonly customBlockResponseBody?: string;

/**
   * If the action type is block, customer can override the response status code.
   */
readonly customBlockResponseStatusCode?: number;

/**
   * Whether allow WAF to enforce file upload limits.
   */
readonly fileUploadEnforcement?: bool;

/**
   * Maximum file upload size in Mb for WAF.
   */
readonly fileUploadLimitInMb?: number;

/**
   * To scrub sensitive log fields
   */
readonly logScrubbing?: PolicySettingsLogScrubbing;

/**
   * Maximum request body size in Kb for WAF.
   */
readonly maxRequestBodySizeInKb?: number;

/**
   * The mode of the policy.
   */
readonly mode?: 'Detection''Prevention';

/**
   * Whether to allow WAF to check request Body.
   */
readonly requestBodyCheck?: bool;

/**
   * Whether allow WAF to enforce request body limits.
   */
readonly requestBodyEnforcement?: bool;

/**
   * Max inspection limit in KB for request body inspection for WAF.
   */
readonly requestBodyInspectLimitInKB?: number;

/**
   * The state of the policy.
   */
readonly state?: 'Disabled''Enabled';

/**
   * The rules that are applied to the logs for scrubbing.
   */
readonly scrubbingRules?: WebApplicationFirewallScrubbingRules[];

/**
   * State of the log scrubbing config. Default value is Enabled.
   */
readonly state?: 'Disabled''Enabled';

/**
   * The variable to be scrubbed from the logs.
   */
readonly matchVariable: 'RequestArgNames''RequestCookieNames''RequestHeaderNames''RequestIPAddress''RequestJSONArgNames''RequestPostArgNames';

/**
   * When matchVariable is a collection, operator used to specify which elements in the collection this rule applies to.
   */
readonly selector?: string;

/**
   * When matchVariable is a collection, operate on the selector to specify which elements in the collection this rule applies to.
   */
readonly selectorMatchOperator: 'Equals''EqualsAny';

/**
   * Defines the state of log scrubbing rule. Default value is Enabled.
   */
readonly state?: 'Disabled''Enabled';
}

/**
 * NetworkApplicationgatewaywebapplicationfirewallpolicies resource
 */
export class NetworkApplicationgatewaywebapplicationfirewallpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkApplicationgatewaywebapplicationfirewallpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies@2023-04-01";
  }

  protected getResourceBody(props: NetworkApplicationgatewaywebapplicationfirewallpoliciesProps): string {
    return JSON.stringify(
        {properties: {customRules: [{action: "string", groupByUserSession: [{groupByVariables: [{variableName: "string"}]}], matchConditions: [{matchValues: ["string"], matchVariables: [{selector: "string", variableName: "string"}], negationConditon: "${bool}", operator: "string", transforms: ["string"]}], name: "string", priority: "${int}", rateLimitDuration: "string", rateLimitThreshold: "${int}", ruleType: "string", state: "string"}], managedRules: {exclusions: [{exclusionManagedRuleSets: [{ruleGroups: [{ruleGroupName: "string", rules: [{ruleId: "string"}]}], ruleSetType: "string", ruleSetVersion: "string"}], matchVariable: "string", selector: "string", selectorMatchOperator: "string"}], managedRuleSets: [{ruleGroupOverrides: [{ruleGroupName: "string", rules: [{action: "string", ruleId: "string", state: "string"}]}], ruleSetType: "string", ruleSetVersion: "string"}]}, policySettings: {customBlockResponseBody: "string", customBlockResponseStatusCode: "${int}", fileUploadEnforcement: "${bool}", fileUploadLimitInMb: "${int}", logScrubbing: {scrubbingRules: [{matchVariable: "string", selector: "string", selectorMatchOperator: "string", state: "string"}], state: "string"}, maxRequestBodySizeInKb: "${int}", mode: "string", requestBodyCheck: "${bool}", requestBodyEnforcement: "${bool}", requestBodyInspectLimitInKB: "${int}", state: "string"}}}
    );
  }
}
