```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/namespaces/clientGroups@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      query = "string"
    }
  })
}

```

### namespaces/clientGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | The properties of client group. | ClientGroupProperties |


### ClientGroupProperties

| Name | Description | Value |
|-|-|-|
| description | Description for the Client Group resource. | string |
| query | The grouping query for the clients.Example : attributes.keyName IN ['a', 'b', 'c']. | string |


