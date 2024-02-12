import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * The managed cluster SKU.
   */
readonly sku?: ManagedClusterSKU;

/**
   * The extended location of the Virtual Machine.
   */
readonly extendedLocation?: ExtendedLocation;

/**
   * The identity of the managed cluster, if configured.
   */
readonly identity?: ManagedClusterIdentity;

/**
   * The type of the extended location.
   */
readonly type?: 'EdgeZone';

/**
   * The delegated identity resources assigned to this managed cluster. This can only be set by another Azure Resource Provider, and managed cluster only accept one delegated identity resource. Internal use only.
   */
readonly delegatedResources?: DelegatedResources;

/**
   * For more information seeuse managed identities in AKS.
   */
readonly type?: 'None''SystemAssigned''UserAssigned';

/**
   * The keys must be ARM resource IDs in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
readonly userAssignedIdentities?: ManagedClusterIdentityUserAssignedIdentities;

/**
   * 
   */
readonly {customized property}?: DelegatedResource;

/**
   * The delegation id of the referral delegation (optional) - internal use only.
   */
readonly referralResource?: string;

/**
   * The ARM resource id of the delegated resource - internal use only.
   */
readonly resourceId?: string;

/**
   * The tenant id of the delegated resource - internal use only.
   */
readonly tenantId?: stringConstranumbers:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$;

/**
   * 
   */
readonly {customized property}?: ManagedServiceIdentityUserAssignedIdentitiesValue;

/**
   * The Azure Active Directory configuration.
   */
readonly aadProfile?: ManagedClusterAADProfile;

/**
   * The profile of managed cluster add-on.
   */
readonly addonProfiles?: ManagedClusterPropertiesAddonProfiles;

/**
   * The agent pool properties.
   */
readonly agentPoolProfiles?: ManagedClusterAgentPoolProfile[];

/**
   * The access profile for managed cluster API server.
   */
readonly apiServerAccessProfile?: ManagedClusterAPIServerAccessProfile;

/**
   * Parameters to be applied to the cluster-autoscaler when enabled
   */
readonly autoScalerProfile?: ManagedClusterPropertiesAutoScalerProfile;

/**
   * The auto upgrade configuration.
   */
readonly autoUpgradeProfile?: ManagedClusterAutoUpgradeProfile;

/**
   * Azure Monitor addon profiles for monitoring the managed cluster.
   */
readonly azureMonitorProfile?: ManagedClusterAzureMonitorProfile;

/**
   * If set to true, getting static credentials will be disabled for this cluster. This must only be used on Managed Clusters that are AAD enabled. For more details seedisable local accounts.
   */
readonly disableLocalAccounts?: bool;

/**
   * This is of the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{encryptionSetName}'
   */
readonly diskEncryptionSetID?: string;

/**
   * This cannot be updated once the Managed Cluster has been created.
   */
readonly dnsPrefix?: string;

/**
   * (DEPRECATED) Whether to enable Kubernetes pod security policy (preview). PodSecurityPolicy was deprecated in Kubernetes v1.21, and removed from Kubernetes in v1.25. Learn more athttps://aka.ms/k8s/pspandhttps://aka.ms/aks/psp.
   */
readonly enablePodSecurityPolicy?: bool;

/**
   * Whether to enable Kubernetes Role-Based Access Control.
   */
readonly enableRBAC?: bool;

/**
   * This cannot be updated once the Managed Cluster has been created.
   */
readonly fqdnSubdomain?: string;

/**
   * Configurations for provisioning the cluster with HTTP proxy servers.
   */
readonly httpProxyConfig?: ManagedClusterHttpProxyConfig;

/**
   * Identities associated with the cluster.
   */
readonly identityProfile?: ManagedClusterPropertiesIdentityProfile;

/**
   * Both patch version {major.minor.patch} (e.g. 1.20.13) and {major.minor} (e.g. 1.20) are supported. When {major.minor} is specified, the latest supported GA patch version is chosen automatically. Updating the cluster with the same {major.minor} once it has been created (e.g. 1.14.x -} 1.14) will not trigger an upgrade, even if a newer patch version is available. When you upgrade a supported AKS cluster, Kubernetes minor versions cannot be skipped. All upgrades must be performed sequentially by major version number. For example, upgrades between 1.14.x -} 1.15.x or 1.15.x -} 1.16.x are allowed, however 1.14.x -} 1.16.x is not allowed. Seeupgrading an AKS clusterfor more details.
   */
readonly kubernetesVersion?: string;

/**
   * The profile for Linux VMs in the Managed Cluster.
   */
readonly linuxProfile?: ContainerServiceLinuxProfile;

/**
   * The network configuration profile.
   */
readonly networkProfile?: ContainerServiceNetworkProfile;

/**
   * The name of the resource group containing agent pool nodes.
   */
readonly nodeResourceGroup?: string;

/**
   * The OIDC issuer profile of the Managed Cluster.
   */
readonly oidcIssuerProfile?: ManagedClusterOidcIssuerProfile;

/**
   * Seeuse AAD pod identityfor more details on AAD pod identity integration.
   */
readonly podIdentityProfile?: ManagedClusterPodIdentityProfile;

/**
   * Private link resources associated with the cluster.
   */
readonly privateLinkResources?: PrivateLinkResource[];

/**
   * Allow or deny public network access for AKS
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * Security profile for the managed cluster.
   */
