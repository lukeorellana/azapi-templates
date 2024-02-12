```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/applicationAccelerators/customizedAccelerators@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      acceleratorTags = [
        "string"
      ]
      description = "string"
      displayName = "string"
      gitRepository = {
        authSetting = {
          authType = "string"
          // For remaining properties, see AcceleratorAuthSetting objects
        }
        branch = "string"
        commit = "string"
        gitTag = "string"
        intervalInSeconds = int
        url = "string"
      }
      iconUrl = "string"
    }
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

### Spring/applicationAccelerators/customizedAccelerator...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| sku | Sku of the customized accelerator resource | Sku |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:applicationAccelerators |
| properties | Customized accelerator properties payload | CustomizedAcceleratorProperties |


### CustomizedAcceleratorProperties

| Name | Description | Value |
|-|-|-|
| acceleratorTags |  | string[] |
| description |  | string |
| displayName |  | string |
| gitRepository |  | AcceleratorGitRepository(required) |
| iconUrl |  | string |


### AcceleratorGitRepository

| Name | Description | Value |
|-|-|-|
| authSetting | Properties of the auth setting payload. | AcceleratorAuthSetting(required) |
| branch | Git repository branch to be used. | string |
| commit | Git repository commit to be used. | string |
| gitTag | Git repository tag to be used. | string |
| intervalInSeconds | Interval for checking for updates to Git or image repository. | int |
| url | Git repository URL for the accelerator. | string (required) |


### AcceleratorAuthSetting

| Name | Description | Value |
|-|-|-|
| authType | Set the object type | BasicAuthPublicSSH(required) |


### AcceleratorBasicAuthSetting

| Name | Description | Value |
|-|-|-|
| authType | The type of the auth setting. | 'BasicAuth' (required) |
| caCertResourceId | Resource Id of CA certificate for https URL of Git repository. | string |
| password | Password of git repository basic auth. | string |
| username | Username of git repository basic auth. | string (required) |


### AcceleratorPublicSetting

| Name | Description | Value |
|-|-|-|
| authType | The type of the auth setting. | 'Public' (required) |
| caCertResourceId | Resource Id of CA certificate for https URL of Git repository. | string |


### AcceleratorSshSetting

| Name | Description | Value |
|-|-|-|
| authType | The type of the auth setting. | 'SSH' (required) |
| hostKey | Public SSH Key of git repository. | string |
| hostKeyAlgorithm | SSH Key algorithm of git repository. | string |
| privateKey | Private SSH Key algorithm of git repository. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | Current capacity of the target resource | int |
| name | Name of the Sku | string |
| tier | Tier of the Sku | string |


