```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBox/jobs@2022-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      deliveryInfo = {
        scheduledDateTime = "string"
      }
      deliveryType = "string"
      details = {
        contactDetails = {
          contactName = "string"
          emailList = [
            "string"
          ]
          mobile = "string"
          notificationPreference = [
            {
              sendNotification = bool
              stageName = "string"
            }
          ]
          phone = "string"
          phoneExtension = "string"
        }
        dataExportDetails = [
          {
            accountDetails = {
              sharePassword = "string"
              dataAccountType = "string"
              // For remaining properties, see DataAccountDetails objects
            }
            logCollectionLevel = "string"
            transferConfiguration = {
              transferAllDetails = {
                include = {
                  dataAccountType = "string"
                  transferAllBlobs = bool
                  transferAllFiles = bool
                }
              }
              transferConfigurationType = "string"
              transferFilterDetails = {
                include = {
                  azureFileFilterDetails = {
                    filePathList = [
                      "string"
                    ]
                    filePrefixList = [
                      "string"
                    ]
                    fileShareList = [
                      "string"
                    ]
                  }
                  blobFilterDetails = {
                    blobPathList = [
                      "string"
                    ]
                    blobPrefixList = [
                      "string"
                    ]
                    containerList = [
                      "string"
                    ]
                  }
                  dataAccountType = "string"
                  filterFileDetails = [
                    {
                      filterFilePath = "string"
                      filterFileType = "string"
                    }
                  ]
                }
              }
            }
          }
        ]
        dataImportDetails = [
          {
            accountDetails = {
              sharePassword = "string"
              dataAccountType = "string"
              // For remaining properties, see DataAccountDetails objects
            }
            logCollectionLevel = "string"
          }
        ]
        expectedDataSizeInTeraBytes = int
        keyEncryptionKey = {
          identityProperties = {
            type = "string"
            userAssigned = {
              resourceId = "string"
            }
          }
          kekType = "string"
          kekUrl = "string"
          kekVaultResourceID = "string"
        }
        preferences = {
          encryptionPreferences = {
            doubleEncryption = "string"
          }
          preferredDataCenterRegion = [
            "string"
          ]
          reverseTransportPreferences = {
            preferredShipmentType = "string"
          }
          storageAccountAccessTierPreferences = "string"
          transportPreferences = {
            preferredShipmentType = "string"
          }
        }
        reverseShippingDetails = {
          contactDetails = {
            contactName = "string"
            mobile = "string"
            phone = "string"
            phoneExtension = "string"
          }
          shippingAddress = {
            addressType = "string"
            city = "string"
            companyName = "string"
            country = "string"
            postalCode = "string"
            stateOrProvince = "string"
            streetAddress1 = "string"
            streetAddress2 = "string"
            streetAddress3 = "string"
            zipExtendedCode = "string"
          }
        }
        shippingAddress = {
          addressType = "string"
          city = "string"
          companyName = "string"
          country = "string"
          postalCode = "string"
          stateOrProvince = "string"
          streetAddress1 = "string"
          streetAddress2 = "string"
          streetAddress3 = "string"
          zipExtendedCode = "string"
        }
        jobDetailsType = "string"
        // For remaining properties, see JobDetails objects
      }
      transferType = "string"
    }
    sku = {
      displayName = "string"
      family = "string"
      name = "string"
    }
  })
}

```

### jobs

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-24Valid characters:Alphanumerics, hyphens, underscores and periods. |
| location | The location of the resource. This will be one of the supported and registered Azure Regions (e.g. West US, East US, Southeast Asia, etc.). The region of a resource cannot be changed once it is created, but if an identical region is specified on update the request will succeed. | string (required) |
| tags | The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). | Dictionary of tag names and values. SeeTags in templates |
| sku | The sku type. | Sku(required) |
| identity | Msi identity of the resource | ResourceIdentity |
| properties | Properties of a job. | JobProperties(required) |


### ResourceIdentity

| Name | Description | Value |
|-|-|-|
| type | Identity type | string |
| userAssignedIdentities | User Assigned Identities | object |


