import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlFlexibleserversProps extends IAzAPIBaseProps {
/**
   * The SKU (pricing tier) of the server.
   */
readonly sku?: Sku;

/**
   * Describes the identity of the application.
   */
readonly identity?: UserAssignedIdentity;

/**
   * the types of identities associated with this resource; currently restricted to 'None and UserAssigned'
   */
readonly type: 'None''UserAssigned';

/**
   * represents user assigned identities map.
   */
readonly userAssignedIdentities?: object;

/**
   * The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation).
   */
readonly administratorLogin?: string;

/**
   * The administrator login password (required for server creation).
   */
readonly administratorLoginPassword?: string;

/**
   * AuthConfig properties of a server.
   */
readonly authConfig?: AuthConfig;

/**
   * availability zone information of the server.
   */
readonly availabilityZone?: string;

/**
   * Backup properties of a server.
   */
readonly backup?: Backup;

/**
   * The mode to create a new PostgreSQL server.
   */
readonly createMode?: 'Create''Default''GeoRestore''PonumberInTimeRestore''Replica''ReviveDropped''Update';

/**
   * Data encryption properties of a server.
   */
readonly dataEncryption?: DataEncryption;

/**
   * High availability properties of a server.
   */
readonly highAvailability?: HighAvailability;

/**
   * Maintenance window properties of a server.
   */
readonly maintenanceWindow?: ManumberenanceWindow;

/**
   * Network properties of a server. This Network property is required to be passed only in case you want the server to be Private access server.
   */
readonly network?: Network;

/**
   * Restore point creation time (ISO8601 format), specifying the time to restore from. It's required when 'createMode' is 'PointInTimeRestore' or 'GeoRestore' or 'ReviveDropped'.
   */
readonly pointInTimeUTC?: string;

/**
   * Replication role of the server
   */
readonly replicationRole?: 'AsyncReplica''GeoAsyncReplica''None''Primary';

/**
   * The source server resource ID to restore from. It's required when 'createMode' is 'PointInTimeRestore' or 'GeoRestore' or 'Replica' or 'ReviveDropped'. This property is returned only for Replica server
   */
readonly sourceServerResourceId?: string;

/**
   * Storage properties of a server.
   */
readonly storage?: Storage;

/**
   * PostgreSQL Server version.
   */
readonly version?: '11''12''13''14''15';

/**
   * If Enabled, Azure Active Directory authentication is enabled.
   */
readonly activeDirectoryAuth?: 'Disabled''Enabled';

/**
   * If Enabled, Password authentication is enabled.
   */
readonly passwordAuth?: 'Disabled''Enabled';

/**
   * Tenant id of the server.
   */
readonly tenantId?: string;

/**
   * Backup retention days for the server.
   */
readonly backupRetentionDays?: number;

/**
   * A value indicating whether Geo-Redundant backup is enabled on the server.
   */
readonly geoRedundantBackup?: 'Disabled''Enabled';

/**
   * URI for the key in keyvault for data encryption for geo-backup of server.
   */
readonly geoBackupKeyURI?: string;

/**
   * Resource Id for the User assigned identity to be used for data encryption for geo-backup of server.
   */
readonly geoBackupUserAssignedIdentityId?: string;

/**
   * URI for the key in keyvault for data encryption of the primary server.
   */
readonly primaryKeyURI?: string;

/**
   * Resource Id for the User assigned identity to be used for data encryption of the primary server.
   */
readonly primaryUserAssignedIdentityId?: string;

/**
   * Data encryption type to depict if it is System Managed vs Azure Key vault.
   */
readonly type?: 'AzureKeyVault''SystemManaged';

/**
   * The HA mode for the server.
   */
readonly mode?: 'Disabled''SameZone''ZoneRedundant';

/**
   * availability zone information of the standby.
   */
readonly standbyAvailabilityZone?: string;

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
   * Delegated subnet arm resource id. This is required to be passed during create, in case we want the server to be VNET injected, i.e. Private access server. During update, pass this only if we want to update the value for Private DNS zone.
   */
readonly delegatedSubnetResourceId?: string;

/**
   * Private dns zone arm resource id. This is required to be passed during create, in case we want the server to be VNET injected, i.e. Private access server. During update, pass this only if we want to update the value for Private DNS zone.
   */
readonly privateDnsZoneArmResourceId?: string;

/**
   * Flag to enable / disable Storage Auto grow for flexible server.
   */
readonly autoGrow?: 'Disabled''Enabled';

/**
   * Max storage allowed for a server.
   */
readonly storageSizeGB?: number;

/**
   * Name of storage tier for IOPS.
   */
readonly tier?: 'P1''P10''P15''P2''P20''P3''P30''P4''P40''P50''P6''P60''P70''P80';

/**
   * The tier of the particular SKU, e.g. Burstable.
   */
readonly tier: 'Burstable''GeneralPurpose''MemoryOptimized';
}

/**
 * DbforpostgresqlFlexibleservers resource
 */
export class DbforpostgresqlFlexibleservers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbforpostgresqlFlexibleserversProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforPostgreSQL/flexibleServers@2023-03-01-preview";
  }

  protected getResourceBody(props: DbforpostgresqlFlexibleserversProps): string {
    return JSON.stringify(
        {properties: {administratorLogin: "string", administratorLoginPassword: "string", authConfig: {activeDirectoryAuth: "string", passwordAuth: "string", tenantId: "string"}, availabilityZone: "string", backup: {backupRetentionDays: "${int}", geoRedundantBackup: "string"}, createMode: "string", dataEncryption: {geoBackupKeyURI: "string", geoBackupUserAssignedIdentityId: "string", primaryKeyURI: "string", primaryUserAssignedIdentityId: "string", type: "string"}, highAvailability: {mode: "string", standbyAvailabilityZone: "string"}, maintenanceWindow: {customWindow: "string", dayOfWeek: "${int}", startHour: "${int}", startMinute: "${int}"}, network: {delegatedSubnetResourceId: "string", privateDnsZoneArmResourceId: "string"}, pointInTimeUTC: "string", replicationRole: "string", sourceServerResourceId: "string", storage: {autoGrow: "string", storageSizeGB: "${int}", tier: "string"}, version: "string"}, sku: {name: "string", tier: "string"}}
    );
  }
}
