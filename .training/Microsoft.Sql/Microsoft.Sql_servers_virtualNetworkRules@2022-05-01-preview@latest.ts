import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersVirtualnetworkrulesProps extends IAzAPIBaseProps {

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
