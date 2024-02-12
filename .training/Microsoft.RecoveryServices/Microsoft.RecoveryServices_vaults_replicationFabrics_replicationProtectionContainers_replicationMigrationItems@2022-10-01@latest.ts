import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersReplicationmigrationitemsProps extends IAzAPIBaseProps {

}

/**
 * RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersReplicationmigrationitems resource
 */
export class RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersReplicationmigrationitems extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersReplicationmigrationitemsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems@2022-10-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersReplicationmigrationitemsProps): string {
    return JSON.stringify(
        {properties: {policyId: "string", providerSpecificDetails: {instanceType: "string"}}}
    );
  }
}
