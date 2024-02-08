```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceFabric/clusters@2023-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      addOnFeatures = [
        "string"
      ]
      applicationTypeVersionsCleanupPolicy = {
        maxUnusedVersionsToKeep = int
        maxUnusedVersionsToKeep = int
      }
      azureActiveDirectory = {
        clientApplication = "string"
        clusterApplication = "string"
        tenantId = "string"
        clientApplication = "string"
        clusterApplication = "string"
        tenantId = "string"
      }
      certificate = {
        thumbprint = "string"
        thumbprintSecondary = "string"
        x509StoreName = "string"
      }
      certificateCommonNames = {
        commonNames = [
          {
            certificateCommonName = "string"
            certificateIssuerThumbprint = "string"
          }
        ]
        x509StoreName = "string"
      }
      clientCertificateCommonNames = [
        {
          certificateCommonName = "string"
          certificateIssuerThumbprint = "string"
          isAdmin = bool
        }
      ]
      clientCertificateThumbprints = [
        {
          certificateThumbprint = "string"
          isAdmin = bool
        }
      ]
      clusterCodeVersion = "string"
      diagnosticsStorageAccountConfig = {
        blobEndpoint = "string"
        protectedAccountKeyName = "string"
        protectedAccountKeyName2 = "string"
        queueEndpoint = "string"
        storageAccountName = "string"
        tableEndpoint = "string"
      }
      enableHttpGatewayExclusiveAuthMode = bool
      eventStoreServiceEnabled = bool
      fabricSettings = [
        {
          name = "string"
          parameters = [
            {
              name = "string"
              value = "string"
              name = "string"
              value = "string"
            }
          ]
          name = "string"
          parameters = [
            {
              name = "string"
              value = "string"
              name = "string"
              value = "string"
            }
          ]
        }
      ]
      infrastructureServiceManager = bool
      managementEndpoint = "string"
      nodeTypes = [
        {
          applicationPorts = {
            endPort = int
            startPort = int
            endPort = int
            startPort = int
          }
          capacities = {
            {customized property} = "string"
          }
          clientConnectionEndpointPort = int
          durabilityLevel = "string"
          ephemeralPorts = {
            endPort = int
            startPort = int
            endPort = int
            startPort = int
          }
          httpGatewayEndpointPort = int
          httpGatewayTokenAuthEndpointPort = int
          isPrimary = bool
          isStateless = bool
          multipleAvailabilityZones = bool
          name = "string"
          placementProperties = {
            {customized property} = "string"
          }
          reverseProxyEndpointPort = int
          vmInstanceCount = int
        }
      ]
      notifications = [
        {
          isEnabled = bool
          notificationCategory = "WaveProgress"
          notificationLevel = "string"
          notificationTargets = [
            {
              notificationChannel = "string"
              receivers = [
                "string"
              ]
            }
          ]
        }
      ]
      reliabilityLevel = "string"
      reverseProxyCertificate = {
        thumbprint = "string"
        thumbprintSecondary = "string"
        x509StoreName = "string"
      }
      reverseProxyCertificateCommonNames = {
        commonNames = [
          {
            certificateCommonName = "string"
            certificateIssuerThumbprint = "string"
          }
        ]
        x509StoreName = "string"
      }
      sfZonalUpgradeMode = "string"
      upgradeDescription = {
        deltaHealthPolicy = {
          applicationDeltaHealthPolicies = {
            {customized property} = {
              defaultServiceTypeDeltaHealthPolicy = {
                maxPercentDeltaUnhealthyServices = int
              }
              serviceTypeDeltaHealthPolicies = {
                {customized property} = {
                  maxPercentDeltaUnhealthyServices = int
                }
              }
            }
          }
          maxPercentDeltaUnhealthyApplications = int
          maxPercentDeltaUnhealthyNodes = int
          maxPercentUpgradeDomainDeltaUnhealthyNodes = int
          maxPercentDeltaUnhealthyApplications = int
          maxPercentDeltaUnhealthyNodes = int
          maxPercentUpgradeDomainDeltaUnhealthyNodes = int
        }
        forceRestart = bool
        healthCheckRetryTimeout = "string"
        healthCheckStableDuration = "string"
        healthCheckWaitDuration = "string"
        healthPolicy = {
          applicationHealthPolicies = {
            {customized property} = {
              defaultServiceTypeHealthPolicy = {
                maxPercentUnhealthyServices = int
                maxPercentUnhealthyPartitionsPerService = int
                maxPercentUnhealthyReplicasPerPartition = int
                maxPercentUnhealthyServices = int
              }
              serviceTypeHealthPolicies = {
                {customized property} = {
                  maxPercentUnhealthyServices = int
                  maxPercentUnhealthyPartitionsPerService = int
                  maxPercentUnhealthyReplicasPerPartition = int
                  maxPercentUnhealthyServices = int
                }
                {customized property} = {
                  maxPercentUnhealthyServices = int
                  maxPercentUnhealthyPartitionsPerService = int
                  maxPercentUnhealthyReplicasPerPartition = int
                  maxPercentUnhealthyServices = int
                }
              }
              considerWarningAsError = bool
              defaultServiceTypeHealthPolicy = {
                maxPercentUnhealthyServices = int
                maxPercentUnhealthyPartitionsPerService = int
                maxPercentUnhealthyReplicasPerPartition = int
                maxPercentUnhealthyServices = int
              }
              maxPercentUnhealthyDeployedApplications = int
              serviceTypeHealthPolicyMap = {
                {customized property} = {
                  maxPercentUnhealthyServices = int
                  maxPercentUnhealthyPartitionsPerService = int
                  maxPercentUnhealthyReplicasPerPartition = int
                  maxPercentUnhealthyServices = int
                }
                {customized property} = {
                  maxPercentUnhealthyServices = int
                  maxPercentUnhealthyPartitionsPerService = int
                  maxPercentUnhealthyReplicasPerPartition = int
                  maxPercentUnhealthyServices = int
                }
              }
            }
          }
          maxPercentUnhealthyApplications = int
          maxPercentUnhealthyNodes = int
          maxPercentUnhealthyApplications = int
          maxPercentUnhealthyNodes = int
        }
        upgradeDomainTimeout = "string"
        upgradeReplicaSetCheckTimeout = "string"
        upgradeTimeout = "string"
        deltaHealthPolicy = {
          applicationDeltaHealthPolicies = {
            {customized property} = {
              defaultServiceTypeDeltaHealthPolicy = {
                maxPercentDeltaUnhealthyServices = int
              }
              serviceTypeDeltaHealthPolicies = {
                {customized property} = {
                  maxPercentDeltaUnhealthyServices = int
                }
              }
            }
          }
          maxPercentDeltaUnhealthyApplications = int
          maxPercentDeltaUnhealthyNodes = int
          maxPercentUpgradeDomainDeltaUnhealthyNodes = int
          maxPercentDeltaUnhealthyApplications = int
          maxPercentDeltaUnhealthyNodes = int
          maxPercentUpgradeDomainDeltaUnhealthyNodes = int
        }
        forceRestart = bool
        healthPolicy = {
          applicationHealthPolicies = {
            {customized property} = {
              defaultServiceTypeHealthPolicy = {
                maxPercentUnhealthyServices = int
                maxPercentUnhealthyPartitionsPerService = int
                maxPercentUnhealthyReplicasPerPartition = int
                maxPercentUnhealthyServices = int
              }
              serviceTypeHealthPolicies = {
                {customized property} = {
                  maxPercentUnhealthyServices = int
                  maxPercentUnhealthyPartitionsPerService = int
                  maxPercentUnhealthyReplicasPerPartition = int
                  maxPercentUnhealthyServices = int
                }
                {customized property} = {
                  maxPercentUnhealthyServices = int
                  maxPercentUnhealthyPartitionsPerService = int
                  maxPercentUnhealthyReplicasPerPartition = int
                  maxPercentUnhealthyServices = int
                }
              }
              considerWarningAsError = bool
              defaultServiceTypeHealthPolicy = {
                maxPercentUnhealthyServices = int
                maxPercentUnhealthyPartitionsPerService = int
                maxPercentUnhealthyReplicasPerPartition = int
                maxPercentUnhealthyServices = int
              }
              maxPercentUnhealthyDeployedApplications = int
              serviceTypeHealthPolicyMap = {
                {customized property} = {
                  maxPercentUnhealthyServices = int
                  maxPercentUnhealthyPartitionsPerService = int
                  maxPercentUnhealthyReplicasPerPartition = int
                  maxPercentUnhealthyServices = int
                }
                {customized property} = {
                  maxPercentUnhealthyServices = int
                  maxPercentUnhealthyPartitionsPerService = int
                  maxPercentUnhealthyReplicasPerPartition = int
                  maxPercentUnhealthyServices = int
                }
              }
            }
          }
          maxPercentUnhealthyApplications = int
          maxPercentUnhealthyNodes = int
          maxPercentUnhealthyApplications = int
          maxPercentUnhealthyNodes = int
        }
        monitoringPolicy = {
          healthCheckRetryTimeout = "string"
          healthCheckStableDuration = "string"
          healthCheckWaitDuration = "string"
          upgradeDomainTimeout = "string"
          upgradeTimeout = "string"
        }
        upgradeReplicaSetCheckTimeout = "string"
      }
      upgradeMode = "string"
      upgradePauseEndTimestampUtc = "string"
      upgradePauseStartTimestampUtc = "string"
      upgradeWave = "string"
      vmImage = "string"
      vmssZonalUpgradeMode = "string"
      waveUpgradePaused = bool
    }
  })
}

```

