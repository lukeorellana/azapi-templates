import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsReplicationrecoveryplansProps extends IAzAPIBaseProps {

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
