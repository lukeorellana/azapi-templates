```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logic/integrationAccounts/rosettanetprocessconfigurations@2016-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      activitySettings = {
        acknowledgmentOfReceiptSettings = {
          isNonRepudiationRequired = bool
          timeToAcknowledgeInSeconds = int
        }
        activityBehavior = {
          actionType = "string"
          isAuthorizationRequired = bool
          isSecuredTransportRequired = bool
          nonRepudiationOfOriginAndContent = bool
          persistentConfidentialityScope = "string"
          responseType = "string"
          retryCount = int
          timeToPerformInSeconds = int
        }
        activityType = "string"
      }
      description = "string"
      initiatorRoleSettings = {
        action = "string"
        businessDocument = {
          description = "string"
          name = "string"
          version = "string"
        }
        description = "string"
        role = "string"
        roleType = "string"
        service = "string"
        serviceClassification = "string"
      }
      metadata = {}
      processCode = "string"
      processName = "string"
      processVersion = "string"
      responderRoleSettings = {
        action = "string"
        businessDocument = {
          description = "string"
          name = "string"
          version = "string"
        }
        description = "string"
        role = "string"
        roleType = "string"
        service = "string"
        serviceClassification = "string"
      }
    }
  })
}

```

### integrationAccounts/rosettanetprocessconfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, hyphens, underscores, periods, and parenthesis. |
| location | The resource location. | string |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:integrationAccounts |
| properties | The integration account RosettaNet process configuration properties. | IntegrationAccountRosettaNetProcessConfigurationProp...(required) |


### IntegrationAccountRosettaNetProcessConfigurationProp...

| Name | Description | Value |
|-|-|-|
| activitySettings | The RosettaNet process configuration activity settings. | RosettaNetPipActivitySettings(required) |
| description | The integration account RosettaNet ProcessConfiguration properties. | string |
| initiatorRoleSettings | The RosettaNet initiator role settings. | RosettaNetPipRoleSettings(required) |
| metadata | The metadata. | object |
| processCode | The integration account RosettaNet process code. | string (required) |
| processName | The integration account RosettaNet process name. | string (required) |
| processVersion | The integration account RosettaNet process version. | string (required) |
| responderRoleSettings | The RosettaNet responder role settings. | RosettaNetPipRoleSettings(required) |


### RosettaNetPipActivitySettings

| Name | Description | Value |
|-|-|-|
| acknowledgmentOfReceiptSettings | The RosettaNet ProcessConfiguration acknowledgement settings. | RosettaNetPipAcknowledgmentOfReceiptSettings(required) |
| activityBehavior | The RosettaNet ProcessConfiguration activity behavior. | RosettaNetPipActivityBehavior(required) |
| activityType | The RosettaNet ProcessConfiguration activity type. | 'BusinessTransaction''InformationDistribution''NotSpecified''Notification''QueryResponse''RequestConfirm''RequestResponse' (required) |


### RosettaNetPipAcknowledgmentOfReceiptSettings

| Name | Description | Value |
|-|-|-|
| isNonRepudiationRequired | The non-repudiation is required or not. | bool (required) |
| timeToAcknowledgeInSeconds | The time to acknowledge in seconds. | int (required) |


### RosettaNetPipActivityBehavior

| Name | Description | Value |
|-|-|-|
| actionType | The value indicating whether the RosettaNet PIP is used for a single action. | 'DoubleAction''NotSpecified''SingleAction' (required) |
| isAuthorizationRequired | The value indicating whether authorization is required. | bool (required) |
| isSecuredTransportRequired | The value indicating whether secured transport is required. | bool (required) |
| nonRepudiationOfOriginAndContent | The value indicating whether non-repudiation is for origin and content. | bool (required) |
| persistentConfidentialityScope | The persistent confidentiality encryption scope. | 'None''NotSpecified''Payload''PayloadContainer' (required) |
| responseType | The value indicating whether the RosettaNet PIP communication is synchronous. | 'Async''NotSpecified''Sync' (required) |
| retryCount | The value indicating retry count. | int (required) |
| timeToPerformInSeconds | The time to perform in seconds. | int (required) |


### RosettaNetPipRoleSettings

| Name | Description | Value |
|-|-|-|
| action | The action name. | string (required) |
| businessDocument | The RosettaNet ProcessConfiguration business document. | RosettaNetPipBusinessDocument(required) |
| description | The description. | string |
| role | The role name. | string (required) |
| roleType | The RosettaNet ProcessConfiguration role type. | 'Employee''Functional''NotSpecified''Organizational' (required) |
| service | The service name. | string (required) |
| serviceClassification | The service classification name. | string (required) |


### RosettaNetPipBusinessDocument

| Name | Description | Value |
|-|-|-|
| description | The business document description. | string |
| name | The business document name. | string (required) |
| version | The business document version. | string (required) |


