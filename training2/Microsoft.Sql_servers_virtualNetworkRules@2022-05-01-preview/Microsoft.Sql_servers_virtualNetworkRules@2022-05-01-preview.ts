import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersVirtualnetworkrulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:servers;

/**
   * Create firewall rule before the virtual network has vnet service endpoint enabled.
   */
readonly ignoreMissingVnetServiceEndpoint?: bool;

/**
   * The ARM resource id of the virtual network subnet.
   */
readonly virtualNetworkSubnetId: string;
}

/**
 * SqlServersVirtualnetworkrules resource
 */
export class SqlServersVirtualnetworkrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersVirtualnetworkrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/virtualNetworkRules@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersVirtualnetworkrulesProps): string {
    return JSON.stringify(
        {properties: {ignoreMissingVnetServiceEndpoint: "${bool}", virtualNetworkSubnetId: "string"}}
    );
  }
}
