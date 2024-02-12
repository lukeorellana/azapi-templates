import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersReplicationprotectioncontainermappingsProps extends IAzAPIBaseProps {

}

/**
 * RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersReplicationprotectioncontainermappings resource
 */
export class RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersReplicationprotectioncontainermappings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersReplicationprotectioncontainermappingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionContainerMappings@2022-10-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersReplicationprotectioncontainermappingsProps): string {
    return JSON.stringify(
        {properties: {policyId: "string", providerSpecificInput: {instanceType: "string"}, targetProtectionContainerId: "string"}}
    );
  }
}
