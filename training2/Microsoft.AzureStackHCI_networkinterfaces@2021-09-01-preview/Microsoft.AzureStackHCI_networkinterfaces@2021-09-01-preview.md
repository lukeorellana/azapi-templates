```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/networkinterfaces@2021-09-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      dnsSettings = {
        dnsServers = [
          "string"
        ]
      }
      ipConfigurations = [
        {
          name = "string"
          properties = {
            gateway = "string"
            prefixLength = "string"
            privateIPAddress = "string"
            privateIPAllocationMethod = "string"
            subnet = {
              id = "string"
            }
          }
        }
      ]
      macAddress = "string"
      resourceName = "string"
    }
    extendedLocation = {
      name = "string"
      type = "CustomLocation"
    }
  })
}

```

### networkinterfaces

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| extendedLocation | The extendedLocation of the resource. | ExtendedLocation |
| properties | Properties of a network interface resource | NetworkinterfacesProperties |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'CustomLocation' |


### NetworkinterfacesProperties

| Name | Description | Value |
|-|-|-|
| dnsSettings | DNS Settings for the interface | InterfaceDNSSettings |
| ipConfigurations | IPConfigurations - A list of IPConfigurations of the network interface. | IpConfiguration[] |
| macAddress | MacAddress - The MAC address of the network interface. | string |
| resourceName | name of the object to be used in moc | string |


### InterfaceDNSSettings

| Name | Description | Value |
|-|-|-|
| dnsServers | List of DNS server IP Addresses for the interface | string[] |


### IpConfiguration

| Name | Description | Value |
|-|-|-|
| name | Name - The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | InterfaceIPConfigurationPropertiesFormat properties of IP configuration. | IpConfigurationProperties |


### IpConfigurationProperties

| Name | Description | Value |
|-|-|-|
| gateway | Gateway for network interface | string |
| prefixLength | prefixLength for network interface | string |
| privateIPAddress | PrivateIPAddress - Private IP address of the IP configuration. | string |
| privateIPAllocationMethod | PrivateIPAllocationMethod - The private IP address allocation method. Possible values include: 'Static', 'Dynamic' | 'Dynamic''Static' |
| subnet | Subnet - Name of Subnet bound to the IP configuration. | IpConfigurationPropertiesSubnet |


### IpConfigurationPropertiesSubnet

| Name | Description | Value |
|-|-|-|
| id | ID - The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/... | string |


