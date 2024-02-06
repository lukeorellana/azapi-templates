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

### configurationGroupValues

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Hybrid configuration group value properties. | ConfigurationGroupValuePropertiesFormat |


### ConfigurationGroupValuePropertiesFormat

| Name | Description | Value |
|-|-|-|
| configurationGroupSchemaResourceReference | The configuration group schema resource reference. | DeploymentResourceIdReference |
| configurationType | Set the object type | OpenSecret(required) |


### DeploymentResourceIdReference

| Name | Description | Value |
|-|-|-|
| idType | Set the object type | OpenSecret(required) |


### OpenDeploymentResourceReference

| Name | Description | Value |
|-|-|-|
| idType | The resource reference arm id type. | 'Open' (required) |
| id | Resource ID. | string |


### SecretDeploymentResourceReference

| Name | Description | Value |
|-|-|-|
| idType | The resource reference arm id type. | 'Secret' (required) |
| id | Resource ID. | stringConstraints:Sensitive value. Pass in as a secure parameter. |


### ConfigurationValueWithoutSecrets

| Name | Description | Value |
|-|-|-|
| configurationType | The value which indicates if configuration values are secrets | 'Open' (required) |
| configurationValue | Name and value pairs that define the configuration value. It can be a well formed escaped JSON string. | string |


### ConfigurationValueWithSecrets

| Name | Description | Value |
|-|-|-|
| configurationType | The value which indicates if configuration values are secrets | 'Secret' (required) |
| secretConfigurationValue | Name and value pairs that define the configuration value secrets. It can be a well formed escaped JSON string. | stringConstraints:Sensitive value. Pass in as a secure parameter. |
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

### devices

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Device properties. | DevicePropertiesFormat |


### DevicePropertiesFormat

| Name | Description | Value |
|-|-|-|
| deviceType | Set the object type | AzureStackEdge(required) |


### AzureStackEdgeFormat

| Name | Description | Value |
|-|-|-|
| deviceType | The type of the device. | 'AzureStackEdge' (required) |
| azureStackEdge | The reference to the Azure stack edge device. | SubResource(required) |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
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

### locations/vendors/networkFunctions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: vendors |
| properties | Network function details. | VendorNetworkFunctionPropertiesFormat |


### VendorNetworkFunctionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| networkFunctionVendorConfigurations | An array of network function vendor configurations. | NetworkFunctionVendorConfiguration[] |
| vendorProvisioningState | The vendor controlled provisioning state of the vendor network function. | 'Deprovisioned''NotProvisioned''Provisioned''Provisioning''Unknown''UserDataValidationFailed' |


### NetworkFunctionVendorConfiguration

| Name | Description | Value |
|-|-|-|
| networkInterfaces | The network interface configurations. | NetworkInterface[] |
| osProfile | Specifies the operating system settings for the role instance. | OsProfile |
| roleName | The name of the vendor network function role. | string |


### NetworkInterface

| Name | Description | Value |
|-|-|-|
| ipConfigurations | A list of IP configurations of the network interface. | NetworkInterfaceIPConfiguration[] |
| macAddress | The MAC address of the network interface. | string |
| networkInterfaceName | The name of the network interface. | string |
| vmSwitchType | The type of the VM switch. | 'Lan''Management''Unknown''Wan' |


### NetworkInterfaceIPConfiguration

| Name | Description | Value |
|-|-|-|
| dnsServers | The list of DNS servers IP addresses. | string[] |
| gateway | The value of the gateway. | string |
| ipAddress | The value of the IP address. | string |
| ipAllocationMethod | IP address allocation method. | 'Dynamic''Static''Unknown' |
| ipVersion | IP address version. | 'IPv4''Unknown' |
| subnet | The value of the subnet. | string |


### OsProfile

