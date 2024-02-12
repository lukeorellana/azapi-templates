import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringApiportalsDomainsProps extends IAzAPIBaseProps {

}

/**
 * AppplatformSpringApiportalsDomains resource
 */
export class AppplatformSpringApiportalsDomains extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringApiportalsDomainsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/apiPortals/domains@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringApiportalsDomainsProps): string {
    return JSON.stringify(
        {properties: {thumbprint: "string"}}
    );
  }
}
