import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface TimeseriesinsightsEnvironmentsEventsourcesProps extends IAzAPIBaseProps {

}

/**
 * TimeseriesinsightsEnvironmentsEventsources resource
 */
export class TimeseriesinsightsEnvironmentsEventsources extends AzAPIBase {
  constructor(scope: Construct, id: string, props: TimeseriesinsightsEnvironmentsEventsourcesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.TimeSeriesInsights/environments/eventSources@2021-06-30-preview";
  }

  protected getResourceBody(props: TimeseriesinsightsEnvironmentsEventsourcesProps): string {
    return JSON.stringify(
        {kind: "string", localTimestamp: {format: "Embedded", timeZoneOffset: {propertyName: "string"}}}
    );
  }
}
