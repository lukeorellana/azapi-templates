import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ServicebusNamespacesTopicsSubscriptionsRulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:subscriptions;

/**
   * Represents the filter actions which are allowed for the transformation of a message that have been matched by a filter expression.
   */
readonly action?: Action;

/**
   * Properties of correlationFilter
   */
readonly correlationFilter?: CorrelationFilter;

/**
   * Filter type that is evaluated against a BrokeredMessage.
   */
readonly filterType?: 'CorrelationFilter''SqlFilter';

/**
   * Properties of sqlFilter
   */
readonly sqlFilter?: SqlFilter;

/**
   * This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20.
   */
readonly compatibilityLevel?: number;

/**
   * Value that indicates whether the rule action requires preprocessing.
   */
readonly requiresPreprocessing?: bool;

/**
   * SQL expression. e.g. MyProperty='ABC'
   */
readonly sqlExpression?: string;

/**
   * Content type of the message.
   */
readonly contentType?: string;

/**
   * Identifier of the correlation.
   */
readonly correlationId?: string;

/**
   * Application specific label.
   */
readonly label?: string;

/**
   * Identifier of the message.
   */
readonly messageId?: string;

/**
   * Address of the queue to reply to.
   */
readonly replyTo?: string;

/**
   * Session identifier to reply to.
   */
readonly replyToSessionId?: string;

/**
   * Value that indicates whether the rule action requires preprocessing.
   */
readonly requiresPreprocessing?: bool;

/**
   * Session identifier.
   */
readonly sessionId?: string;

/**
   * Address to send to.
   */
readonly to?: string;

/**
   * This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20.
   */
readonly compatibilityLevel?: number;

/**
   * Value that indicates whether the rule action requires preprocessing.
   */
readonly requiresPreprocessing?: bool;

/**
   * The SQL expression. e.g. MyProperty='ABC'
   */
readonly sqlExpression?: string;
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
