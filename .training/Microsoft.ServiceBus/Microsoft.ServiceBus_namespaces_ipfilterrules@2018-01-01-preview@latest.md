```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/ipfilterrules@2018-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      action = "string"
      filterName = "string"
      ipMask = "string"
    }
  })
}

```

### namespaces/ipfilterrules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | Properties supplied to create or update IpFilterRules | IpFilterRuleProperties |


### IpFilterRuleProperties

| Name | Description | Value |
|-|-|-|
| action | The IP Filter Action | 'Accept''Reject' |
| filterName | IP Filter name | string |
| ipMask | IP Mask | string |


