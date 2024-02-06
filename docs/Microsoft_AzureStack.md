## Microsoft.AzureStack/linkedSubscriptions@2020-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStack/linkedSubscriptions@2020-06-01-preview"
  name = "string"
  location = "global"
  parent_id = "string"
  body = jsonencode({
    properties = {
      linkedSubscriptionId = "string"
      registrationResourceId = "string"
    }
  })
}

```

### linkedSubscriptions

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Location of the resource. | 'global' (required) |
| properties | Properties of the Linked Subscription resource | LinkedSubscriptionParameterPropertiesOrLinkedSubscri...(required) |


### LinkedSubscriptionParameterPropertiesOrLinkedSubscri...

| Name | Description | Value |
|-|-|-|
| linkedSubscriptionId | The identifier associated with the device subscription. | string (required) |
| registrationResourceId | The identifier associated with the device registration. | string (required) |
## Microsoft.AzureStack/registrations@2022-06-01

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
## Microsoft.AzureStack/registrations/customerSubscriptions@2022-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStack/registrations/customerSubscriptions@2022-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      tenantId = "string"
    }
    etag = "string"
  })
}

```

### registrations/customerSubscriptions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registrations |
| etag | The entity tag used for optimistic concurrency when modifying the resource. | string |
| properties | Customer subscription properties. | CustomerSubscriptionProperties |


### CustomerSubscriptionProperties

| Name | Description | Value |
|-|-|-|
| tenantId | Tenant Id. | string |
