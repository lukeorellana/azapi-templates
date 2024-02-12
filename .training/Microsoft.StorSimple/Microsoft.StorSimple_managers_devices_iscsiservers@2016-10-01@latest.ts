import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersDevicesIscsiserversProps extends IAzAPIBaseProps {

}

/**
 * StorsimpleManagersDevicesIscsiservers resource
 */
export class StorsimpleManagersDevicesIscsiservers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorsimpleManagersDevicesIscsiserversProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorSimple/managers/devices/iscsiservers@2016-10-01";
  }

  protected getResourceBody(props: StorsimpleManagersDevicesIscsiserversProps): string {
    return JSON.stringify(
        {properties: {backupScheduleGroupId: "string", chapId: "string", description: "string", reverseChapId: "string", storageDomainId: "string"}}
    );
  }
}