readonly securityProfile?: ManagedClusterSecurityProfile;

/**
   * Service mesh profile for a managed cluster.
   */
readonly serviceMeshProfile?: ServiceMeshProfile;

/**
   * Information about a service principal identity for the cluster to use for manipulating Azure APIs.
   */
readonly servicePrincipalProfile?: ManagedClusterServicePrincipalProfile;

/**
   * Storage profile for the managed cluster.
   */
readonly storageProfile?: ManagedClusterStorageProfile;

/**
   * The support plan for the Managed Cluster. If unspecified, the default is 'KubernetesOfficial'.
   */
readonly supportPlan?: 'AKSLongTermSupport''KubernetesOfficial';

/**
   * Settings for upgrading a cluster.
   */
readonly upgradeSettings?: ClusterUpgradeSettings;

/**
   * The profile for Windows VMs in the Managed Cluster.
   */
readonly windowsProfile?: ManagedClusterWindowsProfile;

/**
   * Workload Auto-scaler profile for the managed cluster.
   */
readonly workloadAutoScalerProfile?: ManagedClusterWorkloadAutoScalerProfile;

/**
   * The list of AAD group object IDs that will have admin role of the cluster.
   */
readonly adminGroupObjectIDs?: string[];

/**
   * (DEPRECATED) The client AAD application ID. Learn more athttps://aka.ms/aks/aad-legacy.
   */
readonly clientAppID?: string;

/**
   * Whether to enable Azure RBAC for Kubernetes authorization.
   */
readonly enableAzureRBAC?: bool;

/**
   * Whether to enable managed AAD.
   */
readonly managed?: bool;

/**
   * (DEPRECATED) The server AAD application ID. Learn more athttps://aka.ms/aks/aad-legacy.
   */
readonly serverAppID?: string;

/**
   * (DEPRECATED) The server AAD application secret. Learn more athttps://aka.ms/aks/aad-legacy.
   */
readonly serverAppSecret?: string;

/**
   * The AAD tenant ID to use for authentication. If not specified, will use the tenant of the deployment subscription.
   */
readonly tenantID?: string;

/**
   * 
   */
readonly {customized property}?: ManagedClusterAddonProfile;

/**
   * Key-value pairs for configuring an add-on.
   */
readonly config?: ManagedClusterAddonProfileConfig;

/**
   * Whether the add-on is enabled or not.
   */
readonly enabled: bool;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * The list of Availability zones to use for nodes. This can only be specified if the AgentPoolType property is 'VirtualMachineScaleSets'.
   */
readonly availabilityZones?: string[];

/**
   * AKS will associate the specified agent pool with the Capacity Reservation Group.
   */
readonly capacityReservationGroupID?: string;

/**
   * Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 1000 (inclusive) for user pools and in the range of 1 to 1000 (inclusive) for system pools. The default value is 1.
   */
readonly count?: number;

/**
   * CreationData to be used to specify the source Snapshot ID if the node pool will be created/upgraded using a snapshot.
   */
readonly creationData?: CreationData;

/**
   * Whether to enable auto-scaler
   */
readonly enableAutoScaling?: bool;

/**
   * This is only supported on certain VM sizes and in certain Azure regions. For more information, see:https://docs.microsoft.com/azure/aks/enable-host-encryption
   */
readonly enableEncryptionAtHost?: bool;

/**
   * SeeAdd a FIPS-enabled node poolfor more details.
   */
readonly enableFIPS?: bool;

/**
   * Some scenarios may require nodes in a node pool to receive their own dedicated public IP addresses. A common scenario is for gaming workloads, where a console needs to make a direct connection to a cloud virtual machine to minimize hops. For more information seeassigning a public IP per node. The default is false.
   */
readonly enableNodePublicIP?: bool;

/**
   * Whether to enable UltraSSD
   */
readonly enableUltraSSD?: bool;

/**
   * GPUInstanceProfile to be used to specify GPU MIG instance profile for supported GPU VM SKU.
   */
readonly gpuInstanceProfile?: 'MIG1g''MIG2g''MIG3g''MIG4g''MIG7g';

/**
   * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}. For more information seeAzure dedicated hosts.
   */
readonly hostGroupID?: string;

/**
   * The Kubelet configuration on the agent pool nodes.
   */
readonly kubeletConfig?: KubeletConfig;

/**
   * Determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage.
   */
readonly kubeletDiskType?: 'OS''Temporary';

/**
   * The OS configuration of Linux agent nodes.
   */
readonly linuxOSConfig?: LinuxOSConfig;

/**
   * The maximum number of nodes for auto-scaling
   */
readonly maxCount?: number;

/**
   * The maximum number of pods that can run on a node.
   */
readonly maxPods?: number;

/**
   * The minimum number of nodes for auto-scaling
   */
readonly minCount?: number;

/**
   * A cluster must have at least one 'System' Agent Pool at all times. For additional information on agent pool restrictions and best practices, see:https://docs.microsoft.com/azure/aks/use-system-pools
   */
readonly mode?: 'System''User';

/**
   * Network-related settings of an agent pool.
   */
readonly networkProfile?: AgentPoolNetworkProfile;

/**
   * The node labels to be persisted across all nodes in agent pool.
   */
readonly nodeLabels?: ManagedClusterAgentPoolProfilePropertiesNodeLabels;

/**
   * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIPPrefixName}
   */
readonly nodePublicIPPrefixID?: string;

/**
   * The taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
   */
