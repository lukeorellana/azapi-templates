```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataLakeStore/accounts/trustedIdProviders@2016-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      idProvider = "string"
    }
  })
}

```

### accounts/trustedIdProviders

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:accounts |
| properties | The trusted identity provider properties to use when creating a new trusted identity provider. | CreateOrUpdateTrustedIdProviderPropertiesOrTrustedId...(required) |


### CreateOrUpdateTrustedIdProviderPropertiesOrTrustedId...

| Name | Description | Value |
|-|-|-|
| idProvider | The URL of this trusted identity provider. | string (required) |


