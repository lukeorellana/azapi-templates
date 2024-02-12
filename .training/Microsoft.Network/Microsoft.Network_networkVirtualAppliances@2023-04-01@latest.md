```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkVirtualAppliances@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      additionalNics = [
        {
          hasPublicIp = bool
          name = "string"
        }
      ]
      bootStrapConfigurationBlobs = [
        "string"
      ]
      cloudInitConfiguration = "string"
      cloudInitConfigurationBlobs = [
        "string"
      ]
      delegation = {
        serviceName = "string"
      }
      nvaSku = {
        bundledScaleUnit = "string"
        marketPlaceVersion = "string"
        vendor = "string"
      }
      partnerManagedResource = {}
      sshPublicKey = "string"
      virtualApplianceAsn = int
      virtualHub = {
        id = "string"
      }
    }
  })
}

```

### networkVirtualAppliances

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The service principal that has read access to cloud-init and config blob. | ManagedServiceIdentity |
| properties | Properties of the Network Virtual Appliance. | NetworkVirtualAppliancePropertiesFormat |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### NetworkVirtualAppliancePropertiesFormat

| Name | Description | Value |
|-|-|-|
| additionalNics | Details required for Additional Network Interface. | VirtualApplianceAdditionalNicProperties[] |
| bootStrapConfigurationBlobs | BootStrapConfigurationBlobs storage URLs. | string[] |
| cloudInitConfiguration | CloudInitConfiguration string in plain text. | string |
| cloudInitConfigurationBlobs | CloudInitConfigurationBlob storage URLs. | string[] |
| delegation | The delegation for the Virtual Appliance | DelegationProperties |
| nvaSku | Network Virtual Appliance SKU. | VirtualApplianceSkuProperties |
| partnerManagedResource | The delegation for the Virtual Appliance | PartnerManagedResourceProperties |
| sshPublicKey | Public key for SSH login. | string |
| virtualApplianceAsn | VirtualAppliance ASN. Microsoft private, public and IANA reserved ASN are not supported. | int |
| virtualHub | The Virtual Hub where Network Virtual Appliance is being deployed. | SubResource |


### VirtualApplianceAdditionalNicProperties

| Name | Description | Value |
|-|-|-|
| hasPublicIp | Flag (true or false) for Intent for Public Ip on additional nic | bool |
| name | Name of additional nic | string |


### DelegationProperties

| Name | Description | Value |
|-|-|-|
| serviceName | The service name to which the NVA is delegated. | string |


### VirtualApplianceSkuProperties

| Name | Description | Value |
|-|-|-|
| bundledScaleUnit | Virtual Appliance Scale Unit. | string |
| marketPlaceVersion | Virtual Appliance Version. | string |
| vendor | Virtual Appliance Vendor. | string |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


