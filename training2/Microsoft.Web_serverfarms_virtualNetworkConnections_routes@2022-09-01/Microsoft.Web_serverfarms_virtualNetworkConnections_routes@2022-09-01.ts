import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebServerfarmsVirtualnetworkconnectionsRoutesProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: virtualNetworkConnections;

/**
   * The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
   */
readonly endAddress?: string;

/**
   * The type of route this is:DEFAULT - By default, every app has routes to the local address ranges specified by RFC1918INHERITED - Routes inherited from the real Virtual Network routesSTATIC - Static route set on the app onlyThese values will be used for syncing an app's routes with those from a Virtual Network.
   */
readonly routeType?: 'DEFAULT''INHERITED''STATIC';

/**
   * The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
   */
readonly startAddress?: string;
}

/**
 * WebServerfarmsVirtualnetworkconnectionsRoutes resource
 */
export class WebServerfarmsVirtualnetworkconnectionsRoutes extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebServerfarmsVirtualnetworkconnectionsRoutesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/serverfarms/virtualNetworkConnections/routes@2022-09-01";
  }

  protected getResourceBody(props: WebServerfarmsVirtualnetworkconnectionsRoutesProps): string {
    return JSON.stringify(
        {properties: {endAddress: "string", routeType: "string", startAddress: "string"}, kind: "string"}
    );
  }
}
