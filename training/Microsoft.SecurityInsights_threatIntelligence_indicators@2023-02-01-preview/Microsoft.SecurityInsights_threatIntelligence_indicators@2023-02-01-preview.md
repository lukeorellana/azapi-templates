```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/threatIntelligence/indicators@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      confidence = int
      created = "string"
      createdByRef = "string"
      defanged = bool
      description = "string"
      displayName = "string"
      extensions = {}
      externalId = "string"
      externalLastUpdatedTimeUtc = "string"
      externalReferences = [
        {
          description = "string"
          externalId = "string"
          hashes = {}
          sourceName = "string"
          url = "string"
        }
      ]
      granularMarkings = [
        {
          language = "string"
          markingRef = int
          selectors = [
            "string"
          ]
        }
      ]
      indicatorTypes = [
        "string"
      ]
      killChainPhases = [
        {
          killChainName = "string"
          phaseName = "string"
        }
      ]
      labels = [
        "string"
      ]
      language = "string"
      lastUpdatedTimeUtc = "string"
      modified = "string"
      objectMarkingRefs = [
        "string"
      ]
      parsedPattern = [
        {
          patternTypeKey = "string"
          patternTypeValues = [
            {
              value = "string"
              valueType = "string"
            }
          ]
        }
      ]
      pattern = "string"
      patternType = "string"
      patternVersion = "string"
      revoked = bool
      source = "string"
      threatIntelligenceTags = [
        "string"
      ]
      threatTypes = [
        "string"
      ]
      validFrom = "string"
      validUntil = "string"
    }
    etag = "string"
  })
}

```

### threatIntelligence/indicators

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: threatIntelligence |
| etag | Etag of the azure resource | string |
| properties | Threat Intelligence Entity properties | ThreatIntelligenceIndicatorProperties |


### ThreatIntelligenceIndicatorProperties

| Name | Description | Value |
|-|-|-|
| confidence | Confidence of threat intelligence entity | int |
| created | Created by | string |
| createdByRef | Created by reference of threat intelligence entity | string |
| defanged | Is threat intelligence entity defanged | bool |
| description | Description of a threat intelligence entity | string |
| displayName | Display name of a threat intelligence entity | string |
| extensions | Extensions map | object |
| externalId | External ID of threat intelligence entity | string |
| externalLastUpdatedTimeUtc | External last updated time in UTC | string |
| externalReferences | External References | ThreatIntelligenceExternalReference[] |
| granularMarkings | Granular Markings | ThreatIntelligenceGranularMarkingModel[] |
| indicatorTypes | Indicator types of threat intelligence entities | string[] |
| killChainPhases | Kill chain phases | ThreatIntelligenceKillChainPhase[] |
| labels | Labels  of threat intelligence entity | string[] |
| language | Language of threat intelligence entity | string |
| lastUpdatedTimeUtc | Last updated time in UTC | string |
| modified | Modified by | string |
| objectMarkingRefs | Threat intelligence entity object marking references | string[] |
| parsedPattern | Parsed patterns | ThreatIntelligenceParsedPattern[] |
| pattern | Pattern of a threat intelligence entity | string |
| patternType | Pattern type of a threat intelligence entity | string |
| patternVersion | Pattern version of a threat intelligence entity | string |
| revoked | Is threat intelligence entity revoked | bool |
| source | Source of a threat intelligence entity | string |
| threatIntelligenceTags | List of tags | string[] |
| threatTypes | Threat types | string[] |
| validFrom | Valid from | string |
| validUntil | Valid until | string |


### ThreatIntelligenceExternalReference

| Name | Description | Value |
|-|-|-|
| description | External reference description | string |
| externalId | External reference ID | string |
| hashes | External reference hashes | object |
| sourceName | External reference source name | string |
| url | External reference URL | string |


### ThreatIntelligenceGranularMarkingModel

| Name | Description | Value |
|-|-|-|
| language | Language granular marking model | string |
| markingRef | marking reference granular marking model | int |
| selectors | granular marking model selectors | string[] |


### ThreatIntelligenceKillChainPhase

| Name | Description | Value |
|-|-|-|
| killChainName | Kill chainName name | string |
| phaseName | Phase name | string |


### ThreatIntelligenceParsedPattern

| Name | Description | Value |
|-|-|-|
| patternTypeKey | Pattern type key | string |
| patternTypeValues | Pattern type keys | ThreatIntelligenceParsedPatternTypeValue[] |


### ThreatIntelligenceParsedPatternTypeValue

| Name | Description | Value |
|-|-|-|
| value | Value of parsed pattern | string |
| valueType | Type of the value | string |


