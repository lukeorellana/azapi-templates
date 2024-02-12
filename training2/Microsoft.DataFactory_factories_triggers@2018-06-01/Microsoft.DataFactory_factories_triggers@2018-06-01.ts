import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatafactoryFactoriesTriggersProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:factories;

/**
   * List of tags that can be used for describing the trigger.
   */
readonly annotations?: any[];

/**
   * Trigger description.
   */
readonly description?: string;

/**
   * Set the object type
   */
readonly type: BlobEventsTriggerBlobTriggerChainingTriggerCustomEventsTriggerRerunTumblingWindowTriggerScheduleTriggerTumblingWindowTrigger;

/**
   * Trigger type.
   */
readonly type: 'BlobEventsTrigger';

/**
   * Pipelines that need to be started.
   */
readonly pipelines?: TriggerPipelineReference[];

/**
   * Blob Events Trigger properties.
   */
readonly typeProperties: BlobEventsTriggerTypeProperties;

/**
   * Pipeline parameters.
   */
readonly parameters?: object;

/**
   * Pipeline reference.
   */
readonly pipelineReference?: PipelineReference;

/**
   * Reference pipeline name.
   */
readonly referenceName: string;

/**
   * Pipeline reference type.
   */
readonly type: 'PipelineReference';

/**
   * The blob path must begin with the pattern provided for trigger to fire. For example, '/records/blobs/december/' will only fire the trigger for blobs in the december folder under the records container. At least one of these must be provided: blobPathBeginsWith, blobPathEndsWith.
   */
readonly blobPathBeginsWith?: string;

/**
   * The blob path must end with the pattern provided for trigger to fire. For example, 'december/boxes.csv' will only fire the trigger for blobs named boxes in a december folder. At least one of these must be provided: blobPathBeginsWith, blobPathEndsWith.
   */
readonly blobPathEndsWith?: string;

/**
   * The type of events that cause this trigger to fire.
   */
readonly events: String array containing any of:'Microsoft.Storage.BlobCreated''Microsoft.Storage.BlobDeleted';

/**
   * If set to true, blobs with zero bytes will be ignored.
   */
readonly ignoreEmptyBlobs?: bool;

/**
   * The ARM resource ID of the Storage Account.
   */
readonly scope: string;

/**
   * Trigger type.
   */
readonly type: 'BlobTrigger';

/**
   * Pipelines that need to be started.
   */
readonly pipelines?: TriggerPipelineReference[];

/**
   * Blob Trigger properties.
   */
readonly typeProperties: BlobTriggerTypeProperties;

/**
   * The path of the container/folder that will trigger the pipeline.
   */
readonly folderPath: string;

/**
   * The Azure Storage linked service reference.
   */
readonly linkedService: LinkedServiceReference;

/**
   * The max number of parallel files to handle when it is triggered.
   */
readonly maxConcurrency: number;

/**
   * Arguments for LinkedService.
   */
readonly parameters?: object;

/**
   * Reference LinkedService name.
   */
readonly referenceName: string;

/**
   * Linked service reference type.
   */
readonly type: 'LinkedServiceReference';

/**
   * Trigger type.
   */
readonly type: 'ChainingTrigger';

/**
   * Pipeline for which runs are created when all upstream pipelines complete successfully.
   */
readonly pipeline: TriggerPipelineReference;

/**
   * Chaining Trigger properties.
   */
readonly typeProperties: ChainingTriggerTypeProperties;

/**
   * Upstream Pipelines.
   */
readonly dependsOn: PipelineReference[];

/**
   * Run Dimension property that needs to be emitted by upstream pipelines.
   */
readonly runDimension: string;

/**
   * Trigger type.
   */
readonly type: 'CustomEventsTrigger';

/**
   * Pipelines that need to be started.
   */
readonly pipelines?: TriggerPipelineReference[];

/**
   * Custom Events Trigger properties.
   */
readonly typeProperties: CustomEventsTriggerTypeProperties;

/**
   * The list of event types that cause this trigger to fire.
   */
readonly events: any[];

/**
   * The ARM resource ID of the Azure Event Grid Topic.
   */
readonly scope: string;

/**
   * The event subject must begin with the pattern provided for trigger to fire. At least one of these must be provided: subjectBeginsWith, subjectEndsWith.
   */
readonly subjectBeginsWith?: string;

/**
   * The event subject must end with the pattern provided for trigger to fire. At least one of these must be provided: subjectBeginsWith, subjectEndsWith.
   */
readonly subjectEndsWith?: string;

/**
   * Trigger type.
   */
readonly type: 'RerunTumblingWindowTrigger';

/**
   * Rerun Trigger properties.
   */
readonly typeProperties: RerunTumblingWindowTriggerTypeProperties;

/**
   * The parent trigger reference.
   */
readonly parentTrigger: For Bicep, you can use theany()function.;

/**
   * The end time for the time period for which restatement is initiated. Only UTC time is currently supported.
   */
