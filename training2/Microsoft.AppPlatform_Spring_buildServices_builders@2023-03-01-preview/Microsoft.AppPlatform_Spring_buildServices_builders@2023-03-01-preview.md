```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/buildServices/builders@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      buildpackGroups = [
        {
          buildpacks = [
            {
              id = "string"
            }
          ]
          name = "string"
        }
      ]
      stack = {
        id = "string"
        version = "string"
      }
    }
  })
}

```

### Spring/buildServices/builders

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: buildServices |
| properties | Property of the Builder resource. | BuilderProperties |


### BuilderProperties

| Name | Description | Value |
|-|-|-|
| buildpackGroups | Builder buildpack groups. | BuildpacksGroupProperties[] |
| stack | Builder cluster stack property. | StackProperties |


### BuildpacksGroupProperties

| Name | Description | Value |
|-|-|-|
| buildpacks | Buildpacks in the buildpack group | BuildpackProperties[] |
| name | Buildpack group name | string |


### BuildpackProperties

| Name | Description | Value |
|-|-|-|
| id | Id of the buildpack | string |


### StackProperties

| Name | Description | Value |
|-|-|-|
| id | Id of the ClusterStack. | string |
| version | Version of the ClusterStack | string |


