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


