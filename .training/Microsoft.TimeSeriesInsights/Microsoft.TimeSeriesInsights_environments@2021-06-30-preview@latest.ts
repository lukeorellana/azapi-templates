import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface TimeseriesinsightsEnvironmentsProps extends IAzAPIBaseProps {

}

/**
 * TimeseriesinsightsEnvironments resource
 */
export class TimeseriesinsightsEnvironments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: TimeseriesinsightsEnvironmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.TimeSeriesInsights/environments@2021-06-30-preview";
  }

  protected getResourceBody(props: TimeseriesinsightsEnvironmentsProps): string {
    return JSON.stringify(
        {sku: {capacity: "${int}", name: "string"}, kind: "string"}
    );
  }
}
