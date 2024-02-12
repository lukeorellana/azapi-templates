```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/vpnServerConfigurations/configurationPolicyGroups@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      isDefault = bool
      policyMembers = [
        {
          attributeType = "string"
          attributeValue = "string"
          name = "string"
        }
      ]
      priority = int
    }
  })
}

```

### vpnServerConfigurations/configurationPolicyGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vpnServerConfigurations |
| properties | Properties of the VpnServerConfigurationPolicyGroup. | VpnServerConfigurationPolicyGroupProperties |


### VpnServerConfigurationPolicyGroupProperties

| Name | Description | Value |
|-|-|-|
| isDefault | Shows if this is a Default VpnServerConfigurationPolicyGroup or not. | bool |
| policyMembers | Multiple PolicyMembers for VpnServerConfigurationPolicyGroup. | VpnServerConfigurationPolicyGroupMember[] |
| priority | Priority for VpnServerConfigurationPolicyGroup. | int |


### VpnServerConfigurationPolicyGroupMember

| Name | Description | Value |
|-|-|-|
| attributeType | The Vpn Policy member attribute type. | 'AADGroupId''CertificateGroupId''RadiusAzureGroupId' |
| attributeValue | The value of Attribute used for this VpnServerConfigurationPolicyGroupMember. | string |
| name | Name of the VpnServerConfigurationPolicyGroupMember. | string |


