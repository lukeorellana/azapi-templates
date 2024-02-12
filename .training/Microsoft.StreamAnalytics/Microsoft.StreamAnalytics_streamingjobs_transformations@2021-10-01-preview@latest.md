```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StreamAnalytics/streamingjobs/transformations@2021-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      query = "string"
      streamingUnits = int
      validStreamingUnits = [
        int
      ]
    }
  })
}

```

### streamingjobs/transformations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 3-63Valid characters:Alphanumerics, hyphens, and underscores. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:streamingjobs |
| properties | The properties that are associated with a transformation. Required on PUT (CreateOrReplace) requests. | TransformationProperties |


### TransformationProperties

| Name | Description | Value |
|-|-|-|
| query | Specifies the query that will be run in the streaming job. You can learn more about the Stream Analytics Query Language (SAQL) here:https://msdn.microsoft.com/library/azure/dn834998. Required on PUT (CreateOrReplace) requests. | string |
| streamingUnits | Specifies the number of streaming units that the streaming job uses. | int |
| validStreamingUnits | Specifies the valid streaming units a streaming job can scale to. | int[] |


