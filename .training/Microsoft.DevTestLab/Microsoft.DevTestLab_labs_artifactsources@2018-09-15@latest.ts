import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevtestlabLabsArtifactsourcesProps extends IAzAPIBaseProps {

}

/**
 * DevtestlabLabsArtifactsources resource
 */
export class DevtestlabLabsArtifactsources extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevtestlabLabsArtifactsourcesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevTestLab/labs/artifactsources@2018-09-15";
  }

  protected getResourceBody(props: DevtestlabLabsArtifactsourcesProps): string {
    return JSON.stringify(
        {properties: {armTemplateFolderPath: "string", branchRef: "string", displayName: "string", folderPath: "string", securityToken: "string", sourceType: "string", status: "string", uri: "string"}}
    );
  }
}
