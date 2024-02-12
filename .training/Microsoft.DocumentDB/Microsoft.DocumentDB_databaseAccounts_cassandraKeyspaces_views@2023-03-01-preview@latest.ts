import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsCassandrakeyspacesViewsProps extends IAzAPIBaseProps {

}

/**
 * DocumentdbDatabaseaccountsCassandrakeyspacesViews resource
 */
export class DocumentdbDatabaseaccountsCassandrakeyspacesViews extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsCassandrakeyspacesViewsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/views@2023-03-01-preview";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsCassandrakeyspacesViewsProps): string {
    return JSON.stringify(
        {properties: {options: {autoscaleSettings: {maxThroughput: "${int}"}, throughput: "${int}"}, resource: {id: "string", viewDefinition: "string"}}}
    );
  }
}
