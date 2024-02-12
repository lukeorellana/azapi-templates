import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HdinsightClustersProps extends IAzAPIBaseProps {
/**
   * The identity of the cluster, if configured.
   */
readonly identity?: ClusterIdentity;

/**
   * The availability zones.
   */
readonly zones?: string[];

/**
   * The type of identity used for the cluster. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities.
   */
readonly type?: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * The list of user identities associated with the cluster. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
readonly userAssignedIdentities?: object;

/**
   * The cluster definition.
   */
readonly clusterDefinition?: ClusterDefinition;

/**
   * The version of the cluster.
   */
readonly clusterVersion?: string;

/**
   * The compute isolation properties.
   */
readonly computeIsolationProperties?: ComputeIsolationProperties;

/**
   * The compute profile.
   */
readonly computeProfile?: ComputeProfile;

/**
   * The disk encryption properties.
   */
readonly diskEncryptionProperties?: DiskEncryptionProperties;

/**
   * The encryption-in-transit properties.
   */
readonly encryptionInTransitProperties?: EncryptionInTransitProperties;

/**
   * The cluster kafka rest proxy configuration.
   */
readonly kafkaRestProperties?: KafkaRestProperties;

/**
   * The minimal supported tls version.
   */
readonly minSupportedTlsVersion?: string;

/**
   * The network properties.
   */
readonly networkProperties?: NetworkProperties;

/**
   * The type of operating system.
   */
readonly osType?: 'Linux''Windows';

/**
   * The private link configurations.
   */
readonly privateLinkConfigurations?: PrivateLinkConfiguration[];

/**
   * The security profile.
   */
readonly securityProfile?: SecurityProfile;

/**
   * The storage profile.
   */
readonly storageProfile?: StorageProfile;

/**
   * The cluster tier.
   */
readonly tier?: 'Premium''Standard';

/**
   * The link to the blueprint.
   */
readonly blueprint?: string;

/**
   * The versions of different services in the cluster.
   */
readonly componentVersion?: object;

/**
   * The cluster configurations.
   */
readonly configurations?: For Bicep, you can use theany()function.;

/**
   * The type of cluster.
   */
readonly kind?: string;

/**
   * The flag indicates whether enable compute isolation or not.
   */
readonly enableComputeIsolation?: bool;

/**
   * The host sku.
   */
readonly hostSku?: string;

/**
   * The list of roles in the cluster.
   */
readonly roles?: Role[];

/**
   * The autoscale configurations.
   */
readonly autoscale?: Autoscale;

/**
   * The data disks groups for the role.
   */
readonly dataDisksGroups?: DataDisksGroups[];

/**
   * Indicates whether encrypt the data disks.
   */
readonly encryptDataDisks?: bool;

/**
   * The hardware profile.
   */
readonly hardwareProfile?: HardwareProfile;

/**
   * The minimum instance count of the cluster.
   */
readonly minInstanceCount?: number;

/**
   * The operating system profile.
   */
readonly osProfile?: OsProfile;

/**
   * The list of script actions on the role.
   */
readonly scriptActions?: ScriptAction[];

/**
   * The instance count of the cluster.
   */
readonly targetInstanceCount?: number;

/**
   * The virtual network profile.
   */
readonly virtualNetworkProfile?: VirtualNetworkProfile;

/**
   * The name of the virtual machine group.
   */
readonly VMGroupName?: string;

/**
   * Parameters for load-based autoscale
   */
readonly capacity?: AutoscaleCapacity;

/**
   * Parameters for schedule-based autoscale
   */
readonly recurrence?: AutoscaleRecurrence;

/**
   * The maximum instance count of the cluster
   */
readonly maxInstanceCount?: number;

/**
   * The minimum instance count of the cluster
   */
readonly minInstanceCount?: number;

/**
   * Array of schedule-based autoscale rules
   */
readonly schedule?: AutoscaleSchedule[];

/**
   * The time zone for the autoscale schedule times
   */
readonly timeZone?: string;

/**
   * Days of the week for a schedule-based autoscale rule
   */
readonly days?: String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';

/**
   * Time and capacity for a schedule-based autoscale rule
   */
readonly timeAndCapacity?: AutoscaleTimeAndCapacity;

/**
   * The maximum instance count of the cluster
   */
readonly maxInstanceCount?: number;

/**
   * The minimum instance count of the cluster
   */
readonly minInstanceCount?: number;

/**
   * 24-hour time in the form xx:xx
   */
readonly time?: string;

/**
   * The number of disks per node.
   */
readonly disksPerNode?: number;

/**
   * The size of the VM
   */
readonly vmSize?: string;

/**
   * The Linux OS profile.
   */
readonly linuxOperatingSystemProfile?: LinuxOperatingSystemProfile;

/**
   * The password.
   */
readonly password?: string;

/**
   * The SSH profile.
   */
readonly sshProfile?: SshProfile;

/**
   * The username.
   */
readonly username?: string;

/**
   * The list of SSH public keys.
   */
readonly publicKeys?: SshPublicKey[];

/**
   * The certificate for SSH.
   */
readonly certificateData?: string;

/**
   * The parameters for the script provided.
   */
readonly parameters: string;

/**
   * The URI to the script.
   */
readonly uri: string;

/**
   * The ID of the virtual network.
   */
readonly id?: string;

/**
   * The name of the subnet.
   */
readonly subnet?: string;

/**
   * Algorithm identifier for encryption, default RSA-OAEP.
   */
readonly encryptionAlgorithm?: 'RSA-OAEP''RSA-OAEP-256''RSA1_5';

/**
   * Indicates whether or not resource disk encryption is enabled.
   */
readonly encryptionAtHost?: bool;

/**
   * Key name that is used for enabling disk encryption.
   */
readonly keyName?: string;

/**
   * Specific key version that is used for enabling disk encryption.
   */
readonly keyVersion?: string;

/**
   * Resource ID of Managed Identity that is used to access the key vault.
   */
readonly msiResourceId?: string;

/**
   * Base key vault URI where the customers key is located eg.https://myvault.vault.azure.net
   */
readonly vaultUri?: string;

/**
   * Indicates whether or not inter cluster node communication is encrypted in transit.
   */
readonly isEncryptionInTransitEnabled?: bool;

/**
   * The information of AAD security group.
   */
readonly clientGroupInfo?: ClientGroupInfo;

/**
   * The configurations that need to be overriden.
   */
readonly configurationOverride?: object;

/**
   * The AAD security group id.
   */
readonly groupId?: string;

/**
   * The AAD security group name.
   */
readonly groupName?: string;

/**
   * Indicates whether or not private link is enabled.
   */
readonly privateLink?: 'Disabled''Enabled';

/**
   * The direction for the resource provider connection.
   */
readonly resourceProviderConnection?: 'Inbound''Outbound';

/**
   * The HDInsight private linkable sub-resource name to apply the private link configuration to. For example, 'headnode', 'gateway', 'edgenode'.
   */
readonly groupId: string;

/**
   * The IP configurations for the private link service.
   */
readonly ipConfigurations: IPConfiguration[];

/**
   * Indicates whether this IP configuration is primary for the corresponding NIC.
   */
readonly primary?: bool;

/**
   * The IP address.
   */
readonly privateIPAddress?: string;

/**
   * The method that private IP address is allocated.
   */
readonly privateIPAllocationMethod?: 'dynamic''static';

/**
   * The subnet resource id.
   */
readonly subnet?: ResourceId;

/**
   * The azure resource id.
   */
readonly id?: string;

/**
   * The resource ID of the user's Azure Active Directory Domain Service.
   */
readonly aaddsResourceId?: string;

/**
   * Optional. The Distinguished Names for cluster user groups
   */
readonly clusterUsersGroupDNs?: string[];

/**
   * The directory type.
   */
readonly directoryType?: 'ActiveDirectory';

/**
   * The organization's active directory domain.
   */
readonly domain?: string;

/**
   * The domain user account that will have admin privileges on the cluster.
   */
readonly domainUsername?: string;

/**
   * The domain admin password.
   */
readonly domainUserPassword?: string;

/**
   * The LDAPS protocol URLs to communicate with the Active Directory.
   */
readonly ldapsUrls?: string[];

/**
   * User assigned identity that has permissions to read and create cluster-related artifacts in the user's AADDS.
   */
readonly msiResourceId?: string;

/**
   * The organizational unit within the Active Directory to place the cluster and service accounts.
   */
readonly organizationalUnitDN?: string;

/**
   * The list of storage accounts in the cluster.
   */
readonly storageaccounts?: StorageAccount[];

/**
   * The container in the storage account, only to be specified for WASB storage accounts.
   */
readonly container?: string;

/**
   * The file share name.
   */
readonly fileshare?: string;

/**
   * The filesystem, only to be specified for Azure Data Lake Storage Gen 2.
   */
readonly fileSystem?: string;

/**
   * Whether or not the storage account is the default storage account.
   */
readonly isDefault?: bool;

/**
   * The storage account access key.
   */
readonly key?: string;

/**
   * The managed identity (MSI) that is allowed to access the storage account, only to be specified for Azure Data Lake Storage Gen 2.
   */
readonly msiResourceId?: string;

/**
   * The resource ID of storage account, only to be specified for Azure Data Lake Storage Gen 2.
   */
readonly resourceId?: string;

/**
   * The shared access signature key.
   */
readonly saskey?: string;
}

