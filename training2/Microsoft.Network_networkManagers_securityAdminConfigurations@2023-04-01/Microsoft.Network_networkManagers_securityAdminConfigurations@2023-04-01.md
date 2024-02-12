```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagers/securityAdminConfigurations@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      applyOnNetworkIntentPolicyBasedServices = [
        "string"
      ]
      description = "string"
    }
  })
}

```

### networkManagers/securityAdminConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkManagers |
| properties | Indicates the properties for the network manager security admin configuration. | SecurityAdminConfigurationPropertiesFormat |


### SecurityAdminConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| applyOnNetworkIntentPolicyBasedServices | Enum list of network intent policy based services. | String array containing any of:'All''AllowRulesOnly''None' |
| description | A description of the security configuration. | string |


