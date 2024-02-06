## Microsoft.CustomerInsights/hubs@2017-04-26

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs@2017-04-26"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      hubBillingInfo = {
        maxUnits = int
        minUnits = int
        skuName = "string"
      }
      tenantFeatures = int
    }
  })
}

```

### hubs

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-64Valid characters:Alphanumerics.Start with letter. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of hub. | HubPropertiesFormat |


### HubPropertiesFormat

| Name | Description | Value |
|-|-|-|
| hubBillingInfo | Billing settings of the hub. | HubBillingInfoFormat |
| tenantFeatures | The bit flags for enabled hub features. Bit 0 is set to 1 indicates graph is enabled, or disabled if set to 0. Bit 1 is set to 1 indicates the hub is disabled, or enabled if set to 0. | int |


### HubBillingInfoFormat

| Name | Description | Value |
|-|-|-|
| maxUnits | The maximum number of units can be used.  One unit is 10,000 Profiles and 100,000 Interactions. | int |
| minUnits | The minimum number of units will be billed. One unit is 10,000 Profiles and 100,000 Interactions. | int |
| skuName | The sku name. | string |
## Microsoft.CustomerInsights/hubs/authorizationPolicies@2017-04-26

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs/authorizationPolicies@2017-04-26"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      permissions = [
        "string"
      ]
      primaryKey = "string"
      secondaryKey = "string"
    }
  })
}

```

### hubs/authorizationPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-50Valid characters:Alphanumerics, underscores, and periods.Start and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hubs |
| properties | The authorization policy. | AuthorizationPolicy |


### AuthorizationPolicy

| Name | Description | Value |
|-|-|-|
| permissions | The permissions associated with the policy. | String array containing any of:'Manage''Read''Write' (required) |
| primaryKey | Primary key associated with the policy. | string |
| secondaryKey | Secondary key associated with the policy. | string |
## Microsoft.CustomerInsights/hubs/connectors@2017-04-26

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs/connectors@2017-04-26"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      connectorName = "string"
      connectorProperties = {}
      connectorType = "string"
      description = "string"
      displayName = "string"
      isInternal = bool
    }
  })
}

```

### hubs/connectors

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-128Valid characters:Alphanumerics and underscores.Start with letter. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hubs |
| properties | Properties of connector. | Connector |


### Connector

| Name | Description | Value |
|-|-|-|
| connectorName | Name of the connector. | string |
| connectorProperties | The connector properties. | object (required) |
| connectorType | Type of connector. | 'AzureBlob''CRM''ExchangeOnline''None''Outbound''Salesforce' (required) |
| description | Description of the connector. | string |
| displayName | Display name of the connector. | string |
| isInternal | If this is an internal connector. | bool |
## Microsoft.CustomerInsights/hubs/connectors/mappings@2017-04-26

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs/connectors/mappings@2017-04-26"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      connectorType = "string"
      description = "string"
      displayName = "string"
      entityType = "string"
      entityTypeName = "string"
      mappingProperties = {
        availability = {
          frequency = "string"
          interval = int
        }
        completeOperation = {
          completionOperationType = "string"
          destinationFolder = "string"
        }
        errorManagement = {
          errorLimit = int
          errorManagementType = "string"
        }
        fileFilter = "string"
        folderPath = "string"
        format = {
          acceptLanguage = "string"
          arraySeparator = "string"
          columnDelimiter = "string"
          formatType = "TextFormat"
          quoteCharacter = "string"
          quoteEscapeCharacter = "string"
        }
        hasHeader = bool
        structure = [
          {
            columnName = "string"
            customFormatSpecifier = "string"
            isEncrypted = bool
            propertyName = "string"
          }
        ]
      }
    }
  })
}

```

### hubs/connectors/mappings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-128Valid characters:Alphanumerics and underscores.Start with letter. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:connectors |
| properties | The connector mapping definition. | ConnectorMapping |


### ConnectorMapping

| Name | Description | Value |
|-|-|-|
| connectorType | Type of connector. | 'AzureBlob''CRM''ExchangeOnline''None''Outbound''Salesforce' |
| description | The description of the connector mapping. | string |
| displayName | Display name for the connector mapping. | string |
| entityType | Defines which entity type the file should map to. | 'Interaction''None''Profile''Relationship' (required) |
| entityTypeName | The mapping entity name. | string (required) |
| mappingProperties | The properties of the mapping. | ConnectorMappingProperties(required) |


### ConnectorMappingProperties

| Name | Description | Value |
|-|-|-|
| availability | The availability of mapping property. | ConnectorMappingAvailability(required) |
| completeOperation | The operation after import is done. | ConnectorMappingCompleteOperation(required) |
| errorManagement | The error management setting for the mapping. | ConnectorMappingErrorManagement(required) |
| fileFilter | The file filter for the mapping. | string |
| folderPath | The folder path for the mapping. | string |
| format | The format of mapping property. | ConnectorMappingFormat(required) |
| hasHeader | If the file contains a header or not. | bool |
| structure | Ingestion mapping information at property level. | ConnectorMappingStructure[] (required) |


