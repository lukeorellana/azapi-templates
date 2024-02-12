import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebStaticsitesConfigProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:staticSites;
}

/**
 * WebStaticsitesConfig resource
 */
export class WebStaticsitesConfig extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebStaticsitesConfigProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/staticSites/config@2020-10-01";
  }

  protected getResourceBody(props: WebStaticsitesConfigProps): string {
    return JSON.stringify(
        {properties: {}, kind: "string"}
    );
  }
}
