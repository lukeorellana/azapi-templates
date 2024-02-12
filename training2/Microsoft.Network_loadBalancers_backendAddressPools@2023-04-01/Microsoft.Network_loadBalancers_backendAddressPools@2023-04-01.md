```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/loadBalancers/backendAddressPools@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      drainPeriodInSeconds = int
      loadBalancerBackendAddresses = [
        {
          name = "string"
          properties = {
            adminState = "string"
            ipAddress = "string"
            loadBalancerFrontendIPConfiguration = {
              id = "string"
            }
            subnet = {
              id = "string"
            }
            virtualNetwork = {
              id = "string"
            }
          }
        }
      ]
      location = "string"
      syncMode = "string"
      tunnelInterfaces = [
        {
          identifier = int
          port = int
          protocol = "string"
          type = "string"
        }
      ]
      virtualNetwork = {
        id = "string"
      }
    }
  })
}

```

### loadBalancers/backendAddressPools

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:loadBalancers |
| properties | Properties of load balancer backend address pool. | BackendAddressPoolPropertiesFormat |


### BackendAddressPoolPropertiesFormat

| Name | Description | Value |
|-|-|-|
| drainPeriodInSeconds | Amount of seconds Load Balancer waits for before sending RESET to client and backend address. | int |
| loadBalancerBackendAddresses | An array of backend addresses. | LoadBalancerBackendAddress[] |
| location | The location of the backend address pool. | string |
| syncMode | Backend address synchronous mode for the backend pool | 'Automatic''Manual' |
| tunnelInterfaces | An array of gateway load balancer tunnel interfaces. | GatewayLoadBalancerTunnelInterface[] |
| virtualNetwork | A reference to a virtual network. | SubResource |


### LoadBalancerBackendAddress

| Name | Description | Value |
|-|-|-|
| name | Name of the backend address. | string |
| properties | Properties of load balancer backend address pool. | LoadBalancerBackendAddressPropertiesFormat |


### LoadBalancerBackendAddressPropertiesFormat

| Name | Description | Value |
|-|-|-|
| adminState | A list of administrative states which once set can override health probe so that Load Balancer will always forward new connections to backend, or deny new connections and reset existing connections. | 'Down''None''Up' |
| ipAddress | IP Address belonging to the referenced virtual network. | string |
| loadBalancerFrontendIPConfiguration | Reference to the frontend ip address configuration defined in regional loadbalancer. | SubResource |
| subnet | Reference to an existing subnet. | SubResource |
| virtualNetwork | Reference to an existing virtual network. | SubResource |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### GatewayLoadBalancerTunnelInterface

| Name | Description | Value |
|-|-|-|
| identifier | Identifier of gateway load balancer tunnel interface. | int |
| port | Port of gateway load balancer tunnel interface. | int |
| protocol | Protocol of gateway load balancer tunnel interface. | 'Native''None''VXLAN' |
| type | Traffic type of gateway load balancer tunnel interface. | 'External''Internal''None' |


