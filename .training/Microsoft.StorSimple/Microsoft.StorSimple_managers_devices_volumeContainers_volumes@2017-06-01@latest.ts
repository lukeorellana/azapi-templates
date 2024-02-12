import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersDevicesVolumecontainersVolumesProps extends IAzAPIBaseProps {

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
