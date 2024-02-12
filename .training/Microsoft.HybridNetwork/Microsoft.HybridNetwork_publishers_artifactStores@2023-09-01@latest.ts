import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridnetworkPublishersArtifactstoresProps extends IAzAPIBaseProps {

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
