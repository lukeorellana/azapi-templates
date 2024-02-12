import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevtestlabLabsCustomimagesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:labs;

/**
   * The author of the custom image.
   */
readonly author?: string;

/**
   * Storage information about the plan related to this custom image
   */
readonly customImagePlan?: CustomImagePropertiesFromPlan;

/**
   * Storage information about the data disks present in the custom image
   */
readonly dataDiskStorageInfo?: DataDiskStorageTypeInfo[];

/**
   * The description of the custom image.
   */
readonly description?: string;

/**
   * Whether or not the custom images underlying offer/plan has been enabled for programmatic deployment
   */
readonly isPlanAuthorized?: bool;

/**
   * The Managed Image Id backing the custom image.
   */
readonly managedImageId?: string;

/**
   * The Managed Snapshot Id backing the custom image.
   */
readonly managedSnapshotId?: string;

/**
   * The VHD from which the image is to be created.
   */
readonly vhd?: CustomImagePropertiesCustom;

/**
   * The virtual machine from which the image is to be created.
   */
readonly vm?: CustomImagePropertiesFromVm;

/**
   * The id of the plan, equivalent to name of the plan
   */
readonly id?: string;

/**
   * The offer for the plan from the marketplace image the custom image is derived from
   */
readonly offer?: string;

/**
   * The publisher for the plan from the marketplace image the custom image is derived from
   */
readonly publisher?: string;

/**
   * Disk Lun
   */
readonly lun?: string;

/**
   * Disk Storage Type
   */
readonly storageType?: 'Premium''Standard''StandardSSD';

/**
   * The image name.
   */
readonly imageName?: string;

/**
   * The OS type of the custom image (i.e. Windows, Linux)
   */
readonly osType: 'Linux''None''Windows';

/**
   * Indicates whether sysprep has been run on the VHD.
   */
readonly sysPrep?: bool;

/**
   * The Linux OS information of the VM.
   */
readonly linuxOsInfo?: LinuxOsInfo;

/**
   * The source vm identifier.
   */
readonly sourceVmId?: string;

/**
   * The Windows OS information of the VM.
   */
readonly windowsOsInfo?: WindowsOsInfo;

/**
   * The state of the Linux OS (i.e. NonDeprovisioned, DeprovisionRequested, DeprovisionApplied).
   */
readonly linuxOsState?: 'DeprovisionApplied''DeprovisionRequested''NonDeprovisioned';

/**
   * The state of the Windows OS (i.e. NonSysprepped, SysprepRequested, SysprepApplied).
   */
readonly windowsOsState?: 'NonSysprepped''SysprepApplied''SysprepRequested';
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
