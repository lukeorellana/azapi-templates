```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/endpoints/customDomains@2023-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      hostName = "string"
    }
  })
}

```

### profiles/endpoints/customDomains

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:endpoints |
| properties | The JSON object that contains the properties of the custom domain to create. | CustomDomainPropertiesParametersOrCustomDomainProper... |


### CustomDomainPropertiesParametersOrCustomDomainProper...

| Name | Description | Value |
|-|-|-|
| hostName | The host name of the custom domain. Must be a domain name. | string (required) |


