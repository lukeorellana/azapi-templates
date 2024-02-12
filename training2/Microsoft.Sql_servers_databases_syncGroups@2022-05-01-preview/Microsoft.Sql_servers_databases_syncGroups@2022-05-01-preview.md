```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/syncGroups@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      conflictLoggingRetentionInDays = int
      conflictResolutionPolicy = "string"
      enableConflictLogging = bool
      hubDatabasePassword = "string"
      hubDatabaseUserName = "string"
      interval = int
      schema = {
        masterSyncMemberName = "string"
        tables = [
          {
            columns = [
              {
                dataSize = "string"
                dataType = "string"
                quotedName = "string"
              }
            ]
            quotedName = "string"
          }
        ]
      }
      syncDatabaseId = "string"
      usePrivateLinkConnection = bool
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
  })
}

```

### servers/databases/syncGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-150Valid characters:Alphanumerics, hyphens, and underscores. |
| sku | The name and capacity of the SKU. | Sku |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Resource properties. | SyncGroupProperties |


### SyncGroupProperties

| Name | Description | Value |
|-|-|-|
| conflictLoggingRetentionInDays | Conflict logging retention period. | int |
| conflictResolutionPolicy | Conflict resolution policy of the sync group. | 'HubWin''MemberWin' |
| enableConflictLogging | If conflict logging is enabled. | bool |
| hubDatabasePassword | Password for the sync group hub database credential. | string |
| hubDatabaseUserName | User name for the sync group hub database credential. | string |
| interval | Sync interval of the sync group. | int |
| schema | Sync schema of the sync group. | SyncGroupSchema |
| syncDatabaseId | ARM resource id of the sync database in the sync group. | string |
| usePrivateLinkConnection | If use private link connection is enabled. | bool |


### SyncGroupSchema

| Name | Description | Value |
|-|-|-|
| masterSyncMemberName | Name of master sync member where the schema is from. | string |
| tables | List of tables in sync group schema. | SyncGroupSchemaTable[] |


### SyncGroupSchemaTable

| Name | Description | Value |
|-|-|-|
| columns | List of columns in sync group schema. | SyncGroupSchemaTableColumn[] |
| quotedName | Quoted name of sync group schema table. | string |


### SyncGroupSchemaTableColumn

| Name | Description | Value |
|-|-|-|
| dataSize | Data size of the column. | string |
| dataType | Data type of the column. | string |
| quotedName | Quoted name of sync group table column. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | Capacity of the particular SKU. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU, typically, a letter + Number code, e.g. P3. | string (required) |
| size | Size of the particular SKU | string |
| tier | The tier or edition of the particular SKU, e.g. Basic, Premium. | string |


