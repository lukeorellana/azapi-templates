```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ManagedServices/registrationAssignments@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      registrationDefinitionId = "string"
    }
  })
}

```

### registrationAssignments

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | The properties of a registration assignment. | RegistrationAssignmentProperties |


### RegistrationAssignmentProperties

| Name | Description | Value |
|-|-|-|
| registrationDefinitionId | The fully qualified path of the registration definition. | string (required) |


