```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceFabric/managedclusters/applicationTypes/versions@2023-12-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
  body = jsonencode({
    properties = {
      appPackageUrl = "string"
    }
  })
}

```

### managedclusters/applicationTypes/versions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location depends on the parent resource. | string |
| tags | Azure resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:applicationTypes |
| properties | The properties of the application type version resource. | ApplicationTypeVersionResourceProperties |


### ApplicationTypeVersionResourceProperties

| Name | Description | Value |
|-|-|-|
| appPackageUrl | The URL to the application package | string (required) |


