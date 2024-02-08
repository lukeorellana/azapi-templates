```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataMigration/services/projects/files@2022-03-30-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      extension = "string"
      filePath = "string"
      mediaType = "string"
    }
    etag = "string"
  })
}

```

### services/projects/files

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:projects |
| etag | HTTP strong entity tag value. This is ignored if submitted. | string |
| properties | Custom file properties | ProjectFileProperties |


### ProjectFileProperties

| Name | Description | Value |
|-|-|-|
| extension | Optional File extension. If submitted it should not have a leading period and must match the extension from filePath. | string |
| filePath | Relative path of this file resource. This property can be set when creating or updating the file resource. | string |
| mediaType | File content type. This property can be modified to reflect the file content type. | string |


