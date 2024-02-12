import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebStaticsitesBuildsLinkedbackendsProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: builds;

/**
   * The resource id of the backend linked to the static site
   */
readonly backendResourceId?: string;

/**
   * The region of the backend linked to the static site
   */
readonly region?: string;
}

/**
 * WebStaticsitesBuildsLinkedbackends resource
 */
export class WebStaticsitesBuildsLinkedbackends extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebStaticsitesBuildsLinkedbackendsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/staticSites/builds/linkedBackends@2022-09-01";
  }

  protected getResourceBody(props: WebStaticsitesBuildsLinkedbackendsProps): string {
    return JSON.stringify(
        {properties: {backendResourceId: "string", region: "string"}, kind: "string"}
    );
  }
}
