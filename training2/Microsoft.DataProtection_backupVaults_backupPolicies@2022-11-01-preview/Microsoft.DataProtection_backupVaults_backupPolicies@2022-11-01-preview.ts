import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataprotectionBackupvaultsBackuppoliciesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:backupVaults;

/**
   * Type of datasource for the backup management
   */
readonly datasourceTypes: string[];

/**
   * Set the object type
   */
readonly objectType: BackupPolicy;

/**
   * 
   */
readonly objectType: 'BackupPolicy';

/**
   * Policy rule dictionary that contains rules for each backuptype i.e Full/Incremental/Logs etc
   */
readonly policyRules: BasePolicyRule[];

/**
   * Set the object type
   */
readonly objectType: AzureBackupRuleAzureRetentionRule;

/**
   * 
   */
readonly objectType: 'AzureBackupRule';

/**
   * BackupParameters base
   */
readonly backupParameters?: BackupParameters;

/**
   * DataStoreInfo base
   */
readonly dataStore: DataStoreInfoBase;

/**
   * Trigger context
   */
readonly trigger: TriggerContext;

/**
   * Set the object type
   */
readonly objectType: AzureBackupParams;

/**
   * Type of the specific object - used for deserializing
   */
readonly objectType: 'AzureBackupParams';

/**
   * BackupType ; Full/Incremental etc
   */
readonly backupType: string;

/**
   * type of datastore; Operational/Vault/Archive
   */
readonly dataStoreType: 'ArchiveStore''OperationalStore''VaultStore';

/**
   * Type of Datasource object, used to initialize the right inherited type
   */
readonly objectType: string;

/**
   * Set the object type
   */
readonly objectType: AdhocBasedTriggerContextScheduleBasedTriggerContext;

/**
   * Type of the specific object - used for deserializing
   */
readonly objectType: 'AdhocBasedTriggerContext';

/**
   * Tagging Criteria containing retention tag for adhoc backup.
   */
readonly taggingCriteria: AdhocBasedTaggingCriteria;

/**
   * Retention tag information
   */
readonly tagInfo?: RetentionTag;

/**
   * Retention Tag Name to relate it to retention rule.
   */
readonly tagName: string;

/**
   * Type of the specific object - used for deserializing
   */
readonly objectType: 'ScheduleBasedTriggerContext';

/**
   * Schedule for this backup
   */
readonly schedule: BackupSchedule;

/**
   * List of tags that can be applicable for given schedule.
   */
readonly taggingCriteria: TaggingCriteria[];

/**
   * ISO 8601 repeating time interval format
   */
readonly repeatingTimeIntervals: string[];

/**
   * Time zone for a schedule. Example: Pacific Standard Time
   */
readonly timeZone?: string;

/**
   * Criteria which decides whether the tag can be applied to a triggered backup.
   */
readonly criteria?: BackupCriteria[];

/**
   * Specifies if tag is default.
   */
readonly isDefault: bool;

/**
   * Retention Tag priority.
   */
readonly taggingPriority: number;

/**
   * Retention tag information
   */
readonly tagInfo: RetentionTag;

/**
   * Set the object type
   */
readonly objectType: ScheduleBasedBackupCriteria;

/**
   * Type of the specific object - used for deserializing
   */
readonly objectType: 'ScheduleBasedBackupCriteria';

/**
   * it contains absolute values like "AllBackup" / "FirstOfDay" / "FirstOfWeek" / "FirstOfMonth"and should be part of AbsoluteMarker enum
   */
readonly absoluteCriteria?: String array containing any of:'AllBackup''FirstOfDay''FirstOfMonth''FirstOfWeek''FirstOfYear';

/**
   * This is day of the month from 1 to 28 other wise last of month
   */
readonly daysOfMonth?: Day[];

/**
   * It should be Sunday/Monday/T..../Saturday
   */
readonly daysOfTheWeek?: String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';

/**
   * It should be January/February/....../December
   */
readonly monthsOfYear?: String array containing any of:'April''August''December''February''January''July''June''March''May''November''October''September';

/**
   * List of schedule times for backup
   */
readonly scheduleTimes?: string[];

/**
   * It should be First/Second/Third/Fourth/Last
   */
readonly weeksOfTheMonth?: String array containing any of:'First''Fourth''Last''Second''Third';

/**
   * Date of the month
   */
readonly date?: number;

/**
   * Whether Date is last date of month
   */
readonly isLast?: bool;

/**
   * 
   */
readonly objectType: 'AzureRetentionRule';

/**
   * 
   */
readonly isDefault?: bool;

/**
   * 
   */
readonly lifecycles: SourceLifeCycle[];

/**
   * Delete Option
   */
readonly deleteAfter: DeleteOption;

/**
   * DataStoreInfo base
   */
readonly sourceDataStore: DataStoreInfoBase;

/**
   * 
   */
readonly targetDataStoreCopySettings?: TargetCopySetting[];

/**
   * Duration of deletion after given timespan
   */
readonly duration: string;

/**
   * Set the object type
   */
readonly objectType: AbsoluteDeleteOption;

/**
   * Type of the specific object - used for deserializing
   */
readonly objectType: 'AbsoluteDeleteOption';

/**
   * It can be CustomCopyOption or ImmediateCopyOption.
   */
readonly copyAfter: CopyOption;

/**
   * Info of target datastore
   */
readonly dataStore: DataStoreInfoBase;

/**
   * Set the object type
   */
readonly objectType: CopyOnExpiryOptionCustomCopyOptionImmediateCopyOption;

/**
   * Type of the specific object - used for deserializing
   */
readonly objectType: 'CopyOnExpiryOption';

/**
   * Type of the specific object - used for deserializing
   */
readonly objectType: 'CustomCopyOption';

/**
   * Data copied after given timespan
   */
readonly duration?: string;

/**
   * Type of the specific object - used for deserializing
   */
readonly objectType: 'ImmediateCopyOption';
}

/**
 * DataprotectionBackupvaultsBackuppolicies resource
 */
export class DataprotectionBackupvaultsBackuppolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DataprotectionBackupvaultsBackuppoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataProtection/backupVaults/backupPolicies@2022-11-01-preview";
  }

  protected getResourceBody(props: DataprotectionBackupvaultsBackuppoliciesProps): string {
    return JSON.stringify(
        {properties: {datasourceTypes: ["string"], objectType: "string"}}
    );
  }
}
