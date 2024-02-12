import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsBackupfabricsProtectioncontainersProps extends IAzAPIBaseProps {

}

/**
 * RecoveryservicesVaultsBackupfabricsProtectioncontainers resource
 */
export class RecoveryservicesVaultsBackupfabricsProtectioncontainers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsBackupfabricsProtectioncontainersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers@2023-01-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsBackupfabricsProtectioncontainersProps): string {
    return JSON.stringify(
        {properties: {backupManagementType: "string", friendlyName: "string", healthStatus: "string", protectableObjectType: "string", registrationStatus: "string", containerType: "string"}, eTag: "string"}
    );
  }
}
