import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsOnboardingstatesProps extends IAzAPIBaseProps {

}

/**
 * SecurityinsightsOnboardingstates resource
 */
export class SecurityinsightsOnboardingstates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsOnboardingstatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/onboardingStates@2023-02-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsOnboardingstatesProps): string {
    return JSON.stringify(
        {properties: {customerManagedKey: "${bool}"}, etag: "string"}
    );
  }
}
