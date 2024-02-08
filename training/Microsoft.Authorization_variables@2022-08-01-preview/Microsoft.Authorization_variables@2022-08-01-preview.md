```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/variables@2022-08-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      columns = [
        {
          columnName = "string"
        }
      ]
    }
  })
}

```

### variables

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| properties | Properties for the variable. | PolicyVariableProperties(required) |


### PolicyVariableProperties

| Name | Description | Value |
|-|-|-|
| columns | Variable column definitions. | PolicyVariableColumn[] (required) |


### PolicyVariableColumn

| Name | Description | Value |
|-|-|-|
| columnName | The name of this policy variable column. | string (required) |


