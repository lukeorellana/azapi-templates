```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs/profiles@2017-04-26"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      apiEntitySetName = "string"
      attributes = {}
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
      instancesCount = int
      largeImage = "string"
      localizedAttributes = {}
      mediumImage = "string"
      schemaItemTypeLink = "string"
      smallImage = "string"
      strongIds = [
        {
          description = {}
          displayName = {}
          keyPropertyNames = [
            "string"
          ]
          strongIdName = "string"
        }
      ]
      timestampFieldName = "string"
      typeName = "string"
    }
  })
}

```

### hubs/profiles

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-128Valid characters:Alphanumerics and underscores.Start with letter. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hubs |
| properties | The profile type definition. | ProfileTypeDefinition |


### ProfileTypeDefinition

| Name | Description | Value |
|-|-|-|
| apiEntitySetName | The api entity set name. This becomes the odata entity set name for the entity Type being referred in this object. | string |
| attributes | The attributes for the Type. | object |
| description | Localized descriptions for the property. | object |
| displayName | Localized display names for the property. | object |
| entityType | Type of entity. | 'Interaction''None''Profile''Relationship' |
| fields | The properties of the Profile. | PropertyDefinition[] |
| instancesCount | The instance count. | int |
| largeImage | Large Image associated with the Property or EntityType. | string |
| localizedAttributes | Any custom localized attributes for the Type. | object |
| mediumImage | Medium Image associated with the Property or EntityType. | string |
| schemaItemTypeLink | The schema org link. This helps ACI identify and suggest semantic models. | string |
| smallImage | Small Image associated with the Property or EntityType. | string |
| strongIds | The strong IDs. | StrongId[] |
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


### StrongId

| Name | Description | Value |
|-|-|-|
| description | Localized descriptions. | object |
| displayName | Localized display name. | object |
| keyPropertyNames | The properties which make up the unique ID. | string[] (required) |
| strongIdName | The Name identifying the strong ID. | string (required) |


