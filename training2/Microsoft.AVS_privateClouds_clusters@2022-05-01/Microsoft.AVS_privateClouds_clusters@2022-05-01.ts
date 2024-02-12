import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AvsPrivatecloudsClustersProps extends IAzAPIBaseProps {
/**
   * The cluster SKU
   */
readonly sku: Sku;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:privateClouds;

/**
   * The cluster size
   */
readonly clusterSize?: number;

/**
   * The hosts
   */
readonly hosts?: string[];
}

/**
 * AvsPrivatecloudsClusters resource
 */
export class AvsPrivatecloudsClusters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AvsPrivatecloudsClustersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AVS/privateClouds/clusters@2022-05-01";
  }

  protected getResourceBody(props: AvsPrivatecloudsClustersProps): string {
    return JSON.stringify(
        {properties: {clusterSize: "${int}", hosts: ["string"]}, sku: {name: "string"}}
    );
  }
}
