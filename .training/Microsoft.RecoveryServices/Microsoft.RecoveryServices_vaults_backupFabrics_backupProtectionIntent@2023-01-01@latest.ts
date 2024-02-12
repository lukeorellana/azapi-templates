import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsBackupfabricsBackupprotectionintentProps extends IAzAPIBaseProps {

}

/**
 * RecoveryservicesVaultsBackupfabricsBackupprotectionintent resource
 */
export class RecoveryservicesVaultsBackupfabricsBackupprotectionintent extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsBackupfabricsBackupprotectionintentProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/backupFabrics/backupProtectionIntent@2023-01-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsBackupfabricsBackupprotectionintentProps): string {
    return JSON.stringify(
        {properties: {backupManagementType: "string", itemId: "string", policyId: "string", protectionState: "string", sourceResourceId: "string", protectionIntentItemType: "string"}, eTag: "string"}
    );
  }
}
