## Microsoft.HybridData/dataManagers@2019-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridData/dataManagers@2019-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    sku = {
      name = "string"
      tier = "string"
    }
    etag = "string"
  })
}

```

## Microsoft.HybridData/dataManagers/dataServices/jobDefinitions@2019-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridData/dataManagers/dataServices/jobDefinitions@2019-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      customerSecrets = [
        {
          algorithm = "string"
          keyIdentifier = "string"
          keyValue = "string"
        }
      ]
      dataSinkId = "string"
      dataSourceId = "string"
      lastModifiedTime = "string"
      runLocation = "string"
      schedules = [
        {
          name = "string"
          policyList = [
            "string"
          ]
        }
      ]
      state = "string"
      userConfirmation = "string"
    }
  })
}

```

## Microsoft.HybridData/dataManagers/dataStores@2019-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridData/dataManagers/dataStores@2019-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      customerSecrets = [
        {
          algorithm = "string"
          keyIdentifier = "string"
          keyValue = "string"
        }
      ]
      dataStoreTypeId = "string"
      repositoryId = "string"
      state = "string"
    }
  })
}

```