### ConnectorMappingAvailability

| Name | Description | Value |
|-|-|-|
| frequency | The frequency to update. | 'Day''Hour''Minute''Month''Week' |
| interval | The interval of the given frequency to use. | int (required) |


### ConnectorMappingCompleteOperation

| Name | Description | Value |
|-|-|-|
| completionOperationType | The type of completion operation. | 'DeleteFile''DoNothing''MoveFile' |
| destinationFolder | The destination folder where files will be moved to once the import is done. | string |


### ConnectorMappingErrorManagement

| Name | Description | Value |
|-|-|-|
| errorLimit | The error limit allowed while importing data. | int |
| errorManagementType | The type of error management to use for the mapping. | 'RejectAndContinue''RejectUntilLimit''StopImport' (required) |


### ConnectorMappingFormat

| Name | Description | Value |
|-|-|-|
| acceptLanguage | The oData language. | string |
| arraySeparator | Character separating array elements. | string |
| columnDelimiter | The character that signifies a break between columns. | string |
| formatType | The type mapping format. | 'TextFormat' (required) |
| quoteCharacter | Quote character, used to indicate enquoted fields. | string |
| quoteEscapeCharacter | Escape character for quotes, can be the same as the quoteCharacter. | string |


### ConnectorMappingStructure

| Name | Description | Value |
|-|-|-|
| columnName | The column name of the import file. | string (required) |
| customFormatSpecifier | Custom format specifier for input parsing. | string |
| isEncrypted | Indicates if the column is encrypted. | bool |
| propertyName | The property name of the mapping entity. | string (required) |
## Microsoft.CustomerInsights/hubs/interactions@2017-04-26

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
## Microsoft.CustomerInsights/hubs/kpi@2017-04-26

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs/kpi@2017-04-26"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aliases = [
        {
          aliasName = "string"
          expression = "string"
        }
      ]
      calculationWindow = "string"
      calculationWindowFieldName = "string"
      description = {}
      displayName = {}
      entityType = "string"
      entityTypeName = "string"
      expression = "string"
      extracts = [
        {
          expression = "string"
          extractName = "string"
        }
      ]
      filter = "string"
      function = "string"
      groupBy = [
        "string"
      ]
      thresHolds = {
        increasingKpi = bool
        lowerLimit = int
        upperLimit = int
      }
      unit = "string"
    }
  })
}

```

### hubs/kpi

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-512Valid characters:Alphanumerics and underscores.Start with letter. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hubs |
| properties | Defines the KPI Threshold limits. | KpiDefinition |


### KpiDefinition

| Name | Description | Value |
|-|-|-|
| aliases | The aliases. | KpiAlias[] |
| calculationWindow | The calculation window. | 'Day''Hour''Lifetime''Month''Week' (required) |
| calculationWindowFieldName | Name of calculation window field. | string |
| description | Localized description for the KPI. | object |
| displayName | Localized display name for the KPI. | object |
| entityType | The mapping entity type. | 'Interaction''None''Profile''Relationship' (required) |
| entityTypeName | The mapping entity name. | string (required) |
| expression | The computation expression for the KPI. | string (required) |
| extracts | The KPI extracts. | KpiExtract[] |
| filter | The filter expression for the KPI. | string |
| function | The computation function for the KPI. | 'Avg''Count''CountDistinct''Last''Max''Min''None''Sum' (required) |
| groupBy | the group by properties for the KPI. | string[] |
| thresHolds | The KPI thresholds. | KpiThresholds |
| unit | The unit of measurement for the KPI. | string |


### KpiAlias

| Name | Description | Value |
|-|-|-|
| aliasName | KPI alias name. | string (required) |
| expression | The expression. | string (required) |


### KpiExtract

| Name | Description | Value |
|-|-|-|
| expression | The expression. | string (required) |
| extractName | KPI extract name. | string (required) |


### KpiThresholds

| Name | Description | Value |
|-|-|-|
| increasingKpi | Whether or not the KPI is an increasing KPI. | bool (required) |
| lowerLimit | The lower threshold limit. | int (required) |
| upperLimit | The upper threshold limit. | int (required) |
## Microsoft.CustomerInsights/hubs/links@2017-04-26

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
## Microsoft.CustomerInsights/hubs/predictions@2017-04-26

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs/predictions@2017-04-26"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoAnalyze = bool
      description = {}
      displayName = {}
      grades = [
        {
          gradeName = "string"
          maxScoreThreshold = int
          minScoreThreshold = int
        }
      ]
      involvedInteractionTypes = [
        "string"
      ]
      involvedKpiTypes = [
        "string"
      ]
      involvedRelationships = [
        "string"
      ]
      mappings = {
        grade = "string"
        reason = "string"
        score = "string"
      }
      negativeOutcomeExpression = "string"
      positiveOutcomeExpression = "string"
      predictionName = "string"
      primaryProfileType = "string"
      scopeExpression = "string"
      scoreLabel = "string"
    }
  })
}

```

