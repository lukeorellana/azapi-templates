## Microsoft.DesktopVirtualization/appAttachPackages@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DesktopVirtualization/appAttachPackages@2023-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      failHealthCheckOnStagingFailure = "string"
      hostPoolReferences = [
        "string"
      ]
      image = {
        certificateExpiry = "string"
        certificateName = "string"
        displayName = "string"
        imagePath = "string"
        isActive = bool
        isPackageTimestamped = "string"
        isRegularRegistration = bool
        lastUpdated = "string"
        packageAlias = "string"
        packageApplications = [
          {
            appId = "string"
            appUserModelID = "string"
            description = "string"
            friendlyName = "string"
            iconImageName = "string"
          }
        ]
        packageDependencies = [
          {
            dependencyName = "string"
            minVersion = "string"
            publisher = "string"
          }
        ]
        packageFamilyName = "string"
        packageFullName = "string"
        packageName = "string"
        packageRelativePath = "string"
        version = "string"
      }
      keyVaultURL = "string"
    }
  })
}

```

### appAttachPackages

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Detailed properties for App Attach Package | AppAttachPackageProperties(required) |


### AppAttachPackageProperties

| Name | Description | Value |
|-|-|-|
| failHealthCheckOnStagingFailure | Parameter indicating how the health check should behave if this package fails staging | 'DoNotFail''NeedsAssistance''Unhealthy' |
| hostPoolReferences | List of Hostpool resource Ids. | string[] |
| image | Detailed properties for App Attach Package | AppAttachPackageInfoProperties |
| keyVaultURL | URL of keyvault location to store certificate | string |


### AppAttachPackageInfoProperties

| Name | Description | Value |
|-|-|-|
| certificateExpiry | Date certificate expires, found in the appxmanifest.xml. | string |
| certificateName | Certificate name found in the appxmanifest.xml. | string |
| displayName | User friendly Name to be displayed in the portal. | string |
| imagePath | VHD/CIM image path on Network Share. | string |
| isActive | Make this version of the package the active one across the hostpool. | bool |
| isPackageTimestamped | Is package timestamped so it can ignore the certificate expiry date | 'NotTimestamped''Timestamped' |
| isRegularRegistration | Specifies how to register Package in feed. | bool |
| lastUpdated | Date Package was last updated, found in the appxmanifest.xml. | string |
| packageAlias | Alias of App Attach Package. Assigned at import time | string |
| packageApplications | List of package applications. | MsixPackageApplications[] |
| packageDependencies | List of package dependencies. | MsixPackageDependencies[] |
| packageFamilyName | Package Family Name from appxmanifest.xml. Contains Package Name and Publisher name. | string |
| packageFullName | Package Full Name from appxmanifest.xml. | string |
| packageName | Package Name from appxmanifest.xml. | string |
| packageRelativePath | Relative Path to the package inside the image. | string |
| version | Package Version found in the appxmanifest.xml. | string |


### MsixPackageApplications

| Name | Description | Value |
|-|-|-|
| appId | Package Application Id, found in appxmanifest.xml. | string |
| appUserModelID | Used to activate Package Application. Consists of Package Name and ApplicationID. Found in appxmanifest.xml. | string |
| description | Description of Package Application. | string |
| friendlyName | User friendly name. | string |
| iconImageName | User friendly name. | string |
| rawIcon | the icon a 64 bit string as a byte array. | For Bicep, you can use theany()function. |
| rawPng | the icon a 64 bit string as a byte array. | For Bicep, you can use theany()function. |


### MsixPackageDependencies

| Name | Description | Value |
|-|-|-|
| dependencyName | Name of package dependency. | string |
| minVersion | Dependency version required. | string |
| publisher | Name of dependency publisher. | string |
## Microsoft.DesktopVirtualization/applicationGroups@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DesktopVirtualization/applicationGroups@2023-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
  identity {
    type = "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      applicationGroupType = "string"
      description = "string"
      friendlyName = "string"
      hostPoolArmPath = "string"
      showInFeed = bool
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
    managedBy = "string"
    plan = {
      name = "string"
      product = "string"
      promotionCode = "string"
      publisher = "string"
      version = "string"
    }
  })
}

```

