## Microsoft.HybridNetwork/configurationGroupValues@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridNetwork/configurationGroupValues@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      configurationGroupSchemaResourceReference = {
        idType = "string"
        // For remaining properties, see DeploymentResourceIdReference objects
      }
      configurationType = "string"
      // For remaining properties, see ConfigurationGroupValuePropertiesFormat objects
    }
  })
}

```

## Microsoft.HybridNetwork/devices@2022-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridNetwork/devices@2022-01-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      deviceType = "string"
      // For remaining properties, see DevicePropertiesFormat objects
    }
  })
}

```

## Microsoft.HybridNetwork/locations/vendors/networkFunctions@2022-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridNetwork/locations/vendors/networkFunctions@2022-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      networkFunctionVendorConfigurations = [
        {
          networkInterfaces = [
            {
              ipConfigurations = [
                {
                  dnsServers = [
                    "string"
                  ]
                  gateway = "string"
                  ipAddress = "string"
                  ipAllocationMethod = "string"
                  ipVersion = "string"
                  subnet = "string"
                }
              ]
              macAddress = "string"
              networkInterfaceName = "string"
              vmSwitchType = "string"
            }
          ]
          osProfile = {
            adminUsername = "string"
            customData = "string"
            customDataRequired = bool
            linuxConfiguration = {
              ssh = {
                publicKeys = [
                  {
                    keyData = "string"
                    path = "string"
                  }
                ]
              }
            }
          }
          roleName = "string"
        }
      ]
      vendorProvisioningState = "string"
    }
  })
}

```

## Microsoft.HybridNetwork/networkFunctions@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridNetwork/networkFunctions@2023-09-01"
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
      allowSoftwareUpdate = bool
      networkFunctionDefinitionVersionResourceReference = {
        idType = "string"
        // For remaining properties, see DeploymentResourceIdReference objects
      }
      nfviId = "string"
      nfviType = "string"
      roleOverrideValues = [
        "string"
      ]
      configurationType = "string"
      // For remaining properties, see NetworkFunctionPropertiesFormat objects
    }
    etag = "string"
  })
}

```

## Microsoft.HybridNetwork/publishers@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridNetwork/publishers@2023-09-01"
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
      scope = "string"
    }
  })
}

```

## Microsoft.HybridNetwork/publishers/artifactStores@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridNetwork/publishers/artifactStores@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      managedResourceGroupConfiguration = {
        location = "string"
        name = "string"
      }
      replicationStrategy = "string"
      storeType = "string"
    }
  })
}

```

## Microsoft.HybridNetwork/publishers/artifactStores/artifactManifests@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridNetwork/publishers/artifactStores/artifactManifests@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      artifacts = [
        {
          artifactName = "string"
          artifactType = "string"
          artifactVersion = "string"
        }
      ]
    }
  })
}

```

## Microsoft.HybridNetwork/publishers/configurationGroupSchemas@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridNetwork/publishers/configurationGroupSchemas@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      description = "string"
      schemaDefinition = "string"
    }
  })
}

```

## Microsoft.HybridNetwork/publishers/networkFunctionDefinitionGroups@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridNetwork/publishers/networkFunctionDefinitionGroups@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      description = "string"
    }
  })
}

```

## Microsoft.HybridNetwork/publishers/networkFunctionDefinitionGroups/networkFunctionDefinitionVersions@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridNetwork/publishers/networkFunctionDefinitionGroups/networkFunctionDefinitionVersions@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      deployParameters = "string"
      description = "string"
      networkFunctionType = "string"
      // For remaining properties, see NetworkFunctionDefinitionVersionPropertiesFormat objects
    }
  })
}

```

## Microsoft.HybridNetwork/publishers/networkServiceDesignGroups@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridNetwork/publishers/networkServiceDesignGroups@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      description = "string"
    }
  })
}

```

## Microsoft.HybridNetwork/publishers/networkServiceDesignGroups/networkServiceDesignVersions@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridNetwork/publishers/networkServiceDesignGroups/networkServiceDesignVersions@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      configurationGroupSchemaReferences = {
        {customized property} = {
          id = "string"
        }
      }
      description = "string"
      nfvisFromSite = {
        {customized property} = {
          name = "string"
          type = "string"
        }
      }
      resourceElementTemplates = [
        {
          dependsOnProfile = {
            installDependsOn = [
              "string"
            ]
            uninstallDependsOn = [
              "string"
            ]
            updateDependsOn = [
              "string"
            ]
          }
          name = "string"
          type = "string"
          // For remaining properties, see ResourceElementTemplate objects
        }
      ]
    }
  })
}

```

## Microsoft.HybridNetwork/siteNetworkServices@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridNetwork/siteNetworkServices@2023-09-01"
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
      desiredStateConfigurationGroupValueReferences = {
        {customized property} = {
          id = "string"
        }
      }
      managedResourceGroupConfiguration = {
        location = "string"
        name = "string"
      }
      networkServiceDesignVersionResourceReference = {
        idType = "string"
        // For remaining properties, see DeploymentResourceIdReference objects
      }
      siteReference = {
        id = "string"
      }
    }
    sku = {
      name = "string"
    }
  })
}

```

## Microsoft.HybridNetwork/sites@2023-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridNetwork/sites@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      nfvis = [
        {
          name = "string"
          nfviType = "string"
          // For remaining properties, see NFVIs objects
        }
      ]
    }
  })
}

```

## Microsoft.HybridNetwork/vendors@2022-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridNetwork/vendors@2022-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {}
  })
}

```

## Microsoft.HybridNetwork/vendors/vendorSkus@2022-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridNetwork/vendors/vendorSkus@2022-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      deploymentMode = "string"
      networkFunctionTemplate = {
        networkFunctionRoleConfigurations = [
          {
            customProfile = {
              metadataConfigurationPath = "string"
            }
            networkInterfaces = [
              {
                ipConfigurations = [
                  {
                    dnsServers = [
                      "string"
                    ]
                    gateway = "string"
                    ipAddress = "string"
                    ipAllocationMethod = "string"
                    ipVersion = "string"
                    subnet = "string"
                  }
                ]
                macAddress = "string"
                networkInterfaceName = "string"
                vmSwitchType = "string"
              }
            ]
            osProfile = {
              adminUsername = "string"
              customData = "string"
              customDataRequired = bool
              linuxConfiguration = {
                ssh = {
                  publicKeys = [
                    {
                      keyData = "string"
                      path = "string"
                    }
                  ]
                }
              }
            }
            roleName = "string"
            roleType = "string"
            storageProfile = {
              dataDisks = [
                {
                  createOption = "string"
                  diskSizeGB = int
                  name = "string"
                }
              ]
              imageReference = {
                exactVersion = "string"
                offer = "string"
                publisher = "string"
                sku = "string"
                version = "string"
              }
              osDisk = {
                diskSizeGB = int
                name = "string"
                osType = "string"
                vhd = {
                  uri = "string"
                }
              }
            }
            virtualMachineSize = "string"
          }
        ]
      }
      networkFunctionType = "string"
      preview = bool
      skuType = "string"
    }
  })
}

```