| Name | Description | Value |
|-|-|-|
| adminUsername | Specifies the name of the administrator account.Windows-only restriction:Cannot end in "."Disallowed values:"administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5".Minimum-length (Linux):1  characterMax-length (Linux):64 charactersMax-length (Windows):20 characters{li} For root access to the Linux VM, seeUsing root privileges on Linux virtual machines in Azure{li} For a list of built-in system users on Linux that should not be used in this field, seeSelecting User Names for Linux on Azure. | string |
| customData | Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the virtual machine. The maximum length of the binary array is 65535 bytes.Note: Do not pass any secrets or passwords in customData propertyThis property cannot be updated after the VM is created.customData is passed to the VM to be saved as a file. For more information seeCustom Data on Azure VMsFor using cloud-init for your Linux VM, seeUsing cloud-init to customize a Linux VM during creation | string |
| customDataRequired | Indicates if custom data is required to deploy this role. | bool |
| linuxConfiguration | Specifies the Linux operating system settings on the virtual machine.For a list of supported Linux distributions, seeLinux on Azure-Endorsed DistributionsFor running non-endorsed distributions, seeInformation for Non-Endorsed Distributions. | LinuxConfiguration |


### LinuxConfiguration

| Name | Description | Value |
|-|-|-|
| ssh | Specifies the ssh key configuration for a Linux OS. | SshConfiguration |


### SshConfiguration

| Name | Description | Value |
|-|-|-|
| publicKeys | The list of SSH public keys used to authenticate with linux based VMs. | SshPublicKey[] |


### SshPublicKey

| Name | Description | Value |
|-|-|-|
| keyData | SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format.For creating ssh keys, seeCreate SSH keys on Linux and Mac for Linux VMs in Azure. | string |
| path | Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys | string |
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

### networkFunctions

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| etag | A unique read-only string that changes whenever the resource is updated. | string |
| identity | The managed identity of the network function. | ManagedServiceIdentity |
| properties | Network function properties. | NetworkFunctionPropertiesFormat |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### NetworkFunctionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| allowSoftwareUpdate | Indicates if software updates are allowed during deployment. | bool |
| networkFunctionDefinitionVersionResourceReference | The network function definition version resource reference. | DeploymentResourceIdReference |
| nfviId | The nfviId for the network function. | string |
| nfviType | The nfvi type for the network function. | 'AzureArcKubernetes''AzureCore''AzureOperatorNexus''Unknown' |
| roleOverrideValues | The role configuration override values from the user. | string[] |
| configurationType | Set the object type | OpenSecret(required) |


### DeploymentResourceIdReference

| Name | Description | Value |
|-|-|-|
| idType | Set the object type | OpenSecret(required) |


### OpenDeploymentResourceReference

| Name | Description | Value |
|-|-|-|
| idType | The resource reference arm id type. | 'Open' (required) |
| id | Resource ID. | string |


### SecretDeploymentResourceReference

| Name | Description | Value |
|-|-|-|
| idType | The resource reference arm id type. | 'Secret' (required) |
| id | Resource ID. | stringConstraints:Sensitive value. Pass in as a secure parameter. |


### NetworkFunctionValueWithoutSecrets

| Name | Description | Value |
|-|-|-|
| configurationType | The value which indicates if NF  values are secrets | 'Open' (required) |
| deploymentValues | The JSON-serialized deployment values from the user. | string |


### NetworkFunctionValueWithSecrets

| Name | Description | Value |
|-|-|-|
| configurationType | The value which indicates if NF  values are secrets | 'Secret' (required) |
| secretDeploymentValues | The JSON-serialized secret deployment values from the user. This contains secrets like passwords,keys etc | stringConstraints:Sensitive value. Pass in as a secure parameter. |
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

### publishers

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The managed identity of the publisher, if configured. | ManagedServiceIdentity |
| properties | Publisher properties. | PublisherPropertiesFormat |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### PublisherPropertiesFormat

| Name | Description | Value |
|-|-|-|
| scope | The publisher scope. | 'Private''Unknown' |
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

### publishers/artifactStores

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:publishers |
| properties | ArtifactStores properties. | ArtifactStorePropertiesFormat |


### ArtifactStorePropertiesFormat

| Name | Description | Value |
|-|-|-|
| managedResourceGroupConfiguration |  | ArtifactStorePropertiesFormatManagedResourceGroupCon... |
| replicationStrategy | The replication strategy. | 'SingleReplication''Unknown' |
| storeType | The artifact store type. | 'AzureContainerRegistry''AzureStorageAccount''Unknown' |


### ArtifactStorePropertiesFormatManagedResourceGroupCon...

| Name | Description | Value |
|-|-|-|
| location | The managed resource group location. | string |
| name | The managed resource group name. | string |
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

