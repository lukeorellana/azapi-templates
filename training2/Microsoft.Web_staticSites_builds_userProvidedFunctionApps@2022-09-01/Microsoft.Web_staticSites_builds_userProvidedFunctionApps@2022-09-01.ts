import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebStaticsitesBuildsUserprovidedfunctionappsProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: builds;

/**
   * The region of the function app registered with the static site
   */
readonly functionAppRegion?: string;

/**
   * The resource id of the function app registered with the static site
   */
readonly functionAppResourceId?: string;
}

/**
 * WebStaticsitesBuildsUserprovidedfunctionapps resource
 */
export class WebStaticsitesBuildsUserprovidedfunctionapps extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebStaticsitesBuildsUserprovidedfunctionappsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/staticSites/builds/userProvidedFunctionApps@2022-09-01";
  }

  protected getResourceBody(props: WebStaticsitesBuildsUserprovidedfunctionappsProps): string {
    return JSON.stringify(
        {properties: {functionAppRegion: "string", functionAppResourceId: "string"}, kind: "string"}
    );
  }
}
