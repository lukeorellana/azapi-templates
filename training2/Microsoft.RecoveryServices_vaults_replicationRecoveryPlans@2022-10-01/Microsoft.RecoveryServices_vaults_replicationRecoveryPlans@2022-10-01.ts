import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsReplicationrecoveryplansProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:vaults;

/**
   * The failover deployment model.
   */
readonly failoverDeploymentModel?: 'Classic''NotApplicable''ResourceManager';

/**
   * The recovery plan groups.
   */
readonly groups: RecoveryPlanGroup[];

/**
   * The primary fabric Id.
   */
readonly primaryFabricId: string;

/**
   * The provider specific input.
   */
readonly providerSpecificInput?: RecoveryPlanProviderSpecificInput[];

/**
   * The recovery fabric Id.
   */
readonly recoveryFabricId: string;

/**
   * The end group actions.
   */
readonly endGroupActions?: RecoveryPlanAction[];

/**
   * The group type.
   */
readonly groupType: 'Boot''Failover''Shutdown';

/**
   * The list of protected items.
   */
readonly replicationProtectedItems?: RecoveryPlanProtectedItem[];

/**
   * The start group actions.
   */
readonly startGroupActions?: RecoveryPlanAction[];

/**
   * The action name.
   */
readonly actionName: string;

/**
   * The custom details.
   */
readonly customDetails: RecoveryPlanActionDetails;

/**
   * The list of failover directions.
   */
readonly failoverDirections: String array containing any of:'PrimaryToRecovery''RecoveryToPrimary';

/**
   * The list of failover types.
   */
readonly failoverTypes: String array containing any of:'CancelFailover''ChangePit''Commit''CompleteMigration''DisableProtection''Failback''FinalizeFailback''PlannedFailover''RepairReplication''ReverseReplicate''SwitchProtection''TestFailover''TestFailoverCleanup''UnplannedFailover';

/**
   * Set the object type
   */
readonly instanceType: AutomationRunbookActionDetailsManualActionDetailsScriptActionDetails;

/**
   * Gets the type of action details (see RecoveryPlanActionDetailsTypes enum for possible values).
   */
readonly instanceType: 'AutomationRunbookActionDetails';

/**
   * The fabric location.
   */
readonly fabricLocation: 'Primary''Recovery';

/**
   * The runbook ARM Id.
   */
readonly runbookId?: string;

/**
   * The runbook timeout.
   */
readonly timeout?: string;

/**
   * Gets the type of action details (see RecoveryPlanActionDetailsTypes enum for possible values).
   */
readonly instanceType: 'ManualActionDetails';

/**
   * The manual action description.
   */
readonly description?: string;

/**
   * Gets the type of action details (see RecoveryPlanActionDetailsTypes enum for possible values).
   */
readonly instanceType: 'ScriptActionDetails';

/**
   * The fabric location.
   */
readonly fabricLocation: 'Primary''Recovery';

/**
   * The script path.
   */
readonly path: string;

/**
   * The script timeout.
   */
readonly timeout?: string;

/**
   * The ARM Id of the recovery plan protected item.
   */
readonly id?: string;

/**
   * The virtual machine Id.
   */
readonly virtualMachineId?: string;

/**
   * Set the object type
   */
readonly instanceType: A2A;

/**
   * Gets the Instance type.
   */
readonly instanceType: 'A2A';

/**
   * The primary extended location.
   */
readonly primaryExtendedLocation?: ExtendedLocation;

/**
   * The primary zone.
   */
readonly primaryZone?: string;

/**
   * The recovery extended location.
   */
readonly recoveryExtendedLocation?: ExtendedLocation;

/**
   * The recovery zone.
   */
readonly recoveryZone?: string;

/**
   * The extended location type.
   */
readonly type: 'EdgeZone';
}

/**
 * RecoveryservicesVaultsReplicationrecoveryplans resource
 */
export class RecoveryservicesVaultsReplicationrecoveryplans extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsReplicationrecoveryplansProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/replicationRecoveryPlans@2022-10-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsReplicationrecoveryplansProps): string {
    return JSON.stringify(
        {properties: {failoverDeploymentModel: "string", groups: [{endGroupActions: [{actionName: "string", customDetails: {instanceType: "string"}, failoverDirections: ["string"], failoverTypes: ["string"]}], groupType: "string", replicationProtectedItems: [{id: "string", virtualMachineId: "string"}], startGroupActions: [{actionName: "string", customDetails: {instanceType: "string"}, failoverDirections: ["string"], failoverTypes: ["string"]}]}], primaryFabricId: "string", providerSpecificInput: [{instanceType: "string"}], recoveryFabricId: "string"}}
    );
  }
}
