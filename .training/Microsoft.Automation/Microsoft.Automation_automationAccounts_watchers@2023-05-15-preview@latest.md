```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/watchers@2023-05-15-preview"
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
      description = "string"
      executionFrequencyInSeconds = int
      scriptName = "string"
      scriptParameters = {
        {customized property} = "string"
      }
      scriptRunOn = "string"
    }
    etag = "string"
  })
}

```

### automationAccounts/watchers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-63Valid characters:Alphanumerics, underscores, and hyphens.Start with letter. |
| location | The geo-location where the resource lives | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| etag | Gets or sets the etag of the resource. | string |
| properties | Gets or sets the watcher properties. | WatcherProperties |


### WatcherProperties

| Name | Description | Value |
|-|-|-|
| description | Gets or sets the description. | string |
| executionFrequencyInSeconds | Gets or sets the frequency at which the watcher is invoked. | int |
| scriptName | Gets or sets the name of the script the watcher is attached to, i.e. the name of an existing runbook. | string |
| scriptParameters | Gets or sets the parameters of the script. | WatcherPropertiesScriptParameters |
| scriptRunOn | Gets or sets the name of the hybrid worker group the watcher will run on. | string |


### WatcherPropertiesScriptParameters

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


