import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsApisDatabasesCollectionsProps extends IAzAPIBaseProps {

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