### publishers/artifactStores/artifactManifests

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:artifactStores |
| properties | Artifact manifest properties. | ArtifactManifestPropertiesFormat |


### ArtifactManifestPropertiesFormat

| Name | Description | Value |
|-|-|-|
| artifacts | The artifacts list. | ManifestArtifactFormat[] |


### ManifestArtifactFormat

| Name | Description | Value |
|-|-|-|
| artifactName | The artifact name | string |
| artifactType | The artifact type. | 'ArmTemplate''ImageFile''OCIArtifact''Unknown''VhdImageFile' |
| artifactVersion | The artifact version. | string |
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

### publishers/configurationGroupSchemas

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:publishers |
| properties | Configuration group schema properties. | ConfigurationGroupSchemaPropertiesFormat |


### ConfigurationGroupSchemaPropertiesFormat

| Name | Description | Value |
|-|-|-|
| description | Description of what schema can contain. | string |
| schemaDefinition | Name and value pairs that define the configuration value. It can be a well formed escaped JSON string. | string |
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

### publishers/networkFunctionDefinitionGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:publishers |
| properties | Network function definition group properties. | NetworkFunctionDefinitionGroupPropertiesFormat |


### NetworkFunctionDefinitionGroupPropertiesFormat

| Name | Description | Value |
|-|-|-|
| description | The network function definition group description. | string |
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

### publishers/networkFunctionDefinitionGroups/networkFu...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkFunctionDefinitionGroups |
| properties | Network function definition version properties. | NetworkFunctionDefinitionVersionPropertiesFormat |


### NetworkFunctionDefinitionVersionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| deployParameters | The deployment parameters of the network function definition version. | string |
| description | The network function definition version description. | string |
| networkFunctionType | Set the object type | ContainerizedNetworkFunctionVirtualNetworkFunction(required) |


### ContainerizedNetworkFunctionDefinitionVersion

| Name | Description | Value |
|-|-|-|
| networkFunctionType | The network function type. | 'ContainerizedNetworkFunction' (required) |
| networkFunctionTemplate | Containerized network function template. | ContainerizedNetworkFunctionTemplate |


### ContainerizedNetworkFunctionTemplate

| Name | Description | Value |
|-|-|-|
| nfviType | Set the object type | AzureArcKubernetes(required) |


### AzureArcKubernetesNetworkFunctionTemplate

| Name | Description | Value |
|-|-|-|
| nfviType | The network function type. | 'AzureArcKubernetes' (required) |
| networkFunctionApplications | Network function applications. | AzureArcKubernetesNetworkFunctionApplication[] |


### AzureArcKubernetesNetworkFunctionApplication

| Name | Description | Value |
|-|-|-|
| dependsOnProfile | Depends on profile definition. | DependsOnProfile |
| name | The name of the network function application. | string |
| artifactType | Set the object type | HelmPackage(required) |


### DependsOnProfile

| Name | Description | Value |
|-|-|-|
| installDependsOn | Application installation operation dependency. | string[] |
| uninstallDependsOn | Application deletion operation dependency. | string[] |
| updateDependsOn | Application update operation dependency. | string[] |


### AzureArcKubernetesHelmApplication

| Name | Description | Value |
|-|-|-|
| artifactType | The artifact type. | 'HelmPackage' (required) |
| artifactProfile | Azure arc kubernetes artifact profile. | AzureArcKubernetesArtifactProfile |
| deployParametersMappingRuleProfile | Deploy mapping rule profile. | AzureArcKubernetesDeployMappingRuleProfile |


### AzureArcKubernetesArtifactProfile

| Name | Description | Value |
|-|-|-|
| artifactStore | The reference to artifact store. | ReferencedResource |
| helmArtifactProfile | Helm artifact profile. | HelmArtifactProfile |


### ReferencedResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### HelmArtifactProfile

| Name | Description | Value |
|-|-|-|
| helmPackageName | Helm package name. | string |
| helmPackageVersionRange | Helm package version range. | string |
| imagePullSecretsValuesPaths | The image pull secrets values path list. | string[] |
| registryValuesPaths | The registry values path list. | string[] |


### AzureArcKubernetesDeployMappingRuleProfile

