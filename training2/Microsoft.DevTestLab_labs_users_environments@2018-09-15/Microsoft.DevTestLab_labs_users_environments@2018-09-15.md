```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/users/environments@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      armTemplateDisplayName = "string"
      deploymentProperties = {
        armTemplateId = "string"
        parameters = [
          {
            name = "string"
            value = "string"
          }
        ]
      }
    }
  })
}

```

### labs/users/environments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:users |
| properties | The properties of the resource. | EnvironmentProperties(required) |


### EnvironmentProperties

| Name | Description | Value |
|-|-|-|
| armTemplateDisplayName | The display name of the Azure Resource Manager template that produced the environment. | string |
| deploymentProperties | The deployment properties of the environment. | EnvironmentDeploymentProperties |


### EnvironmentDeploymentProperties

| Name | Description | Value |
|-|-|-|
| armTemplateId | The Azure Resource Manager template's identifier. | string |
| parameters | The parameters of the Azure Resource Manager template. | ArmTemplateParameterProperties[] |


### ArmTemplateParameterProperties

| Name | Description | Value |
|-|-|-|
| name | The name of the template parameter. | string |
| value | The value of the template parameter. | string |


