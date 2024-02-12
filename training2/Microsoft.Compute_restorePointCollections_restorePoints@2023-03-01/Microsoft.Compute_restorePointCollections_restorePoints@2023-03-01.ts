import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeRestorepointcollectionsRestorepointsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:restorePonumberCollections;

/**
   * ConsistencyMode of the RestorePoint. Can be specified in the input while creating a restore point. For now, only CrashConsistent is accepted as a valid input. Please refer tohttps://aka.ms/RestorePointsfor more details.
   */
readonly consistencyMode?: 'ApplicationConsistent''CrashConsistent''FileSystemConsistent';

/**
   * List of disk resource ids that the customer wishes to exclude from the restore point. If no disks are specified, all disks will be included.
   */
readonly excludeDisks?: ApiEntityReference[];

/**
   * Gets the details of the VM captured at the time of the restore point creation.
   */
readonly sourceMetadata?: RestorePonumberSourceMetadata;

/**
   * Resource Id of the source restore point from which a copy needs to be created.
   */
readonly sourceRestorePoint?: ApiEntityReference;

/**
   * Gets the creation time of the restore point.
   */
readonly timeCreated?: string;

/**
   * The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...
   */
readonly id?: string;

/**
   * Gets the storage profile.
   */
readonly storageProfile?: RestorePonumberSourceVMStorageProfile;

/**
   * Gets the data disks of the VM captured at the time of the restore point creation.
   */
readonly dataDisks?: RestorePonumberSourceVMDataDisk[];

/**
   * Gets the OS disk of the VM captured at the time of the restore point creation.
   */
readonly osDisk?: RestorePonumberSourceVmosDisk;

/**
   * Gets the caching type.
   */
readonly caching?: 'None''ReadOnly''ReadWrite';

/**
   * Contains Disk Restore Point properties.
   */
readonly diskRestorePoint?: DiskRestorePonumberAttributes;

/**
   * Contains the managed disk details.
   */
readonly managedDisk?: ManagedDiskParameters;

/**
   * Encryption at rest settings for disk restore point. It is an optional property that can be specified in the input while creating a restore point.
   */
readonly encryption?: RestorePonumberEncryption;

/**
   * Resource Id of the source disk restore point.
   */
readonly sourceDiskRestorePoint?: ApiEntityReference;

/**
   * Describes the parameter of customer managed disk encryption set resource id that can be specified for disk.Note:The disk encryption set resource id can only be specified for managed disk. Please referhttps://aka.ms/mdssewithcmkoverviewfor more details.
   */
readonly diskEncryptionSet?: DiskEncryptionSetParameters;

/**
   * The type of key used to encrypt the data of the disk restore point.
   */
readonly type?: 'EncryptionAtRestWithCustomerKey''EncryptionAtRestWithPlatformAndCustomerKeys''EncryptionAtRestWithPlatformKey';

/**
   * Resource Id
   */
readonly id?: string;

/**
   * Specifies the customer managed disk encryption set resource id for the managed disk.
   */
readonly diskEncryptionSet?: DiskEncryptionSetParameters;

/**
   * Resource Id
   */
readonly id?: string;

/**
   * Specifies the security profile for the managed disk.
   */
readonly securityProfile?: VMDiskSecurityProfile;

/**
   * Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk.
   */
readonly storageAccountType?: 'PremiumV2_LRS''Premium_LRS''Premium_ZRS''StandardSSD_LRS''StandardSSD_ZRS''Standard_LRS''UltraSSD_LRS';

/**
   * Specifies the customer managed disk encryption set resource id for the managed disk that is used for Customer Managed Key encrypted ConfidentialVM OS Disk and VMGuest blob.
   */
readonly diskEncryptionSet?: DiskEncryptionSetParameters;

/**
   * Specifies the EncryptionType of the managed disk. It is set to DiskWithVMGuestState for encryption of the managed disk along with VMGuestState blob, and VMGuestStateOnly for encryption of just the VMGuestState blob.Note:It can be set for only Confidential VMs.
   */
readonly securityEncryptionType?: 'DiskWithVMGuestState''VMGuestStateOnly';

/**
   * Gets the caching type.
   */
readonly caching?: 'None''ReadOnly''ReadWrite';

/**
   * Contains Disk Restore Point properties.
   */
readonly diskRestorePoint?: DiskRestorePonumberAttributes;

/**
   * Gets the managed disk details
   */
readonly managedDisk?: ManagedDiskParameters;
}

/**
 * ComputeRestorepointcollectionsRestorepoints resource
 */
export class ComputeRestorepointcollectionsRestorepoints extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeRestorepointcollectionsRestorepointsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/restorePointCollections/restorePoints@2023-03-01";
  }

  protected getResourceBody(props: ComputeRestorepointcollectionsRestorepointsProps): string {
    return JSON.stringify(
        {properties: {consistencyMode: "string", excludeDisks: [{id: "string"}], sourceMetadata: {storageProfile: {dataDisks: [{caching: "string", diskRestorePoint: {encryption: {diskEncryptionSet: {id: "string"}, type: "string"}, sourceDiskRestorePoint: {id: "string"}}, managedDisk: {diskEncryptionSet: {id: "string"}, id: "string", securityProfile: {diskEncryptionSet: {id: "string"}, securityEncryptionType: "string"}, storageAccountType: "string"}}], osDisk: {caching: "string", diskRestorePoint: {encryption: {diskEncryptionSet: {id: "string"}, type: "string"}, sourceDiskRestorePoint: {id: "string"}}, managedDisk: {diskEncryptionSet: {id: "string"}, id: "string", securityProfile: {diskEncryptionSet: {id: "string"}, securityEncryptionType: "string"}, storageAccountType: "string"}}}}, sourceRestorePoint: {id: "string"}, timeCreated: "string"}}
    );
  }
}