### applicationGroups

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-64Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with letter or number. End with letter, number, or underscore. |
| location | The geo-location where the resource lives | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku |  | ResourceModelWithAllowedPropertySetSku |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value. | stringConstraints:Pattern =^[-\w\._,\(\)]+$ |
| identity |  | ResourceModelWithAllowedPropertySetIdentity |
| managedBy | The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource. | string |
| plan |  | ResourceModelWithAllowedPropertySetPlan |
| properties | Detailed properties for ApplicationGroup | ApplicationGroupProperties(required) |


### ResourceModelWithAllowedPropertySetIdentity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'SystemAssigned' |


### ResourceModelWithAllowedPropertySetPlan

| Name | Description | Value |
|-|-|-|
| name | A user defined name of the 3rd Party Artifact that is being procured. | string (required) |
| product | The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding. | string (required) |
| promotionCode | A publisher provided promotion code as provisioned in Data Market for the said product/artifact. | string |
| publisher | The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic | string (required) |
| version | The version of the desired product/artifact. | string |


### ApplicationGroupProperties

| Name | Description | Value |
|-|-|-|
| applicationGroupType | Resource Type of ApplicationGroup. | 'Desktop''RemoteApp' (required) |
| description | Description of ApplicationGroup. | string |
| friendlyName | Friendly name of ApplicationGroup. | string |
| hostPoolArmPath | HostPool arm path of ApplicationGroup. | string (required) |
| showInFeed | Boolean representing whether the applicationGroup is show in the feed. | bool |


### ResourceModelWithAllowedPropertySetSku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Free''Premium''Standard' |
## Microsoft.DesktopVirtualization/applicationGroups/applications@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DesktopVirtualization/applicationGroups/applications@2023-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      applicationType = "string"
      commandLineArguments = "string"
      commandLineSetting = "string"
      description = "string"
      filePath = "string"
      friendlyName = "string"
      iconIndex = int
      iconPath = "string"
      msixPackageApplicationId = "string"
      msixPackageFamilyName = "string"
      showInPortal = bool
    }
  })
}

```

### applicationGroups/applications

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:applicationGroups |
| properties | Detailed properties for Application | ApplicationProperties(required) |


### ApplicationProperties

| Name | Description | Value |
|-|-|-|
| applicationType | Resource Type of Application. | 'InBuilt''MsixApplication' |
| commandLineArguments | Command Line Arguments for Application. | string |
| commandLineSetting | Specifies whether this published application can be launched with command line arguments provided by the client, command line arguments specified at publish time, or no command line arguments at all. | 'Allow''DoNotAllow''Require' (required) |
| description | Description of Application. | string |
| filePath | Specifies a path for the executable file for the application. | string |
| friendlyName | Friendly name of Application. | string |
| iconIndex | Index of the icon. | int |
| iconPath | Path to icon. | string |
| msixPackageApplicationId | Specifies the package application Id for MSIX applications | string |
| msixPackageFamilyName | Specifies the package family name for MSIX applications | string |
| showInPortal | Specifies whether to show the RemoteApp program in the RD Web Access server. | bool |
## Microsoft.DesktopVirtualization/hostPools@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DesktopVirtualization/hostPools@2023-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
  identity {
    type = "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      agentUpdate = {
        maintenanceWindows = [
          {
            dayOfWeek = "string"
            hour = int
          }
        ]
        maintenanceWindowTimeZone = "string"
        type = "string"
        useSessionHostLocalTime = bool
      }
      customRdpProperty = "string"
      description = "string"
      friendlyName = "string"
      hostPoolType = "string"
      loadBalancerType = "string"
      managementType = "string"
      maxSessionLimit = int
      personalDesktopAssignmentType = "string"
      preferredAppGroupType = "string"
      publicNetworkAccess = "string"
      registrationInfo = {
        expirationTime = "string"
        registrationTokenOperation = "string"
        token = "string"
      }
      ring = int
      ssoadfsAuthority = "string"
      ssoClientId = "string"
      ssoClientSecretKeyVaultPath = "string"
      ssoSecretType = "string"
      startVMOnConnect = bool
      validationEnvironment = bool
      vmTemplate = "string"
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
    managedBy = "string"
    plan = {
      name = "string"
      product = "string"
      promotionCode = "string"
      publisher = "string"
      version = "string"
    }
  })
}

```

