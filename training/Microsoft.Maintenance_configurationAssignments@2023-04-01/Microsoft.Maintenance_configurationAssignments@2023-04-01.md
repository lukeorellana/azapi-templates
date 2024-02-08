```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Maintenance/configurationAssignments@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      filter = {
        locations = [
          "string"
        ]
        osTypes = [
          "string"
        ]
        resourceGroups = [
          "string"
        ]
        resourceTypes = [
          "string"
        ]
        tagSettings = {
          filterOperator = "string"
          tags = {}
        }
      }
      maintenanceConfigurationId = "string"
      resourceId = "string"
    }
  })
}

```

### configurationAssignments

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Location of the resource | string |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | Properties of the configuration assignment | ConfigurationAssignmentProperties |


### ConfigurationAssignmentProperties

| Name | Description | Value |
|-|-|-|
| filter | Properties of the configuration assignment | ConfigurationAssignmentFilterProperties |
| maintenanceConfigurationId | The maintenance configuration Id | string |
| resourceId | The unique resourceId | string |


### ConfigurationAssignmentFilterProperties

| Name | Description | Value |
|-|-|-|
| locations | List of locations to scope the query to. | string[] |
| osTypes | List of allowed operating systems. | string[] |
| resourceGroups | List of allowed resource groups. | string[] |
| resourceTypes | List of allowed resources. | string[] |
| tagSettings | Tag settings for the VM. | TagSettingsProperties |


### TagSettingsProperties

| Name | Description | Value |
|-|-|-|
| filterOperator | Filter VMs by Any or All specified tags. | 'All''Any' |
| tags | Dictionary of tags with its list of values. | object |


