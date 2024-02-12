```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/securityPolicies@2023-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      parameters = {
        type = "string"
        // For remaining properties, see SecurityPolicyPropertiesParameters objects
      }
    }
  })
}

```

### profiles/securityPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:profiles |
| properties | The json object that contains properties required to create a security policy | SecurityPolicyProperties |


### SecurityPolicyProperties

| Name | Description | Value |
|-|-|-|
| parameters | object which contains security policy parameters | SecurityPolicyPropertiesParameters |


### SecurityPolicyPropertiesParameters

| Name | Description | Value |
|-|-|-|
| type | Set the object type | WebApplicationFirewall(required) |


### SecurityPolicyWebApplicationFirewallParameters

| Name | Description | Value |
|-|-|-|
| type | The type of the Security policy to create. | 'WebApplicationFirewall' (required) |
| associations | Waf associations | SecurityPolicyWebApplicationFirewallAssociation[] |
| wafPolicy | Resource ID. | ResourceReference |


### SecurityPolicyWebApplicationFirewallAssociation

| Name | Description | Value |
|-|-|-|
| domains | List of domains. | ActivatedResourceReference[] |
| patternsToMatch | List of paths | string[] |


### ActivatedResourceReference

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### ResourceReference

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


