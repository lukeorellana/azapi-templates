import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ServicefabricManagedclustersProps extends IAzAPIBaseProps {
/**
   * The sku of the managed cluster
   */
readonly sku: Sku;

/**
   * List of add-on features to enable on the cluster.
   */
readonly addonFeatures?: String array containing any of:'BackupRestoreService''DnsService''ResourceMonitorService';

/**
   * VM admin user password.
   */
readonly adminPassword?: string;

/**
   * VM admin user name.
   */
readonly adminUserName: string;

/**
   * Setting this to true enables RDP access to the VM. The default NSG rule opens RDP port to Internet which can be overridden with custom Network Security Rules. The default value for this setting is false.
   */
readonly allowRdpAccess?: bool;

/**
   * The policy used to clean up unused versions.
   */
readonly applicationTypeVersionsCleanupPolicy?: ApplicationTypeVersionsCleanupPolicy;

/**
   * Auxiliary subnets for the cluster.
   */
readonly auxiliarySubnets?: Subnet[];

/**
   * The AAD authentication settings of the cluster.
   */
readonly azureActiveDirectory?: AzureActiveDirectory;

/**
   * The port used for client connections to the cluster.
   */
readonly clientConnectionPort?: number;

/**
   * Client certificates that are allowed to manage the cluster.
   */
readonly clients?: ClientCertificate[];

/**
   * The Service Fabric runtime version of the cluster. This property is required whenclusterUpgradeModeis set to 'Manual'. To get list of available Service Fabric versions for new clusters use ClusterVersion API. To get the list of available version for existing clusters useavailableClusterVersions.
   */
readonly clusterCodeVersion?: string;

/**
   * Indicates when new cluster runtime version upgrades will be applied after they are released. By default is Wave0. Only applies whenclusterUpgradeModeis set to 'Automatic'.
   */
readonly clusterUpgradeCadence?: 'Wave0''Wave1''Wave2';

/**
   * The upgrade mode of the cluster when new Service Fabric runtime version is available.
   */
readonly clusterUpgradeMode?: 'Automatic''Manual';

/**
   * Specify the resource id of a DDoS network protection plan that will be associated with the virtual network of the cluster.
   */
readonly ddosProtectionPlanId?: string;

/**
   * The cluster dns name.
   */
readonly dnsName: string;

/**
   * Setting this to true enables automatic OS upgrade for the node types that are created using any platform OS image with version 'latest'. The default value for this setting is false.
   */
readonly enableAutoOSUpgrade?: bool;

/**
   * If true, token-based authentication is not allowed on the HttpGatewayEndpoint. This is required to support TLS versions 1.3 and above. If token-based authentication is used, HttpGatewayTokenAuthConnectionPort must be defined.
   */
readonly enableHttpGatewayExclusiveAuthMode?: bool;

/**
   * Setting this to true creates IPv6 address space for the default VNet used by the cluster. This setting cannot be changed once the cluster is created. The default value for this setting is false.
   */
readonly enableIpv6?: bool;

/**
   * Setting this to true will link the IPv4 address as the ServicePublicIP of the IPv6 address. It can only be set to True if IPv6 is enabled on the cluster.
   */
readonly enableServicePublicIP?: bool;

/**
   * The list of custom fabric settings to configure the cluster.
   */
readonly fabricSettings?: SettingsSectionDescription[];

/**
   * The port used for HTTP connections to the cluster.
   */
readonly httpGatewayConnectionPort?: number;

/**
   * The port used for token-auth based HTTPS connections to the cluster. Cannot be set to the same port as HttpGatewayEndpoint.
   */
readonly httpGatewayTokenAuthConnectionPort?: number;

/**
   * The list of IP tags associated with the default public IP address of the cluster.
   */
readonly ipTags?: IPTag[];

/**
   * Load balancing rules that are applied to the public load balancer of the cluster.
   */
readonly loadBalancingRules?: LoadBalancingRule[];

/**
   * Custom Network Security Rules that are applied to the Virtual Network of the cluster.
   */
readonly networkSecurityRules?: NetworkSecurityRule[];

/**
   * Specify the resource id of a public IPv4 prefix that the load balancer will allocate a public IPv4 address from. This setting cannot be changed once the cluster is created.
   */
readonly publicIPPrefixId?: string;

/**
   * Specify the resource id of a public IPv6 prefix that the load balancer will allocate a public IPv6 address from. This setting cannot be changed once the cluster is created.
   */
readonly publicIPv6PrefixId?: string;

/**
   * Service endpoints for subnets in the cluster.
   */
readonly serviceEndpoints?: ServiceEndponumber[];

/**
   * If specified, the node types for the cluster are created in this subnet instead of the default VNet. ThenetworkSecurityRulesspecified for the cluster are also applied to this subnet. This setting cannot be changed once the cluster is created.
   */
readonly subnetId?: string;

/**
   * The policy to use when upgrading the cluster.
   */
readonly upgradeDescription?: ClusterUpgradePolicy;

/**
   * For new clusters, this parameter indicates that it uses Bring your own VNet, but the subnet is specified at node type level; and for such clusters, the subnetId property is required for node types.
   */
readonly useCustomVnet?: bool;

/**
   * Indicates if the cluster has zone resiliency.
   */
readonly zonalResiliency?: bool;

/**
   * Indicates the update mode for Cross Az clusters.
   */
readonly zonalUpdateMode?: 'Fast''Standard';

/**
   * Number of unused versions per application type to keep.
   */
readonly maxUnusedVersionsToKeep: number;

/**
   * Indicates wether to enable Ipv6 or not. If not provided, it will take the same configuration as the cluster.
   */
readonly enableIpv6?: bool;

/**
   * Full resource id for the network security group.
   */
readonly networkSecurityGroupId?: string;

/**
   * Enable or Disable apply network policies on private end point in the subnet.
   */
readonly privateEndpointNetworkPolicies?: 'disabled''enabled';

/**
   * Enable or Disable apply network policies on private link service in the subnet.
   */
readonly privateLinkServiceNetworkPolicies?: 'disabled''enabled';

/**
   * Azure active directory client application id.
   */
readonly clientApplication?: string;

/**
   * Azure active directory cluster application id.
   */
readonly clusterApplication?: string;

/**
   * Azure active directory tenant id.
   */
readonly tenantId?: string;

/**
   * Certificate common name.
   */
readonly commonName?: string;

/**
   * Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.
   */
readonly isAdmin: bool;

/**
   * Issuer thumbprint for the certificate. Only used together with CommonName.
   */
readonly issuerThumbprint?: string;

/**
   * Certificate thumbprint.
   */
readonly thumbprint?: string;

/**
   * The collection of parameters in the section.
   */
readonly parameters: SettingsParameterDescription[];

/**
   * The parameter value of fabric setting.
   */
readonly value: string;

/**
   * The IP tag type.
   */
readonly ipTagType: string;

/**
   * The value of the IP tag.
   */
readonly tag: string;

/**
   * The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
   */
readonly backendPort: number;

/**
   * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 1 and 65534.
   */
readonly frontendPort: number;

/**
   * The load distribution policy for this rule.
   */
readonly loadDistribution?: string;

/**
   * The prob port used by the load balancing rule. Acceptable values are between 1 and 65535.
   */
readonly probePort?: number;

/**
   * the reference to the load balancer probe used by the load balancing rule.
   */
readonly probeProtocol: 'http''https''tcp';

/**
   * The probe request path. Only supported for HTTP/HTTPS probes.
   */
readonly probeRequestPath?: string;

/**
   * The reference to the transport protocol used by the load balancing rule.
   */
readonly protocol: 'tcp''udp';

/**
   * The network traffic is allowed or denied.
   */
readonly access: 'allow''deny';

/**
   * Network security rule description.
   */
readonly description?: string;

/**
   * The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
   */
readonly destinationAddressPrefix?: string;

/**
   * The destination address prefixes. CIDR or destination IP ranges.
   */
readonly destinationAddressPrefixes?: string[];

/**
   * he destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
   */
readonly destinationPortRange?: string;

/**
   * The destination port ranges.
   */
readonly destinationPortRanges?: string[];

/**
   * Network security rule direction.
   */
readonly direction: 'inbound''outbound';

/**
   * The priority of the rule. The value can be in the range 1000 to 3000. Values outside this range are reserved for Service Fabric ManagerCluster Resource Provider. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
   */
readonly priority: number;

/**
   * Network protocol this rule applies to.
   */
readonly protocol: 'ah''esp''http''https''icmp''tcp''udp';

/**
   * The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
   */
readonly sourceAddressPrefix?: string;

/**
   * The CIDR or source IP ranges.
   */
readonly sourceAddressPrefixes?: string[];

/**
   * The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
   */
readonly sourcePortRange?: string;

/**
   * The source port ranges.
   */
readonly sourcePortRanges?: string[];

/**
   * A list of locations.
   */
readonly locations?: string[];

/**
   * The type of the endpoint service.
   */
readonly service: string;

/**
   * The cluster delta health policy defines a health policy used to evaluate the health of the cluster during a cluster upgrade.
   */
readonly deltaHealthPolicy?: ClusterUpgradeDeltaHealthPolicy;

/**
   * If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data).
   */
readonly forceRestart?: bool;

/**
   * The cluster health policy defines a health policy used to evaluate the health of the cluster during a cluster upgrade.
   */
readonly healthPolicy?: ClusterHealthPolicy;

/**
   * The cluster monitoring policy describes the parameters for monitoring an upgrade in Monitored mode.
   */
readonly monitoringPolicy?: ClusterMonitoringPolicy;

/**
   * The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues.When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues.The timeout is reset at the start of each upgrade domain. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.This value must be between 00:00:00 and 49710.06:28:15 (unsigned 32 bit integer for seconds)
   */
readonly upgradeReplicaSetCheckTimeout?: string;

/**
   * The maximum allowed percentage of applications health degradation allowed during cluster upgrades.The delta is measured between the state of the applications at the beginning of upgrade and the state of the applications at the time of the health evaluation.The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits. System services are not included in this.NOTE: This value will overwrite the value specified in properties.UpgradeDescription.HealthPolicy.MaxPercentUnhealthyApplications
   */
readonly maxPercentDeltaUnhealthyApplications?: number;

/**
   * The maximum allowed percentage of nodes health degradation allowed during cluster upgrades.The delta is measured between the state of the nodes at the beginning of upgrade and the state of the nodes at the time of the health evaluation.The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits.
   */
readonly maxPercentDeltaUnhealthyNodes: number;

/**
   * The maximum allowed percentage of upgrade domain nodes health degradation allowed during cluster upgrades.The delta is measured between the state of the upgrade domain nodes at the beginning of upgrade and the state of the upgrade domain nodes at the time of the health evaluation.The check is performed after every upgrade domain upgrade completion for all completed upgrade domains to make sure the state of the upgrade domains is within tolerated limits.
   */
readonly maxPercentUpgradeDomainDeltaUnhealthyNodes?: number;

/**
   * The maximum allowed percentage of unhealthy applications before reporting an error. For example, to allow 10% of applications to be unhealthy, this value would be 10.The percentage represents the maximum tolerated percentage of applications that can be unhealthy before the cluster is considered in error.If the percentage is respected but there is at least one unhealthy application, the health is evaluated as Warning.This is calculated by dividing the number of unhealthy applications over the total number of application instances in the cluster, excluding applications of application types that are included in the ApplicationTypeHealthPolicyMap.The computation rounds up to tolerate one failure on small numbers of applications. Default percentage is zero.
   */
readonly maxPercentUnhealthyApplications: number;

/**
   * The maximum allowed percentage of unhealthy nodes before reporting an error. For example, to allow 10% of nodes to be unhealthy, this value would be 10.The percentage represents the maximum tolerated percentage of nodes that can be unhealthy before the cluster is considered in error.If the percentage is respected but there is at least one unhealthy node, the health is evaluated as Warning.The percentage is calculated by dividing the number of unhealthy nodes over the total number of nodes in the cluster.The computation rounds up to tolerate one failure on small numbers of nodes. Default percentage is zero.In large clusters, some nodes will always be down or out for repairs, so this percentage should be configured to tolerate that.
   */
readonly maxPercentUnhealthyNodes: number;

/**
   * The amount of time to retry health evaluation when the application or cluster is unhealthy before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
   */
readonly healthCheckRetryTimeout: string;

/**
   * The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. The duration can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
   */
readonly healthCheckStableDuration: string;

/**
   * The length of time to wait after completing an upgrade domain before performing health checks. The duration can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
   */
readonly healthCheckWaitDuration: string;

/**
   * The amount of time each upgrade domain has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
   */
readonly upgradeDomainTimeout: string;

/**
   * The amount of time the overall upgrade has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
   */
readonly upgradeTimeout: string;
}

