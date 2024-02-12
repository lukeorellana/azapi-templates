import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface BatchBatchaccountsProps extends IAzAPIBaseProps {

}

export class BatchBatchaccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BatchBatchaccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Batch/batchAccounts@2022-10-01";
  }

  protected getResourceBody(props: BatchBatchaccountsProps): string {
    return JSON.stringify(
      {properties: {allowedAuthenticationModes: ["string"], autoStorage: {authenticationMode: "string", nodeIdentityReference: {resourceId: "string"}, storageAccountId: "string"}, encryption: {keySource: "string", keyVaultProperties: {keyIdentifier: "string"}}, keyVaultReference: {id: "string", url: "string"}, networkProfile: {accountAccess: {defaultAction: "string", ipRules: [{action: "Allow", value: "string"}]}, nodeManagementAccess: {defaultAction: "string", ipRules: [{action: "Allow", value: "string"}]}}, poolAllocationMode: "string", publicNetworkAccess: "string"}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required)Character limit: 3-24Valid characters:Lowercase letters and numbers. |
// | location | The region in which to create the account. | string (required) |
// | tags | The user-specified tags associated with the account. | Dictionary of tag names and values. SeeTags in templates |
// | identity | The identity of the Batch account. | BatchAccountIdentity |
// | properties | The properties of the Batch account. | BatchAccountCreatePropertiesOrBatchAccountProperties |

// | Name | Description | Value |
// |-|-|-|
// | type | The type of identity used for the Batch account. | 'None''SystemAssigned''UserAssigned' (required) |
// | userAssignedIdentities | The list of user identities associated with the Batch account. | object |

// | Name | Description | Value |
// |-|-|-|
// | allowedAuthenticationModes | List of allowed authentication modes for the Batch account that can be used to authenticate with the data plane. This does not affect authentication with the control plane. | String array containing any of:'AAD''SharedKey''TaskAuthenticationToken' |
// | autoStorage | The properties related to the auto-storage account. | AutoStorageBasePropertiesOrAutoStorageProperties |
// | encryption | Configures how customer data is encrypted inside the Batch account. By default, accounts are encrypted using a Microsoft managed key. For additional control, a customer-managed key can be used instead. | EncryptionProperties |
// | keyVaultReference | A reference to the Azure key vault associated with the Batch account. | KeyVaultReference |
// | networkProfile | The network profile only takes effect when publicNetworkAccess is enabled. | NetworkProfile |
// | poolAllocationMode | The pool allocation mode also affects how clients may authenticate to the Batch Service API. If the mode is BatchService, clients may authenticate using access keys or Azure Active Directory. If the mode is UserSubscription, clients must use Azure Active Directory. The default is BatchService. | 'BatchService''UserSubscription' |
// | publicNetworkAccess | If not specified, the default value is 'enabled'. | 'Disabled''Enabled' |

// | Name | Description | Value |
// |-|-|-|
// | authenticationMode | The authentication mode which the Batch service will use to manage the auto-storage account. | 'BatchAccountManagedIdentity''StorageKeys' |
// | nodeIdentityReference | The identity referenced here must be assigned to pools which have compute nodes that need access to auto-storage. | ComputeNodeIdentityReference |
// | storageAccountId | The resource ID of the storage account to be used for auto-storage account. | string (required) |

// | Name | Description | Value |
// |-|-|-|
// | resourceId | The ARM resource id of the user assigned identity. | string |

// | Name | Description | Value |
// |-|-|-|
// | keySource | Type of the key source. | 'Microsoft.Batch''Microsoft.KeyVault' |
// | keyVaultProperties | Additional details when using Microsoft.KeyVault | KeyVaultProperties |

// | Name | Description | Value |
// |-|-|-|
// | keyIdentifier | Full path to the versioned secret. Examplehttps://mykeyvault.vault.azure.net/keys/testkey/6e34a81fef704045975661e297a4c053. To be usable the following prerequisites must be met:The Batch Account has a System Assigned identityThe account identity has been granted Key/Get, Key/Unwrap and Key/Wrap permissionsThe KeyVault has soft-delete and purge protection enabled | string |

// | Name | Description | Value |
// |-|-|-|
// | id | The resource ID of the Azure key vault associated with the Batch account. | string (required) |
// | url | The URL of the Azure key vault associated with the Batch account. | string (required) |

// | Name | Description | Value |
// |-|-|-|
// | accountAccess | Network access profile for batchAccount endpoint (Batch account data plane API). | EndpointAccessProfile |
// | nodeManagementAccess | Network access profile for nodeManagement endpoint (Batch service managing compute nodes for Batch pools). | EndpointAccessProfile |

// | Name | Description | Value |
// |-|-|-|
// | defaultAction | Default action for endpoint access. It is only applicable when publicNetworkAccess is enabled. | 'Allow''Deny' (required) |
// | ipRules | Array of IP ranges to filter client IP address. | IPRule[] |

// | Name | Description | Value |
// |-|-|-|
// | action | Action when client IP address is matched. | 'Allow' (required) |
// | value | IPv4 address, or IPv4 address range in CIDR format. | string (required) |