### JobProperties

| Name | Description | Value |
|-|-|-|
| deliveryInfo | Delivery Info of Job. | JobDeliveryInfo |
| deliveryType | Delivery type of Job. | 'NonScheduled''Scheduled' |
| details | Details of a job run. This field will only be sent for expand details filter. | JobDetails |
| transferType | Type of the data transfer. | 'ExportFromAzure''ImportToAzure' (required) |


### JobDeliveryInfo

| Name | Description | Value |
|-|-|-|
| scheduledDateTime | Scheduled date time. | string |


### JobDetails

| Name | Description | Value |
|-|-|-|
| contactDetails | Contact details for notification and shipping. | ContactDetails(required) |
| dataExportDetails | Details of the data to be exported from azure. | DataExportDetails[] |
| dataImportDetails | Details of the data to be imported into azure. | DataImportDetails[] |
| expectedDataSizeInTeraBytes | The expected size of the data, which needs to be transferred in this job, in terabytes. | int |
| keyEncryptionKey | Details about which key encryption type is being used. | KeyEncryptionKey |
| preferences | Preferences for the order. | Preferences |
| reverseShippingDetails | Optional Reverse Shipping details for order. | ReverseShippingDetails |
| shippingAddress | Shipping address of the customer. | ShippingAddress |
| jobDetailsType | Set the object type | DataBoxDataBoxCustomerDiskDataBoxDiskDataBoxHeavy(required) |


### ContactDetails

| Name | Description | Value |
|-|-|-|
| contactName | Contact name of the person. | string (required) |
| emailList | List of Email-ids to be notified about job progress. | string[] (required) |
| mobile | Mobile number of the contact person. | string |
| notificationPreference | Notification preference for a job stage. | NotificationPreference[] |
| phone | Phone number of the contact person. | string (required) |
| phoneExtension | Phone extension number of the contact person. | string |


### NotificationPreference

| Name | Description | Value |
|-|-|-|
| sendNotification | Notification is required or not. | bool (required) |
| stageName | Name of the stage. | 'AtAzureDC''Created''DataCopy''Delivered''DevicePrepared''Dispatched''PickedUp''ShippedToCustomer' (required) |


### DataExportDetails

| Name | Description | Value |
|-|-|-|
| accountDetails | Account details of the data to be transferred | DataAccountDetails(required) |
| logCollectionLevel | Level of the logs to be collected. | 'Error''Verbose' |
| transferConfiguration | Configuration for the data transfer. | TransferConfiguration(required) |


### DataAccountDetails

| Name | Description | Value |
|-|-|-|
| sharePassword | Password for all the shares to be created on the device. Should not be passed for TransferType:ExportFromAzure jobs. If this is not passed, the service will generate password itself. This will not be returned in Get Call. Password Requirements :  Password must be minimum of 12 and maximum of 64 characters. Password must have at least one uppercase alphabet, one number and one special character. Password cannot have the following characters : IilLoO0 Password can have only alphabets, numbers and these characters : @#-$%^!+=;:_()]+ | string |
| dataAccountType | Set the object type | ManagedDiskStorageAccount(required) |


### ManagedDiskDetails

| Name | Description | Value |
|-|-|-|
| dataAccountType | Account Type of the data to be transferred. | 'ManagedDisk' (required) |
| resourceGroupId | Resource Group Id of the compute disks. | string (required) |
| stagingStorageAccountId | Resource Id of the storage account that can be used to copy the vhd for staging. | string (required) |


### StorageAccountDetails

| Name | Description | Value |
|-|-|-|
| dataAccountType | Account Type of the data to be transferred. | 'StorageAccount' (required) |
| storageAccountId | Storage Account Resource Id. | string (required) |


### TransferConfiguration

