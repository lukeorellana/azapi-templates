import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataboxedgeDataboxedgedevicesRolesMonitoringconfigProps extends IAzAPIBaseProps {

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
