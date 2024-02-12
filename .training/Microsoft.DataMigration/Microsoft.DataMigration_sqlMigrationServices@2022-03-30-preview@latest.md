```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataMigration/sqlMigrationServices@2022-03-30-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
  })
}

```

### sqlMigrationServices

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location |  | string |
| tags | Dictionary of {string} | Dictionary of tag names and values. SeeTags in templates |
| properties | The SQL Migration Service properties. | SqlMigrationServiceProperties |


