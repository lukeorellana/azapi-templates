import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface TimeseriesinsightsEnvironmentsReferencedatasetsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:environments;

/**
   * The reference data set key comparison behavior can be set using this property. By default, the value is 'Ordinal' - which means case sensitive key comparison will be performed while joining reference data with events or while adding new reference data. When 'OrdinalIgnoreCase' is set, case insensitive comparison will be used.
   */
readonly dataStringComparisonBehavior?: 'Ordinal''OrdinalIgnoreCase';

/**
   * The list of key properties for the reference data set.
   */
readonly keyProperties: ReferenceDataSetKeyProperty[];

/**
   * The type of the key property.
   */
readonly type?: 'Bool''DateTime''Double''String';
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