readonly nodeTaints?: string[];

/**
   * Both patch version {major.minor.patch} (e.g. 1.20.13) and {major.minor} (e.g. 1.20) are supported. When {major.minor} is specified, the latest supported GA patch version is chosen automatically. Updating the cluster with the same {major.minor} once it has been created (e.g. 1.14.x -} 1.14) will not trigger an upgrade, even if a newer patch version is available. As a best practice, you should upgrade all node pools in an AKS cluster to the same Kubernetes version. The node pool version must have the same major version as the control plane. The node pool minor version must be within two minor versions of the control plane version. The node pool version cannot be greater than the control plane version. For more information seeupgrading a node pool.
   */
readonly orchestratorVersion?: string;

/**
   * OS Disk Size in GB to be used to specify the disk size for every machine in the master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
   */
readonly osDiskSizeGB?: numberConstranumbers:Min value = 0Max value = 2048;

/**
   * The default is 'Ephemeral' if the VM supports it and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation. For more information seeEphemeral OS.
   */
readonly osDiskType?: 'Ephemeral''Managed';

/**
   * Specifies the OS SKU used by the agent pool. The default is Ubuntu if OSType is Linux. The default is Windows2019 when Kubernetes <= 1.24 or Windows2022 when Kubernetes >= 1.25 if OSType is Windows.
   */
readonly osSKU?: 'AzureLinux''CBLMariner''Ubuntu''Windows2019''Windows2022';

/**
   * The operating system type. The default is Linux.
   */
readonly osType?: 'Linux''Windows';

/**
   * If omitted, pod IPs are statically assigned on the node subnet (see vnetSubnetID for more details). This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
   */
readonly podSubnetID?: string;

/**
   * When an Agent Pool is first created it is initially Running. The Agent Pool can be stopped by setting this field to Stopped. A stopped Agent Pool stops all of its VMs and does not accrue billing charges. An Agent Pool can only be stopped if it is Running and provisioning state is Succeeded
   */
readonly powerState?: PowerState;

/**
   * The ID for Proximity Placement Group.
   */
readonly proximityPlacementGroupID?: string;

/**
   * This also effects the cluster autoscaler behavior. If not specified, it defaults to Delete.
   */
readonly scaleDownMode?: 'Deallocate''Delete';

/**
   * This cannot be specified unless the scaleSetPriority is 'Spot'. If not specified, the default is 'Delete'.
   */
readonly scaleSetEvictionPolicy?: 'Deallocate''Delete';

/**
   * The Virtual Machine Scale Set priority. If not specified, the default is 'Regular'.
   */
readonly scaleSetPriority?: 'Regular''Spot';

/**
   * Possible values are any decimal value greater than zero or -1 which indicates the willingness to pay any on-demand price. For more details on spot pricing, seespot VMs pricingTo specify a decimal value, use thejson()function.
   */
readonly spotMaxPrice?: number or json decimal;

/**
   * The type of Agent Pool.
   */
readonly type?: 'AvailabilitySet''VirtualMachineScaleSets';

/**
   * Settings for upgrading the agentpool
   */
readonly upgradeSettings?: AgentPoolUpgradeSettings;

/**
   * VM size availability varies by region. If a node contains insufficient compute resources (memory, cpu, etc) pods might fail to run correctly. For more details on restricted VM sizes, see:https://docs.microsoft.com/azure/aks/quotas-skus-regions
   */
readonly vmSize?: string;

/**
   * If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
   */
readonly vnetSubnetID?: string;

/**
   * Determines the type of workload a node can run.
   */
readonly workloadRuntime?: 'OCIContainer''WasmWasi';

/**
   * This is the ARM ID of the source object to be used to create the target object.
   */
readonly sourceResourceId?: string;

/**
   * Allowed list of unsafe sysctls or unsafe sysctl patterns (ending in*).
   */
readonly allowedUnsafeSysctls?: string[];

/**
   * The maximum number of container log files that can be present for a container. The number must be â¥ 2.
   */
readonly containerLogMaxFiles?: numberConstranumbers:Min value = 2;

/**
   * The maximum size (e.g. 10Mi) of container log file before it is rotated.
   */
readonly containerLogMaxSizeMB?: number;

/**
   * The default is true.
   */
readonly cpuCfsQuota?: bool;

/**
   * The default is '100ms.' Valid values are a sequence of decimal numbers with an optional fraction and a unit suffix. For example: '300ms', '2h45m'. Supported units are 'ns', 'us', 'ms', 's', 'm', and 'h'.
   */
readonly cpuCfsQuotaPeriod?: string;

/**
   * The default is 'none'. SeeKubernetes CPU management policiesfor more information. Allowed values are 'none' and 'static'.
   */
readonly cpuManagerPolicy?: string;

/**
   * If set to true it will make the Kubelet fail to start if swap is enabled on the node.
   */
readonly failSwapOn?: bool;

/**
   * To disable image garbage collection, set to 100. The default is 85%
   */
readonly imageGcHighThreshold?: number;

/**
   * This cannot be set higher than imageGcHighThreshold. The default is 80%
   */
readonly imageGcLowThreshold?: number;

/**
   * The maximum number of processes per pod.
   */
readonly podMaxPids?: number;

/**
   * For more information seeKubernetes Topology Manager. The default is 'none'. Allowed values are 'none', 'best-effort', 'restricted', and 'single-numa-node'.
   */
