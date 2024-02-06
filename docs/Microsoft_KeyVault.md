## Microsoft.KeyVault/managedHSMs@2022-07-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.KeyVault/managedHSMs@2022-07-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      createMode = "string"
      enablePurgeProtection = bool
      enableSoftDelete = bool
      initialAdminObjectIds = [
        "string"
      ]
      networkAcls = {
        bypass = "string"
        defaultAction = "string"
        ipRules = [
          {
            value = "string"
          }
        ]
        virtualNetworkRules = [
          {
            id = "string"
          }
        ]
      }
      publicNetworkAccess = "string"
      softDeleteRetentionInDays = int
      tenantId = "string"
    }
    sku = {
      family = "B"
      name = "string"
    }
  })
}

```

## Microsoft.KeyVault/managedHSMs/privateEndpointConnections@2022-07-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.KeyVault/managedHSMs/privateEndpointConnections@2022-07-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      privateEndpoint = {}
      privateLinkServiceConnectionState = {
        actionsRequired = "None"
        description = "string"
        status = "string"
      }
      provisioningState = "string"
    }
    sku = {
      family = "B"
      name = "string"
    }
    etag = "string"
  })
}

```

## Microsoft.KeyVault/vaults@2022-07-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.KeyVault/vaults@2022-07-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      accessPolicies = [
        {
          applicationId = "string"
          objectId = "string"
          permissions = {
            certificates = [
              "string"
            ]
            keys = [
              "string"
            ]
            secrets = [
              "string"
            ]
            storage = [
              "string"
            ]
          }
          tenantId = "string"
        }
      ]
      createMode = "string"
      enabledForDeployment = bool
      enabledForDiskEncryption = bool
      enabledForTemplateDeployment = bool
      enablePurgeProtection = bool
      enableRbacAuthorization = bool
      enableSoftDelete = bool
      networkAcls = {
        bypass = "string"
        defaultAction = "string"
        ipRules = [
          {
            value = "string"
          }
        ]
        virtualNetworkRules = [
          {
            id = "string"
            ignoreMissingVnetServiceEndpoint = bool
          }
        ]
      }
      provisioningState = "string"
      publicNetworkAccess = "string"
      sku = {
        family = "A"
        name = "string"
      }
      softDeleteRetentionInDays = int
      tenantId = "string"
      vaultUri = "string"
    }
  })
}

```

## Microsoft.KeyVault/vaults/accessPolicies@2022-07-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.KeyVault/vaults/accessPolicies@2022-07-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      accessPolicies = [
        {
          applicationId = "string"
          objectId = "string"
          permissions = {
            certificates = [
              "string"
            ]
            keys = [
              "string"
            ]
            secrets = [
              "string"
            ]
            storage = [
              "string"
            ]
          }
          tenantId = "string"
        }
      ]
    }
  })
}

```

## Microsoft.KeyVault/vaults/keys@2022-07-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.KeyVault/vaults/keys@2022-07-01"
  name = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      attributes = {
        enabled = bool
        exp = int
        exportable = bool
        nbf = int
      }
      curveName = "string"
      keyOps = [
        "string"
      ]
      keySize = int
      kty = "string"
      release_policy = {
        contentType = "string"
        data = "string"
      }
      rotationPolicy = {
        attributes = {
          expiryTime = "string"
        }
        lifetimeActions = [
          {
            action = {
              type = "string"
            }
            trigger = {
              timeAfterCreate = "string"
              timeBeforeExpiry = "string"
            }
          }
        ]
      }
    }
  })
}

```

## Microsoft.KeyVault/vaults/privateEndpointConnections@2022-07-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.KeyVault/vaults/privateEndpointConnections@2022-07-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {}
      privateLinkServiceConnectionState = {
        actionsRequired = "None"
        description = "string"
        status = "string"
      }
      provisioningState = "string"
    }
    etag = "string"
  })
}

```

## Microsoft.KeyVault/vaults/secrets@2022-07-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.KeyVault/vaults/secrets@2022-07-01"
  name = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      attributes = {
        enabled = bool
        exp = int
        nbf = int
      }
      contentType = "string"
      value = "string"
    }
  })
}

```

