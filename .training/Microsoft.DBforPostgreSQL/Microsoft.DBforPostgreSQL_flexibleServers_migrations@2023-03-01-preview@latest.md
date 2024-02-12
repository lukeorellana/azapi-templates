```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/flexibleServers/migrations@2023-03-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      cancel = "string"
      dbsToCancelMigrationOn = [
        "string"
      ]
      dbsToMigrate = [
        "string"
      ]
      dbsToTriggerCutoverOn = [
        "string"
      ]
      migrationMode = "string"
      migrationWindowEndTimeInUtc = "string"
      migrationWindowStartTimeInUtc = "string"
      overwriteDbsInTarget = "string"
      secretParameters = {
        adminCredentials = {
          sourceServerPassword = "string"
          targetServerPassword = "string"
        }
        sourceServerUsername = "string"
        targetServerUsername = "string"
      }
      setupLogicalReplicationOnSourceDbIfNeeded = "string"
      sourceDbServerFullyQualifiedDomainName = "string"
      sourceDbServerResourceId = "string"
      startDataMigration = "string"
      targetDbServerFullyQualifiedDomainName = "string"
      triggerCutover = "string"
    }
  })
}

```

### flexibleServers/migrations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:flexibleServers |
| properties | Migration resource properties. | MigrationResourceProperties |


### MigrationResourceProperties

| Name | Description | Value |
|-|-|-|
| cancel | To trigger cancel for entire migration we need to send this flag as True | 'False''True' |
| dbsToCancelMigrationOn | When you want to trigger cancel for specific databases send cancel flag as True and database names in this array | string[] |
| dbsToMigrate | Number of databases to migrate | string[] |
| dbsToTriggerCutoverOn | When you want to trigger cutover for specific databases send triggerCutover flag as True and database names in this array | string[] |
| migrationMode | There are two types of migration modes Online and Offline | 'Offline''Online' |
| migrationWindowEndTimeInUtc | End time in UTC for migration window | string |
| migrationWindowStartTimeInUtc | Start time in UTC for migration window | string |
| overwriteDbsInTarget | Indicates whether the databases on the target server can be overwritten, if already present. If set to False, the migration workflow will wait for a confirmation, if it detects that the database already exists. | 'False''True' |
| secretParameters | Migration secret parameters | MigrationSecretParameters |
| setupLogicalReplicationOnSourceDbIfNeeded | Indicates whether to setup LogicalReplicationOnSourceDb, if needed | 'False''True' |
| sourceDbServerFullyQualifiedDomainName | Source server fully qualified domain name or ip. It is a optional value, if customer provide it, dms will always use it for connection | string |
| sourceDbServerResourceId | ResourceId of the source database server | string |
| startDataMigration | Indicates whether the data migration should start right away | 'False''True' |
| targetDbServerFullyQualifiedDomainName | Target server fully qualified domain name or ip. It is a optional value, if customer provide it, dms will always use it for connection | string |
| triggerCutover | To trigger cutover for entire migration we need to send this flag as True | 'False''True' |


### MigrationSecretParameters

| Name | Description | Value |
|-|-|-|
| adminCredentials | Admin credentials for source and target servers | AdminCredentials(required) |
| sourceServerUsername | Gets or sets the username for the source server. This user need not be an admin. | string |
| targetServerUsername | Gets or sets the username for the target server. This user need not be an admin. | string |


### AdminCredentials

| Name | Description | Value |
|-|-|-|
| sourceServerPassword | Password for source server. | string (required) |
| targetServerPassword | Password for target server. | string (required) |


