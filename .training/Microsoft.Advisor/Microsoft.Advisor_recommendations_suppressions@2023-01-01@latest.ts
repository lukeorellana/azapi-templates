import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AdvisorRecommendationsSuppressionsProps extends IAzAPIBaseProps {

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
