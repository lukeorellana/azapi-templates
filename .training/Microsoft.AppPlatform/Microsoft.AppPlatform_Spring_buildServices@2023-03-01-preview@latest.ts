import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringBuildservicesProps extends IAzAPIBaseProps {

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
