import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataboxedgeDataboxedgedevicesBandwidthschedulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:dataBoxEdgeDevices;

/**
   * The days of the week when this schedule is applicable.
   */
readonly days: String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';

/**
   * The bandwidth rate in Mbps.
   */
readonly rateInMbps: number;

/**
   * The start time of the schedule in UTC.
   */
readonly start: string;

/**
   * The stop time of the schedule in UTC.
   */
readonly stop: string;
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
