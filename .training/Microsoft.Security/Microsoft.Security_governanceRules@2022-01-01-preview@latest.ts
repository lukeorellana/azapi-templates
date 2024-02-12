import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityGovernancerulesProps extends IAzAPIBaseProps {

}

/**
 * SecurityGovernancerules resource
 */
export class SecurityGovernancerules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityGovernancerulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/governanceRules@2022-01-01-preview";
  }

  protected getResourceBody(props: SecurityGovernancerulesProps): string {
    return JSON.stringify(
        {properties: {conditionSets: ["${object}"], description: "string", displayName: "string", excludedScopes: ["string"], governanceEmailNotification: {disableManagerEmailNotification: "${bool}", disableOwnerEmailNotification: "${bool}"}, includeMemberScopes: "${bool}", isDisabled: "${bool}", isGracePeriod: "${bool}", metadata: {}, ownerSource: {type: "string", value: "string"}, remediationTimeframe: "string", rulePriority: "${int}", ruleType: "string", sourceResourceType: "Assessments"}}
    );
  }
}