readonly topologyManagerPolicy?: string;

/**
   * The size in MB of a swap file that will be created on each node.
   */
readonly swapFileSizeMB?: number;

/**
   * Sysctl settings for Linux agent nodes.
   */
readonly sysctls?: SysctlConfig;

/**
   * Valid values are 'always', 'defer', 'defer+madvise', 'madvise' and 'never'. The default is 'madvise'. For more information seeTransparent Hugepages.
   */
readonly transparentHugePageDefrag?: string;

/**
   * Valid values are 'always', 'madvise', and 'never'. The default is 'always'. For more information seeTransparent Hugepages.
   */
readonly transparentHugePageEnabled?: string;

/**
   * Sysctl setting fs.aio-max-nr.
   */
readonly fsAioMaxNr?: number;

/**
   * Sysctl setting fs.file-max.
   */
readonly fsFileMax?: number;

/**
   * Sysctl setting fs.inotify.max_user_watches.
   */
readonly fsInotifyMaxUserWatches?: number;

/**
   * Sysctl setting fs.nr_open.
   */
readonly fsNrOpen?: number;

/**
   * Sysctl setting kernel.threads-max.
   */
readonly kernelThreadsMax?: number;

/**
   * Sysctl setting net.core.netdev_max_backlog.
   */
readonly netCoreNetdevMaxBacklog?: number;

/**
   * Sysctl setting net.core.optmem_max.
   */
readonly netCoreOptmemMax?: number;

/**
   * Sysctl setting net.core.rmem_default.
   */
readonly netCoreRmemDefault?: number;

/**
   * Sysctl setting net.core.rmem_max.
   */
readonly netCoreRmemMax?: number;

/**
   * Sysctl setting net.core.somaxconn.
   */
readonly netCoreSomaxconn?: number;

/**
   * Sysctl setting net.core.wmem_default.
   */
readonly netCoreWmemDefault?: number;

/**
   * Sysctl setting net.core.wmem_max.
   */
readonly netCoreWmemMax?: number;

/**
   * Sysctl setting net.ipv4.ip_local_port_range.
   */
readonly netIpv4IpLocalPortRange?: string;

/**
   * Sysctl setting net.ipv4.neigh.default.gc_thresh1.
   */
readonly netIpv4NeighDefaultGcThresh1?: number;

/**
   * Sysctl setting net.ipv4.neigh.default.gc_thresh2.
   */
readonly netIpv4NeighDefaultGcThresh2?: number;

/**
   * Sysctl setting net.ipv4.neigh.default.gc_thresh3.
   */
readonly netIpv4NeighDefaultGcThresh3?: number;

/**
   * Sysctl setting net.ipv4.tcp_fin_timeout.
   */
readonly netIpv4TcpFinTimeout?: number;

/**
   * Sysctl setting net.ipv4.tcp_keepalive_intvl.
   */
readonly netIpv4TcpkeepaliveIntvl?: numberConstranumbers:Min value = 10Max value = 90;

/**
   * Sysctl setting net.ipv4.tcp_keepalive_probes.
   */
readonly netIpv4TcpKeepaliveProbes?: number;

/**
   * Sysctl setting net.ipv4.tcp_keepalive_time.
   */
readonly netIpv4TcpKeepaliveTime?: number;

/**
   * Sysctl setting net.ipv4.tcp_max_syn_backlog.
   */
readonly netIpv4TcpMaxSynBacklog?: number;

/**
   * Sysctl setting net.ipv4.tcp_max_tw_buckets.
   */
readonly netIpv4TcpMaxTwBuckets?: number;

/**
   * Sysctl setting net.ipv4.tcp_tw_reuse.
   */
readonly netIpv4TcpTwReuse?: bool;

/**
   * Sysctl setting net.netfilter.nf_conntrack_buckets.
   */
readonly netNetfilterNfConntrackBuckets?: numberConstranumbers:Min value = 65536Max value = 524288;

/**
   * Sysctl setting net.netfilter.nf_conntrack_max.
   */
readonly netNetfilterNfConntrackMax?: numberConstranumbers:Min value = 131072Max value = 2097152;

/**
   * Sysctl setting vm.max_map_count.
   */
readonly vmMaxMapCount?: number;

/**
   * Sysctl setting vm.swappiness.
   */
readonly vmSwappiness?: number;

/**
   * Sysctl setting vm.vfs_cache_pressure.
   */
readonly vmVfsCachePressure?: number;

/**
   * The port ranges that are allowed to access. The specified ranges are allowed to overlap.
   */
readonly allowedHostPorts?: PortRange[];

/**
   * The IDs of the application security groups which agent pool will associate when created.
   */
readonly applicationSecurityGroups?: string[];

/**
   * IPTags of instance-level public IPs.
   */
readonly nodePublicIPTags?: IPTag[];

/**
   * The maximum port that is included in the range. It should be ranged from 1 to 65535, and be greater than or equal to portStart.
   */
readonly portEnd?: numberConstranumbers:Min value = 1Max value = 65535;

/**
   * The minimum port that is included in the range. It should be ranged from 1 to 65535, and be less than or equal to portEnd.
   */
readonly portStart?: numberConstranumbers:Min value = 1Max value = 65535;

/**
   * The network protocol of the port.
   */
readonly protocol?: 'TCP''UDP';

/**
   * The IP tag type. Example: RoutingPreference.
   */
readonly ipTagType?: string;

