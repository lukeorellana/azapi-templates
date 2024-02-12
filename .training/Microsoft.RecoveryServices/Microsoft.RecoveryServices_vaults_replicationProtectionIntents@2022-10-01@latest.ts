import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsReplicationprotectionintentsProps extends IAzAPIBaseProps {

}

/**
 * RecoveryservicesVaultsReplicationprotectionintents resource
 */
export class RecoveryservicesVaultsReplicationprotectionintents extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsReplicationprotectionintentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/replicationProtectionIntents@2022-10-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsReplicationprotectionintentsProps): string {
    return JSON.stringify(
        {properties: {providerSpecificDetails: {instanceType: "string"}}}
    );
  }
}
