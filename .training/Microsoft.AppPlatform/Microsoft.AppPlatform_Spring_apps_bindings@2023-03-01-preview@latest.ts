import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringAppsBindingsProps extends IAzAPIBaseProps {

}

/**
 * AppplatformSpringAppsBindings resource
 */
export class AppplatformSpringAppsBindings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringAppsBindingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/apps/bindings@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringAppsBindingsProps): string {
    return JSON.stringify(
        {properties: {bindingParameters: {}, key: "string", resourceId: "string"}}
    );
  }
}
