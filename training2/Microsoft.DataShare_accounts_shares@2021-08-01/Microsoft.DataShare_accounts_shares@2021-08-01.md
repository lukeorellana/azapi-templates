```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataShare/accounts/shares@2021-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      shareKind = "string"
      terms = "string"
    }
  })
}

```

### accounts/shares

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:accounts |
| properties | Properties on the share | ShareProperties |


### ShareProperties

| Name | Description | Value |
|-|-|-|
| description | Share description. | string |
| shareKind | Share kind. | 'CopyBased''InPlace' |
| terms | Share terms. | string |


