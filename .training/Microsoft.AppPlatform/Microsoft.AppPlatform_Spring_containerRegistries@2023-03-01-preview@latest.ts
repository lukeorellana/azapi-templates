import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringContainerregistriesProps extends IAzAPIBaseProps {

}

/**
 * AppplatformSpringContainerregistries resource
 */
export class AppplatformSpringContainerregistries extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringContainerregistriesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/containerRegistries@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringContainerregistriesProps): string {
    return JSON.stringify(
        {properties: {credentials: {type: "string"}}}
    );
  }
}
