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
readonly parent?: Symbolic name for resource of type:featuresets;

/**
   * The asset description text.
   */
readonly description?: string;

/**
   * Specifies list of entities
   */
readonly entities?: string[];

/**
   * If the name version are system generated (anonymous registration).
   */
readonly isAnonymous?: bool;

/**
   * Is the asset archived?
   */
readonly isArchived?: bool;

/**
   * Specifies the materialization settings
   */
readonly materializationSettings?: MaterializationSettings;

/**
   * Specifies the feature spec details
   */
readonly specification?: FeaturesetSpecification;

/**
   * Specifies the asset stage
   */
readonly stage?: string;

/**
   * Specifies the notification details
   */
readonly notification?: NotificationSetting;

/**
   * Specifies the compute resource settings
   */
readonly resource?: MaterializationComputeResource;

/**
   * Specifies the schedule details
   */
readonly schedule?: RecurrenceTrigger;

/**
   * Specifies the spark compute settings
   */
readonly sparkConfiguration?: MaterializationSettingsSparkConfiguration;

/**
   * Specifies the stores to which materialization should happen
   */
readonly storeType?: 'None''Offline''Online''OnlineAndOffline';

/**
   * Send email notification to user on specified notification type
   */
readonly emailOn?: String array containing any of:'JobCancelled''JobCompleted''JobFailed';

/**
   * This is the email recipient list which has a limitation of 499 characters in total concat with comma separator
   */
readonly emails?: string[];

/**
   * Send webhook callback to a service. Key is a user-provided name for the webhook.
   */
readonly webhooks?: NotificationSettingWebhooks;

/**
   * 
   */
readonly {customized property}?: Webhook;

/**
   * Send callback on a specified notification event
   */
readonly eventType?: string;

/**
   * Set the object type
   */
readonly webhookType: AzureDevOps;

/**
   * [Required] Specifies the type of service to send a callback
   */
readonly webhookType: 'AzureDevOps';

/**
   * Specifies the instance type
   */
readonly instanceType?: string;

/**
   * Specifies end time of schedule in ISO 8601, but without a UTC offset. Referhttps://en.wikipedia.org/wiki/ISO_8601.Recommented format would be "2022-06-01T00:00:01"If not present, the schedule will run indefinitely
   */
readonly endTime?: string;

/**
   * [Required] The frequency to trigger schedule.
   */
readonly frequency: 'Day''Hour''Minute''Month''Week';

/**
   * [Required] Specifies schedule interval in conjunction with frequency
   */
readonly interval: number;

/**
   * The recurrence schedule.
   */
readonly schedule?: RecurrenceSchedule;

/**
   * Specifies start time of schedule in ISO 8601 format, but without a UTC offset.
   */
readonly startTime?: string;

/**
   * Specifies time zone in which the schedule runs.TimeZone should follow Windows time zone format. Refer:https://docs.microsoft.com/windows-hardware/manufacture/desktop/default-time-zones
   */
readonly timeZone?: string;

/**
   * [Required]
   */
readonly triggerType: 'Cron''Recurrence';

/**
   * [Required] List of hours for the schedule.
   */
readonly hours: number[];

/**
   * [Required] List of minutes for the schedule.
   */
readonly minutes: number[];

/**
   * List of month days for the schedule
   */
readonly monthDays?: number[];

/**
   * List of days for the schedule.
   */
readonly weekDays?: String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * Specifies the spec path
   */
readonly path?: string;
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
