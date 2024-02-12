```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/python3Packages@2023-11-01"
  name = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
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
  })
}

```

### automationAccounts/python3Packages

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| tags | Gets or sets the tags attached to the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Gets or sets the module create properties. | PythonPackageCreatePropertiesOrModuleProperties(required) |


### PythonPackageCreatePropertiesOrModuleProperties

| Name | Description | Value |
|-|-|-|
| contentLink | Gets or sets the module content link. | ContentLink(required) |


### ContentLink

| Name | Description | Value |
|-|-|-|
| contentHash | Sets the hash. | ContentHash |
| uri | Sets the uri of the content. | string |
| version | Sets the version of the content. | string |


### ContentHash

| Name | Description | Value |
|-|-|-|
| algorithm | Gets or sets the content hash algorithm used to hash the content. | string (required) |
| value | Gets or sets expected hash value of the content. | string (required) |


