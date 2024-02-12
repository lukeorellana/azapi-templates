import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsBackupconfigProps extends IAzAPIBaseProps {

}

/**
 * RecoveryservicesVaultsBackupconfig resource
 */
export class RecoveryservicesVaultsBackupconfig extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsBackupconfigProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/backupconfig@2023-01-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsBackupconfigProps): string {
    return JSON.stringify(
        {properties: {enhancedSecurityState: "string", isSoftDeleteFeatureStateEditable: "${bool}", resourceGuardOperationRequests: ["string"], softDeleteFeatureState: "string", storageModelType: "string", storageType: "string", storageTypeState: "string"}, eTag: "string"}
    );
  }
}
