```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/devices/volumeContainers@2017-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      bandWidthRateInMbps = int
      bandwidthSettingId = "string"
      encryptionKey = {
        encryptionAlgorithm = "string"
        encryptionCertThumbprint = "string"
        value = "string"
      }
      storageAccountCredentialId = "string"
    }
    kind = "Series8000"
  })
}

```

### managers/devices/volumeContainers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | The Kind of the object. Currently only Series8000 is supported | 'Series8000' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: devices |
| properties | The volume container properties. | VolumeContainerProperties(required) |


### VolumeContainerProperties

| Name | Description | Value |
|-|-|-|
| bandWidthRateInMbps | The bandwidth-rate set on the volume container. | int |
| bandwidthSettingId | The ID of the bandwidth setting associated with the volume container. | string |
| encryptionKey | The key used to encrypt data in the volume container. It is required when property 'EncryptionStatus' is "Enabled". | AsymmetricEncryptedSecret |
| storageAccountCredentialId | The path ID of storage account associated with the volume container. | string (required) |


### AsymmetricEncryptedSecret

| Name | Description | Value |
|-|-|-|
| encryptionAlgorithm | The algorithm used to encrypt "Value". | 'AES256''None''RSAES_PKCS1_v_1_5' (required) |
| encryptionCertThumbprint | Thumbprint certificate that was used to encrypt "Value". If the value in unencrypted, it will be null. | string |
| value | The value of the secret. | string (required) |