| Name | Description | Value |
|-|-|-|
| applicationEnablement | The application enablement. | 'Disabled''Enabled''Unknown' |
| helmMappingRuleProfile | The helm mapping rule profile. | HelmMappingRuleProfile |


### HelmMappingRuleProfile

| Name | Description | Value |
|-|-|-|
| helmPackageVersion | Helm package version. | string |
| options | The helm deployment options | HelmMappingRuleProfileOptions |
| releaseName | Helm release name. | string |
| releaseNamespace | Helm release namespace. | string |
| values | Helm release values. | string |


### HelmMappingRuleProfileOptions

| Name | Description | Value |
|-|-|-|
| installOptions | The helm deployment install options | HelmInstallOptions |
| upgradeOptions | The helm deployment upgrade options | HelmUpgradeOptions |


### HelmInstallOptions

| Name | Description | Value |
|-|-|-|
| atomic | The helm deployment atomic options | string |
| timeout | The helm deployment timeout options | string |
| wait | The helm deployment wait options | string |


### HelmUpgradeOptions

| Name | Description | Value |
|-|-|-|
| atomic | The helm deployment atomic options | string |
| timeout | The helm deployment timeout options | string |
| wait | The helm deployment wait options | string |


### VirtualNetworkFunctionDefinitionVersion

| Name | Description | Value |
|-|-|-|
| networkFunctionType | The network function type. | 'VirtualNetworkFunction' (required) |
| networkFunctionTemplate | Virtual network function template. | VirtualNetworkFunctionTemplate |


### VirtualNetworkFunctionTemplate

| Name | Description | Value |
|-|-|-|
| nfviType | Set the object type | AzureCoreAzureOperatorNexus(required) |


### AzureCoreNetworkFunctionTemplate

| Name | Description | Value |
|-|-|-|
| nfviType | The network function type. | 'AzureCore' (required) |
| networkFunctionApplications | Network function applications. | AzureCoreNetworkFunctionApplication[] |


### AzureCoreNetworkFunctionApplication

| Name | Description | Value |
|-|-|-|
| dependsOnProfile | Depends on profile definition. | DependsOnProfile |
| name | The name of the network function application. | string |
| artifactType | Set the object type | ArmTemplateVhdImageFile(required) |


### AzureCoreNetworkFunctionArmTemplateApplication

| Name | Description | Value |
|-|-|-|
| artifactType | The artifact type. | 'ArmTemplate' (required) |
| artifactProfile | Azure template artifact profile. | AzureCoreArmTemplateArtifactProfile |
| deployParametersMappingRuleProfile | Deploy mapping rule profile. | AzureCoreArmTemplateDeployMappingRuleProfile |


### AzureCoreArmTemplateArtifactProfile

| Name | Description | Value |
|-|-|-|
| artifactStore | The reference to artifact store. | ReferencedResource |
| templateArtifactProfile | Template artifact profile. | ArmTemplateArtifactProfile |


### ArmTemplateArtifactProfile

| Name | Description | Value |
|-|-|-|
| templateName | Template name. | string |
| templateVersion | Template version. | string |


### AzureCoreArmTemplateDeployMappingRuleProfile

| Name | Description | Value |
|-|-|-|
| applicationEnablement | The application enablement. | 'Disabled''Enabled''Unknown' |
| templateMappingRuleProfile | The template mapping rule profile. | ArmTemplateMappingRuleProfile |


### ArmTemplateMappingRuleProfile

| Name | Description | Value |
|-|-|-|
| templateParameters | List of template parameters. | string |


### AzureCoreNetworkFunctionVhdApplication

| Name | Description | Value |
|-|-|-|
| artifactType | The artifact type. | 'VhdImageFile' (required) |
| artifactProfile | Azure vhd image artifact profile. | AzureCoreVhdImageArtifactProfile |
| deployParametersMappingRuleProfile | Deploy mapping rule profile. | AzureCoreVhdImageDeployMappingRuleProfile |


### AzureCoreVhdImageArtifactProfile

| Name | Description | Value |
|-|-|-|
| artifactStore | The reference to artifact store. | ReferencedResource |
| vhdArtifactProfile | Vhd artifact profile. | VhdImageArtifactProfile |


