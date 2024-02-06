## Microsoft.Batch/batchAccounts@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Batch/batchAccounts@2022-10-01"
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
      allowedAuthenticationModes = [
        "string"
      ]
      autoStorage = {
        authenticationMode = "string"
        nodeIdentityReference = {
          resourceId = "string"
        }
        storageAccountId = "string"
      }
      encryption = {
        keySource = "string"
        keyVaultProperties = {
          keyIdentifier = "string"
        }
      }
      keyVaultReference = {
        id = "string"
        url = "string"
      }
      networkProfile = {
        accountAccess = {
          defaultAction = "string"
          ipRules = [
            {
              action = "Allow"
              value = "string"
            }
          ]
        }
        nodeManagementAccess = {
          defaultAction = "string"
          ipRules = [
            {
              action = "Allow"
              value = "string"
            }
          ]
        }
      }
      poolAllocationMode = "string"
      publicNetworkAccess = "string"
    }
  })
}

```

### batchAccounts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-24Valid characters:Lowercase letters and numbers. |
| location | The region in which to create the account. | string (required) |
| tags | The user-specified tags associated with the account. | Dictionary of tag names and values. SeeTags in templates |
| identity | The identity of the Batch account. | BatchAccountIdentity |
| properties | The properties of the Batch account. | BatchAccountCreatePropertiesOrBatchAccountProperties |


### BatchAccountIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of identity used for the Batch account. | 'None''SystemAssigned''UserAssigned' (required) |
| userAssignedIdentities | The list of user identities associated with the Batch account. | object |


### BatchAccountCreatePropertiesOrBatchAccountProperties

| Name | Description | Value |
|-|-|-|
| allowedAuthenticationModes | List of allowed authentication modes for the Batch account that can be used to authenticate with the data plane. This does not affect authentication with the control plane. | String array containing any of:'AAD''SharedKey''TaskAuthenticationToken' |
| autoStorage | The properties related to the auto-storage account. | AutoStorageBasePropertiesOrAutoStorageProperties |
| encryption | Configures how customer data is encrypted inside the Batch account. By default, accounts are encrypted using a Microsoft managed key. For additional control, a customer-managed key can be used instead. | EncryptionProperties |
| keyVaultReference | A reference to the Azure key vault associated with the Batch account. | KeyVaultReference |
| networkProfile | The network profile only takes effect when publicNetworkAccess is enabled. | NetworkProfile |
| poolAllocationMode | The pool allocation mode also affects how clients may authenticate to the Batch Service API. If the mode is BatchService, clients may authenticate using access keys or Azure Active Directory. If the mode is UserSubscription, clients must use Azure Active Directory. The default is BatchService. | 'BatchService''UserSubscription' |
| publicNetworkAccess | If not specified, the default value is 'enabled'. | 'Disabled''Enabled' |


### AutoStorageBasePropertiesOrAutoStorageProperties

| Name | Description | Value |
|-|-|-|
| authenticationMode | The authentication mode which the Batch service will use to manage the auto-storage account. | 'BatchAccountManagedIdentity''StorageKeys' |
| nodeIdentityReference | The identity referenced here must be assigned to pools which have compute nodes that need access to auto-storage. | ComputeNodeIdentityReference |
| storageAccountId | The resource ID of the storage account to be used for auto-storage account. | string (required) |


### ComputeNodeIdentityReference

| Name | Description | Value |
|-|-|-|
| resourceId | The ARM resource id of the user assigned identity. | string |


### EncryptionProperties

| Name | Description | Value |
|-|-|-|
| keySource | Type of the key source. | 'Microsoft.Batch''Microsoft.KeyVault' |
| keyVaultProperties | Additional details when using Microsoft.KeyVault | KeyVaultProperties |


### KeyVaultProperties

| Name | Description | Value |
|-|-|-|
| keyIdentifier | Full path to the versioned secret. Examplehttps://mykeyvault.vault.azure.net/keys/testkey/6e34a81fef704045975661e297a4c053. To be usable the following prerequisites must be met:The Batch Account has a System Assigned identityThe account identity has been granted Key/Get, Key/Unwrap and Key/Wrap permissionsThe KeyVault has soft-delete and purge protection enabled | string |


### KeyVaultReference

| Name | Description | Value |
|-|-|-|
| id | The resource ID of the Azure key vault associated with the Batch account. | string (required) |
| url | The URL of the Azure key vault associated with the Batch account. | string (required) |


### NetworkProfile

| Name | Description | Value |
|-|-|-|
| accountAccess | Network access profile for batchAccount endpoint (Batch account data plane API). | EndpointAccessProfile |
| nodeManagementAccess | Network access profile for nodeManagement endpoint (Batch service managing compute nodes for Batch pools). | EndpointAccessProfile |


### EndpointAccessProfile

| Name | Description | Value |
|-|-|-|
| defaultAction | Default action for endpoint access. It is only applicable when publicNetworkAccess is enabled. | 'Allow''Deny' (required) |
| ipRules | Array of IP ranges to filter client IP address. | IPRule[] |


### IPRule

| Name | Description | Value |
|-|-|-|
| action | Action when client IP address is matched. | 'Allow' (required) |
| value | IPv4 address, or IPv4 address range in CIDR format. | string (required) |
## Microsoft.Batch/batchAccounts/applications@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Batch/batchAccounts/applications@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allowUpdates = bool
      defaultVersion = "string"
      displayName = "string"
    }
  })
}

```

