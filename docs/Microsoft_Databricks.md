## Microsoft.Databricks/accessConnectors@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Databricks/accessConnectors@2022-10-01-preview"
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
    properties = {}
  })
}

```

## Microsoft.Databricks/workspaces@2023-02-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Databricks/workspaces@2023-02-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      authorizations = [
        {
          principalId = "string"
          roleDefinitionId = "string"
        }
      ]
      createdBy = {}
      encryption = {
        entities = {
          managedDisk = {
            keySource = "Microsoft.Keyvault"
            keyVaultProperties = {
              keyName = "string"
              keyVaultUri = "string"
              keyVersion = "string"
            }
            rotationToLatestKeyVersionEnabled = bool
          }
          managedServices = {
            keySource = "Microsoft.Keyvault"
            keyVaultProperties = {
              keyName = "string"
              keyVaultUri = "string"
              keyVersion = "string"
            }
          }
        }
      }
      managedDiskIdentity = {}
      managedResourceGroupId = "string"
      parameters = {
        amlWorkspaceId = {
          value = "string"
        }
        customPrivateSubnetName = {
          value = "string"
        }
        customPublicSubnetName = {
          value = "string"
        }
        customVirtualNetworkId = {
          value = "string"
        }
        enableNoPublicIp = {
          value = bool
        }
        encryption = {
          value = {
            KeyName = "string"
            keySource = "string"
            keyvaulturi = "string"
            keyversion = "string"
          }
        }
        loadBalancerBackendPoolName = {
          value = "string"
        }
        loadBalancerId = {
          value = "string"
        }
        natGatewayName = {
          value = "string"
        }
        prepareEncryption = {
          value = bool
        }
        publicIpName = {
          value = "string"
        }
        requireInfrastructureEncryption = {
          value = bool
        }
        storageAccountName = {
          value = "string"
        }
        storageAccountSkuName = {
          value = "string"
        }
        vnetAddressPrefix = {
          value = "string"
        }
      }
      publicNetworkAccess = "string"
      requiredNsgRules = "string"
      storageAccountIdentity = {}
      uiDefinitionUri = "string"
      updatedBy = {}
    }
    sku = {
      name = "string"
      tier = "string"
    }
  })
}

```

## Microsoft.Databricks/workspaces/privateEndpointConnections@2023-02-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Databricks/workspaces/privateEndpointConnections@2023-02-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupIds = [
        "string"
      ]
      privateEndpoint = {}
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
  })
}

```

## Microsoft.Databricks/workspaces/virtualNetworkPeerings@2023-02-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Databricks/workspaces/virtualNetworkPeerings@2023-02-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allowForwardedTraffic = bool
      allowGatewayTransit = bool
      allowVirtualNetworkAccess = bool
      databricksAddressSpace = {
        addressPrefixes = [
          "string"
        ]
      }
      databricksVirtualNetwork = {
        id = "string"
      }
      remoteAddressSpace = {
        addressPrefixes = [
          "string"
        ]
      }
      remoteVirtualNetwork = {
        id = "string"
      }
      useRemoteGateways = bool
    }
  })
}

```

