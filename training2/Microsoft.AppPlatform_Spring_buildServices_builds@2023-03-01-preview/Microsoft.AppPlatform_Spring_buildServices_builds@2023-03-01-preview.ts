import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringBuildservicesBuildsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: buildServices;

/**
   * The resource id of agent pool
   */
readonly agentPool?: string;

/**
   * The resource id of builder to build the source code
   */
readonly builder?: string;

/**
   * The environment variables for this build
   */
readonly env?: object;

/**
   * The relative path of source code
   */
readonly relativePath?: string;

/**
   * The customized build resource for this build
   */
readonly resourceRequests?: BuildResourceRequests;

/**
   * Optional Cpu allocated to the build resource. 1 core can be represented by 1 or 1000m.The default value is 1, this should not exceed build service agent pool cpu size.
   */
readonly cpu?: string;

/**
   * Optional Memory allocated to the build resource. 1 GB can be represented by 1Gi or 1024Mi.The default value is 2Gi, this should not exceed build service agent pool memory size.
   */
readonly memory?: string;
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
