import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsMetricalertsProps extends IAzAPIBaseProps {
/**
   * the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
   */
readonly actions?: MetricAlertAction[];

/**
   * the flag that indicates whether the alert should be auto resolved or not. The default is true.
   */
readonly autoMitigate?: bool;

/**
   * defines the specific alert criteria information.
   */
readonly criteria: MetricAlertCriteria;

/**
   * the description of the metric alert that will be included in the alert email.
   */
readonly description?: string;

/**
   * the flag that indicates whether the metric alert is enabled.
   */
readonly enabled: bool;

/**
   * how often the metric alert is evaluated represented in ISO 8601 duration format.
   */
readonly evaluationFrequency: string;

/**
   * the list of resource id's that this metric alert is scoped to.
   */
readonly scopes: string[];

/**
   * Alert severity {0, 1, 2, 3, 4}
   */
readonly severity: number;

/**
   * the region of the target resource(s) on which the alert is created/updated. Mandatory if the scope contains a subscription, resource group, or more than one resource.
   */
readonly targetResourceRegion?: string;

/**
   * the resource type of the target resource(s) on which the alert is created/updated. Mandatory if the scope contains a subscription, resource group, or more than one resource.
   */
readonly targetResourceType?: string;

/**
   * the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold.
   */
readonly windowSize: string;

/**
   * the id of the action group to use.
   */
readonly actionGroupId?: string;

/**
   * This field allows specifying custom properties, which would be appended to the alert payload sent as input to the webhook.
   */
readonly webHookProperties?: object;

/**
   * Set the object type
   */
readonly odata.type: Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteriaMicrosoft.Azure.Monitor.SingleResourceMultipleMetricCriteriaMicrosoft.Azure.Monitor.WebtestLocationAvailabilityCriteria;

/**
   * specifies the type of the alert criteria.
   */
readonly odata.type: 'Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria';

/**
   * the list of multiple metric criteria for this 'all of' operation.
   */
readonly allOf?: MultiMetricCriteria[];

/**
   * List of dimension conditions.
   */
readonly dimensions?: MetricDimension[];

/**
   * Name of the metric.
   */
readonly metricName: string;

/**
   * Namespace of the metric.
   */
readonly metricNamespace?: string;

/**
   * Allows creating an alert rule on a custom metric that isn't yet emitted, by causing the metric validation to be skipped.
   */
readonly skipMetricValidation?: bool;

/**
   * the criteria time aggregation types.
   */
readonly timeAggregation: 'Average''Count''Maximum''Minimum''Total';

/**
   * Set the object type
   */
readonly criterionType: DynamicThresholdCriterionStaticThresholdCriterion;

/**
   * the dimension operator. Only 'Include' and 'Exclude' are supported
   */
readonly operator: string;

/**
   * list of dimension values.
   */
readonly values: string[];

/**
   * Specifies the type of threshold criteria
   */
readonly criterionType: 'DynamicThresholdCriterion';

/**
   * The extent of deviation required to trigger an alert. This will affect how tight the threshold is to the metric series pattern.
   */
readonly alertSensitivity: 'High''Low''Medium';

/**
   * The minimum number of violations required within the selected lookback time window required to raise an alert.
   */
readonly failingPeriods: DynamicThresholdFailingPeriods;

/**
   * Use this option to set the date from which to start learning the metric historical data and calculate the dynamic thresholds (in ISO8601 format)
   */
readonly ignoreDataBefore?: string;

/**
   * The operator used to compare the metric value against the threshold.
   */
readonly operator: 'GreaterOrLessThan''GreaterThan''LessThan';

/**
   * The number of violations to trigger an alert. Should be smaller or equal to numberOfEvaluationPeriods.
   */
readonly minFailingPeriodsToAlert: number;

/**
   * The number of aggregated lookback points. The lookback time window is calculated based on the aggregation granularity (windowSize) and the selected number of aggregated points.
   */
readonly numberOfEvaluationPeriods: number;

/**
   * Specifies the type of threshold criteria
   */
readonly criterionType: 'DynamicThresholdCriterion''StaticThresholdCriterion';

/**
   * List of dimension conditions.
   */
readonly dimensions?: MetricDimension[];

/**
   * Name of the metric.
   */
readonly metricName: string;

/**
   * Namespace of the metric.
   */
readonly metricNamespace?: string;

/**
   * the criteria operator.
   */
readonly operator: 'Equals''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual';

/**
   * Allows creating an alert rule on a custom metric that isn't yet emitted, by causing the metric validation to be skipped.
   */
readonly skipMetricValidation?: bool;

/**
   * the criteria threshold value that activates the alert.
   */
readonly threshold: number;

/**
   * the criteria time aggregation types.
   */
readonly timeAggregation: 'Average''Count''Maximum''Minimum''Total';

/**
   * specifies the type of the alert criteria.
   */
readonly odata.type: 'Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria';

/**
   * The list of metric criteria for this 'all of' operation.
   */
readonly allOf?: MetricCriteria[];

/**
   * specifies the type of the alert criteria.
   */
readonly odata.type: 'Microsoft.Azure.Monitor.WebtestLocationAvailabilityCriteria';

/**
   * The Application Insights resource Id.
   */
readonly componentId: string;

/**
   * The number of failed locations.
   */
readonly failedLocationCount: number;

/**
   * The Application Insights web test Id.
   */
readonly webTestId: string;
}

/**
 * InsightsMetricalerts resource
 */
export class InsightsMetricalerts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsMetricalertsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/metricAlerts@2018-03-01";
  }

  protected getResourceBody(props: InsightsMetricalertsProps): string {
    return JSON.stringify(
        {properties: {actions: [{actionGroupId: "string", webHookProperties: {}}], autoMitigate: "${bool}", criteria: {"odata.type": "string"}, description: "string", enabled: "${bool}", evaluationFrequency: "string", scopes: ["string"], severity: "${int}", targetResourceRegion: "string", targetResourceType: "string", windowSize: "string"}}
    );
  }
}
