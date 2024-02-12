import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersDevicesVolumecontainersVolumesProps extends IAzAPIBaseProps {
/**
   * The Kind of the object. Currently only Series8000 is supported
   */
readonly kind?: 'Series8000';

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:volumeContainers;

/**
   * The IDs of the access control records, associated with the volume.
   */
readonly accessControlRecordIds: string[];

/**
   * The monitoring status of the volume.
   */
readonly monitoringStatus: 'Disabled''Enabled';

/**
   * The size of the volume in bytes.
   */
readonly sizeInBytes: number;

/**
   * The volume status.
   */
readonly volumeStatus: 'Offline''Online';

/**
   * The type of the volume.
   */
readonly volumeType: 'Archival''LocallyPinned''Tiered';
}

/**
 * StorsimpleManagersDevicesVolumecontainersVolumes resource
 */
export class StorsimpleManagersDevicesVolumecontainersVolumes extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorsimpleManagersDevicesVolumecontainersVolumesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorSimple/managers/devices/volumeContainers/volumes@2017-06-01";
  }

  protected getResourceBody(props: StorsimpleManagersDevicesVolumecontainersVolumesProps): string {
    return JSON.stringify(
        {properties: {accessControlRecordIds: ["string"], monitoringStatus: "string", sizeInBytes: "${int}", volumeStatus: "string", volumeType: "string"}, kind: "Series8000"}
    );
  }
}
