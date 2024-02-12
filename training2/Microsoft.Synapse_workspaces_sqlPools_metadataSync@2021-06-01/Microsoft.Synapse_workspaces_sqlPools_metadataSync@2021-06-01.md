```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlPools/metadataSync@2021-06-01"
  name = "config"
  parent_id = "string"
  body = jsonencode({
    properties = {
      enabled = bool
      syncIntervalInMinutes = int
    }
  })
}

```

### workspaces/sqlPools/metadataSync

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'config' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sqlPools |
| properties | Metadata Sync Config properties | MetadataSyncConfigProperties |


### MetadataSyncConfigProperties

| Name | Description | Value |
|-|-|-|
| enabled | Indicates whether the metadata sync is enabled or disabled | bool |
| syncIntervalInMinutes | The Sync Interval in minutes. | int |