/**
   * The value of the IP tag associated with the public IP. Example: Internet.
   */
readonly tag?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * Tells whether the cluster is Running or Stopped
   */
readonly code?: 'Running''Stopped';

/**
   * The amount of time (in minutes) to wait on eviction of pods and graceful termination per node. This eviction wait time honors waiting on pod disruption budgets. If this time is exceeded, the upgrade fails. If not specified, the default is 30 minutes.
   */
readonly drainTimeoutInMinutes?: numberConstranumbers:Min value = 1Max value = 1440;

/**
   * This can either be set to an integer (e.g. '5') or a percentage (e.g. '50%'). If a percentage is specified, it is the percentage of the total agent pool size at the time of the upgrade. For percentages, fractional nodes are rounded up. If not specified, the default is 1. For more information, including best practices, see:https://docs.microsoft.com/azure/aks/upgrade-cluster#customize-node-surge-upgrade
   */
readonly maxSurge?: string;

/**
   * The amount of time (in minutes) to wait after draining a node and before reimaging it and moving on to next node. If not specified, the default is 0 minutes.
   */
readonly nodeSoakDurationInMinutes?: numberConstranumbers:Min value = 0Max value = 30;

/**
   * IP ranges are specified in CIDR format, e.g. 137.117.106.88/29. This feature is not compatible with clusters that use Public IP Per Node, or clusters that are using a Basic Load Balancer. For more information seeAPI server authorized IP ranges.
   */
readonly authorizedIPRanges?: string[];

/**
   * Whether to disable run command for the cluster or not.
   */
readonly disableRunCommand?: bool;

/**
   * For more details, seeCreating a private AKS cluster.
   */
readonly enablePrivateCluster?: bool;

/**
   * Whether to create additional public FQDN for private cluster or not.
   */
readonly enablePrivateClusterPublicFQDN?: bool;

/**
   * The default is System. For more details seeconfigure private DNS zone. Allowed values are 'system' and 'none'.
   */
readonly privateDNSZone?: string;

/**
   * Valid values are 'true' and 'false'
   */
readonly balance-similar-node-groups?: string;

/**
   * If not specified, the default is 'random'. Seeexpandersfor more information.
   */
readonly expander?: 'least-waste''most-pods''priority''random';

/**
   * The default is 10.
   */
readonly max-empty-bulk-delete?: string;

/**
   * The default is 600.
   */
readonly max-graceful-termination-sec?: string;

/**
   * The default is '15m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
   */
readonly max-node-provision-time?: string;

/**
   * The default is 45. The maximum is 100 and the minimum is 0.
   */
readonly max-total-unready-percentage?: string;

/**
   * For scenarios like burst/batch scale where you don't want CA to act before the kubernetes scheduler could schedule all the pods, you can tell CA to ignore unscheduled pods before they're a certain age. The default is '0s'. Values must be an integer followed by a unit ('s' for seconds, 'm' for minutes, 'h' for hours, etc).
   */
readonly new-pod-scale-up-delay?: string;

/**
   * This must be an integer. The default is 3.
   */
readonly ok-total-unready-count?: string;

/**
   * The default is '10m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
   */
readonly scale-down-delay-after-add?: string;

/**
   * The default is the scan-interval. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
   */
readonly scale-down-delay-after-delete?: string;

/**
   * The default is '3m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
   */
readonly scale-down-delay-after-failure?: string;

/**
   * The default is '10m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
   */
readonly scale-down-unneeded-time?: string;

/**
   * The default is '20m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
   */
readonly scale-down-unready-time?: string;

/**
   * The default is '0.5'.
   */
readonly scale-down-utilization-threshold?: string;

/**
   * The default is '10'. Values must be an integer number of seconds.
   */
readonly scan-interval?: string;

/**
   * The default is true.
   */
readonly skip-nodes-with-local-storage?: string;

/**
   * The default is true.
   */
readonly skip-nodes-with-system-pods?: string;

/**
   * Manner in which the OS on your nodes is updated. The default is NodeImage.
   */
readonly nodeOSUpgradeChannel?: 'NodeImage''None''Unmanaged';

/**
   * For more information seesetting the AKS cluster auto-upgrade channel.
   */
readonly upgradeChannel?: 'node-image''none''patch''rapid''stable';

/**
   * Metrics profile for the Azure Monitor managed service for Prometheus addon. Collect out-of-the-box Kubernetes infrastructure metrics to send to an Azure Monitor Workspace and configure additional scraping for custom targets. See aka.ms/AzureManagedPrometheus for an overview.
   */
readonly metrics?: ManagedClusterAzureMonitorProfileMetrics;

/**
   * Whether to enable or disable the Azure Managed Prometheus addon for Prometheus monitoring. See aka.ms/AzureManagedPrometheus-aks-enable for details on enabling and disabling.
   */
readonly enabled: bool;

/**
   * Kube State Metrics profile for the Azure Managed Prometheus addon. These optional settings are for the kube-state-metrics pod that is deployed with the addon. See aka.ms/AzureManagedPrometheus-optional-parameters for details.
   */
readonly kubeStateMetrics?: ManagedClusterAzureMonitorProfileKubeStateMetrics;

/**
   * Comma-separated list of Kubernetes annotation keys that will be used in the resource's labels metric (Example: 'namespaces=[kubernetes.io/team,...],pods=[kubernetes.io/team],...'). By default the metric contains only resource name and namespace labels.
   */
