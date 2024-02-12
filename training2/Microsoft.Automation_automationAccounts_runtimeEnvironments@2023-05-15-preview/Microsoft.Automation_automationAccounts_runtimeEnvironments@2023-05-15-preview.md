```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/runtimeEnvironments@2023-05-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      defaultPackages = {
        {customized property} = "string"
      }
      description = "string"
      runtime = {
        language = "string"
        version = "string"
      }
    }
  })
}

```

### automationAccounts/runtimeEnvironments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Gets or sets the Runtime Environment properties. | RuntimeEnvironmentProperties |


### RuntimeEnvironmentProperties

| Name | Description | Value |
|-|-|-|
| defaultPackages | List of Default packages for Environment | DefaultPackages |
| description | Gets or sets the description. | string |
| runtime | Runtime properties. | RuntimeProperties |


### DefaultPackages

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### RuntimeProperties

| Name | Description | Value |
|-|-|-|
| language | Language of Runtime Environment | string |
| version | Version of Language | string |


