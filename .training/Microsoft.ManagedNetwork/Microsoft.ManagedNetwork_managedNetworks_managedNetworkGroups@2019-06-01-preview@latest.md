```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ManagedNetwork/managedNetworks/managedNetworkGroups@2019-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      managementGroups = [
        {
          id = "string"
        }
      ]
      subnets = [
        {
          id = "string"
        }
      ]
      subscriptions = [
        {
          id = "string"
        }
      ]
      virtualNetworks = [
        {
          id = "string"
        }
      ]
    }
    kind = "Connectivity"
  })
}

```

### managedNetworks/managedNetworkGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string |
| kind | Responsibility role under which this Managed Network Group will be created | 'Connectivity' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedNetworks |
| properties | Gets or sets the properties of a network group | ManagedNetworkGroupProperties |


### ManagedNetworkGroupProperties

| Name | Description | Value |
|-|-|-|
| managementGroups | The collection of management groups covered by the Managed Network | ResourceId[] |
| subnets | The collection of  subnets covered by the Managed Network | ResourceId[] |
| subscriptions | The collection of subscriptions covered by the Managed Network | ResourceId[] |
| virtualNetworks | The collection of virtual nets covered by the Managed Network | ResourceId[] |


### ResourceId

| Name | Description | Value |
|-|-|-|
| id | Resource Id | string |


