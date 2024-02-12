import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AgfoodplatformFarmbeatsSolutionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:farmBeats;

/**
   * SaaS application Publisher Id.
   */
readonly marketplacePublisherId: string;

/**
   * SaaS application Offer Id.
   */
readonly offerId: string;

/**
   * SaaS application Plan Id.
   */
readonly planId: string;

/**
   * SaaS subscriptionId of the installed SaaS application.
   */
readonly saasSubscriptionId: string;

/**
   * SaaS subscription name of the installed SaaS application.
   */
readonly saasSubscriptionName: string;

/**
   * SaaS application Term Id.
   */
readonly termId: string;
}

/**
 * AgfoodplatformFarmbeatsSolutions resource
 */
export class AgfoodplatformFarmbeatsSolutions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AgfoodplatformFarmbeatsSolutionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AgFoodPlatform/farmBeats/solutions@2021-09-01-preview";
  }

  protected getResourceBody(props: AgfoodplatformFarmbeatsSolutionsProps): string {
    return JSON.stringify(
        {properties: {marketplacePublisherId: "string", offerId: "string", planId: "string", saasSubscriptionId: "string", saasSubscriptionName: "string", termId: "string"}}
    );
  }
}
