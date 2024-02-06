## Microsoft.DataLakeAnalytics/accounts@2019-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataLakeAnalytics/accounts@2019-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      computePolicies = [
        {
          name = "string"
          properties = {
            maxDegreeOfParallelismPerJob = int
            minPriorityPerJob = int
            objectId = "string"
            objectType = "string"
          }
        }
      ]
      dataLakeStoreAccounts = [
        {
          name = "string"
          properties = {
            suffix = "string"
          }
        }
      ]
      defaultDataLakeStoreAccount = "string"
      firewallAllowAzureIps = "string"
      firewallRules = [
        {
          name = "string"
          properties = {
            endIpAddress = "string"
            startIpAddress = "string"
          }
        }
      ]
      firewallState = "string"
      maxDegreeOfParallelism = int
      maxDegreeOfParallelismPerJob = int
      maxJobCount = int
      minPriorityPerJob = int
      newTier = "string"
      queryStoreRetention = int
      storageAccounts = [
        {
          name = "string"
          properties = {
            accessKey = "string"
            suffix = "string"
          }
        }
      ]
    }
  })
}

```

## Microsoft.DataLakeAnalytics/accounts/computePolicies@2019-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataLakeAnalytics/accounts/computePolicies@2019-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      maxDegreeOfParallelismPerJob = int
      minPriorityPerJob = int
      objectId = "string"
      objectType = "string"
    }
  })
}

```

## Microsoft.DataLakeAnalytics/accounts/dataLakeStoreAccounts@2019-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataLakeAnalytics/accounts/dataLakeStoreAccounts@2019-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      suffix = "string"
    }
  })
}

```

## Microsoft.DataLakeAnalytics/accounts/firewallRules@2019-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataLakeAnalytics/accounts/firewallRules@2019-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      endIpAddress = "string"
      startIpAddress = "string"
    }
  })
}

```

## Microsoft.DataLakeAnalytics/accounts/storageAccounts@2019-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataLakeAnalytics/accounts/storageAccounts@2019-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      accessKey = "string"
      suffix = "string"
    }
  })
}

```

