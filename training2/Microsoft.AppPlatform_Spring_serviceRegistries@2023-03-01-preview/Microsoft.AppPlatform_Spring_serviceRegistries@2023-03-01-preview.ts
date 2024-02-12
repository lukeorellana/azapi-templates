import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringServiceregistriesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:Spring;
}

/**
 * AppplatformSpringServiceregistries resource
 */
export class AppplatformSpringServiceregistries extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringServiceregistriesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/serviceRegistries@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringServiceregistriesProps): string {
    return JSON.stringify(
        
    );
  }
}
