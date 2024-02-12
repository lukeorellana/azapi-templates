```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataLakeStore/accounts/virtualNetworkRules@2016-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      subnetId = "string"
    }
  })
}

```

### accounts/virtualNetworkRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 3-50Valid characters:Alphanumerics, hyphens, and underscores. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:accounts |
| properties | The virtual network rule properties to use when creating a new virtual network rule. | CreateOrUpdateVirtualNetworkRulePropertiesOrVirtualN...(required) |


### CreateOrUpdateVirtualNetworkRulePropertiesOrVirtualN...

| Name | Description | Value |
|-|-|-|
| subnetId | The resource identifier for the subnet. | string (required) |


