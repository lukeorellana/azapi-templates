```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/users@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appType = "string"
      confirmation = "string"
      email = "string"
      firstName = "string"
      identities = [
        {
          id = "string"
          provider = "string"
        }
      ]
      lastName = "string"
      note = "string"
      password = "string"
      state = "string"
    }
  })
}

```

### service/users

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | User entity create contract properties. | UserCreateParameterPropertiesOrUserContractPropertie... |


### UserCreateParameterPropertiesOrUserContractPropertie...

| Name | Description | Value |
|-|-|-|
| appType | Determines the type of application which send the create user request. Default is legacy portal. | 'developerPortal''portal' |
| confirmation | Determines the type of confirmation e-mail that will be sent to the newly created user. | 'invite''signup' |
| email | Email address. Must not be empty and must be unique within the service instance. | string (required) |
| firstName | First name. | string (required) |
| identities | Collection of user identities. | UserIdentityContract[] |
| lastName | Last name. | string (required) |
| note | Optional note about a user set by the administrator. | string |
| password | User Password. If no value is provided, a default password is generated. | string |
| state | Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active. | 'active''blocked''deleted''pending' |


### UserIdentityContract

| Name | Description | Value |
|-|-|-|
| id | Identifier value within provider. | string |
| provider | Identity provider name. | string |