### hostPools

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-64Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with letter or number. End with letter, number, or underscore. |
| location | The geo-location where the resource lives | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku |  | ResourceModelWithAllowedPropertySetSku |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value. | stringConstraints:Pattern =^[-\w\._,\(\)]+$ |
| identity |  | ResourceModelWithAllowedPropertySetIdentity |
| managedBy | The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource. | string |
| plan |  | ResourceModelWithAllowedPropertySetPlan |
| properties | Detailed properties for HostPool | HostPoolProperties(required) |


### ResourceModelWithAllowedPropertySetIdentity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'SystemAssigned' |


### ResourceModelWithAllowedPropertySetPlan

| Name | Description | Value |
|-|-|-|
| name | A user defined name of the 3rd Party Artifact that is being procured. | string (required) |
| product | The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding. | string (required) |
| promotionCode | A publisher provided promotion code as provisioned in Data Market for the said product/artifact. | string |
| publisher | The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic | string (required) |
| version | The version of the desired product/artifact. | string |


### HostPoolProperties

| Name | Description | Value |
|-|-|-|
| agentUpdate | The session host configuration for updating agent, monitoring agent, and stack component. | AgentUpdateProperties |
| customRdpProperty | Custom rdp property of HostPool. | string |
| description | Description of HostPool. | string |
| friendlyName | Friendly name of HostPool. | string |
| hostPoolType | HostPool type for desktop. | 'BYODesktop''Personal''Pooled' (required) |
| loadBalancerType | The type of the load balancer. | 'BreadthFirst''DepthFirst''Persistent' (required) |
| managementType | The type of management for this hostpool, Automated or Standard. The default value is Automated. | 'Automated''Standard' |
| maxSessionLimit | The max session limit of HostPool. | int |
| personalDesktopAssignmentType | PersonalDesktopAssignment type for HostPool. | 'Automatic''Direct' |
| preferredAppGroupType | The type of preferred application group type, default to Desktop Application Group | 'Desktop''None''RailApplications' (required) |
| publicNetworkAccess | Enabled allows this resource to be accessed from both public and private networks, Disabled allows this resource to only be accessed via private endpoints | 'Disabled''Enabled''EnabledForClientsOnly''EnabledForSessionHostsOnly' |
| registrationInfo | The registration info of HostPool. | RegistrationInfo |
| ring | The ring number of HostPool. | int |
| ssoadfsAuthority | URL to customer ADFS server for signing WVD SSO certificates. | string |
| ssoClientId | ClientId for the registered Relying Party used to issue WVD SSO certificates. | string |
| ssoClientSecretKeyVaultPath | Path to Azure KeyVault storing the secret used for communication to ADFS. | string |
| ssoSecretType | The type of single sign on Secret Type. | 'Certificate''CertificateInKeyVault''SharedKey''SharedKeyInKeyVault' |
| startVMOnConnect | The flag to turn on/off StartVMOnConnect feature. | bool |
| validationEnvironment | Is validation environment. | bool |
| vmTemplate | VM template for sessionhosts configuration within hostpool. | string |


### AgentUpdateProperties

| Name | Description | Value |
|-|-|-|
| maintenanceWindows | List of maintenance windows. Maintenance windows are 2 hours long. | MaintenanceWindowProperties[] |
| maintenanceWindowTimeZone | Time zone for maintenance as defined inhttps://docs.microsoft.com/dotnet/api/system.timezoneinfo.findsystemtimezonebyidMust be set if useLocalTime is true. | string |
| type | The type of maintenance for session host components. | 'Default''Scheduled' |
| useSessionHostLocalTime | Whether to use localTime of the virtual machine. | bool |


### MaintenanceWindowProperties

| Name | Description | Value |
|-|-|-|
| dayOfWeek | Day of the week. | 'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| hour | The update start hour of the day. (0 - 23) | int |


### RegistrationInfo

| Name | Description | Value |
|-|-|-|
| expirationTime | Expiration time of registration token. | string |
| registrationTokenOperation | The type of resetting the token. | 'Delete''None''Update' |
| token | The registration token base64 encoded string. | string |


