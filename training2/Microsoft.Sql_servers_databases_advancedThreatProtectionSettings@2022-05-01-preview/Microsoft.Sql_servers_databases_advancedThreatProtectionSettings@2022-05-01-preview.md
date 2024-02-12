```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/advancedThreatProtectionSettings@2022-05-01-preview"
  name = "Default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      state = "string"
    }
  })
}

```

### servers/databases/advancedThreatProtectionSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'Default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Resource properties. | AdvancedThreatProtectionProperties |


### AdvancedThreatProtectionProperties

| Name | Description | Value |
|-|-|-|
| state | Specifies the state of the Advanced Threat Protection, whether it is enabled or disabled or a state has not been applied yet on the specific database or server. | 'Disabled''Enabled''New' (required) |


