import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkFrontdoorwebapplicationfirewallpoliciesProps extends IAzAPIBaseProps {

}

/**
 * NetworkFrontdoorwebapplicationfirewallpolicies resource
 */
export class NetworkFrontdoorwebapplicationfirewallpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkFrontdoorwebapplicationfirewallpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/FrontDoorWebApplicationFirewallPolicies@2022-05-01";
  }

  protected getResourceBody(props: NetworkFrontdoorwebapplicationfirewallpoliciesProps): string {
    return JSON.stringify(
        {properties: {customRules: {rules: [{action: "string", enabledState: "string", matchConditions: [{matchValue: ["string"], matchVariable: "string", negateCondition: "${bool}", operator: "string", selector: "string", transforms: ["string"]}], name: "string", priority: "${int}", rateLimitDurationInMinutes: "${int}", rateLimitThreshold: "${int}", ruleType: "string"}]}, managedRules: {managedRuleSets: [{exclusions: [{matchVariable: "string", selector: "string", selectorMatchOperator: "string"}], ruleGroupOverrides: [{exclusions: [{matchVariable: "string", selector: "string", selectorMatchOperator: "string"}], ruleGroupName: "string", rules: [{action: "string", enabledState: "string", exclusions: [{matchVariable: "string", selector: "string", selectorMatchOperator: "string"}], ruleId: "string"}]}], ruleSetAction: "string", ruleSetType: "string", ruleSetVersion: "string"}]}, policySettings: {customBlockResponseBody: "string", customBlockResponseStatusCode: "${int}", enabledState: "string", mode: "string", redirectUrl: "string", requestBodyCheck: "string"}}, sku: {name: "string"}, etag: "string"}
    );
  }
}