### ResourceModelWithAllowedPropertySetSku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Free''Premium''Standard' |
## Microsoft.DesktopVirtualization/hostPools/msixPackages@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DesktopVirtualization/hostPools/msixPackages@2023-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      displayName = "string"
      imagePath = "string"
      isActive = bool
      isRegularRegistration = bool
      lastUpdated = "string"
      packageApplications = [
        {
          appId = "string"
          appUserModelID = "string"
          description = "string"
          friendlyName = "string"
          iconImageName = "string"
        }
      ]
      packageDependencies = [
        {
          dependencyName = "string"
          minVersion = "string"
          publisher = "string"
        }
      ]
      packageFamilyName = "string"
      packageName = "string"
      packageRelativePath = "string"
      version = "string"
    }
  })
}

```

### hostPools/msixPackages

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hostPools |
| properties | Detailed properties for MSIX Package | MsixPackageProperties(required) |


### MsixPackageProperties

| Name | Description | Value |
|-|-|-|
| displayName | User friendly Name to be displayed in the portal. | string |
| imagePath | VHD/CIM image path on Network Share. | string |
| isActive | Make this version of the package the active one across the hostpool. | bool |
| isRegularRegistration | Specifies how to register Package in feed. | bool |
| lastUpdated | Date Package was last updated, found in the appxmanifest.xml. | string |
| packageApplications | List of package applications. | MsixPackageApplications[] |
| packageDependencies | List of package dependencies. | MsixPackageDependencies[] |
| packageFamilyName | Package Family Name from appxmanifest.xml. Contains Package Name and Publisher name. | string |
| packageName | Package Name from appxmanifest.xml. | string |
| packageRelativePath | Relative Path to the package inside the image. | string |
| version | Package Version found in the appxmanifest.xml. | string |


### MsixPackageApplications

| Name | Description | Value |
|-|-|-|
| appId | Package Application Id, found in appxmanifest.xml. | string |
| appUserModelID | Used to activate Package Application. Consists of Package Name and ApplicationID. Found in appxmanifest.xml. | string |
| description | Description of Package Application. | string |
| friendlyName | User friendly name. | string |
| iconImageName | User friendly name. | string |
| rawIcon | the icon a 64 bit string as a byte array. | For Bicep, you can use theany()function. |
| rawPng | the icon a 64 bit string as a byte array. | For Bicep, you can use theany()function. |


### MsixPackageDependencies

| Name | Description | Value |
|-|-|-|
| dependencyName | Name of package dependency. | string |
| minVersion | Dependency version required. | string |
| publisher | Name of dependency publisher. | string |
## Microsoft.DesktopVirtualization/hostPools/privateEndpointConnections@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DesktopVirtualization/hostPools/privateEndpointConnections@2023-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
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

### hostPools/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hostPools |
| properties | Resource properties. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The resource of private end point. | PrivateEndpoint |
| privateLinkServiceConnectionState | A collection of information about the state of the connection between service consumer and provider. | PrivateLinkServiceConnectionState(required) |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | A message indicating if changes on the service provider require any updates on the consumer. | string |
| description | The reason for approval/rejection of the connection. | string |
| status | Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. | 'Approved''Pending''Rejected' |
## Microsoft.DesktopVirtualization/hostPools/sessionHostConfigurations@2023-11-01-preview

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
## Microsoft.DesktopVirtualization/hostPools/sessionHostManagements@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DesktopVirtualization/hostPools/sessionHostManagements@2023-11-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      scheduledDateTimeZone = "string"
      update = {
        deleteOriginalVm = bool
        logOffDelayMinutes = int
        logOffMessage = "string"
        maxVmsRemoved = int
      }
    }
  })
}

```

### hostPools/sessionHostManagements

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hostPools |
| properties | Detailed properties for SessionHostManagement | SessionHostManagementProperties(required) |


### SessionHostManagementProperties

| Name | Description | Value |
|-|-|-|
| scheduledDateTimeZone | Time zone for sessionHostManagement operations as defined inhttps://docs.microsoft.com/dotnet/api/system.timezoneinfo.findsystemtimezonebyid. Must be set if useLocalTime is true. | string (required) |
| update | Parameters for a hostpool update. | HostPoolUpdateConfigurationProperties(required) |


### HostPoolUpdateConfigurationProperties

