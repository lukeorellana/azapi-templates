```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/dnsAliases@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    createDnsRecord = bool
  })
}

```

### managedInstances/dnsAliases

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedInstances |
| createDnsRecord | Whether or not DNS record should be created for this alias. | bool |


