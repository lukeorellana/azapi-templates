```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/migrateProjects@2020-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      publicNetworkAccess = "string"
      serviceEndpoint = "string"
      utilityStorageAccountId = "string"
    }
    eTag = "string"
  })
}

```

### migrateProjects

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Azure location in which project is created. | string |
| eTag | For optimistic concurrency control. | string |
| properties | Properties of a migrate project. | MigrateProjectProperties |


### MigrateProjectProperties

| Name | Description | Value |
|-|-|-|
| publicNetworkAccess | Gets or sets the state of public network access. | 'Disabled''Enabled''NotSpecified' |
| serviceEndpoint | Service endpoint. | string |
| utilityStorageAccountId | Utility storage account id. | string |