| Name | Description | Value |
|-|-|-|
| deleteOriginalVm | Whether not to save original disk. False by default. | bool |
| logOffDelayMinutes | Grace period before logging off users in minutes. | int (required) |
| logOffMessage | Log off message sent to user for logoff. Default value is an empty string. | stringConstraints:Max length = 260 |
| maxVmsRemoved | The maximum number of virtual machines to be removed during hostpool update. | int (required)Constraints:Min value = 1 |
## Microsoft.DesktopVirtualization/scalingPlans@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DesktopVirtualization/scalingPlans@2023-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
  identity {
    type = "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      description = "string"
      exclusionTag = "string"
      friendlyName = "string"
      hostPoolReferences = [
        {
          hostPoolArmPath = "string"
          scalingPlanEnabled = bool
        }
      ]
      hostPoolType = "Pooled"
      schedules = [
        {
          daysOfWeek = [
            "string"
          ]
          name = "string"
          offPeakLoadBalancingAlgorithm = "string"
          offPeakStartTime = {
            hour = int
            minute = int
          }
          peakLoadBalancingAlgorithm = "string"
          peakStartTime = {
            hour = int
            minute = int
          }
          rampDownCapacityThresholdPct = int
          rampDownForceLogoffUsers = bool
          rampDownLoadBalancingAlgorithm = "string"
          rampDownMinimumHostsPct = int
          rampDownNotificationMessage = "string"
          rampDownStartTime = {
            hour = int
            minute = int
          }
          rampDownStopHostsWhen = "string"
          rampDownWaitTimeMinutes = int
          rampUpCapacityThresholdPct = int
          rampUpLoadBalancingAlgorithm = "string"
          rampUpMinimumHostsPct = int
          rampUpStartTime = {
            hour = int
            minute = int
          }
        }
      ]
      timeZone = "string"
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
    managedBy = "string"
    plan = {
      name = "string"
      product = "string"
      promotionCode = "string"
      publisher = "string"
      version = "string"
    }
  })
}

