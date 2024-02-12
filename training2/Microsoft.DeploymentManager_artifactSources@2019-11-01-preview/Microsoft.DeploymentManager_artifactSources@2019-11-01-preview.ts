import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DeploymentmanagerArtifactsourcesProps extends IAzAPIBaseProps {
/**
   * The path from the location that the 'authentication' property [say, a SAS URI to the blob container] refers to, to the location of the artifacts. This can be used to differentiate different versions of the artifacts. Or, different types of artifacts like binaries or templates. The location referenced by the authentication property concatenated with this optional artifactRoot path forms the artifact source location where the artifacts are expected to be found.
   */
readonly artifactRoot?: string;

/**
   * The authentication method to use to access the artifact source.
   */
readonly authentication: Authentication;

/**
   * The type of artifact source used.
   */
readonly sourceType: string;

/**
   * Set the object type
   */
readonly type: Sas;

/**
   * The authentication type
   */
readonly type: 'Sas';

/**
   * The SAS URI to the Azure Storage blob container. Any offset from the root of the container to where the artifacts are located can be defined in the artifactRoot.
   */
readonly sasUri: string;
}

/**
 * DeploymentmanagerArtifactsources resource
 */
export class DeploymentmanagerArtifactsources extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DeploymentmanagerArtifactsourcesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DeploymentManager/artifactSources@2019-11-01-preview";
  }

  protected getResourceBody(props: DeploymentmanagerArtifactsourcesProps): string {
    return JSON.stringify(
        {properties: {artifactRoot: "string", authentication: {type: "string"}, sourceType: "string"}}
    );
  }
}
