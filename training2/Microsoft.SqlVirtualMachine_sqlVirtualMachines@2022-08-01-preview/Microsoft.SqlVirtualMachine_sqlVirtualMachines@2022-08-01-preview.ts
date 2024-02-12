import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlvirtualmachineSqlvirtualmachinesProps extends IAzAPIBaseProps {
/**
   * Azure Active Directory identity of the server.
   */
readonly identity?: ResourceIdentity;

/**
   * The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.
   */
readonly type?: 'None''SystemAssigned';

/**
   * SQL best practices Assessment Settings.
   */
readonly assessmentSettings?: AssessmentSettings;

/**
   * Auto backup settings for SQL Server.
   */
readonly autoBackupSettings?: AutoBackupSettings;

/**
   * Auto patching settings for applying critical security updates to SQL virtual machine.
   */
readonly autoPatchingSettings?: AutoPatchingSettings;

/**
   * Enable automatic upgrade of Sql IaaS extension Agent.
   */
readonly enableAutomaticUpgrade?: bool;

/**
   * Key vault credential settings.
   */
readonly keyVaultCredentialSettings?: KeyVaultCredentialSettings;

/**
   * SQL IaaS Agent least privilege mode.
   */
readonly leastPrivilegeMode?: 'Enabled''NotSet';

/**
   * SQL Server configuration management settings.
   */
readonly serverConfigurationsManagementSettings?: ServerConfigurationsManagementSettings;

/**
   * SQL image offer. Examples include SQL2016-WS2016, SQL2017-WS2016.
   */
readonly sqlImageOffer?: string;

/**
   * SQL Server edition type.
   */
readonly sqlImageSku?: 'Developer''Enterprise''Express''Standard''Web';

/**
   * SQL Server Management type.
   */
readonly sqlManagement?: 'Full''LightWeight''NoAgent';

/**
   * SQL Server license type.
   */
readonly sqlServerLicenseType?: 'AHUB''DR''PAYG';

/**
   * ARM resource id of the SQL virtual machine group this SQL virtual machine is or will be part of.
   */
readonly sqlVirtualMachineGroupResourceId?: string;

/**
   * Storage Configuration Settings.
   */
readonly storageConfigurationSettings?: StorageConfigurationSettings;

/**
   * ARM Resource id of underlying virtual machine created from SQL marketplace image.
   */
readonly virtualMachineResourceId?: string;

/**
   * Domain credentials for setting up Windows Server Failover Cluster for SQL availability group.
   */
readonly wsfcDomainCredentials?: WsfcDomainCredentials;

/**
   * Domain credentials for setting up Windows Server Failover Cluster for SQL availability group.
   */
readonly wsfcStaticIp?: string;

/**
   * Enable or disable SQL best practices Assessment feature on SQL virtual machine.
   */
readonly enable?: bool;

/**
   * Run SQL best practices Assessment immediately on SQL virtual machine.
   */
readonly runImmediately?: bool;

/**
   * Schedule for SQL best practices Assessment.
   */
readonly schedule?: Schedule;

/**
   * Day of the week to run assessment.
   */
readonly dayOfWeek?: 'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';

/**
   * Enable or disable assessment schedule on SQL virtual machine.
   */
readonly enable?: bool;

/**
   * Occurrence of the DayOfWeek day within a month to schedule assessment. Takes values: 1,2,3,4 and -1. Use -1 for last DayOfWeek day of the month
   */
readonly monthlyOccurrence?: number;

/**
   * Time of the day in HH:mm format. Eg. 17:30
   */
readonly startTime?: string;

/**
   * Number of weeks to schedule between 2 assessment runs. Takes value from 1-6
   */
readonly weeklyInterval?: number;

/**
   * Backup schedule type.
   */
readonly backupScheduleType?: 'Automated''Manual';

/**
   * Include or exclude system databases from auto backup.
   */
readonly backupSystemDbs?: bool;

/**
   * Days of the week for the backups when FullBackupFrequency is set to Weekly.
   */
readonly daysOfWeek?: String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';

/**
   * Enable or disable autobackup on SQL virtual machine.
   */
readonly enable?: bool;

/**
   * Enable or disable encryption for backup on SQL virtual machine.
   */
readonly enableEncryption?: bool;

/**
   * Frequency of full backups. In both cases, full backups begin during the next scheduled time window.
   */
readonly fullBackupFrequency?: 'Daily''Weekly';

/**
   * Start time of a given day during which full backups can take place. 0-23 hours.
   */
readonly fullBackupStartTime?: number;

/**
   * Duration of the time window of a given day during which full backups can take place. 1-23 hours.
   */
readonly fullBackupWindowHours?: number;

/**
   * Frequency of log backups. 5-60 minutes.
   */
readonly logBackupFrequency?: number;

/**
   * Password for encryption on backup.
   */
readonly password?: string;

/**
   * Retention period of backup: 1-90 days.
   */
readonly retentionPeriod?: number;

/**
   * Storage account key where backup will be taken to.
   */
readonly storageAccessKey?: string;

/**
   * Storage account url where backup will be taken to.
   */
readonly storageAccountUrl?: string;

/**
   * Storage container name where backup will be taken to.
   */
readonly storageContainerName?: string;

/**
   * Day of week to apply the patch on.
   */
readonly dayOfWeek?: 'Everyday''Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';

/**
   * Enable or disable autopatching on SQL virtual machine.
   */
readonly enable?: bool;

/**
   * Duration of patching.
   */
readonly maintenanceWindowDuration?: number;

/**
   * Hour of the day when patching is initiated. Local VM time.
   */
readonly maintenanceWindowStartingHour?: number;

/**
   * Azure Key Vault url.
   */
readonly azureKeyVaultUrl?: string;

/**
   * Credential name.
   */
readonly credentialName?: string;

/**
   * Enable or disable key vault credential setting.
   */
readonly enable?: bool;

/**
   * Service principal name to access key vault.
   */
readonly servicePrincipalName?: string;

/**
   * Service principal name secret to access key vault.
   */
readonly servicePrincipalSecret?: string;

/**
   * Additional SQL feature settings.
   */
readonly additionalFeaturesServerConfigurations?: AdditionalFeaturesServerConfigurations;

/**
   * Azure AD authentication Settings.
   */
readonly azureAdAuthenticationSettings?: AADAuthenticationSettings;

/**
   * SQL connectivity type settings.
   */
readonly sqlConnectivityUpdateSettings?: SqlConnectivityUpdateSettings;

/**
   * SQL Instance settings.
   */
readonly sqlInstanceSettings?: SQLInstanceSettings;

/**
   * SQL storage update settings.
   */
readonly sqlStorageUpdateSettings?: SqlStorageUpdateSettings;

/**
   * SQL workload type settings.
   */
readonly sqlWorkloadTypeUpdateSettings?: SqlWorkloadTypeUpdateSettings;

/**
   * Enable or disable R services (SQL 2016 onwards).
   */
readonly isRServicesEnabled?: bool;

/**
   * The client Id of the Managed Identity to query Microsoft Graph API. An empty string must be used for the system assigned Managed Identity
   */
readonly clientId?: string;

/**
   * SQL Server connectivity option.
   */
readonly connectivityType?: 'LOCAL''PRIVATE''PUBLIC';

/**
   * SQL Server port.
   */
readonly port?: number;

/**
   * SQL Server sysadmin login password.
   */
readonly sqlAuthUpdatePassword?: string;

/**
   * SQL Server sysadmin login to create.
   */
readonly sqlAuthUpdateUserName?: string;

/**
   * SQL Server Collation.
   */
readonly collation?: string;

/**
   * SQL Server IFI.
   */
readonly isIfiEnabled?: bool;

/**
   * SQL Server LPIM.
   */
readonly isLpimEnabled?: bool;

/**
   * SQL Server Optimize for Adhoc workloads.
   */
readonly isOptimizeForAdHocWorkloadsEnabled?: bool;

/**
   * SQL Server MAXDOP.
   */
readonly maxDop?: number;

/**
   * SQL Server maximum memory.
   */
readonly maxServerMemoryMB?: number;

/**
   * SQL Server minimum memory.
   */
readonly minServerMemoryMB?: number;

/**
   * Disk configuration to apply to SQL Server.
   */
readonly diskConfigurationType?: 'ADD''EXTEND''NEW';

/**
   * Virtual machine disk count.
   */
readonly diskCount?: number;

/**
   * Device id of the first disk to be updated.
   */
readonly startingDeviceId?: number;

/**
   * SQL Server workload type.
   */
readonly sqlWorkloadType?: 'DW''GENERAL''OLTP';

/**
   * Disk configuration to apply to SQL Server.
   */
readonly diskConfigurationType?: 'ADD''EXTEND''NEW';

/**
   * SQL Server Data Storage Settings.
   */
readonly sqlDataSettings?: SQLStorageSettings;

/**
   * SQL Server Log Storage Settings.
   */
readonly sqlLogSettings?: SQLStorageSettings;

/**
   * SQL Server SystemDb Storage on DataPool if true.
   */
readonly sqlSystemDbOnDataDisk?: bool;

/**
   * SQL Server TempDb Storage Settings.
   */
readonly sqlTempDbSettings?: SQLTempDbSettings;

/**
   * Storage workload type.
   */
readonly storageWorkloadType?: 'DW''GENERAL''OLTP';

/**
   * SQL Server default file path
   */
readonly defaultFilePath?: string;

/**
   * Logical Unit Numbers for the disks.
   */
readonly luns?: number[];

/**
   * SQL Server tempdb data file count
   */
readonly dataFileCount?: number;

/**
   * SQL Server tempdb data file size
   */
readonly dataFileSize?: number;

/**
   * SQL Server tempdb data file autoGrowth size
   */
readonly dataGrowth?: number;

/**
   * SQL Server default file path
   */
readonly defaultFilePath?: string;

/**
   * SQL Server tempdb log file size
   */
readonly logFileSize?: number;

/**
   * SQL Server tempdb log file autoGrowth size
   */
readonly logGrowth?: number;

/**
   * Logical Unit Numbers for the disks.
   */
readonly luns?: number[];

/**
   * SQL Server tempdb persist folder choice
   */
readonly persistFolder?: bool;

/**
   * SQL Server tempdb persist folder location
   */
readonly persistFolderPath?: string;

/**
   * Cluster bootstrap account password.
   */
readonly clusterBootstrapAccountPassword?: string;

/**
   * Cluster operator account password.
   */
readonly clusterOperatorAccountPassword?: string;

/**
   * SQL service account password.
   */
readonly sqlServiceAccountPassword?: string;
}