```

### scalingPlans

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku |  | ResourceModelWithAllowedPropertySetSku |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value. | stringConstraints:Pattern =^[-\w\._,\(\)]+$ |
| identity |  | ResourceModelWithAllowedPropertySetIdentity |
| managedBy | The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource. | string |
| plan |  | ResourceModelWithAllowedPropertySetPlan |
| properties | Detailed properties for scaling plan. | ScalingPlanProperties(required) |


### ResourceModelWithAllowedPropertySetIdentity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'SystemAssigned' |


### ResourceModelWithAllowedPropertySetPlan

| Name | Description | Value |
|-|-|-|
| name | A user defined name of the 3rd Party Artifact that is being procured. | string (required) |
| product | The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding. | string (required) |
| promotionCode | A publisher provided promotion code as provisioned in Data Market for the said product/artifact. | string |
| publisher | The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic | string (required) |
| version | The version of the desired product/artifact. | string |


### ScalingPlanProperties

| Name | Description | Value |
|-|-|-|
| description | Description of scaling plan. | string |
| exclusionTag | Exclusion tag for scaling plan. | string |
| friendlyName | User friendly name of scaling plan. | string |
| hostPoolReferences | List of ScalingHostPoolReference definitions. | ScalingHostPoolReference[] |
| hostPoolType | HostPool type for desktop. | 'Pooled' |
| schedules | List of ScalingPlanPooledSchedule definitions. | ScalingSchedule[] |
| timeZone | Timezone of the scaling plan. | string (required) |


### ScalingHostPoolReference

| Name | Description | Value |
|-|-|-|
| hostPoolArmPath | Arm path of referenced hostpool. | string |
| scalingPlanEnabled | Is the scaling plan enabled for this hostpool. | bool |


### ScalingSchedule

| Name | Description | Value |
|-|-|-|
| daysOfWeek | Set of days of the week on which this schedule is active. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| name | Name of the ScalingPlanPooledSchedule. | string |
| offPeakLoadBalancingAlgorithm | Load balancing algorithm for off-peak period. | 'BreadthFirst''DepthFirst' |
| offPeakStartTime | Starting time for off-peak period. | Time |
| peakLoadBalancingAlgorithm | Load balancing algorithm for peak period. | 'BreadthFirst''DepthFirst' |
| peakStartTime | Starting time for peak period. | Time |
| rampDownCapacityThresholdPct | Capacity threshold for ramp down period. | intConstraints:Min value = 1Max value = 100 |
| rampDownForceLogoffUsers | Should users be logged off forcefully from hosts. | bool |
| rampDownLoadBalancingAlgorithm | Load balancing algorithm for ramp down period. | 'BreadthFirst''DepthFirst' |
| rampDownMinimumHostsPct | Minimum host percentage for ramp down period. | intConstraints:Min value = 0Max value = 100 |
| rampDownNotificationMessage | Notification message for users during ramp down period. | string |
| rampDownStartTime | Starting time for ramp down period. | Time |
| rampDownStopHostsWhen | Specifies when to stop hosts during ramp down period. | 'ZeroActiveSessions''ZeroSessions' |
| rampDownWaitTimeMinutes | Number of minutes to wait to stop hosts during ramp down period. | int |
| rampUpCapacityThresholdPct | Capacity threshold for ramp up period. | intConstraints:Min value = 1Max value = 100 |
| rampUpLoadBalancingAlgorithm | Load balancing algorithm for ramp up period. | 'BreadthFirst''DepthFirst' |
| rampUpMinimumHostsPct | Minimum host percentage for ramp up period. | intConstraints:Min value = 0Max value = 100 |
| rampUpStartTime | Starting time for ramp up period. | Time |


### Time

| Name | Description | Value |
|-|-|-|
| hour | The hour. | int (required)Constraints:Min value = 0Max value = 23 |
| minute | The minute. | int (required)Constraints:Min value = 0Max value = 59 |


### ResourceModelWithAllowedPropertySetSku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Free''Premium''Standard' |
## Microsoft.DesktopVirtualization/scalingPlans/personalSchedules@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DesktopVirtualization/scalingPlans/personalSchedules@2023-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      daysOfWeek = [
        "string"
      ]
      offPeakActionOnDisconnect = "string"
      offPeakActionOnLogoff = "string"
      offPeakMinutesToWaitOnDisconnect = int
      offPeakMinutesToWaitOnLogoff = int
      offPeakStartTime = {
        hour = int
        minute = int
      }
      offPeakStartVMOnConnect = "string"
      peakActionOnDisconnect = "string"
      peakActionOnLogoff = "string"
      peakMinutesToWaitOnDisconnect = int
      peakMinutesToWaitOnLogoff = int
      peakStartTime = {
        hour = int
        minute = int
      }
      peakStartVMOnConnect = "string"
      rampDownActionOnDisconnect = "string"
      rampDownActionOnLogoff = "string"
      rampDownMinutesToWaitOnDisconnect = int
      rampDownMinutesToWaitOnLogoff = int
      rampDownStartTime = {
        hour = int
        minute = int
      }
      rampDownStartVMOnConnect = "string"
      rampUpActionOnDisconnect = "string"
      rampUpActionOnLogoff = "string"
      rampUpAutoStartHosts = "string"
      rampUpMinutesToWaitOnDisconnect = int
      rampUpMinutesToWaitOnLogoff = int
      rampUpStartTime = {
        hour = int
        minute = int
      }
      rampUpStartVMOnConnect = "string"
    }
  })
}

```

### scalingPlans/personalSchedules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:scalingPlans |
| properties | Detailed properties for ScalingPlanPersonalSchedule | ScalingPlanPersonalScheduleProperties(required) |


### ScalingPlanPersonalScheduleProperties

