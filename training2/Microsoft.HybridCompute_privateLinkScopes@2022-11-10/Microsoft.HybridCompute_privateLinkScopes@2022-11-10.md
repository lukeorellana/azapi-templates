```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridCompute/privateLinkScopes@2022-11-10"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      publicNetworkAccess = "string"
    }
  })
}

```

### privateLinkScopes

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties that define a Azure Arc PrivateLinkScope resource. | HybridComputePrivateLinkScopeProperties |


### HybridComputePrivateLinkScopeProperties

| Name | Description | Value |
|-|-|-|
| publicNetworkAccess | Indicates whether machines associated with the private link scope can also use public Azure Arc service endpoints. | 'Disabled''Enabled' |


