import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsScheduledqueryrulesProps extends IAzAPIBaseProps {
/**
   * Indicates the type of scheduled query rule. The default is LogAlert.
   */
readonly kind?: 'LogAlert''LogToMetric';

/**
   * The identity of the resource.
   */
readonly identity?: Identity;

/**
   * Type of managed service identity.
   */
readonly type: 'None''SystemAssigned''UserAssigned';

/**
   * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
readonly userAssignedIdentities?: object;

/**
   * Actions to invoke when the alert fires.
   */
readonly actions?: Actions;

/**
   * The flag that indicates whether the alert should be automatically resolved or not. The default is true. Relevant only for rules of the kind LogAlert.
   */
readonly autoMitigate?: bool;

/**
   * The flag which indicates whether this scheduled query rule should be stored in the customer's storage. The default is false. Relevant only for rules of the kind LogAlert.
   */
readonly checkWorkspaceAlertsStorageConfigured?: bool;

/**
   * The rule criteria that defines the conditions of the scheduled query rule.
   */
readonly criteria?: ScheduledQueryRuleCriteria;

/**
   * The description of the scheduled query rule.
   */
readonly description?: string;

/**
   * The display name of the alert rule
   */
readonly displayName?: string;

/**
   * The flag which indicates whether this scheduled query rule is enabled. Value should be true or false
   */
readonly enabled?: bool;

/**
   * How often the scheduled query rule is evaluated represented in ISO 8601 duration format. Relevant and required only for rules of the kind LogAlert.
   */
readonly evaluationFrequency?: string;

/**
   * Mute actions for the chosen period of time (in ISO 8601 duration format) after the alert is fired. Relevant only for rules of the kind LogAlert.
   */
readonly muteActionsDuration?: string;

/**
   * If specified then overrides the query time range (default is WindowSize*NumberOfEvaluationPeriods). Relevant only for rules of the kind LogAlert.
   */
readonly overrideQueryTimeRange?: string;

/**
   * Defines the configuration for resolving fired alerts. Relevant only for rules of the kind LogAlert.
   */
readonly ruleResolveConfiguration?: RuleResolveConfiguration;

/**
   * The list of resource id's that this scheduled query rule is scoped to.
   */
readonly scopes?: string[];

/**
   * Severity of the alert. Should be an integer between [0-4]. Value of 0 is severest. Relevant and required only for rules of the kind LogAlert.
   */
readonly severity?: number;

/**
   * The flag which indicates whether the provided query should be validated or not. The default is false. Relevant only for rules of the kind LogAlert.
   */
readonly skipQueryValidation?: bool;

/**
   * List of resource type of the target resource(s) on which the alert is created/updated. For example if the scope is a resource group and targetResourceTypes is Microsoft.Compute/virtualMachines, then a different alert will be fired for each virtual machine in the resource group which meet the alert criteria. Relevant only for rules of the kind LogAlert
   */
readonly targetResourceTypes?: string[];

/**
   * The period of time (in ISO 8601 duration format) on which the Alert query will be executed (bin size). Relevant and required only for rules of the kind LogAlert.
   */
readonly windowSize?: string;

/**
   * Action Group resource Ids to invoke when the alert fires.
   */
readonly actionGroups?: string[];

/**
   * The properties of an action properties.
   */
readonly actionProperties?: object;

/**
   * The properties of an alert payload.
   */
readonly customProperties?: object;

/**
   * A list of conditions to evaluate against the specified scopes
   */
readonly allOf?: Condition[];

/**
   * List of Dimensions conditions
   */
readonly dimensions?: Dimension[];

/**
   * The minimum number of violations required within the selected lookback time window required to raise an alert. Relevant only for rules of the kind LogAlert.
   */
readonly failingPeriods?: ConditionFailingPeriods;

/**
   * The column containing the metric measure number. Relevant only for rules of the kind LogAlert.
   */
readonly metricMeasureColumn?: string;

/**
   * The name of the metric to be sent. Relevant and required only for rules of the kind LogToMetric.
   */
readonly metricName?: string;

/**
   * The criteria operator. Relevant and required only for rules of the kind LogAlert.
   */
readonly operator?: 'Equals''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual';

/**
   * Log query alert
   */
readonly query?: string;

/**
   * The column containing the resource id. The content of the column must be a uri formatted as resource id. Relevant only for rules of the kind LogAlert.
   */
readonly resourceIdColumn?: string;

/**
   * the criteria threshold value that activates the alert. Relevant and required only for rules of the kind LogAlert.
   */
readonly threshold?: number;

/**
   * Aggregation type. Relevant and required only for rules of the kind LogAlert.
   */
readonly timeAggregation?: 'Average''Count''Maximum''Minimum''Total';

/**
   * Operator for dimension values
   */
readonly operator: 'Exclude''Include';

/**
   * List of dimension values
   */
readonly values: string[];

/**
   * The number of violations to trigger an alert. Should be smaller or equal to numberOfEvaluationPeriods. Default value is 1
   */
readonly minFailingPeriodsToAlert?: number;

/**
   * The number of aggregated lookback points. The lookback time window is calculated based on the aggregation granularity (windowSize) and the selected number of aggregated points. Default value is 1
   */
readonly numberOfEvaluationPeriods?: number;

/**
   * The flag that indicates whether or not to auto resolve a fired alert.
   */
readonly autoResolved?: bool;

/**
   * The duration a rule must evaluate as healthy before the fired alert is automatically resolved represented in ISO 8601 duration format.
   */
readonly timeToResolve?: string;
}

/**
 * InsightsScheduledqueryrules resource
 */
export class InsightsScheduledqueryrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsScheduledqueryrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/scheduledQueryRules@2023-03-15-preview";
  }

  protected getResourceBody(props: InsightsScheduledqueryrulesProps): string {
    return JSON.stringify(
        {properties: {actions: {actionGroups: ["string"], actionProperties: {}, customProperties: {}}, autoMitigate: "${bool}", checkWorkspaceAlertsStorageConfigured: "${bool}", criteria: {allOf: [{dimensions: [{name: "string", operator: "string", values: ["string"]}], failingPeriods: {minFailingPeriodsToAlert: "${int}", numberOfEvaluationPeriods: "${int}"}, metricMeasureColumn: "string", metricName: "string", operator: "string", query: "string", resourceIdColumn: "string", threshold: "${int}", timeAggregation: "string"}]}, description: "string", displayName: "string", enabled: "${bool}", evaluationFrequency: "string", muteActionsDuration: "string", overrideQueryTimeRange: "string", ruleResolveConfiguration: {autoResolved: "${bool}", timeToResolve: "string"}, scopes: ["string"], severity: "${int}", skipQueryValidation: "${bool}", targetResourceTypes: ["string"], windowSize: "string"}, kind: "string"}
    );
  }
}
