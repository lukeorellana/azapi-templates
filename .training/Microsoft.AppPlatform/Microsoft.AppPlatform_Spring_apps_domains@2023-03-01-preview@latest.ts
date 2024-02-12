import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringAppsDomainsProps extends IAzAPIBaseProps {

}

/**
 * AppplatformSpringAppsDomains resource
 */
export class AppplatformSpringAppsDomains extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringAppsDomainsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/apps/domains@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringAppsDomainsProps): string {
    return JSON.stringify(
        {properties: {certName: "string", thumbprint: "string"}}
    );
  }
}
