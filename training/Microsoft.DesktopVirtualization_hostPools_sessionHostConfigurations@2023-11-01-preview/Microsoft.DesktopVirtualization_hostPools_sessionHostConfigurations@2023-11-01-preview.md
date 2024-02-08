```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DesktopVirtualization/hostPools/sessionHostConfigurations@2023-11-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      availabilityZones = [
        int
      ]
      bootDiagnosticsInfo = {
        enabled = bool
        storageUri = "string"
      }
      customConfigurationScriptUrl = "string"
      diskInfo = {
        type = "string"
      }
      domainInfo = {
        activeDirectoryInfo = {
          domainCredentials = {
            passwordKeyVaultSecretUri = "string"
            usernameKeyVaultSecretUri = "string"
          }
          domainName = "string"
          ouPath = "string"
        }
        azureActiveDirectoryInfo = {
          mdmProviderGuid = "string"
        }
        joinType = "string"
      }
      friendlyName = "string"
      imageInfo = {
        customInfo = {
          resourceId = "string"
        }
        marketplaceInfo = {
          exactVersion = "string"
          offer = "string"
          publisher = "string"
          sku = "string"
        }
        type = "string"
      }
      networkInfo = {
        securityGroupId = "string"
        subnetId = "string"
      }
      securityInfo = {
        secureBootEnabled = bool
        type = "string"
        vTpmEnabled = bool
      }
      vmAdminCredentials = {
        passwordKeyVaultSecretUri = "string"
        usernameKeyVaultSecretUri = "string"
      }
      vmLocation = "string"
      vmNamePrefix = "string"
      vmResourceGroup = "string"
      vmSizeId = "string"
      vmTags = {
        {customized property} = "string"
      }
    }
  })
}

```

### hostPools/sessionHostConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hostPools |
| properties | Detailed properties for SessionHostConfiguration | SessionHostConfigurationProperties(required) |


### SessionHostConfigurationProperties

| Name | Description | Value |
|-|-|-|
| availabilityZones | Value for availability zones to be used by the session host. Should be from [1,2,3]. | int[] |
| bootDiagnosticsInfo | Boot Diagnostics information. | BootDiagnosticsInfoProperties |
| customConfigurationScriptUrl | The uri to the storage blob containing the arm template to be run on the virtual machine after provisioning. | string |
| diskInfo | Disk information. | DiskInfoProperties(required) |
| domainInfo | Domain configurations of session hosts. | DomainInfoProperties(required) |
| friendlyName | Friendly name to describe this version of the SessionHostConfiguration. | stringConstraints:Max length = 260 |
| imageInfo | Image configurations of HostPool. | ImageInfoProperties(required) |
| networkInfo | Network information. | NetworkInfoProperties(required) |
| securityInfo | Security information. | SecurityInfoProperties |
| vmAdminCredentials | Local Admin credentials for session hosts. | KeyVaultCredentialsProperties(required) |
| vmLocation | The Location for the session host to be created in. It will default to the location of the hostpool if not provided. | string |
| vmNamePrefix | The prefix that should be associated with session host names | string (required)Constraints:Max length = 11 |
| vmResourceGroup | The ResourceGroup for the session hosts to be created in. It will default to the ResourceGroup of the hostpool if not provided. | string |
| vmSizeId | The id of the size of a virtual machine connected to a hostpool. | string (required) |
| vmTags | Hashtable that lists key/value pair tags to apply to the VMs | SessionHostConfigurationPropertiesVmTags |


### BootDiagnosticsInfoProperties

| Name | Description | Value |
|-|-|-|
| enabled | Whether boot diagnostics should be enabled on the Virtual Machine. | bool |
| storageUri | Uri of the storage account to use for placing the console output and screenshot.If storageUri is not specified while enabling boot diagnostics, managed storage will be used. | string |


### DiskInfoProperties

| Name | Description | Value |
|-|-|-|
| type | The disk type used by virtual machine in hostpool session host. | 'Premium_LRS''StandardSSD_LRS''Standard_LRS' (required) |


### DomainInfoProperties

| Name | Description | Value |
|-|-|-|
| activeDirectoryInfo | Active directory info. Only one should be populated based on the join type. | ActiveDirectoryInfoProperties |
| azureActiveDirectoryInfo | Azure active directory info. Only one should be populated based on the join type. | AzureActiveDirectoryInfoProperties |
| joinType | The type of domain join done by the virtual machine. | 'ActiveDirectory''AzureActiveDirectory' (required) |


### ActiveDirectoryInfoProperties

| Name | Description | Value |
|-|-|-|
| domainCredentials | Credentials needed to create the virtual machine. | KeyVaultCredentialsProperties(required) |
| domainName | The domain a virtual machine connected to a hostpool will join. | string |
| ouPath | The ou path. | string (required) |


### KeyVaultCredentialsProperties

| Name | Description | Value |
|-|-|-|
| passwordKeyVaultSecretUri | The uri to access the secret that the password is stored in. | string (required) |
| usernameKeyVaultSecretUri | The uri to access the secret that the username is stored in. | string (required) |


### AzureActiveDirectoryInfoProperties

| Name | Description | Value |
|-|-|-|
| mdmProviderGuid | The mdm guid. | string (required) |


### ImageInfoProperties

| Name | Description | Value |
|-|-|-|
| customInfo | The values to uniquely identify a custom image. Only one should be populated based on the image type. | CustomInfoProperties |
| marketplaceInfo | The values to uniquely identify a marketplace image. Only one should be populated based on the image type. | MarketplaceInfoProperties |
| type | The type of image session hosts use in the hostpool. | 'Custom''Marketplace' (required) |


### CustomInfoProperties

| Name | Description | Value |
|-|-|-|
| resourceId | The resource id of the custom image. | string (required) |


### MarketplaceInfoProperties

| Name | Description | Value |
|-|-|-|
| exactVersion | The exact version of the image. | string (required) |
| offer | The offer of the image. | string (required) |
| publisher | The publisher of the image. | string (required) |
| sku | The sku of the image. | string (required) |


### NetworkInfoProperties

| Name | Description | Value |
|-|-|-|
| securityGroupId | The resource ID of the security group. Any allowable/open ports should be specified in the NSG. | string |
| subnetId | The resource ID of the subnet. | string (required) |


### SecurityInfoProperties

| Name | Description | Value |
|-|-|-|
| secureBootEnabled | Whether to use secureBoot on the virtual machine. | bool |
| type | The security type used by virtual machine in hostpool session host. Default is Standard. | 'ConfidentialVM''Standard''TrustedLaunch' |
| vTpmEnabled | Whether to use vTPM on the virtual machine. | bool |


### SessionHostConfigurationPropertiesVmTags

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


