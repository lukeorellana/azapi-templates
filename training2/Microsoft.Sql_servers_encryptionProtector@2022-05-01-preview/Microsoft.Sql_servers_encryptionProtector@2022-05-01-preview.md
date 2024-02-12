```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/encryptionProtector@2022-05-01-preview"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoRotationEnabled = bool
      serverKeyName = "string"
      serverKeyType = "string"
    }
  })
}

```

### servers/encryptionProtector

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'current' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | EncryptionProtectorProperties |


### EncryptionProtectorProperties

| Name | Description | Value |
|-|-|-|
| autoRotationEnabled | Key auto rotation opt-in flag. Either true or false. | bool |
| serverKeyName | The name of the server key. | string |
| serverKeyType | The encryption protector type like 'ServiceManaged', 'AzureKeyVault'. | 'AzureKeyVault''ServiceManaged' (required) |


