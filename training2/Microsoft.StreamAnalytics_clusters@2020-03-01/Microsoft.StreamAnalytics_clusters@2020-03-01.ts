import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StreamanalyticsClustersProps extends IAzAPIBaseProps {
/**
   * The SKU of the cluster. This determines the size/capacity of the cluster. Required on PUT (CreateOrUpdate) requests.
   */
readonly sku?: ClusterSku;

/**
   * Denotes the number of streaming units the cluster can support. Valid values for this property are multiples of 36 with a minimum value of 36 and maximum value of 216. Required on PUT (CreateOrUpdate) requests.
   */
readonly capacity?: numberConstranumbers:Min value = 36Max value = 396;
}

/**
 * StreamanalyticsClusters resource
 */
export class StreamanalyticsClusters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StreamanalyticsClustersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StreamAnalytics/clusters@2020-03-01";
  }

  protected getResourceBody(props: StreamanalyticsClustersProps): string {
    return JSON.stringify(
        {properties: {}, sku: {capacity: "${int}", name: "Default"}}
    );
  }
}
