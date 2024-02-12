import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsBackupstorageconfigProps extends IAzAPIBaseProps {

}

/**
 * RecoveryservicesVaultsBackupstorageconfig resource
 */
export class RecoveryservicesVaultsBackupstorageconfig extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsBackupstorageconfigProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/backupstorageconfig@2023-01-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsBackupstorageconfigProps): string {
    return JSON.stringify(
        {properties: {crossRegionRestoreFlag: "${bool}", dedupState: "string", storageModelType: "string", storageType: "string", storageTypeState: "string", xcoolState: "string"}, eTag: "string"}
    );
  }
}