### clusters

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 4-23Valid characters:Lowercase letters, numbers, and hyphens.Start with lowercase letter. End with lowercase letter or number. |
| location | Azure resource location. | string (required) |
| tags | Azure resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | The cluster resource properties | ClusterProperties |


### ClusterProperties

| Name | Description | Value |
|-|-|-|
| addOnFeatures | The list of add-on features to enable in the cluster. | String array containing any of:'BackupRestoreService''DnsService''RepairManager''ResourceMonitorService' |
| applicationTypeVersionsCleanupPolicy | The policy used to clean up unused versions. | ApplicationTypeVersionsCleanupPolicy |
| azureActiveDirectory | The AAD authentication settings of the cluster. | AzureActiveDirectory |
| certificate | The certificate to use for securing the cluster. The certificate provided will be used for node to node security within the cluster, SSL certificate for cluster management endpoint and default admin client. | CertificateDescription |
| certificateCommonNames | Describes a list of server certificates referenced by common name that are used to secure the cluster. | ServerCertificateCommonNames |
| clientCertificateCommonNames | The list of client certificates referenced by common name that are allowed to manage the cluster. | ClientCertificateCommonName[] |
| clientCertificateThumbprints | The list of client certificates referenced by thumbprint that are allowed to manage the cluster. | ClientCertificateThumbprint[] |
| clusterCodeVersion | The Service Fabric runtime version of the cluster. This property can only by set the user whenupgradeModeis set to 'Manual'. To get list of available Service Fabric versions for new clusters useClusterVersion API. To get the list of available version for existing clusters useavailableClusterVersions. | string |
| diagnosticsStorageAccountConfig | The storage account information for storing Service Fabric diagnostic logs. | DiagnosticsStorageAccountConfig |
| enableHttpGatewayExclusiveAuthMode | If true, token-based authentication is not allowed on the HttpGatewayEndpoint. This is required to support TLS versions 1.3 and above. If token-based authentication is used, HttpGatewayTokenAuthEndpointPort must be defined. | bool |
| eventStoreServiceEnabled | Indicates if the event store service is enabled. | bool |
| fabricSettings | The list of custom fabric settings to configure the cluster. | SettingsSectionDescription[] |
| infrastructureServiceManager | Indicates if infrastructure service manager is enabled. | bool |
| managementEndpoint | The http management endpoint of the cluster. | string (required) |
| nodeTypes | The list of node types in the cluster. | NodeTypeDescription[] (required) |
| notifications | Indicates a list of notification channels for cluster events. | Notification[] |
| reliabilityLevel | The reliability level sets the replica set size of system services. Learn aboutReliabilityLevel.- None - Run the System services with a target replica set count of 1. This should only be used for test clusters.- Bronze - Run the System services with a target replica set count of 3. This should only be used for test clusters.- Silver - Run the System services with a target replica set count of 5.- Gold - Run the System services with a target replica set count of 7.- Platinum - Run the System services with a target replica set count of 9. | 'Bronze''Gold''None''Platinum''Silver' |
| reverseProxyCertificate | The server certificate used by reverse proxy. | CertificateDescription |
| reverseProxyCertificateCommonNames | Describes a list of server certificates referenced by common name that are used to secure the cluster. | ServerCertificateCommonNames |
| sfZonalUpgradeMode | This property controls the logical grouping of VMs in upgrade domains (UDs). This property can't be modified if a node type with multiple Availability Zones is already present in the cluster. | 'Hierarchical''Parallel' |
| upgradeDescription | The policy to use when upgrading the cluster. | ClusterUpgradePolicy |
| upgradeMode | The upgrade mode of the cluster when new Service Fabric runtime version is available. | 'Automatic''Manual' |
| upgradePauseEndTimestampUtc | Indicates the end date and time to pause automatic runtime version upgrades on the cluster for an specific period of time on the cluster (UTC). | string |
| upgradePauseStartTimestampUtc | Indicates the start date and time to pause automatic runtime version upgrades on the cluster for an specific period of time on the cluster (UTC). | string |
| upgradeWave | Indicates when new cluster runtime version upgrades will be applied after they are released. By default is Wave0. Only applies whenupgradeModeis set to 'Automatic'. | 'Wave0''Wave1''Wave2' |
| vmImage | The VM image VMSS has been configured with. Generic names such as Windows or Linux can be used. | string |
| vmssZonalUpgradeMode | This property defines the upgrade mode for the virtual machine scale set, it is mandatory if a node type with multiple Availability Zones is added. | 'Hierarchical''Parallel' |
| waveUpgradePaused | Boolean to pause automatic runtime version upgrades to the cluster. | bool |


