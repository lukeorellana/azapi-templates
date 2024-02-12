```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/namespaces/clients@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      attributes = {}
      authenticationName = "string"
      clientCertificateAuthentication = {
        allowedThumbprints = [
          "string"
        ]
        validationScheme = "string"
      }
      description = "string"
      state = "string"
    }
  })
}

```

### namespaces/clients

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | The properties of client. | ClientProperties |


### ClientProperties

| Name | Description | Value |
|-|-|-|
| attributes | Attributes for the client. Supported values are int, bool, string, string[].Example:"attributes": { "room": "345", "floor": 12, "deviceTypes": ["Fan", "Light"] } | ClientPropertiesAttributes |
| authenticationName | The name presented by the client for authentication. The default value is the name of the resource. | string |
| clientCertificateAuthentication | The client certificate authentication information. | ClientCertificateAuthentication |
| description | Description for the Client resource. | string |
| state | Indicates if the client is enabled or not. Default value is Enabled. | 'Disabled''Enabled' |


### ClientPropertiesAttributes

| Name | Description | Value |
|-|-|-|
| {customized property} |  | For Bicep, you can use theany()function. |


### ClientCertificateAuthentication

| Name | Description | Value |
|-|-|-|
| allowedThumbprints | The list of thumbprints that are allowed during client authentication. This property is required only if the validationScheme is 'ThumbprintMatch'. | string[] |
| validationScheme | The validation scheme used to authenticate the client. Default value is SubjectMatchesAuthenticationName. | 'DnsMatchesAuthenticationName''EmailMatchesAuthenticationName''IpMatchesAuthenticationName''SubjectMatchesAuthenticationName''ThumbprintMatch''UriMatchesAuthenticationName' |


