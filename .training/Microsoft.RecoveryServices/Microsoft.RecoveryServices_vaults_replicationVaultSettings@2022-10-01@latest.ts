import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsReplicationvaultsettingsProps extends IAzAPIBaseProps {

}

/**
 * RecoveryservicesVaultsReplicationvaultsettings resource
 */
export class RecoveryservicesVaultsReplicationvaultsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsReplicationvaultsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/replicationVaultSettings@2022-10-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsReplicationvaultsettingsProps): string {
    return JSON.stringify(
        {properties: {migrationSolutionId: "string", vmwareToAzureProviderType: "string"}}
    );
  }
}
