import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformysqlFlexibleserversProps extends IAzAPIBaseProps {
/**
   * The SKU (pricing tier) of the server.
   */
readonly sku?: MySQLServerSku;

/**
   * The cmk identity for the server.
   */
readonly identity?: MySQLServerIdentity;

/**
   * Type of managed service identity.
   */
readonly type?: 'UserAssigned';

/**
   * Metadata of user assigned identity.
   */
readonly userAssignedIdentities?: MySQLServerIdentityUserAssignedIdentities;

/**
   * 
   */
readonly {customized property}?: For Bicep, you can use theany()function.;

/**
   * The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation).
   */
readonly administratorLogin?: string;

/**
   * The password of the administrator login (required for server creation).
   */
readonly administratorLoginPassword?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;

/**
   * availability Zone information of the server.
   */
readonly availabilityZone?: string;

/**
   * Backup related properties of a server.
   */
readonly backup?: Backup;

/**
   * The mode to create a new MySQL server.
   */
readonly createMode?: 'Default''GeoRestore''PonumberInTimeRestore''Replica';

/**
   * The Data Encryption for CMK.
   */
readonly dataEncryption?: DataEncryption;

/**
   * High availability related properties of a server.
   */
readonly highAvailability?: HighAvailability;

/**
   * Source properties for import from storage.
   */
readonly importSourceProperties?: ImportSourceProperties;

/**
   * Maintenance window of a server.
   */
readonly maintenanceWindow?: ManumberenanceWindow;

/**
   * Network related properties of a server.
   */
readonly network?: Network;

/**
   * The replication role.
   */
readonly replicationRole?: 'None''Replica''Source';

/**
   * Restore point creation time (ISO8601 format), specifying the time to restore from.
   */
readonly restorePointInTime?: string;

/**
   * The source MySQL server id.
   */
readonly sourceServerResourceId?: string;

/**
   * Storage related properties of a server.
   */
readonly storage?: Storage;

/**
   * Server version.
   */
readonly version?: '5.7''8.0.21';

/**
   * Backup retention days for the server.
   */
readonly backupRetentionDays?: number;

/**
   * Whether or not geo redundant backup is enabled.
   */
readonly geoRedundantBackup?: 'Disabled''Enabled';

/**
   * Geo backup key uri as key vault can't cross region, need cmk in same region as geo backup
   */
readonly geoBackupKeyURI?: string;

/**
   * Geo backup user identity resource id as identity can't cross region, need identity in same region as geo backup
   */
readonly geoBackupUserAssignedIdentityId?: string;

/**
   * Primary key uri
   */
readonly primaryKeyURI?: string;

/**
   * Primary user identity resource id
   */
readonly primaryUserAssignedIdentityId?: string;

/**
   * The key type, AzureKeyVault for enable cmk, SystemManaged for disable cmk.
   */
readonly type?: 'AzureKeyVault''SystemManaged';

/**
   * High availability mode for a server.
   */
readonly mode?: 'Disabled''SameZone''ZoneRedundant';

/**
   * Availability zone of the standby server.
   */
readonly standbyAvailabilityZone?: string;

/**
   * Relative path of data directory in storage.
   */
readonly dataDirPath?: string;

/**
   * Sas token for accessing source storage. Read and list permissions are required for sas token.
   */
readonly sasToken?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;

/**
   * Storage type of import source.
   */
readonly storageType?: 'AzureBlob';

/**
   * Uri of the import source storage.
   */
readonly storageUrl?: string;

/**
   * indicates whether custom window is enabled or disabled
   */
readonly customWindow?: string;

/**
   * day of week for maintenance window
   */
readonly dayOfWeek?: number;

/**
   * start hour for maintenance window
   */
readonly startHour?: number;

/**
   * start minute for maintenance window
   */
readonly startMinute?: number;

/**
   * Delegated subnet resource id used to setup vnet for a server.
   */
readonly delegatedSubnetResourceId?: string;

/**
   * Private DNS zone resource id.
   */
readonly privateDnsZoneResourceId?: string;

/**
   * Whether or not public network access is allowed for this server. Value is 'Disabled' when server has VNet integration.
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * Enable Storage Auto Grow or not.
   */
readonly autoGrow?: 'Disabled''Enabled';

/**
   * Enable IO Auto Scaling or not.
   */
readonly autoIoScaling?: 'Disabled''Enabled';

/**
   * Storage IOPS for a server.
   */
readonly iops?: number;

/**
   * Enable Log On Disk or not.
   */
readonly logOnDisk?: 'Disabled''Enabled';

/**
   * Max storage size allowed for a server.
   */
readonly storageSizeGB?: number;

/**
   * The tier of the particular SKU, e.g. GeneralPurpose.
   */
readonly tier: 'Burstable''GeneralPurpose''MemoryOptimized';
}

/**
 * DbformysqlFlexibleservers resource
 */
export class DbformysqlFlexibleservers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbformysqlFlexibleserversProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforMySQL/flexibleServers@2023-10-01-preview";
  }

  protected getResourceBody(props: DbformysqlFlexibleserversProps): string {
    return JSON.stringify(
        {properties: {administratorLogin: "string", administratorLoginPassword: "string", availabilityZone: "string", backup: {backupRetentionDays: "${int}", geoRedundantBackup: "string"}, createMode: "string", dataEncryption: {geoBackupKeyURI: "string", geoBackupUserAssignedIdentityId: "string", primaryKeyURI: "string", primaryUserAssignedIdentityId: "string", type: "string"}, highAvailability: {mode: "string", standbyAvailabilityZone: "string"}, importSourceProperties: {dataDirPath: "string", sasToken: "string", storageType: "AzureBlob", storageUrl: "string"}, maintenanceWindow: {customWindow: "string", dayOfWeek: "${int}", startHour: "${int}", startMinute: "${int}"}, network: {delegatedSubnetResourceId: "string", privateDnsZoneResourceId: "string", publicNetworkAccess: "string"}, replicationRole: "string", restorePointInTime: "string", sourceServerResourceId: "string", storage: {autoGrow: "string", autoIoScaling: "string", iops: "${int}", logOnDisk: "string", storageSizeGB: "${int}"}, version: "string"}, sku: {name: "string", tier: "string"}}
    );
  }
}