### batchAccounts/applications

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-64Valid characters:Alphanumerics, underscores, and hyphens. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:batchAccounts |
| properties | The properties associated with the Application. | ApplicationProperties |


### ApplicationProperties

| Name | Description | Value |
|-|-|-|
| allowUpdates | A value indicating whether packages within the application may be overwritten using the same version string. | bool |
| defaultVersion | The package to use if a client requests the application but does not specify a version. This property can only be set to the name of an existing package. | string |
| displayName | The display name for the application. | string |
## Microsoft.Batch/batchAccounts/applications/versions@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Batch/batchAccounts/applications/versions@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {}
  })
}

```

### batchAccounts/applications/versions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:applications |
| properties | The properties associated with the Application Package. | ApplicationPackageProperties |
## Microsoft.Batch/batchAccounts/certificates@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Batch/batchAccounts/certificates@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      data = "string"
      format = "string"
      password = "string"
      thumbprint = "string"
      thumbprintAlgorithm = "string"
    }
  })
}

```

### batchAccounts/certificates

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 5-45Valid characters:Alphanumerics, underscores, and hyphens. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:batchAccounts |
| properties | The properties associated with the certificate. | CertificateCreateOrUpdatePropertiesOrCertificateProp... |


### CertificateCreateOrUpdatePropertiesOrCertificateProp...

| Name | Description | Value |
|-|-|-|
| data | The maximum size is 10KB. | string (required) |
| format | The format of the certificate - either Pfx or Cer. If omitted, the default is Pfx. | 'Cer''Pfx' |
| password | This must not be specified if the certificate format is Cer. | string |
| thumbprint | This must match the thumbprint from the name. | string |
| thumbprintAlgorithm | This must match the first portion of the certificate name. Currently required to be 'SHA1'. | string |
## Microsoft.Batch/batchAccounts/pools@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Batch/batchAccounts/pools@2022-10-01"
  name = "string"
  parent_id = "string"
  identity {
    type =  "UserAssigned"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      applicationLicenses = [
        "string"
      ]
      applicationPackages = [
        {
          id = "string"
          version = "string"
        }
      ]
      certificates = [
        {
          id = "string"
          storeLocation = "string"
          storeName = "string"
          visibility = [
            "string"
          ]
        }
      ]
      deploymentConfiguration = {
        cloudServiceConfiguration = {
          osFamily = "string"
          osVersion = "string"
        }
        virtualMachineConfiguration = {
          containerConfiguration = {
            containerImageNames = [
              "string"
            ]
            containerRegistries = [
              {
                identityReference = {
                  resourceId = "string"
                }
                password = "string"
                registryServer = "string"
                username = "string"
              }
            ]
            type = "DockerCompatible"
          }
          dataDisks = [
            {
              caching = "string"
              diskSizeGB = int
              lun = int
              storageAccountType = "string"
            }
          ]
          diskEncryptionConfiguration = {
            targets = [
              "string"
            ]
          }
          extensions = [
            {
              autoUpgradeMinorVersion = bool
              name = "string"
              provisionAfterExtensions = [
                "string"
              ]
              publisher = "string"
              type = "string"
              typeHandlerVersion = "string"
            }
          ]
          imageReference = {
            id = "string"
            offer = "string"
            publisher = "string"
            sku = "string"
            version = "string"
          }
          licenseType = "string"
          nodeAgentSkuId = "string"
          nodePlacementConfiguration = {
            policy = "string"
          }
          osDisk = {
            ephemeralOSDiskSettings = {
              placement = "CacheDisk"
            }
          }
          windowsConfiguration = {
            enableAutomaticUpdates = bool
          }
        }
      }
      displayName = "string"
      interNodeCommunication = "string"
      metadata = [
        {
          name = "string"
          value = "string"
        }
      ]
      mountConfiguration = [
        {
          azureBlobFileSystemConfiguration = {
            accountKey = "string"
            accountName = "string"
            blobfuseOptions = "string"
            containerName = "string"
            identityReference = {
              resourceId = "string"
            }
            relativeMountPath = "string"
            sasKey = "string"
          }
          azureFileShareConfiguration = {
            accountKey = "string"
            accountName = "string"
            azureFileUrl = "string"
            mountOptions = "string"
            relativeMountPath = "string"
          }
          cifsMountConfiguration = {
            mountOptions = "string"
            password = "string"
            relativeMountPath = "string"
            source = "string"
            userName = "string"
          }
          nfsMountConfiguration = {
            mountOptions = "string"
            relativeMountPath = "string"
            source = "string"
          }
        }
      ]
      networkConfiguration = {
        dynamicVnetAssignmentScope = "string"
        endpointConfiguration = {
          inboundNatPools = [
            {
              backendPort = int
              frontendPortRangeEnd = int
              frontendPortRangeStart = int
              name = "string"
              networkSecurityGroupRules = [
                {
                  access = "string"
                  priority = int
                  sourceAddressPrefix = "string"
                  sourcePortRanges = [
                    "string"
                  ]
                }
              ]
              protocol = "string"
            }
          ]
        }
        publicIPAddressConfiguration = {
          ipAddressIds = [
            "string"
          ]
          provision = "string"
        }
        subnetId = "string"
      }
      scaleSettings = {
        autoScale = {
          evaluationInterval = "string"
          formula = "string"
        }
        fixedScale = {
          nodeDeallocationOption = "string"
          resizeTimeout = "string"
          targetDedicatedNodes = int
          targetLowPriorityNodes = int
        }
      }
      startTask = {
        commandLine = "string"
        containerSettings = {
          containerRunOptions = "string"
          imageName = "string"
          registry = {
            identityReference = {
              resourceId = "string"
            }
            password = "string"
            registryServer = "string"
            username = "string"
          }
          workingDirectory = "string"
        }
        environmentSettings = [
          {
            name = "string"
            value = "string"
          }
        ]
        maxTaskRetryCount = int
        resourceFiles = [
          {
            autoStorageContainerName = "string"
            blobPrefix = "string"
            fileMode = "string"
            filePath = "string"
            httpUrl = "string"
            identityReference = {
              resourceId = "string"
            }
            storageContainerUrl = "string"
          }
        ]
        userIdentity = {
          autoUser = {
            elevationLevel = "string"
            scope = "string"
          }
          userName = "string"
        }
        waitForSuccess = bool
      }
      targetNodeCommunicationMode = "string"
      taskSchedulingPolicy = {
        nodeFillType = "string"
      }
      taskSlotsPerNode = int
      userAccounts = [
        {
          elevationLevel = "string"
          linuxUserConfiguration = {
            gid = int
            sshPrivateKey = "string"
            uid = int
          }
          name = "string"
          password = "string"
          windowsUserConfiguration = {
            loginMode = "string"
          }
        }
      ]
      vmSize = "string"
    }
  })
}

