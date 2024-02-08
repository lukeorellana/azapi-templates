```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RedHatOpenShift/openshiftclusters/secret@2023-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      secretResources = "string"
    }
  })
}

```

### openshiftclusters/secret

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:openshiftclusters |
| properties | The Secret Properties | SecretProperties |


### SecretProperties

| Name | Description | Value |
|-|-|-|
| secretResources | The Secrets Resources. | stringConstraints:Sensitive value. Pass in as a secure parameter. |


