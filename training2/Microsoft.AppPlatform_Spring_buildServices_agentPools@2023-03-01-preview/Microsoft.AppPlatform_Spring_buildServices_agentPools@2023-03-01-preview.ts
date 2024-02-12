import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringBuildservicesAgentpoolsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: buildServices;

/**
   * build service agent pool size properties
   */
readonly poolSize?: BuildServiceAgentPoolSizeProperties;
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
