import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface TimeseriesinsightsEnvironmentsReferencedatasetsProps extends IAzAPIBaseProps {

}

/**
 * TimeseriesinsightsEnvironmentsReferencedatasets resource
 */
export class TimeseriesinsightsEnvironmentsReferencedatasets extends AzAPIBase {
  constructor(scope: Construct, id: string, props: TimeseriesinsightsEnvironmentsReferencedatasetsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.TimeSeriesInsights/environments/referenceDataSets@2021-06-30-preview";
  }

  protected getResourceBody(props: TimeseriesinsightsEnvironmentsReferencedatasetsProps): string {
    return JSON.stringify(
        {properties: {dataStringComparisonBehavior: "string", keyProperties: [{name: "string", type: "string"}]}}
    );
  }
}