### ApplicationTypeVersionsCleanupPolicy

| Name | Description | Value |
|-|-|-|
| maxUnusedVersionsToKeep | Number of unused versions per application type to keep. | int (required) |
| maxUnusedVersionsToKeep | Number of unused versions per application type to keep. | int (required) |


### AzureActiveDirectory

| Name | Description | Value |
|-|-|-|
| clientApplication | Azure active directory client application id. | string |
| clusterApplication | Azure active directory cluster application id. | string |
| tenantId | Azure active directory tenant id. | string |
| clientApplication | Azure active directory client application id. | string |
| clusterApplication | Azure active directory cluster application id. | string |
| tenantId | Azure active directory tenant id. | string |


### CertificateDescription

| Name | Description | Value |
|-|-|-|
| thumbprint | Thumbprint of the primary certificate. | string (required) |
| thumbprintSecondary | Thumbprint of the secondary certificate. | string |
| x509StoreName | The local certificate store location. | 'AddressBook''AuthRoot''CertificateAuthority''Disallowed''My''Root''TrustedPeople''TrustedPublisher' |


### ServerCertificateCommonNames

| Name | Description | Value |
|-|-|-|
| commonNames | The list of server certificates referenced by common name that are used to secure the cluster. | ServerCertificateCommonName[] |
| x509StoreName | The local certificate store location. | 'AddressBook''AuthRoot''CertificateAuthority''Disallowed''My''Root''TrustedPeople''TrustedPublisher' |


