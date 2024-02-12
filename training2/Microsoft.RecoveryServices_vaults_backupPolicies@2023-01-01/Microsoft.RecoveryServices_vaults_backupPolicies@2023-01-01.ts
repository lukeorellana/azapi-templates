import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsBackuppoliciesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:vaults;

/**
   * Optional ETag.
   */
readonly eTag?: string;

/**
   * Number of items associated with this policy.
   */
readonly protectedItemsCount?: number;

/**
   * ResourceGuard Operation Requests
   */
readonly resourceGuardOperationRequests?: string[];

/**
   * Set the object type
   */
readonly backupManagementType: AzureIaasVMAzureSqlAzureStorageAzureWorkloadGenericProtectionPolicyMAB;

/**
   * This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
   */
readonly backupManagementType: 'AzureIaasVM';

/**
   * 
   */
readonly instantRPDetails?: InstantRPAdditionalDetails;

/**
   * Instant RP retention policy range in days
   */
readonly instantRpRetentionRangeInDays?: number;

/**
   * 
   */
readonly policyType?: 'Invalid''V1''V2';

/**
   * Retention policy with the details on backup copy retention ranges.
   */
readonly retentionPolicy?: RetentionPolicy;

/**
   * Backup schedule specified as part of backup policy.
   */
readonly schedulePolicy?: SchedulePolicy;

/**
   * Tiering policy to automatically move RPs to another tierKey is Target Tier, defined in RecoveryPointTierType enum.Tiering policy specifies the criteria to move RP to the target tier.
   */
readonly tieringPolicy?: object;

/**
   * TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time".
   */
readonly timeZone?: string;

/**
   * 
   */
readonly azureBackupRGNamePrefix?: string;

/**
   * 
   */
readonly azureBackupRGNameSuffix?: string;

/**
   * Set the object type
   */
readonly retentionPolicyType: LongTermRetentionPolicySimpleRetentionPolicy;

/**
   * This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
   */
readonly retentionPolicyType: 'LongTermRetentionPolicy';

/**
   * Daily retention schedule of the protection policy.
   */
readonly dailySchedule?: DailyRetentionSchedule;

/**
   * Monthly retention schedule of the protection policy.
   */
readonly monthlySchedule?: MonthlyRetentionSchedule;

/**
   * Weekly retention schedule of the protection policy.
   */
readonly weeklySchedule?: WeeklyRetentionSchedule;

/**
   * Yearly retention schedule of the protection policy.
   */
readonly yearlySchedule?: YearlyRetentionSchedule;

/**
   * Retention duration of retention Policy.
   */
readonly retentionDuration?: RetentionDuration;

/**
   * Retention times of retention policy.
   */
readonly retentionTimes?: string[];

/**
   * Count of duration types. Retention duration is obtained by the counting the duration type Count times.For example, when Count = 3 and DurationType = Weeks, retention duration will be three weeks.
   */
readonly count?: number;

/**
   * Retention duration type of retention policy.
   */
readonly durationType?: 'Days''Invalid''Months''Weeks''Years';

/**
   * Retention duration of retention Policy.
   */
readonly retentionDuration?: RetentionDuration;

/**
   * Daily retention format for monthly retention policy.
   */
readonly retentionScheduleDaily?: DailyRetentionFormat;

/**
   * Retention schedule format type for monthly retention policy.
   */
readonly retentionScheduleFormatType?: 'Daily''Invalid''Weekly';

/**
   * Weekly retention format for monthly retention policy.
   */
readonly retentionScheduleWeekly?: WeeklyRetentionFormat;

/**
   * Retention times of retention policy.
   */
readonly retentionTimes?: string[];

/**
   * List of days of the month.
   */
readonly daysOfTheMonth?: Day[];

/**
   * Date of the month
   */
readonly date?: number;

/**
   * Whether Date is last date of month
   */
readonly isLast?: bool;

/**
   * List of days of the week.
   */
readonly daysOfTheWeek?: String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';

/**
   * List of weeks of month.
   */
readonly weeksOfTheMonth?: String array containing any of:'First''Fourth''Invalid''Last''Second''Third';

/**
   * List of days of week for weekly retention policy.
   */
readonly daysOfTheWeek?: String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';

/**
   * Retention duration of retention Policy.
   */
readonly retentionDuration?: RetentionDuration;

/**
   * Retention times of retention policy.
   */
readonly retentionTimes?: string[];

/**
   * List of months of year of yearly retention policy.
   */
readonly monthsOfYear?: String array containing any of:'April''August''December''February''Invalid''January''July''June''March''May''November''October''September';

/**
   * Retention duration of retention Policy.
   */
readonly retentionDuration?: RetentionDuration;

/**
   * Daily retention format for yearly retention policy.
   */
readonly retentionScheduleDaily?: DailyRetentionFormat;

/**
   * Retention schedule format for yearly retention policy.
   */
readonly retentionScheduleFormatType?: 'Daily''Invalid''Weekly';

/**
   * Weekly retention format for yearly retention policy.
   */
readonly retentionScheduleWeekly?: WeeklyRetentionFormat;

/**
   * Retention times of retention policy.
   */
readonly retentionTimes?: string[];

/**
   * This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
   */
readonly retentionPolicyType: 'SimpleRetentionPolicy';

/**
   * Retention duration of the protection policy.
   */
readonly retentionDuration?: RetentionDuration;

/**
   * Set the object type
   */
readonly schedulePolicyType: LogSchedulePolicyLongTermSchedulePolicySimpleSchedulePolicySimpleSchedulePolicyV2;

/**
   * This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
   */
readonly schedulePolicyType: 'LogSchedulePolicy';

/**
   * Frequency of the log schedule operation of this policy in minutes.
   */
