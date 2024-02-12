import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformariadbServersVirtualnetworkrulesProps extends IAzAPIBaseProps {

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
