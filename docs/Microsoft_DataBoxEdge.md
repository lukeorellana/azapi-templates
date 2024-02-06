## Microsoft.DataBoxEdge/dataBoxEdgeDevices@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices@2022-12-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
  }
  body = jsonencode({
    properties = {
      dataResidency = {
        type = "string"
      }
    }
    sku = {
      name = "string"
      tier = "Standard"
    }
    etag = "string"
  })
}

```

## Microsoft.DataBoxEdge/dataBoxEdgeDevices/bandwidthSchedules@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/bandwidthSchedules@2022-12-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      days = [
        "string"
      ]
      rateInMbps = int
      start = "string"
      stop = "string"
    }
  })
}

```

## Microsoft.DataBoxEdge/dataBoxEdgeDevices/diagnosticProactiveLogCollectionSettings@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/diagnosticProactiveLogCollectionSettings@2022-12-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      userConsent = "string"
    }
  })
}

```

## Microsoft.DataBoxEdge/dataBoxEdgeDevices/diagnosticRemoteSupportSettings@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/diagnosticRemoteSupportSettings@2022-12-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      remoteSupportSettingsList = [
        {
          accessLevel = "string"
          expirationTimeStampInUTC = "string"
          remoteApplicationType = "string"
        }
      ]
    }
  })
}

```

## Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders@2022-12-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      contactInformation = {
        companyName = "string"
        contactPerson = "string"
        emailList = [
          "string"
        ]
        phone = "string"
      }
      shipmentType = "string"
      shippingAddress = {
        addressLine1 = "string"
        addressLine2 = "string"
        addressLine3 = "string"
        city = "string"
        country = "string"
        postalCode = "string"
        state = "string"
      }
    }
  })
}

```

## Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles@2022-12-01-preview"
  name = "string"
  parent_id = "string"
  // For remaining properties, see dataBoxEdgeDevices/roles objects
  body = jsonencode({
    kind = "string"
  })
}

```

## Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/addons@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/addons@2022-12-01-preview"
  name = "string"
  parent_id = "string"
  // For remaining properties, see dataBoxEdgeDevices/roles/addons objects
  body = jsonencode({
    kind = "string"
  })
}

```

## Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/monitoringConfig@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/monitoringConfig@2022-12-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      metricConfigurations = [
        {
          counterSets = [
            {
              counters = [
                {
                  additionalDimensions = [
                    {
                      sourceName = "string"
                      sourceType = "string"
                    }
                  ]
                  dimensionFilter = [
                    {
                      sourceName = "string"
                      sourceType = "string"
                    }
                  ]
                  instance = "string"
                  name = "string"
                }
              ]
            }
          ]
          mdmAccount = "string"
          metricNameSpace = "string"
          resourceId = "string"
        }
      ]
    }
  })
}

```

## Microsoft.DataBoxEdge/dataBoxEdgeDevices/shares@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/shares@2022-12-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      accessProtocol = "string"
      azureContainerInfo = {
        containerName = "string"
        dataFormat = "string"
        storageAccountCredentialId = "string"
      }
      clientAccessRights = [
        {
          accessPermission = "string"
          client = "string"
        }
      ]
      dataPolicy = "string"
      description = "string"
      monitoringStatus = "string"
      refreshDetails = {
        errorManifestFile = "string"
        inProgressRefreshJobId = "string"
        lastCompletedRefreshJobTimeInUTC = "string"
        lastJob = "string"
      }
      shareStatus = "string"
      userAccessRights = [
        {
          accessType = "string"
          userId = "string"
        }
      ]
    }
  })
}

```

## Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccountCredentials@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccountCredentials@2022-12-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      accountKey = {
        encryptionAlgorithm = "string"
        encryptionCertThumbprint = "string"
        value = "string"
      }
      accountType = "string"
      alias = "string"
      blobDomainName = "string"
      connectionString = "string"
      sslStatus = "string"
      storageAccountId = "string"
      userName = "string"
    }
  })
}

```

## Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts@2022-12-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      dataPolicy = "string"
      description = "string"
      storageAccountCredentialId = "string"
      storageAccountStatus = "string"
    }
  })
}

```

## Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts/containers@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts/containers@2022-12-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      dataFormat = "string"
    }
  })
}

```

## Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers@2022-12-01-preview"
  name = "string"
  parent_id = "string"
  // For remaining properties, see dataBoxEdgeDevices/triggers objects
  body = jsonencode({
    kind = "string"
  })
}

```

## Microsoft.DataBoxEdge/dataBoxEdgeDevices/users@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/users@2022-12-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      encryptedPassword = {
        encryptionAlgorithm = "string"
        encryptionCertThumbprint = "string"
        value = "string"
      }
      userType = "string"
    }
  })
}

```

