import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridnetworkPublishersArtifactstoresArtifactmanifestsProps extends IAzAPIBaseProps {

}

/**
 * HybridnetworkPublishersArtifactstoresArtifactmanifests resource
 */
export class HybridnetworkPublishersArtifactstoresArtifactmanifests extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HybridnetworkPublishersArtifactstoresArtifactmanifestsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HybridNetwork/publishers/artifactStores/artifactManifests@2023-09-01";
  }

  protected getResourceBody(props: HybridnetworkPublishersArtifactstoresArtifactmanifestsProps): string {
    return JSON.stringify(
        {properties: {artifacts: [{artifactName: "string", artifactType: "string", artifactVersion: "string"}]}}
    );
  }
}
