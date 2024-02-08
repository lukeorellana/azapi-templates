```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.LabServices/labaccounts/labs/environmentsettings/environments@2018-10-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      provisioningState = "string"
      resourceSets = {
        resourceSettingId = "string"
        vmResourceId = "string"
      }
      uniqueIdentifier = "string"
    }
  })
}

```

### labaccounts/labs/environmentsettings/environments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:environmentsettings |
| properties | The properties of the Environment resource | EnvironmentProperties |


### EnvironmentProperties

| Name | Description | Value |
|-|-|-|
| provisioningState | The provisioning status of the resource. | string |
| resourceSets | The set of a VM and the setting id it was created for | ResourceSet |
| uniqueIdentifier | The unique immutable identifier of a resource (Guid). | string |


### ResourceSet

| Name | Description | Value |
|-|-|-|
| resourceSettingId | resourceSettingId for the environment | string |
| vmResourceId | VM resource Id for the environment | string |


