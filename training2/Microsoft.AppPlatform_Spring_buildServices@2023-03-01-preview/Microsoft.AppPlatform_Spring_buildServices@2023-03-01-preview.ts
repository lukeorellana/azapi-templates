import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringBuildservicesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:Spring;

/**
   * The resource id of the container registry used in this build service.
   */
readonly containerRegistry?: string;

/**
   * The runtime resource configuration of this build service.
   */
readonly resourceRequests?: BuildServicePropertiesResourceRequests;
}

/**
 * AppplatformSpringBuildservices resource
 */
export class AppplatformSpringBuildservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringBuildservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/buildServices@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringBuildservicesProps): string {
    return JSON.stringify(
        {properties: {containerRegistry: "string", resourceRequests: {}}}
    );
  }
}
