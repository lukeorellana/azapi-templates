import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsProps extends IAzAPIBaseProps {

}

/**
 * DocumentdbDatabaseaccounts resource
 */
export class DocumentdbDatabaseaccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsProps): string {
    return JSON.stringify(
        {properties: {analyticalStorageConfiguration: {schemaType: "string"}, apiProperties: {serverVersion: "string"}, backupPolicy: {migrationState: {startTime: "string", status: "string", targetType: "string"}, type: "string"}, capabilities: [{name: "string"}], capacity: {totalThroughputLimit: "${int}"}, connectorOffer: "Small", consistencyPolicy: {defaultConsistencyLevel: "string", maxIntervalInSeconds: "${int}", maxStalenessPrefix: "${int}"}, cors: [{allowedHeaders: "string", allowedMethods: "string", allowedOrigins: "string", exposedHeaders: "string", maxAgeInSeconds: "${int}"}], createMode: "string", databaseAccountOfferType: "Standard", defaultIdentity: "string", disableKeyBasedMetadataWriteAccess: "${bool}", disableLocalAuth: "${bool}", enableAnalyticalStorage: "${bool}", enableAutomaticFailover: "${bool}", enableCassandraConnector: "${bool}", enableFreeTier: "${bool}", enableMultipleWriteLocations: "${bool}", enablePartitionMerge: "${bool}", ipRules: [{ipAddressOrRange: "string"}], isVirtualNetworkFilterEnabled: "${bool}", keyVaultKeyUri: "string", locations: [{failoverPriority: "${int}", isZoneRedundant: "${bool}", locationName: "string"}], minimalTlsVersion: "string", networkAclBypass: "string", networkAclBypassResourceIds: ["string"], publicNetworkAccess: "string", restoreParameters: {databasesToRestore: [{collectionNames: ["string"], databaseName: "string"}], gremlinDatabasesToRestore: [{databaseName: "string", graphNames: ["string"]}], restoreMode: "PointInTime", restoreSource: "string", restoreTimestampInUtc: "string", tablesToRestore: ["string"]}, virtualNetworkRules: [{id: "string", ignoreMissingVNetServiceEndpoint: "${bool}"}]}, kind: "string"}
    );
  }
}
