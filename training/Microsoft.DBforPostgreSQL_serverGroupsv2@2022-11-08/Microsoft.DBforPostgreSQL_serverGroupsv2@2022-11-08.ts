import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface DbforpostgresqlServergroupsv2Props extends IAzAPIBaseProps {

}

export class DbforpostgresqlServergroupsv2 extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbforpostgresqlServergroupsv2Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforPostgreSQL/serverGroupsv2@2022-11-08";
  }

  protected getResourceBody(props: DbforpostgresqlServergroupsv2Props): string {
    return JSON.stringify(
      {properties: {administratorLoginPassword: "string", citusVersion: "string", coordinatorEnablePublicIpAccess: "${bool}", coordinatorServerEdition: "string", coordinatorStorageQuotaInMb: int, coordinatorVCores: int, enableHa: "${bool}", enableShardsOnCoordinator: "${bool}", maintenanceWindow: {customWindow: "string", dayOfWeek: int, startHour: int, startMinute: int}, nodeCount: int, nodeEnablePublicIpAccess: "${bool}", nodeServerEdition: "string", nodeStorageQuotaInMb: int, nodeVCores: int, pointInTimeUTC: "string", postgresqlVersion: "string", preferredPrimaryZone: "string", sourceLocation: "string", sourceResourceId: "string"}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required) |
// | location | The geo-location where the resource lives | string (required) |
// | tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
// | properties | Properties of the cluster. | ClusterProperties |

// | Name | Description | Value |
// |-|-|-|
// | administratorLoginPassword | The password of the administrator login. Required for creation. | string |
// | citusVersion | The Citus extension version on all cluster servers. | string |
// | coordinatorEnablePublicIpAccess | If public access is enabled on coordinator. | bool |
// | coordinatorServerEdition | The edition of a coordinator server (default: GeneralPurpose). Required for creation. | string |
// | coordinatorStorageQuotaInMb | The storage of a server in MB. Required for creation. See /azure/cosmos-db/postgresql/resources-compute for more information. | int |
// | coordinatorVCores | The vCores count of a server (max: 96). Required for creation. See /azure/cosmos-db/postgresql/resources-compute for more information. | int |
// | enableHa | If high availability (HA) is enabled or not for the cluster. | bool |
// | enableShardsOnCoordinator | If shards on coordinator is enabled or not for the cluster. | bool |
// | maintenanceWindow | Maintenance window of a cluster. | MaintenanceWindow |
// | nodeCount | Worker node count of the cluster. When node count is 0, it represents a single node configuration with the ability to create distributed tables on that node. 2 or more worker nodes represent multi-node configuration. Node count value cannot be 1. Required for creation. | int |
// | nodeEnablePublicIpAccess | If public access is enabled on worker nodes. | bool |
// | nodeServerEdition | The edition of a node server (default: MemoryOptimized). | string |
// | nodeStorageQuotaInMb | The storage in MB on each worker node. See /azure/cosmos-db/postgresql/resources-compute for more information. | int |
// | nodeVCores | The compute in vCores on each worker node (max: 104). See /azure/cosmos-db/postgresql/resources-compute for more information. | int |
// | pointInTimeUTC | Date and time in UTC (ISO8601 format) for cluster restore. | string |
// | postgresqlVersion | The major PostgreSQL version on all cluster servers. | string |
// | preferredPrimaryZone | Preferred primary availability zone (AZ) for all cluster servers. | string |
// | sourceLocation | The Azure region of source cluster for read replica clusters. | string |
// | sourceResourceId | The resource id of source cluster for read replica clusters. | string |

// | Name | Description | Value |
// |-|-|-|
// | customWindow | Indicates whether custom maintenance window is enabled or not. | string |
// | dayOfWeek | Preferred day of the week for maintenance window. | int |
// | startHour | Start hour within preferred day of the week for maintenance window. | int |
// | startMinute | Start minute within the start hour for maintenance window. | int |
