```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.KeyVault/vaults@2022-07-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      accessPolicies = [
        {
          applicationId = "string"
          objectId = "string"
          permissions = {
            certificates = [
              "string"
            ]
            keys = [
              "string"
            ]
            secrets = [
              "string"
            ]
            storage = [
              "string"
            ]
          }
          tenantId = "string"
        }
      ]
      createMode = "string"
      enabledForDeployment = bool
      enabledForDiskEncryption = bool
      enabledForTemplateDeployment = bool
      enablePurgeProtection = bool
      enableRbacAuthorization = bool
      enableSoftDelete = bool
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
            ignoreMissingVnetServiceEndpoint = bool
          }
        ]
      }
      provisioningState = "string"
      publicNetworkAccess = "string"
      sku = {
        family = "A"
        name = "string"
      }
      softDeleteRetentionInDays = int
      tenantId = "string"
      vaultUri = "string"
    }
  })
}

```

### vaults

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-24Valid characters:Alphanumerics and hyphens.Start with letter. End with letter or digit. Can't contain consecutive hyphens.Resource name must be unique across Azure. |
| location | The supported Azure location where the key vault should be created. | string (required) |
| tags | The tags that will be assigned to the key vault. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the vault | VaultProperties(required) |


### VaultProperties

| Name | Description | Value |
|-|-|-|
| accessPolicies | An array of 0 to 1024 identities that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID. WhencreateModeis set torecover, access policies are not required. Otherwise, access policies are required. | AccessPolicyEntry[] |
| createMode | The vault's create mode to indicate whether the vault need to be recovered or not. | 'default''recover' |
| enabledForDeployment | Property to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault. | bool |
| enabledForDiskEncryption | Property to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys. | bool |
| enabledForTemplateDeployment | Property to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault. | bool |
| enablePurgeProtection | Property specifying whether protection against purge is enabled for this vault. Setting this property to true activates protection against purge for this vault and its content - only the Key Vault service may initiate a hard, irrecoverable deletion. The setting is effective only if soft delete is also enabled. Enabling this functionality is irreversible - that is, the property does not accept false as its value. | bool |
| enableRbacAuthorization | Property that controls how data actions are authorized. When true, the key vault will use Role Based Access Control (RBAC) for authorization of data actions, and the access policies specified in vault properties will be  ignored. When false, the key vault will use the access policies specified in vault properties, and any policy stored on Azure Resource Manager will be ignored. If null or not specified, the vault is created with the default value of false. Note that management actions are always authorized with RBAC. | bool |
| enableSoftDelete | Property to specify whether the 'soft delete' functionality is enabled for this key vault. If it's not set to any value(true or false) when creating new key vault, it will be set to true by default. Once set to true, it cannot be reverted to false. | bool |
| networkAcls | Rules governing the accessibility of the key vault from specific network locations. | NetworkRuleSet |
| provisioningState | Provisioning state of the vault. | 'RegisteringDns''Succeeded' |
| publicNetworkAccess | Property to specify whether the vault will accept traffic from public internet. If set to 'disabled' all traffic except private endpoint traffic and that that originates from trusted services will be blocked. This will override the set firewall rules, meaning that even if the firewall rules are present we will not honor the rules. | string |
| sku | SKU details | Sku(required) |
| softDeleteRetentionInDays | softDelete data retention days. It accepts >=7 and <=90. | int |
| tenantId | The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault. | string (required) |
| vaultUri | The URI of the vault for performing operations on keys and secrets. | string |


### AccessPolicyEntry

| Name | Description | Value |
|-|-|-|
| applicationId | Application ID of the client making request on behalf of a principal | string |
| objectId | The object ID of a user, service principal or security group in the Azure Active Directory tenant for the vault. The object ID must be unique for the list of access policies. | string (required) |
| permissions | Permissions the identity has for keys, secrets and certificates. | Permissions(required) |
| tenantId | The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault. | string (required) |


### Permissions

| Name | Description | Value |
|-|-|-|
| certificates | Permissions to certificates | String array containing any of:'all''backup''create''delete''deleteissuers''get''getissuers''import''list''listissuers''managecontacts''manageissuers''purge''recover''restore''setissuers''update' |
| keys | Permissions to keys | String array containing any of:'all''backup''create''decrypt''delete''encrypt''get''getrotationpolicy''import''list''purge''recover''release''restore''rotate''setrotationpolicy''sign''unwrapKey''update''verify''wrapKey' |
| secrets | Permissions to secrets | String array containing any of:'all''backup''delete''get''list''purge''recover''restore''set' |
| storage | Permissions to storage accounts | String array containing any of:'all''backup''delete''deletesas''get''getsas''list''listsas''purge''recover''regeneratekey''restore''set''setsas''update' |


### NetworkRuleSet

| Name | Description | Value |
|-|-|-|
| bypass | Tells what traffic can bypass network rules. This can be 'AzureServices' or 'None'.  If not specified the default is 'AzureServices'. | 'AzureServices''None' |
| defaultAction | The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated. | 'Allow''Deny' |
| ipRules | The list of IP address rules. | IPRule[] |
| virtualNetworkRules | The list of virtual network rules. | VirtualNetworkRule[] |


### IPRule

| Name | Description | Value |
|-|-|-|
| value | An IPv4 address range in CIDR notation, such as '124.56.78.91' (simple IP address) or '124.56.78.0/24' (all addresses that start with 124.56.78). | string (required) |


### VirtualNetworkRule

| Name | Description | Value |
|-|-|-|
| id | Full resource id of a vnet subnet, such as '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'. | string (required) |
| ignoreMissingVnetServiceEndpoint | Property to specify whether NRP will ignore the check if parent subnet has serviceEndpoints configured. | bool |


### Sku

| Name | Description | Value |
|-|-|-|
| family | SKU family name | 'A' (required) |
| name | SKU name to specify whether the key vault is a standard vault or a premium vault. | 'premium''standard' (required) |


