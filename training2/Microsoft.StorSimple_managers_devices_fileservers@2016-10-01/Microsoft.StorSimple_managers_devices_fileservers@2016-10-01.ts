import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersDevicesFileserversProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: devices;

/**
   * The backup policy id.
   */
readonly backupScheduleGroupId: string;

/**
   * The description of the file server
   */
readonly description?: string;

/**
   * Domain of the file server
   */
readonly domainName: string;

/**
   * The storage domain id.
   */
readonly storageDomainId: string;
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
