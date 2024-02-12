import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersDevicesTimesettingsProps extends IAzAPIBaseProps {
/**
   * The Kind of the object. Currently only Series8000 is supported
   */
readonly kind?: 'Series8000';

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: devices;

/**
   * The primary Network Time Protocol (NTP) server name, like 'time.windows.com'.
   */
readonly primaryTimeServer?: string;

/**
   * The secondary Network Time Protocol (NTP) server name, like 'time.contoso.com'. It's optional.
   */
readonly secondaryTimeServer?: string[];

/**
   * The timezone of device, like '(UTC -06:00) Central America'
   */
readonly timeZone: string;
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
