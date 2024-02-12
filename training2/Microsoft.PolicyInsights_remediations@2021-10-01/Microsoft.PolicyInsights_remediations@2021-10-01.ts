import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PolicyinsightsRemediationsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * The remediation failure threshold settings
   */
readonly failureThreshold?: RemediationPropertiesFailureThreshold;

/**
   * The filters that will be applied to determine which resources to remediate.
   */
readonly filters?: RemediationFilters;

/**
   * Determines how many resources to remediate at any given time. Can be used to increase or reduce the pace of the remediation. If not provided, the default parallel deployments value is used.
   */
readonly parallelDeployments?: number;

/**
   * The resource ID of the policy assignment that should be remediated.
   */
readonly policyAssignmentId?: string;

/**
   * The policy definition reference ID of the individual definition that should be remediated. Required when the policy assignment being remediated assigns a policy set definition.
   */
readonly policyDefinitionReferenceId?: string;

/**
   * Determines the max number of resources that can be remediated by the remediation job. If not provided, the default resource count is used.
   */
readonly resourceCount?: number;

/**
   * The way resources to remediate are discovered. Defaults to ExistingNonCompliant if not specified.
   */
readonly resourceDiscoveryMode?: 'ExistingNonCompliant''ReEvaluateCompliance';

/**
   * A number between 0.0 to 1.0 representing the percentage failure threshold. The remediation will fail if the percentage of failed remediation operations (i.e. failed deployments) exceeds this threshold.
   */
readonly percentage?: number;

/**
   * The resource locations that will be remediated.
   */
readonly locations?: string[];
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
