import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface AnalysisservicesServersProps extends IAzAPIBaseProps {

}

export class AnalysisservicesServers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AnalysisservicesServersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AnalysisServices/servers@2017-08-01";
  }

  protected getResourceBody(props: AnalysisservicesServersProps): string {
    return JSON.stringify(
      {properties: {asAdministrators: {members: ["string"]}, backupBlobContainerUri: "string", gatewayDetails: {gatewayResourceId: "string"}, ipV4FirewallSettings: {enablePowerBIService: "${bool}", firewallRules: [{firewallRuleName: "string", rangeEnd: "string", rangeStart: "string"}]}, managedMode: int, querypoolConnectionMode: "string", serverMonitorMode: int, sku: {capacity: int, name: "string", tier: "string"}}, sku: {capacity: int, name: "string", tier: "string"}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required)Character limit: 3-63Valid characters:Lowercase letters and numbers.Start with lowercase letter. |
// | location | Location of the Analysis Services resource. | string (required) |
// | tags | Key-value pairs of additional resource provisioning properties. | Dictionary of tag names and values. SeeTags in templates |
// | sku | The SKU of the Analysis Services resource. | ResourceSku(required) |
// | properties | Properties of the provision operation request. | AnalysisServicesServerProperties |

// | Name | Description | Value |
// |-|-|-|
// | asAdministrators | A collection of AS server administrators | ServerAdministrators |
// | backupBlobContainerUri | The SAS container URI to the backup container. | string |
// | gatewayDetails | The gateway details configured for the AS server. | GatewayDetails |
// | ipV4FirewallSettings | The firewall settings for the AS server. | IPv4FirewallSettings |
// | managedMode | The managed mode of the server (0 = not managed, 1 = managed). | int |
// | querypoolConnectionMode | How the read-write server's participation in the query pool is controlled.It can have the following values: {ul}{li}readOnly - indicates that the read-write server is intended not to participate in query operations{/li}{li}all - indicates that the read-write server can participate in query operations{/li}{/ul}Specifying readOnly when capacity is 1 results in error. | 'All''ReadOnly' |
// | serverMonitorMode | The server monitor mode for AS server | int |
// | sku | The SKU of the Analysis Services resource. | ResourceSku |

// | Name | Description | Value |
// |-|-|-|
// | members | An array of administrator user identities. | string[] |

// | Name | Description | Value |
// |-|-|-|
// | gatewayResourceId | Gateway resource to be associated with the server. | string |

// | Name | Description | Value |
// |-|-|-|
// | enablePowerBIService | The indicator of enabling PBI service. | bool |
// | firewallRules | An array of firewall rules. | IPv4FirewallRule[] |

// | Name | Description | Value |
// |-|-|-|
// | firewallRuleName | The rule name. | string |
// | rangeEnd | The end range of IPv4. | string |
// | rangeStart | The start range of IPv4. | string |

// | Name | Description | Value |
// |-|-|-|
// | capacity | The number of instances in the read only query pool. | int |
// | name | Name of the SKU level. | string (required) |
// | tier | The name of the Azure pricing tier to which the SKU applies. | 'Basic''Development''Standard' |
