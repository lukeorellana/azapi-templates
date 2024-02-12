```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Management/managementGroups/subscriptions@2021-04-01"
  name = "string"
  parent_id = "string"
}

```

### managementGroups/subscriptions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managementGroups |


