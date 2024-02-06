## Microsoft.HealthBot/healthBots@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HealthBot/healthBots@2023-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      keyVaultProperties = {
        keyName = "string"
        keyVaultUri = "string"
        keyVersion = "string"
        userIdentity = "string"
      }
    }
    sku = {
      name = "string"
    }
  })
}

```

