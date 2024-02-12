```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/DevToolPortals@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      features = {
        applicationAccelerator = {
          state = "string"
        }
        applicationLiveView = {
          state = "string"
        }
      }
      public = bool
      ssoProperties = {
        clientId = "string"
        clientSecret = "string"
        metadataUrl = "string"
        scopes = [
          "string"
        ]
      }
    }
  })
}

```

### Spring/DevToolPortals

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:Spring |
| properties | Dev Tool Portal properties payload | DevToolPortalProperties |


### DevToolPortalProperties

| Name | Description | Value |
|-|-|-|
| features | Settings for Dev Tool Portal | DevToolPortalFeatureSettings |
| public | Indicates whether the resource exposes public endpoint | bool |
| ssoProperties | Single sign-on related configuration | DevToolPortalSsoProperties |


### DevToolPortalFeatureSettings

| Name | Description | Value |
|-|-|-|
| applicationAccelerator | Detail of Accelerator plugin | DevToolPortalFeatureDetail |
| applicationLiveView | Detail of App Live View plugin | DevToolPortalFeatureDetail |


### DevToolPortalFeatureDetail

| Name | Description | Value |
|-|-|-|
| state | State of the plugin | 'Disabled''Enabled' |


### DevToolPortalSsoProperties

| Name | Description | Value |
|-|-|-|
| clientId | The public identifier for the application | string |
| clientSecret | The secret known only to the application and the authorization server | string |
| metadataUrl | The URI of a JSON file with generic OIDC provider configuration. | string |
| scopes | It defines the specific actions applications can be allowed to do on a user's behalf | string[] |