/**
 * ServicefabricManagedclusters resource
 */
export class ServicefabricManagedclusters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ServicefabricManagedclustersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ServiceFabric/managedClusters@2023-12-01-preview";
  }

  protected getResourceBody(props: ServicefabricManagedclustersProps): string {
    return JSON.stringify(
        {properties: {addonFeatures: ["string"], adminPassword: "string", adminUserName: "string", allowRdpAccess: "${bool}", applicationTypeVersionsCleanupPolicy: {maxUnusedVersionsToKeep: "${int}"}, auxiliarySubnets: [{enableIpv6: "${bool}", name: "string", networkSecurityGroupId: "string", privateEndpointNetworkPolicies: "string", privateLinkServiceNetworkPolicies: "string"}], azureActiveDirectory: {clientApplication: "string", clusterApplication: "string", tenantId: "string"}, clientConnectionPort: "${int}", clients: [{commonName: "string", isAdmin: "${bool}", issuerThumbprint: "string", thumbprint: "string"}], clusterCodeVersion: "string", clusterUpgradeCadence: "string", clusterUpgradeMode: "string", ddosProtectionPlanId: "string", dnsName: "string", enableAutoOSUpgrade: "${bool}", enableHttpGatewayExclusiveAuthMode: "${bool}", enableIpv6: "${bool}", enableServicePublicIP: "${bool}", fabricSettings: [{name: "string", parameters: [{name: "string", value: "string"}]}], httpGatewayConnectionPort: "${int}", httpGatewayTokenAuthConnectionPort: "${int}", ipTags: [{ipTagType: "string", tag: "string"}], loadBalancingRules: [{backendPort: "${int}", frontendPort: "${int}", loadDistribution: "string", probePort: "${int}", probeProtocol: "string", probeRequestPath: "string", protocol: "string"}], networkSecurityRules: [{access: "string", description: "string", destinationAddressPrefix: "string", destinationAddressPrefixes: ["string"], destinationPortRange: "string", destinationPortRanges: ["string"], direction: "string", name: "string", priority: "${int}", protocol: "string", sourceAddressPrefix: "string", sourceAddressPrefixes: ["string"], sourcePortRange: "string", sourcePortRanges: ["string"]}], publicIPPrefixId: "string", publicIPv6PrefixId: "string", serviceEndpoints: [{locations: ["string"], service: "string"}], subnetId: "string", upgradeDescription: {deltaHealthPolicy: {maxPercentDeltaUnhealthyApplications: "${int}", maxPercentDeltaUnhealthyNodes: "${int}", maxPercentUpgradeDomainDeltaUnhealthyNodes: "${int}"}, forceRestart: "${bool}", healthPolicy: {maxPercentUnhealthyApplications: "${int}", maxPercentUnhealthyNodes: "${int}"}, monitoringPolicy: {healthCheckRetryTimeout: "string", healthCheckStableDuration: "string", healthCheckWaitDuration: "string", upgradeDomainTimeout: "string", upgradeTimeout: "string"}, upgradeReplicaSetCheckTimeout: "string"}, useCustomVnet: "${bool}", zonalResiliency: "${bool}", zonalUpdateMode: "string"}, sku: {name: "string"}}
    );
  }
}
