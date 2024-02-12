import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsApisKeyspacesTablesProps extends IAzAPIBaseProps {

}

/**
 * DocumentdbDatabaseaccountsApisKeyspacesTables resource
 */
export class DocumentdbDatabaseaccountsApisKeyspacesTables extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsApisKeyspacesTablesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables@2016-03-31";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsApisKeyspacesTablesProps): string {
    return JSON.stringify(
        {properties: {options: {}, resource: {defaultTtl: "${int}", id: "string", schema: {clusterKeys: [{name: "string", orderBy: "string"}], columns: [{name: "string", type: "string"}], partitionKeys: [{name: "string"}]}}}}
    );
  }
}
