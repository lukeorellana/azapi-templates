import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ElasticsanElasticsansVolumegroupsVolumesProps extends IAzAPIBaseProps {

}

/**
 * ElasticsanElasticsansVolumegroupsVolumes resource
 */
export class ElasticsanElasticsansVolumegroupsVolumes extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ElasticsanElasticsansVolumegroupsVolumesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ElasticSan/elasticSans/volumegroups/volumes@2023-01-01";
  }

  protected getResourceBody(props: ElasticsanElasticsansVolumegroupsVolumesProps): string {
    return JSON.stringify(
        {properties: {creationData: {createSource: "string", sourceId: "string"}, managedBy: {resourceId: "string"}, sizeGiB: "${int}"}}
    );
  }
}
