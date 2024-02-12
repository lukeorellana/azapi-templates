```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/serviceEndpointPolicies/serviceEndpointPolicyDefinitions@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      service = "string"
      serviceResources = [
        "string"
      ]
    }
  })
}

```

### serviceEndpointPolicies/serviceEndpointPolicyDefinit...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:serviceEndpointPolicies |
| properties | Properties of the service endpoint policy definition. | ServiceEndpointPolicyDefinitionPropertiesFormat |


### ServiceEndpointPolicyDefinitionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| description | A description for this rule. Restricted to 140 chars. | string |
| service | Service endpoint name. | string |
| serviceResources | A list of service resources. | string[] |


