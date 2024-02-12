```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlDatabases@2020-04-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      collation = "string"
      dataRetention = {
        dropRetentionPeriod = "string"
        retentionPeriod = "string"
      }
      storageRedundancy = "string"
    }
  })
}

```

### workspaces/sqlDatabases

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Resource properties. | SqlDatabaseProperties |


### SqlDatabaseProperties

| Name | Description | Value |
|-|-|-|
| collation | The collation of the database. | string |
| dataRetention | Sql database data retention. | SqlDatabaseDataRetention |
| storageRedundancy | The storage redundancy of the database. | 'Geo''GeoZone''Local''Zone' |


### SqlDatabaseDataRetention

| Name | Description | Value |
|-|-|-|
| dropRetentionPeriod | Specifies the dropped database retention period (ISO8601 format). | string |
| retentionPeriod | Specifies the data retention period (ISO8601 format). | string |


