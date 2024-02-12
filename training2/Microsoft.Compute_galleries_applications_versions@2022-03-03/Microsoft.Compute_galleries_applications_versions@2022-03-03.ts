import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeGalleriesApplicationsVersionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:applications;

/**
   * The publishing profile of a gallery image version.
   */
readonly publishingProfile: GalleryApplicationVersionPublishingProfile;

/**
   * The safety profile of the Gallery Application Version.
   */
readonly safetyProfile?: GalleryApplicationVersionSafetyProfile;

/**
   * Optional. Additional settings to pass to the vm-application-manager extension. For advanced use only.
   */
readonly advancedSettings?: object;

/**
   * A list of custom actions that can be performed with this Gallery Application Version.
   */
readonly customActions?: GalleryApplicationCustomAction[];

/**
   * Optional. Whether or not this application reports health.
   */
readonly enableHealthCheck?: bool;

/**
   * The end of life date of the gallery image version. This property can be used for decommissioning purposes. This property is updatable.
   */
readonly endOfLifeDate?: string;

/**
   * If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version.
   */
readonly excludeFromLatest?: bool;

/**
   * 
   */
readonly manageActions?: UserArtifactManage;

/**
   * The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable.
   */
readonly replicaCount?: number;

/**
   * Optional parameter which specifies the mode to be used for replication. This property is not updatable.
   */
readonly replicationMode?: 'Full''Shallow';

/**
   * Additional settings for the VM app that contains the target package and config file name when it is deployed to target VM or VM scale set.
   */
readonly settings?: UserArtifactSettings;

/**
   * The source image from which the Image Version is going to be created.
   */
readonly source: UserArtifactSource;

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
   * Description to help the users understand what this custom action does.
   */
readonly description?: string;

/**
   * The parameters that this custom action uses
   */
readonly parameters?: GalleryApplicationCustomActionParameter[];

/**
   * The script to run when executing this custom action.
   */
readonly script: string;

/**
   * The default value of the parameter.  Only applies to string types
   */
readonly defaultValue?: string;

/**
   * A description to help users understand what this parameter means
   */
readonly description?: string;

/**
   * Indicates whether this parameter must be passed when running the custom action.
   */
readonly required?: bool;

/**
   * Specifies the type of the custom action parameter. Possible values are: String, ConfigurationDataBlob or LogOutputBlob
   */
readonly type?: 'ConfigurationDataBlob''LogOutputBlob''String';

/**
   * Required. The path and arguments to install the gallery application. This is limited to 4096 characters.
   */
readonly install: string;

/**
   * Required. The path and arguments to remove the gallery application. This is limited to 4096 characters.
   */
readonly remove: string;

/**
   * Optional. The path and arguments to update the gallery application. If not present, then update operation will invoke remove command on the previous version and install command on the current version of the gallery application. This is limited to 4096 characters.
   */
readonly update?: string;

/**
   * Optional. The name to assign the downloaded config file on the VM. This is limited to 4096 characters. If not specified, the config file will be named the Gallery Application name appended with "_config".
   */
readonly configFileName?: string;

/**
   * Optional. The name to assign the downloaded package file on the VM. This is limited to 4096 characters. If not specified, the package file will be named the same as the Gallery Application name.
   */
readonly packageFileName?: string;

/**
   * Optional. The defaultConfigurationLink of the artifact, must be a readable storage page blob.
   */
readonly defaultConfigurationLink?: string;

/**
   * Required. The mediaLink of the artifact, must be a readable storage page blob.
   */
readonly mediaLink: string;

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
}

/**
 * ComputeGalleriesApplicationsVersions resource
 */
export class ComputeGalleriesApplicationsVersions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeGalleriesApplicationsVersionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/galleries/applications/versions@2022-03-03";
  }

  protected getResourceBody(props: ComputeGalleriesApplicationsVersionsProps): string {
    return JSON.stringify(
        {properties: {publishingProfile: {advancedSettings: {}, customActions: [{description: "string", name: "string", parameters: [{defaultValue: "string", description: "string", name: "string", required: "${bool}", type: "string"}], script: "string"}], enableHealthCheck: "${bool}", endOfLifeDate: "string", excludeFromLatest: "${bool}", manageActions: {install: "string", remove: "string", update: "string"}, replicaCount: "${int}", replicationMode: "string", settings: {configFileName: "string", packageFileName: "string"}, source: {defaultConfigurationLink: "string", mediaLink: "string"}, storageAccountType: "string", targetExtendedLocations: [{encryption: {dataDiskImages: [{diskEncryptionSetId: "string", lun: "${int}"}], osDiskImage: {diskEncryptionSetId: "string", securityProfile: {confidentialVMEncryptionType: "string", secureVMDiskEncryptionSetId: "string"}}}, extendedLocation: {name: "string", type: "string"}, extendedLocationReplicaCount: "${int}", name: "string", storageAccountType: "string"}], targetRegions: [{encryption: {dataDiskImages: [{diskEncryptionSetId: "string", lun: "${int}"}], osDiskImage: {diskEncryptionSetId: "string", securityProfile: {confidentialVMEncryptionType: "string", secureVMDiskEncryptionSetId: "string"}}}, excludeFromLatest: "${bool}", name: "string", regionalReplicaCount: "${int}", storageAccountType: "string"}]}, safetyProfile: {allowDeletionOfReplicatedLocations: "${bool}"}}}
    );
  }
}
