import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersDevicesFileserversSharesProps extends IAzAPIBaseProps {

}

/**
 * StorsimpleManagersDevicesFileserversShares resource
 */
export class StorsimpleManagersDevicesFileserversShares extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorsimpleManagersDevicesFileserversSharesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorSimple/managers/devices/fileservers/shares@2016-10-01";
  }

  protected getResourceBody(props: StorsimpleManagersDevicesFileserversSharesProps): string {
    return JSON.stringify(
        {properties: {adminUser: "string", dataPolicy: "string", description: "string", monitoringStatus: "string", provisionedCapacityInBytes: "${int}", shareStatus: "string"}}
    );
  }
}
