import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringApiportalsDomainsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:apiPortals;

/**
   * The thumbprint of bound certificate.
   */
readonly thumbprint?: string;
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
