## Microsoft.Quantum/workspaces@2022-01-10-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Quantum/workspaces@2022-01-10-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type =  "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      providers = [
        {
          applicationName = "string"
          instanceUri = "string"
          providerId = "string"
          providerSku = "string"
          provisioningState = "string"
          resourceUsageId = "string"
        }
      ]
      storageAccount = "string"
    }
  })
}

```

