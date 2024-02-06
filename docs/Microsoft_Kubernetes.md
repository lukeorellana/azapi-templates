## Microsoft.Kubernetes/connectedClusters@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Kubernetes/connectedClusters@2022-10-01-preview"
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
      agentPublicKeyCertificate = "string"
      azureHybridBenefit = "string"
      distribution = "string"
      distributionVersion = "string"
      infrastructure = "string"
      privateLinkScopeResourceId = "string"
      privateLinkState = "string"
      provisioningState = "string"
    }
  })
}

```

