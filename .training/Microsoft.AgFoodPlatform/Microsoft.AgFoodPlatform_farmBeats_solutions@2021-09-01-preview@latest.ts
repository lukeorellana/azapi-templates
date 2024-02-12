import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AgfoodplatformFarmbeatsSolutionsProps extends IAzAPIBaseProps {

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
