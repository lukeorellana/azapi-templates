```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.TimeSeriesInsights/environments/referenceDataSets@2021-06-30-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      dataStringComparisonBehavior = "string"
      keyProperties = [
        {
          name = "string"
          type = "string"
        }
      ]
    }
  })
}

```

### environments/referenceDataSets

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 3-63Valid characters:Alphanumerics |
| location | The location of the resource. | string (required) |
| tags | Key-value pairs of additional properties for the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:environments |
| properties | Properties used to create a reference data set. | ReferenceDataSetCreationPropertiesOrReferenceDataSet...(required) |


### ReferenceDataSetCreationPropertiesOrReferenceDataSet...

| Name | Description | Value |
|-|-|-|
| dataStringComparisonBehavior | The reference data set key comparison behavior can be set using this property. By default, the value is 'Ordinal' - which means case sensitive key comparison will be performed while joining reference data with events or while adding new reference data. When 'OrdinalIgnoreCase' is set, case insensitive comparison will be used. | 'Ordinal''OrdinalIgnoreCase' |
| keyProperties | The list of key properties for the reference data set. | ReferenceDataSetKeyProperty[] (required) |


### ReferenceDataSetKeyProperty

| Name | Description | Value |
|-|-|-|
| name | The name of the key property. | string |
| type | The type of the key property. | 'Bool''DateTime''Double''String' |