/**
 * HdinsightClusters resource
 */
export class HdinsightClusters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HdinsightClustersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HDInsight/clusters@2021-06-01";
  }

  protected getResourceBody(props: HdinsightClustersProps): string {
    return JSON.stringify(
        {properties: {clusterDefinition: {blueprint: "string", componentVersion: {}, kind: "string"}, clusterVersion: "string", computeIsolationProperties: {enableComputeIsolation: "${bool}", hostSku: "string"}, computeProfile: {roles: [{autoscale: {capacity: {maxInstanceCount: "${int}", minInstanceCount: "${int}"}, recurrence: {schedule: [{days: ["string"], timeAndCapacity: {maxInstanceCount: "${int}", minInstanceCount: "${int}", time: "string"}}], timeZone: "string"}}, dataDisksGroups: [{disksPerNode: "${int}"}], encryptDataDisks: "${bool}", hardwareProfile: {vmSize: "string"}, minInstanceCount: "${int}", name: "string", osProfile: {linuxOperatingSystemProfile: {password: "string", sshProfile: {publicKeys: [{certificateData: "string"}]}, username: "string"}}, scriptActions: [{name: "string", parameters: "string", uri: "string"}], targetInstanceCount: "${int}", virtualNetworkProfile: {id: "string", subnet: "string"}, VMGroupName: "string"}]}, diskEncryptionProperties: {encryptionAlgorithm: "string", encryptionAtHost: "${bool}", keyName: "string", keyVersion: "string", msiResourceId: "string", vaultUri: "string"}, encryptionInTransitProperties: {isEncryptionInTransitEnabled: "${bool}"}, kafkaRestProperties: {clientGroupInfo: {groupId: "string", groupName: "string"}, configurationOverride: {}}, minSupportedTlsVersion: "string", networkProperties: {privateLink: "string", resourceProviderConnection: "string"}, osType: "string", privateLinkConfigurations: [{name: "string", properties: {groupId: "string", ipConfigurations: [{name: "string", properties: {primary: "${bool}", privateIPAddress: "string", privateIPAllocationMethod: "string", subnet: {id: "string"}}}]}}], securityProfile: {aaddsResourceId: "string", clusterUsersGroupDNs: ["string"], directoryType: "ActiveDirectory", domain: "string", domainUsername: "string", domainUserPassword: "string", ldapsUrls: ["string"], msiResourceId: "string", organizationalUnitDN: "string"}, storageProfile: {storageaccounts: [{container: "string", fileshare: "string", fileSystem: "string", isDefault: "${bool}", key: "string", msiResourceId: "string", name: "string", resourceId: "string", saskey: "string"}]}, tier: "string"}, zones: ["string"]}
    );
  }
}
