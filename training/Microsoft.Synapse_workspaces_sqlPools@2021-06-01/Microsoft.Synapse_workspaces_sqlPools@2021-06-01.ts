import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface SynapseWorkspacesSqlpoolsProps extends IAzAPIBaseProps {

}

export class SynapseWorkspacesSqlpools extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesSqlpoolsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/sqlPools@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesSqlpoolsProps): string {
    return JSON.stringify(
      {properties: {collation: "string", createMode: "string", maxSizeBytes: int, provisioningState: "string", recoverableDatabaseId: "string", restorePointInTime: "string", sourceDatabaseDeletionDate: "string", sourceDatabaseId: "string", storageAccountType: "string"}, sku: {capacity: int, name: "string", tier: "string"}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-60Valid characters:Can't contain<>*%&:\/?@-or control characters.Can't end with.or space.Can't containreserved word. |
// | location | The geo-location where the resource lives | string (required) |
// | tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
// | sku | SQL pool SKU | Sku |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
// | properties | SQL pool properties | SqlPoolResourceProperties |

// | Name | Description | Value |
// |-|-|-|
// | collation | Collation mode | string |
// | createMode | Specifies the mode of sql pool creation.Default: regular sql pool creation.PointInTimeRestore: Creates a sql pool by restoring a point in time backup of an existing sql pool. sourceDatabaseId must be specified as the resource ID of the existing sql pool, and restorePointInTime must be specified.Recovery: Creates a sql pool by a geo-replicated backup. sourceDatabaseId  must be specified as the recoverableDatabaseId to restore.Restore: Creates a sql pool by restoring a backup of a deleted sql  pool. SourceDatabaseId should be the sql pool's original resource ID. SourceDatabaseId and sourceDatabaseDeletionDate must be specified. | 'Default''PointInTimeRestore''Recovery''Restore' |
// | maxSizeBytes | Maximum size in bytes | int |
// | provisioningState | Resource state | string |
// | recoverableDatabaseId | Backup database to restore from | string |
// | restorePointInTime | Snapshot time to restore | string |
// | sourceDatabaseDeletionDate | Specifies the time that the sql pool was deleted | string |
// | sourceDatabaseId | Source database to create from | string |
// | storageAccountType | The storage account type used to store backups for this sql pool. | 'GRS''LRS' |

// | Name | Description | Value |
// |-|-|-|
// | capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
// | name | The SKU name | string |
// | tier | The service tier | string |
