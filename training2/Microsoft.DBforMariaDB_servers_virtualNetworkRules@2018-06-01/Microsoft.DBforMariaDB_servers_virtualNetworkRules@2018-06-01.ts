import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformariadbServersVirtualnetworkrulesProps extends IAzAPIBaseProps {
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
 * DbformariadbServersVirtualnetworkrules resource
 */
export class DbformariadbServersVirtualnetworkrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbformariadbServersVirtualnetworkrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforMariaDB/servers/virtualNetworkRules@2018-06-01";
  }

  protected getResourceBody(props: DbformariadbServersVirtualnetworkrulesProps): string {
    return JSON.stringify(
        {properties: {ignoreMissingVnetServiceEndpoint: "${bool}", virtualNetworkSubnetId: "string"}}
    );
  }
}
