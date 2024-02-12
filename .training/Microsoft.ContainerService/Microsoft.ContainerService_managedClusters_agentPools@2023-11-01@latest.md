```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerService/managedClusters/agentPools@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      availabilityZones = [
        "string"
      ]
      capacityReservationGroupID = "string"
      count = int
      creationData = {
        sourceResourceId = "string"
      }
      enableAutoScaling = bool
      enableEncryptionAtHost = bool
      enableFIPS = bool
      enableNodePublicIP = bool
      enableUltraSSD = bool
      gpuInstanceProfile = "string"
      hostGroupID = "string"
      kubeletConfig = {
        allowedUnsafeSysctls = [
          "string"
        ]
        containerLogMaxFiles = int
        containerLogMaxSizeMB = int
        cpuCfsQuota = bool
        cpuCfsQuotaPeriod = "string"
        cpuManagerPolicy = "string"
        failSwapOn = bool
        imageGcHighThreshold = int
        imageGcLowThreshold = int
        podMaxPids = int
        topologyManagerPolicy = "string"
      }
      kubeletDiskType = "string"
      linuxOSConfig = {
        swapFileSizeMB = int
        sysctls = {
          fsAioMaxNr = int
          fsFileMax = int
          fsInotifyMaxUserWatches = int
          fsNrOpen = int
          kernelThreadsMax = int
          netCoreNetdevMaxBacklog = int
          netCoreOptmemMax = int
          netCoreRmemDefault = int
          netCoreRmemMax = int
          netCoreSomaxconn = int
          netCoreWmemDefault = int
          netCoreWmemMax = int
          netIpv4IpLocalPortRange = "string"
          netIpv4NeighDefaultGcThresh1 = int
          netIpv4NeighDefaultGcThresh2 = int
          netIpv4NeighDefaultGcThresh3 = int
          netIpv4TcpFinTimeout = int
          netIpv4TcpkeepaliveIntvl = int
          netIpv4TcpKeepaliveProbes = int
          netIpv4TcpKeepaliveTime = int
          netIpv4TcpMaxSynBacklog = int
          netIpv4TcpMaxTwBuckets = int
          netIpv4TcpTwReuse = bool
          netNetfilterNfConntrackBuckets = int
          netNetfilterNfConntrackMax = int
          vmMaxMapCount = int
          vmSwappiness = int
          vmVfsCachePressure = int
        }
        transparentHugePageDefrag = "string"
        transparentHugePageEnabled = "string"
      }
      maxCount = int
      maxPods = int
      minCount = int
      mode = "string"
      networkProfile = {
        allowedHostPorts = [
          {
            portEnd = int
            portStart = int
            protocol = "string"
          }
        ]
        applicationSecurityGroups = [
          "string"
        ]
        nodePublicIPTags = [
          {
            ipTagType = "string"
            tag = "string"
          }
        ]
      }
      nodeLabels = {
        {customized property} = "string"
        {customized property} = "string"
      }
      nodePublicIPPrefixID = "string"
      nodeTaints = [
        "string"
      ]
      orchestratorVersion = "string"
      osDiskSizeGB = int
      osDiskType = "string"
      osSKU = "string"
      osType = "string"
      podSubnetID = "string"
      powerState = {
        code = "string"
      }
      proximityPlacementGroupID = "string"
      scaleDownMode = "string"
      scaleSetEvictionPolicy = "string"
      scaleSetPriority = "string"
      spotMaxPrice = int
      tags = {
        {customized property} = "string"
        {customized property} = "string"
      }
      type = "string"
      upgradeSettings = {
        drainTimeoutInMinutes = int
        maxSurge = "string"
        nodeSoakDurationInMinutes = int
      }
      vmSize = "string"
      vnetSubnetID = "string"
      workloadRuntime = "string"
    }
  })
}

```

### managedClusters/agentPools

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-12 for Linux1-6 for WindowsValid characters:Lowercase letters and numbers.Can't start with a number. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedClusters |
| properties | Properties of an agent pool. | ManagedClusterAgentPoolProfileProperties |


### ManagedClusterAgentPoolProfileProperties

