import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataboxedgeDataboxedgedevicesBandwidthschedulesProps extends IAzAPIBaseProps {

}

/**
 * DataboxedgeDataboxedgedevicesBandwidthschedules resource
 */
export class DataboxedgeDataboxedgedevicesBandwidthschedules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DataboxedgeDataboxedgedevicesBandwidthschedulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataBoxEdge/dataBoxEdgeDevices/bandwidthSchedules@2022-12-01-preview";
  }

  protected getResourceBody(props: DataboxedgeDataboxedgedevicesBandwidthschedulesProps): string {
    return JSON.stringify(
        {properties: {days: ["string"], rateInMbps: "${int}", start: "string", stop: "string"}}
    );
  }
}
