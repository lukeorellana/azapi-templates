```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/credentialSets@2023-01-01-preview"
  name = "string"
  parent_id = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      authCredentials = [
        {
          name = "Credential1"
          passwordSecretIdentifier = "string"
          usernameSecretIdentifier = "string"
        }
      ]
      loginServer = "string"
    }
  })
}

```

### registries/credentialSets

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| identity | Identities associated with the resource. This is used to access the KeyVault secrets. | IdentityProperties |
| properties | The properties of the credential set. | CredentialSetProperties |


### IdentityProperties

| Name | Description | Value |
|-|-|-|
| principalId | The principal ID of resource identity. | string |
| tenantId | The tenant ID of resource. | string |
| type | The identity type. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the resource. The user identitydictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### CredentialSetProperties

| Name | Description | Value |
|-|-|-|
| authCredentials | List of authentication credentials stored for an upstream.Usually consists of a primary and an optional secondary credential. | AuthCredential[] |
| loginServer | The credentials are stored for this upstream or login server. | string |


### AuthCredential

| Name | Description | Value |
|-|-|-|
| name | The name of the credential. | 'Credential1' |
| passwordSecretIdentifier | KeyVault Secret URI for accessing the password. | string |
| usernameSecretIdentifier | KeyVault Secret URI for accessing the username. | string |


