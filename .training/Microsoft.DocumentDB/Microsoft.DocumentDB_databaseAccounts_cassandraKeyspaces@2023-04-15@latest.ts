import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsCassandrakeyspacesProps extends IAzAPIBaseProps {

}

/**
 * DocumentdbDatabaseaccountsCassandrakeyspaces resource
 */
export class DocumentdbDatabaseaccountsCassandrakeyspaces extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsCassandrakeyspacesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsCassandrakeyspacesProps): string {
    return JSON.stringify(
        {properties: {options: {autoscaleSettings: {maxThroughput: "${int}"}, throughput: "${int}"}, resource: {id: "string"}}}
    );
  }
}
