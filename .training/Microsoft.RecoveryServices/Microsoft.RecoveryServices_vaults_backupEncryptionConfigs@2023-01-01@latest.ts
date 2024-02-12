import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsBackupencryptionconfigsProps extends IAzAPIBaseProps {

}

/**
 * RecoveryservicesVaultsBackupencryptionconfigs resource
 */
export class RecoveryservicesVaultsBackupencryptionconfigs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsBackupencryptionconfigsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/backupEncryptionConfigs@2023-01-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsBackupencryptionconfigsProps): string {
    return JSON.stringify(
        {properties: {encryptionAtRestType: "string", infrastructureEncryptionState: "string", keyUri: "string", lastUpdateStatus: "string", subscriptionId: "string"}, eTag: "string"}
    );
  }
}
