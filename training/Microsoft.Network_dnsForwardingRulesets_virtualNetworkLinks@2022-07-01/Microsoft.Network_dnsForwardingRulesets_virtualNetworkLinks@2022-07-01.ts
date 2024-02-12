import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface NetworkDnsforwardingrulesetsVirtualnetworklinksProps extends IAzAPIBaseProps {

}

export class NetworkDnsforwardingrulesetsVirtualnetworklinks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkDnsforwardingrulesetsVirtualnetworklinksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/dnsForwardingRulesets/virtualNetworkLinks@2022-07-01";
  }

  protected getResourceBody(props: NetworkDnsforwardingrulesetsVirtualnetworklinksProps): string {
    return JSON.stringify(
      {properties: {metadata: {}, virtualNetwork: {id: "string"}}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dnsForwardingRulesets |
// | properties | Properties of the virtual network link. | VirtualNetworkLinkProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | metadata | Metadata attached to the virtual network link. | object |
// | virtualNetwork | The reference to the virtual network. This cannot be changed after creation. | SubResource(required) |

// | Name | Description | Value |
// |-|-|-|
// | id | Resource ID. | string (required) |
