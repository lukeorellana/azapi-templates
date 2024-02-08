```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers@2022-05-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      administratorLogin = "string"
      administratorLoginPassword = "string"
      administrators = {
        administratorType = "ActiveDirectory"
        azureADOnlyAuthentication = bool
        login = "string"
        principalType = "string"
        sid = "string"
        tenantId = "string"
      }
      federatedClientId = "string"
      keyId = "string"
      minimalTlsVersion = "string"
      primaryUserAssignedIdentityId = "string"
      publicNetworkAccess = "string"
      restrictOutboundNetworkAccess = "string"
      version = "string"
    }
  })
}

```

### servers

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-63Valid characters:Lowercase letters, numbers, and hyphens.Can't start or end with hyphen.Resource name must be unique across Azure. |
| location | Resource location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The Azure Active Directory identity of the server. | ResourceIdentity |
| properties | Resource properties. | ServerProperties |


### ResourceIdentity

| Name | Description | Value |
|-|-|-|
| type | The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource. | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' |
| userAssignedIdentities | The resource ids of the user assigned identities to use | object |


### ServerProperties

| Name | Description | Value |
|-|-|-|
| administratorLogin | Administrator username for the server. Once created it cannot be changed. | string |
| administratorLoginPassword | The administrator login password (required for server creation). | string |
| administrators | The Azure Active Directory administrator of the server. This can only be used at server create time. If used for server update, it will be ignored or it will result in an error. For updates individual APIs will need to be used. | ServerExternalAdministrator |
| federatedClientId | The Client id used for cross tenant CMK scenario | string |
| keyId | A CMK URI of the key to use for encryption. | string |
| minimalTlsVersion | Minimal TLS version. Allowed values: '1.0', '1.1', '1.2' | string |
| primaryUserAssignedIdentityId | The resource id of a user assigned identity to be used by default. | string |
| publicNetworkAccess | Whether or not public endpoint access is allowed for this server.  Value is optional but if passed in, must be 'Enabled' or 'Disabled' | 'Disabled''Enabled' |
| restrictOutboundNetworkAccess | Whether or not to restrict outbound network access for this server.  Value is optional but if passed in, must be 'Enabled' or 'Disabled' | 'Disabled''Enabled' |
| version | The version of the server. | string |


### ServerExternalAdministrator

| Name | Description | Value |
|-|-|-|
| administratorType | Type of the sever administrator. | 'ActiveDirectory' |
| azureADOnlyAuthentication | Azure Active Directory only Authentication enabled. | bool |
| login | Login name of the server administrator. | string |
| principalType | Principal Type of the sever administrator. | 'Application''Group''User' |
| sid | SID (object ID) of the server administrator. | string |
| tenantId | Tenant ID of the administrator. | string |


