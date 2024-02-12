import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesSourcecontrolsProps extends IAzAPIBaseProps {

}

/**
 * WebSitesSourcecontrols resource
 */
export class WebSitesSourcecontrols extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesSourcecontrolsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/sourcecontrols@2022-09-01";
  }

  protected getResourceBody(props: WebSitesSourcecontrolsProps): string {
    return JSON.stringify(
        {properties: {branch: "string", deploymentRollbackEnabled: "${bool}", gitHubActionConfiguration: {codeConfiguration: {runtimeStack: "string", runtimeVersion: "string"}, containerConfiguration: {imageName: "string", password: "string", serverUrl: "string", username: "string"}, generateWorkflowFile: "${bool}", isLinux: "${bool}"}, isGitHubAction: "${bool}", isManualIntegration: "${bool}", isMercurial: "${bool}", repoUrl: "string"}, kind: "string"}
    );
  }
}
