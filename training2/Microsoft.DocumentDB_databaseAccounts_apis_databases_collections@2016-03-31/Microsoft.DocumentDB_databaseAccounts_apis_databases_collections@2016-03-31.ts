import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsApisDatabasesCollectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:databases;

/**
   * A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
   */
readonly options: object;

/**
   * The standard JSON format of a MongoDB collection
   */
readonly resource: MongoDBCollectionResource;

/**
   * Name of the Cosmos DB MongoDB collection
   */
readonly id: string;

/**
   * List of index keys
   */
readonly indexes?: MongoIndex[];

/**
   * A key-value pair of shard keys to be applied for the request.
   */
readonly shardKey?: object;

/**
   * Cosmos DB MongoDB collection index keys
   */
readonly key?: MongoIndexKeys;

/**
   * Cosmos DB MongoDB collection index key options
   */
readonly options?: MongoIndexOptions;

/**
   * List of keys for each MongoDB collection in the Azure Cosmos DB service
   */
readonly keys?: string[];

/**
   * Expire after seconds
   */
readonly expireAfterSeconds?: number;

/**
   * Is unique or not
   */
readonly unique?: bool;
}

/**
 * DocumentdbDatabaseaccountsApisDatabasesCollections resource
 */
export class DocumentdbDatabaseaccountsApisDatabasesCollections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsApisDatabasesCollectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/apis/databases/collections@2016-03-31";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsApisDatabasesCollectionsProps): string {
    return JSON.stringify(
        {properties: {options: {}, resource: {id: "string", indexes: [{key: {keys: ["string"]}, options: {expireAfterSeconds: "${int}", unique: "${bool}"}}], shardKey: {}}}}
    );
  }
}
