import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeGalleriesImagesVersionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:images;

/**
   * The publishing profile of a gallery image Version.
   */
readonly publishingProfile?: GalleryImageVersionPublishingProfile;

/**
   * This is the safety profile of the Gallery Image Version.
   */
readonly safetyProfile?: GalleryImageVersionSafetyProfile;

/**
   * This is the storage profile of a Gallery Image Version.
   */
readonly storageProfile: GalleryImageVersionStorageProfile;

/**
   * The end of life date of the gallery image version. This property can be used for decommissioning purposes. This property is updatable.
   */
readonly endOfLifeDate?: string;

/**
   * If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version.
   */
readonly excludeFromLatest?: bool;

/**
   * The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable.
   */
readonly replicaCount?: number;

/**
   * Optional parameter which specifies the mode to be used for replication. This property is not updatable.
   */
readonly replicationMode?: 'Full''Shallow';

/**
   * Specifies the storage account type to be used to store the image. This property is not updatable.
   */
readonly storageAccountType?: 'Premium_LRS''Standard_LRS''Standard_ZRS';

/**
   * The target extended locations where the Image Version is going to be replicated to. This property is updatable.
   */
readonly targetExtendedLocations?: GalleryTargetExtendedLocation[];

/**
   * The target regions where the Image Version is going to be replicated to. This property is updatable.
   */
readonly targetRegions?: TargetRegion[];

/**
   * Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact.
   */
readonly encryption?: EncryptionImages;

/**
   * The name of the extended location.
   */
readonly extendedLocation?: GalleryExtendedLocation;

/**
   * The number of replicas of the Image Version to be created per extended location. This property is updatable.
   */
readonly extendedLocationReplicaCount?: number;

/**
   * Specifies the storage account type to be used to store the image. This property is not updatable.
   */
readonly storageAccountType?: 'Premium_LRS''StandardSSD_LRS''Standard_LRS''Standard_ZRS';

/**
   * A list of encryption specifications for data disk images.
   */
readonly dataDiskImages?: DataDiskImageEncryption[];

/**
   * Contains encryption settings for an OS disk image.
   */
readonly osDiskImage?: OSDiskImageEncryption;

/**
   * A relative URI containing the resource ID of the disk encryption set.
   */
readonly diskEncryptionSetId?: string;

/**
   * This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine.
   */
readonly lun: number;

/**
   * A relative URI containing the resource ID of the disk encryption set.
   */
readonly diskEncryptionSetId?: string;

/**
   * This property specifies the security profile of an OS disk image.
   */
readonly securityProfile?: OSDiskImageSecurityProfile;

/**
   * confidential VM encryption types
   */
readonly confidentialVMEncryptionType?: 'EncryptedVMGuestStateOnlyWithPmk''EncryptedWithCmk''EncryptedWithPmk';

/**
   * secure VM disk encryption set id
   */
readonly secureVMDiskEncryptionSetId?: string;

/**
   * It is type of the extended location.
   */
readonly type?: 'EdgeZone''Unknown';

/**
   * Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact.
   */
readonly encryption?: EncryptionImages;

/**
   * Contains the flag setting to hide an image when users specify version='latest'
   */
readonly excludeFromLatest?: bool;

/**
   * The number of replicas of the Image Version to be created per region. This property is updatable.
   */
readonly regionalReplicaCount?: number;

/**
   * Specifies the storage account type to be used to store the image. This property is not updatable.
   */
readonly storageAccountType?: 'Premium_LRS''Standard_LRS''Standard_ZRS';

/**
   * Indicates whether or not removing this Gallery Image Version from replicated regions is allowed.
   */
readonly allowDeletionOfReplicatedLocations?: bool;

/**
   * A list of data disk images.
   */
readonly dataDiskImages?: GalleryDataDiskImage[];

/**
   * This is the OS disk image.
   */
readonly osDiskImage?: GalleryOSDiskImage;

/**
   * The source of the gallery artifact version.
   */
readonly source?: GalleryArtifactVersionFullSource;

/**
   * The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite'
   */
readonly hostCaching?: 'None''ReadOnly''ReadWrite';

/**
   * This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine.
   */
readonly lun: number;

/**
   * The source for the disk image.
   */
readonly source?: GalleryDiskImageSource;

/**
   * The id of the gallery artifact version source. Can specify a disk uri, snapshot uri, user image or storage account resource.
   */
readonly id?: string;

/**
   * The Storage Account Id that contains the vhd blob being used as a source for this artifact version.
   */
readonly storageAccountId?: string;

/**
   * The uri of the gallery artifact version source. Currently used to specify vhd/blob source.
   */
readonly uri?: string;

/**
   * The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite'
   */
readonly hostCaching?: 'None''ReadOnly''ReadWrite';

/**
   * The source for the disk image.
   */
readonly source?: GalleryDiskImageSource;

/**
   * The resource Id of the source Community Gallery Image.  Only required when using Community Gallery Image as a source.
   */
readonly communityGalleryImageId?: string;

/**
   * The id of the gallery artifact version source. Can specify a disk uri, snapshot uri, user image or storage account resource.
   */
readonly id?: string;
}

/**
 * ComputeGalleriesImagesVersions resource
 */
export class ComputeGalleriesImagesVersions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeGalleriesImagesVersionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/galleries/images/versions@2022-03-03";
  }

  protected getResourceBody(props: ComputeGalleriesImagesVersionsProps): string {
    return JSON.stringify(
        {properties: {publishingProfile: {endOfLifeDate: "string", excludeFromLatest: "${bool}", replicaCount: "${int}", replicationMode: "string", storageAccountType: "string", targetExtendedLocations: [{encryption: {dataDiskImages: [{diskEncryptionSetId: "string", lun: "${int}"}], osDiskImage: {diskEncryptionSetId: "string", securityProfile: {confidentialVMEncryptionType: "string", secureVMDiskEncryptionSetId: "string"}}}, extendedLocation: {name: "string", type: "string"}, extendedLocationReplicaCount: "${int}", name: "string", storageAccountType: "string"}], targetRegions: [{encryption: {dataDiskImages: [{diskEncryptionSetId: "string", lun: "${int}"}], osDiskImage: {diskEncryptionSetId: "string", securityProfile: {confidentialVMEncryptionType: "string", secureVMDiskEncryptionSetId: "string"}}}, excludeFromLatest: "${bool}", name: "string", regionalReplicaCount: "${int}", storageAccountType: "string"}]}, safetyProfile: {allowDeletionOfReplicatedLocations: "${bool}"}, storageProfile: {dataDiskImages: [{hostCaching: "string", lun: "${int}", source: {id: "string", storageAccountId: "string", uri: "string"}}], osDiskImage: {hostCaching: "string", source: {id: "string", storageAccountId: "string", uri: "string"}}, source: {communityGalleryImageId: "string", id: "string"}}}}
    );
  }
}
