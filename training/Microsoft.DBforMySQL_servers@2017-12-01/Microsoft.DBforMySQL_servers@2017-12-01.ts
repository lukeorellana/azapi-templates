import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface Props extends IAzAPIBaseProps {

}

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

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required)Character limit: 3-63Valid characters:Lowercase letters, hyphens and numbers.Can't start or end with hyphen.Resource name must be unique across Azure. |
// | location | The location the resource resides in. | string (required) |
// | tags | Application-specific metadata in the form of key-value pairs. | Dictionary of tag names and values. SeeTags in templates |
// | sku | The SKU (pricing tier) of the server. | Sku |
// | identity | The Azure Active Directory identity of the server. | ResourceIdentity |
// | properties | Properties of the server. | ServerPropertiesForCreateOrServerProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | type | The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource. | 'SystemAssigned' |

// | Name | Description | Value |
// |-|-|-|
// | infrastructureEncryption | Status showing whether the server enabled infrastructure encryption. | 'Disabled''Enabled' |
// | minimalTlsVersion | Enforce a minimal Tls version for the server. | 'TLS1_0''TLS1_1''TLS1_2''TLSEnforcementDisabled' |
// | publicNetworkAccess | Whether or not public network access is allowed for this server. Value is optional but if passed in, must be 'Enabled' or 'Disabled' | 'Disabled''Enabled' |
// | sslEnforcement | Enable ssl enforcement or not when connect to server. | 'Disabled''Enabled' |
// | storageProfile | Storage profile of a server. | StorageProfile |
// | version | Server version. | '5.6''5.7''8.0' |
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
// | administratorLogin | The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation). The login name is required when updating password. | string (required) |
// | administratorLoginPassword | The password of the administrator login. | string (required)Constraints:Sensitive value. Pass in as a secure parameter. |

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
// | capacity | The scale up/out capacity, representing server's compute units. | intConstraints:Min value = 0 |
// | family | The family of hardware. | string |
// | name | The name of the sku, typically, tier + family + cores, e.g. B_Gen4_1, GP_Gen5_8. | string (required) |
// | size | The size code, to be interpreted by resource as appropriate. | string |
// | tier | The tier of the particular SKU, e.g. Basic. | 'Basic''GeneralPurpose''MemoryOptimized' |
