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


