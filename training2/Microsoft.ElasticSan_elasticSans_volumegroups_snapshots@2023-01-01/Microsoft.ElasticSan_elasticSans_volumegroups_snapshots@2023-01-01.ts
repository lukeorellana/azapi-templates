import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ElasticsanElasticsansVolumegroupsSnapshotsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:volumegroups;

/**
   * Data used when creating a volume snapshot.
   */
readonly creationData: SnapshotCreationData;

/**
   * Fully qualified resource ID of the volume. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/volumes/{volumeName}"
   */
readonly sourceId: string;
}

/**
 * ElasticsanElasticsansVolumegroupsSnapshots resource
 */
export class ElasticsanElasticsansVolumegroupsSnapshots extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ElasticsanElasticsansVolumegroupsSnapshotsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ElasticSan/elasticSans/volumegroups/snapshots@2023-01-01";
  }

  protected getResourceBody(props: ElasticsanElasticsansVolumegroupsSnapshotsProps): string {
    return JSON.stringify(
        {properties: {creationData: {sourceId: "string"}}}
    );
  }
}
