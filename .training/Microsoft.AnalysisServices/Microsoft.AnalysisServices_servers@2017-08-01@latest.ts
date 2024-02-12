import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AnalysisservicesServersProps extends IAzAPIBaseProps {

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
