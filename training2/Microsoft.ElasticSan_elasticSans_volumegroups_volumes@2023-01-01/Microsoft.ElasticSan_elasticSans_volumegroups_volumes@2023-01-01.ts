import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ElasticsanElasticsansVolumegroupsVolumesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:volumegroups;

/**
   * State of the operation on the resource.
   */
readonly creationData?: SourceCreationData;

/**
   * Parent resource information.
   */
readonly managedBy?: ManagedByInfo;

/**
   * Volume size.
   */
readonly sizeGiB: number;

/**
   * This enumerates the possible sources of a volume creation.
   */
readonly createSource?: 'Disk''DiskRestorePonumber''DiskSnapshot''None''VolumeSnapshot';

/**
   * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
   */
readonly sourceId?: string;

/**
   * Resource ID of the resource managing the volume, this is a restricted field and can only be set for internal use.
   */
readonly resourceId?: string;
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
