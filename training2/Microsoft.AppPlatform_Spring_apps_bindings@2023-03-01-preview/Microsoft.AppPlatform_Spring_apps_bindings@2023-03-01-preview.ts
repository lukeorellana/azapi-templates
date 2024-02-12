import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringAppsBindingsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:apps;

/**
   * Binding parameters of the Binding resource
   */
readonly bindingParameters?: object;

/**
   * The key of the bound resource
   */
readonly key?: string;

/**
   * The Azure resource id of the bound resource
   */
readonly resourceId?: string;
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
