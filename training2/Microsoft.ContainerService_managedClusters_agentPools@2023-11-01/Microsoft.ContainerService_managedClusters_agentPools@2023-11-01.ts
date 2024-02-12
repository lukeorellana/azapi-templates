import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:managedClusters;

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
   * Possible values are any decimal value greater than zero or -1 which indicates the willingness to pay any on-demand price. For more details on spot pricing, seespot VMs pricing
   */
readonly spotMaxPrice?: number;

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
