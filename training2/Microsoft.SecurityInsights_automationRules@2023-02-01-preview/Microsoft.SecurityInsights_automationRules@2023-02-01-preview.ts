import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsAutomationrulesProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * Etag of the azure resource
   */
readonly etag?: string;

/**
   * The actions to execute when the automation rule is triggered.
   */
readonly actions: AutomationRuleAction[];

/**
   * The display name of the automation rule.
   */
readonly displayName: string;

/**
   * The order of execution of the automation rule.
   */
readonly order: number;

/**
   * Describes automation rule triggering logic.
   */
readonly triggeringLogic: AutomationRuleTriggeringLogic;

/**
   * 
   */
readonly order: number;

/**
   * Set the object type
   */
readonly actionType: AddIncidentTaskModifyPropertiesRunPlaybook;

/**
   * The type of the automation rule action.
   */
readonly actionType: 'AddIncidentTask';

/**
   * 
   */
readonly actionConfiguration?: AddIncidentTaskActionProperties;

/**
   * The description of the task.
   */
readonly description?: string;

/**
   * The title of the task.
   */
readonly title: string;

/**
   * The type of the automation rule action.
   */
readonly actionType: 'ModifyProperties';

/**
   * 
   */
readonly actionConfiguration?: IncidentPropertiesAction;

/**
   * The reason the incident was closed
   */
readonly classification?: 'BenignPositive''FalsePositive''TruePositive''Undetermined';

/**
   * Describes the reason the incident was closed.
   */
readonly classificationComment?: string;

/**
   * The classification reason the incident was closed with
   */
readonly classificationReason?: 'InaccurateData''IncorrectAlertLogic''SuspiciousActivity''SuspiciousButExpected';

/**
   * List of labels to add to the incident.
   */
readonly labels?: IncidentLabel[];

/**
   * Information on the user an incident is assigned to
   */
readonly owner?: IncidentOwnerInfo;

/**
   * The severity of the incident
   */
readonly severity?: 'High''Informational''Low''Medium';

/**
   * The status of the incident
   */
readonly status?: 'Active''Closed''New';

/**
   * The name of the label
   */
readonly labelName: string;

/**
   * The name of the user the incident is assigned to.
   */
readonly assignedTo?: string;

/**
   * The email of the user the incident is assigned to.
   */
readonly email?: string;

/**
   * The object id of the user the incident is assigned to.
   */
readonly objectId?: string;

/**
   * The type of the owner the incident is assigned to.
   */
readonly ownerType?: 'Group''Unknown''User';

/**
   * The user principal name of the user the incident is assigned to.
   */
readonly userPrincipalName?: string;

/**
   * The type of the automation rule action.
   */
readonly actionType: 'RunPlaybook';

/**
   * 
   */
readonly actionConfiguration?: PlaybookActionProperties;

/**
   * The resource id of the playbook resource.
   */
readonly logicAppResourceId?: string;

/**
   * The tenant id of the playbook resource.
   */
readonly tenantId?: string;

/**
   * The conditions to evaluate to determine if the automation rule should be triggered on a given object.
   */
readonly conditions?: AutomationRuleCondition[];

/**
   * Determines when the automation rule should automatically expire and be disabled.
   */
readonly expirationTimeUtc?: string;

/**
   * Determines whether the automation rule is enabled or disabled.
   */
readonly isEnabled: bool;

/**
   * 
   */
readonly triggersOn: 'Alerts''Incidents';

/**
   * 
   */
readonly triggersWhen: 'Created''Updated';

/**
   * Set the object type
   */
readonly conditionType: BooleanPropertyPropertyArrayPropertyArrayChangedPropertyChanged;

/**
   * 
   */
readonly conditionType: 'Boolean';

/**
   * 
   */
readonly conditionProperties?: AutomationRuleBooleanCondition;

/**
   * 
   */
readonly innerConditions?: AutomationRuleCondition[];

