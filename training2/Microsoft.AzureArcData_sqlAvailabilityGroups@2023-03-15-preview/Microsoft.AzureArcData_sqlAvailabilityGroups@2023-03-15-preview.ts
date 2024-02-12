import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurearcdataSqlavailabilitygroupsProps extends IAzAPIBaseProps {
/**
   * Id GUID of the availability group.
   */
readonly availabilityGroupId: string;

/**
   * The name of the availability group.
   */
readonly availabilityGroupName: string;

/**
   * SQL Server basic availability group.
   */
readonly basicFeatures?: bool;

/**
   * SQL Server availability group cluster type description
   */
readonly clusterTypeDesc?: string;

/**
   * Timestamp for when the data was collected from the client machine.
   */
readonly collectionTimestamp?: string;

/**
   * SQL Server availability group failover for database health conditions.
   */
readonly dbFailover?: bool;

/**
   * SQL Server availability group DTC support enabled.
   */
readonly dtcSupport?: bool;

/**
   * The name of the instance name which availability group primary is on.
   */
readonly instanceName?: string;

/**
   * SQL Server availability group contained system databases.
   */
readonly isContained?: bool;

/**
   * SQL Server distributed availability group.
   */
readonly isDistributed?: bool;

/**
   * Availability group required the number of synchronized secondary to commit.
   */
readonly requiredSynchronizedSecondariesCommit?: number;

/**
   * SQL Server availability group current version.
   */
readonly version?: number;
}

/**
 * AzurearcdataSqlavailabilitygroups resource
 */
export class AzurearcdataSqlavailabilitygroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurearcdataSqlavailabilitygroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureArcData/sqlAvailabilityGroups@2023-03-15-preview";
  }

  protected getResourceBody(props: AzurearcdataSqlavailabilitygroupsProps): string {
    return JSON.stringify(
        {properties: {availabilityGroupId: "string", availabilityGroupName: "string", basicFeatures: "${bool}", clusterTypeDesc: "string", collectionTimestamp: "string", dbFailover: "${bool}", dtcSupport: "${bool}", instanceName: "string", isContained: "${bool}", isDistributed: "${bool}", requiredSynchronizedSecondariesCommit: "${int}", version: "${int}"}}
    );
  }
}
