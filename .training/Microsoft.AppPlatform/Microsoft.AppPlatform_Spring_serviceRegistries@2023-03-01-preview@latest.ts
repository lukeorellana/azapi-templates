import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringServiceregistriesProps extends IAzAPIBaseProps {

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
