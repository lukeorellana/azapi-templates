## Microsoft.DBForMySql/flexibleServers/keys@2020-07-01-preview

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

