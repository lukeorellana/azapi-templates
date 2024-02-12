import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsAutoscalesettingsProps extends IAzAPIBaseProps {
/**
   * the enabled flag. Specifies whether automatic scaling is enabled for the resource. The default value is 'false'.
   */
readonly enabled?: bool;

/**
   * the collection of notifications.
   */
readonly notifications?: AutoscaleNotification[];

/**
   * the predictive autoscale policy mode.
   */
readonly predictiveAutoscalePolicy?: PredictiveAutoscalePolicy;

/**
   * the collection of automatic scaling profiles that specify different scaling parameters for different time periods. A maximum of 20 profiles can be specified.
   */
readonly profiles: AutoscaleProfile[] Constranumbers:Max length = 20;

/**
   * the location of the resource that the autoscale setting should be added to.
   */
readonly targetResourceLocation?: string;

/**
   * the resource identifier of the resource that the autoscale setting should be added to.
   */
readonly targetResourceUri?: string;

/**
   * the email notification.
   */
readonly email?: EmailNotification;

/**
   * the operation associated with the notification and its value must be "scale"
   */
readonly operation: 'Scale';

/**
   * the collection of webhook notifications.
   */
readonly webhooks?: WebhookNotification[];

/**
   * the custom e-mails list. This value can be null or empty, in which case this attribute will be ignored.
   */
readonly customEmails?: string[];

/**
   * a value indicating whether to send email to subscription administrator.
   */
readonly sendToSubscriptionAdministrator?: bool;

/**
   * a value indicating whether to send email to subscription co-administrators.
   */
readonly sendToSubscriptionCoAdministrators?: bool;

/**
   * the service address to receive the notification.
   */
readonly serviceUri?: string;

/**
   * the amount of time to specify by which instances are launched in advance. It must be between 1 minute and 60 minutes in ISO 8601 format.
   */
readonly scaleLookAheadTime?: string;

/**
   * the predictive autoscale mode
   */
readonly scaleMode: 'Disabled''Enabled''ForecastOnly';

/**
   * the number of instances that can be used during this profile.
   */
readonly capacity: ScaleCapacity;

/**
   * the specific date-time for the profile. This element is not used if the Recurrence element is used.
   */
readonly fixedDate?: TimeWindow;

/**
   * the repeating times at which this profile begins. This element is not used if the FixedDate element is used.
   */
readonly recurrence?: Recurrence;

/**
   * the collection of rules that provide the triggers and parameters for the scaling action. A maximum of 10 rules can be specified.
   */
readonly rules: ScaleRule[];

/**
   * the number of instances that will be set if metrics are not available for evaluation. The default is only used if the current instance count is lower than the default.
   */
readonly default: string;

/**
   * the maximum number of instances for the resource. The actual maximum number of instances is limited by the cores that are available in the subscription.
   */
readonly maximum: string;

/**
   * the minimum number of instances for the resource.
   */
readonly minimum: string;

/**
   * the end time for the profile in ISO 8601 format.
   */
readonly end: string;

/**
   * the start time for the profile in ISO 8601 format.
   */
readonly start: string;

/**
   * the timezone of the start and end times for the profile. Some examples of valid time zones are: Dateline Standard Time, UTC-11, Hawaiian Standard Time, Alaskan Standard Time, Pacific Standard Time (Mexico), Pacific Standard Time, US Mountain Standard Time, Mountain Standard Time (Mexico), Mountain Standard Time, Central America Standard Time, Central Standard Time, Central Standard Time (Mexico), Canada Central Standard Time, SA Pacific Standard Time, Eastern Standard Time, US Eastern Standard Time, Venezuela Standard Time, Paraguay Standard Time, Atlantic Standard Time, Central Brazilian Standard Time, SA Western Standard Time, Pacific SA Standard Time, Newfoundland Standard Time, E. South America Standard Time, Argentina Standard Time, SA Eastern Standard Time, Greenland Standard Time, Montevideo Standard Time, Bahia Standard Time, UTC-02, Mid-Atlantic Standard Time, Azores Standard Time, Cape Verde Standard Time, Morocco Standard Time, UTC, GMT Standard Time, Greenwich Standard Time, W. Europe Standard Time, Central Europe Standard Time, Romance Standard Time, Central European Standard Time, W. Central Africa Standard Time, Namibia Standard Time, Jordan Standard Time, GTB Standard Time, Middle East Standard Time, Egypt Standard Time, Syria Standard Time, E. Europe Standard Time, South Africa Standard Time, FLE Standard Time, TÃ¼rkiye Standard Time, Israel Standard Time, Kaliningrad Standard Time, Libya Standard Time, Arabic Standard Time, Arab Standard Time, Belarus Standard Time, Russian Standard Time, E. Africa Standard Time, Iran Standard Time, Arabian Standard Time, Azerbaijan Standard Time, Russia Time Zone 3, Mauritius Standard Time, Georgian Standard Time, Caucasus Standard Time, Afghanistan Standard Time, West Asia Standard Time, Ekaterinburg Standard Time, Pakistan Standard Time, India Standard Time, Sri Lanka Standard Time, Nepal Standard Time, Central Asia Standard Time, Bangladesh Standard Time, N. Central Asia Standard Time, Myanmar Standard Time, SE Asia Standard Time, North Asia Standard Time, China Standard Time, North Asia East Standard Time, Singapore Standard Time, W. Australia Standard Time, Taipei Standard Time, Ulaanbaatar Standard Time, Tokyo Standard Time, Korea Standard Time, Yakutsk Standard Time, Cen. Australia Standard Time, AUS Central Standard Time, E. Australia Standard Time, AUS Eastern Standard Time, West Pacific Standard Time, Tasmania Standard Time, Magadan Standard Time, Vladivostok Standard Time, Russia Time Zone 10, Central Pacific Standard Time, Russia Time Zone 11, New Zealand Standard Time, UTC+12, Fiji Standard Time, Kamchatka Standard Time, Tonga Standard Time, Samoa Standard Time, Line Islands Standard Time
   */
readonly timeZone?: string;

/**
   * the recurrence frequency. How often the schedule profile should take effect. This value must be Week, meaning each week will have the same set of profiles. For example, to set a daily schedule, setscheduleto every day of the week. The frequency property specifies that the schedule is repeated weekly.
   */
readonly frequency: 'Day''Hour''Minute''Month''None''Second''Week''Year';

/**
   * the scheduling constraints for when the profile begins.
   */
readonly schedule: RecurrentSchedule;

/**
   * the collection of days that the profile takes effect on. Possible values are Sunday through Saturday.
   */
readonly days: string[];

/**
   * A collection of hours that the profile takes effect on. Values supported are 0 to 23 on the 24-hour clock (AM/PM times are not supported).
   */
readonly hours: number[];

/**
   * A collection of minutes at which the profile takes effect at.
   */
readonly minutes: number[];

/**
   * the timezone for the hours of the profile. Some examples of valid time zones are: Dateline Standard Time, UTC-11, Hawaiian Standard Time, Alaskan Standard Time, Pacific Standard Time (Mexico), Pacific Standard Time, US Mountain Standard Time, Mountain Standard Time (Mexico), Mountain Standard Time, Central America Standard Time, Central Standard Time, Central Standard Time (Mexico), Canada Central Standard Time, SA Pacific Standard Time, Eastern Standard Time, US Eastern Standard Time, Venezuela Standard Time, Paraguay Standard Time, Atlantic Standard Time, Central Brazilian Standard Time, SA Western Standard Time, Pacific SA Standard Time, Newfoundland Standard Time, E. South America Standard Time, Argentina Standard Time, SA Eastern Standard Time, Greenland Standard Time, Montevideo Standard Time, Bahia Standard Time, UTC-02, Mid-Atlantic Standard Time, Azores Standard Time, Cape Verde Standard Time, Morocco Standard Time, UTC, GMT Standard Time, Greenwich Standard Time, W. Europe Standard Time, Central Europe Standard Time, Romance Standard Time, Central European Standard Time, W. Central Africa Standard Time, Namibia Standard Time, Jordan Standard Time, GTB Standard Time, Middle East Standard Time, Egypt Standard Time, Syria Standard Time, E. Europe Standard Time, South Africa Standard Time, FLE Standard Time, TÃ¼rkiye Standard Time, Israel Standard Time, Kaliningrad Standard Time, Libya Standard Time, Arabic Standard Time, Arab Standard Time, Belarus Standard Time, Russian Standard Time, E. Africa Standard Time, Iran Standard Time, Arabian Standard Time, Azerbaijan Standard Time, Russia Time Zone 3, Mauritius Standard Time, Georgian Standard Time, Caucasus Standard Time, Afghanistan Standard Time, West Asia Standard Time, Ekaterinburg Standard Time, Pakistan Standard Time, India Standard Time, Sri Lanka Standard Time, Nepal Standard Time, Central Asia Standard Time, Bangladesh Standard Time, N. Central Asia Standard Time, Myanmar Standard Time, SE Asia Standard Time, North Asia Standard Time, China Standard Time, North Asia East Standard Time, Singapore Standard Time, W. Australia Standard Time, Taipei Standard Time, Ulaanbaatar Standard Time, Tokyo Standard Time, Korea Standard Time, Yakutsk Standard Time, Cen. Australia Standard Time, AUS Central Standard Time, E. Australia Standard Time, AUS Eastern Standard Time, West Pacific Standard Time, Tasmania Standard Time, Magadan Standard Time, Vladivostok Standard Time, Russia Time Zone 10, Central Pacific Standard Time, Russia Time Zone 11, New Zealand Standard Time, UTC+12, Fiji Standard Time, Kamchatka Standard Time, Tonga Standard Time, Samoa Standard Time, Line Islands Standard Time
   */
readonly timeZone: string;

/**
   * the trigger that results in a scaling action.
   */
readonly metricTrigger: MetricTrigger;

/**
   * the parameters for the scaling action.
   */
readonly scaleAction: ScaleAction;

/**
   * List of dimension conditions. For example: [{"DimensionName":"AppName","Operator":"Equals","Values":["App1"]},{"DimensionName":"Deployment","Operator":"Equals","Values":["default"]}].
   */
readonly dimensions?: ScaleRuleMetricDimension[];

/**
   * a value indicating whether metric should divide per instance.
   */
readonly dividePerInstance?: bool;

/**
   * the name of the metric that defines what the rule monitors.
   */
readonly metricName: string;

/**
   * the namespace of the metric that defines what the rule monitors.
   */
readonly metricNamespace?: string;

/**
   * the location of the resource the rule monitors.
   */
readonly metricResourceLocation?: string;

/**
   * the resource identifier of the resource the rule monitors.
   */
readonly metricResourceUri: string;

/**
   * the operator that is used to compare the metric data and the threshold.
   */
readonly operator: 'Equals''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''NotEquals';

/**
   * the metric statistic type. How the metrics from multiple instances are combined.
   */
readonly statistic: 'Average''Count''Max''Min''Sum';

/**
   * the threshold of the metric that triggers the scale action.
   */
readonly threshold: number;

/**
   * time aggregation type. How the data that is collected should be combined over time. The default value is Average.
   */
readonly timeAggregation: 'Average''Count''Last''Maximum''Minimum''Total';

/**
   * the granularity of metrics the rule monitors. Must be one of the predefined values returned from metric definitions for the metric. Must be between 12 hours and 1 minute.
   */
readonly timeGrain: string;

/**
   * the range of time in which instance data is collected. This value must be greater than the delay in metric collection, which can vary from resource-to-resource. Must be between 12 hours and 5 minutes.
   */
readonly timeWindow: string;

/**
   * Name of the dimension.
   */
readonly DimensionName: string;

/**
   * the dimension operator. Only 'Equals' and 'NotEquals' are supported. 'Equals' being equal to any of the values. 'NotEquals' being not equal to all of the values
   */
readonly Operator: 'Equals''NotEquals';

/**
   * list of dimension values. For example: ["App1","App2"].
   */
readonly Values: string[];

/**
   * the amount of time to wait since the last scaling action before this action occurs. It must be between 1 week and 1 minute in ISO 8601 format.
   */
readonly cooldown: string;

/**
   * the scale direction. Whether the scaling action increases or decreases the number of instances.
   */
readonly direction: 'Decrease''Increase''None';

/**
   * the type of action that should occur when the scale rule fires.
   */
readonly type: 'ChangeCount''ExactCount''PercentChangeCount''ServiceAllowedNextValue';

/**
   * the number of instances that are involved in the scaling action. This value must be 1 or greater. The default value is 1.
   */
readonly value?: string;
}

