import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersReplicationprotectioncontainermappingsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:replicationProtectionContainers;

/**
   * Applicable policy.
   */
readonly policyId?: string;

/**
   * Provider specific input for pairing.
   */
readonly providerSpecificInput?: ReplicationProviderSpecificContainerMappingInput;

/**
   * The target unique protection container name.
   */
readonly targetProtectionContainerId?: string;

/**
   * Set the object type
   */
readonly instanceType: A2AVMwareCbt;

/**
   * The class type.
   */
readonly instanceType: 'A2A';

/**
   * A value indicating whether the auto update is enabled.
   */
readonly agentAutoUpdateStatus?: 'Disabled''Enabled';

/**
   * The automation account arm id.
   */
readonly automationAccountArmId?: string;

/**
   * A value indicating the type authentication to use for automation Account.
   */
readonly automationAccountAuthenticationType?: 'RunAsAccount''SystemAssignedIdentity';

/**
   * The class type.
   */
readonly instanceType: 'VMwareCbt';

/**
   * The target key vault ARM Id.
   */
readonly keyVaultId?: string;

/**
   * The target key vault URL.
   */
readonly keyVaultUri?: string;

/**
   * The secret name of the service bus connection string.
   */
readonly serviceBusConnectionStringSecretName?: string;

/**
   * The storage account ARM Id.
   */
readonly storageAccountId: string;

/**
   * The secret name of the storage account.
   */
readonly storageAccountSasSecretName?: string;

/**
   * The target location.
   */
readonly targetLocation: string;
}

/**
 * RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersReplicationprotectioncontainermappings resource
 */
export class RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersReplicationprotectioncontainermappings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersReplicationprotectioncontainermappingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionContainerMappings@2022-10-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersReplicationprotectioncontainermappingsProps): string {
    return JSON.stringify(
        {properties: {policyId: "string", providerSpecificInput: {instanceType: "string"}, targetProtectionContainerId: "string"}}
    );
  }
}
