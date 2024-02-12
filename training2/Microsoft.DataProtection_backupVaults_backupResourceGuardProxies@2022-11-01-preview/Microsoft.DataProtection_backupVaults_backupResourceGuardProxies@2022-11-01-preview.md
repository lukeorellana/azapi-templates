```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataProtection/backupVaults/backupResourceGuardProxies@2022-11-01-preview"
  name = "string"
  parent_id = "string"
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
  })
}

```

### backupVaults/backupResourceGuardProxies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:backupVaults |
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


