```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs/links@2017-04-26"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = {}
      displayName = {}
      mappings = [
        {
          linkType = "string"
          sourcePropertyName = "string"
          targetPropertyName = "string"
        }
      ]
      operationType = "string"
      participantPropertyReferences = [
        {
          sourcePropertyName = "string"
          targetPropertyName = "string"
        }
      ]
      referenceOnly = bool
      sourceEntityType = "string"
      sourceEntityTypeName = "string"
      targetEntityType = "string"
      targetEntityTypeName = "string"
    }
  })
}

```

### hubs/links

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-512Valid characters:Alphanumerics and underscores.Start with letter. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hubs |
| properties | The definition of Link. | LinkDefinition |


### LinkDefinition

| Name | Description | Value |
|-|-|-|
| description | Localized descriptions for the Link. | object |
| displayName | Localized display name for the Link. | object |
| mappings | The set of properties mappings between the source and target Types. | TypePropertiesMapping[] |
| operationType | Determines whether this link is supposed to create or delete instances if Link is NOT Reference Only. | 'Delete''Upsert' |
| participantPropertyReferences | The properties that represent the participating profile. | ParticipantPropertyReference[] (required) |
| referenceOnly | Indicating whether the link is reference only link. This flag is ignored if the Mappings are defined. If the mappings are not defined and it is set to true, links processing will not create or update profiles. | bool |
| sourceEntityType | Type of source entity. | 'Interaction''None''Profile''Relationship' (required) |
| sourceEntityTypeName | Name of the source Entity Type. | string (required) |
| targetEntityType | Type of target entity. | 'Interaction''None''Profile''Relationship' (required) |
| targetEntityTypeName | Name of the target Entity Type. | string (required) |


### TypePropertiesMapping

| Name | Description | Value |
|-|-|-|
| linkType | Link type. | 'CopyIfNull''UpdateAlways' |
| sourcePropertyName | Property name on the source Entity Type. | string (required) |
| targetPropertyName | Property name on the target Entity Type. | string (required) |


### ParticipantPropertyReference

| Name | Description | Value |
|-|-|-|
| sourcePropertyName | The source property that maps to the target property. | string (required) |
| targetPropertyName | The target property that maps to the source property. | string (required) |


