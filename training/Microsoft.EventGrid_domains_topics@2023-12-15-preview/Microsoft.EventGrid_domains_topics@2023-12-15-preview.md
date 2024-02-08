```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/domains/topics@2023-12-15-preview"
  name = "string"
  parent_id = "string"
}

```

### domains/topics

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 3-50Valid characters:Alphanumerics and hyphens. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:domains |


