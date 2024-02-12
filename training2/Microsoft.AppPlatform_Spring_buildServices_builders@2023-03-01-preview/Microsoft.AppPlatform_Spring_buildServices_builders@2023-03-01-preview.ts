import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringBuildservicesBuildersProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: buildServices;

/**
   * Builder buildpack groups.
   */
readonly buildpackGroups?: BuildpacksGroupProperties[];

/**
   * Builder cluster stack property.
   */
readonly stack?: StackProperties;

/**
   * Buildpacks in the buildpack group
   */
readonly buildpacks?: BuildpackProperties[];

/**
   * Id of the buildpack
   */
readonly id?: string;

/**
   * Id of the ClusterStack.
   */
readonly id?: string;

/**
   * Version of the ClusterStack
   */
readonly version?: string;
}

/**
 * AppplatformSpringBuildservicesBuilders resource
 */
export class AppplatformSpringBuildservicesBuilders extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringBuildservicesBuildersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/buildServices/builders@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringBuildservicesBuildersProps): string {
    return JSON.stringify(
        {properties: {buildpackGroups: [{buildpacks: [{id: "string"}], name: "string"}], stack: {id: "string", version: "string"}}}
    );
  }
}