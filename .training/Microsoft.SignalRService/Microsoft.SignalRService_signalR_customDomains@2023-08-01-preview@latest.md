```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SignalRService/signalR/customDomains@2023-08-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      customCertificate = {
        id = "string"
      }
      domainName = "string"
    }
  })
}

```

### signalR/customDomains

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:signalR |
| properties | Properties of a custom domain. | CustomDomainProperties(required) |


### CustomDomainProperties

| Name | Description | Value |
|-|-|-|
| customCertificate | Reference to a resource. | ResourceReference(required) |
| domainName | The custom domain name. | string (required) |


### ResourceReference

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


