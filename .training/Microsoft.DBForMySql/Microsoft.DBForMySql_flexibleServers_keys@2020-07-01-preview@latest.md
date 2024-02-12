```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBForMySql/flexibleServers/keys@2020-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      serverKeyType = "AzureKeyVault"
      uri = "string"
    }
  })
}

```

### flexibleServers/keys

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:flexibleServers |
| properties | Properties of the ServerKey Resource. | ServerKeyProperties |


### ServerKeyProperties

| Name | Description | Value |
|-|-|-|
| serverKeyType | The key type like 'AzureKeyVault'. | 'AzureKeyVault' (required) |
| uri | The URI of the key. | string |


