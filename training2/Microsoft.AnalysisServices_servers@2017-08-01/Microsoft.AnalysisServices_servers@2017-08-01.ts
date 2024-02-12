import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AnalysisservicesServersProps extends IAzAPIBaseProps {
/**
   * The SKU of the Analysis Services resource.
   */
readonly sku: ResourceSku;

/**
   * A collection of AS server administrators
   */
readonly asAdministrators?: ServerAdministrators;

/**
   * The SAS container URI to the backup container.
   */
readonly backupBlobContainerUri?: string;

/**
   * The gateway details configured for the AS server.
   */
readonly gatewayDetails?: GatewayDetails;

/**
   * The firewall settings for the AS server.
   */
readonly ipV4FirewallSettings?: IPv4FirewallSettings;

/**
   * The managed mode of the server (0 = not managed, 1 = managed).
   */
readonly managedMode?: number;

/**
   * How the read-write server's participation in the query pool is controlled.It can have the following values: {ul}{li}readOnly - indicates that the read-write server is intended not to participate in query operations{/li}{li}all - indicates that the read-write server can participate in query operations{/li}{/ul}Specifying readOnly when capacity is 1 results in error.
   */
readonly querypoolConnectionMode?: 'All''ReadOnly';

/**
   * The server monitor mode for AS server
   */
readonly serverMonitorMode?: number;

/**
   * The SKU of the Analysis Services resource.
   */
readonly sku?: ResourceSku;

/**
   * An array of administrator user identities.
   */
readonly members?: string[];

/**
   * Gateway resource to be associated with the server.
   */
readonly gatewayResourceId?: string;

/**
   * The indicator of enabling PBI service.
   */
readonly enablePowerBIService?: bool;

/**
   * An array of firewall rules.
   */
readonly firewallRules?: IPv4FirewallRule[];

/**
   * The rule name.
   */
readonly firewallRuleName?: string;

/**
   * The end range of IPv4.
   */
readonly rangeEnd?: string;

/**
   * The start range of IPv4.
   */
readonly rangeStart?: string;

/**
   * The number of instances in the read only query pool.
   */
readonly capacity?: number;

/**
   * The name of the Azure pricing tier to which the SKU applies.
   */
readonly tier?: 'Basic''Development''Standard';
}

/**
 * AnalysisservicesServers resource
 */
export class AnalysisservicesServers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AnalysisservicesServersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AnalysisServices/servers@2017-08-01";
  }

  protected getResourceBody(props: AnalysisservicesServersProps): string {
    return JSON.stringify(
        {properties: {asAdministrators: {members: ["string"]}, backupBlobContainerUri: "string", gatewayDetails: {gatewayResourceId: "string"}, ipV4FirewallSettings: {enablePowerBIService: "${bool}", firewallRules: [{firewallRuleName: "string", rangeEnd: "string", rangeStart: "string"}]}, managedMode: "${int}", querypoolConnectionMode: "string", serverMonitorMode: "${int}", sku: {capacity: "${int}", name: "string", tier: "string"}}, sku: {capacity: "${int}", name: "string", tier: "string"}}
    );
  }
}
