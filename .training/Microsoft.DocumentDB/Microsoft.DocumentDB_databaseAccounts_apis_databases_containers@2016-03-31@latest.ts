import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsApisDatabasesContainersProps extends IAzAPIBaseProps {

}

/**
 * DocumentdbDatabaseaccountsApisDatabasesContainers resource
 */
export class DocumentdbDatabaseaccountsApisDatabasesContainers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsApisDatabasesContainersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/apis/databases/containers@2016-03-31";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsApisDatabasesContainersProps): string {
    return JSON.stringify(
        {properties: {options: {}, resource: {conflictResolutionPolicy: {conflictResolutionPath: "string", conflictResolutionProcedure: "string", mode: "string"}, defaultTtl: "${int}", id: "string", indexingPolicy: {automatic: "${bool}", excludedPaths: [{path: "string"}], includedPaths: [{indexes: [{dataType: "string", kind: "string", precision: "${int}"}], path: "string"}], indexingMode: "string"}, partitionKey: {kind: "string", paths: ["string"]}, uniqueKeyPolicy: {uniqueKeys: [{paths: ["string"]}]}}}}
    );
  }
}
