import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesPrivateaccessProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:sites;

/**
   * Whether private access is enabled or not.
   */
readonly enabled?: bool;

/**
   * The Virtual Networks (and subnets) allowed to access the site privately.
   */
readonly virtualNetworks?: PrivateAccessVirtualNetwork[];

/**
   * The key (ID) of the Virtual Network.
   */
readonly key?: number;

/**
   * The ARM uri of the Virtual Network
   */
readonly resourceId?: string;

/**
   * A List of subnets that access is allowed to on this Virtual Network. An empty array (but not null) is interpreted to mean that all subnets are allowed within this Virtual Network.
   */
readonly subnets?: PrivateAccessSubnet[];

/**
   * The key (ID) of the subnet.
   */
readonly key?: number;
}

/**
 * WebSitesPrivateaccess resource
 */
export class WebSitesPrivateaccess extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesPrivateaccessProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/privateAccess@2022-09-01";
  }

  protected getResourceBody(props: WebSitesPrivateaccessProps): string {
    return JSON.stringify(
        {properties: {enabled: "${bool}", virtualNetworks: [{key: "${int}", name: "string", resourceId: "string", subnets: [{key: "${int}", name: "string"}]}]}, kind: "string"}
    );
  }
}
