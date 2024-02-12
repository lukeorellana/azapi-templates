```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/users@2022-12-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      encryptedPassword = {
        encryptionAlgorithm = "string"
        encryptionCertThumbprint = "string"
        value = "string"
      }
      userType = "string"
    }
  })
}

```

### dataBoxEdgeDevices/users

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dataBoxEdgeDevices |
| properties | The storage account credential properties. | UserProperties(required) |


### UserProperties

| Name | Description | Value |
|-|-|-|
| encryptedPassword | The password details. | AsymmetricEncryptedSecret |
| userType | Type of the user. | 'ARM''LocalManagement''Share' (required) |


### AsymmetricEncryptedSecret

| Name | Description | Value |
|-|-|-|
| encryptionAlgorithm | The algorithm used to encrypt "Value". | 'AES256''None''RSAES_PKCS1_v_1_5' (required) |
| encryptionCertThumbprint | Thumbprint certificate used to encrypt "Value". If the value is unencrypted, it will be null. | string |
| value | The value of the secret. | string (required) |


