```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appliesToGroups = [
        {
          networkGroupId = "string"
        }
      ]
      description = "string"
    }
  })
}

```

### networkManagers/securityAdminConfigurations/ruleColl...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:securityAdminConfigurations |
| properties | Indicates the properties for the network manager admin rule collection. | AdminRuleCollectionPropertiesFormat |


### AdminRuleCollectionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| appliesToGroups | Groups for configuration | NetworkManagerSecurityGroupItem[] (required) |
| description | A description of the admin rule collection. | string |


### NetworkManagerSecurityGroupItem

| Name | Description | Value |
|-|-|-|
| networkGroupId | Network manager group Id. | string (required) |


