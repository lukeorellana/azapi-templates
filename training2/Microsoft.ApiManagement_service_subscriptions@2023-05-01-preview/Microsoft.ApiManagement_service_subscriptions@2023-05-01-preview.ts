import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceSubscriptionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:service;

/**
   * Determines whether tracing can be enabled
   */
readonly allowTracing?: bool;

/**
   * Subscription name.
   */
readonly displayName: string;

/**
   * User (user id path) for whom subscription is being created in form /users/{userId}
   */
readonly ownerId?: string;

/**
   * Primary subscription key. If not specified during request key will be generated automatically.
   */
readonly primaryKey?: string;

/**
   * Scope like /products/{productId} or /apis or /apis/{apiId}.
   */
readonly scope: string;

/**
   * Secondary subscription key. If not specified during request key will be generated automatically.
   */
readonly secondaryKey?: string;

/**
   * Initial subscription state. If no value is specified, subscription is created with Submitted state. Possible states are * active â the subscription is active, * suspended â the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted â the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected â the subscription request has been denied by an administrator, * cancelled â the subscription has been cancelled by the developer or administrator, * expired â the subscription reached its expiration date and was deactivated.
   */
readonly state?: 'active''cancelled''expired''rejected''submitted''suspended';
}

/**
 * ApimanagementServiceSubscriptions resource
 */
export class ApimanagementServiceSubscriptions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceSubscriptionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/subscriptions@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceSubscriptionsProps): string {
    return JSON.stringify(
        {properties: {allowTracing: "${bool}", displayName: "string", ownerId: "string", primaryKey: "string", scope: "string", secondaryKey: "string", state: "string"}}
    );
  }
}
