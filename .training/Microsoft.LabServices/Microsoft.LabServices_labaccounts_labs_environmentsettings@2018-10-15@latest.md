```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.LabServices/labaccounts/labs/environmentsettings@2018-10-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      configurationState = "string"
      description = "string"
      provisioningState = "string"
      resourceSettings = {
        galleryImageResourceId = "string"
        referenceVm = {
          password = "string"
          userName = "string"
        }
        size = "string"
      }
      title = "string"
      uniqueIdentifier = "string"
    }
  })
}

```

### labaccounts/labs/environmentsettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:labs |
| properties | The properties of the Environment Setting resource | EnvironmentSettingProperties |


### EnvironmentSettingProperties

| Name | Description | Value |
|-|-|-|
| configurationState | Describes the user's progress in configuring their environment setting | 'Completed''NotApplicable' |
| description | Describes the environment and its resource settings | string |
| provisioningState | The provisioning status of the resource. | string |
| resourceSettings | The resource specific settings | ResourceSettings(required) |
| title | Brief title describing the environment and its resource settings | string |
| uniqueIdentifier | The unique immutable identifier of a resource (Guid). | string |


### ResourceSettings

| Name | Description | Value |
|-|-|-|
| galleryImageResourceId | The resource id of the gallery image used for creating the virtual machine | string |
| referenceVm | Details specific to Reference Vm | ReferenceVm(required) |
| size | The size of the virtual machine | 'Basic''Performance''Standard' |


### ReferenceVm

| Name | Description | Value |
|-|-|-|
| password | The password of the virtual machine. This will be set to null in GET resource API | string |
| userName | The username of the virtual machine | string (required) |


