import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersDevicesBackuppoliciesProps extends IAzAPIBaseProps {

}

/**
 * StorsimpleManagersDevicesBackuppolicies resource
 */
export class StorsimpleManagersDevicesBackuppolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorsimpleManagersDevicesBackuppoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorSimple/managers/devices/backupPolicies@2017-06-01";
  }

  protected getResourceBody(props: StorsimpleManagersDevicesBackuppoliciesProps): string {
    return JSON.stringify(
        {properties: {volumeIds: ["string"]}, kind: "Series8000"}
    );
  }
}
