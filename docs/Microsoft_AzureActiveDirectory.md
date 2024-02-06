## Microsoft.AzureActiveDirectory/b2cDirectories@2021-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureActiveDirectory/b2cDirectories@2021-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      createTenantProperties = {
        countryCode = "string"
        displayName = "string"
      }
    }
    sku = {
      name = "string"
      tier = "A0"
    }
  })
}

```

## Microsoft.AzureActiveDirectory/guestUsages@2021-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureActiveDirectory/guestUsages@2021-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      tenantId = "string"
    }
  })
}

```

