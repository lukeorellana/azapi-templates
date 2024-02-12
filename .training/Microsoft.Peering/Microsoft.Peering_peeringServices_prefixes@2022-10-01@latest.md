```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Peering/peeringServices/prefixes@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      peeringServicePrefixKey = "string"
      prefix = "string"
    }
  })
}

```

### peeringServices/prefixes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:peeringServices |
| properties | Gets or sets the peering prefix properties. | PeeringServicePrefixProperties |


### PeeringServicePrefixProperties

| Name | Description | Value |
|-|-|-|
| peeringServicePrefixKey | The peering service prefix key | string |
| prefix | The prefix from which your traffic originates. | string |


