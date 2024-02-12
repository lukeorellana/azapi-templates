```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/encryptionProtector@2021-06-01"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    properties = {
      serverKeyName = "string"
      serverKeyType = "string"
    }
  })
}

```

### workspaces/encryptionProtector

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'current' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Resource properties. | EncryptionProtectorProperties |


### EncryptionProtectorProperties

| Name | Description | Value |
|-|-|-|
| serverKeyName | The name of the server key. | string |
| serverKeyType | The encryption protector type like 'ServiceManaged', 'AzureKeyVault'. | 'AzureKeyVault''ServiceManaged' (required) |


