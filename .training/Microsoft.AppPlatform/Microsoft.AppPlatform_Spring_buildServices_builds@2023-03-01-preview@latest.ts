import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringBuildservicesBuildsProps extends IAzAPIBaseProps {

}

/**
 * AppplatformSpringBuildservicesBuilds resource
 */
export class AppplatformSpringBuildservicesBuilds extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringBuildservicesBuildsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/buildServices/builds@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringBuildservicesBuildsProps): string {
    return JSON.stringify(
        {properties: {agentPool: "string", builder: "string", env: {}, relativePath: "string", resourceRequests: {cpu: "string", memory: "string"}}}
    );
  }
}
