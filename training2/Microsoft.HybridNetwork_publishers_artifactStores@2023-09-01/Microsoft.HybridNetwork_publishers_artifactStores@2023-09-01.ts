import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridnetworkPublishersArtifactstoresProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:publishers;

/**
   * 
   */
readonly managedResourceGroupConfiguration?: ArtifactStorePropertiesFormatManagedResourceGroupCon...;

/**
   * The replication strategy.
   */
readonly replicationStrategy?: 'SingleReplication''Unknown';

/**
   * The artifact store type.
   */
readonly storeType?: 'AzureContainerRegistry''AzureStorageAccount''Unknown';
}

/**
 * HybridnetworkPublishersArtifactstores resource
 */
export class HybridnetworkPublishersArtifactstores extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HybridnetworkPublishersArtifactstoresProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HybridNetwork/publishers/artifactStores@2023-09-01";
  }

  protected getResourceBody(props: HybridnetworkPublishersArtifactstoresProps): string {
    return JSON.stringify(
        {properties: {managedResourceGroupConfiguration: {location: "string", name: "string"}, replicationStrategy: "string", storeType: "string"}}
    );
  }
}
