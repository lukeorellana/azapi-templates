import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AdvisorRecommendationsSuppressionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:recommendations;

/**
   * The GUID of the suppression.
   */
readonly suppressionId?: string;

/**
   * The duration for which the suppression is valid.
   */
readonly ttl?: string;
}

/**
 * AdvisorRecommendationsSuppressions resource
 */
export class AdvisorRecommendationsSuppressions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AdvisorRecommendationsSuppressionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Advisor/recommendations/suppressions@2023-01-01";
  }

  protected getResourceBody(props: AdvisorRecommendationsSuppressionsProps): string {
    return JSON.stringify(
        {properties: {suppressionId: "string", ttl: "string"}}
    );
  }
}