| Name | Description | Value |
|-|-|-|
| transferAllDetails | Map of filter type and the details to transfer all data. This field is required only if the TransferConfigurationType is given as TransferAll | TransferConfigurationTransferAllDetails |
| transferConfigurationType | Type of the configuration for transfer. | 'TransferAll''TransferUsingFilter' (required) |
| transferFilterDetails | Map of filter type and the details to filter. This field is required only if the TransferConfigurationType is given as TransferUsingFilter. | TransferConfigurationTransferFilterDetails |


### TransferConfigurationTransferAllDetails

| Name | Description | Value |
|-|-|-|
| include | Details to transfer all data. | TransferAllDetails |


### TransferAllDetails

| Name | Description | Value |
|-|-|-|
| dataAccountType | Type of the account of data | 'ManagedDisk''StorageAccount' (required) |
| transferAllBlobs | To indicate if all Azure blobs have to be transferred | bool |
| transferAllFiles | To indicate if all Azure Files have to be transferred | bool |


### TransferConfigurationTransferFilterDetails

| Name | Description | Value |
|-|-|-|
| include | Details of the filtering the transfer of data. | TransferFilterDetails |


### TransferFilterDetails

| Name | Description | Value |
|-|-|-|
| azureFileFilterDetails | Filter details to transfer Azure files. | AzureFileFilterDetails |
| blobFilterDetails | Filter details to transfer blobs. | BlobFilterDetails |
| dataAccountType | Type of the account of data. | 'ManagedDisk''StorageAccount' (required) |
| filterFileDetails | Details of the filter files to be used for data transfer. | FilterFileDetails[] |


### AzureFileFilterDetails

| Name | Description | Value |
|-|-|-|
| filePathList | List of full path of the files to be transferred. | string[] |
| filePrefixList | Prefix list of the Azure files to be transferred. | string[] |
| fileShareList | List of file shares to be transferred. | string[] |


### BlobFilterDetails

| Name | Description | Value |
|-|-|-|
| blobPathList | List of full path of the blobs to be transferred. | string[] |
| blobPrefixList | Prefix list of the Azure blobs to be transferred. | string[] |
| containerList | List of blob containers to be transferred. | string[] |


### FilterFileDetails

| Name | Description | Value |
|-|-|-|
| filterFilePath | Path of the file that contains the details of all items to transfer. | string (required) |
| filterFileType | Type of the filter file. | 'AzureBlob''AzureFile' (required) |


### DataImportDetails

| Name | Description | Value |
|-|-|-|
| accountDetails | Account details of the data to be transferred | DataAccountDetails(required) |
| logCollectionLevel | Level of the logs to be collected. | 'Error''Verbose' |


### KeyEncryptionKey

| Name | Description | Value |
|-|-|-|
| identityProperties | Managed identity properties used for key encryption. | IdentityProperties |
| kekType | Type of encryption key used for key encryption. | 'CustomerManaged''MicrosoftManaged' (required) |
| kekUrl | Key encryption key. It is required in case of Customer managed KekType. | string |
| kekVaultResourceID | Kek vault resource id. It is required in case of Customer managed KekType. | string |


### IdentityProperties

| Name | Description | Value |
|-|-|-|
| type | Managed service identity type. | string |
| userAssigned | User assigned identity properties. | UserAssignedProperties |


### UserAssignedProperties

| Name | Description | Value |
|-|-|-|
| resourceId | Arm resource id for user assigned identity to be used to fetch MSI token. | string |


### Preferences

| Name | Description | Value |
|-|-|-|
| encryptionPreferences | Preferences related to the Encryption. | EncryptionPreferences |
| preferredDataCenterRegion | Preferred data center region. | string[] |
| reverseTransportPreferences | Optional Preferences related to the reverse shipment logistics of the sku. | TransportPreferences |
| storageAccountAccessTierPreferences | Preferences related to the Access Tier of storage accounts. | String array containing any of:'Archive' |
| transportPreferences | Preferences related to the shipment logistics of the sku. | TransportPreferences |


### EncryptionPreferences

| Name | Description | Value |
|-|-|-|
| doubleEncryption | Defines secondary layer of software-based encryption enablement. | 'Disabled''Enabled' |


### TransportPreferences

