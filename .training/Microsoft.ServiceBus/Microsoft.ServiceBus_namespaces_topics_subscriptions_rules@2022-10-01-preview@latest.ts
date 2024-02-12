import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ServicebusNamespacesTopicsSubscriptionsRulesProps extends IAzAPIBaseProps {

}

/**
 * ServicebusNamespacesTopicsSubscriptionsRules resource
 */
export class ServicebusNamespacesTopicsSubscriptionsRules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ServicebusNamespacesTopicsSubscriptionsRulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ServiceBus/namespaces/topics/subscriptions/rules@2022-10-01-preview";
  }

  protected getResourceBody(props: ServicebusNamespacesTopicsSubscriptionsRulesProps): string {
    return JSON.stringify(
        {properties: {action: {compatibilityLevel: "${int}", requiresPreprocessing: "${bool}", sqlExpression: "string"}, correlationFilter: {contentType: "string", correlationId: "string", label: "string", messageId: "string", properties: {}, replyTo: "string", replyToSessionId: "string", requiresPreprocessing: "${bool}", sessionId: "string", to: "string"}, filterType: "string", sqlFilter: {compatibilityLevel: "${int}", requiresPreprocessing: "${bool}", sqlExpression: "string"}}}
    );
  }
}
