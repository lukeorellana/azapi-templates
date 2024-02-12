import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogicIntegrationaccountsRosettanetprocessconfigurationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:numberegrationAccounts;

/**
   * The RosettaNet process configuration activity settings.
   */
readonly activitySettings: RosettaNetPipActivitySettings;

/**
   * The integration account RosettaNet ProcessConfiguration properties.
   */
readonly description?: string;

/**
   * The RosettaNet initiator role settings.
   */
readonly initiatorRoleSettings: RosettaNetPipRoleSettings;

/**
   * The metadata.
   */
readonly metadata?: object;

/**
   * The integration account RosettaNet process code.
   */
readonly processCode: string;

/**
   * The integration account RosettaNet process name.
   */
readonly processName: string;

/**
   * The integration account RosettaNet process version.
   */
readonly processVersion: string;

/**
   * The RosettaNet responder role settings.
   */
readonly responderRoleSettings: RosettaNetPipRoleSettings;

/**
   * The RosettaNet ProcessConfiguration acknowledgement settings.
   */
readonly acknowledgmentOfReceiptSettings: RosettaNetPipAcknowledgmentOfReceiptSettings;

/**
   * The RosettaNet ProcessConfiguration activity behavior.
   */
readonly activityBehavior: RosettaNetPipActivityBehavior;

/**
   * The RosettaNet ProcessConfiguration activity type.
   */
readonly activityType: 'BusinessTransaction''InformationDistribution''NotSpecified''Notification''QueryResponse''RequestConfirm''RequestResponse';

/**
   * The non-repudiation is required or not.
   */
readonly isNonRepudiationRequired: bool;

/**
   * The time to acknowledge in seconds.
   */
readonly timeToAcknowledgeInSeconds: number;

/**
   * The value indicating whether the RosettaNet PIP is used for a single action.
   */
readonly actionType: 'DoubleAction''NotSpecified''SingleAction';

/**
   * The value indicating whether authorization is required.
   */
readonly isAuthorizationRequired: bool;

/**
   * The value indicating whether secured transport is required.
   */
readonly isSecuredTransportRequired: bool;

/**
   * The value indicating whether non-repudiation is for origin and content.
   */
readonly nonRepudiationOfOriginAndContent: bool;

/**
   * The persistent confidentiality encryption scope.
   */
readonly persistentConfidentialityScope: 'None''NotSpecified''Payload''PayloadContainer';

/**
   * The value indicating whether the RosettaNet PIP communication is synchronous.
   */
readonly responseType: 'Async''NotSpecified''Sync';

/**
   * The value indicating retry count.
   */
readonly retryCount: number;

/**
   * The time to perform in seconds.
   */
readonly timeToPerformInSeconds: number;

/**
   * The action name.
   */
readonly action: string;

/**
   * The RosettaNet ProcessConfiguration business document.
   */
readonly businessDocument: RosettaNetPipBusinessDocument;

/**
   * The description.
   */
readonly description?: string;

/**
   * The role name.
   */
readonly role: string;

/**
   * The RosettaNet ProcessConfiguration role type.
   */
readonly roleType: 'Employee''Functional''NotSpecified''Organizational';

/**
   * The service name.
   */
readonly service: string;

/**
   * The service classification name.
   */
readonly serviceClassification: string;

/**
   * The business document description.
   */
readonly description?: string;

/**
   * The business document version.
   */
readonly version: string;
}

/**
 * LogicIntegrationaccountsRosettanetprocessconfigurations resource
 */
export class LogicIntegrationaccountsRosettanetprocessconfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LogicIntegrationaccountsRosettanetprocessconfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Logic/integrationAccounts/rosettanetprocessconfigurations@2016-06-01";
  }

  protected getResourceBody(props: LogicIntegrationaccountsRosettanetprocessconfigurationsProps): string {
    return JSON.stringify(
        {properties: {activitySettings: {acknowledgmentOfReceiptSettings: {isNonRepudiationRequired: "${bool}", timeToAcknowledgeInSeconds: "${int}"}, activityBehavior: {actionType: "string", isAuthorizationRequired: "${bool}", isSecuredTransportRequired: "${bool}", nonRepudiationOfOriginAndContent: "${bool}", persistentConfidentialityScope: "string", responseType: "string", retryCount: "${int}", timeToPerformInSeconds: "${int}"}, activityType: "string"}, description: "string", initiatorRoleSettings: {action: "string", businessDocument: {description: "string", name: "string", version: "string"}, description: "string", role: "string", roleType: "string", service: "string", serviceClassification: "string"}, metadata: {}, processCode: "string", processName: "string", processVersion: "string", responderRoleSettings: {action: "string", businessDocument: {description: "string", name: "string", version: "string"}, description: "string", role: "string", roleType: "string", service: "string", serviceClassification: "string"}}}
    );
  }
}
