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


