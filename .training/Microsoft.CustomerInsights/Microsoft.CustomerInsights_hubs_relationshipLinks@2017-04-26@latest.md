```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs/relationshipLinks@2017-04-26"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = {}
      displayName = {}
      interactionType = "string"
      mappings = [
        {
          interactionFieldName = "string"
          linkType = "string"
          relationshipFieldName = "string"
        }
      ]
      profilePropertyReferences = [
        {
          interactionPropertyName = "string"
          profilePropertyName = "string"
        }
      ]
      relatedProfilePropertyReferences = [
        {
          interactionPropertyName = "string"
          profilePropertyName = "string"
        }
      ]
      relationshipName = "string"
    }
  })
}

```

### hubs/relationshipLinks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-512Valid characters:Alphanumerics and underscores.Start with letter. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hubs |
| properties | The definition of relationship link. | RelationshipLinkDefinition |


### RelationshipLinkDefinition

| Name | Description | Value |
|-|-|-|
| description | Localized descriptions for the Relationship Link. | object |
| displayName | Localized display name for the Relationship Link. | object |
| interactionType | The InteractionType associated with the Relationship Link. | string (required) |
| mappings | The mappings between Interaction and Relationship fields. | RelationshipLinkFieldMapping[] |
| profilePropertyReferences | The property references for the Profile of the Relationship. | ParticipantProfilePropertyReference[] (required) |
| relatedProfilePropertyReferences | The property references for the Related Profile of the Relationship. | ParticipantProfilePropertyReference[] (required) |
| relationshipName | The Relationship associated with the Link. | string (required) |


### RelationshipLinkFieldMapping

| Name | Description | Value |
|-|-|-|
| interactionFieldName | The field name on the Interaction Type. | string (required) |
| linkType | Link type. | 'CopyIfNull''UpdateAlways' |
| relationshipFieldName | The field name on the Relationship metadata. | string (required) |


### ParticipantProfilePropertyReference

| Name | Description | Value |
|-|-|-|
| interactionPropertyName | The source interaction property that maps to the target profile property. | string (required) |
| profilePropertyName | The target profile property that maps to the source interaction property. | string (required) |