| Name | Description | Value |
|-|-|-|
| preferredShipmentType | Indicates Shipment Logistics type that the customer preferred. | 'CustomerManaged''MicrosoftManaged' (required) |


### ReverseShippingDetails

| Name | Description | Value |
|-|-|-|
| contactDetails | Contact Info. | ContactInfo |
| shippingAddress | Shipping address where customer wishes to receive the device. | ShippingAddress |


### ContactInfo

| Name | Description | Value |
|-|-|-|
| contactName | Contact name of the person. | string (required) |
| mobile | Mobile number of the contact person. | string |
| phone | Phone number of the contact person. | string (required) |
| phoneExtension | Phone extension number of the contact person. | string |


### ShippingAddress

| Name | Description | Value |
|-|-|-|
| addressType | Type of address. | 'Commercial''None''Residential' |
| city | Name of the City. | string |
| companyName | Name of the company. | string |
| country | Name of the Country. | string (required) |
| postalCode | Postal code. | string |
| stateOrProvince | Name of the State or Province. | string |
| streetAddress1 | Street Address line 1. | string (required) |
| streetAddress2 | Street Address line 2. | string |
| streetAddress3 | Street Address line 3. | string |
| zipExtendedCode | Extended Zip Code. | string |


### DataBoxJobDetails

| Name | Description | Value |
|-|-|-|
| jobDetailsType | Indicates the type of job details. | 'DataBox' (required) |
| devicePassword | Set Device password for unlocking Databox. Should not be passed for TransferType:ExportFromAzure jobs. If this is not passed, the service will generate password itself. This will not be returned in Get Call. Password Requirements :  Password must be minimum of 12 and maximum of 64 characters. Password must have at least one uppercase alphabet, one number and one special character. Password cannot have the following characters : IilLoO0 Password can have only alphabets, numbers and these characters : @#-$%^!+=;:_()]+ | string |


### DataBoxCustomerDiskJobDetails

| Name | Description | Value |
|-|-|-|
| jobDetailsType | Indicates the type of job details. | 'DataBoxCustomerDisk' (required) |
| enableManifestBackup | Flag to indicate if disk manifest should be backed-up in the Storage Account. | bool |
| importDiskDetailsCollection | Contains the map of disk serial number to the disk details for import jobs. | object |
| returnToCustomerPackageDetails | Return package shipping details. | PackageCarrierDetails(required) |


### PackageCarrierDetails

| Name | Description | Value |
|-|-|-|
| carrierAccountNumber | Carrier Account Number of customer for customer disk. | string |
| carrierName | Name of the carrier. | string |
| trackingId | Tracking Id of shipment. | string |


### DataBoxDiskJobDetails

| Name | Description | Value |
|-|-|-|
| jobDetailsType | Indicates the type of job details. | 'DataBoxDisk' (required) |
| passkey | User entered passkey for DataBox Disk job. | string |
| preferredDisks | User preference on what size disks are needed for the job. The map is from the disk size in TB to the count. Eg. {2,5} means 5 disks of 2 TB size. Key is string but will be checked against an int. | object |


### DataBoxHeavyJobDetails

| Name | Description | Value |
|-|-|-|
| jobDetailsType | Indicates the type of job details. | 'DataBoxHeavy' (required) |
| devicePassword | Set Device password for unlocking Databox Heavy. Should not be passed for TransferType:ExportFromAzure jobs. If this is not passed, the service will generate password itself. This will not be returned in Get Call. Password Requirements :  Password must be minimum of 12 and maximum of 64 characters. Password must have at least one uppercase alphabet, one number and one special character. Password cannot have the following characters : IilLoO0 Password can have only alphabets, numbers and these characters : @#-$%^!+=;:_()]+ | string |


### Sku

| Name | Description | Value |
|-|-|-|
| displayName | The display name of the sku. | string |
| family | The sku family. | string |
| name | The sku name. | 'DataBox''DataBoxCustomerDisk''DataBoxDisk''DataBoxHeavy' (required) |


