```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/extendedInformation@2023-01-01"
  name = "vaultExtendedInfo"
  parent_id = "string"
  body = jsonencode({
    properties = {
      algorithm = "string"
      encryptionKey = "string"
      encryptionKeyThumbprint = "string"
      integrityKey = "string"
    }
    etag = "string"
  })
}

```

### vaults/extendedInformation

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'vaultExtendedInfo' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vaults |
| etag | Optional ETag. | string |
| properties | Vault extended information. | VaultExtendedInfo |


### VaultExtendedInfo

| Name | Description | Value |
|-|-|-|
| algorithm | Algorithm for Vault ExtendedInfo | string |
| encryptionKey | Encryption key. | string |
| encryptionKeyThumbprint | Encryption key thumbprint. | string |
| integrityKey | Integrity key. | string |


