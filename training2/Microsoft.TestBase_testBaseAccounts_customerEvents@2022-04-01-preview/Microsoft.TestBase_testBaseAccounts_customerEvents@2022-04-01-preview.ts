import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface TestbaseTestbaseaccountsCustomereventsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:testBaseAccounts;

/**
   * The name of the event subscribed to.
   */
readonly eventName: string;

/**
   * The notification event receivers.
   */
readonly receivers: NotificationEventReceiver[];

/**
   * The type of the notification event receiver.
   */
readonly receiverType?: string;

/**
   * The notification event receiver value.
   */
readonly receiverValue?: NotificationReceiverValue;

/**
   * The user object receiver value.
   */
readonly distributionGroupListReceiverValue?: DistributionGroupListReceiverValue;

/**
   * The user object receiver value.
   */
readonly subscriptionReceiverValue?: SubscriptionReceiverValue;

/**
   * The user object receiver value.
   */
readonly userObjectReceiverValue?: UserObjectReceiverValue;

/**
   * The list of distribution groups.
   */
readonly distributionGroups?: string[];

/**
   * The role of the notification receiver.
   */
readonly role?: string;

/**
   * The subscription id of the notification receiver.
   */
readonly subscriptionId?: string;

/**
   * The subscription name of the notification receiver.
   */
readonly subscriptionName?: string;

/**
   * user object ids.
   */
readonly userObjectIds?: string[];
}

/**
 * TestbaseTestbaseaccountsCustomerevents resource
 */
export class TestbaseTestbaseaccountsCustomerevents extends AzAPIBase {
  constructor(scope: Construct, id: string, props: TestbaseTestbaseaccountsCustomereventsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.TestBase/testBaseAccounts/customerEvents@2022-04-01-preview";
  }

  protected getResourceBody(props: TestbaseTestbaseaccountsCustomereventsProps): string {
    return JSON.stringify(
        {properties: {eventName: "string", receivers: [{receiverType: "string", receiverValue: {distributionGroupListReceiverValue: {distributionGroups: ["string"]}, subscriptionReceiverValue: {role: "string", subscriptionId: "string", subscriptionName: "string"}, userObjectReceiverValue: {userObjectIds: ["string"]}}}]}}
    );
  }
}
