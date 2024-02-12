```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlPools/geoBackupPolicies@2021-06-01"
  name = "Default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      state = "string"
    }
  })
}

```

### workspaces/sqlPools/geoBackupPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'Default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sqlPools |
| properties | The properties of the geo backup policy. | GeoBackupPolicyProperties(required) |


### GeoBackupPolicyProperties

| Name | Description | Value |
|-|-|-|
| state | The state of the geo backup policy. | 'Disabled''Enabled' (required) |


