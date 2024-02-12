import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersDevicesTimesettingsProps extends IAzAPIBaseProps {

}

/**
 * StorsimpleManagersDevicesTimesettings resource
 */
export class StorsimpleManagersDevicesTimesettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorsimpleManagersDevicesTimesettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorSimple/managers/devices/timeSettings@2017-06-01";
  }

  protected getResourceBody(props: StorsimpleManagersDevicesTimesettingsProps): string {
    return JSON.stringify(
        {properties: {primaryTimeServer: "string", secondaryTimeServer: ["string"], timeZone: "string"}, kind: "Series8000"}
    );
  }
}
