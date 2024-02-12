import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsReplicationfabricsReplicationstorageclassificationsReplicationstorageclassificationmappingsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: replicationStorageClassifications;

/**
   * The ID of the storage object.
   */
readonly targetStorageClassificationId?: string;
}

/**
 * RecoveryservicesVaultsReplicationfabricsReplicationstorageclassificationsReplicationstorageclassificationmappings resource
 */
export class RecoveryservicesVaultsReplicationfabricsReplicationstorageclassificationsReplicationstorageclassificationmappings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsReplicationfabricsReplicationstorageclassificationsReplicationstorageclassificationmappingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications/replicationStorageClassificationMappings@2022-10-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsReplicationfabricsReplicationstorageclassificationsReplicationstorageclassificationmappingsProps): string {
    return JSON.stringify(
        {properties: {targetStorageClassificationId: "string"}}
    );
  }
}
