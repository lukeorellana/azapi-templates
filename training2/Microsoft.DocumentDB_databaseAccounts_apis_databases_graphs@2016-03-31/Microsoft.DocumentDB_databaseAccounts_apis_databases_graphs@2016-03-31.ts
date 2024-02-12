import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsApisDatabasesGraphsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:databases;

/**
   * A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
   */
readonly options: object;

/**
   * The standard JSON format of a Gremlin graph
   */
readonly resource: GremlinGraphResource;

/**
   * The conflict resolution policy for the graph.
   */
readonly conflictResolutionPolicy?: ConflictResolutionPolicy;

/**
   * Default time to live
   */
readonly defaultTtl?: number;

/**
   * Name of the Cosmos DB Gremlin graph
   */
readonly id: string;

/**
   * The configuration of the indexing policy. By default, the indexing is automatic for all document paths within the graph
   */
readonly indexingPolicy?: IndexingPolicy;

/**
   * The configuration of the partition key to be used for partitioning data into multiple partitions
   */
readonly partitionKey?: ContainerPartitionKey;

/**
   * The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service.
   */
readonly uniqueKeyPolicy?: UniqueKeyPolicy;

/**
   * The conflict resolution path in the case of LastWriterWins mode.
   */
readonly conflictResolutionPath?: string;

/**
   * The procedure to resolve conflicts in the case of custom mode.
   */
readonly conflictResolutionProcedure?: string;

/**
   * Indicates the conflict resolution mode.
   */
readonly mode?: 'Custom''LastWriterWins';

/**
   * Indicates if the indexing policy is automatic
   */
readonly automatic?: bool;

/**
   * List of paths to exclude from indexing
   */
readonly excludedPaths?: ExcludedPath[];

/**
   * List of paths to include in the indexing
   */
readonly includedPaths?: IncludedPath[];

/**
   * Indicates the indexing mode.
   */
readonly indexingMode?: 'Consistent''Lazy''None';

/**
   * The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*)
   */
readonly path?: string;

/**
   * List of indexes for this path
   */
readonly indexes?: Indexes[];

/**
   * The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*)
   */
readonly path?: string;

/**
   * The datatype for which the indexing behavior is applied to.
   */
readonly dataType?: 'LineString''MultiPolygon''Number''Ponumber''Polygon''String';

/**
   * Indicates the type of index.
   */
readonly kind?: 'Hash''Range''Spatial';

/**
   * The precision of the index. -1 is maximum precision.
   */
readonly precision?: number;

/**
   * Indicates the kind of algorithm used for partitioning
   */
readonly kind?: 'Hash''Range';

/**
   * List of paths using which data within the container can be partitioned
   */
readonly paths?: string[];

/**
   * List of unique keys on that enforces uniqueness constraint on documents in the collection in the Azure Cosmos DB service.
   */
readonly uniqueKeys?: UniqueKey[];

/**
   * List of paths must be unique for each document in the Azure Cosmos DB service
   */
readonly paths?: string[];
}

/**
 * DocumentdbDatabaseaccountsApisDatabasesGraphs resource
 */
export class DocumentdbDatabaseaccountsApisDatabasesGraphs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsApisDatabasesGraphsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs@2016-03-31";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsApisDatabasesGraphsProps): string {
    return JSON.stringify(
        {properties: {options: {}, resource: {conflictResolutionPolicy: {conflictResolutionPath: "string", conflictResolutionProcedure: "string", mode: "string"}, defaultTtl: "${int}", id: "string", indexingPolicy: {automatic: "${bool}", excludedPaths: [{path: "string"}], includedPaths: [{indexes: [{dataType: "string", kind: "string", precision: "${int}"}], path: "string"}], indexingMode: "string"}, partitionKey: {kind: "string", paths: ["string"]}, uniqueKeyPolicy: {uniqueKeys: [{paths: ["string"]}]}}}}
    );
  }
}
