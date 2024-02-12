```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs/relationships@2017-04-26"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      cardinality = "string"
      description = {}
      displayName = {}
      expiryDateTimeUtc = "string"
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
      lookupMappings = [
        {
          fieldMappings = [
            {
              profileFieldName = "string"
              relatedProfileKeyProperty = "string"
            }
          ]
        }
      ]
      profileType = "string"
      relatedProfileType = "string"
    }
  })
}

```

### hubs/relationships

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-512Valid characters:Alphanumerics and underscores.Start with letter. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hubs |
| properties | The definition of Relationship. | RelationshipDefinition |


### RelationshipDefinition

| Name | Description | Value |
|-|-|-|
| cardinality | The Relationship Cardinality. | 'ManyToMany''OneToMany''OneToOne' |
| description | Localized descriptions for the Relationship. | object |
| displayName | Localized display name for the Relationship. | object |
| expiryDateTimeUtc | The expiry date time in UTC. | string |
| fields | The properties of the Relationship. | PropertyDefinition[] |
| lookupMappings | Optional property to be used to map fields in profile to their strong ids in related profile. | RelationshipTypeMapping[] |
| profileType | Profile type. | string (required) |
| relatedProfileType | Related profile being referenced. | string (required) |


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


### RelationshipTypeMapping

| Name | Description | Value |
|-|-|-|
| fieldMappings | Maps a profile property with the StrongId of related profile. This is an array to support StrongIds that are composite key as well. | RelationshipTypeFieldMapping[] (required) |


### RelationshipTypeFieldMapping

| Name | Description | Value |
|-|-|-|
| profileFieldName | Specifies the fieldName in profile. | string (required) |
| relatedProfileKeyProperty | Specifies the KeyProperty (from StrongId) of the related profile. | string (required) |


