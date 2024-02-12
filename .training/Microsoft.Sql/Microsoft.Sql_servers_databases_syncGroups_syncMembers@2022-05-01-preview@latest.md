```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/syncGroups/syncMembers@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      databaseName = "string"
      databaseType = "string"
      password = "string"
      serverName = "string"
      sqlServerDatabaseId = "string"
      syncAgentId = "string"
      syncDirection = "string"
      syncMemberAzureDatabaseResourceId = "string"
      usePrivateLinkConnection = bool
      userName = "string"
    }
  })
}

```

### servers/databases/syncGroups/syncMembers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:syncGroups |
| properties | Resource properties. | SyncMemberProperties |


### SyncMemberProperties

| Name | Description | Value |
|-|-|-|
| databaseName | Database name of the member database in the sync member. | string |
| databaseType | Database type of the sync member. | 'AzureSqlDatabase''SqlServerDatabase' |
| password | Password of the member database in the sync member. | string |
| serverName | Server name of the member database in the sync member | string |
| sqlServerDatabaseId | SQL Server database id of the sync member. | string |
| syncAgentId | ARM resource id of the sync agent in the sync member. | string |
| syncDirection | Sync direction of the sync member. | 'Bidirectional''OneWayHubToMember''OneWayMemberToHub' |
| syncMemberAzureDatabaseResourceId | ARM resource id of the sync member logical database, for sync members in Azure. | string |
| usePrivateLinkConnection | Whether to use private link connection. | bool |
| userName | User name of the member database in the sync member. | string |


