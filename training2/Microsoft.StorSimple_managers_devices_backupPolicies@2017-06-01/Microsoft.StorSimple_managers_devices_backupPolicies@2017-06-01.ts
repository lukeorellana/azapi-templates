import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersDevicesBackuppoliciesProps extends IAzAPIBaseProps {
/**
   * The Kind of the object. Currently only Series8000 is supported
   */
readonly kind?: 'Series8000';

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: devices;

/**
   * The path IDs of the volumes which are part of the backup policy.
   */
readonly volumeIds: string[];
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
