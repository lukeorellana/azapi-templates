import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurearcdataSqlserverinstancesSqlavailabilitygroupsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:sqlServerInstances;

/**
   * ID GUID of the availability group.
   */
readonly availabilityGroupId: string;

/**
   * the availability group name.
   */
readonly availabilityGroupName?: string;

/**
   * null
   */
readonly configure?: AvailabilityGroupConfigure;

/**
   * null
   */
readonly state?: AvailabilityGroupState;

/**
   * Availability Synchronization mode description of availability group replica.
   */
readonly availabilityModeDesc?: string;

/**
   * Represents the user-specified priority for performing backups on this replica relative to the other replicas in the same availability group.
   */
readonly backupPriority?: number;

/**
   * Date that the replica was created.
   */
readonly createDate?: string;

/**
   * Mirroring endpoint URL of availability group replica
   */
readonly endpointUrl?: string;

/**
   * failover mode description of the availability group replica.
   */
readonly failoverModeDesc?: string;

/**
   * Date that the replica was modified.
   */
readonly modifyDate?: string;

/**
   * Allowed the connections for primary role of the availability group replica.
   */
readonly primaryRoleAllowConnectionsDesc?: string;

/**
   * Connectivity endpoint (URL) of the read only availability replica.
   */
readonly readOnlyRoutingUrl?: string;

/**
   * Connectivity endpoint (URL) of the read write availability replica.
   */
readonly readWriteRoutingUrl?: string;

/**
   * Allowed the connections for secondary role of availability group replica.
   */
readonly secondaryRoleAllowConnectionsDesc?: string;

/**
   * Describes seeding mode.
   */
readonly seedingModeDesc?: string;

/**
   * The time-out period of availability group session replica, in seconds.
   */
readonly sessionTimeout?: number;

/**
   * Role description of the availability group replica.
   */
readonly availabilityGroupReplicaRole?: string;

/**
   * Connected state description of the availability group replica.
   */
readonly connectedStateDesc?: string;

/**
   * Last connect error description of the availability group replica.
   */
readonly lastConnectErrorDescription?: string;

/**
   * Last connect error time stamp of the availability group replica.
   */
readonly lastConnectErrorTimestamp?: string;

/**
   * Operation state description of the availability group replica
   */
readonly operationalStateDesc?: string;

/**
   * Recovery health description of the availability group replica.
   */
readonly recoveryHealthDesc?: string;

/**
   * Synchronization health description of the availability group replica.
   */
readonly synchronizationHealthDesc?: string;
}

/**
 * AzurearcdataSqlserverinstancesSqlavailabilitygroups resource
 */
export class AzurearcdataSqlserverinstancesSqlavailabilitygroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurearcdataSqlserverinstancesSqlavailabilitygroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureArcData/sqlServerInstances/sqlAvailabilityGroups@2023-03-15-preview";
  }

  protected getResourceBody(props: AzurearcdataSqlserverinstancesSqlavailabilitygroupsProps): string {
    return JSON.stringify(
        {properties: {availabilityGroupId: "string", availabilityGroupName: "string", configure: {availabilityModeDesc: "string", backupPriority: "${int}", createDate: "string", endpointUrl: "string", failoverModeDesc: "string", modifyDate: "string", primaryRoleAllowConnectionsDesc: "string", readOnlyRoutingUrl: "string", readWriteRoutingUrl: "string", secondaryRoleAllowConnectionsDesc: "string", seedingModeDesc: "string", sessionTimeout: "${int}"}, state: {availabilityGroupReplicaRole: "string", connectedStateDesc: "string", lastConnectErrorDescription: "string", lastConnectErrorTimestamp: "string", operationalStateDesc: "string", recoveryHealthDesc: "string", synchronizationHealthDesc: "string"}}}
    );
  }
}
