```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/namespaces/topics@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      eventRetentionInDays = int
      inputSchema = "CloudEventSchemaV1_0"
      publisherType = "Custom"
    }
  })
}

```

### namespaces/topics

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | Properties of the namespace topic. | NamespaceTopicProperties |


### NamespaceTopicProperties

| Name | Description | Value |
|-|-|-|
| eventRetentionInDays | Event retention for the namespace topic expressed in days. The property default value is 1 day.Min event retention duration value is 1 day and max event retention duration value is 1 day. | int |
| inputSchema | This determines the format that is expected for incoming events published to the topic. | 'CloudEventSchemaV1_0' |
| publisherType | Publisher type of the namespace topic. | 'Custom' |


