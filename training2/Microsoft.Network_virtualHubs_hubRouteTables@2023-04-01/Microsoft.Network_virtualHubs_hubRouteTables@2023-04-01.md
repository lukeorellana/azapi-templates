```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualHubs/hubRouteTables@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      labels = [
        "string"
      ]
      routes = [
        {
          destinations = [
            "string"
          ]
          destinationType = "string"
          name = "string"
          nextHop = "string"
          nextHopType = "string"
        }
      ]
    }
  })
}

```

### virtualHubs/hubRouteTables

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualHubs |
| properties | Properties of the RouteTable resource. | HubRouteTableProperties |


### HubRouteTableProperties

| Name | Description | Value |
|-|-|-|
| labels | List of labels associated with this route table. | string[] |
| routes | List of all routes. | HubRoute[] |


### HubRoute

| Name | Description | Value |
|-|-|-|
| destinations | List of all destinations. | string[] (required) |
| destinationType | The type of destinations (eg: CIDR, ResourceId, Service). | string (required) |
| name | The name of the Route that is unique within a RouteTable. This name can be used to access this route. | string (required) |
| nextHop | NextHop resource ID. | string (required) |
| nextHopType | The type of next hop (eg: ResourceId). | string (required) |


