import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersDevicesIscsiserversProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: devices;

/**
   * The backup policy id.
   */
readonly backupScheduleGroupId: string;

/**
   * The chap id.
   */
readonly chapId?: string;

/**
   * The description.
   */
readonly description?: string;

/**
   * The reverse chap id.
   */
readonly reverseChapId?: string;

/**
   * The storage domain id.
   */
readonly storageDomainId: string;
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
