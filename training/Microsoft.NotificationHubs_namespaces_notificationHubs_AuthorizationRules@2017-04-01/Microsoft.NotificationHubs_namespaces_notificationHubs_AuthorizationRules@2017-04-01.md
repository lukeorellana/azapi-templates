```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules@2017-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      rights = [
        "string"
      ]
    }
  })
}

```

### namespaces/notificationHubs/AuthorizationRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-256Valid characters:Alphanumerics, periods, hyphens, and underscores.Start alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:notificationHubs |
| properties | Properties of the Namespace AuthorizationRules. | SharedAccessAuthorizationRuleProperties(required) |


### SharedAccessAuthorizationRuleProperties

| Name | Description | Value |
|-|-|-|
| rights | The rights associated with the rule. | String array containing any of:'Listen''Manage''Send' |


