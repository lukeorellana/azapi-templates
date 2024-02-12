import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsActivitylogalertsProps extends IAzAPIBaseProps {

}

/**
 * InsightsActivitylogalerts resource
 */
export class InsightsActivitylogalerts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsActivitylogalertsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/activityLogAlerts@2023-01-01-preview";
  }

  protected getResourceBody(props: InsightsActivitylogalertsProps): string {
    return JSON.stringify(
        {properties: {actions: {actionGroups: [{actionGroupId: "string", actionProperties: {}, webhookProperties: {}}]}, condition: {allOf: [{anyOf: [{containsAny: ["string"], equals: "string", field: "string"}], containsAny: ["string"], equals: "string", field: "string"}]}, description: "string", enabled: "${bool}", scopes: ["string"], tenantScope: "string"}}
    );
  }
}
