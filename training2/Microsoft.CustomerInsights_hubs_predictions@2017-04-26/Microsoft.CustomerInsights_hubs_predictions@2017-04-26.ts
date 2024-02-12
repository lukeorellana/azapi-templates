import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CustomerinsightsHubsPredictionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:hubs;

/**
   * Whether do auto analyze.
   */
readonly autoAnalyze: bool;

/**
   * Description of the prediction.
   */
readonly description?: object;

/**
   * Display name of the prediction.
   */
readonly displayName?: object;

/**
   * The prediction grades.
   */
readonly grades?: PredictionGradesItem[];

/**
   * Interaction types involved in the prediction.
   */
readonly involvedInteractionTypes?: string[];

/**
   * KPI types involved in the prediction.
   */
readonly involvedKpiTypes?: string[];

/**
   * Relationships involved in the prediction.
   */
readonly involvedRelationships?: string[];

/**
   * Definition of the link mapping of prediction.
   */
readonly mappings: PredictionMappings;

/**
   * Negative outcome expression.
   */
readonly negativeOutcomeExpression: string;

/**
   * Positive outcome expression.
   */
readonly positiveOutcomeExpression: string;

/**
   * Name of the prediction.
   */
readonly predictionName?: string;

/**
   * Primary profile type.
   */
readonly primaryProfileType: string;

/**
   * Scope expression.
   */
readonly scopeExpression: string;

/**
   * Score label.
   */
readonly scoreLabel: string;

/**
   * Name of the grade.
   */
readonly gradeName?: string;

/**
   * Maximum score threshold.
   */
readonly maxScoreThreshold?: number;

/**
   * Minimum score threshold.
   */
readonly minScoreThreshold?: number;

/**
   * The grade of the link mapping.
   */
readonly grade: string;

/**
   * The reason of the link mapping.
   */
readonly reason: string;

/**
   * The score of the link mapping.
   */
readonly score: string;
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
