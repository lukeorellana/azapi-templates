import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SolutionsJitrequestsProps extends IAzAPIBaseProps {
/**
   * The parent application id.
   */
readonly applicationResourceId: string;

/**
   * The JIT authorization policies.
   */
readonly jitAuthorizationPolicies: JitAuthorizationPolicies[];

/**
   * The JIT request properties.
   */
readonly jitSchedulingPolicy: JitSchedulingPolicy;

/**
   * The the principal id that will be granted JIT access.
   */
readonly principalId: string;

/**
   * The role definition id that will be granted to the Principal.
   */
readonly roleDefinitionId: string;

/**
   * The required duration of the JIT request.
   */
readonly duration: string;

/**
   * The start time of the request.
   */
readonly startTime: string;

/**
   * The type of JIT schedule.
   */
readonly type: 'NotSpecified''Once''Recurring';
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
