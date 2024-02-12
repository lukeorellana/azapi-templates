import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsBackupstorageconfigProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:vaults;

/**
   * Optional ETag.
   */
readonly eTag?: string;

/**
   * Opt in details of Cross Region Restore feature.
   */
readonly crossRegionRestoreFlag?: bool;

/**
   * Vault Dedup state
   */
readonly dedupState?: 'Disabled''Enabled''Invalid';

/**
   * Storage type
   */
readonly storageModelType?: 'GeoRedundant''Invalid''LocallyRedundant''ReadAccessGeoZoneRedundant''ZoneRedundant';

/**
   * Storage type.
   */
readonly storageType?: 'GeoRedundant''Invalid''LocallyRedundant''ReadAccessGeoZoneRedundant''ZoneRedundant';

/**
   * Locked or Unlocked. Once a machine is registered against a resource, the storageTypeState is always Locked.
   */
readonly storageTypeState?: 'Invalid''Locked''Unlocked';

/**
   * Vault x-cool state
   */
readonly xcoolState?: 'Disabled''Enabled''Invalid';
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