### ServerCertificateCommonName

| Name | Description | Value |
|-|-|-|
| certificateCommonName | The common name of the server certificate. | string (required) |
| certificateIssuerThumbprint | The issuer thumbprint of the server certificate. | string (required) |


### ClientCertificateCommonName

| Name | Description | Value |
|-|-|-|
| certificateCommonName | The common name of the client certificate. | string (required) |
| certificateIssuerThumbprint | The issuer thumbprint of the client certificate. | string (required) |
| isAdmin | Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster. | bool (required) |


### ClientCertificateThumbprint

| Name | Description | Value |
|-|-|-|
| certificateThumbprint | The thumbprint of the client certificate. | string (required) |
| isAdmin | Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster. | bool (required) |


### DiagnosticsStorageAccountConfig

| Name | Description | Value |
|-|-|-|
| blobEndpoint | The blob endpoint of the azure storage account. | string (required) |
| protectedAccountKeyName | The protected diagnostics storage key name. | string (required) |
| protectedAccountKeyName2 | The secondary protected diagnostics storage key name. If one of the storage account keys is rotated the cluster will fallback to using the other. | string |
| queueEndpoint | The queue endpoint of the azure storage account. | string (required) |
| storageAccountName | The Azure storage account name. | string (required) |
| tableEndpoint | The table endpoint of the azure storage account. | string (required) |


