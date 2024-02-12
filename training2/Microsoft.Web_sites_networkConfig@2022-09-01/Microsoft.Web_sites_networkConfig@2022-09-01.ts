import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesNetworkconfigProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:sites;

/**
   * The Virtual Network subnet's resource ID. This is the subnet that this Web App will join. This subnet must have a delegation to Microsoft.Web/serverFarms defined first.
   */
readonly subnetResourceId?: string;

/**
   * A flag that specifies if the scale unit this Web App is on supports Swift integration.
   */
readonly swiftSupported?: bool;
}

/**
 * WebSitesNetworkconfig resource
 */
export class WebSitesNetworkconfig extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesNetworkconfigProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/networkConfig@2022-09-01";
  }

  protected getResourceBody(props: WebSitesNetworkconfigProps): string {
    return JSON.stringify(
        {properties: {subnetResourceId: "string", swiftSupported: "${bool}"}, kind: "string"}
    );
  }
}