```

### batchAccounts/pools

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-64Valid characters:Alphanumerics, underscores, and hyphens. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:batchAccounts |
| identity | The type of identity used for the Batch Pool. | BatchPoolIdentity |
| properties | The properties associated with the pool. | PoolProperties |


### BatchPoolIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of identity used for the Batch Pool. | 'None''UserAssigned' (required) |
| userAssignedIdentities | The list of user identities associated with the Batch pool. | object |


### PoolProperties

| Name | Description | Value |
|-|-|-|
| applicationLicenses | The list of application licenses must be a subset of available Batch service application licenses. If a license is requested which is not supported, pool creation will fail. | string[] |
| applicationPackages | Changes to application package references affect all new compute nodes joining the pool, but do not affect compute nodes that are already in the pool until they are rebooted or reimaged. There is a maximum of 10 application package references on any given pool. | ApplicationPackageReference[] |
| certificates | For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.Warning: This property is deprecated and will be removed after February, 2024. Please use theAzure KeyVault Extensioninstead. | CertificateReference[] |
| deploymentConfiguration | Using CloudServiceConfiguration specifies that the nodes should be creating using Azure Cloud Services (PaaS), while VirtualMachineConfiguration uses Azure Virtual Machines (IaaS). | DeploymentConfiguration |
| displayName | The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. | string |
| interNodeCommunication | This imposes restrictions on which nodes can be assigned to the pool. Enabling this value can reduce the chance of the requested number of nodes to be allocated in the pool. If not specified, this value defaults to 'Disabled'. | 'Disabled''Enabled' |
| metadata | The Batch service does not assign any meaning to metadata; it is solely for the use of user code. | MetadataItem[] |
| mountConfiguration | This supports Azure Files, NFS, CIFS/SMB, and Blobfuse. | MountConfiguration[] |
| networkConfiguration | The network configuration for a pool. | NetworkConfiguration |
| scaleSettings | Defines the desired size of the pool. This can either be 'fixedScale' where the requested targetDedicatedNodes is specified, or 'autoScale' which defines a formula which is periodically reevaluated. If this property is not specified, the pool will have a fixed scale with 0 targetDedicatedNodes. | ScaleSettings |
| startTask | In an PATCH (update) operation, this property can be set to an empty object to remove the start task from the pool. | StartTask |
| targetNodeCommunicationMode | If omitted, the default value is Default. | 'Classic''Default''Simplified' |
| taskSchedulingPolicy | If not specified, the default is spread. | TaskSchedulingPolicy |
| taskSlotsPerNode | The default value is 1. The maximum value is the smaller of 4 times the number of cores of the vmSize of the pool or 256. | int |
| userAccounts | The list of user accounts to be created on each node in the pool. | UserAccount[] |
| vmSize | For information about available sizes of virtual machines for Cloud Services pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (https://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall. For information about available VM sizes for pools using images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series). | string |


### ApplicationPackageReference

| Name | Description | Value |
|-|-|-|
| id | The ID of the application package to install. This must be inside the same batch account as the pool. This can either be a reference to a specific version or the default version if one exists. | string (required) |
| version | If this is omitted, and no default version is specified for this application, the request fails with the error code InvalidApplicationPackageReferences. If you are calling the REST API directly, the HTTP status code is 409. | string |


### CertificateReference

| Name | Description | Value |
|-|-|-|
| id | The fully qualified ID of the certificate to install on the pool. This must be inside the same batch account as the pool. | string (required) |
| storeLocation | The default value is currentUser. This property is applicable only for pools configured with Windows nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows image reference). For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory. | 'CurrentUser''LocalMachine' |
| storeName | This property is applicable only for pools configured with Windows nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows image reference). Common store names include: My, Root, CA, Trust, Disallowed, TrustedPeople, TrustedPublisher, AuthRoot, AddressBook, but any custom store name can also be used. The default value is My. | string |
| visibility | Which user accounts on the compute node should have access to the private data of the certificate. | String array containing any of:'RemoteUser''StartTask''Task' |


### DeploymentConfiguration

| Name | Description | Value |
|-|-|-|
| cloudServiceConfiguration | This property and virtualMachineConfiguration are mutually exclusive and one of the properties must be specified. This property cannot be specified if the Batch account was created with its poolAllocationMode property set to 'UserSubscription'. | CloudServiceConfiguration |
| virtualMachineConfiguration | This property and cloudServiceConfiguration are mutually exclusive and one of the properties must be specified. | VirtualMachineConfiguration |


### CloudServiceConfiguration

| Name | Description | Value |
|-|-|-|
| osFamily | Possible values are: 2 - OS Family 2, equivalent to Windows Server 2008 R2 SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS Family 4, equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent to Windows Server 2016. 6 - OS Family 6, equivalent to Windows Server 2019. For more information, see Azure Guest OS Releases (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases). | string (required) |
| osVersion | The default value is * which specifies the latest operating system version for the specified OS family. | string |


### VirtualMachineConfiguration

| Name | Description | Value |
|-|-|-|
| containerConfiguration | If specified, setup is performed on each node in the pool to allow tasks to run in containers. All regular tasks and job manager tasks run on this pool must specify the containerSettings property, and all other tasks may specify it. | ContainerConfiguration |
| dataDisks | This property must be specified if the compute nodes in the pool need to have empty data disks attached to them. | DataDisk[] |
| diskEncryptionConfiguration | If specified, encryption is performed on each node in the pool during node provisioning. | DiskEncryptionConfiguration |
| extensions | If specified, the extensions mentioned in this configuration will be installed on each node. | VMExtension[] |
| imageReference | A reference to an Azure Virtual Machines Marketplace image or the Azure Image resource of a custom Virtual Machine. To get the list of all imageReferences verified by Azure Batch, see the 'List supported node agent SKUs' operation. | ImageReference(required) |
| licenseType | This only applies to images that contain the Windows operating system, and should only be used when you hold valid on-premises licenses for the nodes which will be deployed. If omitted, no on-premises licensing discount is applied. Values are:Windows_Server - The on-premises license is for Windows Server.Windows_Client - The on-premises license is for Windows Client. | string |
| nodeAgentSkuId | The Batch node agent is a program that runs on each node in the pool, and provides the command-and-control interface between the node and the Batch service. There are different implementations of the node agent, known as SKUs, for different operating systems. You must specify a node agent SKU which matches the selected image reference. To get the list of supported node agent SKUs along with their list of verified image references, see the 'List supported node agent SKUs' operation. | string (required) |
| nodePlacementConfiguration | This configuration will specify rules on how nodes in the pool will be physically allocated. | NodePlacementConfiguration |
| osDisk | Contains configuration for ephemeral OSDisk settings. | OSDisk |
| windowsConfiguration | This property must not be specified if the imageReference specifies a Linux OS image. | WindowsConfiguration |


### ContainerConfiguration

| Name | Description | Value |
|-|-|-|
| containerImageNames | This is the full image reference, as would be specified to "docker pull". An image will be sourced from the default Docker registry unless the image is fully qualified with an alternative registry. | string[] |
| containerRegistries | If any images must be downloaded from a private registry which requires credentials, then those credentials must be provided here. | ContainerRegistry[] |
| type | The container technology to be used. | 'DockerCompatible' (required) |


### ContainerRegistry

| Name | Description | Value |
|-|-|-|
| identityReference | The reference to a user assigned identity associated with the Batch pool which a compute node will use. | ComputeNodeIdentityReference |
| password | The password to log into the registry server. | string |
| registryServer | If omitted, the default is "docker.io". | string |
| username | The user name to log into the registry server. | string |


### ComputeNodeIdentityReference

| Name | Description | Value |
|-|-|-|
| resourceId | The ARM resource id of the user assigned identity. | string |


### DataDisk

| Name | Description | Value |
|-|-|-|
| caching | Values are:none - The caching mode for the disk is not enabled.readOnly - The caching mode for the disk is read only.readWrite - The caching mode for the disk is read and write.The default value for caching is none. For information about the caching options see:https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/. | 'None''ReadOnly''ReadWrite' |
| diskSizeGB | The initial disk size in GB when creating new data disk. | int (required) |
| lun | The lun is used to uniquely identify each data disk. If attaching multiple disks, each should have a distinct lun. The value must be between 0 and 63, inclusive. | int (required) |
| storageAccountType | If omitted, the default is "Standard_LRS". Values are:Standard_LRS - The data disk should use standard locally redundant storage.Premium_LRS - The data disk should use premium locally redundant storage. | 'Premium_LRS''Standard_LRS' |


### DiskEncryptionConfiguration

| Name | Description | Value |
|-|-|-|
| targets | On Linux pool, only "TemporaryDisk" is supported; on Windows pool, "OsDisk" and "TemporaryDisk" must be specified. | String array containing any of:'OsDisk''TemporaryDisk' |


### VMExtension

| Name | Description | Value |
|-|-|-|
| autoUpgradeMinorVersion | Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. | bool |
| name | The name of the virtual machine extension. | string (required) |
| protectedSettings | The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. | For Bicep, you can use theany()function. |
| provisionAfterExtensions | Collection of extension names after which this extension needs to be provisioned. | string[] |
| publisher | The name of the extension handler publisher. | string (required) |
| settings | JSON formatted public settings for the extension. | For Bicep, you can use theany()function. |
| type | The type of the extensions. | string (required) |
| typeHandlerVersion | The version of script handler. | string |


### ImageReference

| Name | Description | Value |
|-|-|-|
| id | This property is mutually exclusive with other properties. The Shared Image Gallery image must have replicas in the same region as the Azure Batch account. For information about the firewall settings for the Batch node agent to communicate with the Batch service see /azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration. | string |
| offer | For example, UbuntuServer or WindowsServer. | string |
| publisher | For example, Canonical or MicrosoftWindowsServer. | string |
| sku | For example, 18.04-LTS or 2022-datacenter. | string |
| version | A value of 'latest' can be specified to select the latest version of an image. If omitted, the default is 'latest'. | string |


### NodePlacementConfiguration

| Name | Description | Value |
|-|-|-|
| policy | Allocation policy used by Batch Service to provision the nodes. If not specified, Batch will use the regional policy. | 'Regional''Zonal' |


### OSDisk

| Name | Description | Value |
|-|-|-|
| ephemeralOSDiskSettings | Specifies the ephemeral Disk Settings for the operating system disk used by the virtual machine. | DiffDiskSettings |


### DiffDiskSettings

| Name | Description | Value |
|-|-|-|
| placement | This property can be used by user in the request to choose which location the operating system should be in. e.g., cache disk space for Ephemeral OS disk provisioning. For more information on Ephemeral OS disk size requirements, please refer to Ephemeral OS disk size requirements for Windows VMs at /azure/virtual-machines/windows/ephemeral-os-disks#size-requirements and Linux VMs at /azure/virtual-machines/linux/ephemeral-os-disks#size-requirements. | 'CacheDisk' |


### WindowsConfiguration

| Name | Description | Value |
|-|-|-|
| enableAutomaticUpdates | If omitted, the default value is true. | bool |


### MetadataItem

| Name | Description | Value |
|-|-|-|
| name | The name of the metadata item. | string (required) |
| value | The value of the metadata item. | string (required) |


### MountConfiguration

| Name | Description | Value |
|-|-|-|
| azureBlobFileSystemConfiguration | This property is mutually exclusive with all other properties. | AzureBlobFileSystemConfiguration |
| azureFileShareConfiguration | This property is mutually exclusive with all other properties. | AzureFileShareConfiguration |
| cifsMountConfiguration | This property is mutually exclusive with all other properties. | CifsMountConfiguration |
| nfsMountConfiguration | This property is mutually exclusive with all other properties. | NFSMountConfiguration |


### AzureBlobFileSystemConfiguration

| Name | Description | Value |
|-|-|-|
| accountKey | This property is mutually exclusive with both sasKey and identity; exactly one must be specified. | string |
| accountName | The Azure Storage Account name. | string (required) |
| blobfuseOptions | These are 'net use' options in Windows and 'mount' options in Linux. | string |
| containerName | The Azure Blob Storage Container name. | string (required) |
| identityReference | This property is mutually exclusive with both accountKey and sasKey; exactly one must be specified. | ComputeNodeIdentityReference |
| relativeMountPath | All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable. | string (required) |
| sasKey | This property is mutually exclusive with both accountKey and identity; exactly one must be specified. | string |


### AzureFileShareConfiguration

| Name | Description | Value |
|-|-|-|
| accountKey | The Azure Storage account key. | string (required) |
| accountName | The Azure Storage account name. | string (required) |
| azureFileUrl | This is of the form 'https://{account}.file.core.windows.net/'. | string (required) |
| mountOptions | These are 'net use' options in Windows and 'mount' options in Linux. | string |
| relativeMountPath | All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable. | string (required) |


### CifsMountConfiguration

| Name | Description | Value |
|-|-|-|
| mountOptions | These are 'net use' options in Windows and 'mount' options in Linux. | string |
| password | The password to use for authentication against the CIFS file system. | string (required) |
| relativeMountPath | All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable. | string (required) |
| source | The URI of the file system to mount. | string (required) |
| userName | The user to use for authentication against the CIFS file system. | string (required) |


### NFSMountConfiguration

| Name | Description | Value |
|-|-|-|
| mountOptions | These are 'net use' options in Windows and 'mount' options in Linux. | string |
| relativeMountPath | All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable. | string (required) |
| source | The URI of the file system to mount. | string (required) |


### NetworkConfiguration

| Name | Description | Value |
|-|-|-|
| dynamicVnetAssignmentScope | The scope of dynamic vnet assignment. | 'job''none' |
| endpointConfiguration | Pool endpoint configuration is only supported on pools with the virtualMachineConfiguration property. | PoolEndpointConfiguration |
| publicIPAddressConfiguration | This property is only supported on Pools with the virtualMachineConfiguration property. | PublicIPAddressConfiguration |
| subnetId | The virtual network must be in the same region and subscription as the Azure Batch account. The specified subnet should have enough free IP addresses to accommodate the number of nodes in the pool. If the subnet doesn't have enough free IP addresses, the pool will partially allocate compute nodes and a resize error will occur. The 'MicrosoftAzureBatch' service principal must have the 'Classic Virtual Machine Contributor' Role-Based Access Control (RBAC) role for the specified VNet. The specified subnet must allow communication from the Azure Batch service to be able to schedule tasks on the compute nodes. This can be verified by checking if the specified VNet has any associated Network Security Groups (NSG). If communication to the compute nodes in the specified subnet is denied by an NSG, then the Batch service will set the state of the compute nodes to unusable. If the specified VNet has any associated Network Security Groups (NSG), then a few reserved system ports must be enabled for inbound communication. For pools created with a virtual machine configuration, enable ports 29876 and 29877, as well as port 22 for Linux and port 3389 for Windows. For pools created with a cloud service configuration, enable ports 10100, 20100, and 30100. Also enable outbound connections to Azure Storage on port 443. For cloudServiceConfiguration pools, only 'classic' VNETs are supported. For more details see: /azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration | string |


### PoolEndpointConfiguration

| Name | Description | Value |
|-|-|-|
| inboundNatPools | The maximum number of inbound NAT pools per Batch pool is 5. If the maximum number of inbound NAT pools is exceeded the request fails with HTTP status code 400. This cannot be specified if the IPAddressProvisioningType is NoPublicIPAddresses. | InboundNatPool[] (required) |


### InboundNatPool

| Name | Description | Value |
|-|-|-|
| backendPort | This must be unique within a Batch pool. Acceptable values are between 1 and 65535 except for 22, 3389, 29876 and 29877 as these are reserved. If any reserved values are provided the request fails with HTTP status code 400. | int (required) |
| frontendPortRangeEnd | Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved by the Batch service. All ranges within a pool must be distinct and cannot overlap. If any reserved or overlapping values are provided the request fails with HTTP status code 400. | int (required) |
| frontendPortRangeStart | Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved. All ranges within a pool must be distinct and cannot overlap. If any reserved or overlapping values are provided the request fails with HTTP status code 400. | int (required) |
| name | The name must be unique within a Batch pool, can contain letters, numbers, underscores, periods, and hyphens. Names must start with a letter or number, must end with a letter, number, or underscore, and cannot exceed 77 characters.  If any invalid values are provided the request fails with HTTP status code 400. | string (required) |
| networkSecurityGroupRules | The maximum number of rules that can be specified across all the endpoints on a Batch pool is 25. If no network security group rules are specified, a default rule will be created to allow inbound access to the specified backendPort. If the maximum number of network security group rules is exceeded the request fails with HTTP status code 400. | NetworkSecurityGroupRule[] |
| protocol | The protocol of the endpoint. | 'TCP''UDP' (required) |


### NetworkSecurityGroupRule

| Name | Description | Value |
|-|-|-|
| access | The action that should be taken for a specified IP address, subnet range or tag. | 'Allow''Deny' (required) |
| priority | Priorities within a pool must be unique and are evaluated in order of priority. The lower the number the higher the priority. For example, rules could be specified with order numbers of 150, 250, and 350. The rule with the order number of 150 takes precedence over the rule that has an order of 250. Allowed priorities are 150 to 4096. If any reserved or duplicate values are provided the request fails with HTTP status code 400. | int (required) |
| sourceAddressPrefix | Valid values are a single IP address (i.e. 10.10.10.10), IP subnet (i.e. 192.168.1.0/24), default tag, or * (for all addresses).  If any other values are provided the request fails with HTTP status code 400. | string (required) |
| sourcePortRanges | Valid values are '*' (for all ports 0 - 65535) or arrays of ports or port ranges (i.e. 100-200). The ports should in the range of 0 to 65535 and the port ranges or ports can't overlap. If any other values are provided the request fails with HTTP status code 400. Default value will be *. | string[] |


### PublicIPAddressConfiguration

| Name | Description | Value |
|-|-|-|
| ipAddressIds | The number of IPs specified here limits the maximum size of the Pool - 100 dedicated nodes or 100 Spot/low-priority nodes can be allocated for each public IP. For example, a pool needing 250 dedicated VMs would need at least 3 public IPs specified. Each element of this collection is of the form: /subscriptions/{subscription}/resourceGroups/{group}/providers/Microsoft.Network/publicIPAddresses/{ip}. | string[] |
| provision | The default value is BatchManaged | 'BatchManaged''NoPublicIPAddresses''UserManaged' |


### ScaleSettings

| Name | Description | Value |
|-|-|-|
| autoScale | This property and fixedScale are mutually exclusive and one of the properties must be specified. | AutoScaleSettings |
| fixedScale | This property and autoScale are mutually exclusive and one of the properties must be specified. | FixedScaleSettings |


### AutoScaleSettings

| Name | Description | Value |
|-|-|-|
| evaluationInterval | If omitted, the default value is 15 minutes (PT15M). | string |
| formula | A formula for the desired number of compute nodes in the pool. | string (required) |


### FixedScaleSettings

| Name | Description | Value |
|-|-|-|
| nodeDeallocationOption | If omitted, the default value is Requeue. | 'Requeue''RetainedData''TaskCompletion''Terminate' |
| resizeTimeout | The default value is 15 minutes. Timeout values use ISO 8601 format. For example, use PT10M for 10 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service rejects the request with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). | string |
| targetDedicatedNodes | At least one of targetDedicatedNodes, targetLowPriorityNodes must be set. | int |
| targetLowPriorityNodes | At least one of targetDedicatedNodes, targetLowPriorityNodes must be set. | int |


### StartTask

| Name | Description | Value |
|-|-|-|
| commandLine | The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. Required if any other properties of the startTask are specified. | string |
| containerSettings | When this is specified, all directories recursively below the AZ_BATCH_NODE_ROOT_DIR (the root of Azure Batch directories on the node) are mapped into the container, all task environment variables are mapped into the container, and the task command line is executed in the container. | TaskContainerSettings |
| environmentSettings | A list of environment variable settings for the start task. | EnvironmentSetting[] |
| maxTaskRetryCount | The Batch service retries a task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try the task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the task. If the maximum retry count is -1, the Batch service retries the task without limit. | int |
| resourceFiles | A list of files that the Batch service will download to the compute node before running the command line. | ResourceFile[] |
| userIdentity | If omitted, the task runs as a non-administrative user unique to the task. | UserIdentity |
| waitForSuccess | If true and the start task fails on a compute node, the Batch service retries the start task up to its maximum retry count (maxTaskRetryCount). If the task has still not completed successfully after all retries, then the Batch service marks the compute node unusable, and will not schedule tasks to it. This condition can be detected via the node state and scheduling error detail. If false, the Batch service will not wait for the start task to complete. In this case, other tasks can start executing on the compute node while the start task is still running; and even if the start task fails, new tasks will continue to be scheduled on the node. The default is true. | bool |


### TaskContainerSettings

| Name | Description | Value |
|-|-|-|
| containerRunOptions | These additional options are supplied as arguments to the "docker create" command, in addition to those controlled by the Batch Service. | string |
| imageName | This is the full image reference, as would be specified to "docker pull". If no tag is provided as part of the image name, the tag ":latest" is used as a default. | string (required) |
| registry | This setting can be omitted if was already provided at pool creation. | ContainerRegistry |
| workingDirectory | A flag to indicate where the container task working directory is. The default is 'taskWorkingDirectory'. | 'ContainerImageDefault''TaskWorkingDirectory' |


### EnvironmentSetting

| Name | Description | Value |
|-|-|-|
| name | The name of the environment variable. | string (required) |
| value | The value of the environment variable. | string |


### ResourceFile

| Name | Description | Value |
|-|-|-|
| autoStorageContainerName | The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. | string |
| blobPrefix | The property is valid only when autoStorageContainerName or storageContainerUrl is used. This prefix can be a partial filename or a subdirectory. If a prefix is not specified, all the files in the container will be downloaded. | string |
| fileMode | This property applies only to files being downloaded to Linux compute nodes. It will be ignored if it is specified for a resourceFile which will be downloaded to a Windows node. If this property is not specified for a Linux node, then a default value of 0770 is applied to the file. | string |
| filePath | If the httpUrl property is specified, the filePath is required and describes the path which the file will be downloaded to, including the filename. Otherwise, if the autoStorageContainerName or storageContainerUrl property is specified, filePath is optional and is the directory to download the files to. In the case where filePath is used as a directory, any directory structure already associated with the input data will be retained in full and appended to the specified filePath directory. The specified relative path cannot break out of the task's working directory (for example by using '..'). | string |
| httpUrl | The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. If the URL points to Azure Blob Storage, it must be readable from compute nodes. There are three ways to get such a URL for a blob in Azure storage: include a Shared Access Signature (SAS) granting read permissions on the blob, use a managed identity with read permission, or set the ACL for the blob or its container to allow public access. | string |
| identityReference | The reference to a user assigned identity associated with the Batch pool which a compute node will use. | ComputeNodeIdentityReference |
| storageContainerUrl | The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. This URL must be readable and listable from compute nodes. There are three ways to get such a URL for a container in Azure storage: include a Shared Access Signature (SAS) granting read and list permissions on the container, use a managed identity with read and list permissions, or set the ACL for the container to allow public access. | string |


### UserIdentity

| Name | Description | Value |
|-|-|-|
| autoUser | The userName and autoUser properties are mutually exclusive; you must specify one but not both. | AutoUserSpecification |
| userName | The userName and autoUser properties are mutually exclusive; you must specify one but not both. | string |


### AutoUserSpecification

| Name | Description | Value |
|-|-|-|
| elevationLevel | The default value is nonAdmin. | 'Admin''NonAdmin' |
| scope | The default value is Pool. If the pool is running Windows a value of Task should be specified if stricter isolation between tasks is required. For example, if the task mutates the registry in a way which could impact other tasks, or if certificates have been specified on the pool which should not be accessible by normal tasks but should be accessible by start tasks. | 'Pool''Task' |


### TaskSchedulingPolicy

| Name | Description | Value |
|-|-|-|
| nodeFillType | How tasks should be distributed across compute nodes. | 'Pack''Spread' (required) |


### UserAccount

| Name | Description | Value |
|-|-|-|
| elevationLevel | nonAdmin - The auto user is a standard user without elevated access. admin - The auto user is a user with elevated access and operates with full Administrator permissions. The default value is nonAdmin. | 'Admin''NonAdmin' |
| linuxUserConfiguration | This property is ignored if specified on a Windows pool. If not specified, the user is created with the default options. | LinuxUserConfiguration |
| name | The name of the user account. Names can contain any Unicode characters up to a maximum length of 20. | string (required) |
| password | The password for the user account. | string (required) |
| windowsUserConfiguration | This property can only be specified if the user is on a Windows pool. If not specified and on a Windows pool, the user is created with the default options. | WindowsUserConfiguration |


### LinuxUserConfiguration

| Name | Description | Value |
|-|-|-|
| gid | The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the gid. | int |
| sshPrivateKey | The private key must not be password protected. The private key is used to automatically configure asymmetric-key based authentication for SSH between nodes in a Linux pool when the pool's enableInterNodeCommunication property is true (it is ignored if enableInterNodeCommunication is false). It does this by placing the key pair into the user's .ssh directory. If not specified, password-less SSH is not configured between nodes (no modification of the user's .ssh directory is done). | string |
| uid | The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the uid. | int |


### WindowsUserConfiguration

| Name | Description | Value |
|-|-|-|
| loginMode | Specifies login mode for the user. The default value for VirtualMachineConfiguration pools is interactive mode and for CloudServiceConfiguration pools is batch mode. | 'Batch''Interactive' |
