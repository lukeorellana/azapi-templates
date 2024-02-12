import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersReplicationmigrationitemsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:replicationProtectionContainers;

/**
   * The policy Id.
   */
readonly policyId: string;

/**
   * The provider specific details.
   */
readonly providerSpecificDetails: EnableMigrationProviderSpecificInputOrMigrationProvi...;

/**
   * Set the object type
   */
readonly instanceType: VMwareCbt;

/**
   * The class type.
   */
readonly instanceType: 'VMwareCbt';

/**
   * The data mover run as account Id.
   */
readonly dataMoverRunAsAccountId: string;

/**
   * The disks to include list.
   */
readonly disksToInclude: VMwareCbtDiskInput[];

/**
   * License type.
   */
readonly licenseType?: 'NoLicenseType''NotSpecified''WindowsServer';

/**
   * A value indicating whether auto resync is to be done.
   */
readonly performAutoResync?: string;

/**
   * A value indicating whether bulk SQL RP registration to be done.
   */
readonly performSqlBulkRegistration?: string;

/**
   * The tags for the seed disks.
   */
readonly seedDiskTags?: object;

/**
   * The snapshot run as account Id.
   */
readonly snapshotRunAsAccountId: string;

/**
   * The SQL Server license type.
   */
readonly sqlServerLicenseType?: 'AHUB''NoLicenseType''NotSpecified''PAYG';

/**
   * The target availability set ARM Id.
   */
readonly targetAvailabilitySetId?: string;

/**
   * The target availability zone.
   */
readonly targetAvailabilityZone?: string;

/**
   * The target boot diagnostics storage account ARM Id.
   */
readonly targetBootDiagnosticsStorageAccountId?: string;

/**
   * The tags for the target disks.
   */
readonly targetDiskTags?: object;

/**
   * The target network ARM Id.
   */
readonly targetNetworkId: string;

/**
   * The tags for the target NICs.
   */
readonly targetNicTags?: object;

/**
   * The target proximity placement group ARM Id.
   */
readonly targetProximityPlacementGroupId?: string;

/**
   * The target resource group ARM Id.
   */
readonly targetResourceGroupId: string;

/**
   * The target subnet name.
   */
readonly targetSubnetName?: string;

/**
   * The target VM name.
   */
readonly targetVmName?: string;

/**
   * The target VM size.
   */
readonly targetVmSize?: string;

/**
   * The target VM tags.
   */
readonly targetVmTags?: object;

/**
   * The selected test network ARM Id.
   */
readonly testNetworkId?: string;

/**
   * The selected test subnet name.
   */
readonly testSubnetName?: string;

/**
   * The ARM Id of the VM discovered in VMware.
   */
readonly vmwareMachineId: string;

/**
   * The DiskEncryptionSet ARM Id.
   */
readonly diskEncryptionSetId?: string;

/**
   * The disk Id.
   */
readonly diskId: string;

/**
   * The disk type.
   */
readonly diskType?: 'Premium_LRS''StandardSSD_LRS''Standard_LRS';

/**
   * A value indicating whether the disk is the OS disk.
   */
readonly isOSDisk: string;

/**
   * The log storage account ARM Id.
   */
readonly logStorageAccountId: string;

/**
   * The key vault secret name of the log storage account.
   */
readonly logStorageAccountSasSecretName: string;
}

/**
 * RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersReplicationmigrationitems resource
 */
export class RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersReplicationmigrationitems extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersReplicationmigrationitemsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems@2022-10-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersReplicationmigrationitemsProps): string {
    return JSON.stringify(
        {properties: {policyId: "string", providerSpecificDetails: {instanceType: "string"}}}
    );
  }
}