### SettingsSectionDescription

| Name | Description | Value |
|-|-|-|
| name | The section name of the fabric settings. | string (required) |
| parameters | The collection of parameters in the section. | SettingsParameterDescription[] (required) |
| name | The section name of the fabric settings. | string (required) |
| parameters | The collection of parameters in the section. | SettingsParameterDescription[] (required) |


### SettingsParameterDescription

| Name | Description | Value |
|-|-|-|
| name | The parameter name of fabric setting. | string (required) |
| value | The parameter value of fabric setting. | string (required) |
| name | The parameter name of fabric setting. | string (required) |
| value | The parameter value of fabric setting. | string (required) |


### NodeTypeDescription

| Name | Description | Value |
|-|-|-|
| applicationPorts | The range of ports from which cluster assigned port to Service Fabric applications. | EndpointRangeDescription |
| capacities | The capacity tags applied to the nodes in the node type, the cluster resource manager uses these tags to understand how much resource a node has. | NodeTypeDescriptionCapacities |
| clientConnectionEndpointPort | The TCP cluster management endpoint port. | int (required) |
| durabilityLevel | The durability level of the node type. Learn aboutDurabilityLevel.- Bronze - No privileges. This is the default.- Silver - The infrastructure jobs can be paused for a duration of 10 minutes per UD.- Gold - The infrastructure jobs can be paused for a duration of 2 hours per UD. Gold durability can be enabled only on full node VM skus like D15_V2, G5 etc. | 'Bronze''Gold''Silver' |
| ephemeralPorts | The range of ephemeral ports that nodes in this node type should be configured with. | EndpointRangeDescription |
| httpGatewayEndpointPort | The HTTP cluster management endpoint port. | int (required) |
| httpGatewayTokenAuthEndpointPort | The port used for token-auth based HTTPS connections to the cluster. Cannot be set to the same port as HttpGatewayEndpoint. | int |
| isPrimary | The node type on which system services will run. Only one node type should be marked as primary. Primary node type cannot be deleted or changed for existing clusters. | bool (required) |
| isStateless | Indicates if the node type can only host Stateless workloads. | bool |
| multipleAvailabilityZones | Indicates if the node type is enabled to support multiple zones. | bool |
| name | The name of the node type. | string (required) |
| placementProperties | The placement tags applied to nodes in the node type, which can be used to indicate where certain services (workload) should run. | NodeTypeDescriptionPlacementProperties |
| reverseProxyEndpointPort | The endpoint used by reverse proxy. | int |
| vmInstanceCount | VMInstanceCount should be 1 to n, where n indicates the number of VM instances corresponding to this nodeType. VMInstanceCount = 0 can be done only in these scenarios: NodeType is a secondary nodeType. Durability = Bronze or Durability >= Bronze and InfrastructureServiceManager = true. If VMInstanceCount = 0, implies the VMs for this nodeType will not be used for the initial cluster size computation. | int (required) |


### EndpointRangeDescription

| Name | Description | Value |
|-|-|-|
| endPort | End port of a range of ports | int (required) |
| startPort | Starting port of a range of ports | int (required) |
| endPort | End port of a range of ports | int (required) |
| startPort | Starting port of a range of ports | int (required) |


### NodeTypeDescriptionCapacities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### NodeTypeDescriptionPlacementProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### Notification

