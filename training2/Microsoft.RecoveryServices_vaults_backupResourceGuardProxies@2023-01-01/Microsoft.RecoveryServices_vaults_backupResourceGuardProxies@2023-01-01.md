```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/backupResourceGuardProxies@2023-01-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      description = "string"
      lastUpdatedTime = "string"
      resourceGuardOperationDetails = [
        {
          defaultResourceRequest = "string"
          vaultCriticalOperation = "string"
        }
      ]
      resourceGuardResourceId = "string"
    }
    eTag = "string"
  })
}

```

### vaults/backupResourceGuardProxies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vaults |
| eTag | Optional ETag. | string |
| properties | ResourceGuardProxyBaseResource properties | ResourceGuardProxyBase |


### ResourceGuardProxyBase

| Name | Description | Value |
|-|-|-|
| description |  | string |
| lastUpdatedTime |  | string |
| resourceGuardOperationDetails |  | ResourceGuardOperationDetail[] |
| resourceGuardResourceId |  | string |


### ResourceGuardOperationDetail

| Name | Description | Value |
|-|-|-|
| defaultResourceRequest |  | string |
| vaultCriticalOperation |  | string |