/**
   * 
   */
readonly operator?: 'And''Or';

/**
   * 
   */
readonly conditionType: 'Property';

/**
   * 
   */
readonly conditionProperties?: AutomationRulePropertyValuesCondition;

/**
   * 
   */
readonly operator?: 'Contains''EndsWith''Equals''NotContains''NotEndsWith''NotEquals''NotStartsWith''StartsWith';

/**
   * The property to evaluate in an automation rule property condition.
   */
readonly propertyName?: 'AccountAadTenantId''AccountAadUserId''AccountNTDomain''AccountName''AccountObjectGuid''AccountPUID''AccountSid''AccountUPNSuffix''AlertAnalyticRuleIds''AlertProductNames''AzureResourceResourceId''AzureResourceSubscriptionId''CloudApplicationAppId''CloudApplicationAppName''DNSDomainName''FileDirectory''FileHashValue''FileName''HostAzureID''HostNTDomain''HostName''HostNetBiosName''HostOSVersion''IPAddress''IncidentCustomDetailsKey''IncidentCustomDetailsValue''IncidentDescription''IncidentLabel''IncidentProviderName''IncidentRelatedAnalyticRuleIds''IncidentSeverity''IncidentStatus''IncidentTactics''IncidentTitle''IncidentUpdatedBySource''IoTDeviceId''IoTDeviceModel''IoTDeviceName''IoTDeviceOperatingSystem''IoTDeviceType''IoTDeviceVendor''MailMessageDeliveryAction''MailMessageDeliveryLocation''MailMessageP1Sender''MailMessageP2Sender''MailMessageRecipient''MailMessageSenderIP''MailMessageSubject''MailboxDisplayName''MailboxPrimaryAddress''MailboxUPN''MalwareCategory''MalwareName''ProcessCommandLine''ProcessId''RegistryKey''RegistryValueData''Url';

/**
   * 
   */
readonly propertyValues?: string[];

/**
   * 
   */
readonly conditionType: 'PropertyArray';

/**
   * 
   */
readonly conditionProperties?: AutomationRulePropertyArrayValuesCondition;

/**
   * 
   */
readonly arrayConditionType?: 'AnyItem';

/**
   * 
   */
readonly arrayType?: 'CustomDetailValues''CustomDetails';

/**
   * 
   */
readonly itemConditions?: AutomationRuleCondition[];

/**
   * 
   */
readonly conditionType: 'PropertyArrayChanged';

/**
   * 
   */
readonly conditionProperties?: AutomationRulePropertyArrayChangedValuesCondition;

/**
   * 
   */
readonly arrayType?: 'Alerts''Comments''Labels''Tactics';

/**
   * 
   */
readonly changeType?: 'Added';

/**
   * 
   */
readonly conditionType: 'PropertyChanged';

/**
   * 
   */
readonly conditionProperties?: AutomationRulePropertyValuesChangedCondition;

/**
   * 
   */
readonly changeType?: 'ChangedFrom''ChangedTo';

/**
   * 
   */
readonly operator?: 'Contains''EndsWith''Equals''NotContains''NotEndsWith''NotEquals''NotStartsWith''StartsWith';

/**
   * 
   */
readonly propertyName?: 'IncidentOwner''IncidentSeverity''IncidentStatus';

/**
   * 
   */
readonly propertyValues?: string[];
}

/**
 * SecurityinsightsAutomationrules resource
 */
export class SecurityinsightsAutomationrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsAutomationrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/automationRules@2023-02-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsAutomationrulesProps): string {
    return JSON.stringify(
        {properties: {actions: [{order: "${int}", actionType: "string"}], displayName: "string", order: "${int}", triggeringLogic: {conditions: [{conditionType: "string"}], expirationTimeUtc: "string", isEnabled: "${bool}", triggersOn: "string", triggersWhen: "string"}}, etag: "string"}
    );
  }
}