| Name | Description | Value |
|-|-|-|
| isEnabled | Indicates if the notification is enabled. | bool (required) |
| notificationCategory | The category of notification. | 'WaveProgress' (required) |
| notificationLevel | The level of notification. | 'All''Critical' (required) |
| notificationTargets | List of targets that subscribe to the notification. | NotificationTarget[] (required) |


### NotificationTarget

| Name | Description | Value |
|-|-|-|
| notificationChannel | The notification channel indicates the type of receivers subscribed to the notification, either user or subscription. | 'EmailSubscription''EmailUser' (required) |
| receivers | List of targets that subscribe to the notification. | string[] (required) |


### ClusterUpgradePolicy

| Name | Description | Value |
|-|-|-|
| deltaHealthPolicy | The cluster delta health policy used when upgrading the cluster. | ClusterUpgradeDeltaHealthPolicy |
| forceRestart | If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data). | bool |
| healthCheckRetryTimeout | The amount of time to retry health evaluation when the application or cluster is unhealthy before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format. | string (required) |
| healthCheckStableDuration | The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. The duration can be in either hh:mm:ss or in d.hh:mm:ss.ms format. | string (required) |
| healthCheckWaitDuration | The length of time to wait after completing an upgrade domain before performing health checks. The duration can be in either hh:mm:ss or in d.hh:mm:ss.ms format. | string (required) |
| healthPolicy | The cluster health policy used when upgrading the cluster. | ClusterHealthPolicy(required) |
| upgradeDomainTimeout | The amount of time each upgrade domain has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format. | string (required) |
| upgradeReplicaSetCheckTimeout | The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format. | string (required) |
| upgradeTimeout | The amount of time the overall upgrade has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format. | string (required) |
| deltaHealthPolicy | The cluster delta health policy defines a health policy used to evaluate the health of the cluster during a cluster upgrade. | ClusterUpgradeDeltaHealthPolicy |
| forceRestart | If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data). | bool |
| healthPolicy | The cluster health policy defines a health policy used to evaluate the health of the cluster during a cluster upgrade. | ClusterHealthPolicy |
| monitoringPolicy | The cluster monitoring policy describes the parameters for monitoring an upgrade in Monitored mode. | ClusterMonitoringPolicy |
| upgradeReplicaSetCheckTimeout | The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues.When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues.The timeout is reset at the start of each upgrade domain. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.This value must be between 00:00:00 and 49710.06:28:15 (unsigned 32 bit integer for seconds) | string |


### ClusterUpgradeDeltaHealthPolicy

| Name | Description | Value |
|-|-|-|
| applicationDeltaHealthPolicies | Defines the application delta health policy map used to evaluate the health of an application or one of its child entities when upgrading the cluster. | ApplicationDeltaHealthPolicyMap |
| maxPercentDeltaUnhealthyApplications | The maximum allowed percentage of applications health degradation allowed during cluster upgrades.The delta is measured between the state of the applications at the beginning of upgrade and the state of the applications at the time of the health evaluation.The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits. System services are not included in this. | int (required) |
| maxPercentDeltaUnhealthyNodes | The maximum allowed percentage of nodes health degradation allowed during cluster upgrades.The delta is measured between the state of the nodes at the beginning of upgrade and the state of the nodes at the time of the health evaluation.The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits. | int (required) |
| maxPercentUpgradeDomainDeltaUnhealthyNodes | The maximum allowed percentage of upgrade domain nodes health degradation allowed during cluster upgrades.The delta is measured between the state of the upgrade domain nodes at the beginning of upgrade and the state of the upgrade domain nodes at the time of the health evaluation.The check is performed after every upgrade domain upgrade completion for all completed upgrade domains to make sure the state of the upgrade domains is within tolerated limits. | int (required) |
| maxPercentDeltaUnhealthyApplications | The maximum allowed percentage of applications health degradation allowed during cluster upgrades.The delta is measured between the state of the applications at the beginning of upgrade and the state of the applications at the time of the health evaluation.The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits. System services are not included in this.NOTE: This value will overwrite the value specified in properties.UpgradeDescription.HealthPolicy.MaxPercentUnhealthyApplications | int |
| maxPercentDeltaUnhealthyNodes | The maximum allowed percentage of nodes health degradation allowed during cluster upgrades.The delta is measured between the state of the nodes at the beginning of upgrade and the state of the nodes at the time of the health evaluation.The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits. | int (required) |
| maxPercentUpgradeDomainDeltaUnhealthyNodes | The maximum allowed percentage of upgrade domain nodes health degradation allowed during cluster upgrades.The delta is measured between the state of the upgrade domain nodes at the beginning of upgrade and the state of the upgrade domain nodes at the time of the health evaluation.The check is performed after every upgrade domain upgrade completion for all completed upgrade domains to make sure the state of the upgrade domains is within tolerated limits. | int |


