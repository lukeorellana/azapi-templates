import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface NetworkDnsresolversProps extends IAzAPIBaseProps {

}

export class NetworkDnsresolvers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkDnsresolversProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/dnsResolvers@2022-07-01";
  }

  protected getResourceBody(props: NetworkDnsresolversProps): string {
    return JSON.stringify(
      {properties: {virtualNetwork: {id: "string"}}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required) |
// | location | The geo-location where the resource lives | string (required) |
// | tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
// | properties | Properties of the DNS resolver. | DnsResolverProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | virtualNetwork | The reference to the virtual network. This cannot be changed after creation. | SubResource(required) |

// | Name | Description | Value |
// |-|-|-|
// | id | Resource ID. | string (required) |
