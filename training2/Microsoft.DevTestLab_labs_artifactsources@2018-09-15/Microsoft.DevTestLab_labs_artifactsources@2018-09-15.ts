import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevtestlabLabsArtifactsourcesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:labs;

/**
   * The folder containing Azure Resource Manager templates.
   */
readonly armTemplateFolderPath?: string;

/**
   * The artifact source's branch reference.
   */
readonly branchRef?: string;

/**
   * The artifact source's display name.
   */
readonly displayName?: string;

/**
   * The folder containing artifacts.
   */
readonly folderPath?: string;

/**
   * The security token to authenticate to the artifact source.
   */
readonly securityToken?: string;

/**
   * The artifact source's type.
   */
readonly sourceType?: 'GitHub''StorageAccount''VsoGit';

/**
   * Indicates if the artifact source is enabled (values: Enabled, Disabled).
   */
readonly status?: 'Disabled''Enabled';

/**
   * The artifact source's URI.
   */
readonly uri?: string;
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
