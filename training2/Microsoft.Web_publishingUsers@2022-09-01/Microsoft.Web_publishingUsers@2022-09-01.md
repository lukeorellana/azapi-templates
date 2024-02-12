```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/publishingUsers@2022-09-01"
  name = "web"
  parent_id = "string"
  body = jsonencode({
    properties = {
      publishingPassword = "string"
      publishingPasswordHash = "string"
      publishingPasswordHashSalt = "string"
      publishingUserName = "string"
      scmUri = "string"
    }
    kind = "string"
  })
}

```

### publishingUsers

| Name | Description | Value |
|-|-|-|
| name | The resource name | 'web' |
| kind | Kind of resource. | string |
| properties | User resource specific properties | UserProperties |


### UserProperties

| Name | Description | Value |
|-|-|-|
| publishingPassword | Password used for publishing. | string |
| publishingPasswordHash | Password hash used for publishing. | string |
| publishingPasswordHashSalt | Password hash salt used for publishing. | string |
| publishingUserName | Username used for publishing. | string (required) |
| scmUri | Url of SCM site. | string |


