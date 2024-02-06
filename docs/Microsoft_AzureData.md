## Microsoft.AzureData/sqlServerRegistrations@2019-07-24-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureData/sqlServerRegistrations@2019-07-24-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      propertyBag = "string"
      resourceGroup = "string"
      subscriptionId = "string"
    }
  })
}

```

## Microsoft.AzureData/sqlServerRegistrations/sqlServers@2019-07-24-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureData/sqlServerRegistrations/sqlServers@2019-07-24-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      cores = int
      edition = "string"
      propertyBag = "string"
      registrationID = "string"
      version = "string"
    }
  })
}

```

