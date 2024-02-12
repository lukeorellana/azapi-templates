import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersDevicesChapsettingsProps extends IAzAPIBaseProps {

}

/**
 * StorsimpleManagersDevicesChapsettings resource
 */
export class StorsimpleManagersDevicesChapsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorsimpleManagersDevicesChapsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorSimple/managers/devices/chapSettings@2016-10-01";
  }

  protected getResourceBody(props: StorsimpleManagersDevicesChapsettingsProps): string {
    return JSON.stringify(
        {properties: {password: {encryptionAlgorithm: "string", encryptionCertificateThumbprint: "string", value: "string"}}}
    );
  }
}
