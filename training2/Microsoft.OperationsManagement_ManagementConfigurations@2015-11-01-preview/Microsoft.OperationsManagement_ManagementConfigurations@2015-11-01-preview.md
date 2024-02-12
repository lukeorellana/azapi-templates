```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationsManagement/ManagementConfigurations@2015-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      applicationId = "string"
      parameters = [
        {
          name = "string"
          value = "string"
        }
      ]
      parentResourceType = "string"
    }
  })
}

```

### ManagementConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string |
| properties | Properties for ManagementConfiguration object supported by the OperationsManagement resource provider. | ManagementConfigurationProperties |


### ManagementConfigurationProperties

| Name | Description | Value |
|-|-|-|
| applicationId | The applicationId of the appliance for this Management. | string |
| parameters | Parameters to run the ARM template | ArmTemplateParameter[] (required) |
| parentResourceType | The type of the parent resource. | string (required) |
| template | The Json object containing the ARM template to deploy | For Bicep, you can use theany()function.(required) |


### ArmTemplateParameter

| Name | Description | Value |
|-|-|-|
| name | name of the parameter. | string |
| value | value for the parameter. In Jtoken | string |