### ApplicationDeltaHealthPolicyMap

| Name | Description | Value |
|-|-|-|
| {customized property} |  | ApplicationDeltaHealthPolicy |


### ApplicationDeltaHealthPolicy

| Name | Description | Value |
|-|-|-|
| defaultServiceTypeDeltaHealthPolicy | The delta health policy used by default to evaluate the health of a service type when upgrading the cluster. | ServiceTypeDeltaHealthPolicy |
| serviceTypeDeltaHealthPolicies | The map with service type delta health policy per service type name. The map is empty by default. | ServiceTypeDeltaHealthPolicyMap |


### ServiceTypeDeltaHealthPolicy

| Name | Description | Value |
|-|-|-|
| maxPercentDeltaUnhealthyServices | The maximum allowed percentage of services health degradation allowed during cluster upgrades.The delta is measured between the state of the services at the beginning of upgrade and the state of the services at the time of the health evaluation.The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits. | int |


### ServiceTypeDeltaHealthPolicyMap

| Name | Description | Value |
|-|-|-|
| {customized property} |  | ServiceTypeDeltaHealthPolicy |


### ClusterHealthPolicy

| Name | Description | Value |
|-|-|-|
| applicationHealthPolicies | Defines the application health policy map used to evaluate the health of an application or one of its children entities. | ApplicationHealthPolicyMap |
| maxPercentUnhealthyApplications | The maximum allowed percentage of unhealthy applications before reporting an error. For example, to allow 10% of applications to be unhealthy, this value would be 10.The percentage represents the maximum tolerated percentage of applications that can be unhealthy before the cluster is considered in error.If the percentage is respected but there is at least one unhealthy application, the health is evaluated as Warning.This is calculated by dividing the number of unhealthy applications over the total number of application instances in the cluster, excluding applications of application types that are included in the ApplicationTypeHealthPolicyMap.The computation rounds up to tolerate one failure on small numbers of applications. Default percentage is zero. | int |
| maxPercentUnhealthyNodes | The maximum allowed percentage of unhealthy nodes before reporting an error. For example, to allow 10% of nodes to be unhealthy, this value would be 10.The percentage represents the maximum tolerated percentage of nodes that can be unhealthy before the cluster is considered in error.If the percentage is respected but there is at least one unhealthy node, the health is evaluated as Warning.The percentage is calculated by dividing the number of unhealthy nodes over the total number of nodes in the cluster.The computation rounds up to tolerate one failure on small numbers of nodes. Default percentage is zero.In large clusters, some nodes will always be down or out for repairs, so this percentage should be configured to tolerate that. | int |
| maxPercentUnhealthyApplications | The maximum allowed percentage of unhealthy applications before reporting an error. For example, to allow 10% of applications to be unhealthy, this value would be 10.The percentage represents the maximum tolerated percentage of applications that can be unhealthy before the cluster is considered in error.If the percentage is respected but there is at least one unhealthy application, the health is evaluated as Warning.This is calculated by dividing the number of unhealthy applications over the total number of application instances in the cluster, excluding applications of application types that are included in the ApplicationTypeHealthPolicyMap.The computation rounds up to tolerate one failure on small numbers of applications. Default percentage is zero. | int (required) |
| maxPercentUnhealthyNodes | The maximum allowed percentage of unhealthy nodes before reporting an error. For example, to allow 10% of nodes to be unhealthy, this value would be 10.The percentage represents the maximum tolerated percentage of nodes that can be unhealthy before the cluster is considered in error.If the percentage is respected but there is at least one unhealthy node, the health is evaluated as Warning.The percentage is calculated by dividing the number of unhealthy nodes over the total number of nodes in the cluster.The computation rounds up to tolerate one failure on small numbers of nodes. Default percentage is zero.In large clusters, some nodes will always be down or out for repairs, so this percentage should be configured to tolerate that. | int (required) |


