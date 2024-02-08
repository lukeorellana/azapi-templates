```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/namespaces/applicationGroups@2022-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      clientAppGroupIdentifier = "string"
      isEnabled = bool
      policies = [
        {
          name = "string"
          type = "string"
          // For remaining properties, see ApplicationGroupPolicy objects
        }
      ]
    }
  })
}

```

### namespaces/applicationGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties |  | ApplicationGroupProperties |


### ApplicationGroupProperties

| Name | Description | Value |
|-|-|-|
| clientAppGroupIdentifier | The Unique identifier for application group.Supports SAS(SASKeyName=KeyName) or AAD(AADAppID=Guid) | string (required) |
| isEnabled | Determines if Application Group is allowed to create connection with namespace or not. Once the isEnabled is set to false, all the existing connections of application group gets dropped and no new connections will be allowed | bool |
| policies | List of group policies that define the behavior of application group. The policies can support resource governance scenarios such as limiting ingress or egress traffic. | ApplicationGroupPolicy[] |


### ApplicationGroupPolicy

| Name | Description | Value |
|-|-|-|
| name | The Name of this policy | string (required) |
| type | Set the object type | ThrottlingPolicy(required) |


### ThrottlingPolicy

| Name | Description | Value |
|-|-|-|
| type | Application Group Policy types | 'ThrottlingPolicy' (required) |
| metricId | Metric Id on which the throttle limit should be set, MetricId can be discovered by hovering over Metric in the Metrics section of Event Hub Namespace inside Azure Portal | 'IncomingBytes''IncomingMessages''OutgoingBytes''OutgoingMessages' (required) |
| rateLimitThreshold | The Threshold limit above which the application group will be throttled.Rate limit is always per second. | int (required) |


