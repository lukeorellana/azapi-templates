import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevtestlabLabsCustomimagesProps extends IAzAPIBaseProps {

}

/**
 * DevtestlabLabsCustomimages resource
 */
export class DevtestlabLabsCustomimages extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevtestlabLabsCustomimagesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevTestLab/labs/customimages@2018-09-15";
  }

  protected getResourceBody(props: DevtestlabLabsCustomimagesProps): string {
    return JSON.stringify(
        {properties: {author: "string", customImagePlan: {id: "string", offer: "string", publisher: "string"}, dataDiskStorageInfo: [{lun: "string", storageType: "string"}], description: "string", isPlanAuthorized: "${bool}", managedImageId: "string", managedSnapshotId: "string", vhd: {imageName: "string", osType: "string", sysPrep: "${bool}"}, vm: {linuxOsInfo: {linuxOsState: "string"}, sourceVmId: "string", windowsOsInfo: {windowsOsState: "string"}}}}
    );
  }
}
