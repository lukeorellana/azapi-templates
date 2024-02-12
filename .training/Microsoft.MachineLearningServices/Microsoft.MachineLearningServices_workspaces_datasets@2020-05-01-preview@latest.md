```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/datasets@2020-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    datasetType = "string"
    parameters = {
      header = "string"
      includePath = bool
      partitionFormat = "string"
      path = {
        dataPath = {
          datastoreName = "string"
          relativePath = "string"
        }
        httpUrl = "string"
      }
      query = {
        datastoreName = "string"
        query = "string"
      }
      separator = "string"
      sourceType = "string"
    }
    registration = {
      description = "string"
      name = "string"
      tags = {
        {customized property} = "string"
      }
    }
    skipValidation = bool
    timeSeries = {
      coarseGrainTimestamp = "string"
      fineGrainTimestamp = "string"
    }
  })
}

```

### workspaces/datasets

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| datasetType | Specifies dataset type. | 'file''tabular' (required) |
| parameters |  | DatasetCreateRequestParameters(required) |
| registration |  | DatasetCreateRequestRegistration(required) |
| skipValidation | Skip validation that ensures data can be loaded from the dataset before registration. | bool |
| timeSeries |  | DatasetCreateRequestTimeSeries |


### DatasetCreateRequestParameters

| Name | Description | Value |
|-|-|-|
| header | Header type. | 'all_files_have_same_headers''combine_all_files_headers''no_headers''only_first_file_has_headers' |
| includePath | Boolean to keep path information as column in the dataset. Defaults to False. This is useful when reading multiple files, and want to know which file a particular record originated from, or to keep useful information in file path. | bool |
| partitionFormat | The partition information of each path will be extracted into columns based on the specified format. Format part '{column_name}' creates string column, and '{column_name:yyyy/MM/dd/HH/mm/ss}' creates datetime column, where 'yyyy', 'MM', 'dd', 'HH', 'mm' and 'ss' are used to extract year, month, day, hour, minute and second for the datetime type. The format should start from the position of first partition key until the end of file path. For example, given the path '../USA/2019/01/01/data.parquet' where the partition is by country/region and time, partition_format='/{CountryOrRegion}/{PartitionDate:yyyy/MM/dd}/data.csv' creates a string column 'CountryOrRegion' with the value 'USA' and a datetime column 'PartitionDate' with the value '2019-01-01 | string |
| path |  | DatasetCreateRequestParametersPath |
| query |  | DatasetCreateRequestParametersQuery |
| separator | The separator used to split columns for 'delimited_files' sourceType. | string |
| sourceType | Data source type. | 'delimited_files''json_lines_files''parquet_files' |


### DatasetCreateRequestParametersPath

| Name | Description | Value |
|-|-|-|
| dataPath |  | DatasetCreateRequestParametersPathDataPath |
| httpUrl | The Http URL. | string |


### DatasetCreateRequestParametersPathDataPath

| Name | Description | Value |
|-|-|-|
| datastoreName | The datastore name. | string |
| relativePath | Path within the datastore. | string |


### DatasetCreateRequestParametersQuery

| Name | Description | Value |
|-|-|-|
| datastoreName | The SQL/PostgreSQL/MySQL datastore name. | string |
| query | SQL Quey. | string |


### DatasetCreateRequestRegistration

| Name | Description | Value |
|-|-|-|
| description | The description for the dataset. | string |
| name | The name of the dataset. | string |
| tags | Tags associated with the dataset. | object |


### DatasetCreateRequestTimeSeries

| Name | Description | Value |
|-|-|-|
| coarseGrainTimestamp | Column name to be used as CoarseGrainTimestamp. Can only be used if 'fineGrainTimestamp' is specified and cannot be same as 'fineGrainTimestamp'. | string |
| fineGrainTimestamp | Column name to be used as FineGrainTimestamp | string |