### VhdImageArtifactProfile

| Name | Description | Value |
|-|-|-|
| vhdName | Vhd name. | string |
| vhdVersion | Vhd version. | string |


### AzureCoreVhdImageDeployMappingRuleProfile

| Name | Description | Value |
|-|-|-|
| applicationEnablement | The application enablement. | 'Disabled''Enabled''Unknown' |
| vhdImageMappingRuleProfile | The vhd mapping rule profile. | VhdImageMappingRuleProfile |


### VhdImageMappingRuleProfile

| Name | Description | Value |
|-|-|-|
| userConfiguration | List of values. | string |


### AzureOperatorNexusNetworkFunctionTemplate

| Name | Description | Value |
|-|-|-|
| nfviType | The network function type. | 'AzureOperatorNexus' (required) |
| networkFunctionApplications | Network function applications. | AzureOperatorNexusNetworkFunctionApplication[] |


### AzureOperatorNexusNetworkFunctionApplication

| Name | Description | Value |
|-|-|-|
| dependsOnProfile | Depends on profile definition. | DependsOnProfile |
| name | The name of the network function application. | string |
| artifactType | Set the object type | ArmTemplateImageFile(required) |


### AzureOperatorNexusNetworkFunctionArmTemplateApplicat...

| Name | Description | Value |
|-|-|-|
| artifactType | The artifact type. | 'ArmTemplate' (required) |
| artifactProfile | Azure Operator Distributed Services Template artifact profile. | AzureOperatorNexusArmTemplateArtifactProfile |
| deployParametersMappingRuleProfile | Deploy mapping rule profile. | AzureOperatorNexusArmTemplateDeployMappingRuleProfil... |


### AzureOperatorNexusArmTemplateArtifactProfile

| Name | Description | Value |
|-|-|-|
| artifactStore | The reference to artifact store. | ReferencedResource |
| templateArtifactProfile | Template artifact profile. | ArmTemplateArtifactProfile |


### AzureOperatorNexusArmTemplateDeployMappingRuleProfil...

| Name | Description | Value |
|-|-|-|
| applicationEnablement | The application enablement. | 'Disabled''Enabled''Unknown' |
| templateMappingRuleProfile | The template mapping rule profile. | ArmTemplateMappingRuleProfile |


### AzureOperatorNexusNetworkFunctionImageApplication

| Name | Description | Value |
|-|-|-|
| artifactType | The artifact type. | 'ImageFile' (required) |
| artifactProfile | Azure Operator Distributed Services image artifact profile. | AzureOperatorNexusImageArtifactProfile |
| deployParametersMappingRuleProfile | Deploy mapping rule profile. | AzureOperatorNexusImageDeployMappingRuleProfile |


### AzureOperatorNexusImageArtifactProfile

| Name | Description | Value |
|-|-|-|
| artifactStore | The reference to artifact store. | ReferencedResource |
| imageArtifactProfile | Image artifact profile. | ImageArtifactProfile |


### ImageArtifactProfile

| Name | Description | Value |
|-|-|-|
| imageName | Image name. | string |
| imageVersion | Image version. | string |


### AzureOperatorNexusImageDeployMappingRuleProfile

| Name | Description | Value |
|-|-|-|
| applicationEnablement | The application enablement. | 'Disabled''Enabled''Unknown' |
| imageMappingRuleProfile | The vhd mapping rule profile. | ImageMappingRuleProfile |


### ImageMappingRuleProfile

| Name | Description | Value |
|-|-|-|
| userConfiguration | List of values. | string |
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

### publishers/networkServiceDesignGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:publishers |
| properties | network service design group properties. | NetworkServiceDesignGroupPropertiesFormat |


### NetworkServiceDesignGroupPropertiesFormat

| Name | Description | Value |
|-|-|-|
| description | The network service design group description. | string |
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

### publishers/networkServiceDesignGroups/networkService...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkServiceDesignGroups |
| properties | network service design version properties. | NetworkServiceDesignVersionPropertiesFormat |


### NetworkServiceDesignVersionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| configurationGroupSchemaReferences | The configuration schemas to used to define the values. | NetworkServiceDesignVersionPropertiesFormatConfigura... |
| description | The network service design version description. | string |
| nfvisFromSite | The nfvis from the site. | NetworkServiceDesignVersionPropertiesFormatNfvisFrom... |
| resourceElementTemplates | List of resource element template | ResourceElementTemplate[] |


