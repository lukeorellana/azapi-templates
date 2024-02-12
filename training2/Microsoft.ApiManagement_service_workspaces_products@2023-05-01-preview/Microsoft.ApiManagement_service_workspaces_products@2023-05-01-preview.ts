import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceWorkspacesProductsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * whether subscription approval is required. If false, new subscriptions will be approved automatically enabling developers to call the productâs APIs immediately after subscribing. If true, administrators must manually approve the subscription before the developer can any of the productâs APIs. Can be present only if subscriptionRequired property is present and has a value of false.
   */
readonly approvalRequired?: bool;

/**
   * Product description. May include HTML formatting tags.
   */
readonly description?: string;

/**
   * Product name.
   */
readonly displayName: string;

/**
   * whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is notPublished.
   */
readonly state?: 'notPublished''published';

/**
   * Whether a product subscription is required for accessing APIs included in this product. If true, the product is referred to as "protected" and a valid subscription key is required for a request to an API included in the product to succeed. If false, the product is referred to as "open" and requests to an API included in the product can be made without a subscription key. If property is omitted when creating a new product it's value is assumed to be true.
   */
readonly subscriptionRequired?: bool;

/**
   * Whether the number of subscriptions a user can have to this product at the same time. Set to null or omit to allow unlimited per user subscriptions. Can be present only if subscriptionRequired property is present and has a value of false.
   */
readonly subscriptionsLimit?: number;

/**
   * Product terms of use. Developers trying to subscribe to the product will be presented and required to accept these terms before they can complete the subscription process.
   */
readonly terms?: string;
}

/**
 * ApimanagementServiceWorkspacesProducts resource
 */
export class ApimanagementServiceWorkspacesProducts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceWorkspacesProductsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/workspaces/products@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceWorkspacesProductsProps): string {
    return JSON.stringify(
        {properties: {approvalRequired: "${bool}", description: "string", displayName: "string", state: "string", subscriptionRequired: "${bool}", subscriptionsLimit: "${int}", terms: "string"}}
    );
  }
}
