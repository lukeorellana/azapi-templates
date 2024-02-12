import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DeploymentmanagerArtifactsourcesProps extends IAzAPIBaseProps {

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
