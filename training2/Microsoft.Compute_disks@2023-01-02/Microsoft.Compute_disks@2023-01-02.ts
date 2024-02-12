import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeDisksProps extends IAzAPIBaseProps {
/**
   * The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, UltraSSD_LRS, Premium_ZRS, StandardSSD_ZRS, or PremiumV2_LRS.
   */
readonly sku?: DiskSku;

/**
   * The extended location where the disk will be created. Extended location cannot be changed.
   */
readonly extendedLocation?: ExtendedLocation;

/**
   * The Logical zone list for Disk.
   */
readonly zones?: string[];

/**
   * The type of the extended location.
   */
readonly type?: 'EdgeZone';

/**
   * Set to true to enable bursting beyond the provisioned performance target of the disk. Bursting is disabled by default. Does not apply to Ultra disks.
   */
readonly burstingEnabled?: bool;

/**
   * Percentage complete for the background copy when a resource is created via the CopyStart operation.
   */
readonly completionPercent?: number;

/**
   * Disk source information. CreationData information cannot be changed after the disk has been created.
   */
readonly creationData: CreationData;

/**
   * Additional authentication requirements when exporting or uploading to a disk or snapshot.
   */
readonly dataAccessAuthMode?: 'AzureActiveDirectory''None';

/**
   * ARM id of the DiskAccess resource for using private endpoints on disks.
   */
readonly diskAccessId?: string;

/**
   * The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes.
   */
readonly diskIOPSReadWrite?: number;

/**
   * The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10.
   */
readonly diskMBpsReadWrite?: number;

/**
   * If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
   */
readonly diskSizeGB?: number;

/**
   * Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys.
   */
readonly encryption?: Encryption;

/**
   * Encryption settings collection used for Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot.
   */
readonly encryptionSettingsCollection?: EncryptionSettingsCollection;

/**
   * The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
   */
readonly hyperVGeneration?: 'V1''V2';

/**
   * The maximum number of VMs that can attach to the disk at the same time. Value greater than one indicates a disk that can be mounted on multiple VMs at the same time.
   */
readonly maxShares?: number;

/**
   * Policy for accessing the disk via network.
   */
readonly networkAccessPolicy?: 'AllowAll''AllowPrivate''DenyAll';

/**
   * Setting this property to true improves reliability and performance of data disks that are frequently (more than 5 times a day) by detached from one virtual machine and attached to another. This property should not be set for disks that are not detached and attached frequently as it causes the disks to not align with the fault domain of the virtual machine.
   */
readonly optimizedForFrequentAttach?: bool;

/**
   * The Operating System type.
   */
readonly osType?: 'Linux''Windows';

/**
   * Policy for controlling export on the disk.
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * Purchase plan information for the the image from which the OS disk was created. E.g. - {name: 2019-Datacenter, publisher: MicrosoftWindowsServer, product: WindowsServer}
   */
readonly purchasePlan?: PurchasePlan;

/**
   * Contains the security related information for the resource.
   */
readonly securityProfile?: DiskSecurityProfile;

/**
   * List of supported capabilities for the image from which the OS disk was created.
   */
readonly supportedCapabilities?: SupportedCapabilities;

/**
   * Indicates the OS on a disk supports hibernation.
   */
readonly supportsHibernation?: bool;

/**
   * Performance tier of the disk (e.g, P4, S10) as described here:https://azure.microsoft.com/pricing/details/managed-disks/. Does not apply to Ultra disks.
   */
readonly tier?: string;

/**
   * This enumerates the possible sources of a disk's creation.
   */
readonly createOption: 'Attach''Copy''CopyStart''Empty''FromImage''Import''ImportSecure''Restore''Upload''UploadPreparedSecure';

/**
   * Required if creating from a Gallery Image. The id/sharedGalleryImageId/communityGalleryImageId of the ImageDiskReference will be the ARM id of the shared galley image version from which to create a disk.
   */
readonly galleryImageReference?: ImageDiskReference;

/**
   * Disk source information for PIR or user images.
   */
readonly imageReference?: ImageDiskReference;

/**
   * Logical sector size in bytes for Ultra disks. Supported values are 512 ad 4096. 4096 is the default.
   */
readonly logicalSectorSize?: number;

/**
   * Set this flag to true to get a boost on the performance target of the disk deployed, see here on the respective performance target. This flag can only be set on disk creation time and cannot be disabled after enabled.
   */
readonly performancePlus?: bool;

/**
   * If createOption is ImportSecure, this is the URI of a blob to be imported into VM guest state.
   */
readonly securityDataUri?: string;

/**
   * If createOption is Copy, this is the ARM id of the source snapshot or disk.
   */
readonly sourceResourceId?: string;

/**
   * If createOption is Import, this is the URI of a blob to be imported into a managed disk.
   */
readonly sourceUri?: string;

/**
   * Required if createOption is Import. The Azure Resource Manager identifier of the storage account containing the blob to import as a disk.
   */
readonly storageAccountId?: string;

/**
   * If createOption is Upload, this is the size of the contents of the upload including the VHD footer. This value should be between 20972032 (20 MiB + 512 bytes for the VHD footer) and 35183298347520 bytes (32 TiB + 512 bytes for the VHD footer).
   */
readonly uploadSizeBytes?: number;

/**
   * A relative uri containing a community Azure Compute Gallery image reference.
   */
readonly communityGalleryImageId?: string;

/**
   * A relative uri containing either a Platform Image Repository, user image, or Azure Compute Gallery image reference.
   */
readonly id?: string;

/**
   * If the disk is created from an image's data disk, this is an index that indicates which of the data disks in the image to use. For OS disks, this field is null.
   */
readonly lun?: number;

/**
   * A relative uri containing a direct shared Azure Compute Gallery image reference.
   */
readonly sharedGalleryImageId?: string;

/**
   * ResourceId of the disk encryption set to use for enabling encryption at rest.
   */
readonly diskEncryptionSetId?: string;

/**
   * The type of key used to encrypt the data of the disk.
   */
readonly type?: 'EncryptionAtRestWithCustomerKey''EncryptionAtRestWithPlatformAndCustomerKeys''EncryptionAtRestWithPlatformKey';

/**
   * Set this flag to true and provide DiskEncryptionKey and optional KeyEncryptionKey to enable encryption. Set this flag to false and remove DiskEncryptionKey and KeyEncryptionKey to disable encryption. If EncryptionSettings is null in the request object, the existing settings remain unchanged.
   */
readonly enabled: bool;

/**
   * A collection of encryption settings, one for each disk volume.
   */
readonly encryptionSettings?: EncryptionSettingsElement[];

/**
   * Describes what type of encryption is used for the disks. Once this field is set, it cannot be overwritten. '1.0' corresponds to Azure Disk Encryption with AAD app.'1.1' corresponds to Azure Disk Encryption.
   */
readonly encryptionSettingsVersion?: string;

/**
   * Key Vault Secret Url and vault id of the disk encryption key
   */
readonly diskEncryptionKey?: KeyVaultAndSecretReference;

/**
   * Key Vault Key Url and vault id of the key encryption key. KeyEncryptionKey is optional and when provided is used to unwrap the disk encryption key.
   */
readonly keyEncryptionKey?: KeyVaultAndKeyReference;

/**
   * Url pointing to a key or secret in KeyVault
   */
readonly secretUrl: string;

/**
   * Resource id of the KeyVault containing the key or secret
   */
readonly sourceVault: SourceVault;

/**
   * Resource Id
   */
readonly id?: string;

/**
   * Url pointing to a key or secret in KeyVault
   */
readonly keyUrl: string;

/**
   * Resource id of the KeyVault containing the key or secret
   */
readonly sourceVault: SourceVault;

/**
   * Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
   */
readonly product: string;

/**
   * The Offer Promotion Code.
   */
readonly promotionCode?: string;

/**
   * The publisher ID.
   */
readonly publisher: string;

/**
   * ResourceId of the disk encryption set associated to Confidential VM supported disk encrypted with customer managed key
   */
readonly secureVMDiskEncryptionSetId?: string;

/**
   * Specifies the SecurityType of the VM. Applicable for OS disks only.
   */
readonly securityType?: 'ConfidentialVM_DiskEncryptedWithCustomerKey''ConfidentialVM_DiskEncryptedWithPlatformKey''ConfidentialVM_VMGuestStateOnlyEncryptedWithPlatformKey''TrustedLaunch';

/**
   * True if the image from which the OS disk is created supports accelerated networking.
   */
readonly acceleratedNetwork?: bool;

/**
   * CPU architecture supported by an OS disk.
   */
readonly architecture?: 'Arm64''x64';

/**
   * The disk controllers that an OS disk supports. If set it can be SCSI or SCSI, NVME or NVME, SCSI.
   */
readonly diskControllerTypes?: string;
}

