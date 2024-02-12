```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/runbooks@2023-11-01"
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
      draft = {
        creationTime = "string"
        draftContentLink = {
          contentHash = {
            algorithm = "string"
            value = "string"
          }
          uri = "string"
          version = "string"
        }
        inEdit = bool
        lastModifiedTime = "string"
        outputTypes = [
          "string"
        ]
        parameters = {
          {customized property} = {
            defaultValue = "string"
            isMandatory = bool
            position = int
            type = "string"
          }
        }
      }
      logActivityTrace = int
      logProgress = bool
      logVerbose = bool
      publishContentLink = {
        contentHash = {
          algorithm = "string"
          value = "string"
        }
        uri = "string"
        version = "string"
      }
      runbookType = "string"
    }
  })
}

```

### automationAccounts/runbooks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-63Valid characters:Alphanumerics, underscores, and hyphens.Start with letter. |
| location | Gets or sets the location of the resource. | string |
| tags | Gets or sets the tags attached to the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Gets or sets runbook create or update properties. | RunbookCreateOrUpdatePropertiesOrRunbookProperties(required) |


### RunbookCreateOrUpdatePropertiesOrRunbookProperties

| Name | Description | Value |
|-|-|-|
| description | Gets or sets the description of the runbook. | string |
| draft | Gets or sets the draft runbook properties. | RunbookDraft |
| logActivityTrace | Gets or sets the activity-level tracing options of the runbook. | int |
| logProgress | Gets or sets progress log option. | bool |
| logVerbose | Gets or sets verbose log option. | bool |
| publishContentLink | Gets or sets the published runbook content link. | ContentLink |
| runbookType | Gets or sets the type of the runbook. | 'Graph''GraphPowerShell''GraphPowerShellWorkflow''PowerShell''PowerShell72''PowerShellWorkflow''Python2''Python3''Script' (required) |


### RunbookDraft

| Name | Description | Value |
|-|-|-|
| creationTime | Gets or sets the creation time of the runbook draft. | string |
| draftContentLink | Gets or sets the draft runbook content link. | ContentLink |
| inEdit | Gets or sets whether runbook is in edit mode. | bool |
| lastModifiedTime | Gets or sets the last modified time of the runbook draft. | string |
| outputTypes | Gets or sets the runbook output types. | string[] |
| parameters | Gets or sets the runbook draft parameters. | RunbookDraftParameters |


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


### RunbookDraftParameters

| Name | Description | Value |
|-|-|-|
| {customized property} |  | RunbookParameter |


### RunbookParameter

| Name | Description | Value |
|-|-|-|
| defaultValue | Gets or sets the default value of parameter. | string |
| isMandatory | Gets or sets a Boolean value to indicate whether the parameter is mandatory or not. | bool |
| position | Get or sets the position of the parameter. | int |
| type | Gets or sets the type of the parameter. | string |


