```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/jobAgents/targetGroups@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      members = [
        {
          databaseName = "string"
          elasticPoolName = "string"
          membershipType = "string"
          refreshCredential = "string"
          serverName = "string"
          shardMapName = "string"
          type = "string"
        }
      ]
    }
  })
}

```

### servers/jobAgents/targetGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:jobAgents |
| properties | Resource properties. | JobTargetGroupProperties |


### JobTargetGroupProperties

| Name | Description | Value |
|-|-|-|
| members | Members of the target group. | JobTarget[] (required) |


### JobTarget

| Name | Description | Value |
|-|-|-|
| databaseName | The target database name. | string |
| elasticPoolName | The target elastic pool name. | string |
| membershipType | Whether the target is included or excluded from the group. | 'Exclude''Include' |
| refreshCredential | The resource ID of the credential that is used during job execution to connect to the target and determine the list of databases inside the target. | string |
| serverName | The target server name. | string |
| shardMapName | The target shard map. | string |
| type | The target type. | 'SqlDatabase''SqlElasticPool''SqlServer''SqlShardMap''TargetGroup' (required) |


