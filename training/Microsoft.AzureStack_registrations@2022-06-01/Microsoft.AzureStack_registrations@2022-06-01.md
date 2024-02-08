```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStack/registrations@2022-06-01"
  name = "string"
  location = "global"
  parent_id = "string"
  body = jsonencode({
    properties = {
      registrationToken = "string"
    }
  })
}

```

### registrations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Location of the resource. | 'global' (required) |
| properties | Properties of the Azure Stack registration resource | RegistrationParameterPropertiesOrRegistrationPropert...(required) |


### RegistrationParameterPropertiesOrRegistrationPropert...

| Name | Description | Value |
|-|-|-|
| registrationToken | The token identifying registered Azure Stack | string (required) |


