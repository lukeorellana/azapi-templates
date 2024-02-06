## Microsoft.Maps/accounts@2023-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Maps/accounts@2023-06-01"
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
      cors = {
        corsRules = [
          {
            allowedOrigins = [
              "string"
            ]
          }
        ]
      }
      disableLocalAuth = bool
      encryption = {
        customerManagedKeyEncryption = {
          keyEncryptionKeyIdentity = {
            delegatedIdentityClientId = "string"
            identityType = "string"
            userAssignedIdentityResourceId = "string"
          }
          keyEncryptionKeyUrl = "string"
        }
        infrastructureEncryption = "string"
      }
      linkedResources = [
        {
          id = "string"
          uniqueName = "string"
        }
      ]
    }
    sku = {
      name = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Maps/accounts/creators@2023-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Maps/accounts/creators@2023-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      storageUnits = int
    }
  })
}

```

## Microsoft.Maps/accounts/privateAtlases@2020-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Maps/accounts/privateAtlases@2020-02-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
}

```

