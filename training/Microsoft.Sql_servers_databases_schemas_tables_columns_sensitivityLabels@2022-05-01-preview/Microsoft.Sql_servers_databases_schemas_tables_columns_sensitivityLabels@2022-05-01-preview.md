```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/schemas/tables/columns/sensitivityLabels@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      informationType = "string"
      informationTypeId = "string"
      labelId = "string"
      labelName = "string"
      rank = "string"
    }
  })
}

```

### servers/databases/schemas/tables/columns/sensitivity...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: columns |
| properties | Resource properties. | SensitivityLabelProperties |


### SensitivityLabelProperties

| Name | Description | Value |
|-|-|-|
| informationType | The information type. | string |
| informationTypeId | The information type ID. | string |
| labelId | The label ID. | string |
| labelName | The label name. | string |
| rank |  | 'Critical''High''Low''Medium''None' |


