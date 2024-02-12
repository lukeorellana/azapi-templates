import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppContainerappsSourcecontrolsProps extends IAzAPIBaseProps {

}

/**
 * AppContainerappsSourcecontrols resource
 */
export class AppContainerappsSourcecontrols extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppContainerappsSourcecontrolsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.App/containerApps/sourcecontrols@2023-05-01";
  }

  protected getResourceBody(props: AppContainerappsSourcecontrolsProps): string {
    return JSON.stringify(
        {properties: {branch: "string", githubActionConfiguration: {azureCredentials: {clientId: "string", clientSecret: "string", kind: "string", subscriptionId: "string", tenantId: "string"}, contextPath: "string", githubPersonalAccessToken: "string", image: "string", os: "string", publishType: "string", registryInfo: {registryPassword: "string", registryUrl: "string", registryUserName: "string"}, runtimeStack: "string", runtimeVersion: "string"}, repoUrl: "string"}}
    );
  }
}
