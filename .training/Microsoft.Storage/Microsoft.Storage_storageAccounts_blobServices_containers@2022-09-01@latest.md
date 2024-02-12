```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/blobServices/containers@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      defaultEncryptionScope = "string"
      denyEncryptionScopeOverride = bool
      enableNfsV3AllSquash = bool
      enableNfsV3RootSquash = bool
      immutableStorageWithVersioning = {
        enabled = bool
      }
      metadata = {}
      publicAccess = "string"
    }
  })
}

```

### storageAccounts/blobServices/containers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 3-63Valid characters:Lowercase letters, numbers, and hyphens.Start with lowercase letter or number. Can't use consecutive hyphens. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:blobServices |
| properties | Properties of the blob container. | ContainerProperties |


### ContainerProperties

| Name | Description | Value |
|-|-|-|
| defaultEncryptionScope | Default the container to use specified encryption scope for all writes. | string |
| denyEncryptionScopeOverride | Block override of encryption scope from the container default. | bool |
| enableNfsV3AllSquash | Enable NFSv3 all squash on blob container. | bool |
| enableNfsV3RootSquash | Enable NFSv3 root squash on blob container. | bool |
| immutableStorageWithVersioning | The object level immutability property of the container. The property is immutable and can only be set to true at the container creation time. Existing containers must undergo a migration process. | ImmutableStorageWithVersioning |
| metadata | A name-value pair to associate with the container as metadata. | object |
| publicAccess | Specifies whether data in the container may be accessed publicly and the level of access. | 'Blob''Container''None' |


### ImmutableStorageWithVersioning

| Name | Description | Value |
|-|-|-|
| enabled | This is an immutable property, when set to true it enables object level immutability at the container level. | bool |


