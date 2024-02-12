```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Kusto/clusters/databases@2023-08-15"
  name = "string"
  location = "string"
  parent_id = "string"
  // For remaining properties, see clusters/databases objects
  body = jsonencode({
    kind = "string"
  })
}

```

### clusters/databases

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location. | string |
| kind | Set the object type | ReadOnlyFollowingReadWrite(required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:clusters |


### ReadOnlyFollowingDatabase

| Name | Description | Value |
|-|-|-|
| kind | Kind of the database | 'ReadOnlyFollowing' (required) |


### ReadWriteDatabase

| Name | Description | Value |
|-|-|-|
| kind | Kind of the database | 'ReadWrite' (required) |
| properties | The database properties. | ReadWriteDatabaseProperties |


### ReadWriteDatabaseProperties

| Name | Description | Value |
|-|-|-|
| hotCachePeriod | The time the data should be kept in cache for fast queries in TimeSpan. | string |
| keyVaultProperties | KeyVault properties for the database encryption. | KeyVaultProperties |
| softDeletePeriod | The time the data should be kept before it stops being accessible to queries in TimeSpan. | string |


### KeyVaultProperties

| Name | Description | Value |
|-|-|-|
| keyName | The name of the key vault key. | string |
| keyVaultUri | The Uri of the key vault. | string |
| keyVersion | The version of the key vault key. | string |
| userIdentity | The user assigned identity (ARM resource id) that has access to the key. | string |


