```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/customEntityStoreAssignments@2021-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      principal = "string"
    }
  })
}

```

### customEntityStoreAssignments

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| properties | describes properties of custom entity store assignment request | CustomEntityStoreAssignmentRequestPropertiesOrCustom... |


### CustomEntityStoreAssignmentRequestPropertiesOrCustom...

| Name | Description | Value |
|-|-|-|
| principal | The principal assigned with entity store. If not provided, will use caller principal. Format of principal is: [AAD type]=[PrincipalObjectId];[TenantId] | string |


