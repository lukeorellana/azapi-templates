import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:replicationFabrics;

/**
   * Provider specific inputs for container creation.
   */
readonly providerSpecificInput?: ReplicationProviderSpecificContainerCreationInput[];

/**
   * Set the object type
   */
readonly instanceType: A2AA2ACrossClusterMigrationVMwareCbt;

/**
   * The class type.
   */
readonly instanceType: 'A2A';

/**
   * The class type.
   */
readonly instanceType: 'A2ACrossClusterMigration';

/**
   * The class type.
   */
readonly instanceType: 'VMwareCbt';
}

/**
 * RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainers resource
 */
export class RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers@2022-10-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersProps): string {
    return JSON.stringify(
        {properties: {providerSpecificInput: [{instanceType: "string"}]}}
    );
  }
}