### hubs/predictions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-512Valid characters:Alphanumerics and underscores.Start with letter. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hubs |
| properties | The prediction definition. | Prediction |


### Prediction

| Name | Description | Value |
|-|-|-|
| autoAnalyze | Whether do auto analyze. | bool (required) |
| description | Description of the prediction. | object |
| displayName | Display name of the prediction. | object |
| grades | The prediction grades. | PredictionGradesItem[] |
| involvedInteractionTypes | Interaction types involved in the prediction. | string[] |
| involvedKpiTypes | KPI types involved in the prediction. | string[] |
| involvedRelationships | Relationships involved in the prediction. | string[] |
| mappings | Definition of the link mapping of prediction. | PredictionMappings(required) |
| negativeOutcomeExpression | Negative outcome expression. | string (required) |
| positiveOutcomeExpression | Positive outcome expression. | string (required) |
| predictionName | Name of the prediction. | string |
| primaryProfileType | Primary profile type. | string (required) |
| scopeExpression | Scope expression. | string (required) |
| scoreLabel | Score label. | string (required) |


### PredictionGradesItem

| Name | Description | Value |
|-|-|-|
| gradeName | Name of the grade. | string |
| maxScoreThreshold | Maximum score threshold. | int |
| minScoreThreshold | Minimum score threshold. | int |


### PredictionMappings

| Name | Description | Value |
|-|-|-|
| grade | The grade of the link mapping. | string (required) |
| reason | The reason of the link mapping. | string (required) |
| score | The score of the link mapping. | string (required) |
## Microsoft.CustomerInsights/hubs/profiles@2017-04-26

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
## Microsoft.CustomerInsights/hubs/relationshipLinks@2017-04-26

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
## Microsoft.CustomerInsights/hubs/relationships@2017-04-26

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
## Microsoft.CustomerInsights/hubs/roleAssignments@2017-04-26

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs/roleAssignments@2017-04-26"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      conflationPolicies = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      connectors = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      description = {}
      displayName = {}
      interactions = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      kpis = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      links = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      principals = [
        {
          principalId = "string"
          principalMetadata = {}
          principalType = "string"
        }
      ]
      profiles = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      relationshipLinks = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      relationships = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      role = "string"
      roleAssignments = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      sasPolicies = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      segments = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      views = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      widgetTypes = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
    }
  })
}

```

### hubs/roleAssignments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-128Valid characters:Alphanumerics and underscores.Start with letter. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hubs |
| properties | The Role Assignment definition. | RoleAssignment |


### RoleAssignment

| Name | Description | Value |
|-|-|-|
| conflationPolicies | Widget types set for the assignment. | ResourceSetDescription |
| connectors | Connectors set for the assignment. | ResourceSetDescription |
| description | Localized description for the metadata. | object |
| displayName | Localized display names for the metadata. | object |
| interactions | Interactions set for the assignment. | ResourceSetDescription |
| kpis | Kpis set for the assignment. | ResourceSetDescription |
| links | Links set for the assignment. | ResourceSetDescription |
| principals | The principals being assigned to. | AssignmentPrincipal[] (required) |
| profiles | Profiles set for the assignment. | ResourceSetDescription |
| relationshipLinks | The Role assignments set for the relationship links. | ResourceSetDescription |
| relationships | The Role assignments set for the relationships. | ResourceSetDescription |
| role | Type of roles. | 'Admin''DataAdmin''DataReader''ManageAdmin''ManageReader''Reader' (required) |
| roleAssignments | The Role assignments set for the assignment. | ResourceSetDescription |
| sasPolicies | Sas Policies set for the assignment. | ResourceSetDescription |
| segments | The Role assignments set for the assignment. | ResourceSetDescription |
| views | Views set for the assignment. | ResourceSetDescription |
| widgetTypes | Widget types set for the assignment. | ResourceSetDescription |


### ResourceSetDescription

| Name | Description | Value |
|-|-|-|
| elements | The elements included in the set. | string[] |
| exceptions | The elements that are not included in the set, in case elements contains '*' indicating 'all'. | string[] |


### AssignmentPrincipal

| Name | Description | Value |
|-|-|-|
| principalId | The principal id being assigned to. | string (required) |
| principalMetadata | Other metadata for the principal. | object |
| principalType | The Type of the principal ID. | string (required) |
## Microsoft.CustomerInsights/hubs/views@2017-04-26

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs/views@2017-04-26"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      definition = "string"
      displayName = {}
      userId = "string"
    }
  })
}

```

### hubs/views

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-512Valid characters:Alphanumerics and underscores.Start with letter. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hubs |
| properties | The view in Customer 360 web application. | View |


### View

| Name | Description | Value |
|-|-|-|
| definition | View definition. | string (required) |
| displayName | Localized display name for the view. | object |
| userId | the user ID. | string |
