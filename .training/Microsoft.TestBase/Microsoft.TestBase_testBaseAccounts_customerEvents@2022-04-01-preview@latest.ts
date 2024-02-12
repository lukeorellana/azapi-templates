import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface TestbaseTestbaseaccountsCustomereventsProps extends IAzAPIBaseProps {

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
