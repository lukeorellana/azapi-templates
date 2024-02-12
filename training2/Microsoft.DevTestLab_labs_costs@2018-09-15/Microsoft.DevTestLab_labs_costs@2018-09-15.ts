import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevtestlabLabsCostsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:labs;

/**
   * The creation date of the cost.
   */
readonly createdDate?: string;

/**
   * The currency code of the cost.
   */
readonly currencyCode?: string;

/**
   * The end time of the cost data.
   */
readonly endDateTime?: string;

/**
   * The start time of the cost data.
   */
readonly startDateTime?: string;

/**
   * The target cost properties
   */
readonly targetCost?: TargetCostProperties;

/**
   * Cost thresholds.
   */
readonly costThresholds?: CostThresholdProperties[];

/**
   * Reporting cycle end date.
   */
readonly cycleEndDateTime?: string;

/**
   * Reporting cycle start date.
   */
readonly cycleStartDateTime?: string;

/**
   * Reporting cycle type.
   */
readonly cycleType?: 'CalendarMonth''Custom';

/**
   * Target cost status
   */
readonly status?: 'Disabled''Enabled';

/**
   * Lab target cost
   */
readonly target?: number;

/**
   * Indicates whether this threshold will be displayed on cost charts.
   */
readonly displayOnChart?: 'Disabled''Enabled';

/**
   * Indicates the datetime when notifications were last sent for this threshold.
   */
readonly notificationSent?: string;

/**
   * The value of the percentage cost threshold.
   */
readonly percentageThreshold?: PercentageCostThresholdProperties;

/**
   * Indicates whether notifications will be sent when this threshold is exceeded.
   */
readonly sendNotificationWhenExceeded?: 'Disabled''Enabled';

/**
   * The ID of the cost threshold item.
   */
readonly thresholdId?: string;

/**
   * The cost threshold value.
   */
readonly thresholdValue?: number;
}

/**
 * DevtestlabLabsCosts resource
 */
export class DevtestlabLabsCosts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevtestlabLabsCostsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevTestLab/labs/costs@2018-09-15";
  }

  protected getResourceBody(props: DevtestlabLabsCostsProps): string {
    return JSON.stringify(
        {properties: {createdDate: "string", currencyCode: "string", endDateTime: "string", startDateTime: "string", targetCost: {costThresholds: [{displayOnChart: "string", notificationSent: "string", percentageThreshold: {thresholdValue: "${int}"}, sendNotificationWhenExceeded: "string", thresholdId: "string"}], cycleEndDateTime: "string", cycleStartDateTime: "string", cycleType: "string", status: "string", target: "${int}"}}}
    );
  }
}
