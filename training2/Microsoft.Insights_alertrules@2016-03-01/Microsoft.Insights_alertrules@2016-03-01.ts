import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsAlertrulesProps extends IAzAPIBaseProps {
/**
   * action that is performed when the alert rule becomes active, and when an alert condition is resolved.
   */
readonly action?: RuleAction;

/**
   * the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
   */
readonly actions?: RuleAction[];

/**
   * the condition that results in the alert rule being activated.
   */
readonly condition: RuleCondition;

/**
   * the description of the alert rule that will be included in the alert email.
   */
readonly description?: string;

/**
   * the flag that indicates whether the alert rule is enabled.
   */
readonly isEnabled: bool;

/**
   * the provisioning state.
   */
readonly provisioningState?: string;

/**
   * Set the object type
   */
readonly odata.type: Microsoft.Azure.Management.Insights.Models.RuleEmailActionMicrosoft.Azure.Management.Insights.Models.RuleWebhookAction;

/**
   * specifies the type of the action. There are two types of actions: RuleEmailAction and RuleWebhookAction.
   */
readonly odata.type: 'Microsoft.Azure.Management.Insights.Models.RuleEmailAction';

/**
   * the list of administrator's custom email addresses to notify of the activation of the alert.
   */
readonly customEmails?: string[];

/**
   * Whether the administrators (service and co-administrators) of the service should be notified when the alert is activated.
   */
readonly sendToServiceOwners?: bool;

/**
   * specifies the type of the action. There are two types of actions: RuleEmailAction and RuleWebhookAction.
   */
readonly odata.type: 'Microsoft.Azure.Management.Insights.Models.RuleWebhookAction';

/**
   * the service uri to Post the notification when the alert activates or resolves.
   */
readonly serviceUri?: string;

/**
   * the resource from which the rule collects its data. For this type dataSource will always be of type RuleMetricDataSource.
   */
readonly dataSource?: RuleDataSource;

/**
   * Set the object type
   */
readonly odata.type: Microsoft.Azure.Management.Insights.Models.LocationThresholdRuleConditionMicrosoft.Azure.Management.Insights.Models.ManagementEventRuleConditionMicrosoft.Azure.Management.Insights.Models.ThresholdRuleCondition;

/**
   * the legacy resource identifier of the resource the rule monitors.NOTE: this property cannot be updated for an existing rule.
   */
readonly legacyResourceId?: string;

/**
   * the namespace of the metric.
   */
readonly metricNamespace?: string;

/**
   * the location of the resource.
   */
readonly resourceLocation?: string;

/**
   * the resource identifier of the resource the rule monitors.NOTE: this property cannot be updated for an existing rule.
   */
readonly resourceUri?: string;

/**
   * Set the object type
   */
readonly odata.type: Microsoft.Azure.Management.Insights.Models.RuleManagementEventDataSourceMicrosoft.Azure.Management.Insights.Models.RuleMetricDataSource;

/**
   * specifies the type of data source. There are two types of rule data sources: RuleMetricDataSource and RuleManagementEventDataSource
   */
readonly odata.type: 'Microsoft.Azure.Management.Insights.Models.RuleManagementEventDataSource';

/**
   * the claims.
   */
readonly claims?: RuleManagementEventClaimsDataSource;

/**
   * the event name.
   */
readonly eventName?: string;

/**
   * the event source.
   */
readonly eventSource?: string;

/**
   * the level.
   */
readonly level?: string;

/**
   * The name of the operation that should be checked for. If no name is provided, any operation will match.
   */
readonly operationName?: string;

/**
   * the resource group name.
   */
readonly resourceGroupName?: string;

/**
   * the resource provider name.
   */
readonly resourceProviderName?: string;

/**
   * The status of the operation that should be checked for. If no status is provided, any status will match.
   */
readonly status?: string;

/**
   * the substatus.
   */
readonly subStatus?: string;

/**
   * the email address.
   */
readonly emailAddress?: string;

/**
   * specifies the type of data source. There are two types of rule data sources: RuleMetricDataSource and RuleManagementEventDataSource
   */
readonly odata.type: 'Microsoft.Azure.Management.Insights.Models.RuleMetricDataSource';

/**
   * the name of the metric that defines what the rule monitors.
   */
readonly metricName?: string;

/**
   * specifies the type of condition. This can be one of three types: ManagementEventRuleCondition (occurrences of management events), LocationThresholdRuleCondition (based on the number of failures of a web test), and ThresholdRuleCondition (based on the threshold of a metric).
   */
readonly odata.type: 'Microsoft.Azure.Management.Insights.Models.LocationThresholdRuleCondition';

/**
   * the number of locations that must fail to activate the alert.
   */
readonly failedLocationCount: number Constranumbers:Min value = 0;

/**
   * the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day.
   */
readonly windowSize?: string;

/**
   * specifies the type of condition. This can be one of three types: ManagementEventRuleCondition (occurrences of management events), LocationThresholdRuleCondition (based on the number of failures of a web test), and ThresholdRuleCondition (based on the threshold of a metric).
   */
readonly odata.type: 'Microsoft.Azure.Management.Insights.Models.ManagementEventRuleCondition';

/**
   * How the data that is collected should be combined over time and when the alert is activated. Note that for management event alerts aggregation is optional â if it is not provided then any event will cause the alert to activate.
   */
readonly aggregation?: ManagementEventAggregationCondition;

/**
   * the condition operator.
   */
readonly operator?: 'GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual';

/**
   * The threshold value that activates the alert.
   */
readonly threshold?: number;

/**
   * the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day.
   */
readonly windowSize?: string;

/**
   * specifies the type of condition. This can be one of three types: ManagementEventRuleCondition (occurrences of management events), LocationThresholdRuleCondition (based on the number of failures of a web test), and ThresholdRuleCondition (based on the threshold of a metric).
   */
readonly odata.type: 'Microsoft.Azure.Management.Insights.Models.ThresholdRuleCondition';

/**
   * the operator used to compare the data and the threshold.
   */
readonly operator: 'GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual';

/**
   * the threshold value that activates the alert.
   */
readonly threshold: number;

/**
   * the time aggregation operator. How the data that are collected should be combined over time. The default value is the PrimaryAggregationType of the Metric.
   */
readonly timeAggregation?: 'Average''Last''Maximum''Minimum''Total';

/**
   * the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day.
   */
readonly windowSize?: string;
}

/**
 * InsightsAlertrules resource
 */
export class InsightsAlertrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsAlertrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/alertrules@2016-03-01";
  }

  protected getResourceBody(props: InsightsAlertrulesProps): string {
    return JSON.stringify(
        {properties: {action: {"odata.type": "string"}, actions: [{"odata.type": "string"}], condition: {dataSource: {legacyResourceId: "string", metricNamespace: "string", resourceLocation: "string", resourceUri: "string", "odata.type": "string"}, "odata.type": "string"}, description: "string", isEnabled: "${bool}", name: "string", provisioningState: "string"}}
    );
  }
}
