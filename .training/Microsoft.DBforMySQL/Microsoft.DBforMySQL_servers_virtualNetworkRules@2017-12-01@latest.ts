import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformysqlServersVirtualnetworkrulesProps extends IAzAPIBaseProps {

}

/**
 * DbformysqlServersVirtualnetworkrules resource
 */
export class DbformysqlServersVirtualnetworkrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbformysqlServersVirtualnetworkrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforMySQL/servers/virtualNetworkRules@2017-12-01";
  }

  protected getResourceBody(props: DbformysqlServersVirtualnetworkrulesProps): string {
    return JSON.stringify(
        {properties: {ignoreMissingVnetServiceEndpoint: "${bool}", virtualNetworkSubnetId: "string"}}
    );
  }
}
