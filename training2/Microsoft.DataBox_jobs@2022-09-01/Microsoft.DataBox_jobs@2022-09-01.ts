import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataboxJobsProps extends IAzAPIBaseProps {
/**
   * The sku type.
   */
readonly sku: Sku;

/**
   * Msi identity of the resource
   */
readonly identity?: ResourceIdentity;

/**
   * Identity type
   */
readonly type?: string;

/**
   * User Assigned Identities
   */
readonly userAssignedIdentities?: object;

/**
   * Delivery Info of Job.
   */
readonly deliveryInfo?: JobDeliveryInfo;

/**
   * Delivery type of Job.
   */
readonly deliveryType?: 'NonScheduled''Scheduled';

/**
   * Details of a job run. This field will only be sent for expand details filter.
   */
readonly details?: JobDetails;

/**
   * Type of the data transfer.
   */
readonly transferType: 'ExportFromAzure''ImportToAzure';

/**
   * Scheduled date time.
   */
readonly scheduledDateTime?: string;

/**
   * Contact details for notification and shipping.
   */
readonly contactDetails: ContactDetails;

/**
   * Details of the data to be exported from azure.
   */
readonly dataExportDetails?: DataExportDetails[];

/**
   * Details of the data to be imported into azure.
   */
readonly dataImportDetails?: DataImportDetails[];

/**
   * The expected size of the data, which needs to be transferred in this job, in terabytes.
   */
readonly expectedDataSizeInTeraBytes?: number;

/**
   * Details about which key encryption type is being used.
   */
readonly keyEncryptionKey?: KeyEncryptionKey;

/**
   * Preferences for the order.
   */
readonly preferences?: Preferences;

/**
   * Optional Reverse Shipping details for order.
   */
readonly reverseShippingDetails?: ReverseShippingDetails;

/**
   * Shipping address of the customer.
   */
readonly shippingAddress?: ShippingAddress;

/**
   * Set the object type
   */
readonly jobDetailsType: DataBoxDataBoxCustomerDiskDataBoxDiskDataBoxHeavy;

/**
   * Contact name of the person.
   */
readonly contactName: string;

/**
   * List of Email-ids to be notified about job progress.
   */
readonly emailList: string[];

/**
   * Mobile number of the contact person.
   */
readonly mobile?: string;

/**
   * Notification preference for a job stage.
   */
readonly notificationPreference?: NotificationPreference[];

/**
   * Phone number of the contact person.
   */
readonly phone: string;

/**
   * Phone extension number of the contact person.
   */
readonly phoneExtension?: string;

/**
   * Notification is required or not.
   */
readonly sendNotification: bool;

/**
   * Name of the stage.
   */
readonly stageName: 'AtAzureDC''Created''DataCopy''Delivered''DevicePrepared''Dispatched''PickedUp''ShippedToCustomer';

/**
   * Account details of the data to be transferred
   */
readonly accountDetails: DataAccountDetails;

/**
   * Level of the logs to be collected.
   */
readonly logCollectionLevel?: 'Error''Verbose';

/**
   * Configuration for the data transfer.
   */
readonly transferConfiguration: TransferConfiguration;

/**
   * Password for all the shares to be created on the device. Should not be passed for TransferType:ExportFromAzure jobs. If this is not passed, the service will generate password itself. This will not be returned in Get Call. Password Requirements :  Password must be minimum of 12 and maximum of 64 characters. Password must have at least one uppercase alphabet, one number and one special character. Password cannot have the following characters : IilLoO0 Password can have only alphabets, numbers and these characters : @#-$%^!+=;:_()]+
   */
readonly sharePassword?: string;

/**
   * Set the object type
   */
readonly dataAccountType: ManagedDiskStorageAccount;

/**
   * Account Type of the data to be transferred.
   */
readonly dataAccountType: 'ManagedDisk';

/**
   * Resource Group Id of the compute disks.
   */
readonly resourceGroupId: string;

/**
   * Resource Id of the storage account that can be used to copy the vhd for staging.
   */
readonly stagingStorageAccountId: string;

/**
   * Account Type of the data to be transferred.
   */
readonly dataAccountType: 'StorageAccount';

/**
   * Storage Account Resource Id.
   */
readonly storageAccountId: string;

/**
   * Map of filter type and the details to transfer all data. This field is required only if the TransferConfigurationType is given as TransferAll
   */
readonly transferAllDetails?: TransferConfigurationTransferAllDetails;

/**
   * Type of the configuration for transfer.
   */
readonly transferConfigurationType: 'TransferAll''TransferUsingFilter';

/**
   * Map of filter type and the details to filter. This field is required only if the TransferConfigurationType is given as TransferUsingFilter.
   */
readonly transferFilterDetails?: TransferConfigurationTransferFilterDetails;

/**
   * Details to transfer all data.
   */
readonly include?: TransferAllDetails;

/**
   * Type of the account of data
   */
readonly dataAccountType: 'ManagedDisk''StorageAccount';

/**
   * To indicate if all Azure blobs have to be transferred
   */
readonly transferAllBlobs?: bool;

/**
   * To indicate if all Azure Files have to be transferred
   */
readonly transferAllFiles?: bool;

/**
   * Details of the filtering the transfer of data.
   */
readonly include?: TransferFilterDetails;

/**
   * Filter details to transfer Azure files.
   */
readonly azureFileFilterDetails?: AzureFileFilterDetails;

/**
   * Filter details to transfer blobs.
   */
readonly blobFilterDetails?: BlobFilterDetails;

/**
   * Type of the account of data.
   */
readonly dataAccountType: 'ManagedDisk''StorageAccount';

/**
   * Details of the filter files to be used for data transfer.
   */
readonly filterFileDetails?: FilterFileDetails[];

/**
   * List of full path of the files to be transferred.
   */
readonly filePathList?: string[];

/**
   * Prefix list of the Azure files to be transferred.
   */
readonly filePrefixList?: string[];

/**
   * List of file shares to be transferred.
   */
readonly fileShareList?: string[];

/**
   * List of full path of the blobs to be transferred.
   */
readonly blobPathList?: string[];

/**
   * Prefix list of the Azure blobs to be transferred.
   */
readonly blobPrefixList?: string[];

/**
   * List of blob containers to be transferred.
   */
readonly containerList?: string[];

/**
   * Path of the file that contains the details of all items to transfer.
   */
readonly filterFilePath: string;

/**
   * Type of the filter file.
   */
readonly filterFileType: 'AzureBlob''AzureFile';

/**
   * Account details of the data to be transferred
   */
readonly accountDetails: DataAccountDetails;

/**
   * Level of the logs to be collected.
   */
readonly logCollectionLevel?: 'Error''Verbose';

/**
   * Managed identity properties used for key encryption.
   */
readonly identityProperties?: IdentityProperties;

/**
   * Type of encryption key used for key encryption.
   */
readonly kekType: 'CustomerManaged''MicrosoftManaged';

/**
   * Key encryption key. It is required in case of Customer managed KekType.
   */
readonly kekUrl?: string;

/**
   * Kek vault resource id. It is required in case of Customer managed KekType.
   */
readonly kekVaultResourceID?: string;

/**
   * Managed service identity type.
   */
readonly type?: string;

/**
   * User assigned identity properties.
   */
readonly userAssigned?: UserAssignedProperties;

/**
   * Arm resource id for user assigned identity to be used to fetch MSI token.
   */
readonly resourceId?: string;

/**
   * Preferences related to the Encryption.
   */
readonly encryptionPreferences?: EncryptionPreferences;

/**
   * Preferred data center region.
   */
readonly preferredDataCenterRegion?: string[];

/**
   * Optional Preferences related to the reverse shipment logistics of the sku.
   */
readonly reverseTransportPreferences?: TransportPreferences;

/**
   * Preferences related to the Access Tier of storage accounts.
   */
readonly storageAccountAccessTierPreferences?: String array containing any of:'Archive';

/**
   * Preferences related to the shipment logistics of the sku.
   */
readonly transportPreferences?: TransportPreferences;

/**
   * Defines secondary layer of software-based encryption enablement.
   */
readonly doubleEncryption?: 'Disabled''Enabled';

/**
   * Indicates Shipment Logistics type that the customer preferred.
   */
readonly preferredShipmentType: 'CustomerManaged''MicrosoftManaged';

/**
   * Contact Info.
   */
readonly contactDetails?: ContactInfo;

/**
   * Shipping address where customer wishes to receive the device.
   */
readonly shippingAddress?: ShippingAddress;

/**
   * Contact name of the person.
   */
readonly contactName: string;

/**
   * Mobile number of the contact person.
   */
readonly mobile?: string;

/**
   * Phone number of the contact person.
   */
readonly phone: string;

/**
   * Phone extension number of the contact person.
   */
readonly phoneExtension?: string;

/**
   * Type of address.
   */
readonly addressType?: 'Commercial''None''Residential';

/**
   * Name of the City.
   */
readonly city?: string;

/**
   * Name of the company.
   */
readonly companyName?: string;

/**
   * Name of the Country.
   */
readonly country: string;

/**
   * Postal code.
   */
readonly postalCode?: string;

/**
   * Name of the State or Province.
   */
readonly stateOrProvince?: string;

/**
   * Street Address line 1.
   */
readonly streetAddress1: string;

/**
   * Street Address line 2.
   */
readonly streetAddress2?: string;

/**
   * Street Address line 3.
   */
readonly streetAddress3?: string;

/**
   * Extended Zip Code.
   */
readonly zipExtendedCode?: string;

/**
   * Indicates the type of job details.
   */
readonly jobDetailsType: 'DataBox';

/**
   * Set Device password for unlocking Databox. Should not be passed for TransferType:ExportFromAzure jobs. If this is not passed, the service will generate password itself. This will not be returned in Get Call. Password Requirements :  Password must be minimum of 12 and maximum of 64 characters. Password must have at least one uppercase alphabet, one number and one special character. Password cannot have the following characters : IilLoO0 Password can have only alphabets, numbers and these characters : @#-$%^!+=;:_()]+
   */
readonly devicePassword?: string;

/**
   * Indicates the type of job details.
   */
readonly jobDetailsType: 'DataBoxCustomerDisk';

/**
   * Flag to indicate if disk manifest should be backed-up in the Storage Account.
   */
readonly enableManifestBackup?: bool;

/**
   * Contains the map of disk serial number to the disk details for import jobs.
   */
readonly importDiskDetailsCollection?: object;

/**
   * Return package shipping details.
   */
readonly returnToCustomerPackageDetails: PackageCarrierDetails;

/**
   * Carrier Account Number of customer for customer disk.
   */
readonly carrierAccountNumber?: string;

/**
   * Name of the carrier.
   */
readonly carrierName?: string;

/**
   * Tracking Id of shipment.
   */
readonly trackingId?: string;

/**
   * Indicates the type of job details.
   */
readonly jobDetailsType: 'DataBoxDisk';

/**
   * User entered passkey for DataBox Disk job.
   */
readonly passkey?: string;

/**
   * User preference on what size disks are needed for the job. The map is from the disk size in TB to the count. Eg. {2,5} means 5 disks of 2 TB size. Key is string but will be checked against an int.
   */
readonly preferredDisks?: object;

/**
   * Indicates the type of job details.
   */
readonly jobDetailsType: 'DataBoxHeavy';

/**
   * Set Device password for unlocking Databox Heavy. Should not be passed for TransferType:ExportFromAzure jobs. If this is not passed, the service will generate password itself. This will not be returned in Get Call. Password Requirements :  Password must be minimum of 12 and maximum of 64 characters. Password must have at least one uppercase alphabet, one number and one special character. Password cannot have the following characters : IilLoO0 Password can have only alphabets, numbers and these characters : @#-$%^!+=;:_()]+
   */
readonly devicePassword?: string;

/**
   * The display name of the sku.
   */
readonly displayName?: string;

/**
   * The sku family.
   */
readonly family?: string;
}

