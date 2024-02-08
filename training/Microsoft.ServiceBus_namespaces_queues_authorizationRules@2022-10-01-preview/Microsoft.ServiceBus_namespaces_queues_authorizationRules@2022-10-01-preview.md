```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/queues/authorizationRules@2022-10-01-preview"
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

### namespaces/queues/authorizationRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-50Valid characters:Alphanumerics, periods, hyphens, and underscores.Start and end with alphnumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:queues |
| properties | AuthorizationRule properties. | SBAuthorizationRuleProperties |


### SBAuthorizationRuleProperties

| Name | Description | Value |
|-|-|-|
| rights | The rights associated with the rule. | String array containing any of:'Listen''Manage''Send' (required) |