readonly scheduleFrequencyInMins?: number;

/**
   * This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
   */
readonly schedulePolicyType: 'LongTermSchedulePolicy';

/**
   * This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
   */
readonly schedulePolicyType: 'SimpleSchedulePolicy';

/**
   * Hourly Schedule of this Policy
   */
readonly hourlySchedule?: HourlySchedule;

/**
   * List of days of week this schedule has to be run.
   */
readonly scheduleRunDays?: String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';

/**
   * Frequency of the schedule operation of this policy.
   */
readonly scheduleRunFrequency?: 'Daily''Hourly''Invalid''Weekly';

/**
   * List of times of day this schedule has to be run.
   */
readonly scheduleRunTimes?: string[];

/**
   * At every number weeks this schedule has to be run.
   */
readonly scheduleWeeklyFrequency?: number;

/**
   * Interval at which backup needs to be triggered. For hourly the valuecan be 4/6/8/12
   */
readonly interval?: number;

/**
   * To specify duration of the backup window
   */
readonly scheduleWindowDuration?: number;

/**
   * To specify start time of the backup window
   */
readonly scheduleWindowStartTime?: string;

/**
   * This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
   */
readonly schedulePolicyType: 'SimpleSchedulePolicyV2';

/**
   * Daily schedule of this policy
   */
readonly dailySchedule?: DailySchedule;

/**
   * hourly schedule of this policy
   */
readonly hourlySchedule?: HourlySchedule;

/**
   * Frequency of the schedule operation of this policy.
   */
readonly scheduleRunFrequency?: 'Daily''Hourly''Invalid''Weekly';

/**
   * Weekly schedule of this policy
   */
readonly weeklySchedule?: WeeklySchedule;

/**
   * List of times of day this schedule has to be run.
   */
readonly scheduleRunTimes?: string[];

/**
   * 
   */
readonly scheduleRunDays?: String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';

/**
   * List of times of day this schedule has to be run.
   */
readonly scheduleRunTimes?: string[];

/**
   * This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
   */
readonly backupManagementType: 'AzureSql';

/**
   * Retention policy details.
   */
readonly retentionPolicy?: RetentionPolicy;

/**
   * This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
   */
readonly backupManagementType: 'AzureStorage';

/**
   * Retention policy with the details on backup copy retention ranges.
   */
readonly retentionPolicy?: RetentionPolicy;

/**
   * Backup schedule specified as part of backup policy.
   */
readonly schedulePolicy?: SchedulePolicy;

/**
   * TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time".
   */
readonly timeZone?: string;

/**
   * Type of workload for the backup management
   */
readonly workLoadType?: 'AzureFileShare''AzureSqlDb''Client''Exchange''FileFolder''GenericDataSource''Invalid''SAPAseDatabase''SAPHanaDBInstance''SAPHanaDatabase''SQLDB''SQLDataBase''Shareponumber''SystemState''VM''VMwareVM';

/**
   * This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
   */
readonly backupManagementType: 'AzureWorkload';

/**
   * Fix the policy inconsistency
   */
readonly makePolicyConsistent?: bool;

/**
   * Common settings for the backup management
   */
readonly settings?: Settings;

/**
   * List of sub-protection policies which includes schedule and retention
   */
readonly subProtectionPolicy?: SubProtectionPolicy[];

/**
   * Type of workload for the backup management
   */
readonly workLoadType?: 'AzureFileShare''AzureSqlDb''Client''Exchange''FileFolder''GenericDataSource''Invalid''SAPAseDatabase''SAPHanaDBInstance''SAPHanaDatabase''SQLDB''SQLDataBase''Shareponumber''SystemState''VM''VMwareVM';

/**
   * Workload compression flag. This has been added so that 'isSqlCompression'will be deprecated once clients upgrade to consider this flag.
   */
readonly isCompression?: bool;

/**
   * SQL compression flag
   */
readonly issqlcompression?: bool;

/**
   * TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time".
   */
readonly timeZone?: string;

/**
   * Type of backup policy type
   */
readonly policyType?: 'CopyOnlyFull''Differential''Full''Incremental''Invalid''Log''SnapshotCopyOnlyFull''SnapshotFull';

/**
   * Retention policy with the details on backup copy retention ranges.
   */
readonly retentionPolicy?: RetentionPolicy;

/**
   * Backup schedule specified as part of backup policy.
   */
readonly schedulePolicy?: SchedulePolicy;

/**
   * Tiering policy to automatically move RPs to another tier.Key is Target Tier, defined in RecoveryPointTierType enum.Tiering policy specifies the criteria to move RP to the target tier.
   */
readonly tieringPolicy?: object;

/**
   * This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
   */
readonly backupManagementType: 'GenericProtectionPolicy';

/**
   * Name of this policy's fabric.
   */
readonly fabricName?: string;

/**
   * List of sub-protection policies which includes schedule and retention
   */
readonly subProtectionPolicy?: SubProtectionPolicy[];

/**
   * TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time".
   */
readonly timeZone?: string;

/**
   * This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
   */
readonly backupManagementType: 'MAB';

/**
   * Retention policy details.
   */
readonly retentionPolicy?: RetentionPolicy;

/**
   * Backup schedule of backup policy.
   */
readonly schedulePolicy?: SchedulePolicy;
}

/**
 * RecoveryservicesVaultsBackuppolicies resource
 */
export class RecoveryservicesVaultsBackuppolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsBackuppoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/backupPolicies@2023-01-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsBackuppoliciesProps): string {
    return JSON.stringify(
        {properties: {protectedItemsCount: "${int}", resourceGuardOperationRequests: ["string"], backupManagementType: "string"}, eTag: "string"}
    );
  }
}
