```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/dataMaskingPolicies@2022-05-01-preview"
  name = "Default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      dataMaskingState = "string"
      exemptPrincipals = "string"
    }
  })
}

```

### servers/databases/dataMaskingPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'Default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Resource properties. | DataMaskingPolicyProperties |


### DataMaskingPolicyProperties

| Name | Description | Value |
|-|-|-|
| dataMaskingState | The state of the data masking policy. | 'Disabled''Enabled' (required) |
| exemptPrincipals | The list of the exempt principals. Specifies the semicolon-separated list of database users for which the data masking policy does not apply. The specified users receive data results without masking for all of the database queries. | string |


