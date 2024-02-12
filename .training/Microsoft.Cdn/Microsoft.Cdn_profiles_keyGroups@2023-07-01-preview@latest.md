```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/keyGroups@2023-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      keyReferences = [
        {
          id = "string"
        }
      ]
    }
  })
}

```

### profiles/keyGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:profiles |
| properties | The JSON object that contains the properties of the key group to create. | KeyGroupProperties |


### KeyGroupProperties

| Name | Description | Value |
|-|-|-|
| keyReferences | Names of UrlSigningKey type secret objects | ResourceReference[] |


### ResourceReference

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


