import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringBuildservicesAgentpoolsProps extends IAzAPIBaseProps {

}

/**
 * AppplatformSpringBuildservicesAgentpools resource
 */
export class AppplatformSpringBuildservicesAgentpools extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringBuildservicesAgentpoolsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/buildServices/agentPools@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringBuildservicesAgentpoolsProps): string {
    return JSON.stringify(
        {properties: {poolSize: {name: "string"}}}
    );
  }
}