| Name | Description | Value |
|-|-|-|
| daysOfWeek | Set of days of the week on which this schedule is active. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| offPeakActionOnDisconnect | Action to be taken after a user disconnect during the off-peak period. | 'Deallocate''Hibernate''None' |
| offPeakActionOnLogoff | Action to be taken after a logoff during the off-peak period. | 'Deallocate''Hibernate''None' |
| offPeakMinutesToWaitOnDisconnect | The time in minutes to wait before performing the desired session handling action when a user disconnects during the off-peak period. | intConstraints:Min value = 0 |
| offPeakMinutesToWaitOnLogoff | The time in minutes to wait before performing the desired session handling action when a user logs off during the off-peak period. | intConstraints:Min value = 0 |
| offPeakStartTime | Starting time for off-peak period. | Time |
| offPeakStartVMOnConnect | The desired configuration of Start VM On Connect for the hostpool during the off-peak phase. | 'Disable''Enable' |
| peakActionOnDisconnect | Action to be taken after a user disconnect during the peak period. | 'Deallocate''Hibernate''None' |
| peakActionOnLogoff | Action to be taken after a logoff during the peak period. | 'Deallocate''Hibernate''None' |
| peakMinutesToWaitOnDisconnect | The time in minutes to wait before performing the desired session handling action when a user disconnects during the peak period. | intConstraints:Min value = 0 |
| peakMinutesToWaitOnLogoff | The time in minutes to wait before performing the desired session handling action when a user logs off during the peak period. | intConstraints:Min value = 0 |
| peakStartTime | Starting time for peak period. | Time |
| peakStartVMOnConnect | The desired configuration of Start VM On Connect for the hostpool during the peak phase. | 'Disable''Enable' |
| rampDownActionOnDisconnect | Action to be taken after a user disconnect during the ramp down period. | 'Deallocate''Hibernate''None' |
| rampDownActionOnLogoff | Action to be taken after a logoff during the ramp down period. | 'Deallocate''Hibernate''None' |
| rampDownMinutesToWaitOnDisconnect | The time in minutes to wait before performing the desired session handling action when a user disconnects during the ramp down period. | intConstraints:Min value = 0 |
| rampDownMinutesToWaitOnLogoff | The time in minutes to wait before performing the desired session handling action when a user logs off during the ramp down period. | intConstraints:Min value = 0 |
| rampDownStartTime | Starting time for ramp down period. | Time |
| rampDownStartVMOnConnect | The desired configuration of Start VM On Connect for the hostpool during the ramp down phase. | 'Disable''Enable' |
| rampUpActionOnDisconnect | Action to be taken after a user disconnect during the ramp up period. | 'Deallocate''Hibernate''None' |
| rampUpActionOnLogoff | Action to be taken after a logoff during the ramp up period. | 'Deallocate''Hibernate''None' |
| rampUpAutoStartHosts | The desired startup behavior during the ramp up period for personal vms in the hostpool. | 'All''None''WithAssignedUser' |
| rampUpMinutesToWaitOnDisconnect | The time in minutes to wait before performing the desired session handling action when a user disconnects during the ramp up period. | intConstraints:Min value = 0 |
| rampUpMinutesToWaitOnLogoff | The time in minutes to wait before performing the desired session handling action when a user logs off during the ramp up period. | intConstraints:Min value = 0 |
| rampUpStartTime | Starting time for ramp up period. | Time |
| rampUpStartVMOnConnect | The desired configuration of Start VM On Connect for the hostpool during the ramp up phase. If this is disabled, session hosts must be turned on using rampUpAutoStartHosts or by turning them on manually. | 'Disable''Enable' |


### Time

| Name | Description | Value |
|-|-|-|
| hour | The hour. | int (required)Constraints:Min value = 0Max value = 23 |
| minute | The minute. | int (required)Constraints:Min value = 0Max value = 59 |
## Microsoft.DesktopVirtualization/scalingPlans/pooledSchedules@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DesktopVirtualization/scalingPlans/pooledSchedules@2023-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      daysOfWeek = [
        "string"
      ]
      offPeakLoadBalancingAlgorithm = "string"
      offPeakStartTime = {
        hour = int
        minute = int
      }
      peakLoadBalancingAlgorithm = "string"
      peakStartTime = {
        hour = int
        minute = int
      }
      rampDownCapacityThresholdPct = int
      rampDownForceLogoffUsers = bool
      rampDownLoadBalancingAlgorithm = "string"
      rampDownMinimumHostsPct = int
      rampDownNotificationMessage = "string"
      rampDownStartTime = {
        hour = int
        minute = int
      }
      rampDownStopHostsWhen = "string"
      rampDownWaitTimeMinutes = int
      rampUpCapacityThresholdPct = int
      rampUpLoadBalancingAlgorithm = "string"
      rampUpMinimumHostsPct = int
      rampUpStartTime = {
        hour = int
        minute = int
      }
    }
  })
}

