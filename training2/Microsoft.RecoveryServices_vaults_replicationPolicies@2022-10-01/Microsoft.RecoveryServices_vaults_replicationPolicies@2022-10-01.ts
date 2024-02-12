import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsReplicationpoliciesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:vaults;

/**
   * The ReplicationProviderSettings.
   */
readonly providerSpecificInput?: PolicyProviderSpecificInput;

/**
   * Set the object type
   */
readonly instanceType: A2AA2ACrossClusterMigrationHyperVReplica2012R2HyperVReplicaAzureInMageInMageAzureV2InMageRcmInMageRcmFailbackVMwareCbt;

/**
   * The class type.
   */
readonly instanceType: 'A2A';

/**
   * The app consistent snapshot frequency (in minutes).
   */
readonly appConsistentFrequencyInMinutes?: number;

/**
   * The crash consistent snapshot frequency (in minutes).
   */
readonly crashConsistentFrequencyInMinutes?: number;

/**
   * A value indicating whether multi-VM sync has to be enabled. Value should be 'Enabled' or 'Disabled'.
   */
readonly multiVmSyncStatus: 'Disable''Enable';

/**
   * The duration in minutes until which the recovery points need to be stored.
   */
readonly recoveryPointHistory?: number;

/**
   * The class type.
   */
readonly instanceType: 'A2ACrossClusterMigration';

/**
   * The class type.
   */
readonly instanceType: 'HyperVReplica2012R2';

/**
   * A value indicating the authentication type.
   */
readonly allowedAuthenticationType?: number;

/**
   * A value indicating the application consistent frequency.
   */
readonly applicationConsistentSnapshotFrequencyInHours?: number;

/**
   * A value indicating whether compression has to be enabled.
   */
readonly compression?: string;

/**
   * A value indicating whether IR is online.
   */
readonly initialReplicationMethod?: string;

/**
   * A value indicating the offline IR export path.
   */
readonly offlineReplicationExportPath?: string;

/**
   * A value indicating the offline IR import path.
   */
readonly offlineReplicationImportPath?: string;

/**
   * A value indicating the online IR start time.
   */
readonly onlineReplicationStartTime?: string;

/**
   * A value indicating the number of recovery points.
   */
readonly recoveryPoints?: number;

/**
   * A value indicating whether the VM has to be auto deleted.
   */
readonly replicaDeletion?: string;

/**
   * A value indicating the replication interval.
   */
readonly replicationFrequencyInSeconds?: number;

/**
   * A value indicating the recovery HTTPS port.
   */
readonly replicationPort?: number;

/**
   * The class type.
   */
readonly instanceType: 'HyperVReplicaAzure';

/**
   * The interval (in hours) at which Hyper-V Replica should create an application consistent snapshot within the VM.
   */
readonly applicationConsistentSnapshotFrequencyInHours?: number;

/**
   * The scheduled start time for the initial replication. If this parameter is Null, the initial replication starts immediately.
   */
readonly onlineReplicationStartTime?: string;

/**
   * The duration (in hours) to which point the recovery history needs to be maintained.
   */
readonly recoveryPointHistoryDuration?: number;

/**
   * The replication interval.
   */
readonly replicationInterval?: number;

/**
   * The list of storage accounts to which the VMs in the primary cloud can replicate to.
   */
readonly storageAccounts?: string[];

/**
   * The class type.
   */
readonly instanceType: 'InMage';

/**
   * The app consistent snapshot frequency (in minutes).
   */
readonly appConsistentFrequencyInMinutes?: number;

/**
   * A value indicating whether multi-VM sync has to be enabled. Value should be 'Enabled' or 'Disabled'.
   */
readonly multiVmSyncStatus: 'Disable''Enable';

/**
   * The duration in minutes until which the recovery points need to be stored.
   */
readonly recoveryPointHistory?: number;

/**
   * The recovery point threshold in minutes.
   */
readonly recoveryPointThresholdInMinutes?: number;

/**
   * The class type.
   */
readonly instanceType: 'InMageAzureV2';

/**
   * The app consistent snapshot frequency (in minutes).
   */
readonly appConsistentFrequencyInMinutes?: number;

/**
   * The crash consistent snapshot frequency (in minutes).
   */
readonly crashConsistentFrequencyInMinutes?: number;

/**
   * A value indicating whether multi-VM sync has to be enabled. Value should be 'Enabled' or 'Disabled'.
   */
readonly multiVmSyncStatus: 'Disable''Enable';

/**
   * The duration in minutes until which the recovery points need to be stored.
   */
readonly recoveryPointHistory?: number;

/**
   * The recovery point threshold in minutes.
   */
readonly recoveryPointThresholdInMinutes?: number;

/**
   * The class type.
   */
readonly instanceType: 'InMageRcm';

/**
   * The app consistent snapshot frequency (in minutes).
   */
readonly appConsistentFrequencyInMinutes?: number;

/**
   * The crash consistent snapshot frequency (in minutes).
   */
readonly crashConsistentFrequencyInMinutes?: number;

/**
   * A value indicating whether multi-VM sync has to be enabled.
   */
readonly enableMultiVmSync?: string;

/**
   * The duration in minutes until which the recovery points need to be stored.
   */
readonly recoveryPointHistoryInMinutes?: number;

/**
   * The class type.
   */
readonly instanceType: 'InMageRcmFailback';

/**
   * The app consistent snapshot frequency (in minutes).
   */
readonly appConsistentFrequencyInMinutes?: number;

/**
   * The crash consistent snapshot frequency (in minutes).
   */
readonly crashConsistentFrequencyInMinutes?: number;

/**
   * The class type.
   */
readonly instanceType: 'VMwareCbt';

/**
   * The app consistent snapshot frequency (in minutes).
   */
readonly appConsistentFrequencyInMinutes?: number;

/**
   * The crash consistent snapshot frequency (in minutes).
   */
readonly crashConsistentFrequencyInMinutes?: number;

/**
   * The duration in minutes until which the recovery points need to be stored.
   */
readonly recoveryPointHistoryInMinutes?: number;
}

/**
 * RecoveryservicesVaultsReplicationpolicies resource
 */
export class RecoveryservicesVaultsReplicationpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsReplicationpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/replicationPolicies@2022-10-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsReplicationpoliciesProps): string {
    return JSON.stringify(
        {properties: {providerSpecificInput: {instanceType: "string"}}}
    );
  }
}
