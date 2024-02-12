import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface DbformariadbServersProps extends IAzAPIBaseProps {

}

export class DbformariadbServers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbformariadbServersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforMariaDB/servers@2018-06-01";
  }

  protected getResourceBody(props: DbformariadbServersProps): string {
    return JSON.stringify(
      {properties: {minimalTlsVersion: "string", publicNetworkAccess: "string", sslEnforcement: "string", storageProfile: {backupRetentionDays: int, geoRedundantBackup: "string", storageAutogrow: "string", storageMB: int}, version: "string", createMode: "string"}, sku: {capacity: int, family: "string", name: "string", size: "string", tier: "string"}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required)Character limit: 3-63Valid characters:Lowercase letters, hyphens and numbers.Can't start or end with hyphen.Resource name must be unique across Azure. |
// | location | The location the resource resides in. | string (required) |
// | tags | Application-specific metadata in the form of key-value pairs. | Dictionary of tag names and values. SeeTags in templates |
// | sku | The SKU (pricing tier) of the server. | Sku |
// | properties | Properties of the server. | ServerPropertiesForCreateOrServerProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | minimalTlsVersion | Enforce a minimal Tls version for the server. | 'TLS1_0''TLS1_1''TLS1_2''TLSEnforcementDisabled' |
// | publicNetworkAccess | Whether or not public network access is allowed for this server. Value is optional but if passed in, must be 'Enabled' or 'Disabled' | 'Disabled''Enabled' |
// | sslEnforcement | Enable ssl enforcement or not when connect to server. | 'Disabled''Enabled' |
// | storageProfile | Storage profile of a server. | StorageProfile |
// | version | Server version. | '10.2''10.3' |
// | createMode | Set the object type | DefaultGeoRestorePointInTimeRestoreReplica(required) |

// | Name | Description | Value |
// |-|-|-|
// | backupRetentionDays | Backup retention days for the server. | int |
// | geoRedundantBackup | Enable Geo-redundant or not for server backup. | 'Disabled''Enabled' |
// | storageAutogrow | Enable Storage Auto Grow. | 'Disabled''Enabled' |
// | storageMB | Max storage allowed for a server. | int |

// | Name | Description | Value |
// |-|-|-|
// | createMode | The mode to create a new server. | 'Default' (required) |
// | administratorLogin | The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation). | string (required) |
// | administratorLoginPassword | The password of the administrator login. | string (required) |

// | Name | Description | Value |
// |-|-|-|
// | createMode | The mode to create a new server. | 'GeoRestore' (required) |
// | sourceServerId | The source server id to restore from. | string (required) |

// | Name | Description | Value |
// |-|-|-|
// | createMode | The mode to create a new server. | 'PointInTimeRestore' (required) |
// | restorePointInTime | Restore point creation time (ISO8601 format), specifying the time to restore from. | string (required) |
// | sourceServerId | The source server id to restore from. | string (required) |

// | Name | Description | Value |
// |-|-|-|
// | createMode | The mode to create a new server. | 'Replica' (required) |
// | sourceServerId | The primary server id to create replica from. | string (required) |

// | Name | Description | Value |
// |-|-|-|
// | capacity | The scale up/out capacity, representing server's compute units. | int |
// | family | The family of hardware. | string |
// | name | The name of the sku, typically, tier + family + cores, e.g. B_Gen4_1, GP_Gen5_8. | string (required) |
// | size | The size code, to be interpreted by resource as appropriate. | string |
// | tier | The tier of the particular SKU, e.g. Basic. | 'Basic''GeneralPurpose''MemoryOptimized' |
