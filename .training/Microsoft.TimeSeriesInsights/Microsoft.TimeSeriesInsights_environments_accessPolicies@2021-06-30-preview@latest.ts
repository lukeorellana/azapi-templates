import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface TimeseriesinsightsEnvironmentsAccesspoliciesProps extends IAzAPIBaseProps {

}

/**
 * TimeseriesinsightsEnvironmentsAccesspolicies resource
 */
export class TimeseriesinsightsEnvironmentsAccesspolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: TimeseriesinsightsEnvironmentsAccesspoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.TimeSeriesInsights/environments/accessPolicies@2021-06-30-preview";
  }

  protected getResourceBody(props: TimeseriesinsightsEnvironmentsAccesspoliciesProps): string {
    return JSON.stringify(
        {properties: {description: "string", principalObjectId: "string", roles: ["string"]}}
    );
  }
}
