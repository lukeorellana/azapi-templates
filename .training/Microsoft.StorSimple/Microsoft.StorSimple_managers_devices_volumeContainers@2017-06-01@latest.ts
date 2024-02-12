import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersDevicesVolumecontainersProps extends IAzAPIBaseProps {

}

/**
 * StorsimpleManagersDevicesVolumecontainers resource
 */
export class StorsimpleManagersDevicesVolumecontainers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorsimpleManagersDevicesVolumecontainersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorSimple/managers/devices/volumeContainers@2017-06-01";
  }

  protected getResourceBody(props: StorsimpleManagersDevicesVolumecontainersProps): string {
    return JSON.stringify(
        {properties: {bandWidthRateInMbps: "${int}", bandwidthSettingId: "string", encryptionKey: {encryptionAlgorithm: "string", encryptionCertThumbprint: "string", value: "string"}, storageAccountCredentialId: "string"}, kind: "Series8000"}
    );
  }
}