readonly metricAnnotationsAllowList?: string;

/**
   * Comma-separated list of additional Kubernetes label keys that will be used in the resource's labels metric (Example: 'namespaces=[k8s-label-1,k8s-label-n,...],pods=[app],...'). By default the metric contains only resource name and namespace labels.
   */
readonly metricLabelsAllowlist?: string;

/**
   * The HTTP proxy server endpoint to use.
   */
readonly httpProxy?: string;

/**
   * The HTTPS proxy server endpoint to use.
   */
readonly httpsProxy?: string;

/**
   * The endpoints that should not go through proxy.
   */
readonly noProxy?: string[];

/**
   * Alternative CA cert to use for connecting to proxy servers.
   */
readonly trustedCa?: string;

/**
   * 
   */
readonly {customized property}?: UserAssignedIdentity;

/**
   * The client ID of the user assigned identity.
   */
readonly clientId?: string;

/**
   * The object ID of the user assigned identity.
   */
readonly objectId?: string;

/**
   * The resource ID of the user assigned identity.
   */
readonly resourceId?: string;

/**
   * The administrator username to use for Linux VMs.
   */
readonly adminUsername: string Constranumbers:Pattern =^[A-Za-z][-A-Za-z0-9_]*$;

/**
   * The SSH configuration for Linux-based VMs running on Azure.
   */
readonly ssh: ContainerServiceSshConfiguration;

/**
   * The list of SSH public keys used to authenticate with Linux-based VMs. A maximum of 1 key may be specified.
   */
readonly publicKeys: ContainerServiceSshPublicKey[];

/**
   * Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.
   */
readonly keyData: string;

/**
   * An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
   */
readonly dnsServiceIP?: stringConstranumbers:Pattern =^(?:(?:25[0-5];

/**
   * IP families are used to determine single-stack or dual-stack clusters. For single-stack, the expected value is IPv4. For dual-stack, the expected values are IPv4 and IPv6.
   */
readonly ipFamilies?: String array containing any of:'IPv4''IPv6';

/**
   * Profile of the cluster load balancer.
   */
readonly loadBalancerProfile?: ManagedClusterLoadBalancerProfile;

/**
   * The default is 'standard'. SeeAzure Load Balancer SKUsfor more information about the differences between load balancer SKUs.
   */
readonly loadBalancerSku?: 'basic''standard';

/**
   * Profile of the cluster NAT gateway.
   */
readonly natGatewayProfile?: ManagedClusterNATGatewayProfile;

/**
   * Network dataplane used in the Kubernetes cluster.
   */
readonly networkDataplane?: 'azure''cilium';

/**
   * This cannot be specified if networkPlugin is anything other than 'azure'.
   */
readonly networkMode?: 'bridge''transparent';

/**
   * Network plugin used for building the Kubernetes network.
   */
readonly networkPlugin?: 'azure''kubenet''none';

/**
   * The mode the network plugin should use.
   */
readonly networkPluginMode?: 'overlay';

/**
   * Network policy used for building the Kubernetes network.
   */
readonly networkPolicy?: 'azure''calico''cilium';

/**
   * This can only be set at cluster creation time and cannot be changed later. For more information seeegress outbound type.
   */
readonly outboundType?: 'loadBalancer''managedNATGateway''userAssignedNATGateway''userDefinedRouting';

/**
   * A CIDR notation IP range from which to assign pod IPs when kubenet is used.
   */
readonly podCidr?: stringConstranumbers:Pattern =^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9];

/**
   * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking.
   */
readonly podCidrs?: string[];

/**
   * A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
   */
readonly serviceCidr?: stringConstranumbers:Pattern =^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9];

/**
   * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking. They must not overlap with any Subnet IP ranges.
   */
readonly serviceCidrs?: string[];

/**
   * The desired number of allocated SNAT ports per VM. Allowed values are in the range of 0 to 64000 (inclusive). The default value is 0 which results in Azure dynamically allocating ports.
   */
readonly allocatedOutboundPorts?: numberConstranumbers:Min value = 0Max value = 64000;

/**
   * The type of the managed inbound Load Balancer BackendPool.
   */
readonly backendPoolType?: 'NodeIP''NodeIPConfiguration';

/**
   * The effective outbound IP resources of the cluster load balancer.
   */
readonly effectiveOutboundIPs?: ResourceReference[];

/**
   * Enable multiple standard load balancers per AKS cluster or not.
   */
readonly enableMultipleStandardLoadBalancers?: bool;

/**
   * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 30 minutes.
   */
readonly idleTimeoutInMinutes?: numberConstranumbers:Min value = 4Max value = 120;

/**
   * Desired managed outbound IPs for the cluster load balancer.
   */
readonly managedOutboundIPs?: ManagedClusterLoadBalancerProfileManagedOutboundIPs;

/**
   * Desired outbound IP Prefix resources for the cluster load balancer.
   */
readonly outboundIPPrefixes?: ManagedClusterLoadBalancerProfileOutboundIPPrefixes;

/**
   * Desired outbound IP resources for the cluster load balancer.
   */
readonly outboundIPs?: ManagedClusterLoadBalancerProfileOutboundIPs;

/**
   * The fully qualified Azure resource id.
   */
readonly id?: string;

/**
   * The desired number of IPv4 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
   */
readonly count?: numberConstranumbers:Min value = 1Max value = 100;

