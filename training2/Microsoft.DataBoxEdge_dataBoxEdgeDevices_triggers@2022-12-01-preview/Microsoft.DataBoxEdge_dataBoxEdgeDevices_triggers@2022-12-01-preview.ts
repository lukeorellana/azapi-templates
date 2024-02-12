import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataboxedgeDataboxedgedevicesTriggersProps extends IAzAPIBaseProps {
/**
   * Set the object type
   */
readonly kind: FileEventPeriodicTimerEvent;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:dataBoxEdgeDevices;

/**
   * Trigger Kind.
   */
readonly kind: 'FileEvent';

/**
   * A custom context tag typically used to correlate the trigger against its usage. For example, if a periodic timer trigger is intended for certain specific IoT modules in the device, the tag can be the name or the image URL of the module.
   */
readonly customContextTag?: string;

/**
   * Role sink info.
   */
readonly sinkInfo: RoleSinkInfo;

/**
   * File event source details.
   */
readonly sourceInfo: FileSourceInfo;

/**
   * Compute role ID.
   */
readonly roleId: string;

/**
   * File share ID.
   */
readonly shareId: string;

/**
   * Trigger Kind.
   */
readonly kind: 'PeriodicTimerEvent';

/**
   * A custom context tag typically used to correlate the trigger against its usage. For example, if a periodic timer trigger is intended for certain specific IoT modules in the device, the tag can be the name or the image URL of the module.
   */
readonly customContextTag?: string;

/**
   * Role Sink information.
   */
readonly sinkInfo: RoleSinkInfo;

/**
   * Periodic timer details.
   */
readonly sourceInfo: PeriodicTimerSourceInfo;

/**
   * Periodic frequency at which timer event needs to be raised. Supports daily, hourly, minutes, and seconds.
   */
readonly schedule: string;

/**
   * The time of the day that results in a valid trigger. Schedule is computed with reference to the time specified upto seconds. If timezone is not specified the time will considered to be in device timezone. The value will always be returned as UTC time.
   */
readonly startTime: string;

/**
   * Topic where periodic events are published to IoT device.
   */
readonly topic?: string;
}

/**
 * DataboxedgeDataboxedgedevicesTriggers resource
 */
export class DataboxedgeDataboxedgedevicesTriggers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DataboxedgeDataboxedgedevicesTriggersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers@2022-12-01-preview";
  }

  protected getResourceBody(props: DataboxedgeDataboxedgedevicesTriggersProps): string {
    return JSON.stringify(
        {kind: "string"}
    );
  }
}
