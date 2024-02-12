import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PolicyinsightsAttestationsProps extends IAzAPIBaseProps {

}

/**
 * PolicyinsightsAttestations resource
 */
export class PolicyinsightsAttestations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: PolicyinsightsAttestationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.PolicyInsights/attestations@2022-09-01";
  }

  protected getResourceBody(props: PolicyinsightsAttestationsProps): string {
    return JSON.stringify(
        {properties: {assessmentDate: "string", comments: "string", complianceState: "string", evidence: [{description: "string", sourceUri: "string"}], expiresOn: "string", owner: "string", policyAssignmentId: "string", policyDefinitionReferenceId: "string"}}
    );
  }
}
