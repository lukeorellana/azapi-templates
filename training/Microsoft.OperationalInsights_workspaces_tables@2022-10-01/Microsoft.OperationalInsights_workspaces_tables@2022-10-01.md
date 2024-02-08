```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationalInsights/workspaces/tables@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      plan = "string"
      restoredLogs = {
        endRestoreTime = "string"
        sourceTable = "string"
        startRestoreTime = "string"
      }
      retentionInDays = int
      schema = {
        columns = [
          {
            dataTypeHint = "string"
            description = "string"
            displayName = "string"
            name = "string"
            type = "string"
          }
        ]
        description = "string"
        displayName = "string"
        name = "string"
      }
      searchResults = {
        description = "string"
        endSearchTime = "string"
        limit = int
        query = "string"
        startSearchTime = "string"
      }
      totalRetentionInDays = int
    }
  })
}

```

### workspaces/tables

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Table's properties. | TableProperties |


### TableProperties

| Name | Description | Value |
|-|-|-|
| plan | Instruct the system how to handle and charge the logs ingested to this table. | 'Analytics''Basic' |
| restoredLogs | Parameters of the restore operation that initiated this table. | RestoredLogs |
| retentionInDays | The table retention in days, between 4 and 730. Setting this property to -1 will default to the workspace retention. | int |
| schema | Table schema. | Schema |
| searchResults | Parameters of the search job that initiated this table. | SearchResults |
| totalRetentionInDays | The table total retention in days, between 4 and 2555. Setting this property to -1 will default to table retention. | int |


### RestoredLogs

| Name | Description | Value |
|-|-|-|
| endRestoreTime | The timestamp to end the restore by (UTC). | string |
| sourceTable | The table to restore data from. | string |
| startRestoreTime | The timestamp to start the restore from (UTC). | string |


### Schema

| Name | Description | Value |
|-|-|-|
| columns | A list of table custom columns. | Column[] |
| description | Table description. | string |
| displayName | Table display name. | string |
| name | Table name. | string |


### Column

| Name | Description | Value |
|-|-|-|
| dataTypeHint | Column data type logical hint. | 'armPath''guid''ip''uri' |
| description | Column description. | string |
| displayName | Column display name. | string |
| name | Column name. | string |
| type | Column data type. | 'boolean''dateTime''dynamic''guid''int''long''real''string' |


### SearchResults

| Name | Description | Value |
|-|-|-|
| description | Search job Description. | string |
| endSearchTime | The timestamp to end the search by (UTC) | string |
| limit | Limit the search job to return up to specified number of rows. | int |
| query | Search job query. | string |
| startSearchTime | The timestamp to start the search from (UTC) | string |


