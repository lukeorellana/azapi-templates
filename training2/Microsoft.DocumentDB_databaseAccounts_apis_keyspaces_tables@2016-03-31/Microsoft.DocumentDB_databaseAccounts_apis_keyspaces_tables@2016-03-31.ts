import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsApisKeyspacesTablesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:keyspaces;

/**
   * A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
   */
readonly options: object;

/**
   * The standard JSON format of a Cassandra table
   */
readonly resource: CassandraTableResource;

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
 * DocumentdbDatabaseaccountsApisKeyspacesTables resource
 */
export class DocumentdbDatabaseaccountsApisKeyspacesTables extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsApisKeyspacesTablesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables@2016-03-31";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsApisKeyspacesTablesProps): string {
    return JSON.stringify(
        {properties: {options: {}, resource: {defaultTtl: "${int}", id: "string", schema: {clusterKeys: [{name: "string", orderBy: "string"}], columns: [{name: "string", type: "string"}], partitionKeys: [{name: "string"}]}}}}
    );
  }
}
