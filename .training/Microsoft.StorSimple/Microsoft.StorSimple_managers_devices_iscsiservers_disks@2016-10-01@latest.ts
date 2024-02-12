import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersDevicesIscsiserversDisksProps extends IAzAPIBaseProps {

}

/**
 * StorsimpleManagersDevicesIscsiserversDisks resource
 */
export class StorsimpleManagersDevicesIscsiserversDisks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorsimpleManagersDevicesIscsiserversDisksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorSimple/managers/devices/iscsiservers/disks@2016-10-01";
  }

  protected getResourceBody(props: StorsimpleManagersDevicesIscsiserversDisksProps): string {
    return JSON.stringify(
        {properties: {accessControlRecords: ["string"], dataPolicy: "string", description: "string", diskStatus: "string", monitoringStatus: "string", provisionedCapacityInBytes: "${int}"}}
    );
  }
}
