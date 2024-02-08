```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/routeFilters/routeFilterRules@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      access = "string"
      communities = [
        "string"
      ]
      routeFilterRuleType = "Community"
    }
  })
}

```

### routeFilters/routeFilterRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:routeFilters |
| properties | Properties of the route filter rule. | RouteFilterRulePropertiesFormat |


### RouteFilterRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| access | The access type of the rule. | 'Allow''Deny' (required) |
| communities | The collection for bgp community values to filter on. e.g. ['12076:5010','12076:5020']. | string[] (required) |
| routeFilterRuleType | The rule type of the rule. | 'Community' (required) |


