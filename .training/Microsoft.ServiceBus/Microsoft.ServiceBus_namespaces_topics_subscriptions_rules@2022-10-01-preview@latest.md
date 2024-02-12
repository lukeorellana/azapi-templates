```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/topics/subscriptions/rules@2022-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      action = {
        compatibilityLevel = int
        requiresPreprocessing = bool
        sqlExpression = "string"
      }
      correlationFilter = {
        contentType = "string"
        correlationId = "string"
        label = "string"
        messageId = "string"
        properties = {}
        replyTo = "string"
        replyToSessionId = "string"
        requiresPreprocessing = bool
        sessionId = "string"
        to = "string"
      }
      filterType = "string"
      sqlFilter = {
        compatibilityLevel = int
        requiresPreprocessing = bool
        sqlExpression = "string"
      }
    }
  })
}

```

### namespaces/topics/subscriptions/rules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-50Valid characters:Alphanumerics, periods, hyphens, and underscores.Start and end with alphnumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:subscriptions |
| properties | Properties of Rule resource | Ruleproperties |


### Ruleproperties

| Name | Description | Value |
|-|-|-|
| action | Represents the filter actions which are allowed for the transformation of a message that have been matched by a filter expression. | Action |
| correlationFilter | Properties of correlationFilter | CorrelationFilter |
| filterType | Filter type that is evaluated against a BrokeredMessage. | 'CorrelationFilter''SqlFilter' |
| sqlFilter | Properties of sqlFilter | SqlFilter |


### Action

| Name | Description | Value |
|-|-|-|
| compatibilityLevel | This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20. | int |
| requiresPreprocessing | Value that indicates whether the rule action requires preprocessing. | bool |
| sqlExpression | SQL expression. e.g. MyProperty='ABC' | string |


### CorrelationFilter

| Name | Description | Value |
|-|-|-|
| contentType | Content type of the message. | string |
| correlationId | Identifier of the correlation. | string |
| label | Application specific label. | string |
| messageId | Identifier of the message. | string |
| properties | dictionary object for custom filters | object |
| replyTo | Address of the queue to reply to. | string |
| replyToSessionId | Session identifier to reply to. | string |
| requiresPreprocessing | Value that indicates whether the rule action requires preprocessing. | bool |
| sessionId | Session identifier. | string |
| to | Address to send to. | string |


### SqlFilter

| Name | Description | Value |
|-|-|-|
| compatibilityLevel | This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20. | int |
| requiresPreprocessing | Value that indicates whether the rule action requires preprocessing. | bool |
| sqlExpression | The SQL expression. e.g. MyProperty='ABC' | string |


