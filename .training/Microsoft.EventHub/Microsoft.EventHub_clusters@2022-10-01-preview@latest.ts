import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventhubClustersProps extends IAzAPIBaseProps {

}

/**
 * EventhubClusters resource
 */
export class EventhubClusters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventhubClustersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventHub/clusters@2022-10-01-preview";
  }

  protected getResourceBody(props: EventhubClustersProps): string {
    return JSON.stringify(
        {properties: {supportsScaling: "${bool}"}, sku: {capacity: "${int}", name: "Dedicated"}}
    );
  }
}