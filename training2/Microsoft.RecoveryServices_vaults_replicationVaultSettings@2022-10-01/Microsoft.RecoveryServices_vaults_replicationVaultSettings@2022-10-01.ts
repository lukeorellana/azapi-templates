import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsReplicationvaultsettingsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:vaults;

/**
   * The migration solution Id.
   */
readonly migrationSolutionId?: string;

/**
   * VMware to Azure provider type.
   */
readonly vmwareToAzureProviderType?: string;
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
