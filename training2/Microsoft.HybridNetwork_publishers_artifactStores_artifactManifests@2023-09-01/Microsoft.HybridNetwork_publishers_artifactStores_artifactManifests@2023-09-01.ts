import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridnetworkPublishersArtifactstoresArtifactmanifestsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:artifactStores;

/**
   * The artifacts list.
   */
readonly artifacts?: ManifestArtifactFormat[];

/**
   * The artifact name
   */
readonly artifactName?: string;

/**
   * The artifact type.
   */
readonly artifactType?: 'ArmTemplate''ImageFile''OCIArtifact''Unknown''VhdImageFile';

/**
   * The artifact version.
   */
readonly artifactVersion?: string;
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
