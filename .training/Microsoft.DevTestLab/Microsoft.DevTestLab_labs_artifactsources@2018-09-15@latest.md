```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/artifactsources@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      armTemplateFolderPath = "string"
      branchRef = "string"
      displayName = "string"
      folderPath = "string"
      securityToken = "string"
      sourceType = "string"
      status = "string"
      uri = "string"
    }
  })
}

```

### labs/artifactsources

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:labs |
| properties | The properties of the resource. | ArtifactSourceProperties(required) |


### ArtifactSourceProperties

| Name | Description | Value |
|-|-|-|
| armTemplateFolderPath | The folder containing Azure Resource Manager templates. | string |
| branchRef | The artifact source's branch reference. | string |
| displayName | The artifact source's display name. | string |
| folderPath | The folder containing artifacts. | string |
| securityToken | The security token to authenticate to the artifact source. | string |
| sourceType | The artifact source's type. | 'GitHub''StorageAccount''VsoGit' |
| status | Indicates if the artifact source is enabled (values: Enabled, Disabled). | 'Disabled''Enabled' |
| uri | The artifact source's URI. | string |


