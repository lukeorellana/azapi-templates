import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface AvsPrivatecloudsProps extends IAzAPIBaseProps {

}

export class AvsPrivateclouds extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AvsPrivatecloudsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AVS/privateClouds@2022-05-01";
  }

  protected getResourceBody(props: AvsPrivatecloudsProps): string {
    return JSON.stringify(
      {properties: {availability: {secondaryZone: int, strategy: "string", zone: int}, circuit: {}, encryption: {keyVaultProperties: {keyName: "string", keyVaultUrl: "string", keyVersion: "string"}, status: "string"}, identitySources: [{alias: "string", baseGroupDN: "string", baseUserDN: "string", domain: "string", name: "string", password: "string", primaryServer: "string", secondaryServer: "string", ssl: "string", username: "string"}], internet: "string", managementCluster: {clusterSize: int, hosts: ["string"]}, networkBlock: "string", nsxtPassword: "string", secondaryCircuit: {}, vcenterPassword: "string"}, sku: {name: "string"}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required) |
// | location | Resource location | string |
// | tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
// | sku | The private cloud SKU | Sku(required) |
// | identity | The identity of the private cloud, if configured. | PrivateCloudIdentity |
// | properties | The properties of a private cloud resource | PrivateCloudProperties |

// | Name | Description | Value |
// |-|-|-|
// | type | The type of identity used for the private cloud. The type 'SystemAssigned' refers to an implicitly created identity. The type 'None' will remove any identities from the Private Cloud. | 'None''SystemAssigned' |

// | Name | Description | Value |
// |-|-|-|
// | availability | Properties describing how the cloud is distributed across availability zones | AvailabilityProperties |
// | circuit | An ExpressRoute Circuit | Circuit |
// | encryption | Customer managed key encryption, can be enabled or disabled | Encryption |
// | identitySources | vCenter Single Sign On Identity Sources | IdentitySource[] |
// | internet | Connectivity to internet is enabled or disabled | 'Disabled''Enabled' |
// | managementCluster | The default cluster used for management | ManagementCluster |
// | networkBlock | The block of addresses should be unique across VNet in your subscription as well as on-premise. Make sure the CIDR format is conformed to (A.B.C.D/X) where A,B,C,D are between 0 and 255, and X is between 0 and 22 | string (required) |
// | nsxtPassword | Optionally, set the NSX-T Manager password when the private cloud is created | string |
// | secondaryCircuit | A secondary expressRoute circuit from a separate AZ. Only present in a stretched private cloud | Circuit |
// | vcenterPassword | Optionally, set the vCenter admin password when the private cloud is created | string |

// | Name | Description | Value |
// |-|-|-|
// | secondaryZone | The secondary availability zone for the private cloud | int |
// | strategy | The availability strategy for the private cloud | 'DualZone''SingleZone' |
// | zone | The primary availability zone for the private cloud | int |

// | Name | Description | Value |
// |-|-|-|
// | keyVaultProperties | The key vault where the encryption key is stored | EncryptionKeyVaultProperties |
// | status | Status of customer managed encryption key | 'Disabled''Enabled' |

// | Name | Description | Value |
// |-|-|-|
// | keyName | The name of the key. | string |
// | keyVaultUrl | The URL of the vault. | string |
// | keyVersion | The version of the key. | string |

// | Name | Description | Value |
// |-|-|-|
// | alias | The domain's NetBIOS name | string |
// | baseGroupDN | The base distinguished name for groups | string |
// | baseUserDN | The base distinguished name for users | string |
// | domain | The domain's dns name | string |
// | name | The name of the identity source | string |
// | password | The password of the Active Directory user with a minimum of read-only access to Base DN for users and groups. | string |
// | primaryServer | Primary server URL | string |
// | secondaryServer | Secondary server URL | string |
// | ssl | Protect LDAP communication using SSL certificate (LDAPS) | 'Disabled''Enabled' |
// | username | The ID of an Active Directory user with a minimum of read-only access to Base DN for users and group | string |

// | Name | Description | Value |
// |-|-|-|
// | clusterSize | The cluster size | int |
// | hosts | The hosts | string[] |

// | Name | Description | Value |
// |-|-|-|
// | name | The name of the SKU. | string (required) |
