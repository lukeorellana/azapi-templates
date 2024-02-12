import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlServersVirtualnetworkrulesProps extends IAzAPIBaseProps {
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
 * DbforpostgresqlServersVirtualnetworkrules resource
 */
export class DbforpostgresqlServersVirtualnetworkrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbforpostgresqlServersVirtualnetworkrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforPostgreSQL/servers/virtualNetworkRules@2017-12-01";
  }

  protected getResourceBody(props: DbforpostgresqlServersVirtualnetworkrulesProps): string {
    return JSON.stringify(
        {properties: {ignoreMissingVnetServiceEndpoint: "${bool}", virtualNetworkSubnetId: "string"}}
    );
  }
}