```

### scalingPlans/pooledSchedules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:scalingPlans |
| properties | Detailed properties for ScalingPlanPooledSchedule | ScalingPlanPooledScheduleProperties(required) |


### ScalingPlanPooledScheduleProperties

| Name | Description | Value |
|-|-|-|
| daysOfWeek | Set of days of the week on which this schedule is active. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| offPeakLoadBalancingAlgorithm | Load balancing algorithm for off-peak period. | 'BreadthFirst''DepthFirst' |
| offPeakStartTime | Starting time for off-peak period. | Time |
| peakLoadBalancingAlgorithm | Load balancing algorithm for peak period. | 'BreadthFirst''DepthFirst' |
| peakStartTime | Starting time for peak period. | Time |
| rampDownCapacityThresholdPct | Capacity threshold for ramp down period. | intConstraints:Min value = 1Max value = 100 |
| rampDownForceLogoffUsers | Should users be logged off forcefully from hosts. | bool |
| rampDownLoadBalancingAlgorithm | Load balancing algorithm for ramp down period. | 'BreadthFirst''DepthFirst' |
| rampDownMinimumHostsPct | Minimum host percentage for ramp down period. | intConstraints:Min value = 0Max value = 100 |
| rampDownNotificationMessage | Notification message for users during ramp down period. | string |
| rampDownStartTime | Starting time for ramp down period. | Time |
| rampDownStopHostsWhen | Specifies when to stop hosts during ramp down period. | 'ZeroActiveSessions''ZeroSessions' |
| rampDownWaitTimeMinutes | Number of minutes to wait to stop hosts during ramp down period. | int |
| rampUpCapacityThresholdPct | Capacity threshold for ramp up period. | intConstraints:Min value = 1Max value = 100 |
| rampUpLoadBalancingAlgorithm | Load balancing algorithm for ramp up period. | 'BreadthFirst''DepthFirst' |
| rampUpMinimumHostsPct | Minimum host percentage for ramp up period. | intConstraints:Min value = 0Max value = 100 |
| rampUpStartTime | Starting time for ramp up period. | Time |


### Time

| Name | Description | Value |
|-|-|-|
| hour | The hour. | int (required)Constraints:Min value = 0Max value = 23 |
| minute | The minute. | int (required)Constraints:Min value = 0Max value = 59 |
## Microsoft.DesktopVirtualization/workspaces@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DesktopVirtualization/workspaces@2023-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
  identity {
    type = "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      applicationGroupReferences = [
        "string"
      ]
      description = "string"
      friendlyName = "string"
      publicNetworkAccess = "string"
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
    managedBy = "string"
    plan = {
      name = "string"
      product = "string"
      promotionCode = "string"
      publisher = "string"
      version = "string"
    }
  })
}

```

### workspaces

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-64Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with letter or number. End with letter, number, or underscore. |
| location | The geo-location where the resource lives | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku |  | ResourceModelWithAllowedPropertySetSku |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value. | stringConstraints:Pattern =^[-\w\._,\(\)]+$ |
| identity |  | ResourceModelWithAllowedPropertySetIdentity |
| managedBy | The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource. | string |
| plan |  | ResourceModelWithAllowedPropertySetPlan |
| properties | Detailed properties for Workspace | WorkspaceProperties |


### ResourceModelWithAllowedPropertySetIdentity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'SystemAssigned' |


### ResourceModelWithAllowedPropertySetPlan

| Name | Description | Value |
|-|-|-|
| name | A user defined name of the 3rd Party Artifact that is being procured. | string (required) |
| product | The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding. | string (required) |
| promotionCode | A publisher provided promotion code as provisioned in Data Market for the said product/artifact. | string |
| publisher | The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic | string (required) |
| version | The version of the desired product/artifact. | string |


### WorkspaceProperties

| Name | Description | Value |
|-|-|-|
| applicationGroupReferences | List of applicationGroup resource Ids. | string[] |
| description | Description of Workspace. | string |
| friendlyName | Friendly name of Workspace. | string |
| publicNetworkAccess | Enabled allows this resource to be accessed from both public and private networks, Disabled allows this resource to only be accessed via private endpoints | 'Disabled''Enabled' |


### ResourceModelWithAllowedPropertySetSku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Free''Premium''Standard' |
## Microsoft.DesktopVirtualization/workspaces/privateEndpointConnections@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DesktopVirtualization/workspaces/privateEndpointConnections@2023-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
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

### workspaces/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Resource properties. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The resource of private end point. | PrivateEndpoint |
| privateLinkServiceConnectionState | A collection of information about the state of the connection between service consumer and provider. | PrivateLinkServiceConnectionState(required) |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | A message indicating if changes on the service provider require any updates on the consumer. | string |
| description | The reason for approval/rejection of the connection. | string |
| status | Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. | 'Approved''Pending''Rejected' |
