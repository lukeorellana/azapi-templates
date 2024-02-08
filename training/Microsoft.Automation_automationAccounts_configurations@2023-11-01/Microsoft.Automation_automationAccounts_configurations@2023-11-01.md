```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/configurations@2023-11-01"
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
      logProgress = bool
      logVerbose = bool
      parameters = {
        {customized property} = {
          defaultValue = "string"
          isMandatory = bool
          position = int
          type = "string"
        }
      }
      source = {
        hash = {
          algorithm = "string"
          value = "string"
        }
        type = "string"
        value = "string"
        version = "string"
      }
    }
  })
}

```

### automationAccounts/configurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Gets or sets the location of the resource. | string |
| tags | Gets or sets the tags attached to the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Gets or sets configuration create or update properties. | DscConfigurationCreateOrUpdatePropertiesOrDscConfigu...(required) |


### DscConfigurationCreateOrUpdatePropertiesOrDscConfigu...

| Name | Description | Value |
|-|-|-|
| description | Gets or sets the description of the configuration. | string |
| logProgress | Gets or sets progress log option. | bool |
| logVerbose | Gets or sets verbose log option. | bool |
| parameters | Gets or sets the configuration parameters. | DscConfigurationCreateOrUpdatePropertiesParameters |
| source | Gets or sets the source. | ContentSource(required) |


### DscConfigurationCreateOrUpdatePropertiesParameters

| Name | Description | Value |
|-|-|-|
| {customized property} |  | DscConfigurationParameter |


### DscConfigurationParameter

| Name | Description | Value |
|-|-|-|
| defaultValue | Gets or sets the default value of parameter. | string |
| isMandatory | Gets or sets a Boolean value to indicate whether the parameter is mandatory or not. | bool |
| position | Get or sets the position of the parameter. | int |
| type | Gets or sets the type of the parameter. | string |


### ContentSource

| Name | Description | Value |
|-|-|-|
| hash | Gets or sets the hash. | ContentHash |
| type | Gets or sets the content source type. | 'embeddedContent''uri' |
| value | Gets or sets the value of the content. This is based on the content source type. | string |
| version | Gets or sets the version of the content. | string |


### ContentHash

| Name | Description | Value |
|-|-|-|
| algorithm | Gets or sets the content hash algorithm used to hash the content. | string (required) |
| value | Gets or sets expected hash value of the content. | string (required) |


