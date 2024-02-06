## Microsoft.DataLakeStore/accounts@2016-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataLakeStore/accounts@2016-11-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      defaultGroup = "string"
      encryptionConfig = {
        keyVaultMetaInfo = {
          encryptionKeyName = "string"
          encryptionKeyVersion = "string"
          keyVaultResourceId = "string"
        }
        type = "string"
      }
      encryptionState = "string"
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
      newTier = "string"
      trustedIdProviders = [
        {
          name = "string"
          properties = {
            idProvider = "string"
          }
        }
      ]
      trustedIdProviderState = "string"
      virtualNetworkRules = [
        {
          name = "string"
          properties = {
            subnetId = "string"
          }
        }
      ]
    }
  })
}

```

## Microsoft.DataLakeStore/accounts/firewallRules@2016-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataLakeStore/accounts/firewallRules@2016-11-01"
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

## Microsoft.DataLakeStore/accounts/trustedIdProviders@2016-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataLakeStore/accounts/trustedIdProviders@2016-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      idProvider = "string"
    }
  })
}

```

## Microsoft.DataLakeStore/accounts/virtualNetworkRules@2016-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataLakeStore/accounts/virtualNetworkRules@2016-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      subnetId = "string"
    }
  })
}

```

