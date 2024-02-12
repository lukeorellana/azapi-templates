```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.KeyVault/vaults/accessPolicies@2022-07-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      accessPolicies = [
        {
          applicationId = "string"
          objectId = "string"
          permissions = {
            certificates = [
              "string"
            ]
            keys = [
              "string"
            ]
            secrets = [
              "string"
            ]
            storage = [
              "string"
            ]
          }
          tenantId = "string"
        }
      ]
    }
  })
}

```

### vaults/accessPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vaults |
| properties | Properties of the access policy | VaultAccessPolicyProperties(required) |


### VaultAccessPolicyProperties

| Name | Description | Value |
|-|-|-|
| accessPolicies | An array of 0 to 16 identities that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID. | AccessPolicyEntry[] (required) |


### AccessPolicyEntry

| Name | Description | Value |
|-|-|-|
| applicationId | Application ID of the client making request on behalf of a principal | string |
| objectId | The object ID of a user, service principal or security group in the Azure Active Directory tenant for the vault. The object ID must be unique for the list of access policies. | string (required) |
| permissions | Permissions the identity has for keys, secrets and certificates. | Permissions(required) |
| tenantId | The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault. | string (required) |


### Permissions

| Name | Description | Value |
|-|-|-|
| certificates | Permissions to certificates | String array containing any of:'all''backup''create''delete''deleteissuers''get''getissuers''import''list''listissuers''managecontacts''manageissuers''purge''recover''restore''setissuers''update' |
| keys | Permissions to keys | String array containing any of:'all''backup''create''decrypt''delete''encrypt''get''getrotationpolicy''import''list''purge''recover''release''restore''rotate''setrotationpolicy''sign''unwrapKey''update''verify''wrapKey' |
| secrets | Permissions to secrets | String array containing any of:'all''backup''delete''get''list''purge''recover''restore''set' |
| storage | Permissions to storage accounts | String array containing any of:'all''backup''delete''deletesas''get''getsas''list''listsas''purge''recover''regeneratekey''restore''set''setsas''update' |


