import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbCassandraclustersProps extends IAzAPIBaseProps {

}

/**
 * DocumentdbCassandraclusters resource
 */
export class DocumentdbCassandraclusters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbCassandraclustersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/cassandraClusters@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbCassandraclustersProps): string {
    return JSON.stringify(
        {properties: {authenticationMethod: "string", cassandraAuditLoggingEnabled: "${bool}", cassandraVersion: "string", clientCertificates: [{pem: "string"}], clusterNameOverride: "string", deallocated: "${bool}", delegatedManagementSubnetId: "string", externalGossipCertificates: [{pem: "string"}], externalSeedNodes: [{ipAddress: "string"}], hoursBetweenBackups: "${int}", initialCassandraAdminPassword: "string", prometheusEndpoint: {ipAddress: "string"}, provisionError: {additionalErrorInfo: "string", code: "string", message: "string", target: "string"}, provisioningState: "string", repairEnabled: "${bool}", restoreFromBackupId: "string"}}
    );
  }
}
