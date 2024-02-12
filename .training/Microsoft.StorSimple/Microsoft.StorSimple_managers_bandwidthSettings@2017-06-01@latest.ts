import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersBandwidthsettingsProps extends IAzAPIBaseProps {

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
