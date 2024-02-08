```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/cloudServices@2022-09-04"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      allowModelOverride = bool
      configuration = "string"
      configurationUrl = "string"
      extensionProfile = {
        extensions = [
          {
            name = "string"
            properties = {
              autoUpgradeMinorVersion = bool
              forceUpdateTag = "string"
              protectedSettingsFromKeyVault = {
                secretUrl = "string"
                sourceVault = {
                  id = "string"
                }
              }
              publisher = "string"
              rolesAppliedTo = [
                "string"
              ]
              type = "string"
              typeHandlerVersion = "string"
            }
          }
        ]
      }
      networkProfile = {
        loadBalancerConfigurations = [
          {
            id = "string"
            name = "string"
            properties = {
              frontendIpConfigurations = [
                {
                  name = "string"
                  properties = {
                    privateIPAddress = "string"
                    publicIPAddress = {
                      id = "string"
                    }
                    subnet = {
                      id = "string"
                    }
                  }
                }
              ]
            }
          }
        ]
        slotType = "string"
        swappableCloudService = {
          id = "string"
        }
      }
      osProfile = {
        secrets = [
          {
            sourceVault = {
              id = "string"
            }
            vaultCertificates = [
              {
                certificateUrl = "string"
              }
            ]
          }
        ]
      }
      packageUrl = "string"
      roleProfile = {
        roles = [
          {
            name = "string"
            sku = {
              capacity = int
              name = "string"
              tier = "string"
            }
          }
        ]
      }
      startCloudService = bool
      upgradeMode = "string"
    }
    systemData = {}
    zones = [
      "string"
    ]
  })
}

```

### cloudServices

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-15Valid characters:Can't use spaces, control characters, or these characters:~ ! @ # $ % ^ & * ( ) = + _ [ ] { } \ |  ; : . ' " , < > / ?Can't start with underscore. Can't end with period or hyphen. |
| location | Resource location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Cloud service properties | CloudServiceProperties |
| systemData | The system meta data relating to this resource. | SystemData |
| zones | List of logical availability zone of the resource. List should contain only 1 zone where cloud service should be provisioned. This field is optional. | string[] |


### CloudServiceProperties

| Name | Description | Value |
|-|-|-|
| allowModelOverride | (Optional) Indicates whether the role sku properties (roleProfile.roles.sku) specified in the model/template should override the role instance count and vm size specified in the .cscfg and .csdef respectively.The default value isfalse. | bool |
| configuration | Specifies the XML service configuration (.cscfg) for the cloud service. | string |
| configurationUrl | Specifies a URL that refers to the location of the service configuration in the Blob service. The service package URL  can be Shared Access Signature (SAS) URI from any storage account.This is a write-only property and is not returned in GET calls. | string |
| extensionProfile | Describes a cloud service extension profile. | CloudServiceExtensionProfile |
| networkProfile | Network Profile for the cloud service. | CloudServiceNetworkProfile |
| osProfile | Describes the OS profile for the cloud service. | CloudServiceOsProfile |
| packageUrl | Specifies a URL that refers to the location of the service package in the Blob service. The service package URL can be Shared Access Signature (SAS) URI from any storage account.This is a write-only property and is not returned in GET calls. | string |
| roleProfile | Describes the role profile for the cloud service. | CloudServiceRoleProfile |
| startCloudService | (Optional) Indicates whether to start the cloud service immediately after it is created. The default value istrue.If false, the service model is still deployed, but the code is not run immediately. Instead, the service is PoweredOff until you call Start, at which time the service will be started. A deployed service still incurs charges, even if it is poweredoff. | bool |
| upgradeMode | Update mode for the cloud service. Role instances are allocated to update domains when the service is deployed. Updates can be initiated manually in each update domain or initiated automatically in all update domains.Possible Values areAutoManualSimultaneousIf not specified, the default value is Auto. If set to Manual, PUT UpdateDomain must be called to apply the update. If set to Auto, the update is automatically applied to each update domain in sequence. | 'Auto''Manual''Simultaneous' |


### CloudServiceExtensionProfile

| Name | Description | Value |
|-|-|-|
| extensions | List of extensions for the cloud service. | Extension[] |


### Extension

| Name | Description | Value |
|-|-|-|
| name | The name of the extension. | string |
| properties | Extension Properties. | CloudServiceExtensionProperties |


### CloudServiceExtensionProperties