### NetworkServiceDesignVersionPropertiesFormatConfigura...

| Name | Description | Value |
|-|-|-|
| {customized property} |  | ReferencedResource |


### ReferencedResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### NetworkServiceDesignVersionPropertiesFormatNfvisFrom...

| Name | Description | Value |
|-|-|-|
| {customized property} |  | NfviDetails |


### NfviDetails

| Name | Description | Value |
|-|-|-|
| name | The nfvi name. | string |
| type | The nfvi type. | string |


### ResourceElementTemplate

| Name | Description | Value |
|-|-|-|
| dependsOnProfile | The depends on profile. | DependsOnProfile |
| name | Name of the resource element template. | string |
| type | Set the object type | ArmResourceDefinitionNetworkFunctionDefinition(required) |


### DependsOnProfile

| Name | Description | Value |
|-|-|-|
| installDependsOn | Application installation operation dependency. | string[] |
| uninstallDependsOn | Application deletion operation dependency. | string[] |
| updateDependsOn | Application update operation dependency. | string[] |


### ArmResourceDefinitionResourceElementTemplateDetails

| Name | Description | Value |
|-|-|-|
| type | The resource element template type. | 'ArmResourceDefinition' (required) |
| configuration | The resource element template type. | ArmResourceDefinitionResourceElementTemplate |


### ArmResourceDefinitionResourceElementTemplate

| Name | Description | Value |
|-|-|-|
| artifactProfile | Artifact profile properties. | NSDArtifactProfile |
| parameterValues | Name and value pairs that define the parameter values. It can be  a well formed escaped JSON string. | string |
| templateType | The template type. | 'ArmTemplate''Unknown' |


### NSDArtifactProfile

| Name | Description | Value |
|-|-|-|
| artifactName | Artifact name. | string |
| artifactStoreReference | The artifact store resource id | ReferencedResource |
| artifactVersion | Artifact version. | string |


### NetworkFunctionDefinitionResourceElementTemplateDeta...

| Name | Description | Value |
|-|-|-|
| type | The resource element template type. | 'NetworkFunctionDefinition' (required) |
| configuration | The resource element template type. | ArmResourceDefinitionResourceElementTemplate |
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

### siteNetworkServices

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Sku of the site network service. | Sku |
| identity | The managed identity of the Site network service, if configured. | ManagedServiceIdentity |
| properties | Site network service properties. | SiteNetworkServicePropertiesFormat |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### SiteNetworkServicePropertiesFormat

| Name | Description | Value |
|-|-|-|
| desiredStateConfigurationGroupValueReferences | The goal state of the site network service resource. This has references to the configuration group value objects that describe the desired state of the site network service. | SiteNetworkServicePropertiesFormatDesiredStateConfig... |
| managedResourceGroupConfiguration | Managed resource group configuration. | ManagedResourceGroupConfiguration |
| networkServiceDesignVersionResourceReference | The network service design version resource reference. | DeploymentResourceIdReference |
| siteReference | The site details | ReferencedResource |


### SiteNetworkServicePropertiesFormatDesiredStateConfig...

| Name | Description | Value |
|-|-|-|
| {customized property} |  | ReferencedResource |


### ReferencedResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### ManagedResourceGroupConfiguration

| Name | Description | Value |
|-|-|-|
| location | Managed resource group location. | string |
| name | Managed resource group name. | string |


### DeploymentResourceIdReference

| Name | Description | Value |
|-|-|-|
| idType | Set the object type | OpenSecret(required) |


### OpenDeploymentResourceReference

| Name | Description | Value |
|-|-|-|
| idType | The resource reference arm id type. | 'Open' (required) |
| id | Resource ID. | string |


### SecretDeploymentResourceReference

| Name | Description | Value |
|-|-|-|
| idType | The resource reference arm id type. | 'Secret' (required) |
| id | Resource ID. | stringConstraints:Sensitive value. Pass in as a secure parameter. |


### Sku

| Name | Description | Value |
|-|-|-|
| name | Name of this Sku | 'Basic''Standard' (required) |
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

