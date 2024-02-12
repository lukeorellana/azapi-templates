```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections@2022-04-01-preview"
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

### networkManagers/securityUserConfigurations/ruleColle...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:securityUserConfigurations |
| properties | Indicates the properties for the network manager user rule collection. | UserRuleCollectionPropertiesFormat |


### UserRuleCollectionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| appliesToGroups | Groups for configuration | NetworkManagerSecurityGroupItem[] (required) |
| description | A description of the user rule collection. | string |


### NetworkManagerSecurityGroupItem

| Name | Description | Value |
|-|-|-|
| networkGroupId | Network manager group Id. | string (required) |


