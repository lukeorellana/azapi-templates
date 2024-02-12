```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/disasterRecoveryConfiguration@2014-04-01"
  name = "string"
  parent_id = "string"
}

```

### servers/disasterRecoveryConfiguration

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |


