```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs/interactions@2017-04-26"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      apiEntitySetName = "string"
      attributes = {}
      defaultDataSource = {}
      description = {}
      displayName = {}
      entityType = "string"
      fields = [
        {
          arrayValueSeparator = "string"
          enumValidValues = [
            {
              localizedValueNames = {}
              value = int
            }
          ]
          fieldName = "string"
          fieldType = "string"
          isArray = bool
          isAvailableInGraph = bool
          isEnum = bool
          isFlagEnum = bool
          isImage = bool
          isLocalizedString = bool
          isName = bool
          isRequired = bool
          maxLength = int
          propertyId = "string"
          schemaItemPropLink = "string"
        }
      ]
      idPropertyNames = [
        "string"
      ]
      instancesCount = int
      isActivity = bool
      largeImage = "string"
      localizedAttributes = {}
      mediumImage = "string"
      participantProfiles = [
        {
          description = {}
          displayName = {}
          participantName = "string"
          participantPropertyReferences = [
            {
              sourcePropertyName = "string"
              targetPropertyName = "string"
            }
          ]
          profileTypeName = "string"
          role = "string"
        }
      ]
      primaryParticipantProfilePropertyName = "string"
      schemaItemTypeLink = "string"
      smallImage = "string"
      timestampFieldName = "string"
      typeName = "string"
    }
  })
}

```

### hubs/interactions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-128Valid characters:Alphanumerics and underscores.Start with letter. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hubs |
| properties | The Interaction Type Definition | InteractionTypeDefinition |


### InteractionTypeDefinition

| Name | Description | Value |
|-|-|-|
| apiEntitySetName | The api entity set name. This becomes the odata entity set name for the entity Type being referred in this object. | string |
| attributes | The attributes for the Type. | object |
| defaultDataSource | Default data source is specifically used in cases where data source is not specified in an instance. | DataSource |
| description | Localized descriptions for the property. | object |
| displayName | Localized display names for the property. | object |
| entityType | Type of entity. | 'Interaction''None''Profile''Relationship' |
| fields | The properties of the Profile. | PropertyDefinition[] |
| idPropertyNames | The id property names. Properties which uniquely identify an interaction instance. | string[] |
| instancesCount | The instance count. | int |
| isActivity | An interaction can be tagged as an activity only during create. This enables the interaction to be editable and can enable merging of properties from multiple data sources based on precedence, which is defined at a link level. | bool |
| largeImage | Large Image associated with the Property or EntityType. | string |
| localizedAttributes | Any custom localized attributes for the Type. | object |
| mediumImage | Medium Image associated with the Property or EntityType. | string |
| participantProfiles | Profiles that participated in the interaction. | Participant[] |
| primaryParticipantProfilePropertyName | The primary participant property name for an interaction ,This is used to logically represent the agent of the interaction, Specify the participant name here from ParticipantName. | string |
| schemaItemTypeLink | The schema org link. This helps ACI identify and suggest semantic models. | string |
| smallImage | Small Image associated with the Property or EntityType. | string |
| timestampFieldName | The timestamp property name. Represents the time when the interaction or profile update happened. | string |
| typeName | The name of the entity. | string |


### PropertyDefinition

| Name | Description | Value |
|-|-|-|
| arrayValueSeparator | Array value separator for properties with isArray set. | string |
| enumValidValues | Describes valid values for an enum property. | ProfileEnumValidValuesFormat[] |
| fieldName | Name of the property. | string (required) |
| fieldType | Type of the property. | string (required) |
| isArray | Indicates if the property is actually an array of the fieldType above on the data api. | bool |
| isAvailableInGraph | Whether property is available in graph or not. | bool |
| isEnum | Indicates if the property is an enum. | bool |
| isFlagEnum | Indicates if the property is an flag enum. | bool |
| isImage | Whether the property is an Image. | bool |
| isLocalizedString | Whether the property is a localized string. | bool |
| isName | Whether the property is a name or a part of name. | bool |
| isRequired | Whether property value is required on instances, IsRequired field only for Interaction. Profile Instance will not check for required field. | bool |
| maxLength | Max length of string. Used only if type is string. | int |
| propertyId | The ID associated with the property. | string |
| schemaItemPropLink | URL encoded schema.org item prop link for the property. | string |


### ProfileEnumValidValuesFormat

| Name | Description | Value |
|-|-|-|
| localizedValueNames | Localized names of the enum member. | object |
| value | The integer value of the enum member. | int |


### Participant

| Name | Description | Value |
|-|-|-|
| description | Localized descriptions. | object |
| displayName | Localized display name. | object |
| participantName | Participant name. | string (required) |
| participantPropertyReferences | The property references. | ParticipantPropertyReference[] (required) |
| profileTypeName | Profile type name. | string (required) |
| role | The role that the participant is playing in the interaction. | string |


### ParticipantPropertyReference

| Name | Description | Value |
|-|-|-|
| sourcePropertyName | The source property that maps to the target property. | string (required) |
| targetPropertyName | The target property that maps to the source property. | string (required) |


