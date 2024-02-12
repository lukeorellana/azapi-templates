import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeImagesProps extends IAzAPIBaseProps {
/**
   * The extended location of the Image.
   */
readonly extendedLocation?: ExtendedLocation;

/**
   * The type of the extended location.
   */
readonly type?: 'EdgeZone';

/**
   * Specifies the HyperVGenerationType of the VirtualMachine created from the image. From API Version 2019-03-01 if the image source is a blob, then we need the user to specify the value, if the source is managed resource like disk or snapshot, we may require the user to specify the property if we cannot deduce it from the source managed resource.
   */
readonly hyperVGeneration?: 'V1''V2';

/**
   * The source virtual machine from which Image is created.
   */
readonly sourceVirtualMachine?: SubResource;

/**
   * Specifies the storage settings for the virtual machine disks.
   */
readonly storageProfile?: ImageStorageProfile;

/**
   * Resource Id
   */
readonly id?: string;

/**
   * Specifies the parameters that are used to add a data disk to a virtual machine.For more information about disks, seeAbout disks and VHDs for Azure virtual machines.
   */
readonly dataDisks?: ImageDataDisk[];

/**
   * Specifies information about the operating system disk used by the virtual machine.For more information about disks, seeAbout disks and VHDs for Azure virtual machines.
   */
readonly osDisk?: ImageOSDisk;

/**
   * Specifies whether an image is zone resilient or not. Default is false. Zone resilient images can be created only in regions that provide Zone Redundant Storage (ZRS).
   */
readonly zoneResilient?: bool;

/**
   * The Virtual Hard Disk.
   */
readonly blobUri?: string;

/**
   * Specifies the caching requirements. Possible values are:None,ReadOnly,ReadWrite.The default values are:None for Standard storage. ReadOnly for Premium storage.
   */
readonly caching?: 'None''ReadOnly''ReadWrite';

/**
   * Specifies the customer managed disk encryption set resource id for the managed image disk.
   */
readonly diskEncryptionSet?: DiskEncryptionSetParameters;

/**
   * Specifies the size of empty data disks in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. This value cannot be larger than 1023 GB.
   */
readonly diskSizeGB?: number;

/**
   * Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
   */
readonly lun: number;

/**
   * The managedDisk.
   */
readonly managedDisk?: SubResource;

/**
   * The snapshot.
   */
readonly snapshot?: SubResource;

/**
   * Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk.
   */
readonly storageAccountType?: 'PremiumV2_LRS''Premium_LRS''Premium_ZRS''StandardSSD_LRS''StandardSSD_ZRS''Standard_LRS''UltraSSD_LRS';

/**
   * Resource Id
   */
readonly id?: string;

/**
   * The Virtual Hard Disk.
   */
readonly blobUri?: string;

/**
   * Specifies the caching requirements. Possible values are:None,ReadOnly,ReadWrite.The default values are:None for Standard storage. ReadOnly for Premium storage.
   */
readonly caching?: 'None''ReadOnly''ReadWrite';

/**
   * Specifies the customer managed disk encryption set resource id for the managed image disk.
   */
readonly diskEncryptionSet?: DiskEncryptionSetParameters;

/**
   * Specifies the size of empty data disks in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. This value cannot be larger than 1023 GB.
   */
readonly diskSizeGB?: number;

/**
   * The managedDisk.
   */
readonly managedDisk?: SubResource;

/**
   * The OS State. For managed images, use Generalized.
   */
readonly osState: 'Generalized''Specialized';

/**
   * This property allows you to specify the type of the OS that is included in the disk if creating a VM from a custom image. Possible values are:Windows,Linux.
   */
readonly osType: 'Linux''Windows';

/**
   * The snapshot.
   */
readonly snapshot?: SubResource;

/**
   * Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk.
   */
readonly storageAccountType?: 'PremiumV2_LRS''Premium_LRS''Premium_ZRS''StandardSSD_LRS''StandardSSD_ZRS''Standard_LRS''UltraSSD_LRS';
}

/**
 * ComputeImages resource
 */
export class ComputeImages extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeImagesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/images@2023-03-01";
  }

  protected getResourceBody(props: ComputeImagesProps): string {
    return JSON.stringify(
        {properties: {hyperVGeneration: "string", sourceVirtualMachine: {id: "string"}, storageProfile: {dataDisks: [{blobUri: "string", caching: "string", diskEncryptionSet: {id: "string"}, diskSizeGB: "${int}", lun: "${int}", managedDisk: {id: "string"}, snapshot: {id: "string"}, storageAccountType: "string"}], osDisk: {blobUri: "string", caching: "string", diskEncryptionSet: {id: "string"}, diskSizeGB: "${int}", managedDisk: {id: "string"}, osState: "string", osType: "string", snapshot: {id: "string"}, storageAccountType: "string"}, zoneResilient: "${bool}"}}, extendedLocation: {name: "string", type: "EdgeZone"}}
    );
  }
}
