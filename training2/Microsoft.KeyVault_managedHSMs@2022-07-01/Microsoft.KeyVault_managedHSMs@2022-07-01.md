```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.KeyVault/managedHSMs@2022-07-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      createMode = "string"
      enablePurgeProtection = bool
      enableSoftDelete = bool
      initialAdminObjectIds = [
        "string"
      ]
      networkAcls = {
        bypass = "string"
        defaultAction = "string"
        ipRules = [
          {
            value = "string"
          }
        ]
        virtualNetworkRules = [
          {
            id = "string"
          }
        ]
      }
      publicNetworkAccess = "string"
      softDeleteRetentionInDays = int
      tenantId = "string"
    }
    sku = {
      family = "B"
      name = "string"
    }
  })
}

```

### managedHSMs

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The supported Azure location where the managed HSM Pool should be created. | string |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| sku | SKU details | ManagedHsmSku |
| properties | Properties of the managed HSM | ManagedHsmProperties |


### ManagedHsmProperties

| Name | Description | Value |
|-|-|-|
| createMode | The create mode to indicate whether the resource is being created or is being recovered from a deleted resource. | 'default''recover' |
| enablePurgeProtection | Property specifying whether protection against purge is enabled for this managed HSM pool. Setting this property to true activates protection against purge for this managed HSM pool and its content - only the Managed HSM service may initiate a hard, irrecoverable deletion. The setting is effective only if soft delete is also enabled. Enabling this functionality is irreversible. | bool |
| enableSoftDelete | Property to specify whether the 'soft delete' functionality is enabled for this managed HSM pool. If it's not set to any value(true or false) when creating new managed HSM pool, it will be set to true by default. Once set to true, it cannot be reverted to false. | bool |
| initialAdminObjectIds | Array of initial administrators object ids for this managed hsm pool. | string[] |
| networkAcls | Rules governing the accessibility of the key vault from specific network locations. | MhsmNetworkRuleSet |
| publicNetworkAccess | Control permission for data plane traffic coming from public networks while private endpoint is enabled. | 'Disabled''Enabled' |
| softDeleteRetentionInDays | softDelete data retention days. It accepts >=7 and <=90. | int |
| tenantId | The Azure Active Directory tenant ID that should be used for authenticating requests to the managed HSM pool. | string |


### MhsmNetworkRuleSet

| Name | Description | Value |
|-|-|-|
| bypass | Tells what traffic can bypass network rules. This can be 'AzureServices' or 'None'.  If not specified the default is 'AzureServices'. | 'AzureServices''None' |
| defaultAction | The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated. | 'Allow''Deny' |
| ipRules | The list of IP address rules. | MhsmipRule[] |
| virtualNetworkRules | The list of virtual network rules. | MhsmVirtualNetworkRule[] |


### MhsmipRule

| Name | Description | Value |
|-|-|-|
| value | An IPv4 address range in CIDR notation, such as '124.56.78.91' (simple IP address) or '124.56.78.0/24' (all addresses that start with 124.56.78). | string (required) |


### MhsmVirtualNetworkRule

| Name | Description | Value |
|-|-|-|
| id | Full resource id of a vnet subnet, such as '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'. | string (required) |


### ManagedHsmSku

| Name | Description | Value |
|-|-|-|
| family | SKU Family of the managed HSM Pool | 'B' (required) |
| name | SKU of the managed HSM Pool | 'Custom_B32''Standard_B1' (required) |