readonly requestedEndTime: string;

/**
   * The start time for the time period for which restatement is initiated. Only UTC time is currently supported.
   */
readonly requestedStartTime: string;

/**
   * The max number of parallel time windows (ready for execution) for which a rerun is triggered.
   */
readonly rerunConcurrency: number;

/**
   * Trigger type.
   */
readonly type: 'ScheduleTrigger';

/**
   * Pipelines that need to be started.
   */
readonly pipelines?: TriggerPipelineReference[];

/**
   * Schedule Trigger properties.
   */
readonly typeProperties: ScheduleTriggerTypeProperties;

/**
   * Recurrence schedule configuration.
   */
readonly recurrence: ScheduleTriggerRecurrence;

/**
   * The end time.
   */
readonly endTime?: string;

/**
   * The frequency.
   */
readonly frequency?: 'Day''Hour''Minute''Month''NotSpecified''Week''Year';

/**
   * The interval.
   */
readonly interval?: number;

/**
   * The recurrence schedule.
   */
readonly schedule?: RecurrenceSchedule;

/**
   * The start time.
   */
readonly startTime?: string;

/**
   * The time zone.
   */
readonly timeZone?: string;

/**
   * The hours.
   */
readonly hours?: number[];

/**
   * The minutes.
   */
readonly minutes?: number[];

/**
   * The month days.
   */
readonly monthDays?: number[];

/**
   * The monthly occurrences.
   */
readonly monthlyOccurrences?: RecurrenceScheduleOccurrence[];

/**
   * The days of the week.
   */
readonly weekDays?: String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';

/**
   * The day of the week.
   */
readonly day?: 'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';

/**
   * The occurrence.
   */
readonly occurrence?: number;

/**
   * Trigger type.
   */
readonly type: 'TumblingWindowTrigger';

/**
   * Pipeline for which runs are created when an event is fired for trigger window that is ready.
   */
readonly pipeline: TriggerPipelineReference;

/**
   * Tumbling Window Trigger properties.
   */
readonly typeProperties: TumblingWindowTriggerTypeProperties;

/**
   * Specifies how long the trigger waits past due time before triggering new run. It doesn't alter window start and end time. The default is 0. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])).
   */
readonly delay?: For Bicep, you can use theany()function.;

/**
   * Triggers that this trigger depends on. Only tumbling window triggers are supported.
   */
readonly dependsOn?: DependencyReference[];

/**
   * The end time for the time period for the trigger during which events are fired for windows that are ready. Only UTC time is currently supported.
   */
readonly endTime?: string;

/**
   * The frequency of the time windows.
   */
readonly frequency: 'Hour''Minute''Month';

/**
   * The interval of the time windows. The minimum interval allowed is 15 Minutes.
   */
readonly interval: number;

/**
   * The max number of parallel time windows (ready for execution) for which a new run is triggered.
   */
readonly maxConcurrency: number;

/**
   * Retry policy that will be applied for failed pipeline runs.
   */
readonly retryPolicy?: RetryPolicy;

/**
   * The start time for the time period for the trigger during which events are fired for windows that are ready. Only UTC time is currently supported.
   */
readonly startTime: string;

/**
   * Set the object type
   */
readonly type: SelfDependencyTumblingWindowTriggerReferenceTumblingWindowTriggerDependencyReference;

/**
   * The type of dependency reference.
   */
readonly type: 'SelfDependencyTumblingWindowTriggerReference';

/**
   * Timespan applied to the start time of a tumbling window when evaluating dependency.
   */
readonly offset: string;

/**
   * The size of the window when evaluating the dependency. If undefined the frequency of the tumbling window will be used.
   */
readonly size?: string;

/**
   * The type of dependency reference.
   */
readonly type: 'TumblingWindowTriggerDependencyReference';

/**
   * Timespan applied to the start time of a tumbling window when evaluating dependency.
   */
readonly offset?: string;

/**
   * Referenced trigger.
   */
readonly referenceTrigger: TriggerReference;

/**
   * The size of the window when evaluating the dependency. If undefined the frequency of the tumbling window will be used.
   */
readonly size?: string;

/**
   * Reference trigger name.
   */
readonly referenceName: string;

/**
   * Trigger reference type.
   */
readonly type: 'TriggerReference';

/**
   * Maximum ordinary retry attempts. Default is 0. Type: integer (or Expression with resultType integer), minimum: 0.
   */
readonly count?: For Bicep, you can use theany()function.;

/**
   * Interval between retries in seconds. Default is 30.
   */
readonly intervalInSeconds?: number;
}

/**
 * DatafactoryFactoriesTriggers resource
 */
export class DatafactoryFactoriesTriggers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatafactoryFactoriesTriggersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataFactory/factories/triggers@2018-06-01";
  }

  protected getResourceBody(props: DatafactoryFactoriesTriggersProps): string {
    return JSON.stringify(
        {properties: {annotations: ["${object}"], description: "string", type: "string"}}
    );
  }
}