/**
 * DataboxJobs resource
 */
export class DataboxJobs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DataboxJobsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataBox/jobs@2022-09-01";
  }

  protected getResourceBody(props: DataboxJobsProps): string {
    return JSON.stringify(
        {properties: {deliveryInfo: {scheduledDateTime: "string"}, deliveryType: "string", details: {contactDetails: {contactName: "string", emailList: ["string"], mobile: "string", notificationPreference: [{sendNotification: "${bool}", stageName: "string"}], phone: "string", phoneExtension: "string"}, dataExportDetails: [{accountDetails: {sharePassword: "string", dataAccountType: "string"}, logCollectionLevel: "string", transferConfiguration: {transferAllDetails: {include: {dataAccountType: "string", transferAllBlobs: "${bool}", transferAllFiles: "${bool}"}}, transferConfigurationType: "string", transferFilterDetails: {include: {azureFileFilterDetails: {filePathList: ["string"], filePrefixList: ["string"], fileShareList: ["string"]}, blobFilterDetails: {blobPathList: ["string"], blobPrefixList: ["string"], containerList: ["string"]}, dataAccountType: "string", filterFileDetails: [{filterFilePath: "string", filterFileType: "string"}]}}}}], dataImportDetails: [{accountDetails: {sharePassword: "string", dataAccountType: "string"}, logCollectionLevel: "string"}], expectedDataSizeInTeraBytes: "${int}", keyEncryptionKey: {identityProperties: {type: "string", userAssigned: {resourceId: "string"}}, kekType: "string", kekUrl: "string", kekVaultResourceID: "string"}, preferences: {encryptionPreferences: {doubleEncryption: "string"}, preferredDataCenterRegion: ["string"], reverseTransportPreferences: {preferredShipmentType: "string"}, storageAccountAccessTierPreferences: "string", transportPreferences: {preferredShipmentType: "string"}}, reverseShippingDetails: {contactDetails: {contactName: "string", mobile: "string", phone: "string", phoneExtension: "string"}, shippingAddress: {addressType: "string", city: "string", companyName: "string", country: "string", postalCode: "string", stateOrProvince: "string", streetAddress1: "string", streetAddress2: "string", streetAddress3: "string", zipExtendedCode: "string"}}, shippingAddress: {addressType: "string", city: "string", companyName: "string", country: "string", postalCode: "string", stateOrProvince: "string", streetAddress1: "string", streetAddress2: "string", streetAddress3: "string", zipExtendedCode: "string"}, jobDetailsType: "string"}, transferType: "string"}, sku: {displayName: "string", family: "string", name: "string"}}
    );
  }
}
