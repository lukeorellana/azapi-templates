```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualHubs/routeMaps@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      associatedInboundConnections = [
        "string"
      ]
      associatedOutboundConnections = [
        "string"
      ]
      rules = [
        {
          actions = [
            {
              parameters = [
                {
                  asPath = [
                    "string"
                  ]
                  community = [
                    "string"
                  ]
                  routePrefix = [
                    "string"
                  ]
                }
              ]
              type = "string"
            }
          ]
          matchCriteria = [
            {
              asPath = [
                "string"
              ]
              community = [
                "string"
              ]
              matchCondition = "string"
              routePrefix = [
                "string"
              ]
            }
          ]
          name = "string"
          nextStepIfMatched = "string"
        }
      ]
    }
  })
}

```

### virtualHubs/routeMaps

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualHubs |
| properties | Properties of the RouteMap resource. | RouteMapProperties |


### RouteMapProperties

| Name | Description | Value |
|-|-|-|
| associatedInboundConnections | List of connections which have this RoutMap associated for inbound traffic. | string[] |
| associatedOutboundConnections | List of connections which have this RoutMap associated for outbound traffic. | string[] |
| rules | List of RouteMap rules to be applied. | RouteMapRule[] |


### RouteMapRule

| Name | Description | Value |
|-|-|-|
| actions | List of actions which will be applied on a match. | Action[] |
| matchCriteria | List of matching criterion which will be applied to traffic. | Criterion[] |
| name | The unique name for the rule. | string |
| nextStepIfMatched | Next step after rule is evaluated. Current supported behaviors are 'Continue'(to next rule) and 'Terminate'. | 'Continue''Terminate''Unknown' |


### Action

| Name | Description | Value |
|-|-|-|
| parameters | List of parameters relevant to the action.For instance if type is drop then parameters has list of prefixes to be dropped.If type is add, parameters would have list of ASN numbers to be added | Parameter[] |
| type | Type of action to be taken. Supported types are 'Remove', 'Add', 'Replace', and 'Drop.' | 'Add''Drop''Remove''Replace''Unknown' |


### Parameter

| Name | Description | Value |
|-|-|-|
| asPath | List of AS paths. | string[] |
| community | List of BGP communities. | string[] |
| routePrefix | List of route prefixes. | string[] |


### Criterion

| Name | Description | Value |
|-|-|-|
| asPath | List of AS paths which this criteria matches. | string[] |
| community | List of BGP communities which this criteria matches. | string[] |
| matchCondition | Match condition to apply RouteMap rules. | 'Contains''Equals''NotContains''NotEquals''Unknown' |
| routePrefix | List of route prefixes which this criteria matches. | string[] |


