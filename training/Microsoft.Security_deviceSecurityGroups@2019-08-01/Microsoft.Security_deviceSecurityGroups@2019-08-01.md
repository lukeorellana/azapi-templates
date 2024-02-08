```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/deviceSecurityGroups@2019-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allowlistRules = [
        {
          allowlistValues = [
            "string"
          ]
          isEnabled = bool
          ruleType = "string"
          // For remaining properties, see AllowlistCustomAlertRule objects
        }
      ]
      denylistRules = [
        {
          denylistValues = [
            "string"
          ]
          isEnabled = bool
          ruleType = "string"
        }
      ]
      thresholdRules = [
        {
          isEnabled = bool
          maxThreshold = int
          minThreshold = int
          ruleType = "string"
          // For remaining properties, see ThresholdCustomAlertRule objects
        }
      ]
      timeWindowRules = [
        {
          isEnabled = bool
          maxThreshold = int
          minThreshold = int
          timeWindowSize = "string"
          ruleType = "string"
          // For remaining properties, see TimeWindowCustomAlertRule objects
        }
      ]
    }
  })
}

```

### deviceSecurityGroups

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Alphanumerics, underscores, and hyphens. |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | Device Security group data | DeviceSecurityGroupProperties |


### DeviceSecurityGroupProperties

| Name | Description | Value |
|-|-|-|
| allowlistRules | The allow-list custom alert rules. | AllowlistCustomAlertRule[] |
| denylistRules | The deny-list custom alert rules. | DenylistCustomAlertRule[] |
| thresholdRules | The list of custom alert threshold rules. | ThresholdCustomAlertRule[] |
| timeWindowRules | The list of custom alert time-window rules. | TimeWindowCustomAlertRule[] |


### AllowlistCustomAlertRule

| Name | Description | Value |
|-|-|-|
| allowlistValues | The values to allow. The format of the values depends on the rule type. | string[] (required) |
| isEnabled | Status of the custom alert. | bool (required) |
| ruleType | Set the object type | ConnectionFromIpNotAllowedConnectionToIpNotAllowedLocalUserNotAllowedProcessNotAllowed(required) |


### ConnectionFromIpNotAllowed

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'ConnectionFromIpNotAllowed' (required) |


### ConnectionToIpNotAllowed

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'ConnectionToIpNotAllowed' (required) |


### LocalUserNotAllowed

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'LocalUserNotAllowed' (required) |


### ProcessNotAllowed

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'ProcessNotAllowed' (required) |


### DenylistCustomAlertRule

| Name | Description | Value |
|-|-|-|
| denylistValues | The values to deny. The format of the values depends on the rule type. | string[] (required) |
| isEnabled | Status of the custom alert. | bool (required) |
| ruleType | The type of the custom alert rule. | string (required) |


### ThresholdCustomAlertRule

| Name | Description | Value |
|-|-|-|
| isEnabled | Status of the custom alert. | bool (required) |
| maxThreshold | The maximum threshold. | int (required) |
| minThreshold | The minimum threshold. | int (required) |
| ruleType | Set the object type | ActiveConnectionsNotInAllowedRangeAmqpC2DMessagesNotInAllowedRangeAmqpC2DRejectedMessagesNotInAllowedRangeAmqpD2CMessagesNotInAllowedRangeDirectMethodInvokesNotInAllowedRangeFailedLocalLoginsNotInAllowedRangeFileUploadsNotInAllowedRangeHttpC2DMessagesNotInAllowedRangeHttpC2DRejectedMessagesNotInAllowedRangeHttpD2CMessagesNotInAllowedRangeMqttC2DMessagesNotInAllowedRangeMqttC2DRejectedMessagesNotInAllowedRangeMqttD2CMessagesNotInAllowedRangeQueuePurgesNotInAllowedRangeTwinUpdatesNotInAllowedRangeUnauthorizedOperationsNotInAllowedRange(required) |


### ActiveConnectionsNotInAllowedRange

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'ActiveConnectionsNotInAllowedRange' (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |


### AmqpC2DMessagesNotInAllowedRange

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'AmqpC2DMessagesNotInAllowedRange' (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |


### AmqpC2DRejectedMessagesNotInAllowedRange

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'AmqpC2DRejectedMessagesNotInAllowedRange' (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |


### AmqpD2CMessagesNotInAllowedRange

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'AmqpD2CMessagesNotInAllowedRange' (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |


### DirectMethodInvokesNotInAllowedRange

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'DirectMethodInvokesNotInAllowedRange' (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |


### FailedLocalLoginsNotInAllowedRange

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'FailedLocalLoginsNotInAllowedRange' (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |


### FileUploadsNotInAllowedRange

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'FileUploadsNotInAllowedRange' (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |


### HttpC2DMessagesNotInAllowedRange

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'HttpC2DMessagesNotInAllowedRange' (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |


### HttpC2DRejectedMessagesNotInAllowedRange

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'HttpC2DRejectedMessagesNotInAllowedRange' (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |


### HttpD2CMessagesNotInAllowedRange

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'HttpD2CMessagesNotInAllowedRange' (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |


### MqttC2DMessagesNotInAllowedRange

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'MqttC2DMessagesNotInAllowedRange' (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |


### MqttC2DRejectedMessagesNotInAllowedRange

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'MqttC2DRejectedMessagesNotInAllowedRange' (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |


### MqttD2CMessagesNotInAllowedRange

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'MqttD2CMessagesNotInAllowedRange' (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |


### QueuePurgesNotInAllowedRange

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'QueuePurgesNotInAllowedRange' (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |


### TwinUpdatesNotInAllowedRange

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'TwinUpdatesNotInAllowedRange' (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |


### UnauthorizedOperationsNotInAllowedRange

| Name | Description | Value |
|-|-|-|
| ruleType | The type of the custom alert rule. | 'UnauthorizedOperationsNotInAllowedRange' (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |


### TimeWindowCustomAlertRule

| Name | Description | Value |
|-|-|-|
| isEnabled | Status of the custom alert. | bool (required) |
| maxThreshold | The maximum threshold. | int (required) |
| minThreshold | The minimum threshold. | int (required) |
| timeWindowSize | The time window size in iso8601 format. | string (required) |
| ruleType | Set the object type | ActiveConnectionsNotInAllowedRangeAmqpC2DMessagesNotInAllowedRangeAmqpC2DRejectedMessagesNotInAllowedRangeAmqpD2CMessagesNotInAllowedRangeDirectMethodInvokesNotInAllowedRangeFailedLocalLoginsNotInAllowedRangeFileUploadsNotInAllowedRangeHttpC2DMessagesNotInAllowedRangeHttpC2DRejectedMessagesNotInAllowedRangeHttpD2CMessagesNotInAllowedRangeMqttC2DMessagesNotInAllowedRangeMqttC2DRejectedMessagesNotInAllowedRangeMqttD2CMessagesNotInAllowedRangeQueuePurgesNotInAllowedRangeTwinUpdatesNotInAllowedRangeUnauthorizedOperationsNotInAllowedRange(required) |


