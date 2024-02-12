import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsScheduledqueryrulesProps extends IAzAPIBaseProps {

}

/**
 * InsightsScheduledqueryrules resource
 */
export class InsightsScheduledqueryrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsScheduledqueryrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/scheduledQueryRules@2023-03-15-preview";
  }

  protected getResourceBody(props: InsightsScheduledqueryrulesProps): string {
    return JSON.stringify(
        {properties: {actions: {actionGroups: ["string"], actionProperties: {}, customProperties: {}}, autoMitigate: "${bool}", checkWorkspaceAlertsStorageConfigured: "${bool}", criteria: {allOf: [{dimensions: [{name: "string", operator: "string", values: ["string"]}], failingPeriods: {minFailingPeriodsToAlert: "${int}", numberOfEvaluationPeriods: "${int}"}, metricMeasureColumn: "string", metricName: "string", operator: "string", query: "string", resourceIdColumn: "string", threshold: "${int}", timeAggregation: "string"}]}, description: "string", displayName: "string", enabled: "${bool}", evaluationFrequency: "string", muteActionsDuration: "string", overrideQueryTimeRange: "string", ruleResolveConfiguration: {autoResolved: "${bool}", timeToResolve: "string"}, scopes: ["string"], severity: "${int}", skipQueryValidation: "${bool}", targetResourceTypes: ["string"], windowSize: "string"}, kind: "string"}
    );
  }
}
