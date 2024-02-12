import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsBackupfabricsProtectioncontainersProtecteditemsProps extends IAzAPIBaseProps {

}

/**
 * RecoveryservicesVaultsBackupfabricsProtectioncontainersProtecteditems resource
 */
export class RecoveryservicesVaultsBackupfabricsProtectioncontainersProtecteditems extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsBackupfabricsProtectioncontainersProtecteditemsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems@2023-01-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsBackupfabricsProtectioncontainersProtecteditemsProps): string {
    return JSON.stringify(
        {properties: {backupSetName: "string", containerName: "string", createMode: "string", deferredDeleteTimeInUTC: "string", deferredDeleteTimeRemaining: "string", isArchiveEnabled: "${bool}", isDeferredDeleteScheduleUpcoming: "${bool}", isRehydrate: "${bool}", isScheduledForDeferredDelete: "${bool}", lastRecoveryPoint: "string", policyId: "string", policyName: "string", resourceGuardOperationRequests: ["string"], softDeleteRetentionPeriod: "${int}", sourceResourceId: "string", protectedItemType: "string"}, eTag: "string"}
    );
  }
}
