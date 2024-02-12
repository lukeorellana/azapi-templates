```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/compilationjobs@2023-05-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
  body = jsonencode({
    properties = {
      configuration = {
        name = "string"
      }
      incrementNodeConfigurationBuild = bool
      parameters = {
        {customized property} = "string"
      }
    }
  })
}

```

### automationAccounts/compilationjobs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Gets or sets the location of the resource. | string |
| tags | Gets or sets the tags attached to the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Gets or sets the list of compilation job properties. | DscCompilationJobCreatePropertiesOrDscCompilationJob...(required) |


### DscCompilationJobCreatePropertiesOrDscCompilationJob...

| Name | Description | Value |
|-|-|-|
| configuration | Gets or sets the configuration. | DscConfigurationAssociationProperty(required) |
| incrementNodeConfigurationBuild | If a new build version of NodeConfiguration is required. | bool |
| parameters | Gets or sets the parameters of the job. | DscCompilationJobCreatePropertiesParameters |


### DscConfigurationAssociationProperty

| Name | Description | Value |
|-|-|-|
| name | Gets or sets the name of the Dsc configuration. | string |


### DscCompilationJobCreatePropertiesParameters

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


