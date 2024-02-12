```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/namespaces/topicSpaces@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      topicTemplates = [
        "string"
      ]
    }
  })
}

```

### namespaces/topicSpaces

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | The properties of topic space. | TopicSpaceProperties |


### TopicSpaceProperties

| Name | Description | Value |
|-|-|-|
| description | Description for the Topic Space resource. | string |
| topicTemplates | The topic filters in the topic space.Example: "topicTemplates": ["devices/foo/bar","devices/topic1/+","devices/${principal.name}/${principal.attributes.keyName}" ]. | string[] |


