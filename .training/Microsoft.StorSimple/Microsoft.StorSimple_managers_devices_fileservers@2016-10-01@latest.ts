import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersDevicesFileserversProps extends IAzAPIBaseProps {

}

/**
 * StorsimpleManagersDevicesFileservers resource
 */
export class StorsimpleManagersDevicesFileservers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorsimpleManagersDevicesFileserversProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorSimple/managers/devices/fileservers@2016-10-01";
  }

  protected getResourceBody(props: StorsimpleManagersDevicesFileserversProps): string {
    return JSON.stringify(
        {properties: {backupScheduleGroupId: "string", description: "string", domainName: "string", storageDomainId: "string"}}
    );
  }
}
