## Microsoft.KeyVault/managedHSMs@2022-07-01

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
## Microsoft.KeyVault/managedHSMs/privateEndpointConnections@2022-07-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.KeyVault/managedHSMs/privateEndpointConnections@2022-07-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      privateEndpoint = {}
      privateLinkServiceConnectionState = {
        actionsRequired = "None"
        description = "string"
        status = "string"
      }
      provisioningState = "string"
    }
    sku = {
      family = "B"
      name = "string"
    }
    etag = "string"
  })
}

```

### managedHSMs/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The supported Azure location where the managed HSM Pool should be created. | string |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| sku | SKU details | ManagedHsmSku |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedHSMs |
| etag | Modified whenever there is a change in the state of private endpoint connection. | string |
| properties | Resource properties. | MhsmPrivateEndpointConnectionProperties |


### MhsmPrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | Properties of the private endpoint object. | MhsmPrivateEndpoint |
| privateLinkServiceConnectionState | Approval state of the private link connection. | MhsmPrivateLinkServiceConnectionState |
| provisioningState | Provisioning state of the private endpoint connection. | 'Creating''Deleting''Disconnected''Failed''Succeeded''Updating' |


### MhsmPrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | A message indicating if changes on the service provider require any updates on the consumer. | 'None' |
| description | The reason for approval or rejection. | string |
| status | Indicates whether the connection has been approved, rejected or removed by the key vault owner. | 'Approved''Disconnected''Pending''Rejected' |


### ManagedHsmSku

| Name | Description | Value |
|-|-|-|
| family | SKU Family of the managed HSM Pool | 'B' (required) |
| name | SKU of the managed HSM Pool | 'Custom_B32''Standard_B1' (required) |
## Microsoft.KeyVault/vaults@2022-07-01

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
## Microsoft.KeyVault/vaults/accessPolicies@2022-07-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.KeyVault/vaults/accessPolicies@2022-07-01"
  name = "string"
  parent_id = "string"
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
    }
  })
}

```

### vaults/accessPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vaults |
| properties | Properties of the access policy | VaultAccessPolicyProperties(required) |


### VaultAccessPolicyProperties

| Name | Description | Value |
|-|-|-|
| accessPolicies | An array of 0 to 16 identities that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID. | AccessPolicyEntry[] (required) |


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
## Microsoft.KeyVault/vaults/keys@2022-07-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.KeyVault/vaults/keys@2022-07-01"
  name = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      attributes = {
        enabled = bool
        exp = int
        exportable = bool
        nbf = int
      }
      curveName = "string"
      keyOps = [
        "string"
      ]
      keySize = int
      kty = "string"
      release_policy = {
        contentType = "string"
        data = "string"
      }
      rotationPolicy = {
        attributes = {
          expiryTime = "string"
        }
        lifetimeActions = [
          {
            action = {
              type = "string"
            }
            trigger = {
              timeAfterCreate = "string"
              timeBeforeExpiry = "string"
            }
          }
        ]
      }
    }
  })
}

