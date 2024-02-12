import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StreamanalyticsClustersProps extends IAzAPIBaseProps {

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
