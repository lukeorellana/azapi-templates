```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualHubs/routeTables@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      attachedConnections = [
        "string"
      ]
      routes = [
        {
          destinations = [
            "string"
          ]
          destinationType = "string"
          nextHops = [
            "string"
          ]
          nextHopType = "string"
        }
      ]
    }
  })
}

```

### virtualHubs/routeTables

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualHubs |
| properties | Properties of the virtual hub route table v2. | VirtualHubRouteTableV2Properties |


### VirtualHubRouteTableV2Properties

| Name | Description | Value |
|-|-|-|
| attachedConnections | List of all connections attached to this route table v2. | string[] |
| routes | List of all routes. | VirtualHubRouteV2[] |


### VirtualHubRouteV2

| Name | Description | Value |
|-|-|-|
| destinations | List of all destinations. | string[] |
| destinationType | The type of destinations. | string |
| nextHops | NextHops ip address. | string[] |
| nextHopType | The type of next hops. | string |


