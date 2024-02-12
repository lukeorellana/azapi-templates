import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersDevicesIscsiserversDisksProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:iscsiservers;

/**
   * The access control records.
   */
readonly accessControlRecords: string[];

/**
   * The data policy.
   */
readonly dataPolicy: 'Cloud''Invalid''Local''Tiered';

/**
   * The description.
   */
readonly description?: string;

/**
   * The disk status.
   */
readonly diskStatus: 'Offline''Online';

/**
   * The monitoring.
   */
readonly monitoringStatus: 'Disabled''Enabled';

/**
   * The provisioned capacity in bytes.
   */
readonly provisionedCapacityInBytes: number;
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
