import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsDiagnosticsettingsProps extends IAzAPIBaseProps {

}

/**
 * InsightsDiagnosticsettings resource
 */
export class InsightsDiagnosticsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsDiagnosticsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/diagnosticSettings@2021-05-01-preview";
  }

  protected getResourceBody(props: InsightsDiagnosticsettingsProps): string {
    return JSON.stringify(
        {properties: {eventHubAuthorizationRuleId: "string", eventHubName: "string", logAnalyticsDestinationType: "string", logs: [{category: "string", categoryGroup: "string", enabled: "${bool}", retentionPolicy: {days: "${int}", enabled: "${bool}"}}], marketplacePartnerId: "string", metrics: [{category: "string", enabled: "${bool}", retentionPolicy: {days: "${int}", enabled: "${bool}"}, timeGrain: "string"}], serviceBusRuleId: "string", storageAccountId: "string", workspaceId: "string"}}
    );
  }
}
