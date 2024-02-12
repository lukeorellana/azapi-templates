import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsSqldatabasesProps extends IAzAPIBaseProps {

}

/**
 * DocumentdbDatabaseaccountsSqldatabases resource
 */
export class DocumentdbDatabaseaccountsSqldatabases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsSqldatabasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/sqlDatabases@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsSqldatabasesProps): string {
    return JSON.stringify(
        {properties: {options: {autoscaleSettings: {maxThroughput: "${int}"}, throughput: "${int}"}, resource: {id: "string"}}}
    );
  }
}
