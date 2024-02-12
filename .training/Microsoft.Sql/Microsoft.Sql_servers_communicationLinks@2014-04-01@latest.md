```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/communicationLinks@2014-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      partnerServer = "string"
    }
  })
}

```

### servers/communicationLinks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | The properties of resource. | ServerCommunicationLinkProperties |


### ServerCommunicationLinkProperties

| Name | Description | Value |
|-|-|-|
| partnerServer | The name of the partner server. | string (required) |


