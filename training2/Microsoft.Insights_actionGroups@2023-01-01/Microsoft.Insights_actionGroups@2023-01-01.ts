import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsActiongroupsProps extends IAzAPIBaseProps {
/**
   * The list of ARM role receivers that are part of this action group. Roles are Azure RBAC roles and only built-in roles are supported.
   */
readonly armRoleReceivers?: ArmRoleReceiver[];

/**
   * The list of AutomationRunbook receivers that are part of this action group.
   */
readonly automationRunbookReceivers?: AutomationRunbookReceiver[];

/**
   * The list of AzureAppPush receivers that are part of this action group.
   */
readonly azureAppPushReceivers?: AzureAppPushReceiver[];

/**
   * The list of azure function receivers that are part of this action group.
   */
readonly azureFunctionReceivers?: AzureFunctionReceiver[];

/**
   * The list of email receivers that are part of this action group.
   */
readonly emailReceivers?: EmailReceiver[];

/**
   * Indicates whether this action group is enabled. If an action group is not enabled, then none of its receivers will receive communications.
   */
readonly enabled: bool;

/**
   * The list of event hub receivers that are part of this action group.
   */
readonly eventHubReceivers?: EventHubReceiver[];

/**
   * The short name of the action group. This will be used in SMS messages.
   */
readonly groupShortName: string Constranumbers:Max length = 12;

/**
   * The list of ITSM receivers that are part of this action group.
   */
readonly itsmReceivers?: ItsmReceiver[];

/**
   * The list of logic app receivers that are part of this action group.
   */
readonly logicAppReceivers?: LogicAppReceiver[];

/**
   * The list of SMS receivers that are part of this action group.
   */
readonly smsReceivers?: SmsReceiver[];

/**
   * The list of voice receivers that are part of this action group.
   */
readonly voiceReceivers?: VoiceReceiver[];

/**
   * The list of webhook receivers that are part of this action group.
   */
readonly webhookReceivers?: WebhookReceiver[];

/**
   * The arm role id.
   */
readonly roleId: string;

/**
   * Indicates whether to use common alert schema.
   */
readonly useCommonAlertSchema?: bool;

/**
   * The Azure automation account Id which holds this runbook and authenticate to Azure resource.
   */
readonly automationAccountId: string;

/**
   * Indicates whether this instance is global runbook.
   */
readonly isGlobalRunbook: bool;

/**
   * The name for this runbook.
   */
readonly runbookName: string;

/**
   * The URI where webhooks should be sent.
   */
readonly serviceUri?: string;

/**
   * Indicates whether to use common alert schema.
   */
readonly useCommonAlertSchema?: bool;

/**
   * The resource id for webhook linked to this runbook.
   */
readonly webhookResourceId: string;

/**
   * The email address registered for the Azure mobile app.
   */
readonly emailAddress: string;

/**
   * The azure resource id of the function app.
   */
readonly functionAppResourceId: string;

/**
   * The function name in the function app.
   */
readonly functionName: string;

/**
   * The http trigger url where http request sent to.
   */
readonly httpTriggerUrl: string;

/**
   * Indicates whether to use common alert schema.
   */
readonly useCommonAlertSchema?: bool;

/**
   * The email address of this receiver.
   */
readonly emailAddress: string;

/**
   * Indicates whether to use common alert schema.
   */
readonly useCommonAlertSchema?: bool;

/**
   * The name of the specific Event Hub queue
   */
readonly eventHubName: string;

/**
   * The Event Hub namespace
   */
readonly eventHubNameSpace: string;

/**
   * The Id for the subscription containing this event hub
   */
readonly subscriptionId: string;

/**
   * The tenant Id for the subscription containing this event hub
   */
readonly tenantId?: string;

/**
   * Indicates whether to use common alert schema.
   */
readonly useCommonAlertSchema?: bool;

/**
   * Unique identification of ITSM connection among multiple defined in above workspace.
   */
readonly connectionId: string;

/**
   * Region in which workspace resides. Supported values:'centralindia','japaneast','southeastasia','australiasoutheast','uksouth','westcentralus','canadacentral','eastus','westeurope'
   */
readonly region: string;

/**
   * JSON blob for the configurations of the ITSM action. CreateMultipleWorkItems option will be part of this blob as well.
   */
readonly ticketConfiguration: string;

/**
   * OMS LA instance identifier.
   */
readonly workspaceId: string;

/**
   * The callback url where http request sent to.
   */
readonly callbackUrl: string;

/**
   * The azure resource id of the logic app receiver.
   */
readonly resourceId: string;

/**
   * Indicates whether to use common alert schema.
   */
readonly useCommonAlertSchema?: bool;

/**
   * The country code of the SMS receiver.
   */
readonly countryCode: string;

/**
   * The phone number of the SMS receiver.
   */
readonly phoneNumber: string;

/**
   * The country code of the voice receiver.
   */
readonly countryCode: string;

/**
   * The phone number of the voice receiver.
   */
readonly phoneNumber: string;

/**
   * Indicates the identifier uri for aad auth.
   */
readonly identifierUri?: string;

/**
   * Indicates the webhook app object Id for aad auth.
   */
readonly objectId?: string;

/**
   * The URI where webhooks should be sent.
   */
readonly serviceUri: string;

/**
   * Indicates the tenant id for aad auth.
   */
readonly tenantId?: string;

/**
   * Indicates whether or not use AAD authentication.
   */
readonly useAadAuth?: bool;

/**
   * Indicates whether to use common alert schema.
   */
readonly useCommonAlertSchema?: bool;
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
