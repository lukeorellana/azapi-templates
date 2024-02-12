import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbMongoclustersProps extends IAzAPIBaseProps {
/**
   * The administrator's login for the mongo cluster.
   */
readonly administratorLogin?: string;

/**
   * The password of the administrator login.
   */
readonly administratorLoginPassword?: string;

/**
   * The mode to create a mongo cluster.
   */
readonly createMode?: 'Default''PonumberInTimeRestore''Restore';

/**
   * The list of node group specs in the cluster.
   */
readonly nodeGroupSpecs?: NodeGroupSpec[];

/**
   * Parameters used for restore operations
   */
readonly restoreParameters?: MongoClusterRestoreParameters;

/**
   * The Mongo DB server version. Defaults to the latest available version if not specified.
   */
readonly serverVersion?: string;

/**
   * The disk storage size for the node group in GB. Example values: 128, 256, 512, 1024.
   */
readonly diskSizeGB?: number;

/**
   * Whether high availability is enabled on the node group.
   */
readonly enableHa?: bool;

/**
   * The node type deployed in the node group.
   */
readonly kind?: 'Shard';

/**
   * The number of nodes in the node group.
   */
readonly nodeCount?: number;

/**
   * The resource sku for the node group. This defines the size of CPU and memory that is provisioned for each node. Example values: 'M30', 'M40'.
   */
readonly sku?: string;

/**
   * UTC point in time to restore a mongo cluster
   */
readonly pointInTimeUTC?: string;

/**
   * Resource ID to locate the source cluster to restore
   */
readonly sourceResourceId?: string;
}

/**
 * DocumentdbMongoclusters resource
 */
export class DocumentdbMongoclusters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbMongoclustersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/mongoClusters@2023-03-01-preview";
  }

  protected getResourceBody(props: DocumentdbMongoclustersProps): string {
    return JSON.stringify(
        {properties: {administratorLogin: "string", administratorLoginPassword: "string", createMode: "string", nodeGroupSpecs: [{diskSizeGB: "${int}", enableHa: "${bool}", kind: "Shard", nodeCount: "${int}", sku: "string"}], restoreParameters: {pointInTimeUTC: "string", sourceResourceId: "string"}, serverVersion: "string"}}
    );
  }
}