| Name | Description | Value |
|-|-|-|
| availabilityZones | The list of Availability zones to use for nodes. This can only be specified if the AgentPoolType property is 'VirtualMachineScaleSets'. | string[] |
| capacityReservationGroupID | AKS will associate the specified agent pool with the Capacity Reservation Group. | string |
| count | Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 1000 (inclusive) for user pools and in the range of 1 to 1000 (inclusive) for system pools. The default value is 1. | int |
| creationData | CreationData to be used to specify the source Snapshot ID if the node pool will be created/upgraded using a snapshot. | CreationData |
| enableAutoScaling | Whether to enable auto-scaler | bool |
| enableEncryptionAtHost | This is only supported on certain VM sizes and in certain Azure regions. For more information, see:https://docs.microsoft.com/azure/aks/enable-host-encryption | bool |
| enableFIPS | SeeAdd a FIPS-enabled node poolfor more details. | bool |
| enableNodePublicIP | Some scenarios may require nodes in a node pool to receive their own dedicated public IP addresses. A common scenario is for gaming workloads, where a console needs to make a direct connection to a cloud virtual machine to minimize hops. For more information seeassigning a public IP per node. The default is false. | bool |
| enableUltraSSD | Whether to enable UltraSSD | bool |
| gpuInstanceProfile | GPUInstanceProfile to be used to specify GPU MIG instance profile for supported GPU VM SKU. | 'MIG1g''MIG2g''MIG3g''MIG4g''MIG7g' |
| hostGroupID | This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}. For more information seeAzure dedicated hosts. | string |
| kubeletConfig | The Kubelet configuration on the agent pool nodes. | KubeletConfig |
| kubeletDiskType | Determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage. | 'OS''Temporary' |
| linuxOSConfig | The OS configuration of Linux agent nodes. | LinuxOSConfig |
| maxCount | The maximum number of nodes for auto-scaling | int |
| maxPods | The maximum number of pods that can run on a node. | int |
| minCount | The minimum number of nodes for auto-scaling | int |
| mode | A cluster must have at least one 'System' Agent Pool at all times. For additional information on agent pool restrictions and best practices, see:https://docs.microsoft.com/azure/aks/use-system-pools | 'System''User' |
| networkProfile | Network-related settings of an agent pool. | AgentPoolNetworkProfile |
| nodeLabels | The node labels to be persisted across all nodes in agent pool. | ManagedClusterAgentPoolProfilePropertiesNodeLabels |
| nodePublicIPPrefixID | This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIPPrefixName} | string |
| nodeTaints | The taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule. | string[] |
| orchestratorVersion | Both patch version {major.minor.patch} (e.g. 1.20.13) and {major.minor} (e.g. 1.20) are supported. When {major.minor} is specified, the latest supported GA patch version is chosen automatically. Updating the cluster with the same {major.minor} once it has been created (e.g. 1.14.x -} 1.14) will not trigger an upgrade, even if a newer patch version is available. As a best practice, you should upgrade all node pools in an AKS cluster to the same Kubernetes version. The node pool version must have the same major version as the control plane. The node pool minor version must be within two minor versions of the control plane version. The node pool version cannot be greater than the control plane version. For more information seeupgrading a node pool. | string |
| osDiskSizeGB | OS Disk Size in GB to be used to specify the disk size for every machine in the master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified. | intConstraints:Min value = 0Max value = 2048 |
| osDiskType | The default is 'Ephemeral' if the VM supports it and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation. For more information seeEphemeral OS. | 'Ephemeral''Managed' |
| osSKU | Specifies the OS SKU used by the agent pool. The default is Ubuntu if OSType is Linux. The default is Windows2019 when Kubernetes <= 1.24 or Windows2022 when Kubernetes >= 1.25 if OSType is Windows. | 'AzureLinux''CBLMariner''Ubuntu''Windows2019''Windows2022' |
| osType | The operating system type. The default is Linux. | 'Linux''Windows' |
| podSubnetID | If omitted, pod IPs are statically assigned on the node subnet (see vnetSubnetID for more details). This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName} | string |
| powerState | When an Agent Pool is first created it is initially Running. The Agent Pool can be stopped by setting this field to Stopped. A stopped Agent Pool stops all of its VMs and does not accrue billing charges. An Agent Pool can only be stopped if it is Running and provisioning state is Succeeded | PowerState |
| proximityPlacementGroupID | The ID for Proximity Placement Group. | string |
| scaleDownMode | This also effects the cluster autoscaler behavior. If not specified, it defaults to Delete. | 'Deallocate''Delete' |
| scaleSetEvictionPolicy | This cannot be specified unless the scaleSetPriority is 'Spot'. If not specified, the default is 'Delete'. | 'Deallocate''Delete' |
| scaleSetPriority | The Virtual Machine Scale Set priority. If not specified, the default is 'Regular'. | 'Regular''Spot' |
| spotMaxPrice | Possible values are any decimal value greater than zero or -1 which indicates the willingness to pay any on-demand price. For more details on spot pricing, seespot VMs pricing | int |
| tags | The tags to be persisted on the agent pool virtual machine scale set. | object |
| type | The type of Agent Pool. | 'AvailabilitySet''VirtualMachineScaleSets' |
| upgradeSettings | Settings for upgrading the agentpool | AgentPoolUpgradeSettings |
| vmSize | VM size availability varies by region. If a node contains insufficient compute resources (memory, cpu, etc) pods might fail to run correctly. For more details on restricted VM sizes, see:https://docs.microsoft.com/azure/aks/quotas-skus-regions | string |
| vnetSubnetID | If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName} | string |
| workloadRuntime | Determines the type of workload a node can run. | 'OCIContainer''WasmWasi' |


