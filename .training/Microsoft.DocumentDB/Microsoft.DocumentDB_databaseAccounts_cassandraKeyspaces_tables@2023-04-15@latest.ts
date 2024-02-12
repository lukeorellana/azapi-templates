import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsCassandrakeyspacesTablesProps extends IAzAPIBaseProps {

}

/**
 * DocumentdbDatabaseaccountsCassandrakeyspacesTables resource
 */
export class DocumentdbDatabaseaccountsCassandrakeyspacesTables extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsCassandrakeyspacesTablesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsCassandrakeyspacesTablesProps): string {
    return JSON.stringify(
        {properties: {options: {autoscaleSettings: {maxThroughput: "${int}"}, throughput: "${int}"}, resource: {analyticalStorageTtl: "${int}", defaultTtl: "${int}", id: "string", schema: {clusterKeys: [{name: "string", orderBy: "string"}], columns: [{name: "string", type: "string"}], partitionKeys: [{name: "string"}]}}}}
    );
  }
}
