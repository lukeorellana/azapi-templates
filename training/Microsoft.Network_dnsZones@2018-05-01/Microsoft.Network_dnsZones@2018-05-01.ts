import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface NetworkDnszonesProps extends IAzAPIBaseProps {

}

export class NetworkDnszones extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkDnszonesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/dnsZones@2018-05-01";
  }

  protected getResourceBody(props: NetworkDnszonesProps): string {
    return JSON.stringify(
      {properties: {registrationVirtualNetworks: [{id: "string"}], resolutionVirtualNetworks: [{id: "string"}], zoneType: "string"}, etag: "string"}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required)Character limit: 1-63 characters2 to 34 labelsEach label is a set of characters separated by a period. For example,contoso.comhas 2 labels.Valid characters:Each label can contain alphanumerics, underscores, and hyphens.Each label is separated by a period. |
// | location | Resource location. | string (required) |
// | tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
// | etag | The etag of the zone. | string |
// | properties | The properties of the zone. | ZoneProperties |

// | Name | Description | Value |
// |-|-|-|
// | registrationVirtualNetworks | A list of references to virtual networks that register hostnames in this DNS zone. This is a only when ZoneType is Private. | SubResource[] |
// | resolutionVirtualNetworks | A list of references to virtual networks that resolve records in this DNS zone. This is a only when ZoneType is Private. | SubResource[] |
// | zoneType | The type of this DNS zone (Public or Private). | 'Private''Public' |

// | Name | Description | Value |
// |-|-|-|
// | id | Resource Id. | string |
