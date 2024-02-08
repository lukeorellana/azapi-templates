```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/connectionPolicies@2014-04-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      proxyDnsName = "string"
      proxyPort = "string"
      redirectionState = "string"
      securityEnabledAccess = "string"
      state = "string"
      useServerDefault = "string"
      visibility = "string"
    }
  })
}

```

### servers/databases/connectionPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Resource properties. | DatabaseConnectionPolicyProperties |


### DatabaseConnectionPolicyProperties

| Name | Description | Value |
|-|-|-|
| proxyDnsName | The fully qualified host name of the auditing proxy. | string |
| proxyPort | The port number of the auditing proxy. | string |
| redirectionState | The state of proxy redirection. | string |
| securityEnabledAccess | The state of security access. | string |
| state | The connection policy state. | string |
| useServerDefault | Whether server default is enabled or disabled. | string |
| visibility | The visibility of the auditing proxy. | string |


