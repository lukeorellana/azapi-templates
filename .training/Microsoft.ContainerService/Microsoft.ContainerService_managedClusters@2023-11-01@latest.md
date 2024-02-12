```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerService/managedClusters@2023-11-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    delegatedResources = {
      {customized property} = {
        location = "string"
        referralResource = "string"
        resourceId = "string"
        tenantId = "string"
      }
    }
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      aadProfile = {
        adminGroupObjectIDs = [
          "string"
        ]
        clientAppID = "string"
        enableAzureRBAC = bool
        managed = bool
        serverAppID = "string"
        serverAppSecret = "string"
        tenantID = "string"
      }
      addonProfiles = {
        {customized property} = {
          config = {
            {customized property} = "string"
          }
          enabled = bool
        }
      }
      agentPoolProfiles = [
        {
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
          name = "string"
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
          spotMaxPrice = "decimal-as-string"
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
      ]
      apiServerAccessProfile = {
        authorizedIPRanges = [
          "string"
        ]
        disableRunCommand = bool
        enablePrivateCluster = bool
        enablePrivateClusterPublicFQDN = bool
        privateDNSZone = "string"
      }
      autoScalerProfile = {
        balance-similar-node-groups = "string"
        expander = "string"
        max-empty-bulk-delete = "string"
        max-graceful-termination-sec = "string"
        max-node-provision-time = "string"
        max-total-unready-percentage = "string"
        new-pod-scale-up-delay = "string"
        ok-total-unready-count = "string"
        scale-down-delay-after-add = "string"
        scale-down-delay-after-delete = "string"
        scale-down-delay-after-failure = "string"
        scale-down-unneeded-time = "string"
        scale-down-unready-time = "string"
        scale-down-utilization-threshold = "string"
        scan-interval = "string"
        skip-nodes-with-local-storage = "string"
        skip-nodes-with-system-pods = "string"
      }
      autoUpgradeProfile = {
        nodeOSUpgradeChannel = "string"
        upgradeChannel = "string"
      }
      azureMonitorProfile = {
        metrics = {
          enabled = bool
          kubeStateMetrics = {
            metricAnnotationsAllowList = "string"
            metricLabelsAllowlist = "string"
          }
        }
      }
      disableLocalAccounts = bool
      diskEncryptionSetID = "string"
      dnsPrefix = "string"
      enablePodSecurityPolicy = bool
      enableRBAC = bool
      fqdnSubdomain = "string"
      httpProxyConfig = {
        httpProxy = "string"
        httpsProxy = "string"
        noProxy = [
          "string"
        ]
        trustedCa = "string"
      }
      identityProfile = {
        {customized property} = {
          clientId = "string"
          objectId = "string"
          resourceId = "string"
        }
      }
      kubernetesVersion = "string"
      linuxProfile = {
        adminUsername = "string"
        ssh = {
          publicKeys = [
            {
              keyData = "string"
            }
          ]
        }
      }
      networkProfile = {
        dnsServiceIP = "string"
        ipFamilies = [
          "string"
        ]
        loadBalancerProfile = {
          allocatedOutboundPorts = int
          backendPoolType = "string"
          effectiveOutboundIPs = [
            {
              id = "string"
            }
          ]
          enableMultipleStandardLoadBalancers = bool
          idleTimeoutInMinutes = int
          managedOutboundIPs = {
            count = int
            countIPv6 = int
          }
          outboundIPPrefixes = {
            publicIPPrefixes = [
              {
                id = "string"
              }
            ]
          }
          outboundIPs = {
            publicIPs = [
              {
                id = "string"
              }
            ]
          }
        }
        loadBalancerSku = "string"
        natGatewayProfile = {
          effectiveOutboundIPs = [
            {
              id = "string"
            }
          ]
          idleTimeoutInMinutes = int
          managedOutboundIPProfile = {
            count = int
          }
        }
        networkDataplane = "string"
        networkMode = "string"
        networkPlugin = "string"
        networkPluginMode = "overlay"
        networkPolicy = "string"
        outboundType = "string"
        podCidr = "string"
        podCidrs = [
          "string"
        ]
        serviceCidr = "string"
        serviceCidrs = [
          "string"
        ]
      }
      nodeResourceGroup = "string"
      oidcIssuerProfile = {
        enabled = bool
      }
      podIdentityProfile = {
        allowNetworkPluginKubenet = bool
        enabled = bool
        userAssignedIdentities = [
          {
            bindingSelector = "string"
            identity = {
              clientId = "string"
              objectId = "string"
              resourceId = "string"
            }
            name = "string"
            namespace = "string"
          }
        ]
        userAssignedIdentityExceptions = [
          {
            name = "string"
            namespace = "string"
            podLabels = {
              {customized property} = "string"
            }
          }
        ]
      }
      privateLinkResources = [
        {
          groupId = "string"
          id = "string"
          name = "string"
          requiredMembers = [
            "string"
          ]
          type = "string"
        }
      ]
      publicNetworkAccess = "string"
      securityProfile = {
        azureKeyVaultKms = {
          enabled = bool
          keyId = "string"
          keyVaultNetworkAccess = "string"
          keyVaultResourceId = "string"
        }
        defender = {
          logAnalyticsWorkspaceResourceId = "string"
          securityMonitoring = {
            enabled = bool
          }
        }
        imageCleaner = {
          enabled = bool
          intervalHours = int
        }
        workloadIdentity = {
          enabled = bool
        }
      }
      serviceMeshProfile = {
        istio = {
          certificateAuthority = {
            plugin = {
              certChainObjectName = "string"
              certObjectName = "string"
              keyObjectName = "string"
              keyVaultId = "string"
              rootCertObjectName = "string"
            }
          }
          components = {
            egressGateways = [
              {
                enabled = bool
                nodeSelector = {
                  {customized property} = "string"
                }
              }
            ]
            ingressGateways = [
              {
                enabled = bool
                mode = "string"
              }
            ]
          }
          revisions = [
            "string"
          ]
        }
        mode = "string"
      }
      servicePrincipalProfile = {
        clientId = "string"
        secret = "string"
      }
      storageProfile = {
        blobCSIDriver = {
          enabled = bool
        }
        diskCSIDriver = {
          enabled = bool
        }
        fileCSIDriver = {
          enabled = bool
        }
        snapshotController = {
          enabled = bool
        }
      }
      supportPlan = "string"
      upgradeSettings = {
        overrideSettings = {
          forceUpgrade = bool
          until = "string"
        }
      }
      windowsProfile = {
        adminPassword = "string"
        adminUsername = "string"
        enableCSIProxy = bool
        gmsaProfile = {
          dnsServer = "string"
          enabled = bool
          rootDomainName = "string"
        }
        licenseType = "string"
      }
      workloadAutoScalerProfile = {
        keda = {
          enabled = bool
        }
        verticalPodAutoscaler = {
          enabled = bool
        }
      }
    }
    sku = {
      name = "Base"
      tier = "string"
    }
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

### managedClusters

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-63Valid characters:Alphanumerics, underscores, and hyphens.Start and end with alphanumeric. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The managed cluster SKU. | ManagedClusterSKU |
| extendedLocation | The extended location of the Virtual Machine. | ExtendedLocation |
| identity | The identity of the managed cluster, if configured. | ManagedClusterIdentity |
| properties | Properties of a managed cluster. | ManagedClusterProperties |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'EdgeZone' |


### ManagedClusterIdentity

| Name | Description | Value |
|-|-|-|
| delegatedResources | The delegated identity resources assigned to this managed cluster. This can only be set by another Azure Resource Provider, and managed cluster only accept one delegated identity resource. Internal use only. | DelegatedResources |
| type | For more information seeuse managed identities in AKS. | 'None''SystemAssigned''UserAssigned' |
| userAssignedIdentities | The keys must be ARM resource IDs in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | ManagedClusterIdentityUserAssignedIdentities |


### DelegatedResources

| Name | Description | Value |
|-|-|-|
| {customized property} |  | DelegatedResource |


### DelegatedResource

| Name | Description | Value |
|-|-|-|
| location | The source resource location - internal use only. | string |
| referralResource | The delegation id of the referral delegation (optional) - internal use only. | string |
| resourceId | The ARM resource id of the delegated resource - internal use only. | string |
| tenantId | The tenant id of the delegated resource - internal use only. | stringConstraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |


### ManagedClusterIdentityUserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | ManagedServiceIdentityUserAssignedIdentitiesValue |


### ManagedClusterProperties

| Name | Description | Value |
|-|-|-|
| aadProfile | The Azure Active Directory configuration. | ManagedClusterAADProfile |
| addonProfiles | The profile of managed cluster add-on. | ManagedClusterPropertiesAddonProfiles |
| agentPoolProfiles | The agent pool properties. | ManagedClusterAgentPoolProfile[] |
| apiServerAccessProfile | The access profile for managed cluster API server. | ManagedClusterAPIServerAccessProfile |
| autoScalerProfile | Parameters to be applied to the cluster-autoscaler when enabled | ManagedClusterPropertiesAutoScalerProfile |
| autoUpgradeProfile | The auto upgrade configuration. | ManagedClusterAutoUpgradeProfile |
| azureMonitorProfile | Azure Monitor addon profiles for monitoring the managed cluster. | ManagedClusterAzureMonitorProfile |
| disableLocalAccounts | If set to true, getting static credentials will be disabled for this cluster. This must only be used on Managed Clusters that are AAD enabled. For more details seedisable local accounts. | bool |
| diskEncryptionSetID | This is of the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{encryptionSetName}' | string |
| dnsPrefix | This cannot be updated once the Managed Cluster has been created. | string |
| enablePodSecurityPolicy | (DEPRECATED) Whether to enable Kubernetes pod security policy (preview). PodSecurityPolicy was deprecated in Kubernetes v1.21, and removed from Kubernetes in v1.25. Learn more athttps://aka.ms/k8s/pspandhttps://aka.ms/aks/psp. | bool |
| enableRBAC | Whether to enable Kubernetes Role-Based Access Control. | bool |
| fqdnSubdomain | This cannot be updated once the Managed Cluster has been created. | string |
| httpProxyConfig | Configurations for provisioning the cluster with HTTP proxy servers. | ManagedClusterHttpProxyConfig |
| identityProfile | Identities associated with the cluster. | ManagedClusterPropertiesIdentityProfile |
| kubernetesVersion | Both patch version {major.minor.patch} (e.g. 1.20.13) and {major.minor} (e.g. 1.20) are supported. When {major.minor} is specified, the latest supported GA patch version is chosen automatically. Updating the cluster with the same {major.minor} once it has been created (e.g. 1.14.x -} 1.14) will not trigger an upgrade, even if a newer patch version is available. When you upgrade a supported AKS cluster, Kubernetes minor versions cannot be skipped. All upgrades must be performed sequentially by major version number. For example, upgrades between 1.14.x -} 1.15.x or 1.15.x -} 1.16.x are allowed, however 1.14.x -} 1.16.x is not allowed. Seeupgrading an AKS clusterfor more details. | string |
| linuxProfile | The profile for Linux VMs in the Managed Cluster. | ContainerServiceLinuxProfile |
| networkProfile | The network configuration profile. | ContainerServiceNetworkProfile |
| nodeResourceGroup | The name of the resource group containing agent pool nodes. | string |
| oidcIssuerProfile | The OIDC issuer profile of the Managed Cluster. | ManagedClusterOidcIssuerProfile |
| podIdentityProfile | Seeuse AAD pod identityfor more details on AAD pod identity integration. | ManagedClusterPodIdentityProfile |
| privateLinkResources | Private link resources associated with the cluster. | PrivateLinkResource[] |
| publicNetworkAccess | Allow or deny public network access for AKS | 'Disabled''Enabled' |
| securityProfile | Security profile for the managed cluster. | ManagedClusterSecurityProfile |
| serviceMeshProfile | Service mesh profile for a managed cluster. | ServiceMeshProfile |
| servicePrincipalProfile | Information about a service principal identity for the cluster to use for manipulating Azure APIs. | ManagedClusterServicePrincipalProfile |
| storageProfile | Storage profile for the managed cluster. | ManagedClusterStorageProfile |
| supportPlan | The support plan for the Managed Cluster. If unspecified, the default is 'KubernetesOfficial'. | 'AKSLongTermSupport''KubernetesOfficial' |
| upgradeSettings | Settings for upgrading a cluster. | ClusterUpgradeSettings |
| windowsProfile | The profile for Windows VMs in the Managed Cluster. | ManagedClusterWindowsProfile |
| workloadAutoScalerProfile | Workload Auto-scaler profile for the managed cluster. | ManagedClusterWorkloadAutoScalerProfile |


### ManagedClusterAADProfile

| Name | Description | Value |
|-|-|-|
| adminGroupObjectIDs | The list of AAD group object IDs that will have admin role of the cluster. | string[] |
| clientAppID | (DEPRECATED) The client AAD application ID. Learn more athttps://aka.ms/aks/aad-legacy. | string |
| enableAzureRBAC | Whether to enable Azure RBAC for Kubernetes authorization. | bool |
| managed | Whether to enable managed AAD. | bool |
| serverAppID | (DEPRECATED) The server AAD application ID. Learn more athttps://aka.ms/aks/aad-legacy. | string |
| serverAppSecret | (DEPRECATED) The server AAD application secret. Learn more athttps://aka.ms/aks/aad-legacy. | string |
| tenantID | The AAD tenant ID to use for authentication. If not specified, will use the tenant of the deployment subscription. | string |


### ManagedClusterPropertiesAddonProfiles

| Name | Description | Value |
|-|-|-|
| {customized property} |  | ManagedClusterAddonProfile |


### ManagedClusterAddonProfile

| Name | Description | Value |
|-|-|-|
| config | Key-value pairs for configuring an add-on. | ManagedClusterAddonProfileConfig |
| enabled | Whether the add-on is enabled or not. | bool (required) |


### ManagedClusterAddonProfileConfig

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### ManagedClusterAgentPoolProfile

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
| name | Windows agent pool names must be 6 characters or less. | string (required)Constraints:Pattern =^[a-z][a-z0-9]{0,11}$ |
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
| spotMaxPrice | Possible values are any decimal value greater than zero or -1 which indicates the willingness to pay any on-demand price. For more details on spot pricing, seespot VMs pricingTo specify a decimal value, use thejson()function. | int or json decimal |
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


### ManagedClusterAPIServerAccessProfile

| Name | Description | Value |
|-|-|-|
| authorizedIPRanges | IP ranges are specified in CIDR format, e.g. 137.117.106.88/29. This feature is not compatible with clusters that use Public IP Per Node, or clusters that are using a Basic Load Balancer. For more information seeAPI server authorized IP ranges. | string[] |
| disableRunCommand | Whether to disable run command for the cluster or not. | bool |
| enablePrivateCluster | For more details, seeCreating a private AKS cluster. | bool |
| enablePrivateClusterPublicFQDN | Whether to create additional public FQDN for private cluster or not. | bool |
| privateDNSZone | The default is System. For more details seeconfigure private DNS zone. Allowed values are 'system' and 'none'. | string |


### ManagedClusterPropertiesAutoScalerProfile

| Name | Description | Value |
|-|-|-|
| balance-similar-node-groups | Valid values are 'true' and 'false' | string |
| expander | If not specified, the default is 'random'. Seeexpandersfor more information. | 'least-waste''most-pods''priority''random' |
| max-empty-bulk-delete | The default is 10. | string |
| max-graceful-termination-sec | The default is 600. | string |
| max-node-provision-time | The default is '15m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported. | string |
| max-total-unready-percentage | The default is 45. The maximum is 100 and the minimum is 0. | string |
| new-pod-scale-up-delay | For scenarios like burst/batch scale where you don't want CA to act before the kubernetes scheduler could schedule all the pods, you can tell CA to ignore unscheduled pods before they're a certain age. The default is '0s'. Values must be an integer followed by a unit ('s' for seconds, 'm' for minutes, 'h' for hours, etc). | string |
| ok-total-unready-count | This must be an integer. The default is 3. | string |
| scale-down-delay-after-add | The default is '10m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported. | string |
| scale-down-delay-after-delete | The default is the scan-interval. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported. | string |
| scale-down-delay-after-failure | The default is '3m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported. | string |
| scale-down-unneeded-time | The default is '10m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported. | string |
| scale-down-unready-time | The default is '20m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported. | string |
| scale-down-utilization-threshold | The default is '0.5'. | string |
| scan-interval | The default is '10'. Values must be an integer number of seconds. | string |
| skip-nodes-with-local-storage | The default is true. | string |
| skip-nodes-with-system-pods | The default is true. | string |


### ManagedClusterAutoUpgradeProfile

| Name | Description | Value |
|-|-|-|
| nodeOSUpgradeChannel | Manner in which the OS on your nodes is updated. The default is NodeImage. | 'NodeImage''None''Unmanaged' |
| upgradeChannel | For more information seesetting the AKS cluster auto-upgrade channel. | 'node-image''none''patch''rapid''stable' |


### ManagedClusterAzureMonitorProfile

| Name | Description | Value |
|-|-|-|
| metrics | Metrics profile for the Azure Monitor managed service for Prometheus addon. Collect out-of-the-box Kubernetes infrastructure metrics to send to an Azure Monitor Workspace and configure additional scraping for custom targets. See aka.ms/AzureManagedPrometheus for an overview. | ManagedClusterAzureMonitorProfileMetrics |


### ManagedClusterAzureMonitorProfileMetrics

| Name | Description | Value |
|-|-|-|
| enabled | Whether to enable or disable the Azure Managed Prometheus addon for Prometheus monitoring. See aka.ms/AzureManagedPrometheus-aks-enable for details on enabling and disabling. | bool (required) |
| kubeStateMetrics | Kube State Metrics profile for the Azure Managed Prometheus addon. These optional settings are for the kube-state-metrics pod that is deployed with the addon. See aka.ms/AzureManagedPrometheus-optional-parameters for details. | ManagedClusterAzureMonitorProfileKubeStateMetrics |


### ManagedClusterAzureMonitorProfileKubeStateMetrics

| Name | Description | Value |
|-|-|-|
| metricAnnotationsAllowList | Comma-separated list of Kubernetes annotation keys that will be used in the resource's labels metric (Example: 'namespaces=[kubernetes.io/team,...],pods=[kubernetes.io/team],...'). By default the metric contains only resource name and namespace labels. | string |
| metricLabelsAllowlist | Comma-separated list of additional Kubernetes label keys that will be used in the resource's labels metric (Example: 'namespaces=[k8s-label-1,k8s-label-n,...],pods=[app],...'). By default the metric contains only resource name and namespace labels. | string |


### ManagedClusterHttpProxyConfig

| Name | Description | Value |
|-|-|-|
| httpProxy | The HTTP proxy server endpoint to use. | string |
| httpsProxy | The HTTPS proxy server endpoint to use. | string |
| noProxy | The endpoints that should not go through proxy. | string[] |
| trustedCa | Alternative CA cert to use for connecting to proxy servers. | string |


### ManagedClusterPropertiesIdentityProfile

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### UserAssignedIdentity

| Name | Description | Value |
|-|-|-|
| clientId | The client ID of the user assigned identity. | string |
| objectId | The object ID of the user assigned identity. | string |
| resourceId | The resource ID of the user assigned identity. | string |


### ContainerServiceLinuxProfile

| Name | Description | Value |
|-|-|-|
| adminUsername | The administrator username to use for Linux VMs. | string (required)Constraints:Pattern =^[A-Za-z][-A-Za-z0-9_]*$ |
| ssh | The SSH configuration for Linux-based VMs running on Azure. | ContainerServiceSshConfiguration(required) |


### ContainerServiceSshConfiguration

| Name | Description | Value |
|-|-|-|
| publicKeys | The list of SSH public keys used to authenticate with Linux-based VMs. A maximum of 1 key may be specified. | ContainerServiceSshPublicKey[] (required) |


### ContainerServiceSshPublicKey

| Name | Description | Value |
|-|-|-|
| keyData | Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers. | string (required) |


### ContainerServiceNetworkProfile

| Name | Description | Value |
|-|-|-|
| dnsServiceIP | An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr. | stringConstraints:Pattern =^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$ |
| ipFamilies | IP families are used to determine single-stack or dual-stack clusters. For single-stack, the expected value is IPv4. For dual-stack, the expected values are IPv4 and IPv6. | String array containing any of:'IPv4''IPv6' |
| loadBalancerProfile | Profile of the cluster load balancer. | ManagedClusterLoadBalancerProfile |
| loadBalancerSku | The default is 'standard'. SeeAzure Load Balancer SKUsfor more information about the differences between load balancer SKUs. | 'basic''standard' |
| natGatewayProfile | Profile of the cluster NAT gateway. | ManagedClusterNATGatewayProfile |
| networkDataplane | Network dataplane used in the Kubernetes cluster. | 'azure''cilium' |
| networkMode | This cannot be specified if networkPlugin is anything other than 'azure'. | 'bridge''transparent' |
| networkPlugin | Network plugin used for building the Kubernetes network. | 'azure''kubenet''none' |
| networkPluginMode | The mode the network plugin should use. | 'overlay' |
| networkPolicy | Network policy used for building the Kubernetes network. | 'azure''calico''cilium' |
| outboundType | This can only be set at cluster creation time and cannot be changed later. For more information seeegress outbound type. | 'loadBalancer''managedNATGateway''userAssignedNATGateway''userDefinedRouting' |
| podCidr | A CIDR notation IP range from which to assign pod IPs when kubenet is used. | stringConstraints:Pattern =^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$ |
| podCidrs | One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking. | string[] |
| serviceCidr | A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges. | stringConstraints:Pattern =^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$ |
| serviceCidrs | One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking. They must not overlap with any Subnet IP ranges. | string[] |


### ManagedClusterLoadBalancerProfile

| Name | Description | Value |
|-|-|-|
| allocatedOutboundPorts | The desired number of allocated SNAT ports per VM. Allowed values are in the range of 0 to 64000 (inclusive). The default value is 0 which results in Azure dynamically allocating ports. | intConstraints:Min value = 0Max value = 64000 |
| backendPoolType | The type of the managed inbound Load Balancer BackendPool. | 'NodeIP''NodeIPConfiguration' |
| effectiveOutboundIPs | The effective outbound IP resources of the cluster load balancer. | ResourceReference[] |
| enableMultipleStandardLoadBalancers | Enable multiple standard load balancers per AKS cluster or not. | bool |
| idleTimeoutInMinutes | Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 30 minutes. | intConstraints:Min value = 4Max value = 120 |
| managedOutboundIPs | Desired managed outbound IPs for the cluster load balancer. | ManagedClusterLoadBalancerProfileManagedOutboundIPs |
| outboundIPPrefixes | Desired outbound IP Prefix resources for the cluster load balancer. | ManagedClusterLoadBalancerProfileOutboundIPPrefixes |
| outboundIPs | Desired outbound IP resources for the cluster load balancer. | ManagedClusterLoadBalancerProfileOutboundIPs |


### ResourceReference

| Name | Description | Value |
|-|-|-|
| id | The fully qualified Azure resource id. | string |


### ManagedClusterLoadBalancerProfileManagedOutboundIPs

| Name | Description | Value |
|-|-|-|
| count | The desired number of IPv4 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1. | intConstraints:Min value = 1Max value = 100 |
| countIPv6 | The desired number of IPv6 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 0 for single-stack and 1 for dual-stack. | intConstraints:Min value = 0Max value = 100 |


### ManagedClusterLoadBalancerProfileOutboundIPPrefixes

| Name | Description | Value |
|-|-|-|
| publicIPPrefixes | A list of public IP prefix resources. | ResourceReference[] |


### ManagedClusterLoadBalancerProfileOutboundIPs

| Name | Description | Value |
|-|-|-|
| publicIPs | A list of public IP resources. | ResourceReference[] |


### ManagedClusterNATGatewayProfile

| Name | Description | Value |
|-|-|-|
| effectiveOutboundIPs | The effective outbound IP resources of the cluster NAT gateway. | ResourceReference[] |
| idleTimeoutInMinutes | Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 4 minutes. | intConstraints:Min value = 4Max value = 120 |
| managedOutboundIPProfile | Profile of the managed outbound IP resources of the cluster NAT gateway. | ManagedClusterManagedOutboundIPProfile |


### ManagedClusterManagedOutboundIPProfile

| Name | Description | Value |
|-|-|-|
| count | The desired number of outbound IPs created/managed by Azure. Allowed values must be in the range of 1 to 16 (inclusive). The default value is 1. | intConstraints:Min value = 1Max value = 16 |


### ManagedClusterOidcIssuerProfile

| Name | Description | Value |
|-|-|-|
| enabled | Whether the OIDC issuer is enabled. | bool |


### ManagedClusterPodIdentityProfile

| Name | Description | Value |
|-|-|-|
| allowNetworkPluginKubenet | Running in Kubenet is disabled by default due to the security related nature of AAD Pod Identity and the risks of IP spoofing. Seeusing Kubenet network plugin with AAD Pod Identityfor more information. | bool |
| enabled | Whether the pod identity addon is enabled. | bool |
| userAssignedIdentities | The pod identities to use in the cluster. | ManagedClusterPodIdentity[] |
| userAssignedIdentityExceptions | The pod identity exceptions to allow. | ManagedClusterPodIdentityException[] |


### ManagedClusterPodIdentity

| Name | Description | Value |
|-|-|-|
| bindingSelector | The binding selector to use for the AzureIdentityBinding resource. | string |
| identity | The user assigned identity details. | UserAssignedIdentity(required) |
| name | The name of the pod identity. | string (required) |
| namespace | The namespace of the pod identity. | string (required) |


### ManagedClusterPodIdentityException

| Name | Description | Value |
|-|-|-|
| name | The name of the pod identity exception. | string (required) |
| namespace | The namespace of the pod identity exception. | string (required) |
| podLabels | The pod labels to match. | ManagedClusterPodIdentityExceptionPodLabels(required) |


### ManagedClusterPodIdentityExceptionPodLabels

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### PrivateLinkResource

| Name | Description | Value |
|-|-|-|
| groupId | The group ID of the resource. | string |
| id | The ID of the private link resource. | string |
| name | The name of the private link resource. | string |
| requiredMembers | The RequiredMembers of the resource | string[] |
| type | The resource type. | string |


### ManagedClusterSecurityProfile

| Name | Description | Value |
|-|-|-|
| azureKeyVaultKms | Azure Key Vaultkey management servicesettings for the security profile. | AzureKeyVaultKms |
| defender | Microsoft Defender settings for the security profile. | ManagedClusterSecurityProfileDefender |
| imageCleaner | Image Cleaner settings for the security profile. | ManagedClusterSecurityProfileImageCleaner |
| workloadIdentity | Workload identity settings for the security profile. Workload identity enables Kubernetes applications to access Azure cloud resources securely with Azure AD. Seehttps://aka.ms/aks/wifor more details. | ManagedClusterSecurityProfileWorkloadIdentity |


### AzureKeyVaultKms

| Name | Description | Value |
|-|-|-|
| enabled | Whether to enable Azure Key Vault key management service. The default is false. | bool |
| keyId | Identifier of Azure Key Vault key. Seekey identifier formatfor more details. When Azure Key Vault key management service is enabled, this field is required and must be a valid key identifier. When Azure Key Vault key management service is disabled, leave the field empty. | string |
| keyVaultNetworkAccess | Network access of key vault. The possible values arePublicandPrivate.Publicmeans the key vault allows public access from all networks.Privatemeans the key vault disables public access and enables private link. The default value isPublic. | 'Private''Public' |
| keyVaultResourceId | Resource ID of key vault. When keyVaultNetworkAccess isPrivate, this field is required and must be a valid resource ID. When keyVaultNetworkAccess isPublic, leave the field empty. | string |


### ManagedClusterSecurityProfileDefender

| Name | Description | Value |
|-|-|-|
| logAnalyticsWorkspaceResourceId | Resource ID of the Log Analytics workspace to be associated with Microsoft Defender. When Microsoft Defender is enabled, this field is required and must be a valid workspace resource ID. When Microsoft Defender is disabled, leave the field empty. | string |
| securityMonitoring | Microsoft Defender threat detection for Cloud settings for the security profile. | ManagedClusterSecurityProfileDefenderSecurityMonitor... |


### ManagedClusterSecurityProfileDefenderSecurityMonitor...

| Name | Description | Value |
|-|-|-|
| enabled | Whether to enable Defender threat detection | bool |


### ManagedClusterSecurityProfileImageCleaner

| Name | Description | Value |
|-|-|-|
| enabled | Whether to enable Image Cleaner on AKS cluster. | bool |
| intervalHours | Image Cleaner scanning interval in hours. | int |


### ManagedClusterSecurityProfileWorkloadIdentity

| Name | Description | Value |
|-|-|-|
| enabled | Whether to enable workload identity. | bool |


### ServiceMeshProfile

| Name | Description | Value |
|-|-|-|
| istio | Istio service mesh configuration. | IstioServiceMesh |
| mode | Mode of the service mesh. | 'Disabled''Istio' (required) |


### IstioServiceMesh

| Name | Description | Value |
|-|-|-|
| certificateAuthority | Istio Service Mesh Certificate Authority (CA) configuration. For now, we only support plugin certificates as described herehttps://aka.ms/asm-plugin-ca | IstioCertificateAuthority |
| components | Istio components configuration. | IstioComponents |
| revisions | The list of revisions of the Istio control plane. When an upgrade is not in progress, this holds one value. When canary upgrade is in progress, this can only hold two consecutive values. For more information, see:https://learn.microsoft.com/azure/aks/istio-upgrade | string[]Constraints:Max length = 2 |


### IstioCertificateAuthority

| Name | Description | Value |
|-|-|-|
| plugin | Plugin certificates information for Service Mesh. | IstioPluginCertificateAuthority |


### IstioPluginCertificateAuthority

| Name | Description | Value |
|-|-|-|
| certChainObjectName | Certificate chain object name in Azure Key Vault. | string |
| certObjectName | Intermediate certificate object name in Azure Key Vault. | string |
| keyObjectName | Intermediate certificate private key object name in Azure Key Vault. | string |
| keyVaultId | The resource ID of the Key Vault. | string |
| rootCertObjectName | Root certificate object name in Azure Key Vault. | string |


### IstioComponents

| Name | Description | Value |
|-|-|-|
| egressGateways | Istio egress gateways. | IstioEgressGateway[] |
| ingressGateways | Istio ingress gateways. | IstioIngressGateway[] |


### IstioEgressGateway

| Name | Description | Value |
|-|-|-|
| enabled | Whether to enable the egress gateway. | bool (required) |
| nodeSelector | NodeSelector for scheduling the egress gateway. | IstioEgressGatewayNodeSelector |


### IstioEgressGatewayNodeSelector

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### IstioIngressGateway

| Name | Description | Value |
|-|-|-|
| enabled | Whether to enable the ingress gateway. | bool (required) |
| mode | Mode of an ingress gateway. | 'External''Internal' (required) |


### ManagedClusterServicePrincipalProfile

| Name | Description | Value |
|-|-|-|
| clientId | The ID for the service principal. | string (required) |
| secret | The secret password associated with the service principal in plain text. | string |


### ManagedClusterStorageProfile

| Name | Description | Value |
|-|-|-|
| blobCSIDriver | AzureBlob CSI Driver settings for the storage profile. | ManagedClusterStorageProfileBlobCSIDriver |
| diskCSIDriver | AzureDisk CSI Driver settings for the storage profile. | ManagedClusterStorageProfileDiskCSIDriver |
| fileCSIDriver | AzureFile CSI Driver settings for the storage profile. | ManagedClusterStorageProfileFileCSIDriver |
| snapshotController | Snapshot Controller settings for the storage profile. | ManagedClusterStorageProfileSnapshotController |


### ManagedClusterStorageProfileBlobCSIDriver

| Name | Description | Value |
|-|-|-|
| enabled | Whether to enable AzureBlob CSI Driver. The default value is false. | bool |


### ManagedClusterStorageProfileDiskCSIDriver

| Name | Description | Value |
|-|-|-|
| enabled | Whether to enable AzureDisk CSI Driver. The default value is true. | bool |


### ManagedClusterStorageProfileFileCSIDriver

| Name | Description | Value |
|-|-|-|
| enabled | Whether to enable AzureFile CSI Driver. The default value is true. | bool |


### ManagedClusterStorageProfileSnapshotController

| Name | Description | Value |
|-|-|-|
| enabled | Whether to enable Snapshot Controller. The default value is true. | bool |


### ClusterUpgradeSettings

| Name | Description | Value |
|-|-|-|
| overrideSettings | Settings for overrides. | UpgradeOverrideSettings |


### UpgradeOverrideSettings

| Name | Description | Value |
|-|-|-|
| forceUpgrade | Whether to force upgrade the cluster. Note that this option instructs upgrade operation to bypass upgrade protections such as checking for deprecated API usage. Enable this option only with caution. | bool |
| until | Until when the overrides are effective. Note that this only matches the start time of an upgrade, and the effectiveness won't change once an upgrade starts even if theuntilexpires as upgrade proceeds. This field is not set by default. It must be set for the overrides to take effect. | string |


### ManagedClusterWindowsProfile

| Name | Description | Value |
|-|-|-|
| adminPassword | Specifies the password of the administrator account.Minimum-length:8 charactersMax-length:123 charactersComplexity requirements:3 out of 4 conditions below need to be fulfilledHas lower charactersHas upper charactersHas a digitHas a special character (Regex match [\W_])Disallowed values:"abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!" | string |
| adminUsername | Specifies the name of the administrator account.Restriction:Cannot end in "."Disallowed values:"administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5".Minimum-length:1 characterMax-length:20 characters | string (required) |
| enableCSIProxy | For more details on CSI proxy, see theCSI proxy GitHub repo. | bool |
| gmsaProfile | The Windows gMSA Profile in the Managed Cluster. | WindowsGmsaProfile |
| licenseType | The license type to use for Windows VMs. SeeAzure Hybrid User Benefitsfor more details. | 'None''Windows_Server' |


### WindowsGmsaProfile

| Name | Description | Value |
|-|-|-|
| dnsServer | Specifies the DNS server for Windows gMSA.Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster. | string |
| enabled | Specifies whether to enable Windows gMSA in the managed cluster. | bool |
| rootDomainName | Specifies the root domain name for Windows gMSA.Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster. | string |


### ManagedClusterWorkloadAutoScalerProfile

| Name | Description | Value |
|-|-|-|
| keda | KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile. | ManagedClusterWorkloadAutoScalerProfileKeda |
| verticalPodAutoscaler | VPA (Vertical Pod Autoscaler) settings for the workload auto-scaler profile. | ManagedClusterWorkloadAutoScalerProfileVerticalPodAu... |


### ManagedClusterWorkloadAutoScalerProfileKeda

| Name | Description | Value |
|-|-|-|
| enabled | Whether to enable KEDA. | bool (required) |


### ManagedClusterWorkloadAutoScalerProfileVerticalPodAu...

| Name | Description | Value |
|-|-|-|
| enabled | Whether to enable VPA. Default value is false. | bool (required) |


### ManagedClusterSKU

| Name | Description | Value |
|-|-|-|
| name | The name of a managed cluster SKU. | 'Base' |
| tier | If not specified, the default is 'Free'. SeeAKS Pricing Tierfor more details. | 'Free''Premium''Standard' |


