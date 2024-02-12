```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.KubernetesConfiguration/privateLinkScopes@2022-04-02-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      clusterResourceId = "string"
      publicNetworkAccess = "string"
    }
  })
}

```

### privateLinkScopes

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties that define a Azure Arc PrivateLinkScope resource. | KubernetesConfigurationPrivateLinkScopeProperties |


### KubernetesConfigurationPrivateLinkScopeProperties

| Name | Description | Value |
|-|-|-|
| clusterResourceId | Managed Cluster ARM ID for the private link scope  (Required) | string (required) |
| publicNetworkAccess | Indicates whether machines associated with the private link scope can also use public Azure Arc service endpoints. | 'Disabled''Enabled' |


