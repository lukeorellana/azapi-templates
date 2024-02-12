```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/routeFilters@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      rules = [
        {
          id = "string"
          location = "string"
          name = "string"
          properties = {
            access = "string"
            communities = [
              "string"
            ]
            routeFilterRuleType = "Community"
          }
        }
      ]
    }
  })
}

```

### routeFilters

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the route filter. | RouteFilterPropertiesFormat |


### RouteFilterPropertiesFormat

| Name | Description | Value |
|-|-|-|
| rules | Collection of RouteFilterRules contained within a route filter. | RouteFilterRule[] |


### RouteFilterRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the route filter rule. | RouteFilterRulePropertiesFormat |


### RouteFilterRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| access | The access type of the rule. | 'Allow''Deny' (required) |
| communities | The collection for bgp community values to filter on. e.g. ['12076:5010','12076:5020']. | string[] (required) |
| routeFilterRuleType | The rule type of the rule. | 'Community' (required) |


