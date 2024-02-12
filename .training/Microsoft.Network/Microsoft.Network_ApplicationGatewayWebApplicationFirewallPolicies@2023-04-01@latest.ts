import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkApplicationgatewaywebapplicationfirewallpoliciesProps extends IAzAPIBaseProps {

}

/**
 * NetworkApplicationgatewaywebapplicationfirewallpolicies resource
 */
export class NetworkApplicationgatewaywebapplicationfirewallpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkApplicationgatewaywebapplicationfirewallpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies@2023-04-01";
  }

  protected getResourceBody(props: NetworkApplicationgatewaywebapplicationfirewallpoliciesProps): string {
    return JSON.stringify(
        {properties: {customRules: [{action: "string", groupByUserSession: [{groupByVariables: [{variableName: "string"}]}], matchConditions: [{matchValues: ["string"], matchVariables: [{selector: "string", variableName: "string"}], negationConditon: "${bool}", operator: "string", transforms: ["string"]}], name: "string", priority: "${int}", rateLimitDuration: "string", rateLimitThreshold: "${int}", ruleType: "string", state: "string"}], managedRules: {exclusions: [{exclusionManagedRuleSets: [{ruleGroups: [{ruleGroupName: "string", rules: [{ruleId: "string"}]}], ruleSetType: "string", ruleSetVersion: "string"}], matchVariable: "string", selector: "string", selectorMatchOperator: "string"}], managedRuleSets: [{ruleGroupOverrides: [{ruleGroupName: "string", rules: [{action: "string", ruleId: "string", state: "string"}]}], ruleSetType: "string", ruleSetVersion: "string"}]}, policySettings: {customBlockResponseBody: "string", customBlockResponseStatusCode: "${int}", fileUploadEnforcement: "${bool}", fileUploadLimitInMb: "${int}", logScrubbing: {scrubbingRules: [{matchVariable: "string", selector: "string", selectorMatchOperator: "string", state: "string"}], state: "string"}, maxRequestBodySizeInKb: "${int}", mode: "string", requestBodyCheck: "${bool}", requestBodyEnforcement: "${bool}", requestBodyInspectLimitInKB: "${int}", state: "string"}}}
    );
  }
}
