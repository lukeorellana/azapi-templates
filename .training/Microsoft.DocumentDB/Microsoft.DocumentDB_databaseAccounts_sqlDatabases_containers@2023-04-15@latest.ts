import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsSqldatabasesContainersProps extends IAzAPIBaseProps {

}

/**
 * DocumentdbDatabaseaccountsSqldatabasesContainers resource
 */
export class DocumentdbDatabaseaccountsSqldatabasesContainers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsSqldatabasesContainersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsSqldatabasesContainersProps): string {
    return JSON.stringify(
        {properties: {options: {autoscaleSettings: {maxThroughput: "${int}"}, throughput: "${int}"}, resource: {analyticalStorageTtl: "${int}", clientEncryptionPolicy: {includedPaths: [{clientEncryptionKeyId: "string", encryptionAlgorithm: "string", encryptionType: "string", path: "string"}], policyFormatVersion: "${int}"}, conflictResolutionPolicy: {conflictResolutionPath: "string", conflictResolutionProcedure: "string", mode: "string"}, defaultTtl: "${int}", id: "string", indexingPolicy: {automatic: "${bool}", compositeIndexes: [{order: "string", path: "string"}], excludedPaths: [{path: "string"}], includedPaths: [{indexes: [{dataType: "string", kind: "string", precision: "${int}"}], path: "string"}], indexingMode: "string", spatialIndexes: [{path: "string", types: ["string"]}]}, partitionKey: {kind: "string", paths: ["string"], version: "${int}"}, uniqueKeyPolicy: {uniqueKeys: [{paths: ["string"]}]}}}}
    );
  }
}
