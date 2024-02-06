## Microsoft.Blockchain/blockchainMembers@2018-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Blockchain/blockchainMembers@2018-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      consortium = "string"
      consortiumManagementAccountPassword = "string"
      consortiumMemberDisplayName = "string"
      consortiumRole = "string"
      firewallRules = [
        {
          endIpAddress = "string"
          ruleName = "string"
          startIpAddress = "string"
        }
      ]
      password = "string"
      protocol = "string"
      validatorNodesSku = {
        capacity = int
      }
    }
    sku = {
      name = "string"
      tier = "string"
    }
  })
}

```

## Microsoft.Blockchain/blockchainMembers/transactionNodes@2018-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Blockchain/blockchainMembers/transactionNodes@2018-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      firewallRules = [
        {
          endIpAddress = "string"
          ruleName = "string"
          startIpAddress = "string"
        }
      ]
      password = "string"
    }
  })
}

```