/**
   * The desired number of IPv6 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 0 for single-stack and 1 for dual-stack.
   */
readonly countIPv6?: numberConstranumbers:Min value = 0Max value = 100;

/**
   * A list of public IP prefix resources.
   */
readonly publicIPPrefixes?: ResourceReference[];

/**
   * A list of public IP resources.
   */
readonly publicIPs?: ResourceReference[];

/**
   * The effective outbound IP resources of the cluster NAT gateway.
   */
readonly effectiveOutboundIPs?: ResourceReference[];

/**
   * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 4 minutes.
   */
readonly idleTimeoutInMinutes?: numberConstranumbers:Min value = 4Max value = 120;

/**
   * Profile of the managed outbound IP resources of the cluster NAT gateway.
   */
readonly managedOutboundIPProfile?: ManagedClusterManagedOutboundIPProfile;

/**
   * The desired number of outbound IPs created/managed by Azure. Allowed values must be in the range of 1 to 16 (inclusive). The default value is 1.
   */
readonly count?: numberConstranumbers:Min value = 1Max value = 16;

/**
   * Whether the OIDC issuer is enabled.
   */
readonly enabled?: bool;

/**
   * Running in Kubenet is disabled by default due to the security related nature of AAD Pod Identity and the risks of IP spoofing. Seeusing Kubenet network plugin with AAD Pod Identityfor more information.
   */
readonly allowNetworkPluginKubenet?: bool;

/**
   * Whether the pod identity addon is enabled.
   */
readonly enabled?: bool;

/**
   * The pod identities to use in the cluster.
   */
readonly userAssignedIdentities?: ManagedClusterPodIdentity[];

/**
   * The pod identity exceptions to allow.
   */
readonly userAssignedIdentityExceptions?: ManagedClusterPodIdentityException[];

/**
   * The binding selector to use for the AzureIdentityBinding resource.
   */
readonly bindingSelector?: string;

/**
   * The user assigned identity details.
   */
readonly identity: UserAssignedIdentity;

/**
   * The namespace of the pod identity.
   */
readonly namespace: string;

/**
   * The namespace of the pod identity exception.
   */
readonly namespace: string;

/**
   * The pod labels to match.
   */
readonly podLabels: ManagedClusterPodIdentityExceptionPodLabels;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * The group ID of the resource.
   */
readonly groupId?: string;

/**
   * The ID of the private link resource.
   */
readonly id?: string;

/**
   * The RequiredMembers of the resource
   */
readonly requiredMembers?: string[];

/**
   * The resource type.
   */
readonly type?: string;

/**
   * Azure Key Vaultkey management servicesettings for the security profile.
   */
readonly azureKeyVaultKms?: AzureKeyVaultKms;

/**
   * Microsoft Defender settings for the security profile.
   */
readonly defender?: ManagedClusterSecurityProfileDefender;

/**
   * Image Cleaner settings for the security profile.
   */
readonly imageCleaner?: ManagedClusterSecurityProfileImageCleaner;

/**
   * Workload identity settings for the security profile. Workload identity enables Kubernetes applications to access Azure cloud resources securely with Azure AD. Seehttps://aka.ms/aks/wifor more details.
   */
readonly workloadIdentity?: ManagedClusterSecurityProfileWorkloadIdentity;

/**
   * Whether to enable Azure Key Vault key management service. The default is false.
   */
readonly enabled?: bool;

/**
   * Identifier of Azure Key Vault key. Seekey identifier formatfor more details. When Azure Key Vault key management service is enabled, this field is required and must be a valid key identifier. When Azure Key Vault key management service is disabled, leave the field empty.
   */
readonly keyId?: string;

/**
   * Network access of key vault. The possible values arePublicandPrivate.Publicmeans the key vault allows public access from all networks.Privatemeans the key vault disables public access and enables private link. The default value isPublic.
   */
readonly keyVaultNetworkAccess?: 'Private''Public';

/**
   * Resource ID of key vault. When keyVaultNetworkAccess isPrivate, this field is required and must be a valid resource ID. When keyVaultNetworkAccess isPublic, leave the field empty.
   */
readonly keyVaultResourceId?: string;

/**
   * Resource ID of the Log Analytics workspace to be associated with Microsoft Defender. When Microsoft Defender is enabled, this field is required and must be a valid workspace resource ID. When Microsoft Defender is disabled, leave the field empty.
   */
readonly logAnalyticsWorkspaceResourceId?: string;

/**
   * Microsoft Defender threat detection for Cloud settings for the security profile.
   */
readonly securityMonitoring?: ManagedClusterSecurityProfileDefenderSecurityMonitor...;

/**
   * Whether to enable Defender threat detection
   */
readonly enabled?: bool;

/**
   * Whether to enable Image Cleaner on AKS cluster.
   */
readonly enabled?: bool;

/**
   * Image Cleaner scanning interval in hours.
   */
readonly intervalHours?: number;

/**
   * Whether to enable workload identity.
   */
readonly enabled?: bool;

/**
   * Istio service mesh configuration.
   */
readonly istio?: IstioServiceMesh;

/**
   * Mode of the service mesh.
   */
readonly mode: 'Disabled''Istio';

/**
   * Istio Service Mesh Certificate Authority (CA) configuration. For now, we only support plugin certificates as described herehttps://aka.ms/asm-plugin-ca
   */
readonly certificateAuthority?: IstioCertificateAuthority;

