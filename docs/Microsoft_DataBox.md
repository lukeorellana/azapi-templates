## Microsoft.DataBox/jobs@2022-09-01

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

