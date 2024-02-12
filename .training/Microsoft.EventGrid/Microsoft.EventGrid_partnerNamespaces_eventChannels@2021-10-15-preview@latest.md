```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/partnerNamespaces/eventChannels@2021-10-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      destination = {
        azureSubscriptionId = "string"
        partnerTopicName = "string"
        resourceGroup = "string"
      }
      expirationTimeIfNotActivatedUtc = "string"
      filter = {
        advancedFilters = [
          {
            key = "string"
            operatorType = "string"
            // For remaining properties, see AdvancedFilter objects
          }
        ]
        enableAdvancedFilteringOnArrays = bool
      }
      partnerTopicFriendlyDescription = "string"
      source = {
        source = "string"
      }
    }
  })
}

```

### partnerNamespaces/eventChannels

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:partnerNamespaces |
| properties | Properties of the EventChannel. | EventChannelProperties |


### EventChannelProperties

| Name | Description | Value |
|-|-|-|
| destination | Represents the destination of an event channel. | EventChannelDestination |
| expirationTimeIfNotActivatedUtc | Expiration time of the event channel. If this timer expires while the corresponding partner topic is never activated,the event channel and corresponding partner topic are deleted. | string |
| filter | Information about the filter for the event channel. | EventChannelFilter |
| partnerTopicFriendlyDescription | Friendly description about the topic. This can be set by the publisher/partner to show custom description for the customer partner topic.This will be helpful to remove any ambiguity of the origin of creation of the partner topic for the customer. | string |
| source | Source of the event channel. This represents a unique resource in the partner's resource model. | EventChannelSource |


### EventChannelDestination

| Name | Description | Value |
|-|-|-|
| azureSubscriptionId | Azure subscription ID of the customer creating the event channel. The partner topicassociated with the event channel will be created under this Azure subscription. | string |
| partnerTopicName | Name of the partner topic associated with the event channel. | string |
| resourceGroup | Azure Resource Group of the customer creating the event channel. The partner topicassociated with the event channel will be created under this resource group. | string |


### EventChannelFilter

| Name | Description | Value |
|-|-|-|
| advancedFilters | An array of advanced filters that are used for filtering event channels. | AdvancedFilter[] |
| enableAdvancedFilteringOnArrays | Allows advanced filters to be evaluated against an array of values instead of expecting a singular value. The default value is either false or null. | bool |


### AdvancedFilter

| Name | Description | Value |
|-|-|-|
| key | The field/property in the event based on which you want to filter. | string |
| operatorType | Set the object type | BoolEqualsIsNotNullIsNullOrUndefinedNumberGreaterThanNumberGreaterThanOrEqualsNumberInNumberInRangeNumberLessThanNumberLessThanOrEqualsNumberNotInNumberNotInRangeStringBeginsWithStringContainsStringEndsWithStringInStringNotBeginsWithStringNotContainsStringNotEndsWithStringNotIn(required) |


### BoolEqualsAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'BoolEquals' (required) |
| value | The boolean filter value. | bool |


### IsNotNullAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'IsNotNull' (required) |


### IsNullOrUndefinedAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'IsNullOrUndefined' (required) |


### NumberGreaterThanAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'NumberGreaterThan' (required) |
| value | The filter value. | int |


### NumberGreaterThanOrEqualsAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'NumberGreaterThanOrEquals' (required) |
| value | The filter value. | int |


### NumberInAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'NumberIn' (required) |
| values | The set of filter values. | int[] |


### NumberInRangeAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'NumberInRange' (required) |
| values | The set of filter values. | int[][] |


### NumberLessThanAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'NumberLessThan' (required) |
| value | The filter value. | int |


### NumberLessThanOrEqualsAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'NumberLessThanOrEquals' (required) |
| value | The filter value. | int |


### NumberNotInAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'NumberNotIn' (required) |
| values | The set of filter values. | int[] |


### NumberNotInRangeAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'NumberNotInRange' (required) |
| values | The set of filter values. | int[][] |


### StringBeginsWithAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'StringBeginsWith' (required) |
| values | The set of filter values. | string[] |


### StringContainsAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'StringContains' (required) |
| values | The set of filter values. | string[] |


### StringEndsWithAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'StringEndsWith' (required) |
| values | The set of filter values. | string[] |


### StringInAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'StringIn' (required) |
| values | The set of filter values. | string[] |


### StringNotBeginsWithAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'StringNotBeginsWith' (required) |
| values | The set of filter values. | string[] |


### StringNotContainsAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'StringNotContains' (required) |
| values | The set of filter values. | string[] |


### StringNotEndsWithAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'StringNotEndsWith' (required) |
| values | The set of filter values. | string[] |


### StringNotInAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'StringNotIn' (required) |
| values | The set of filter values. | string[] |


### EventChannelSource

| Name | Description | Value |
|-|-|-|
| source | The identifier of the resource that's the source of the events.This represents a unique resource in the partner's resource model. | string |


