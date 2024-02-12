```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/availabilityGroupListeners@2022-08-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      availabilityGroupConfiguration = {
        replicas = [
          {
            commit = "string"
            failover = "string"
            readableSecondary = "string"
            role = "string"
            sqlVirtualMachineInstanceId = "string"
          }
        ]
      }
      availabilityGroupName = "string"
      createDefaultAvailabilityGroupIfNotExist = bool
      loadBalancerConfigurations = [
        {
          loadBalancerResourceId = "string"
          privateIpAddress = {
            ipAddress = "string"
            subnetResourceId = "string"
          }
          probePort = int
          publicIpAddressResourceId = "string"
          sqlVirtualMachineInstances = [
            "string"
          ]
        }
      ]
      multiSubnetIpConfigurations = [
        {
          privateIpAddress = {
            ipAddress = "string"
            subnetResourceId = "string"
          }
          sqlVirtualMachineInstance = "string"
        }
      ]
      port = int
    }
  })
}

```

### sqlVirtualMachineGroups/availabilityGroupListeners

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sqlVirtualMachineGroups |
| properties | Resource properties. | AvailabilityGroupListenerProperties |


### AvailabilityGroupListenerProperties

| Name | Description | Value |
|-|-|-|
| availabilityGroupConfiguration | Availability Group configuration. | AgConfiguration |
| availabilityGroupName | Name of the availability group. | string |
| createDefaultAvailabilityGroupIfNotExist | Create a default availability group if it does not exist. | bool |
| loadBalancerConfigurations | List of load balancer configurations for an availability group listener. | LoadBalancerConfiguration[] |
| multiSubnetIpConfigurations | List of multi subnet IP configurations for an AG listener. | MultiSubnetIpConfiguration[] |
| port | Listener port. | int |


### AgConfiguration

| Name | Description | Value |
|-|-|-|
| replicas | Replica configurations. | AgReplica[] |


### AgReplica

| Name | Description | Value |
|-|-|-|
| commit | Replica commit mode in availability group. | 'ASYNCHRONOUS_COMMIT''SYNCHRONOUS_COMMIT' |
| failover | Replica failover mode in availability group. | 'AUTOMATIC''MANUAL' |
| readableSecondary | Replica readable secondary mode in availability group. | 'ALL''NO''READ_ONLY' |
| role | Replica Role in availability group. | 'PRIMARY''SECONDARY' |
| sqlVirtualMachineInstanceId | Sql VirtualMachine Instance Id. | string |


### LoadBalancerConfiguration

| Name | Description | Value |
|-|-|-|
| loadBalancerResourceId | Resource id of the load balancer. | string |
| privateIpAddress | Private IP address. | PrivateIPAddress |
| probePort | Probe port. | int |
| publicIpAddressResourceId | Resource id of the public IP. | string |
| sqlVirtualMachineInstances | List of the SQL virtual machine instance resource id's that are enrolled into the availability group listener. | string[] |


### PrivateIPAddress

| Name | Description | Value |
|-|-|-|
| ipAddress | Private IP address bound to the availability group listener. | string |
| subnetResourceId | Subnet used to include private IP. | string |


### MultiSubnetIpConfiguration

| Name | Description | Value |
|-|-|-|
| privateIpAddress | Private IP address. | PrivateIPAddress(required) |
| sqlVirtualMachineInstance | SQL virtual machine instance resource id that are enrolled into the availability group listener. | string (required) |


