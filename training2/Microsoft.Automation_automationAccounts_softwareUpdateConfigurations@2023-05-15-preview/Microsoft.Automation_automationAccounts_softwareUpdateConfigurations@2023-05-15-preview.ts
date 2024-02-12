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
readonly parent?: Symbolic name for resource of type:automationAccounts;

/**
   * Details of provisioning error
   */
readonly error?: ErrorResponse;

/**
   * Schedule information for the Software update configuration
   */
readonly scheduleInfo: SUCScheduleProperties;

/**
   * Tasks information for the Software update configuration.
   */
readonly tasks?: SoftwareUpdateConfigurationTasks;

/**
   * update specific properties for the Software update configuration
   */
readonly updateConfiguration: UpdateConfiguration;

/**
   * Error code
   */
readonly code?: string;

/**
   * Error message indicating why the operation failed.
   */
readonly message?: string;

/**
   * Gets or sets the advanced schedule.
   */
readonly advancedSchedule?: AdvancedSchedule;

/**
   * Gets or sets the creation time.
   */
readonly creationTime?: string;

/**
   * Gets or sets the description.
   */
readonly description?: string;

/**
   * Gets or sets the end time of the schedule.
   */
readonly expiryTime?: string;

/**
   * Gets or sets the expiry time's offset in minutes.
   */
readonly expiryTimeOffsetMinutes?: number;

/**
   * Gets or sets the frequency of the schedule.
   */
readonly frequency?: 'Day''Hour''Minute''Month''OneTime''Week';

/**
   * Gets or sets the interval of the schedule.
   */
readonly interval?: number;

/**
   * Gets or sets a value indicating whether this schedule is enabled.
   */
readonly isEnabled?: bool;

/**
   * Gets or sets the last modified time.
   */
readonly lastModifiedTime?: string;

/**
   * Gets or sets the next run time of the schedule.
   */
readonly nextRun?: string;

/**
   * Gets or sets the next run time's offset in minutes.
   */
readonly nextRunOffsetMinutes?: number;

/**
   * Gets or sets the start time of the schedule.
   */
readonly startTime?: string;

/**
   * Gets or sets the time zone of the schedule.
   */
readonly timeZone?: string;

/**
   * Days of the month that the job should execute on. Must be between 1 and 31.
   */
readonly monthDays?: number[];

/**
   * Occurrences of days within a month.
   */
readonly monthlyOccurrences?: AdvancedScheduleMonthlyOccurrence[];

/**
   * Days of the week that the job should execute on.
   */
readonly weekDays?: string[];

/**
   * Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.
   */
readonly day?: 'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';

/**
   * Occurrence of the week within the month. Must be between 1 and 5
   */
readonly occurrence?: number;

/**
   * Post task properties.
   */
readonly postTask?: TaskProperties;

/**
   * Pre task properties.
   */
readonly preTask?: TaskProperties;

/**
   * Gets or sets the parameters of the task.
   */
readonly parameters?: TaskPropertiesParameters;

/**
   * Gets or sets the name of the runbook.
   */
readonly source?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * List of azure resource Ids for azure virtual machines targeted by the software update configuration.
   */
readonly azureVirtualMachines?: string[];

/**
   * Maximum time allowed for the software update configuration run. Duration needs to be specified using the format PT[n]H[n]M[n]S as per ISO8601
   */
readonly duration?: string;

/**
   * Linux specific update configuration.
   */
readonly linux?: LinuxProperties;

/**
   * List of names of non-azure machines targeted by the software update configuration.
   */
readonly nonAzureComputerNames?: string[];

/**
   * operating system of target machines
   */
readonly operatingSystem: 'Linux''Windows';

/**
   * Group targets for the software update configuration.
   */
readonly targets?: TargetProperties;

/**
   * Windows specific update configuration.
   */
readonly windows?: WindowsProperties;

/**
   * packages excluded from the software update configuration.
   */
readonly excludedPackageNameMasks?: string[];

/**
   * Update classifications included in the software update configuration.
   */
readonly includedPackageClassifications?: 'Critical''Other''Security''Unclassified';

/**
   * packages included from the software update configuration.
   */
readonly includedPackageNameMasks?: string[];

/**
   * Reboot setting for the software update configuration.
   */
readonly rebootSetting?: string;

/**
   * List of Azure queries in the software update configuration.
   */
readonly azureQueries?: AzureQueryProperties[];

/**
   * List of non Azure queries in the software update configuration.
   */
readonly nonAzureQueries?: NonAzureQueryProperties[];

/**
   * List of locations to scope the query to.
   */
readonly locations?: string[];

/**
   * List of Subscription or Resource Group ARM Ids.
   */
readonly scope?: string[];

/**
   * Tag settings for the VM.
   */
readonly tagSettings?: TagSettingsProperties;

/**
   * Filter VMs by Any or All specified tags.
   */
readonly filterOperator?: 'All''Any';

/**
   * Log Analytics Saved Search name.
   */
readonly functionAlias?: string;

/**
   * Workspace Id for Log Analytics in which the saved Search is resided.
   */
readonly workspaceId?: string;

/**
   * KB numbers excluded from the software update configuration.
   */
readonly excludedKbNumbers?: string[];

/**
   * KB numbers included from the software update configuration.
   */
readonly includedKbNumbers?: string[];

/**
   * Update classification included in the software update configuration. A comma separated string with required values
   */
readonly includedUpdateClassifications?: 'Critical''Definition''FeaturePack''Security''ServicePack''Tools''Unclassified''UpdateRollup''Updates';

/**
   * Reboot setting for the software update configuration.
   */
readonly rebootSetting?: string;
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
