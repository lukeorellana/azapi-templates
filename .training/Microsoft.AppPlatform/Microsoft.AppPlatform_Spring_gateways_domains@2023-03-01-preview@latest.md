```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/gateways/domains@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      thumbprint = "string"
    }
  })
}

```

### Spring/gateways/domains

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:gateways |
| properties | The properties of custom domain for Spring Cloud Gateway | GatewayCustomDomainProperties |


### GatewayCustomDomainProperties

| Name | Description | Value |
|-|-|-|
| thumbprint | The thumbprint of bound certificate. | string |


