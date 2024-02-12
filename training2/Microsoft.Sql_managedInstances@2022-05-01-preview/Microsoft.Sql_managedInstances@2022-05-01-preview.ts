import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesProps extends IAzAPIBaseProps {
/**
   * Managed instance SKU. Allowed values for sku.name: GP_Gen5, GP_G8IM, GP_G8IH, BC_Gen5, BC_G8IM, BC_G8IH
   */
readonly sku?: Sku;

/**
   * The Azure Active Directory identity of the managed instance.
   */
readonly identity?: ResourceIdentity;

/**
   * The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.
   */
readonly type?: 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned';

/**
   * The resource ids of the user assigned identities to use
   */
readonly userAssignedIdentities?: object;

/**
   * Administrator username for the managed instance. Can only be specified when the managed instance is being created (and is required for creation).
   */
readonly administratorLogin?: string;

/**
   * The administrator login password (required for managed instance creation).
   */
readonly administratorLoginPassword?: string;

/**
   * The Azure Active Directory administrator of the instance. This can only be used at instance create time. If used for instance update, it will be ignored or it will result in an error. For updates individual APIs will need to be used.
   */
readonly administrators?: ManagedInstanceExternalAdministrator;

/**
   * Collation of the managed instance.
   */
readonly collation?: string;

/**
   * The resource id of another managed instance whose DNS zone this managed instance will share after creation.
   */
readonly dnsZonePartner?: string;

/**
   * The Id of the instance pool this managed server belongs to.
   */
readonly instancePoolId?: string;

/**
   * A CMK URI of the key to use for encryption.
   */
readonly keyId?: string;

/**
   * The license type. Possible values are 'LicenseIncluded' (regular price inclusive of a new SQL license) and 'BasePrice' (discounted AHB price for bringing your own SQL licenses).
   */
readonly licenseType?: 'BasePrice''LicenseIncluded';

/**
   * Specifies maintenance configuration id to apply to this managed instance.
   */
readonly maintenanceConfigurationId?: string;

/**
   * Specifies the mode of database creation.Default: Regular instance creation.Restore: Creates an instance by restoring a set of backups to specific point in time. RestorePointInTime and SourceManagedInstanceId must be specified.
   */
readonly managedInstanceCreateMode?: 'Default''PonumberInTimeRestore';

/**
   * Minimal TLS version. Allowed values: 'None', '1.0', '1.1', '1.2'
   */
readonly minimalTlsVersion?: string;

/**
   * The resource id of a user assigned identity to be used by default.
   */
readonly primaryUserAssignedIdentityId?: string;

/**
   * Connection type used for connecting to the instance.
   */
readonly proxyOverride?: 'Default''Proxy''Redirect';

/**
   * Whether or not the public data endpoint is enabled.
   */
readonly publicDataEndpointEnabled?: bool;

/**
   * The storage account type to be used to store backups for this instance. The options are Local (LocallyRedundantStorage), Zone (ZoneRedundantStorage), Geo (GeoRedundantStorage) and GeoZone(GeoZoneRedundantStorage)
   */
readonly requestedBackupStorageRedundancy?: 'Geo''GeoZone''Local''Zone';

/**
   * Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
   */
readonly restorePointInTime?: string;

/**
   * The managed instance's service principal.
   */
readonly servicePrincipal?: ServicePrincipal;

/**
   * The resource identifier of the source managed instance associated with create operation of this instance.
   */
readonly sourceManagedInstanceId?: string;

/**
   * Storage size in GB. Minimum value: 32. Maximum value: 16384. Increments of 32 GB allowed only. Maximum value depends on the selected hardware family and number of vCores.
   */
readonly storageSizeInGB?: number;

/**
   * Subnet resource ID for the managed instance.
   */
readonly subnetId?: string;

/**
   * Id of the timezone. Allowed values are timezones supported by Windows.Windows keeps details on supported timezones, including the id, in registry underKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones.You can get those registry values via SQL Server by querying SELECT name AS timezone_id FROM sys.time_zone_info.List of Ids can also be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell.An example of valid timezone id is "Pacific Standard Time" or "W. Europe Standard Time".
   */
readonly timezoneId?: string;

/**
   * The number of vCores. Allowed values: 8, 16, 24, 32, 40, 64, 80.
   */
readonly vCores?: number;

/**
   * Whether or not the multi-az is enabled.
   */
readonly zoneRedundant?: bool;

/**
   * Type of the sever administrator.
   */
readonly administratorType?: 'ActiveDirectory';

/**
   * Azure Active Directory only Authentication enabled.
   */
readonly azureADOnlyAuthentication?: bool;

/**
   * Login name of the server administrator.
   */
readonly login?: string;

/**
   * Principal Type of the sever administrator.
   */
readonly principalType?: 'Application''Group''User';

/**
   * SID (object ID) of the server administrator.
   */
readonly sid?: string;

/**
   * Tenant ID of the administrator.
   */
readonly tenantId?: string;

/**
   * Service principal type.
   */
readonly type?: 'None''SystemAssigned';

/**
   * Capacity of the particular SKU.
   */
readonly capacity?: number;

/**
   * If the service has different generations of hardware, for the same SKU, then that can be captured here.
   */
readonly family?: string;

/**
   * Size of the particular SKU
   */
readonly size?: string;

/**
   * The tier or edition of the particular SKU, e.g. Basic, Premium.
   */
readonly tier?: string;
}

/**
 * SqlManagedinstances resource
 */
export class SqlManagedinstances extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlManagedinstancesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/managedInstances@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlManagedinstancesProps): string {
    return JSON.stringify(
        {properties: {administratorLogin: "string", administratorLoginPassword: "string", administrators: {administratorType: "ActiveDirectory", azureADOnlyAuthentication: "${bool}", login: "string", principalType: "string", sid: "string", tenantId: "string"}, collation: "string", dnsZonePartner: "string", instancePoolId: "string", keyId: "string", licenseType: "string", maintenanceConfigurationId: "string", managedInstanceCreateMode: "string", minimalTlsVersion: "string", primaryUserAssignedIdentityId: "string", proxyOverride: "string", publicDataEndpointEnabled: "${bool}", requestedBackupStorageRedundancy: "string", restorePointInTime: "string", servicePrincipal: {type: "string"}, sourceManagedInstanceId: "string", storageSizeInGB: "${int}", subnetId: "string", timezoneId: "string", vCores: "${int}", zoneRedundant: "${bool}"}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}}
    );
  }
}
