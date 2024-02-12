import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogicIntegrationaccountsRosettanetprocessconfigurationsProps extends IAzAPIBaseProps {

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
