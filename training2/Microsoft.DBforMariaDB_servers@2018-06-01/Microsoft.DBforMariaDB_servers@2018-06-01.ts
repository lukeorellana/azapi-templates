import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformariadbServersProps extends IAzAPIBaseProps {
/**
   * The SKU (pricing tier) of the server.
   */
readonly sku?: Sku;

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
readonly version?: '10.2''10.3';

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
 * DbformariadbServers resource
 */
export class DbformariadbServers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbformariadbServersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforMariaDB/servers@2018-06-01";
  }

  protected getResourceBody(props: DbformariadbServersProps): string {
    return JSON.stringify(
        {properties: {minimalTlsVersion: "string", publicNetworkAccess: "string", sslEnforcement: "string", storageProfile: {backupRetentionDays: "${int}", geoRedundantBackup: "string", storageAutogrow: "string", storageMB: "${int}"}, version: "string", createMode: "string"}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}}
    );
  }
}
