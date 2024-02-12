```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DeploymentManager/artifactSources@2019-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      artifactRoot = "string"
      authentication = {
        type = "string"
        // For remaining properties, see Authentication objects
      }
      sourceType = "string"
    }
  })
}

```

### artifactSources

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | The properties that define the artifact source. | ArtifactSourceProperties |


### ArtifactSourceProperties

| Name | Description | Value |
|-|-|-|
| artifactRoot | The path from the location that the 'authentication' property [say, a SAS URI to the blob container] refers to, to the location of the artifacts. This can be used to differentiate different versions of the artifacts. Or, different types of artifacts like binaries or templates. The location referenced by the authentication property concatenated with this optional artifactRoot path forms the artifact source location where the artifacts are expected to be found. | string |
| authentication | The authentication method to use to access the artifact source. | Authentication(required) |
| sourceType | The type of artifact source used. | string (required) |


### Authentication

| Name | Description | Value |
|-|-|-|
| type | Set the object type | Sas(required) |


### SasAuthentication

| Name | Description | Value |
|-|-|-|
| type | The authentication type | 'Sas' (required) |
| properties | The SAS properties | SasProperties |


### SasProperties

| Name | Description | Value |
|-|-|-|
| sasUri | The SAS URI to the Azure Storage blob container. Any offset from the root of the container to where the artifacts are located can be defined in the artifactRoot. | string (required) |


