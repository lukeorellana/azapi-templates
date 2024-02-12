import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface NetworkDnsresolversInboundendpointsProps extends IAzAPIBaseProps {

}

export class NetworkDnsresolversInboundendpoints extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkDnsresolversInboundendpointsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/dnsResolvers/inboundEndpoints@2022-07-01";
  }

  protected getResourceBody(props: NetworkDnsresolversInboundendpointsProps): string {
    return JSON.stringify(
      {properties: {ipConfigurations: [{privateIpAddress: "string", privateIpAllocationMethod: "string", subnet: {id: "string"}}]}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
// | location | The geo-location where the resource lives | string (required) |
// | tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dnsResolvers |
// | properties | Properties of the inbound endpoint. | InboundEndpointProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | ipConfigurations | IP configurations for the inbound endpoint. | IpConfiguration[] (required) |

// | Name | Description | Value |
// |-|-|-|
// | privateIpAddress | Private IP address of the IP configuration. | string |
// | privateIpAllocationMethod | Private IP address allocation method. | 'Dynamic''Static' |
// | subnet | The reference to the subnet bound to the IP configuration. | SubResource(required) |

// | Name | Description | Value |
// |-|-|-|
// | id | Resource ID. | string (required) |