| Name | Description | Value |
|-|-|-|
| autoUpgradeMinorVersion | Explicitly specify whether platform can automatically upgrade typeHandlerVersion to higher minor versions when they become available. | bool |
| forceUpdateTag | Tag to force apply the provided public and protected settings.Changing the tag value allows for re-running the extension without changing any of the public or protected settings.If forceUpdateTag is not changed, updates to public or protected settings would still be applied by the handler.If neither forceUpdateTag nor any of public or protected settings change, extension would flow to the role instance with the same sequence-number, andit is up to handler implementation whether to re-run it or not | string |
| protectedSettings | Protected settings for the extension which are encrypted before sent to the role instance. | For Bicep, you can use theany()function. |
| protectedSettingsFromKeyVault | Protected settings for the extension, referenced using KeyVault which are encrypted before sent to the role instance. | CloudServiceVaultAndSecretReference |
| publisher | The name of the extension handler publisher. | string |
| rolesAppliedTo | Optional list of roles to apply this extension. If property is not specified or '*' is specified, extension is applied to all roles in the cloud service. | string[] |
| settings | Public settings for the extension. For JSON extensions, this is the JSON settings for the extension. For XML Extension (like RDP), this is the XML setting for the extension. | For Bicep, you can use theany()function. |
| type | Specifies the type of the extension. | string |
| typeHandlerVersion | Specifies the version of the extension. Specifies the version of the extension. If this element is not specified or an asterisk (*) is used as the value, the latest version of the extension is used. If the value is specified with a major version number and an asterisk as the minor version number (X.), the latest minor version of the specified major version is selected. If a major version number and a minor version number are specified (X.Y), the specific extension version is selected. If a version is specified, an auto-upgrade is performed on the role instance. | string |


### CloudServiceVaultAndSecretReference

| Name | Description | Value |
|-|-|-|
| secretUrl | Secret URL which contains the protected settings of the extension | string |
| sourceVault | The ARM Resource ID of the Key Vault | SubResource |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource Id | string |


### CloudServiceNetworkProfile

| Name | Description | Value |
|-|-|-|
| loadBalancerConfigurations | List of Load balancer configurations. Cloud service can have up to two load balancer configurations, corresponding to a Public Load Balancer and an Internal Load Balancer. | LoadBalancerConfiguration[] |
| slotType | Slot type for the cloud service.Possible values areProductionStagingIf not specified, the default value is Production. | 'Production''Staging' |
| swappableCloudService | The id reference of the cloud service containing the target IP with which the subject cloud service can perform a swap. This property cannot be updated once it is set. The swappable cloud service referred by this id must be present otherwise an error will be thrown. | SubResource |


### LoadBalancerConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource Id | string |
| name | The name of the Load balancer | string (required) |
| properties | Properties of the load balancer configuration. | LoadBalancerConfigurationProperties(required) |


### LoadBalancerConfigurationProperties

| Name | Description | Value |
|-|-|-|
| frontendIpConfigurations | Specifies the frontend IP to be used for the load balancer. Only IPv4 frontend IP address is supported. Each load balancer configuration must have exactly one frontend IP configuration. | LoadBalancerFrontendIpConfiguration[] (required) |


### LoadBalancerFrontendIpConfiguration

| Name | Description | Value |
|-|-|-|
| name | The name of the resource that is unique within the set of frontend IP configurations used by the load balancer. This name can be used to access the resource. | string (required) |
| properties | Properties of load balancer frontend ip configuration. | LoadBalancerFrontendIpConfigurationProperties(required) |


### LoadBalancerFrontendIpConfigurationProperties

| Name | Description | Value |
|-|-|-|
| privateIPAddress | The virtual network private IP address of the IP configuration. | string |
| publicIPAddress | The reference to the public ip address resource. | SubResource |
| subnet | The reference to the virtual network subnet resource. | SubResource |


### CloudServiceOsProfile

| Name | Description | Value |
|-|-|-|
| secrets | Specifies set of certificates that should be installed onto the role instances. | CloudServiceVaultSecretGroup[] |


### CloudServiceVaultSecretGroup

| Name | Description | Value |
|-|-|-|
| sourceVault | The relative URL of the Key Vault containing all of the certificates in VaultCertificates. | SubResource |
| vaultCertificates | The list of key vault references in SourceVault which contain certificates. | CloudServiceVaultCertificate[] |


### CloudServiceVaultCertificate

| Name | Description | Value |
|-|-|-|
| certificateUrl | This is the URL of a certificate that has been uploaded to Key Vault as a secret. | string |


### CloudServiceRoleProfile

| Name | Description | Value |
|-|-|-|
| roles | List of roles for the cloud service. | CloudServiceRoleProfileProperties[] |


### CloudServiceRoleProfileProperties

| Name | Description | Value |
|-|-|-|
| name | Resource name. | string |
| sku | Describes the cloud service role sku. | CloudServiceRoleSku |


### CloudServiceRoleSku

| Name | Description | Value |
|-|-|-|
| capacity | Specifies the number of role instances in the cloud service. | int |
| name | The sku name. NOTE: If the new SKU is not supported on the hardware the cloud service is currently on, you need to delete and recreate the cloud service or move back to the old sku. | string |
| tier | Specifies the tier of the cloud service. Possible Values areStandardBasic | string |


