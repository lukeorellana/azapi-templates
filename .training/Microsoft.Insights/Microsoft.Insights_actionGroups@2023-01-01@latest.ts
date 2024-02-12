import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsActiongroupsProps extends IAzAPIBaseProps {

}

/**
 * InsightsActiongroups resource
 */
export class InsightsActiongroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsActiongroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/actionGroups@2023-01-01";
  }

  protected getResourceBody(props: InsightsActiongroupsProps): string {
    return JSON.stringify(
        {properties: {armRoleReceivers: [{name: "string", roleId: "string", useCommonAlertSchema: "${bool}"}], automationRunbookReceivers: [{automationAccountId: "string", isGlobalRunbook: "${bool}", name: "string", runbookName: "string", serviceUri: "string", useCommonAlertSchema: "${bool}", webhookResourceId: "string"}], azureAppPushReceivers: [{emailAddress: "string", name: "string"}], azureFunctionReceivers: [{functionAppResourceId: "string", functionName: "string", httpTriggerUrl: "string", name: "string", useCommonAlertSchema: "${bool}"}], emailReceivers: [{emailAddress: "string", name: "string", useCommonAlertSchema: "${bool}"}], enabled: "${bool}", eventHubReceivers: [{eventHubName: "string", eventHubNameSpace: "string", name: "string", subscriptionId: "string", tenantId: "string", useCommonAlertSchema: "${bool}"}], groupShortName: "string", itsmReceivers: [{connectionId: "string", name: "string", region: "string", ticketConfiguration: "string", workspaceId: "string"}], logicAppReceivers: [{callbackUrl: "string", name: "string", resourceId: "string", useCommonAlertSchema: "${bool}"}], smsReceivers: [{countryCode: "string", name: "string", phoneNumber: "string"}], voiceReceivers: [{countryCode: "string", name: "string", phoneNumber: "string"}], webhookReceivers: [{identifierUri: "string", name: "string", objectId: "string", serviceUri: "string", tenantId: "string", useAadAuth: "${bool}", useCommonAlertSchema: "${bool}"}]}}
    );
  }
}
