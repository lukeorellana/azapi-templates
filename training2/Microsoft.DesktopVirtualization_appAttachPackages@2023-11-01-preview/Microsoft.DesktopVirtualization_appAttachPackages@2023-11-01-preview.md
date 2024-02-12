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


