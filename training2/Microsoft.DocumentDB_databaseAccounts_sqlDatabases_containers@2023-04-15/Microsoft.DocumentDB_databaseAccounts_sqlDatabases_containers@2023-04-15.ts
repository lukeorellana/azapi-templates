import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsSqldatabasesContainersProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:sqlDatabases;

/**
   * A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
   */
readonly options?: CreateUpdateOptionsOrSqlContainerGetPropertiesOption...;

/**
   * The standard JSON format of a container
   */
readonly resource: SqlContainerResourceOrSqlContainerGetPropertiesResou...;

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
   * The client encryption policy for the container.
   */
readonly clientEncryptionPolicy?: ClientEncryptionPolicy;

/**
   * The conflict resolution policy for the container.
   */
readonly conflictResolutionPolicy?: ConflictResolutionPolicy;

/**
   * Default time to live
   */
readonly defaultTtl?: number;

/**
   * Name of the Cosmos DB SQL container
   */
readonly id: string;

/**
   * The configuration of the indexing policy. By default, the indexing is automatic for all document paths within the container
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
   * Paths of the item that need encryption along with path-specific settings.
   */
readonly includedPaths: ClientEncryptionIncludedPath[];

/**
   * Version of the client encryption policy definition. Supported versions are 1 and 2. Version 2 supports id and partition key path encryption.
   */
readonly policyFormatVersion: number;

/**
   * The identifier of the Client Encryption Key to be used to encrypt the path.
   */
readonly clientEncryptionKeyId: string;

/**
   * The encryption algorithm which will be used. Eg - AEAD_AES_256_CBC_HMAC_SHA256.
   */
readonly encryptionAlgorithm: string;

/**
   * The type of encryption to be performed. Eg - Deterministic, Randomized.
   */
readonly encryptionType: string;

/**
   * Path that needs to be encrypted.
   */
readonly path: string;

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
   * List of composite path list
   */
readonly compositeIndexes?: CompositePath[];

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
readonly indexingMode?: 'consistent''lazy''none';

/**
   * List of spatial specifics
   */
readonly spatialIndexes?: SpatialSpec[];

/**
   * Sort order for composite paths.
   */
readonly order?: 'ascending''descending';

/**
   * The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*)
   */
readonly path?: string;

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
   * The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*)
   */
readonly path?: string;

/**
   * List of path's spatial type
   */
readonly types?: String array containing any of:'LineString''MultiPolygon''Ponumber''Polygon';

/**
   * Indicates the kind of algorithm used for partitioning. For MultiHash, multiple partition keys (upto three maximum) are supported for container create
   */
readonly kind?: 'Hash''MultiHash''Range';

/**
   * List of paths using which data within the container can be partitioned
   */
readonly paths?: string[];

/**
   * Indicates the version of the partition key definition
   */
readonly version?: number;

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
 * DocumentdbDatabaseaccountsSqldatabasesContainers resource
 */
export class DocumentdbDatabaseaccountsSqldatabasesContainers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsSqldatabasesContainersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsSqldatabasesContainersProps): string {
    return JSON.stringify(
        {properties: {options: {autoscaleSettings: {maxThroughput: "${int}"}, throughput: "${int}"}, resource: {analyticalStorageTtl: "${int}", clientEncryptionPolicy: {includedPaths: [{clientEncryptionKeyId: "string", encryptionAlgorithm: "string", encryptionType: "string", path: "string"}], policyFormatVersion: "${int}"}, conflictResolutionPolicy: {conflictResolutionPath: "string", conflictResolutionProcedure: "string", mode: "string"}, defaultTtl: "${int}", id: "string", indexingPolicy: {automatic: "${bool}", compositeIndexes: [{order: "string", path: "string"}], excludedPaths: [{path: "string"}], includedPaths: [{indexes: [{dataType: "string", kind: "string", precision: "${int}"}], path: "string"}], indexingMode: "string", spatialIndexes: [{path: "string", types: ["string"]}]}, partitionKey: {kind: "string", paths: ["string"], version: "${int}"}, uniqueKeyPolicy: {uniqueKeys: [{paths: ["string"]}]}}}}
    );
  }
}
