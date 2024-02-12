```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Aad/domainServices/ouContainer@2022-12-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    accountName = "string"
    password = "string"
    spn = "string"
  })
}

```

### domainServices/ouContainer

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:domainServices |
| accountName | The account name | string |
| password | The account password | string |
| spn | The account spn | string |