### CreationData

| Name | Description | Value |
|-|-|-|
| sourceResourceId | This is the ARM ID of the source object to be used to create the target object. | string |


### KubeletConfig

| Name | Description | Value |
|-|-|-|
| allowedUnsafeSysctls | Allowed list of unsafe sysctls or unsafe sysctl patterns (ending in*). | string[] |
| containerLogMaxFiles | The maximum number of container log files that can be present for a container. The number must be â¥ 2. | intConstraints:Min value = 2 |
| containerLogMaxSizeMB | The maximum size (e.g. 10Mi) of container log file before it is rotated. | int |
| cpuCfsQuota | The default is true. | bool |
| cpuCfsQuotaPeriod | The default is '100ms.' Valid values are a sequence of decimal numbers with an optional fraction and a unit suffix. For example: '300ms', '2h45m'. Supported units are 'ns', 'us', 'ms', 's', 'm', and 'h'. | string |
| cpuManagerPolicy | The default is 'none'. SeeKubernetes CPU management policiesfor more information. Allowed values are 'none' and 'static'. | string |
| failSwapOn | If set to true it will make the Kubelet fail to start if swap is enabled on the node. | bool |
| imageGcHighThreshold | To disable image garbage collection, set to 100. The default is 85% | int |
| imageGcLowThreshold | This cannot be set higher than imageGcHighThreshold. The default is 80% | int |
| podMaxPids | The maximum number of processes per pod. | int |
| topologyManagerPolicy | For more information seeKubernetes Topology Manager. The default is 'none'. Allowed values are 'none', 'best-effort', 'restricted', and 'single-numa-node'. | string |


### LinuxOSConfig

| Name | Description | Value |
|-|-|-|
| swapFileSizeMB | The size in MB of a swap file that will be created on each node. | int |
| sysctls | Sysctl settings for Linux agent nodes. | SysctlConfig |
| transparentHugePageDefrag | Valid values are 'always', 'defer', 'defer+madvise', 'madvise' and 'never'. The default is 'madvise'. For more information seeTransparent Hugepages. | string |
| transparentHugePageEnabled | Valid values are 'always', 'madvise', and 'never'. The default is 'always'. For more information seeTransparent Hugepages. | string |


### SysctlConfig

