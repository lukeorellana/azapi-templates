```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/runtimeEnvironments/packages@2023-05-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      contentLink = {
        contentHash = {
          algorithm = "string"
          value = "string"
        }
        uri = "string"
        version = "string"
      }
    }
    allOf = {
      location = "string"
      tags = {}
    }
  })
}

```

### automationAccounts/runtimeEnvironments/packages

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:runtimeEnvironments |
| allOf | The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' | TrackedResource |
| properties | Gets or sets the package create properties. | PackageCreateOrUpdatePropertiesOrPackageProperties(required) |


### TrackedResource

| Name | Description | Value |
|-|-|-|
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | object |


### PackageCreateOrUpdatePropertiesOrPackageProperties

| Name | Description | Value |
|-|-|-|
| contentLink | Gets or sets the package content link. | ContentLink(required) |


### ContentLink

| Name | Description | Value |
|-|-|-|
| contentHash | Gets or sets the hash. | ContentHash |
| uri | Gets or sets the uri of content. | string |
| version | Gets or sets the version of the content. | string |


### ContentHash

| Name | Description | Value |
|-|-|-|
| algorithm | Gets or sets the content hash algorithm used to hash the content. | string (required) |
| value | Gets or sets expected hash value of the content. | string (required) |


