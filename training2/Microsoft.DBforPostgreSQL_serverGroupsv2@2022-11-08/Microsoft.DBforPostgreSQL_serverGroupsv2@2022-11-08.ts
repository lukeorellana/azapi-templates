import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlServergroupsv2Props extends IAzAPIBaseProps {
/**
   * The password of the administrator login. Required for creation.
   */
readonly administratorLoginPassword?: string;

/**
   * The Citus extension version on all cluster servers.
   */
readonly citusVersion?: string;

/**
   * If public access is enabled on coordinator.
   */
readonly coordinatorEnablePublicIpAccess?: bool;

/**
   * The edition of a coordinator server (default: GeneralPurpose). Required for creation.
   */
readonly coordinatorServerEdition?: string;

/**
   * The storage of a server in MB. Required for creation. See /azure/cosmos-db/postgresql/resources-compute for more information.
   */
readonly coordinatorStorageQuotaInMb?: number;

/**
   * The vCores count of a server (max: 96). Required for creation. See /azure/cosmos-db/postgresql/resources-compute for more information.
   */
readonly coordinatorVCores?: number;

/**
   * If high availability (HA) is enabled or not for the cluster.
   */
readonly enableHa?: bool;

/**
   * If shards on coordinator is enabled or not for the cluster.
   */
readonly enableShardsOnCoordinator?: bool;

/**
   * Maintenance window of a cluster.
   */
readonly maintenanceWindow?: ManumberenanceWindow;

/**
   * Worker node count of the cluster. When node count is 0, it represents a single node configuration with the ability to create distributed tables on that node. 2 or more worker nodes represent multi-node configuration. Node count value cannot be 1. Required for creation.
   */
readonly nodeCount?: number;

/**
   * If public access is enabled on worker nodes.
   */
readonly nodeEnablePublicIpAccess?: bool;

/**
   * The edition of a node server (default: MemoryOptimized).
   */
readonly nodeServerEdition?: string;

/**
   * The storage in MB on each worker node. See /azure/cosmos-db/postgresql/resources-compute for more information.
   */
readonly nodeStorageQuotaInMb?: number;

/**
   * The compute in vCores on each worker node (max: 104). See /azure/cosmos-db/postgresql/resources-compute for more information.
   */
readonly nodeVCores?: number;

/**
   * Date and time in UTC (ISO8601 format) for cluster restore.
   */
readonly pointInTimeUTC?: string;

/**
   * The major PostgreSQL version on all cluster servers.
   */
readonly postgresqlVersion?: string;

/**
   * Preferred primary availability zone (AZ) for all cluster servers.
   */
readonly preferredPrimaryZone?: string;

/**
   * The Azure region of source cluster for read replica clusters.
   */
readonly sourceLocation?: string;

/**
   * The resource id of source cluster for read replica clusters.
   */
readonly sourceResourceId?: string;

/**
   * Indicates whether custom maintenance window is enabled or not.
   */
readonly customWindow?: string;

/**
   * Preferred day of the week for maintenance window.
   */
readonly dayOfWeek?: number;

/**
   * Start hour within preferred day of the week for maintenance window.
   */
readonly startHour?: number;

/**
   * Start minute within the start hour for maintenance window.
   */
readonly startMinute?: number;
}

/**
 * DbforpostgresqlServergroupsv2 resource
 */
export class DbforpostgresqlServergroupsv2 extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbforpostgresqlServergroupsv2Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforPostgreSQL/serverGroupsv2@2022-11-08";
  }

  protected getResourceBody(props: DbforpostgresqlServergroupsv2Props): string {
    return JSON.stringify(
        {properties: {administratorLoginPassword: "string", citusVersion: "string", coordinatorEnablePublicIpAccess: "${bool}", coordinatorServerEdition: "string", coordinatorStorageQuotaInMb: "${int}", coordinatorVCores: "${int}", enableHa: "${bool}", enableShardsOnCoordinator: "${bool}", maintenanceWindow: {customWindow: "string", dayOfWeek: "${int}", startHour: "${int}", startMinute: "${int}"}, nodeCount: "${int}", nodeEnablePublicIpAccess: "${bool}", nodeServerEdition: "string", nodeStorageQuotaInMb: "${int}", nodeVCores: "${int}", pointInTimeUTC: "string", postgresqlVersion: "string", preferredPrimaryZone: "string", sourceLocation: "string", sourceResourceId: "string"}}
    );
  }
}
