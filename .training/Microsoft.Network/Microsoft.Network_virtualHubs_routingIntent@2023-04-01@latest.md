```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualHubs/routingIntent@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      routingPolicies = [
        {
          destinations = [
            "string"
          ]
          name = "string"
          nextHop = "string"
        }
      ]
    }
  })
}

```

### virtualHubs/routingIntent

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualHubs |
| properties | Properties of the RoutingIntent resource. | RoutingIntentProperties |


### RoutingIntentProperties

| Name | Description | Value |
|-|-|-|
| routingPolicies | List of routing policies. | RoutingPolicy[] |


### RoutingPolicy

| Name | Description | Value |
|-|-|-|
| destinations | List of all destinations which this routing policy is applicable to (for example: Internet, PrivateTraffic). | string[] (required) |
| name | The unique name for the routing policy. | string (required) |
| nextHop | The next hop resource id on which this routing policy is applicable to. | string (required) |


