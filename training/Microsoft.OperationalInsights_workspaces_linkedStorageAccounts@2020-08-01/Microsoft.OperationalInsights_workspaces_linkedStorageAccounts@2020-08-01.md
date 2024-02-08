```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationalInsights/workspaces/linkedStorageAccounts@2020-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      storageAccountIds = [
        "string"
      ]
    }
  })
}

```

### workspaces/linkedStorageAccounts

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Linked storage accounts properties. | LinkedStorageAccountsProperties(required) |


### LinkedStorageAccountsProperties

| Name | Description | Value |
|-|-|-|
| storageAccountIds | Linked storage accounts resources ids. | string[] |


