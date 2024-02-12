import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersBandwidthsettingsProps extends IAzAPIBaseProps {
/**
   * The Kind of the object. Currently only Series8000 is supported
   */
readonly kind?: 'Series8000';

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:managers;

/**
   * The schedules.
   */
readonly schedules: BandwidthSchedule[];

/**
   * The days of the week when this schedule is applicable.
   */
readonly days: String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';

/**
   * The rate in Mbps.
   */
readonly rateInMbps: number;

/**
   * The start time of the schedule.
   */
readonly start: Time;

/**
   * The stop time of the schedule.
   */
readonly stop: Time;

/**
   * The hour.
   */
readonly hours: number;

/**
   * The minute.
   */
readonly minutes: number;

/**
   * The second.
   */
readonly seconds: number;
}

/**
 * StorsimpleManagersBandwidthsettings resource
 */
export class StorsimpleManagersBandwidthsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorsimpleManagersBandwidthsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorSimple/managers/bandwidthSettings@2017-06-01";
  }

  protected getResourceBody(props: StorsimpleManagersBandwidthsettingsProps): string {
    return JSON.stringify(
        {properties: {schedules: [{days: ["string"], rateInMbps: "${int}", start: {hours: "${int}", minutes: "${int}", seconds: "${int}"}, stop: {hours: "${int}", minutes: "${int}", seconds: "${int}"}}]}, kind: "Series8000"}
    );
  }
}
