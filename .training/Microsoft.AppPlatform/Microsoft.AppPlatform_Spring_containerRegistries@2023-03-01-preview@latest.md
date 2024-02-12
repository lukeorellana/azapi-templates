```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/containerRegistries@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      credentials = {
        type = "string"
        // For remaining properties, see ContainerRegistryCredentials objects
      }
    }
  })
}

```

### Spring/containerRegistries

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:Spring |
| properties | Properties of the container registry resource payload. | ContainerRegistryProperties |


### ContainerRegistryProperties

| Name | Description | Value |
|-|-|-|
| credentials | The credentials of the container registry resource. | ContainerRegistryCredentials(required) |


### ContainerRegistryCredentials

| Name | Description | Value |
|-|-|-|
| type | Set the object type | BasicAuth(required) |


### ContainerRegistryBasicCredentials

| Name | Description | Value |
|-|-|-|
| type | The credential type of the container registry credentials. | 'BasicAuth' (required) |
| password | The password of the Container Registry. | string (required) |
| server | The login server of the Container Registry. | string (required) |
| username | The username of the Container Registry. | string (required) |


