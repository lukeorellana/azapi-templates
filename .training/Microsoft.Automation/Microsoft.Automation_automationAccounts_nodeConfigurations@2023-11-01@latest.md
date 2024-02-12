```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/nodeConfigurations@2023-11-01"
  name = "string"
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

### automationAccounts/nodeConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| tags | Gets or sets the tags attached to the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Node configuration properties | DscNodeConfigurationCreateOrUpdateParametersProperti... |


### DscNodeConfigurationCreateOrUpdateParametersProperti...

| Name | Description | Value |
|-|-|-|
| configuration | Gets or sets the configuration of the node. | DscConfigurationAssociationProperty(required) |
| incrementNodeConfigurationBuild | If a new build version of NodeConfiguration is required. | bool |
| source | Gets or sets the source. | ContentSourceOrDscNodeConfigurationPropertiesSource(required) |


### DscConfigurationAssociationProperty

| Name | Description | Value |
|-|-|-|
| name | Gets or sets the name of the Dsc configuration. | string |


### ContentSourceOrDscNodeConfigurationPropertiesSource

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


