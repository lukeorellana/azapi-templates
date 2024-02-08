```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/privateAccess@2022-09-01"
  name = "virtualNetworks"
  parent_id = "string"
  body = jsonencode({
    properties = {
      enabled = bool
      virtualNetworks = [
        {
          key = int
          name = "string"
          resourceId = "string"
          subnets = [
            {
              key = int
              name = "string"
            }
          ]
        }
      ]
    }
    kind = "string"
  })
}

```

### sites/slots/privateAccess

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'virtualNetworks' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | PrivateAccess resource specific properties | PrivateAccessProperties |


### PrivateAccessProperties

| Name | Description | Value |
|-|-|-|
| enabled | Whether private access is enabled or not. | bool |
| virtualNetworks | The Virtual Networks (and subnets) allowed to access the site privately. | PrivateAccessVirtualNetwork[] |


### PrivateAccessVirtualNetwork

| Name | Description | Value |
|-|-|-|
| key | The key (ID) of the Virtual Network. | int |
| name | The name of the Virtual Network. | string |
| resourceId | The ARM uri of the Virtual Network | string |
| subnets | A List of subnets that access is allowed to on this Virtual Network. An empty array (but not null) is interpreted to mean that all subnets are allowed within this Virtual Network. | PrivateAccessSubnet[] |


### PrivateAccessSubnet

| Name | Description | Value |
|-|-|-|
| key | The key (ID) of the subnet. | int |
| name | The name of the subnet. | string |


