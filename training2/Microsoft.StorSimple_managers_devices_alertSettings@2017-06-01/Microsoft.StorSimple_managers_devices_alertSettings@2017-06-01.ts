import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersDevicesAlertsettingsProps extends IAzAPIBaseProps {
/**
   * The Kind of the object. Currently only Series8000 is supported
   */
readonly kind?: 'Series8000';

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: devices;

/**
   * The alert notification email list.
   */
readonly additionalRecipientEmailList?: string[];

/**
   * The alert notification culture.
   */
readonly alertNotificationCulture?: string;

/**
   * Indicates whether email notification enabled or not.
   */
readonly emailNotification: 'Disabled''Enabled';

/**
   * The value indicating whether alert notification enabled for admin or not.
   */
readonly notificationToServiceOwners?: 'Disabled''Enabled';
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
