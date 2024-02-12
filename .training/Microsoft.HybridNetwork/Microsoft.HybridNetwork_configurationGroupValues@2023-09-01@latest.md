```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridNetwork/configurationGroupValues@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      configurationGroupSchemaResourceReference = {
        idType = "string"
        // For remaining properties, see DeploymentResourceIdReference objects
      }
      configurationType = "string"
      // For remaining properties, see ConfigurationGroupValuePropertiesFormat objects
    }
  })
}

```

### configurationGroupValues

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Hybrid configuration group value properties. | ConfigurationGroupValuePropertiesFormat |


### ConfigurationGroupValuePropertiesFormat

| Name | Description | Value |
|-|-|-|
| configurationGroupSchemaResourceReference | The configuration group schema resource reference. | DeploymentResourceIdReference |
| configurationType | Set the object type | OpenSecret(required) |


### DeploymentResourceIdReference

| Name | Description | Value |
|-|-|-|
| idType | Set the object type | OpenSecret(required) |


### OpenDeploymentResourceReference

| Name | Description | Value |
|-|-|-|
| idType | The resource reference arm id type. | 'Open' (required) |
| id | Resource ID. | string |


### SecretDeploymentResourceReference

| Name | Description | Value |
|-|-|-|
| idType | The resource reference arm id type. | 'Secret' (required) |
| id | Resource ID. | stringConstraints:Sensitive value. Pass in as a secure parameter. |


### ConfigurationValueWithoutSecrets

| Name | Description | Value |
|-|-|-|
| configurationType | The value which indicates if configuration values are secrets | 'Open' (required) |
| configurationValue | Name and value pairs that define the configuration value. It can be a well formed escaped JSON string. | string |


### ConfigurationValueWithSecrets

| Name | Description | Value |
|-|-|-|
| configurationType | The value which indicates if configuration values are secrets | 'Secret' (required) |
| secretConfigurationValue | Name and value pairs that define the configuration value secrets. It can be a well formed escaped JSON string. | stringConstraints:Sensitive value. Pass in as a secure parameter. |


