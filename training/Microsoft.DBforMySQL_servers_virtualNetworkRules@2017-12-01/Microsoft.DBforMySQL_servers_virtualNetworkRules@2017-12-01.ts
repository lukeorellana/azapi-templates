import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface DbformysqlServersVirtualnetworkrulesProps extends IAzAPIBaseProps {

}

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

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-128Valid characters:Alphanumerics and hyphens. |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
// | properties | Resource properties. | VirtualNetworkRuleProperties |

// | Name | Description | Value |
// |-|-|-|
// | ignoreMissingVnetServiceEndpoint | Create firewall rule before the virtual network has vnet service endpoint enabled. | bool |
// | virtualNetworkSubnetId | The ARM resource id of the virtual network subnet. | string (required) |
