import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SolutionsJitrequestsProps extends IAzAPIBaseProps {

}

/**
 * SolutionsJitrequests resource
 */
export class SolutionsJitrequests extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SolutionsJitrequestsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Solutions/jitRequests@2021-07-01";
  }

  protected getResourceBody(props: SolutionsJitrequestsProps): string {
    return JSON.stringify(
        {properties: {applicationResourceId: "string", jitAuthorizationPolicies: [{principalId: "string", roleDefinitionId: "string"}], jitSchedulingPolicy: {duration: "string", startTime: "string", type: "string"}}}
    );
  }
}
