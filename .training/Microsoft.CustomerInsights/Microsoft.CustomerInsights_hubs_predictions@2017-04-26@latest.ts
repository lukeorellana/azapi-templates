import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CustomerinsightsHubsPredictionsProps extends IAzAPIBaseProps {

}

/**
 * CustomerinsightsHubsPredictions resource
 */
export class CustomerinsightsHubsPredictions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CustomerinsightsHubsPredictionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CustomerInsights/hubs/predictions@2017-04-26";
  }

  protected getResourceBody(props: CustomerinsightsHubsPredictionsProps): string {
    return JSON.stringify(
        {properties: {autoAnalyze: "${bool}", description: {}, displayName: {}, grades: [{gradeName: "string", maxScoreThreshold: "${int}", minScoreThreshold: "${int}"}], involvedInteractionTypes: ["string"], involvedKpiTypes: ["string"], involvedRelationships: ["string"], mappings: {grade: "string", reason: "string", score: "string"}, negativeOutcomeExpression: "string", positiveOutcomeExpression: "string", predictionName: "string", primaryProfileType: "string", scopeExpression: "string", scoreLabel: "string"}}
    );
  }
}
