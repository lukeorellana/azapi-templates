import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsApisDatabasesGraphsProps extends IAzAPIBaseProps {

}

/**
 * DocumentdbDatabaseaccountsApisDatabasesGraphs resource
 */
export class DocumentdbDatabaseaccountsApisDatabasesGraphs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsApisDatabasesGraphsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs@2016-03-31";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsApisDatabasesGraphsProps): string {
    return JSON.stringify(
        {properties: {options: {}, resource: {conflictResolutionPolicy: {conflictResolutionPath: "string", conflictResolutionProcedure: "string", mode: "string"}, defaultTtl: "${int}", id: "string", indexingPolicy: {automatic: "${bool}", excludedPaths: [{path: "string"}], includedPaths: [{indexes: [{dataType: "string", kind: "string", precision: "${int}"}], path: "string"}], indexingMode: "string"}, partitionKey: {kind: "string", paths: ["string"]}, uniqueKeyPolicy: {uniqueKeys: [{paths: ["string"]}]}}}}
    );
  }
}
