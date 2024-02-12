import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlServersVirtualnetworkrulesProps extends IAzAPIBaseProps {

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