### sites

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Site properties. | SitePropertiesFormat |


### SitePropertiesFormat

| Name | Description | Value |
|-|-|-|
| nfvis | List of NFVIs | NFVIs[] |


### NFVIs

| Name | Description | Value |
|-|-|-|
| name | Name of the nfvi. | string |
| nfviType | Set the object type | AzureArcKubernetesAzureCoreAzureOperatorNexus(required) |


### AzureArcK8SClusterNfviDetails

| Name | Description | Value |
|-|-|-|
| nfviType | The NFVI type. | 'AzureArcKubernetes' (required) |
| customLocationReference | The reference to the custom location. | ReferencedResource |


### ReferencedResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### AzureCoreNfviDetails

| Name | Description | Value |
|-|-|-|
| nfviType | The NFVI type. | 'AzureCore' (required) |
| location | Location of the Azure core. | string |


### AzureOperatorNexusClusterNfviDetails

| Name | Description | Value |
|-|-|-|
| nfviType | The NFVI type. | 'AzureOperatorNexus' (required) |
| customLocationReference | The reference to the custom location. | ReferencedResource |
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

### vendors

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| properties | Vendor properties. | VendorPropertiesFormat |
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

### vendors/vendorSkus

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vendors |
| properties | Vendor sku details. | VendorSkuPropertiesFormat |


### VendorSkuPropertiesFormat

| Name | Description | Value |
|-|-|-|
| deploymentMode | The sku deployment mode. | 'Azure''PrivateEdgeZone''Unknown' |
| managedApplicationParameters | The parameters for the managed application to be supplied by the vendor. | For Bicep, you can use theany()function. |
| managedApplicationTemplate | The template for the managed application deployment. | For Bicep, you can use theany()function. |
| networkFunctionTemplate | The template definition of the network function. | NetworkFunctionTemplate |
| networkFunctionType | The network function type. | 'ContainerizedNetworkFunction''Unknown''VirtualNetworkFunction' |
| preview | Indicates if the vendor sku is in preview mode. | bool |
| skuType | The sku type. | 'EvolvedPacketCore''Firewall''SDWAN''Unknown' |


### NetworkFunctionTemplate

| Name | Description | Value |
|-|-|-|
| networkFunctionRoleConfigurations | An array of network function role definitions. | NetworkFunctionRoleConfiguration[] |


### NetworkFunctionRoleConfiguration

| Name | Description | Value |
|-|-|-|
| customProfile | Specifies the custom settings for the virtual machine. | CustomProfile |
| networkInterfaces | The network interface configurations. | NetworkInterface[] |
| osProfile | Specifies the operating system settings for the role instance. This value can be updated during the deployment of network function. | OsProfile |
| roleName | The name of the network function role. | string |
| roleType | Role type. | 'Unknown''VirtualMachine' |
| storageProfile | Specifies the storage settings for the virtual machine disks. | StorageProfile |
| userDataParameters | The user parameters for customers. The format of user data parameters has to be matched with the provided user data template. | For Bicep, you can use theany()function. |
| userDataTemplate | The user data template for customers. This is a json schema template describing the format and data type of user data parameters. | For Bicep, you can use theany()function. |
| virtualMachineSize | The size of the virtual machine. | 'Standard_D11_v2''Standard_D12_v2''Standard_D13_v2''Standard_D1_v2''Standard_D2_v2''Standard_D3_v2''Standard_D4_v2''Standard_D5_v2''Standard_DS11_v2''Standard_DS12_v2''Standard_DS13_v2''Standard_DS1_v2''Standard_DS2_v2''Standard_DS3_v2''Standard_DS4_v2''Standard_DS5_v2''Standard_F1''Standard_F16''Standard_F16s''Standard_F1s''Standard_F2''Standard_F2s''Standard_F4''Standard_F4s''Standard_F8''Standard_F8s''Unknown' |


### CustomProfile

| Name | Description | Value |
|-|-|-|
| metadataConfigurationPath | Path for metadata configuration. | string |


### NetworkInterface

| Name | Description | Value |
|-|-|-|
| ipConfigurations | A list of IP configurations of the network interface. | NetworkInterfaceIPConfiguration[] |
| macAddress | The MAC address of the network interface. | string |
| networkInterfaceName | The name of the network interface. | string |
| vmSwitchType | The type of the VM switch. | 'Lan''Management''Unknown''Wan' |


