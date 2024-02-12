import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsCassandrakeyspacesTablesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:cassandraKeyspaces;

/**
   * A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
   */
readonly options?: CreateUpdateOptionsOrCassandraTableGetPropertiesOpti...;

/**
   * The standard JSON format of a Cassandra table
   */
readonly resource: CassandraTableResourceOrCassandraTableGetPropertiesR...;

/**
   * Specifies the Autoscale settings.
   */
readonly autoscaleSettings?: AutoscaleSettings;

/**
   * Request Units per second. For example, "throughput": 10000.
   */
readonly throughput?: number;

/**
   * Represents maximum throughput, the resource can scale up to.
   */
readonly maxThroughput?: number;

/**
   * Analytical TTL.
   */
readonly analyticalStorageTtl?: number;

/**
   * Time to live of the Cosmos DB Cassandra table
   */
readonly defaultTtl?: number;

/**
   * Name of the Cosmos DB Cassandra table
   */
readonly id: string;

/**
   * Schema of the Cosmos DB Cassandra table
   */
readonly schema?: CassandraSchema;

/**
   * List of cluster key.
   */
readonly clusterKeys?: ClusterKey[];

/**
   * List of Cassandra table columns.
   */
readonly columns?: Column[];

/**
   * List of partition key.
   */
readonly partitionKeys?: CassandraPartitionKey[];

/**
   * Order of the Cosmos DB Cassandra table cluster key, only support "Asc" and "Desc"
   */
readonly orderBy?: string;

/**
   * Type of the Cosmos DB Cassandra table column
   */
readonly type?: string;
}

/**
 * DocumentdbDatabaseaccountsCassandrakeyspacesTables resource
 */
export class DocumentdbDatabaseaccountsCassandrakeyspacesTables extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsCassandrakeyspacesTablesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsCassandrakeyspacesTablesProps): string {
    return JSON.stringify(
        {properties: {options: {autoscaleSettings: {maxThroughput: "${int}"}, throughput: "${int}"}, resource: {analyticalStorageTtl: "${int}", defaultTtl: "${int}", id: "string", schema: {clusterKeys: [{name: "string", orderBy: "string"}], columns: [{name: "string", type: "string"}], partitionKeys: [{name: "string"}]}}}}
    );
  }
}
