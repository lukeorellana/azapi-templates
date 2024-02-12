import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsGremlindatabasesProps extends IAzAPIBaseProps {

}

/**
 * DocumentdbDatabaseaccountsGremlindatabases resource
 */
export class DocumentdbDatabaseaccountsGremlindatabases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsGremlindatabasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/gremlinDatabases@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsGremlindatabasesProps): string {
    return JSON.stringify(
        {properties: {options: {autoscaleSettings: {maxThroughput: "${int}"}, throughput: "${int}"}, resource: {id: "string"}}}
    );
  }
}
