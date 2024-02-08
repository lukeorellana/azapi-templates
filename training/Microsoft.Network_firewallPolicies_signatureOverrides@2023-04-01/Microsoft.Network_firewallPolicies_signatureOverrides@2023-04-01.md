```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/firewallPolicies/signatureOverrides@2023-04-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      signatures = {}
    }
  })
}

```

### firewallPolicies/signatureOverrides

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:firewallPolicies |
| properties | Will contain the properties of the resource (the actual signature overrides) | SignaturesOverridesProperties |


### SignaturesOverridesProperties

| Name | Description | Value |
|-|-|-|
| signatures | Dictionary of {string} | object |


