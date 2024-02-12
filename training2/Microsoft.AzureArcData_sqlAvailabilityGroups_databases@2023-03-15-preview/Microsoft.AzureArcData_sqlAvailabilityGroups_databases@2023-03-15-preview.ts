import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurearcdataSqlavailabilitygroupsDatabasesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:sqlAvailabilityGroups;

/**
   * ID GUID of the database for availability group.
   */
readonly groupDatabaseId?: string;

/**
   * Array of  Arc Sql Availability Group Database Replicas.
   */
readonly value?: SqlAvailabilityGroupDatabaseReplicaResourcePropertie...[];

/**
   * Description of the database state of the availability replica.
   */
readonly databaseStateDesc?: string;

/**
   * Whether this replica is transaction committer.
   */
readonly isCommitParticipant?: bool;

/**
   * Whether the availability database is local.
   */
readonly isLocal?: bool;

/**
   * Returns 1 if the replica is primary, or 0 if it is a secondary replica.
   */
readonly isPrimaryReplica?: bool;

/**
   * Whether this data movement is suspended.
   */
readonly isSuspended?: bool;

/**
   * the database replica name.
   */
readonly replicaName?: string;

/**
   * Description of the database suspended state reason.
   */
readonly suspendReasonDesc?: string;

/**
   * Description of the health of database.
   */
readonly synchronizationHealthDesc?: string;

/**
   * Description of the data-movement state.
   */
readonly synchronizationStateDesc?: string;
}

/**
 * AzurearcdataSqlavailabilitygroupsDatabases resource
 */
export class AzurearcdataSqlavailabilitygroupsDatabases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurearcdataSqlavailabilitygroupsDatabasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureArcData/sqlAvailabilityGroups/databases@2023-03-15-preview";
  }

  protected getResourceBody(props: AzurearcdataSqlavailabilitygroupsDatabasesProps): string {
    return JSON.stringify(
        {properties: {groupDatabaseId: "string", value: [{databaseStateDesc: "string", isCommitParticipant: "${bool}", isLocal: "${bool}", isPrimaryReplica: "${bool}", isSuspended: "${bool}", replicaName: "string", suspendReasonDesc: "string", synchronizationHealthDesc: "string", synchronizationStateDesc: "string"}]}}
    );
  }
}
