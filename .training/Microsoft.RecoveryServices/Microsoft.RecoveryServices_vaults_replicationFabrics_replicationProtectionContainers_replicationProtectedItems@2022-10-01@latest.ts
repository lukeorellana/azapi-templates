import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersReplicationprotecteditemsProps extends IAzAPIBaseProps {

}

/**
 * RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersReplicationprotecteditems resource
 */
export class RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersReplicationprotecteditems extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersReplicationprotecteditemsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems@2022-10-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersReplicationprotecteditemsProps): string {
    return JSON.stringify(
        {properties: {policyId: "string", protectableItemId: "string", providerSpecificDetails: {instanceType: "string"}}}
    );
  }
}
