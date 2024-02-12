import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataboxedgeDataboxedgedevicesRolesMonitoringconfigProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:roles;

/**
   * The metrics configuration details
   */
readonly metricConfigurations: MetricConfiguration[];

/**
   * Host name for the IoT hub associated to the device.
   */
readonly counterSets: MetricCounterSet[];

/**
   * The MDM account to which the counters should be pushed.
   */
readonly mdmAccount?: string;

/**
   * The MDM namespace to which the counters should be pushed. This is required if MDMAccount is specified
   */
readonly metricNameSpace?: string;

/**
   * The Resource ID on which the metrics should be pushed.
   */
readonly resourceId: string;

/**
   * The counters that should be collected in this set.
   */
readonly counters: MetricCounter[];

/**
   * The additional dimensions to be added to metric.
   */
readonly additionalDimensions?: MetricDimension[];

/**
   * The dimension filter.
   */
readonly dimensionFilter?: MetricDimension[];

/**
   * The instance from which counter should be collected.
   */
readonly instance?: string;

/**
   * The dimension value.
   */
readonly sourceName: string;

/**
   * The dimension type.
   */
readonly sourceType: string;
}

/**
 * DataboxedgeDataboxedgedevicesRolesMonitoringconfig resource
 */
export class DataboxedgeDataboxedgedevicesRolesMonitoringconfig extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DataboxedgeDataboxedgedevicesRolesMonitoringconfigProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/monitoringConfig@2022-12-01-preview";
  }

  protected getResourceBody(props: DataboxedgeDataboxedgedevicesRolesMonitoringconfigProps): string {
    return JSON.stringify(
        {properties: {metricConfigurations: [{counterSets: [{counters: [{additionalDimensions: [{sourceName: "string", sourceType: "string"}], dimensionFilter: [{sourceName: "string", sourceType: "string"}], instance: "string", name: "string"}]}], mdmAccount: "string", metricNameSpace: "string", resourceId: "string"}]}}
    );
  }
}
