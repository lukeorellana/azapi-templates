import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlServersProps extends IAzAPIBaseProps {
/**
   * The SKU (pricing tier) of the server.
   */
readonly sku?: Sku;

/**
   * The Azure Active Directory identity of the server.
   */
readonly identity?: ResourceIdentity;

/**
   * The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.
   */
readonly type?: 'SystemAssigned';

/**
   * Status showing whether the server enabled infrastructure encryption.
   */
readonly infrastructureEncryption?: 'Disabled''Enabled';

/**
   * Enforce a minimal Tls version for the server.
   */
readonly minimalTlsVersion?: 'TLS1_0''TLS1_1''TLS1_2''TLSEnforcementDisabled';

/**
   * Whether or not public network access is allowed for this server. Value is optional but if passed in, must be 'Enabled' or 'Disabled'
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * Enable ssl enforcement or not when connect to server.
   */
readonly sslEnforcement?: 'Disabled''Enabled';

/**
   * Storage profile of a server.
   */
readonly storageProfile?: StorageProfile;

/**
   * Server version.
   */
readonly version?: '10''10.0''10.2''11''9.5''9.6';

/**
   * Set the object type
   */
readonly createMode: DefaultGeoRestorePonumberInTimeRestoreReplica;

/**
   * Backup retention days for the server.
   */
readonly backupRetentionDays?: number;

/**
   * Enable Geo-redundant or not for server backup.
   */
readonly geoRedundantBackup?: 'Disabled''Enabled';

/**
   * Enable Storage Auto Grow.
   */
readonly storageAutogrow?: 'Disabled''Enabled';

/**
   * Max storage allowed for a server.
   */
readonly storageMB?: number;

/**
   * The mode to create a new server.
   */
readonly createMode: 'Default';

/**
   * The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation).
   */
readonly administratorLogin: string;

/**
   * The password of the administrator login.
   */
readonly administratorLoginPassword: string;

/**
   * The mode to create a new server.
   */
readonly createMode: 'GeoRestore';

/**
   * The source server id to restore from.
   */
readonly sourceServerId: string;

/**
   * The mode to create a new server.
   */
readonly createMode: 'PonumberInTimeRestore';

/**
   * Restore point creation time (ISO8601 format), specifying the time to restore from.
   */
readonly restorePointInTime: string;

/**
   * The source server id to restore from.
   */
readonly sourceServerId: string;

/**
   * The mode to create a new server.
   */
readonly createMode: 'Replica';

/**
   * The primary server id to create replica from.
   */
readonly sourceServerId: string;

/**
   * The scale up/out capacity, representing server's compute units.
   */
readonly capacity?: number;

/**
   * The family of hardware.
   */
readonly family?: string;

/**
   * The size code, to be interpreted by resource as appropriate.
   */
readonly size?: string;

/**
   * The tier of the particular SKU, e.g. Basic.
   */
readonly tier?: 'Basic''GeneralPurpose''MemoryOptimized';
}

/**
 * DbforpostgresqlServers resource
 */
export class DbforpostgresqlServers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbforpostgresqlServersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforPostgreSQL/servers@2017-12-01";
  }

  protected getResourceBody(props: DbforpostgresqlServersProps): string {
    return JSON.stringify(
        {properties: {infrastructureEncryption: "string", minimalTlsVersion: "string", publicNetworkAccess: "string", sslEnforcement: "string", storageProfile: {backupRetentionDays: "${int}", geoRedundantBackup: "string", storageAutogrow: "string", storageMB: "${int}"}, version: "string", createMode: "string"}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}}
    );
  }
}