### NetworkInterfaceIPConfiguration

| Name | Description | Value |
|-|-|-|
| dnsServers | The list of DNS servers IP addresses. | string[] |
| gateway | The value of the gateway. | string |
| ipAddress | The value of the IP address. | string |
| ipAllocationMethod | IP address allocation method. | 'Dynamic''Static''Unknown' |
| ipVersion | IP address version. | 'IPv4''Unknown' |
| subnet | The value of the subnet. | string |


### OsProfile

| Name | Description | Value |
|-|-|-|
| adminUsername | Specifies the name of the administrator account.Windows-only restriction:Cannot end in "."Disallowed values:"administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5".Minimum-length (Linux):1  characterMax-length (Linux):64 charactersMax-length (Windows):20 characters{li} For root access to the Linux VM, seeUsing root privileges on Linux virtual machines in Azure{li} For a list of built-in system users on Linux that should not be used in this field, seeSelecting User Names for Linux on Azure. | string |
| customData | Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the virtual machine. The maximum length of the binary array is 65535 bytes.Note: Do not pass any secrets or passwords in customData propertyThis property cannot be updated after the VM is created.customData is passed to the VM to be saved as a file. For more information seeCustom Data on Azure VMsFor using cloud-init for your Linux VM, seeUsing cloud-init to customize a Linux VM during creation | string |
| customDataRequired | Indicates if custom data is required to deploy this role. | bool |
| linuxConfiguration | Specifies the Linux operating system settings on the virtual machine.For a list of supported Linux distributions, seeLinux on Azure-Endorsed DistributionsFor running non-endorsed distributions, seeInformation for Non-Endorsed Distributions. | LinuxConfiguration |


### LinuxConfiguration

| Name | Description | Value |
|-|-|-|
| ssh | Specifies the ssh key configuration for a Linux OS. | SshConfiguration |


### SshConfiguration

| Name | Description | Value |
|-|-|-|
| publicKeys | The list of SSH public keys used to authenticate with linux based VMs. | SshPublicKey[] |


### SshPublicKey

| Name | Description | Value |
|-|-|-|
| keyData | SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format.For creating ssh keys, seeCreate SSH keys on Linux and Mac for Linux VMs in Azure. | string |
| path | Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys | string |


### StorageProfile

| Name | Description | Value |
|-|-|-|
| dataDisks | Specifies the parameters that are used to add a data disk to a virtual machine. | DataDisk[] |
| imageReference | The image reference properties. | ImageReference |
| osDisk | Specifies information about the operating system disk used by the virtual machine. | OsDisk |


### DataDisk

| Name | Description | Value |
|-|-|-|
| createOption | Specifies how the virtual machine should be created. | 'Empty''Unknown' |
| diskSizeGB | Specifies the size of an empty disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. | int |
| name | The name of data disk. | string |


### ImageReference

| Name | Description | Value |
|-|-|-|
| exactVersion | Specifies in decimal numbers, the exact version of image used to create the virtual machine. | string |
| offer | Specifies the offer of the image used to create the virtual machine. | string |
| publisher | The image publisher. | string |
| sku | The image SKU. | string |
| version | Specifies the version of the image used to create the virtual machine. The allowed formats are Major.Minor.Build or 'latest'. Major, Minor, and Build are decimal numbers. Specify 'latest' to use the latest version of an image available at deploy time. Even if you use 'latest', the VM image will not automatically update after deploy time even if a new version becomes available. | string |


### OsDisk

| Name | Description | Value |
|-|-|-|
| diskSizeGB | Specifies the size of os disk in gigabytes. This is the fully expanded disk size needed of the VHD image on the ASE. This disk size should be greater than the size of the VHD provided in vhdUri. | int |
| name | The VHD name. | string |
| osType | The OS type. | 'Linux''Unknown''Windows' |
| vhd | The virtual hard disk. | VirtualHardDisk |


### VirtualHardDisk

| Name | Description | Value |
|-|-|-|
| uri | Specifies the virtual hard disk's uri. | stringConstraints:Sensitive value. Pass in as a secure parameter. |
