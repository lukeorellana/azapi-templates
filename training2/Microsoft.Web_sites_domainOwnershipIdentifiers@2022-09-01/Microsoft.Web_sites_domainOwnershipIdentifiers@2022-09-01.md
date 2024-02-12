```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/domainOwnershipIdentifiers@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      id = "string"
    }
    kind = "string"
  })
}

```

### sites/domainOwnershipIdentifiers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| properties | Identifier resource specific properties | IdentifierProperties |


### IdentifierProperties

| Name | Description | Value |
|-|-|-|
| id | String representation of the identity. | string |


