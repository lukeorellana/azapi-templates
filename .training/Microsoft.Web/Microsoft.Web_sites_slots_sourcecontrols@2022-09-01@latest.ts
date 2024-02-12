import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesSlotsSourcecontrolsProps extends IAzAPIBaseProps {

}

/**
 * WebSitesSlotsSourcecontrols resource
 */
export class WebSitesSlotsSourcecontrols extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesSlotsSourcecontrolsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/slots/sourcecontrols@2022-09-01";
  }

  protected getResourceBody(props: WebSitesSlotsSourcecontrolsProps): string {
    return JSON.stringify(
        {properties: {branch: "string", deploymentRollbackEnabled: "${bool}", gitHubActionConfiguration: {codeConfiguration: {runtimeStack: "string", runtimeVersion: "string"}, containerConfiguration: {imageName: "string", password: "string", serverUrl: "string", username: "string"}, generateWorkflowFile: "${bool}", isLinux: "${bool}"}, isGitHubAction: "${bool}", isManualIntegration: "${bool}", isMercurial: "${bool}", repoUrl: "string"}, kind: "string"}
    );
  }
}
