import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PolicyinsightsRemediationsProps extends IAzAPIBaseProps {

}

/**
 * PolicyinsightsRemediations resource
 */
export class PolicyinsightsRemediations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: PolicyinsightsRemediationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.PolicyInsights/remediations@2021-10-01";
  }

  protected getResourceBody(props: PolicyinsightsRemediationsProps): string {
    return JSON.stringify(
        {properties: {failureThreshold: {percentage: "${int}"}, filters: {locations: ["string"]}, parallelDeployments: "${int}", policyAssignmentId: "string", policyDefinitionReferenceId: "string", resourceCount: "${int}", resourceDiscoveryMode: "string"}}
    );
  }
}
