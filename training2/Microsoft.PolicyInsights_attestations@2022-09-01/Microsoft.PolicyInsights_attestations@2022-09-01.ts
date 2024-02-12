import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PolicyinsightsAttestationsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * The time the evidence was assessed
   */
readonly assessmentDate?: string;

/**
   * Comments describing why this attestation was created.
   */
readonly comments?: string;

/**
   * The compliance state that should be set on the resource.
   */
readonly complianceState?: 'Compliant''NonCompliant''Unknown';

/**
   * The evidence supporting the compliance state set in this attestation.
   */
readonly evidence?: AttestationEvidence[];

/**
   * The time the compliance state should expire.
   */
readonly expiresOn?: string;

/**
   * Additional metadata for this attestation
   */
readonly metadata?: For Bicep, you can use theany()function.;

/**
   * The person responsible for setting the state of the resource. This value is typically an Azure Active Directory object ID.
   */
readonly owner?: string;

/**
   * The resource ID of the policy assignment that the attestation is setting the state for.
   */
readonly policyAssignmentId: string;

/**
   * The policy definition reference ID from a policy set definition that the attestation is setting the state for. If the policy assignment assigns a policy set definition the attestation can choose a definition within the set definition with this property or omit this and set the state for the entire set definition.
   */
readonly policyDefinitionReferenceId?: string;

/**
   * The description for this piece of evidence.
   */
readonly description?: string;

/**
   * The URI location of the evidence.
   */
readonly sourceUri?: string;
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
