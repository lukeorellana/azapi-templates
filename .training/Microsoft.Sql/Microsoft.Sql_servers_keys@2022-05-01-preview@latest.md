```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/keys@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      serverKeyType = "string"
      uri = "string"
    }
  })
}

```

### servers/keys

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Valid characters:Must be in format:VaultName_KeyName_KeyVersion. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | ServerKeyProperties |


### ServerKeyProperties

| Name | Description | Value |
|-|-|-|
| serverKeyType | The server key type like 'ServiceManaged', 'AzureKeyVault'. | 'AzureKeyVault''ServiceManaged' (required) |
| uri | The URI of the server key. If the ServerKeyType is AzureKeyVault, then the URI is required. The AKV URI is required to be in this format: 'https://YourVaultName.vault.azure.net/keys/YourKeyName/YourKeyVersion' | string |


