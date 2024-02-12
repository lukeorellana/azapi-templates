import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsReplicationfabricsReplicationstorageclassificationsReplicationstorageclassificationmappingsProps extends IAzAPIBaseProps {

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
