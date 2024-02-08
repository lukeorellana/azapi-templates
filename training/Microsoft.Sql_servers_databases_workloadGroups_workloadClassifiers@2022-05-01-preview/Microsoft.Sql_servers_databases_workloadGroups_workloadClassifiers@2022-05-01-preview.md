```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/workloadGroups/workloadClassifiers@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      context = "string"
      endTime = "string"
      importance = "string"
      label = "string"
      memberName = "string"
      startTime = "string"
    }
  })
}

```

### servers/databases/workloadGroups/workloadClassifiers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workloadGroups |
| properties | Resource properties. | WorkloadClassifierProperties |


### WorkloadClassifierProperties

| Name | Description | Value |
|-|-|-|
| context | The workload classifier context. | string |
| endTime | The workload classifier end time for classification. | string |
| importance | The workload classifier importance. | string |
| label | The workload classifier label. | string |
| memberName | The workload classifier member name. | string (required) |
| startTime | The workload classifier start time for classification. | string |


