import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ElasticsanElasticsansVolumegroupsSnapshotsProps extends IAzAPIBaseProps {

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