/**
 * ComputeDisks resource
 */
export class ComputeDisks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeDisksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/disks@2023-01-02";
  }

  protected getResourceBody(props: ComputeDisksProps): string {
    return JSON.stringify(
        {properties: {burstingEnabled: "${bool}", completionPercent: "${int}", creationData: {createOption: "string", galleryImageReference: {communityGalleryImageId: "string", id: "string", lun: "${int}", sharedGalleryImageId: "string"}, imageReference: {communityGalleryImageId: "string", id: "string", lun: "${int}", sharedGalleryImageId: "string"}, logicalSectorSize: "${int}", performancePlus: "${bool}", securityDataUri: "string", sourceResourceId: "string", sourceUri: "string", storageAccountId: "string", uploadSizeBytes: "${int}"}, dataAccessAuthMode: "string", diskAccessId: "string", diskIOPSReadWrite: "${int}", diskMBpsReadWrite: "${int}", diskSizeGB: "${int}", encryption: {diskEncryptionSetId: "string", type: "string"}, encryptionSettingsCollection: {enabled: "${bool}", encryptionSettings: [{diskEncryptionKey: {secretUrl: "string", sourceVault: {id: "string"}}, keyEncryptionKey: {keyUrl: "string", sourceVault: {id: "string"}}}], encryptionSettingsVersion: "string"}, hyperVGeneration: "string", maxShares: "${int}", networkAccessPolicy: "string", optimizedForFrequentAttach: "${bool}", osType: "string", publicNetworkAccess: "string", purchasePlan: {name: "string", product: "string", promotionCode: "string", publisher: "string"}, securityProfile: {secureVMDiskEncryptionSetId: "string", securityType: "string"}, supportedCapabilities: {acceleratedNetwork: "${bool}", architecture: "string", diskControllerTypes: "string"}, supportsHibernation: "${bool}", tier: "string"}, zones: ["string"], sku: {name: "string"}, extendedLocation: {name: "string", type: "EdgeZone"}}
    );
  }
}