| Name | Description | Value |
|-|-|-|
| fsAioMaxNr | Sysctl setting fs.aio-max-nr. | int |
| fsFileMax | Sysctl setting fs.file-max. | int |
| fsInotifyMaxUserWatches | Sysctl setting fs.inotify.max_user_watches. | int |
| fsNrOpen | Sysctl setting fs.nr_open. | int |
| kernelThreadsMax | Sysctl setting kernel.threads-max. | int |
| netCoreNetdevMaxBacklog | Sysctl setting net.core.netdev_max_backlog. | int |
| netCoreOptmemMax | Sysctl setting net.core.optmem_max. | int |
| netCoreRmemDefault | Sysctl setting net.core.rmem_default. | int |
| netCoreRmemMax | Sysctl setting net.core.rmem_max. | int |
| netCoreSomaxconn | Sysctl setting net.core.somaxconn. | int |
| netCoreWmemDefault | Sysctl setting net.core.wmem_default. | int |
| netCoreWmemMax | Sysctl setting net.core.wmem_max. | int |
| netIpv4IpLocalPortRange | Sysctl setting net.ipv4.ip_local_port_range. | string |
| netIpv4NeighDefaultGcThresh1 | Sysctl setting net.ipv4.neigh.default.gc_thresh1. | int |
| netIpv4NeighDefaultGcThresh2 | Sysctl setting net.ipv4.neigh.default.gc_thresh2. | int |
| netIpv4NeighDefaultGcThresh3 | Sysctl setting net.ipv4.neigh.default.gc_thresh3. | int |
| netIpv4TcpFinTimeout | Sysctl setting net.ipv4.tcp_fin_timeout. | int |
| netIpv4TcpkeepaliveIntvl | Sysctl setting net.ipv4.tcp_keepalive_intvl. | intConstraints:Min value = 10Max value = 90 |
| netIpv4TcpKeepaliveProbes | Sysctl setting net.ipv4.tcp_keepalive_probes. | int |
| netIpv4TcpKeepaliveTime | Sysctl setting net.ipv4.tcp_keepalive_time. | int |
| netIpv4TcpMaxSynBacklog | Sysctl setting net.ipv4.tcp_max_syn_backlog. | int |
| netIpv4TcpMaxTwBuckets | Sysctl setting net.ipv4.tcp_max_tw_buckets. | int |
| netIpv4TcpTwReuse | Sysctl setting net.ipv4.tcp_tw_reuse. | bool |
| netNetfilterNfConntrackBuckets | Sysctl setting net.netfilter.nf_conntrack_buckets. | intConstraints:Min value = 65536Max value = 524288 |
| netNetfilterNfConntrackMax | Sysctl setting net.netfilter.nf_conntrack_max. | intConstraints:Min value = 131072Max value = 2097152 |
| vmMaxMapCount | Sysctl setting vm.max_map_count. | int |
| vmSwappiness | Sysctl setting vm.swappiness. | int |
| vmVfsCachePressure | Sysctl setting vm.vfs_cache_pressure. | int |


### AgentPoolNetworkProfile

| Name | Description | Value |
|-|-|-|
| allowedHostPorts | The port ranges that are allowed to access. The specified ranges are allowed to overlap. | PortRange[] |
| applicationSecurityGroups | The IDs of the application security groups which agent pool will associate when created. | string[] |
| nodePublicIPTags | IPTags of instance-level public IPs. | IPTag[] |


### PortRange

| Name | Description | Value |
|-|-|-|
| portEnd | The maximum port that is included in the range. It should be ranged from 1 to 65535, and be greater than or equal to portStart. | intConstraints:Min value = 1Max value = 65535 |
| portStart | The minimum port that is included in the range. It should be ranged from 1 to 65535, and be less than or equal to portEnd. | intConstraints:Min value = 1Max value = 65535 |
| protocol | The network protocol of the port. | 'TCP''UDP' |


### IPTag

| Name | Description | Value |
|-|-|-|
| ipTagType | The IP tag type. Example: RoutingPreference. | string |
| tag | The value of the IP tag associated with the public IP. Example: Internet. | string |


### ManagedClusterAgentPoolProfilePropertiesNodeLabels

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |


### PowerState

| Name | Description | Value |
|-|-|-|
| code | Tells whether the cluster is Running or Stopped | 'Running''Stopped' |


### AgentPoolUpgradeSettings

| Name | Description | Value |
|-|-|-|
| drainTimeoutInMinutes | The amount of time (in minutes) to wait on eviction of pods and graceful termination per node. This eviction wait time honors waiting on pod disruption budgets. If this time is exceeded, the upgrade fails. If not specified, the default is 30 minutes. | intConstraints:Min value = 1Max value = 1440 |
| maxSurge | This can either be set to an integer (e.g. '5') or a percentage (e.g. '50%'). If a percentage is specified, it is the percentage of the total agent pool size at the time of the upgrade. For percentages, fractional nodes are rounded up. If not specified, the default is 1. For more information, including best practices, see:https://docs.microsoft.com/azure/aks/upgrade-cluster#customize-node-surge-upgrade | string |
| nodeSoakDurationInMinutes | The amount of time (in minutes) to wait after draining a node and before reimaging it and moving on to next node. If not specified, the default is 0 minutes. | intConstraints:Min value = 0Max value = 30 |


