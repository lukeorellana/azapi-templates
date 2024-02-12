import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface StreamanalyticsClustersProps extends IAzAPIBaseProps {

}

export class StreamanalyticsClusters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StreamanalyticsClustersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StreamAnalytics/clusters@2020-03-01";
  }

  protected getResourceBody(props: StreamanalyticsClustersProps): string {
    return JSON.stringify(
      {properties: {}, sku: {capacity: int, name: "Default"}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required) |
// | location | The geo-location where the resource lives | string |
// | tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
// | sku | The SKU of the cluster. This determines the size/capacity of the cluster. Required on PUT (CreateOrUpdate) requests. | ClusterSku |
// | properties | The properties associated with a Stream Analytics cluster. | ClusterProperties |

// | Name | Description | Value |
// |-|-|-|
// | capacity | Denotes the number of streaming units the cluster can support. Valid values for this property are multiples of 36 with a minimum value of 36 and maximum value of 216. Required on PUT (CreateOrUpdate) requests. | intConstraints:Min value = 36Max value = 396 |
// | name | Specifies the SKU name of the cluster. Required on PUT (CreateOrUpdate) requests. | 'Default' |
