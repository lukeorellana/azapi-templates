```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/namespaces/eventhubs/consumergroups@2022-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      userMetadata = "string"
    }
  })
}

```

### namespaces/eventhubs/consumergroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-50Valid characters:Alphanumerics, periods, hyphens and underscores.Start and end with letter or number. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:eventhubs |
| properties | Single item in List or Get Consumer group operation | ConsumerGroupProperties |


### ConsumerGroupProperties

| Name | Description | Value |
|-|-|-|
| userMetadata | User Metadata is a placeholder to store user-defined string data with maximum length 1024. e.g. it can be used to store descriptive data, such as list of teams and their contact information also user-defined configuration settings can be stored. | string |