/**
 * InsightsAutoscalesettings resource
 */
export class InsightsAutoscalesettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsAutoscalesettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/autoscalesettings@2022-10-01";
  }

  protected getResourceBody(props: InsightsAutoscalesettingsProps): string {
    return JSON.stringify(
        {properties: {enabled: "${bool}", name: "string", notifications: [{email: {customEmails: ["string"], sendToSubscriptionAdministrator: "${bool}", sendToSubscriptionCoAdministrators: "${bool}"}, operation: "Scale", webhooks: [{properties: {}, serviceUri: "string"}]}], predictiveAutoscalePolicy: {scaleLookAheadTime: "string", scaleMode: "string"}, profiles: [{capacity: {default: "string", maximum: "string", minimum: "string"}, fixedDate: {end: "string", start: "string", timeZone: "string"}, name: "string", recurrence: {frequency: "string", schedule: {days: ["string"], hours: ["${int}"], minutes: ["${int}"], timeZone: "string"}}, rules: [{metricTrigger: {dimensions: [{DimensionName: "string", Operator: "string", Values: ["string"]}], dividePerInstance: "${bool}", metricName: "string", metricNamespace: "string", metricResourceLocation: "string", metricResourceUri: "string", operator: "string", statistic: "string", threshold: "${int}", timeAggregation: "string", timeGrain: "string", timeWindow: "string"}, scaleAction: {cooldown: "string", direction: "string", type: "string", value: "string"}}]}], targetResourceLocation: "string", targetResourceUri: "string"}}
    );
  }
}
