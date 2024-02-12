```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/virtualnetworks@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      allowedSubnets = [
        {
          allowPublicIp = "string"
          labSubnetName = "string"
          resourceId = "string"
        }
      ]
      description = "string"
      externalProviderResourceId = "string"
      subnetOverrides = [
        {
          labSubnetName = "string"
          resourceId = "string"
          sharedPublicIpAddressConfiguration = {
            allowedPorts = [
              {
                backendPort = int
                transportProtocol = "string"
              }
            ]
          }
          useInVmCreationPermission = "string"
          usePublicIpAddressPermission = "string"
          virtualNetworkPoolName = "string"
        }
      ]
    }
  })
}

```

### labs/virtualnetworks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:labs |
| properties | The properties of the resource. | VirtualNetworkProperties |


### VirtualNetworkProperties

| Name | Description | Value |
|-|-|-|
| allowedSubnets | The allowed subnets of the virtual network. | Subnet[] |
| description | The description of the virtual network. | string |
| externalProviderResourceId | The Microsoft.Network resource identifier of the virtual network. | string |
| subnetOverrides | The subnet overrides of the virtual network. | SubnetOverride[] |


### Subnet

| Name | Description | Value |
|-|-|-|
| allowPublicIp | The permission policy of the subnet for allowing public IP addresses (i.e. Allow, Deny)). | 'Allow''Default''Deny' |
| labSubnetName | The name of the subnet as seen in the lab. | string |
| resourceId | The resource ID of the subnet. | string |


### SubnetOverride

| Name | Description | Value |
|-|-|-|
| labSubnetName | The name given to the subnet within the lab. | string |
| resourceId | The resource ID of the subnet. | string |
| sharedPublicIpAddressConfiguration | Properties that virtual machines on this subnet will share. | SubnetSharedPublicIpAddressConfiguration |
| useInVmCreationPermission | Indicates whether this subnet can be used during virtual machine creation (i.e. Allow, Deny). | 'Allow''Default''Deny' |
| usePublicIpAddressPermission | Indicates whether public IP addresses can be assigned to virtual machines on this subnet (i.e. Allow, Deny). | 'Allow''Default''Deny' |
| virtualNetworkPoolName | The virtual network pool associated with this subnet. | string |


### SubnetSharedPublicIpAddressConfiguration

| Name | Description | Value |
|-|-|-|
| allowedPorts | Backend ports that virtual machines on this subnet are allowed to expose | Port[] |


### Port

| Name | Description | Value |
|-|-|-|
| backendPort | Backend port of the target virtual machine. | int |
| transportProtocol | Protocol type of the port. | 'Tcp''Udp' |


