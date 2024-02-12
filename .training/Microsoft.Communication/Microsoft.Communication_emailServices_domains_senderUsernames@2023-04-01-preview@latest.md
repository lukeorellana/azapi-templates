```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Communication/emailServices/domains/senderUsernames@2023-04-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      displayName = "string"
      username = "string"
    }
  })
}

```

### emailServices/domains/senderUsernames

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:domains |
| properties | The properties of a SenderUsername resource. | SenderUsernameProperties |


### SenderUsernameProperties

| Name | Description | Value |
|-|-|-|
| displayName | The display name for the senderUsername. | string |
| username | A sender senderUsername to be used when sending emails. | string (required) |


