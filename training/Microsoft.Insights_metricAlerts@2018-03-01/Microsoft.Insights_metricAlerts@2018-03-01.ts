import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface InsightsMetricalertsProps extends IAzAPIBaseProps {

}

export class InsightsMetricalerts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsMetricalertsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/metricAlerts@2018-03-01";
  }

  protected getResourceBody(props: InsightsMetricalertsProps): string {
    return JSON.stringify(
      {properties: {actions: [{actionGroupId: "string", webHookProperties: {}}], autoMitigate: "${bool}", criteria: {"odata.type": "string"}, description: "string", enabled: "${bool}", evaluationFrequency: "string", scopes: ["string"], severity: int, targetResourceRegion: "string", targetResourceType: "string", windowSize: "string"}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required)Character limit: 1-260Valid characters:Can't use:*#&+:<>?@%{}\/or control charactersCan't end with space or period. |
// | location | Resource location | string (required) |
// | tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
// | properties | The alert rule properties of the resource. | MetricAlertProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | actions | the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved. | MetricAlertAction[] |
// | autoMitigate | the flag that indicates whether the alert should be auto resolved or not. The default is true. | bool |
// | criteria | defines the specific alert criteria information. | MetricAlertCriteria(required) |
// | description | the description of the metric alert that will be included in the alert email. | string |
// | enabled | the flag that indicates whether the metric alert is enabled. | bool (required) |
// | evaluationFrequency | how often the metric alert is evaluated represented in ISO 8601 duration format. | string (required) |
// | scopes | the list of resource id's that this metric alert is scoped to. | string[] (required) |
// | severity | Alert severity {0, 1, 2, 3, 4} | int (required) |
// | targetResourceRegion | the region of the target resource(s) on which the alert is created/updated. Mandatory if the scope contains a subscription, resource group, or more than one resource. | string |
// | targetResourceType | the resource type of the target resource(s) on which the alert is created/updated. Mandatory if the scope contains a subscription, resource group, or more than one resource. | string |
// | windowSize | the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. | string (required) |

// | Name | Description | Value |
// |-|-|-|
// | actionGroupId | the id of the action group to use. | string |
// | webHookProperties | This field allows specifying custom properties, which would be appended to the alert payload sent as input to the webhook. | object |

// | Name | Description | Value |
// |-|-|-|
// | odata.type | Set the object type | Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteriaMicrosoft.Azure.Monitor.SingleResourceMultipleMetricCriteriaMicrosoft.Azure.Monitor.WebtestLocationAvailabilityCriteria(required) |

// | Name | Description | Value |
// |-|-|-|
// | odata.type | specifies the type of the alert criteria. | 'Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria' (required) |
// | allOf | the list of multiple metric criteria for this 'all of' operation. | MultiMetricCriteria[] |

// | Name | Description | Value |
// |-|-|-|
// | dimensions | List of dimension conditions. | MetricDimension[] |
// | metricName | Name of the metric. | string (required) |
// | metricNamespace | Namespace of the metric. | string |
// | name | Name of the criteria. | string (required) |
// | skipMetricValidation | Allows creating an alert rule on a custom metric that isn't yet emitted, by causing the metric validation to be skipped. | bool |
// | timeAggregation | the criteria time aggregation types. | 'Average''Count''Maximum''Minimum''Total' (required) |
// | criterionType | Set the object type | DynamicThresholdCriterionStaticThresholdCriterion(required) |

// | Name | Description | Value |
// |-|-|-|
// | name | Name of the dimension. | string (required) |
// | operator | the dimension operator. Only 'Include' and 'Exclude' are supported | string (required) |
// | values | list of dimension values. | string[] (required) |

// | Name | Description | Value |
// |-|-|-|
// | criterionType | Specifies the type of threshold criteria | 'DynamicThresholdCriterion' (required) |
// | alertSensitivity | The extent of deviation required to trigger an alert. This will affect how tight the threshold is to the metric series pattern. | 'High''Low''Medium' (required) |
// | failingPeriods | The minimum number of violations required within the selected lookback time window required to raise an alert. | DynamicThresholdFailingPeriods(required) |
// | ignoreDataBefore | Use this option to set the date from which to start learning the metric historical data and calculate the dynamic thresholds (in ISO8601 format) | string |
// | operator | The operator used to compare the metric value against the threshold. | 'GreaterOrLessThan''GreaterThan''LessThan' (required) |

// | Name | Description | Value |
// |-|-|-|
// | minFailingPeriodsToAlert | The number of violations to trigger an alert. Should be smaller or equal to numberOfEvaluationPeriods. | int (required) |
// | numberOfEvaluationPeriods | The number of aggregated lookback points. The lookback time window is calculated based on the aggregation granularity (windowSize) and the selected number of aggregated points. | int (required) |

// | Name | Description | Value |
// |-|-|-|
// | criterionType | Specifies the type of threshold criteria | 'DynamicThresholdCriterion''StaticThresholdCriterion' (required) |
// | dimensions | List of dimension conditions. | MetricDimension[] |
// | metricName | Name of the metric. | string (required) |
// | metricNamespace | Namespace of the metric. | string |
// | name | Name of the criteria. | string (required) |
// | operator | the criteria operator. | 'Equals''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual' (required) |
// | skipMetricValidation | Allows creating an alert rule on a custom metric that isn't yet emitted, by causing the metric validation to be skipped. | bool |
// | threshold | the criteria threshold value that activates the alert. | int (required) |
// | timeAggregation | the criteria time aggregation types. | 'Average''Count''Maximum''Minimum''Total' (required) |

// | Name | Description | Value |
// |-|-|-|
// | odata.type | specifies the type of the alert criteria. | 'Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria' (required) |
// | allOf | The list of metric criteria for this 'all of' operation. | MetricCriteria[] |

// | Name | Description | Value |
// |-|-|-|
// | odata.type | specifies the type of the alert criteria. | 'Microsoft.Azure.Monitor.WebtestLocationAvailabilityCriteria' (required) |
// | componentId | The Application Insights resource Id. | string (required) |
// | failedLocationCount | The number of failed locations. | int (required) |
// | webTestId | The Application Insights web test Id. | string (required) |
