```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/bastionHosts@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      disableCopyPaste = bool
      dnsName = "string"
      enableFileCopy = bool
      enableIpConnect = bool
      enableKerberos = bool
      enableShareableLink = bool
      enableTunneling = bool
      ipConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            privateIPAllocationMethod = "string"
            publicIPAddress = {
              id = "string"
            }
            subnet = {
              id = "string"
            }
          }
        }
      ]
      scaleUnits = int
    }
    sku = {
      name = "string"
    }
  })
}

```

### bastionHosts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The sku of this Bastion Host. | Sku |
| properties | Represents the bastion host resource. | BastionHostPropertiesFormat |


### BastionHostPropertiesFormat

| Name | Description | Value |
|-|-|-|
| disableCopyPaste | Enable/Disable Copy/Paste feature of the Bastion Host resource. | bool |
| dnsName | FQDN for the endpoint on which bastion host is accessible. | string |
| enableFileCopy | Enable/Disable File Copy feature of the Bastion Host resource. | bool |
| enableIpConnect | Enable/Disable IP Connect feature of the Bastion Host resource. | bool |
| enableKerberos | Enable/Disable Kerberos feature of the Bastion Host resource. | bool |
| enableShareableLink | Enable/Disable Shareable Link of the Bastion Host resource. | bool |
| enableTunneling | Enable/Disable Tunneling feature of the Bastion Host resource. | bool |
| ipConfigurations | IP configuration of the Bastion Host resource. | BastionHostIPConfiguration[] |
| scaleUnits | The scale units for the Bastion Host resource. | int |


### BastionHostIPConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Represents the ip configuration associated with the resource. | BastionHostIPConfigurationPropertiesFormat |


### BastionHostIPConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| privateIPAllocationMethod | Private IP allocation method. | 'Dynamic''Static' |
| publicIPAddress | Reference of the PublicIP resource. | SubResource(required) |
| subnet | Reference of the subnet resource. | SubResource(required) |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| name | The name of this Bastion Host. | 'Basic''Standard' |


