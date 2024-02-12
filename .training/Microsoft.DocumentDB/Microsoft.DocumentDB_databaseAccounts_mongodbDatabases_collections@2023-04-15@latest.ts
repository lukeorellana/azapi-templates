import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsMongodbdatabasesCollectionsProps extends IAzAPIBaseProps {

}

/**
 * DocumentdbDatabaseaccountsMongodbdatabasesCollections resource
 */
export class DocumentdbDatabaseaccountsMongodbdatabasesCollections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsMongodbdatabasesCollectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsMongodbdatabasesCollectionsProps): string {
    return JSON.stringify(
        {properties: {options: {autoscaleSettings: {maxThroughput: "${int}"}, throughput: "${int}"}, resource: {analyticalStorageTtl: "${int}", id: "string", indexes: [{key: {keys: ["string"]}, options: {expireAfterSeconds: "${int}", unique: "${bool}"}}], shardKey: {}}}}
    );
  }
}