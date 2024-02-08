```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.KeyVault/vaults/secrets@2022-07-01"
  name = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      attributes = {
        enabled = bool
        exp = int
        nbf = int
      }
      contentType = "string"
      value = "string"
    }
  })
}

```

### vaults/secrets

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-127Valid characters:Alphanumerics and hyphens. |
| tags | The tags that will be assigned to the secret. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vaults |
| properties | Properties of the secret | SecretProperties(required) |


### SecretProperties

| Name | Description | Value |
|-|-|-|
| attributes | The attributes of the secret. | SecretAttributes |
| contentType | The content type of the secret. | string |
| value | The value of the secret. NOTE: 'value' will never be returned from the service, as APIs using this model are is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets. | string |


### SecretAttributes

| Name | Description | Value |
|-|-|-|
| enabled | Determines whether the object is enabled. | bool |
| exp | Expiry date in seconds since 1970-01-01T00:00:00Z. | int |
| nbf | Not before date in seconds since 1970-01-01T00:00:00Z. | int |


