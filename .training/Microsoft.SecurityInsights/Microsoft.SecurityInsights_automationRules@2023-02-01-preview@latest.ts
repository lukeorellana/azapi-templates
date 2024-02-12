import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsAutomationrulesProps extends IAzAPIBaseProps {

}

/**
 * SecurityinsightsAutomationrules resource
 */
export class SecurityinsightsAutomationrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsAutomationrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/automationRules@2023-02-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsAutomationrulesProps): string {
    return JSON.stringify(
        {properties: {actions: [{order: "${int}", actionType: "string"}], displayName: "string", order: "${int}", triggeringLogic: {conditions: [{conditionType: "string"}], expirationTimeUtc: "string", isEnabled: "${bool}", triggersOn: "string", triggersWhen: "string"}}, etag: "string"}
    );
  }
}
