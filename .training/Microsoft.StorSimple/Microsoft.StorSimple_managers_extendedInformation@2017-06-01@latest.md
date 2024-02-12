```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/extendedInformation@2017-06-01"
  name = "vaultExtendedInfo"
  parent_id = "string"
  body = jsonencode({
    properties = {
      algorithm = "string"
      encryptionKey = "string"
      encryptionKeyThumbprint = "string"
      integrityKey = "string"
      portalCertificateThumbprint = "string"
      version = "string"
    }
    kind = "Series8000"
    etag = "string"
  })
}

```

### managers/extendedInformation

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'vaultExtendedInfo' |
| kind | The Kind of the object. Currently only Series8000 is supported | 'Series8000' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managers |
| etag | The etag of the resource. | string |
| properties | The extended info properties. | ManagerExtendedInfoProperties |


### ManagerExtendedInfoProperties

| Name | Description | Value |
|-|-|-|
| algorithm | Represents the encryption algorithm used to encrypt the keys. None - if Key is saved in plain text format. Algorithm name - if key is encrypted | string (required) |
| encryptionKey | Represents the CEK of the resource. | string |
| encryptionKeyThumbprint | Represents the Cert thumbprint that was used to encrypt the CEK. | string |
| integrityKey | Represents the CIK of the resource. | string (required) |
| portalCertificateThumbprint | Represents the portal thumbprint which can be used optionally to encrypt the entire data before storing it. | string |
| version | The version of the extended info being persisted. | string |


