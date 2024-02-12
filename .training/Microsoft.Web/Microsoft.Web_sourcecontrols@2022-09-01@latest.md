```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sourcecontrols@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      expirationTime = "string"
      refreshToken = "string"
      token = "string"
      tokenSecret = "string"
    }
    kind = "string"
  })
}

```

### sourcecontrols

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| kind | Kind of resource. | string |
| properties | SourceControl resource specific properties | SourceControlProperties |


### SourceControlProperties

| Name | Description | Value |
|-|-|-|
| expirationTime | OAuth token expiration. | string |
| refreshToken | OAuth refresh token. | string |
| token | OAuth access token. | string |
| tokenSecret | OAuth access token secret. | string |


