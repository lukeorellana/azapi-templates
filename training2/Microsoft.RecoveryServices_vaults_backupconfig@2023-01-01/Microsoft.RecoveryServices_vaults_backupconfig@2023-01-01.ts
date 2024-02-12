import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsBackupconfigProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:vaults;

/**
   * Optional ETag.
   */
readonly eTag?: string;

/**
   * Enabled or Disabled.
   */
readonly enhancedSecurityState?: 'Disabled''Enabled''Invalid';

/**
   * Is soft delete feature state editable
   */
readonly isSoftDeleteFeatureStateEditable?: bool;

/**
   * ResourceGuard Operation Requests
   */
readonly resourceGuardOperationRequests?: string[];

/**
   * Soft Delete feature state
   */
readonly softDeleteFeatureState?: 'Disabled''Enabled''Invalid';

/**
   * Storage type.
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
