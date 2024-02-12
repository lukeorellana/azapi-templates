import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersDevicesAlertsettingsProps extends IAzAPIBaseProps {

}

/**
 * StorsimpleManagersDevicesAlertsettings resource
 */
export class StorsimpleManagersDevicesAlertsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorsimpleManagersDevicesAlertsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorSimple/managers/devices/alertSettings@2017-06-01";
  }

  protected getResourceBody(props: StorsimpleManagersDevicesAlertsettingsProps): string {
    return JSON.stringify(
        {properties: {additionalRecipientEmailList: ["string"], alertNotificationCulture: "string", emailNotification: "string", notificationToServiceOwners: "string"}, kind: "Series8000"}
    );
  }
}
