```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/loadBalancers/inboundNatRules@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      backendAddressPool = {
        id = "string"
      }
      backendPort = int
      enableFloatingIP = bool
      enableTcpReset = bool
      frontendIPConfiguration = {
        id = "string"
      }
      frontendPort = int
      frontendPortRangeEnd = int
      frontendPortRangeStart = int
      idleTimeoutInMinutes = int
      protocol = "string"
    }
  })
}

```

### loadBalancers/inboundNatRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:loadBalancers |
| properties | Properties of load balancer inbound NAT rule. | InboundNatRulePropertiesFormat |


### InboundNatRulePropertiesFormat

| Name | Description | Value |
|-|-|-|
| backendAddressPool | A reference to backendAddressPool resource. | SubResource |
| backendPort | The port used for the internal endpoint. Acceptable values range from 1 to 65535. | int |
| enableFloatingIP | Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint. | bool |
| enableTcpReset | Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP. | bool |
| frontendIPConfiguration | A reference to frontend IP addresses. | SubResource |
| frontendPort | The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534. | int |
| frontendPortRangeEnd | The port range end for the external endpoint. This property is used together with BackendAddressPool and FrontendPortRangeStart. Individual inbound NAT rule port mappings will be created for each backend address from BackendAddressPool. Acceptable values range from 1 to 65534. | int |
| frontendPortRangeStart | The port range start for the external endpoint. This property is used together with BackendAddressPool and FrontendPortRangeEnd. Individual inbound NAT rule port mappings will be created for each backend address from BackendAddressPool. Acceptable values range from 1 to 65534. | int |
| idleTimeoutInMinutes | The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP. | int |
| protocol | The reference to the transport protocol used by the load balancing rule. | 'All''Tcp''Udp' |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