/**
   * Istio components configuration.
   */
readonly components?: IstioComponents;

/**
   * The list of revisions of the Istio control plane. When an upgrade is not in progress, this holds one value. When canary upgrade is in progress, this can only hold two consecutive values. For more information, see:https://learn.microsoft.com/azure/aks/istio-upgrade
   */
readonly revisions?: string[]Constranumbers:Max length = 2;

/**
   * Plugin certificates information for Service Mesh.
   */
readonly plugin?: IstioPluginCertificateAuthority;

/**
   * Certificate chain object name in Azure Key Vault.
   */
readonly certChainObjectName?: string;

/**
   * Intermediate certificate object name in Azure Key Vault.
   */
readonly certObjectName?: string;

/**
   * Intermediate certificate private key object name in Azure Key Vault.
   */
readonly keyObjectName?: string;

/**
   * The resource ID of the Key Vault.
   */
readonly keyVaultId?: string;

/**
   * Root certificate object name in Azure Key Vault.
   */
readonly rootCertObjectName?: string;

/**
   * Istio egress gateways.
   */
readonly egressGateways?: IstioEgressGateway[];

/**
   * Istio ingress gateways.
   */
readonly ingressGateways?: IstioIngressGateway[];

/**
   * Whether to enable the egress gateway.
   */
readonly enabled: bool;

/**
   * NodeSelector for scheduling the egress gateway.
   */
readonly nodeSelector?: IstioEgressGatewayNodeSelector;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * Whether to enable the ingress gateway.
   */
readonly enabled: bool;

/**
   * Mode of an ingress gateway.
   */
readonly mode: 'External''Internal';

/**
   * The ID for the service principal.
   */
readonly clientId: string;

/**
   * The secret password associated with the service principal in plain text.
   */
readonly secret?: string;

/**
   * AzureBlob CSI Driver settings for the storage profile.
   */
readonly blobCSIDriver?: ManagedClusterStorageProfileBlobCSIDriver;

/**
   * AzureDisk CSI Driver settings for the storage profile.
   */
readonly diskCSIDriver?: ManagedClusterStorageProfileDiskCSIDriver;

/**
   * AzureFile CSI Driver settings for the storage profile.
   */
readonly fileCSIDriver?: ManagedClusterStorageProfileFileCSIDriver;

/**
   * Snapshot Controller settings for the storage profile.
   */
readonly snapshotController?: ManagedClusterStorageProfileSnapshotController;

/**
   * Whether to enable AzureBlob CSI Driver. The default value is false.
   */
readonly enabled?: bool;

/**
   * Whether to enable AzureDisk CSI Driver. The default value is true.
   */
readonly enabled?: bool;

/**
   * Whether to enable AzureFile CSI Driver. The default value is true.
   */
readonly enabled?: bool;

/**
   * Whether to enable Snapshot Controller. The default value is true.
   */
readonly enabled?: bool;

/**
   * Settings for overrides.
   */
readonly overrideSettings?: UpgradeOverrideSettings;

/**
   * Whether to force upgrade the cluster. Note that this option instructs upgrade operation to bypass upgrade protections such as checking for deprecated API usage. Enable this option only with caution.
   */
readonly forceUpgrade?: bool;

/**
   * Until when the overrides are effective. Note that this only matches the start time of an upgrade, and the effectiveness won't change once an upgrade starts even if theuntilexpires as upgrade proceeds. This field is not set by default. It must be set for the overrides to take effect.
   */
readonly until?: string;

/**
   * Specifies the password of the administrator account.Minimum-length:8 charactersMax-length:123 charactersComplexity requirements:3 out of 4 conditions below need to be fulfilledHas lower charactersHas upper charactersHas a digitHas a special character (Regex match [\W_])Disallowed values:"abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!"
   */
readonly adminPassword?: string;

/**
   * Specifies the name of the administrator account.Restriction:Cannot end in "."Disallowed values:"administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5".Minimum-length:1 characterMax-length:20 characters
   */
readonly adminUsername: string;

/**
   * For more details on CSI proxy, see theCSI proxy GitHub repo.
   */
readonly enableCSIProxy?: bool;

/**
   * The Windows gMSA Profile in the Managed Cluster.
   */
readonly gmsaProfile?: WindowsGmsaProfile;

/**
   * The license type to use for Windows VMs. SeeAzure Hybrid User Benefitsfor more details.
   */
readonly licenseType?: 'None''Windows_Server';

/**
   * Specifies the DNS server for Windows gMSA.Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
   */
readonly dnsServer?: string;

/**
   * Specifies whether to enable Windows gMSA in the managed cluster.
   */
readonly enabled?: bool;

/**
   * Specifies the root domain name for Windows gMSA.Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
   */
readonly rootDomainName?: string;

/**
   * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
   */
readonly keda?: ManagedClusterWorkloadAutoScalerProfileKeda;

/**
   * VPA (Vertical Pod Autoscaler) settings for the workload auto-scaler profile.
   */
readonly verticalPodAutoscaler?: ManagedClusterWorkloadAutoScalerProfileVerticalPodAu...;

/**
   * Whether to enable KEDA.
   */
readonly enabled: bool;

/**
   * Whether to enable VPA. Default value is false.
   */
readonly enabled: bool;

/**
   * If not specified, the default is 'Free'. SeeAKS Pricing Tierfor more details.
   */
readonly tier?: 'Free''Premium''Standard';
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
