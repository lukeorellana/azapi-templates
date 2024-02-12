import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsMongodbdatabasesProps extends IAzAPIBaseProps {

}

/**
 * DocumentdbDatabaseaccountsMongodbdatabases resource
 */
export class DocumentdbDatabaseaccountsMongodbdatabases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsMongodbdatabasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/mongodbDatabases@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsMongodbdatabasesProps): string {
    return JSON.stringify(
        {properties: {options: {autoscaleSettings: {maxThroughput: "${int}"}, throughput: "${int}"}, resource: {id: "string"}}}
    );
  }
}
