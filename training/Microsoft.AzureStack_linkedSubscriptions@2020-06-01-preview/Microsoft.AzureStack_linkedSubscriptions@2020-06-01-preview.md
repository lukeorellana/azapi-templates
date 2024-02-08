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


