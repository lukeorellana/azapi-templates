import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsBackupresourceguardproxiesProps extends IAzAPIBaseProps {

}

/**
 * RecoveryservicesVaultsBackupresourceguardproxies resource
 */
export class RecoveryservicesVaultsBackupresourceguardproxies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsBackupresourceguardproxiesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/backupResourceGuardProxies@2023-01-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsBackupresourceguardproxiesProps): string {
    return JSON.stringify(
        {properties: {description: "string", lastUpdatedTime: "string", resourceGuardOperationDetails: [{defaultResourceRequest: "string", vaultCriticalOperation: "string"}], resourceGuardResourceId: "string"}, eTag: "string"}
    );
  }
}
