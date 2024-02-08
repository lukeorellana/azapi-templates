```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Kusto/clusters/attachedDatabaseConfigurations@2023-08-15"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      clusterResourceId = "string"
      databaseName = "string"
      databaseNameOverride = "string"
      databaseNamePrefix = "string"
      defaultPrincipalsModificationKind = "string"
      tableLevelSharingProperties = {
        externalTablesToExclude = [
          "string"
        ]
        externalTablesToInclude = [
          "string"
        ]
        functionsToExclude = [
          "string"
        ]
        functionsToInclude = [
          "string"
        ]
        materializedViewsToExclude = [
          "string"
        ]
        materializedViewsToInclude = [
          "string"
        ]
        tablesToExclude = [
          "string"
        ]
        tablesToInclude = [
          "string"
        ]
      }
    }
  })
}

```

### clusters/attachedDatabaseConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:clusters |
| properties | The properties of the attached database configuration. | AttachedDatabaseConfigurationProperties |


### AttachedDatabaseConfigurationProperties

| Name | Description | Value |
|-|-|-|
| clusterResourceId | The resource id of the cluster where the databases you would like to attach reside. | string (required) |
| databaseName | The name of the database which you would like to attach, use * if you want to follow all current and future databases. | string (required) |
| databaseNameOverride | Overrides the original database name. Relevant only when attaching to a specific database. | string |
| databaseNamePrefix | Adds a prefix to the attached databases name. When following an entire cluster, that prefix would be added to all of the databases original names from leader cluster. | string |
| defaultPrincipalsModificationKind | The default principals modification kind | 'None''Replace''Union' (required) |
| tableLevelSharingProperties | Table level sharing specifications | TableLevelSharingProperties |


### TableLevelSharingProperties

| Name | Description | Value |
|-|-|-|
| externalTablesToExclude | List of external tables to exclude from the follower database | string[] |
| externalTablesToInclude | List of external tables to include in the follower database | string[] |
| functionsToExclude | List of functions to exclude from the follower database | string[] |
| functionsToInclude | List of functions to include in the follower database | string[] |
| materializedViewsToExclude | List of materialized views to exclude from the follower database | string[] |
| materializedViewsToInclude | List of materialized views to include in the follower database | string[] |
| tablesToExclude | List of tables to exclude from the follower database | string[] |
| tablesToInclude | List of tables to include in the follower database | string[] |