```

### vaults/keys

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| tags | The tags that will be assigned to the key. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vaults |
| properties | The properties of the key to be created. | KeyProperties(required) |


### KeyProperties

| Name | Description | Value |
|-|-|-|
| attributes | The attributes of the key. | KeyAttributes |
| curveName | The elliptic curve name. For valid values, see JsonWebKeyCurveName. | 'P-256''P-256K''P-384''P-521' |
| keyOps |  | String array containing any of:'decrypt''encrypt''import''release''sign''unwrapKey''verify''wrapKey' |
| keySize | The key size in bits. For example: 2048, 3072, or 4096 for RSA. | int |
| kty | The type of the key. For valid values, see JsonWebKeyType. | 'EC''EC-HSM''RSA''RSA-HSM' |
| release_policy | Key release policy in response. It will be used for both output and input. Omitted if empty | KeyReleasePolicy |
| rotationPolicy | Key rotation policy in response. It will be used for both output and input. Omitted if empty | RotationPolicy |


### KeyAttributes

| Name | Description | Value |
|-|-|-|
| enabled | Determines whether or not the object is enabled. | bool |
| exp | Expiry date in seconds since 1970-01-01T00:00:00Z. | int |
| exportable | Indicates if the private key can be exported. | bool |
| nbf | Not before date in seconds since 1970-01-01T00:00:00Z. | int |


### KeyReleasePolicy

| Name | Description | Value |
|-|-|-|
| contentType | Content type and version of key release policy | string |
| data | Blob encoding the policy rules under which the key can be released. | string |


### RotationPolicy

| Name | Description | Value |
|-|-|-|
| attributes | The attributes of key rotation policy. | KeyRotationPolicyAttributes |
| lifetimeActions | The lifetimeActions for key rotation action. | LifetimeAction[] |


### KeyRotationPolicyAttributes

| Name | Description | Value |
|-|-|-|
| expiryTime | The expiration time for the new key version. It should be in ISO8601 format. Eg: 'P90D', 'P1Y'. | string |


### LifetimeAction

| Name | Description | Value |
|-|-|-|
| action | The action of key rotation policy lifetimeAction. | Action |
| trigger | The trigger of key rotation policy lifetimeAction. | Trigger |


### Action

| Name | Description | Value |
|-|-|-|
| type | The type of action. | 'notify''rotate' |


### Trigger

| Name | Description | Value |
|-|-|-|
| timeAfterCreate | The time duration after key creation to rotate the key. It only applies to rotate. It will be in ISO 8601 duration format. Eg: 'P90D', 'P1Y'. | string |
| timeBeforeExpiry | The time duration before key expiring to rotate or notify. It will be in ISO 8601 duration format. Eg: 'P90D', 'P1Y'. | string |
## Microsoft.KeyVault/vaults/privateEndpointConnections@2022-07-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.KeyVault/vaults/privateEndpointConnections@2022-07-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {}
      privateLinkServiceConnectionState = {
        actionsRequired = "None"
        description = "string"
        status = "string"
      }
      provisioningState = "string"
    }
    etag = "string"
  })
}

```

### vaults/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vaults |
| etag | Modified whenever there is a change in the state of private endpoint connection. | string |
| properties | Resource properties. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | Properties of the private endpoint object. | PrivateEndpoint |
| privateLinkServiceConnectionState | Approval state of the private link connection. | PrivateLinkServiceConnectionState |
| provisioningState | Provisioning state of the private endpoint connection. | 'Creating''Deleting''Disconnected''Failed''Succeeded''Updating' |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | A message indicating if changes on the service provider require any updates on the consumer. | 'None' |
| description | The reason for approval or rejection. | string |
| status | Indicates whether the connection has been approved, rejected or removed by the key vault owner. | 'Approved''Disconnected''Pending''Rejected' |
## Microsoft.KeyVault/vaults/secrets@2022-07-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.KeyVault/vaults/secrets@2022-07-01"
  name = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      attributes = {
        enabled = bool
        exp = int
        nbf = int
      }
      contentType = "string"
      value = "string"
    }
  })
}

```

### vaults/secrets

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-127Valid characters:Alphanumerics and hyphens. |
| tags | The tags that will be assigned to the secret. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vaults |
| properties | Properties of the secret | SecretProperties(required) |


### SecretProperties

| Name | Description | Value |
|-|-|-|
| attributes | The attributes of the secret. | SecretAttributes |
| contentType | The content type of the secret. | string |
| value | The value of the secret. NOTE: 'value' will never be returned from the service, as APIs using this model are is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets. | string |


### SecretAttributes

| Name | Description | Value |
|-|-|-|
| enabled | Determines whether the object is enabled. | bool |
| exp | Expiry date in seconds since 1970-01-01T00:00:00Z. | int |
| nbf | Not before date in seconds since 1970-01-01T00:00:00Z. | int |