/**
 * SqlvirtualmachineSqlvirtualmachines resource
 */
export class SqlvirtualmachineSqlvirtualmachines extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlvirtualmachineSqlvirtualmachinesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SqlVirtualMachine/sqlVirtualMachines@2022-08-01-preview";
  }

  protected getResourceBody(props: SqlvirtualmachineSqlvirtualmachinesProps): string {
    return JSON.stringify(
        {properties: {assessmentSettings: {enable: "${bool}", runImmediately: "${bool}", schedule: {dayOfWeek: "string", enable: "${bool}", monthlyOccurrence: "${int}", startTime: "string", weeklyInterval: "${int}"}}, autoBackupSettings: {backupScheduleType: "string", backupSystemDbs: "${bool}", daysOfWeek: ["string"], enable: "${bool}", enableEncryption: "${bool}", fullBackupFrequency: "string", fullBackupStartTime: "${int}", fullBackupWindowHours: "${int}", logBackupFrequency: "${int}", password: "string", retentionPeriod: "${int}", storageAccessKey: "string", storageAccountUrl: "string", storageContainerName: "string"}, autoPatchingSettings: {dayOfWeek: "string", enable: "${bool}", maintenanceWindowDuration: "${int}", maintenanceWindowStartingHour: "${int}"}, enableAutomaticUpgrade: "${bool}", keyVaultCredentialSettings: {azureKeyVaultUrl: "string", credentialName: "string", enable: "${bool}", servicePrincipalName: "string", servicePrincipalSecret: "string"}, leastPrivilegeMode: "string", serverConfigurationsManagementSettings: {additionalFeaturesServerConfigurations: {isRServicesEnabled: "${bool}"}, azureAdAuthenticationSettings: {clientId: "string"}, sqlConnectivityUpdateSettings: {connectivityType: "string", port: "${int}", sqlAuthUpdatePassword: "string", sqlAuthUpdateUserName: "string"}, sqlInstanceSettings: {collation: "string", isIfiEnabled: "${bool}", isLpimEnabled: "${bool}", isOptimizeForAdHocWorkloadsEnabled: "${bool}", maxDop: "${int}", maxServerMemoryMB: "${int}", minServerMemoryMB: "${int}"}, sqlStorageUpdateSettings: {diskConfigurationType: "string", diskCount: "${int}", startingDeviceId: "${int}"}, sqlWorkloadTypeUpdateSettings: {sqlWorkloadType: "string"}}, sqlImageOffer: "string", sqlImageSku: "string", sqlManagement: "string", sqlServerLicenseType: "string", sqlVirtualMachineGroupResourceId: "string", storageConfigurationSettings: {diskConfigurationType: "string", sqlDataSettings: {defaultFilePath: "string", luns: ["${int}"]}, sqlLogSettings: {defaultFilePath: "string", luns: ["${int}"]}, sqlSystemDbOnDataDisk: "${bool}", sqlTempDbSettings: {dataFileCount: "${int}", dataFileSize: "${int}", dataGrowth: "${int}", defaultFilePath: "string", logFileSize: "${int}", logGrowth: "${int}", luns: ["${int}"], persistFolder: "${bool}", persistFolderPath: "string"}, storageWorkloadType: "string"}, virtualMachineResourceId: "string", wsfcDomainCredentials: {clusterBootstrapAccountPassword: "string", clusterOperatorAccountPassword: "string", sqlServiceAccountPassword: "string"}, wsfcStaticIp: "string"}}
    );
  }
}
