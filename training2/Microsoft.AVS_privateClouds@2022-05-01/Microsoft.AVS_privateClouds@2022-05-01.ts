import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AvsPrivatecloudsProps extends IAzAPIBaseProps {
/**
   * The private cloud SKU
   */
readonly sku: Sku;

/**
   * The identity of the private cloud, if configured.
   */
readonly identity?: PrivateCloudIdentity;

/**
   * The type of identity used for the private cloud. The type 'SystemAssigned' refers to an implicitly created identity. The type 'None' will remove any identities from the Private Cloud.
   */
readonly type?: 'None''SystemAssigned';

/**
   * Properties describing how the cloud is distributed across availability zones
   */
readonly availability?: AvailabilityProperties;

/**
   * An ExpressRoute Circuit
   */
readonly circuit?: Circuit;

/**
   * Customer managed key encryption, can be enabled or disabled
   */
readonly encryption?: Encryption;

/**
   * vCenter Single Sign On Identity Sources
   */
readonly identitySources?: IdentitySource[];

/**
   * Connectivity to internet is enabled or disabled
   */
readonly internet?: 'Disabled''Enabled';

/**
   * The default cluster used for management
   */
readonly managementCluster?: ManagementCluster;

/**
   * The block of addresses should be unique across VNet in your subscription as well as on-premise. Make sure the CIDR format is conformed to (A.B.C.D/X) where A,B,C,D are between 0 and 255, and X is between 0 and 22
   */
readonly networkBlock: string;

/**
   * Optionally, set the NSX-T Manager password when the private cloud is created
   */
readonly nsxtPassword?: string;

/**
   * A secondary expressRoute circuit from a separate AZ. Only present in a stretched private cloud
   */
readonly secondaryCircuit?: Circuit;

/**
   * Optionally, set the vCenter admin password when the private cloud is created
   */
readonly vcenterPassword?: string;

/**
   * The secondary availability zone for the private cloud
   */
readonly secondaryZone?: number;

/**
   * The availability strategy for the private cloud
   */
readonly strategy?: 'DualZone''SingleZone';

/**
   * The primary availability zone for the private cloud
   */
readonly zone?: number;

/**
   * The key vault where the encryption key is stored
   */
readonly keyVaultProperties?: EncryptionKeyVaultProperties;

/**
   * Status of customer managed encryption key
   */
readonly status?: 'Disabled''Enabled';

/**
   * The name of the key.
   */
readonly keyName?: string;

/**
   * The URL of the vault.
   */
readonly keyVaultUrl?: string;

/**
   * The version of the key.
   */
readonly keyVersion?: string;

/**
   * The domain's NetBIOS name
   */
readonly alias?: string;

/**
   * The base distinguished name for groups
   */
readonly baseGroupDN?: string;

/**
   * The base distinguished name for users
   */
readonly baseUserDN?: string;

/**
   * The domain's dns name
   */
readonly domain?: string;

/**
   * The password of the Active Directory user with a minimum of read-only access to Base DN for users and groups.
   */
readonly password?: string;

/**
   * Primary server URL
   */
readonly primaryServer?: string;

/**
   * Secondary server URL
   */
readonly secondaryServer?: string;

/**
   * Protect LDAP communication using SSL certificate (LDAPS)
   */
readonly ssl?: 'Disabled''Enabled';

/**
   * The ID of an Active Directory user with a minimum of read-only access to Base DN for users and group
   */
readonly username?: string;

/**
   * The cluster size
   */
readonly clusterSize?: number;

/**
   * The hosts
   */
readonly hosts?: string[];
}

/**
 * AvsPrivateclouds resource
 */
export class AvsPrivateclouds extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AvsPrivatecloudsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AVS/privateClouds@2022-05-01";
  }

  protected getResourceBody(props: AvsPrivatecloudsProps): string {
    return JSON.stringify(
        {properties: {availability: {secondaryZone: "${int}", strategy: "string", zone: "${int}"}, circuit: {}, encryption: {keyVaultProperties: {keyName: "string", keyVaultUrl: "string", keyVersion: "string"}, status: "string"}, identitySources: [{alias: "string", baseGroupDN: "string", baseUserDN: "string", domain: "string", name: "string", password: "string", primaryServer: "string", secondaryServer: "string", ssl: "string", username: "string"}], internet: "string", managementCluster: {clusterSize: "${int}", hosts: ["string"]}, networkBlock: "string", nsxtPassword: "string", secondaryCircuit: {}, vcenterPassword: "string"}, sku: {name: "string"}}
    );
  }
}