### ApplicationHealthPolicyMap

| Name | Description | Value |
|-|-|-|
| {customized property} |  | ApplicationHealthPolicy |


### ApplicationHealthPolicy

| Name | Description | Value |
|-|-|-|
| defaultServiceTypeHealthPolicy | The health policy used by default to evaluate the health of a service type. | ServiceTypeHealthPolicy |
| serviceTypeHealthPolicies | The map with service type health policy per service type name. The map is empty by default. | ServiceTypeHealthPolicyMap |
| considerWarningAsError | Indicates whether warnings are treated with the same severity as errors. | bool (required) |
| defaultServiceTypeHealthPolicy | The health policy used by default to evaluate the health of a service type. | ServiceTypeHealthPolicy |
| maxPercentUnhealthyDeployedApplications | The maximum allowed percentage of unhealthy deployed applications. Allowed values are Byte values from zero to 100.The percentage represents the maximum tolerated percentage of deployed applications that can be unhealthy before the application is considered in error.This is calculated by dividing the number of unhealthy deployed applications over the number of nodes where the application is currently deployed on in the cluster.The computation rounds up to tolerate one failure on small numbers of nodes. Default percentage is zero. | int (required) |
| serviceTypeHealthPolicyMap | The map with service type health policy per service type name. The map is empty by default. | ServiceTypeHealthPolicyMap |


### ServiceTypeHealthPolicy

| Name | Description | Value |
|-|-|-|
| maxPercentUnhealthyServices | The maximum percentage of services allowed to be unhealthy before your application is considered in error. | int |
| maxPercentUnhealthyPartitionsPerService | The maximum allowed percentage of unhealthy partitions per service.The percentage represents the maximum tolerated percentage of partitions that can be unhealthy before the service is considered in error.If the percentage is respected but there is at least one unhealthy partition, the health is evaluated as Warning.The percentage is calculated by dividing the number of unhealthy partitions over the total number of partitions in the service.The computation rounds up to tolerate one failure on small numbers of partitions. | int (required) |
| maxPercentUnhealthyReplicasPerPartition | The maximum allowed percentage of unhealthy replicas per partition.The percentage represents the maximum tolerated percentage of replicas that can be unhealthy before the partition is considered in error.If the percentage is respected but there is at least one unhealthy replica, the health is evaluated as Warning.The percentage is calculated by dividing the number of unhealthy replicas over the total number of replicas in the partition.The computation rounds up to tolerate one failure on small numbers of replicas. | int (required) |
| maxPercentUnhealthyServices | The maximum allowed percentage of unhealthy services.The percentage represents the maximum tolerated percentage of services that can be unhealthy before the application is considered in error.If the percentage is respected but there is at least one unhealthy service, the health is evaluated as Warning.This is calculated by dividing the number of unhealthy services of the specific service type over the total number of services of the specific service type.The computation rounds up to tolerate one failure on small numbers of services. | int (required) |


### ServiceTypeHealthPolicyMap

| Name | Description | Value |
|-|-|-|
| {customized property} |  | ServiceTypeHealthPolicy |
| {customized property} |  | ServiceTypeHealthPolicy |


### ClusterMonitoringPolicy

| Name | Description | Value |
|-|-|-|
| healthCheckRetryTimeout | The amount of time to retry health evaluation when the application or cluster is unhealthy before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format. | string (required) |
| healthCheckStableDuration | The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. The duration can be in either hh:mm:ss or in d.hh:mm:ss.ms format. | string (required) |
| healthCheckWaitDuration | The length of time to wait after completing an upgrade domain before performing health checks. The duration can be in either hh:mm:ss or in d.hh:mm:ss.ms format. | string (required) |
| upgradeDomainTimeout | The amount of time each upgrade domain has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format. | string (required) |
| upgradeTimeout | The amount of time the overall upgrade has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format. | string (required) |


