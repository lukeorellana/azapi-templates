import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesPrivateendpointconnectionsProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:sites;

/**
   * The state of a private link connection
   */
readonly privateLinkServiceConnectionState?: PrivateLinkConnectionState;

/**
   * ActionsRequired for a private link connection
   */
readonly actionsRequired?: string;

/**
   * Description of a private link connection
   */
readonly description?: string;

/**
   * Status of a private link connection
   */
readonly status?: string;
}

/**
 * WebSitesPrivateendpointconnections resource
 */
export class WebSitesPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/privateEndpointConnections@2022-09-01";
  }

  protected getResourceBody(props: WebSitesPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}, kind: "string"}
    );
  }
}
