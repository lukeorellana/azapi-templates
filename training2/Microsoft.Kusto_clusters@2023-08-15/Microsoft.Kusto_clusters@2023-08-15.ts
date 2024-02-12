import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KustoClustersProps extends IAzAPIBaseProps {
/**
   * The SKU of the cluster.
   */
readonly sku: AzureSku;

/**
   * The identity of the cluster, if configured.
   */
readonly identity?: Identity;

/**
   * The availability zones of the cluster.
   */
readonly zones?: string[];

/**
   * The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove all identities.
   */
readonly type: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * The list of user identities associated with the Kusto cluster. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
readonly userAssignedIdentities?: IdentityUserAssignedIdentities;

/**
   * 
   */
readonly {customized property}?: ComponentsSgqdofSchemasIdentityPropertiesUserassigne...;

/**
   * The cluster's accepted audiences.
   */
readonly acceptedAudiences?: AcceptedAudiences[];

/**
   * List of allowed FQDNs(Fully Qualified Domain Name) for egress from Cluster.
   */
readonly allowedFqdnList?: string[];

/**
   * The list of ips in the format of CIDR allowed to connect to the cluster.
   */
readonly allowedIpRangeList?: string[];

/**
   * A boolean value that indicates if the cluster could be automatically stopped (due to lack of data or no activity for many days).
   */
readonly enableAutoStop?: bool;

/**
   * A boolean value that indicates if the cluster's disks are encrypted.
   */
readonly enableDiskEncryption?: bool;

/**
   * A boolean value that indicates if double encryption is enabled.
   */
readonly enableDoubleEncryption?: bool;

/**
   * A boolean value that indicates if the purge operations are enabled.
   */
readonly enablePurge?: bool;

/**
   * A boolean value that indicates if the streaming ingest is enabled.
   */
readonly enableStreamingIngest?: bool;

/**
   * The engine type
   */
readonly engineType?: 'V2''V3';

/**
   * KeyVault properties for the cluster encryption.
   */
readonly keyVaultProperties?: KeyVaultProperties;

/**
   * List of the cluster's language extensions.
   */
readonly languageExtensions?: LanguageExtensionsList;

/**
   * Optimized auto scale definition.
   */
readonly optimizedAutoscale?: OptimizedAutoscale;

/**
   * Indicates what public IP type to create - IPv4 (default), or DualStack (both IPv4 and IPv6)
   */
readonly publicIPType?: 'DualStack''IPv4';

/**
   * Public network access to the cluster is enabled by default. When disabled, only private endpoint connection to the cluster is allowed
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * Whether or not to restrict outbound network access.  Value is optional but if passed in, must be 'Enabled' or 'Disabled'
   */
readonly restrictOutboundNetworkAccess?: 'Disabled''Enabled';

/**
   * The cluster's external tenants.
   */
readonly trustedExternalTenants?: TrustedExternalTenant[];

/**
   * Virtual Cluster graduation properties
   */
readonly virtualClusterGraduationProperties?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;

/**
   * Virtual network definition.
   */
readonly virtualNetworkConfiguration?: VirtualNetworkConfiguration;

/**
   * GUID or valid URL representing an accepted audience.
   */
readonly value?: string;

/**
   * The name of the key vault key.
   */
readonly keyName?: string;

/**
   * The Uri of the key vault.
   */
readonly keyVaultUri?: string;

/**
   * The version of the key vault key.
   */
readonly keyVersion?: string;

/**
   * The user assigned identity (ARM resource id) that has access to the key.
   */
readonly userIdentity?: string;

/**
   * The list of language extensions.
   */
readonly value?: LanguageExtension[];

/**
   * The list of language extensions.
   */
readonly value?: LanguageExtension[];

/**
   * The language extension custom image name.
   */
readonly languageExtensionCustomImageName?: string;

/**
   * The language extension image name.
   */
readonly languageExtensionImageName?: 'Python3_10_8''Python3_10_8_DL''Python3_6_5''PythonCustomImage''R';

/**
   * The language extension name.
   */
readonly languageExtensionName?: 'PYTHON''R';

/**
   * A boolean value that indicate if the optimized autoscale feature is enabled or not.
   */
readonly isEnabled: bool;

/**
   * Maximum allowed instances count.
   */
readonly maximum: number;

/**
   * Minimum allowed instances count.
   */
readonly minimum: number;

/**
   * The version of the template defined, for instance 1.
   */
readonly version: number;

/**
   * GUID representing an external tenant.
   */
readonly value?: string;

/**
   * Data management's service public IP address resource id.
   */
readonly dataManagementPublicIpId: string;

/**
   * Engine service's public IP address resource id.
   */
readonly enginePublicIpId: string;

/**
   * When enabled, the cluster is deployed into the configured subnet, when disabled it will be removed from the subnet.
   */
readonly state?: 'Disabled''Enabled';

/**
   * The subnet resource id.
   */
readonly subnetId: string;

/**
   * The number of instances of the cluster.
   */
readonly capacity?: number;

/**
   * SKU tier.
   */
readonly tier: 'Basic''Standard';
}

/**
 * KustoClusters resource
 */
export class KustoClusters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KustoClustersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Kusto/clusters@2023-08-15";
  }

  protected getResourceBody(props: KustoClustersProps): string {
    return JSON.stringify(
        {properties: {acceptedAudiences: [{value: "string"}], allowedFqdnList: ["string"], allowedIpRangeList: ["string"], enableAutoStop: "${bool}", enableDiskEncryption: "${bool}", enableDoubleEncryption: "${bool}", enablePurge: "${bool}", enableStreamingIngest: "${bool}", engineType: "string", keyVaultProperties: {keyName: "string", keyVaultUri: "string", keyVersion: "string", userIdentity: "string"}, languageExtensions: {value: [{languageExtensionCustomImageName: "string", languageExtensionImageName: "string", languageExtensionName: "string"}]}, optimizedAutoscale: {isEnabled: "${bool}", maximum: "${int}", minimum: "${int}", version: "${int}"}, publicIPType: "string", publicNetworkAccess: "string", restrictOutboundNetworkAccess: "string", trustedExternalTenants: [{value: "string"}], virtualClusterGraduationProperties: "string", virtualNetworkConfiguration: {dataManagementPublicIpId: "string", enginePublicIpId: "string", state: "string", subnetId: "string"}}, zones: ["string"], sku: {capacity: "${int}", name: "string", tier: "string"}}
    );
  }
}
