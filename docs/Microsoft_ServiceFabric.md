## Microsoft.ServiceFabric/clusters@2023-11-01-preview

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
## Microsoft.ServiceFabric/clusters/applications@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceFabric/clusters/applications@2023-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
  identity {
    type = "string"
    identity_ids = []
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      managedIdentities = [
        {
          name = "string"
          principalId = "string"
          name = "string"
          principalId = "string"
        }
      ]
      maximumNodes = int
      metrics = [
        {
          maximumCapacity = int
          name = "string"
          reservationCapacity = int
          totalApplicationCapacity = int
        }
      ]
      minimumNodes = int
      parameters = {
        {customized property} = "string"
        {customized property} = "string"
      }
      removeApplicationCapacity = bool
      typeName = "string"
      typeVersion = "string"
      upgradePolicy = {
        applicationHealthPolicy = {
          considerWarningAsError = bool
          defaultServiceTypeHealthPolicy = {
            maxPercentUnhealthyPartitionsPerService = int
            maxPercentUnhealthyReplicasPerPartition = int
            maxPercentUnhealthyServices = int
          }
          maxPercentUnhealthyDeployedApplications = int
          serviceTypeHealthPolicyMap = {
            {customized property} = {
              maxPercentUnhealthyPartitionsPerService = int
              maxPercentUnhealthyReplicasPerPartition = int
              maxPercentUnhealthyServices = int
            }
          }
        }
        forceRestart = bool
        recreateApplication = bool
        rollingUpgradeMonitoringPolicy = {
          failureAction = "string"
          healthCheckRetryTimeout = "string"
          healthCheckStableDuration = "string"
          healthCheckWaitDuration = "string"
          upgradeDomainTimeout = "string"
          upgradeTimeout = "string"
        }
        upgradeMode = "string"
        upgradeReplicaSetCheckTimeout = "string"
        applicationHealthPolicy = {
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
        forceRestart = bool
        instanceCloseDelayDuration = int
        recreateApplication = bool
        rollingUpgradeMonitoringPolicy = {
          failureAction = "string"
          healthCheckRetryTimeout = "string"
          healthCheckStableDuration = "string"
          healthCheckWaitDuration = "string"
          upgradeDomainTimeout = "string"
          upgradeTimeout = "string"
        }
        upgradeMode = "string"
        upgradeReplicaSetCheckTimeout = int
      }
      managedIdentities = [
        {
          name = "string"
          principalId = "string"
          name = "string"
          principalId = "string"
        }
      ]
      parameters = {
        {customized property} = "string"
        {customized property} = "string"
      }
      upgradePolicy = {
        applicationHealthPolicy = {
          considerWarningAsError = bool
          defaultServiceTypeHealthPolicy = {
            maxPercentUnhealthyPartitionsPerService = int
            maxPercentUnhealthyReplicasPerPartition = int
            maxPercentUnhealthyServices = int
          }
          maxPercentUnhealthyDeployedApplications = int
          serviceTypeHealthPolicyMap = {
            {customized property} = {
              maxPercentUnhealthyPartitionsPerService = int
              maxPercentUnhealthyReplicasPerPartition = int
              maxPercentUnhealthyServices = int
            }
          }
        }
        forceRestart = bool
        recreateApplication = bool
        rollingUpgradeMonitoringPolicy = {
          failureAction = "string"
          healthCheckRetryTimeout = "string"
          healthCheckStableDuration = "string"
          healthCheckWaitDuration = "string"
          upgradeDomainTimeout = "string"
          upgradeTimeout = "string"
        }
        upgradeMode = "string"
        upgradeReplicaSetCheckTimeout = "string"
        applicationHealthPolicy = {
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
        forceRestart = bool
        instanceCloseDelayDuration = int
        recreateApplication = bool
        rollingUpgradeMonitoringPolicy = {
          failureAction = "string"
          healthCheckRetryTimeout = "string"
          healthCheckStableDuration = "string"
          healthCheckWaitDuration = "string"
          upgradeDomainTimeout = "string"
          upgradeTimeout = "string"
        }
        upgradeMode = "string"
        upgradeReplicaSetCheckTimeout = int
      }
      version = "string"
    }
  })
}

```

### clusters/applications

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | It will be deprecated in New API, resource location depends on the parent resource. | string |
| tags | Azure resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:clusters |
| identity | Describes the managed identities for an Azure resource. | ManagedIdentity |
| properties | The application resource properties. | ApplicationResourceProperties |


### ManagedIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of managed identity for the resource. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | UserAssignedIdentityMap |
| type | The type of managed identity for the resource. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | UserAssignedIdentityMap |


### UserAssignedIdentityMap

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |
| {customized property} |  | UserAssignedIdentity |


### ApplicationResourceProperties

| Name | Description | Value |
|-|-|-|
| managedIdentities | List of user assigned identities for the application, each mapped to a friendly name. | ApplicationUserAssignedIdentity[] |
| maximumNodes | The maximum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. By default, the value of this property is zero and it means that the services can be placed on any node. | int |
| metrics | List of application capacity metric description. | ApplicationMetricDescription[] |
| minimumNodes | The minimum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. If this property is set to zero, no capacity will be reserved. The value of this property cannot be more than the value of the MaximumNodes property. | int |
| parameters | List of application parameters with overridden values from their default values specified in the application manifest. | ApplicationParameterList |
| removeApplicationCapacity | Remove the current application capacity settings. | bool |
| typeName | The application type name as defined in the application manifest. | string |
| typeVersion | The version of the application type as defined in the application manifest. | string |
| upgradePolicy | Describes the policy for a monitored application upgrade. | ApplicationUpgradePolicy |
| managedIdentities | List of user assigned identities for the application, each mapped to a friendly name. | ApplicationUserAssignedIdentity[] |
| parameters | List of application parameters with overridden values from their default values specified in the application manifest. | ApplicationParameterList |
| upgradePolicy | Describes the policy for a monitored application upgrade. | ApplicationUpgradePolicy |
| version | The version of the application type as defined in the application manifest.This name must be the full Arm Resource ID for the referenced application type version. | string |


### ApplicationUserAssignedIdentity

| Name | Description | Value |
|-|-|-|
| name | The friendly name of user assigned identity. | string (required) |
| principalId | The principal id of user assigned identity. | string (required) |
| name | The friendly name of user assigned identity. | string (required) |
| principalId | The principal id of user assigned identity. | string (required) |


### ApplicationMetricDescription

| Name | Description | Value |
|-|-|-|
| maximumCapacity | The maximum node capacity for Service Fabric application.This is the maximum Load for an instance of this application on a single node. Even if the capacity of node is greater than this value, Service Fabric will limit the total load of services within the application on each node to this value.If set to zero, capacity for this metric is unlimited on each node.When creating a new application with application capacity defined, the product of MaximumNodes and this value must always be smaller than or equal to TotalApplicationCapacity.When updating existing application with application capacity, the product of MaximumNodes and this value must always be smaller than or equal to TotalApplicationCapacity. | int |
| name | The name of the metric. | string |
| reservationCapacity | The node reservation capacity for Service Fabric application.This is the amount of load which is reserved on nodes which have instances of this application.If MinimumNodes is specified, then the product of these values will be the capacity reserved in the cluster for the application.If set to zero, no capacity is reserved for this metric.When setting application capacity or when updating application capacity; this value must be smaller than or equal to MaximumCapacity for each metric. | int |
| totalApplicationCapacity | The total metric capacity for Service Fabric application.This is the total metric capacity for this application in the cluster. Service Fabric will try to limit the sum of loads of services within the application to this value.When creating a new application with application capacity defined, the product of MaximumNodes and MaximumCapacity must always be smaller than or equal to this value. | int |


### ApplicationParameterList

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |


### ApplicationUpgradePolicy

| Name | Description | Value |
|-|-|-|
| applicationHealthPolicy | Defines a health policy used to evaluate the health of an application or one of its children entities. | ArmApplicationHealthPolicy |
| forceRestart | If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data). | bool |
| recreateApplication | Determines whether the application should be recreated on update. If value=true, the rest of the upgrade policy parameters are not allowed and it will result in availability loss. | bool |
| rollingUpgradeMonitoringPolicy | The policy used for monitoring the application upgrade | ArmRollingUpgradeMonitoringPolicy |
| upgradeMode | The mode used to monitor health during a rolling upgrade. The values are UnmonitoredAuto, UnmonitoredManual, and Monitored. | 'Invalid''Monitored''UnmonitoredAuto''UnmonitoredManual' |
| upgradeReplicaSetCheckTimeout | The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. Valid values are between 0 and 42949672925 inclusive. (unsigned 32-bit integer). | string |
| applicationHealthPolicy | Defines a health policy used to evaluate the health of an application or one of its children entities. | ApplicationHealthPolicy |
| forceRestart | If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data). | bool |
| instanceCloseDelayDuration | Duration in seconds, to wait before a stateless instance is closed, to allow the active requests to drain gracefully. This would be effective when the instance is closing during the application/cluster upgrade, only for those instances which have a non-zero delay duration configured in the service description. | int |
| recreateApplication | Determines whether the application should be recreated on update. If value=true, the rest of the upgrade policy parameters are not allowed. | bool |
| rollingUpgradeMonitoringPolicy | The policy used for monitoring the application upgrade | RollingUpgradeMonitoringPolicy |
| upgradeMode | The mode used to monitor health during a rolling upgrade. The values are Monitored, and UnmonitoredAuto. | 'Monitored''UnmonitoredAuto' |
| upgradeReplicaSetCheckTimeout | The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. Valid values are between 0 and 42949672925 inclusive. (unsigned 32-bit integer). | int |


### ArmApplicationHealthPolicy

| Name | Description | Value |
|-|-|-|
| considerWarningAsError | Indicates whether warnings are treated with the same severity as errors. | bool |
| defaultServiceTypeHealthPolicy | The health policy used by default to evaluate the health of a service type. | ArmServiceTypeHealthPolicy |
| maxPercentUnhealthyDeployedApplications | The maximum allowed percentage of unhealthy deployed applications. Allowed values are Byte values from zero to 100.The percentage represents the maximum tolerated percentage of deployed applications that can be unhealthy before the application is considered in error.This is calculated by dividing the number of unhealthy deployed applications over the number of nodes where the application is currently deployed on in the cluster.The computation rounds up to tolerate one failure on small numbers of nodes. Default percentage is zero. | int |
| serviceTypeHealthPolicyMap | The map with service type health policy per service type name. The map is empty by default. | ArmServiceTypeHealthPolicyMap |


### ArmServiceTypeHealthPolicy

| Name | Description | Value |
|-|-|-|
| maxPercentUnhealthyPartitionsPerService | The maximum percentage of partitions per service allowed to be unhealthy before your application is considered in error. | int |
| maxPercentUnhealthyReplicasPerPartition | The maximum percentage of replicas per partition allowed to be unhealthy before your application is considered in error. | int |
| maxPercentUnhealthyServices | The maximum percentage of services allowed to be unhealthy before your application is considered in error. | int |


### ArmServiceTypeHealthPolicyMap

| Name | Description | Value |
|-|-|-|
| {customized property} |  | ArmServiceTypeHealthPolicy |


### ArmRollingUpgradeMonitoringPolicy

| Name | Description | Value |
|-|-|-|
| failureAction | The activation Mode of the service package | 'Manual''Rollback' |
| healthCheckRetryTimeout | The amount of time to retry health evaluation when the application or cluster is unhealthy before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds. | string |
| healthCheckStableDuration | The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds. | string |
| healthCheckWaitDuration | The amount of time to wait after completing an upgrade domain before applying health policies. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds. | string |
| upgradeDomainTimeout | The amount of time each upgrade domain has to complete before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds. | string |
| upgradeTimeout | The amount of time the overall upgrade has to complete before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds. | string |


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


### RollingUpgradeMonitoringPolicy

| Name | Description | Value |
|-|-|-|
| failureAction | The compensating action to perform when a Monitored upgrade encounters monitoring policy or health policy violations. Invalid indicates the failure action is invalid. Rollback specifies that the upgrade will start rolling back automatically. Manual indicates that the upgrade will switch to UnmonitoredManual upgrade mode. | 'Manual''Rollback' (required) |
| healthCheckRetryTimeout | The amount of time to retry health evaluation when the application or cluster is unhealthy before FailureAction is executed. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff". | string (required) |
| healthCheckStableDuration | The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff". | string (required) |
| healthCheckWaitDuration | The amount of time to wait after completing an upgrade domain before applying health policies. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff". | string (required) |
| upgradeDomainTimeout | The amount of time each upgrade domain has to complete before FailureAction is executed. Cannot be larger than 12 hours. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff". | string (required) |
| upgradeTimeout | The amount of time the overall upgrade has to complete before FailureAction is executed. Cannot be larger than 12 hours. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff". | string (required) |
## Microsoft.ServiceFabric/clusters/applications/services@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceFabric/clusters/applications/services@2023-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
  body = jsonencode({
    properties = {
      correlationScheme = [
        {
          scheme = "string"
          serviceName = "string"
        }
      ]
      defaultMoveCost = "string"
      partitionDescription = {
        partitionScheme = "string"
        // For remaining properties, see PartitionSchemeDescription objects
      }
      placementConstraints = "string"
      serviceDnsName = "string"
      serviceLoadMetrics = [
        {
          defaultLoad = int
          name = "string"
          primaryDefaultLoad = int
          secondaryDefaultLoad = int
          weight = "string"
        }
      ]
      servicePackageActivationMode = "string"
      servicePlacementPolicies = [
        {
        }
      ]
      serviceTypeName = "string"
      correlationScheme = [
        {
          scheme = "string"
          serviceName = "string"
        }
      ]
      defaultMoveCost = "string"
      partitionDescription = {
        partitionScheme = "string"
        // For remaining properties, see Partition objects
      }
      placementConstraints = "string"
      scalingPolicies = [
        {
          scalingMechanism = {
            kind = "string"
            // For remaining properties, see ScalingMechanism objects
          }
          scalingTrigger = {
            kind = "string"
            // For remaining properties, see ScalingTrigger objects
          }
        }
      ]
      serviceDnsName = "string"
      serviceLoadMetrics = [
        {
          defaultLoad = int
          name = "string"
          primaryDefaultLoad = int
          secondaryDefaultLoad = int
          weight = "string"
        }
      ]
      servicePackageActivationMode = "string"
      servicePlacementPolicies = [
        {
          type = "string"
          // For remaining properties, see ServicePlacementPolicy objects
        }
      ]
      serviceTypeName = "string"
      serviceKind = "string"
      // For remaining properties, see ServiceResourceProperties objects
    }
  })
}

```

### clusters/applications/services

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | It will be deprecated in New API, resource location depends on the parent resource. | string |
| tags | Azure resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:applications |
| properties | The service resource properties. | ServiceResourceProperties |


### ServiceResourceProperties

| Name | Description | Value |
|-|-|-|
| correlationScheme | A list that describes the correlation of the service with other services. | ServiceCorrelationDescription[] |
| defaultMoveCost | Specifies the move cost for the service. | 'High''Low''Medium''Zero' |
| partitionDescription | Describes how the service is partitioned. | PartitionSchemeDescription |
| placementConstraints | The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)". | string |
| serviceDnsName | Dns name used for the service. If this is specified, then the DNS name can be used to return the IP addresses of service endpoints for application layer protocols (e.g., HTTP).When updating serviceDnsName, old name may be temporarily resolvable. However, rely on new name.When removing serviceDnsName, removed name may temporarily be resolvable. Do not rely on the name being unresolvable. | string |
| serviceLoadMetrics | The service load metrics is given as an array of ServiceLoadMetricDescription objects. | ServiceLoadMetricDescription[] |
| servicePackageActivationMode | The activation Mode of the service package | 'ExclusiveProcess''SharedProcess' |
| servicePlacementPolicies | A list that describes the correlation of the service with other services. | object |
| serviceTypeName | The name of the service type | string |
| correlationScheme | A list that describes the correlation of the service with other services. | ServiceCorrelation[] |
| defaultMoveCost | Specifies the move cost for the service. | 'High''Low''Medium''Zero' |
| partitionDescription | Describes how the service is partitioned. | Partition(required) |
| placementConstraints | The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)". | string |
| scalingPolicies | Scaling policies for this service. | ScalingPolicy[] |
| serviceDnsName | Dns name used for the service. If this is specified, then the DNS name can be used to return the IP addresses of service endpoints for application layer protocols (e.g., HTTP).When updating serviceDnsName, old name may be temporarily resolvable. However, rely on new name.When removing serviceDnsName, removed name may temporarily be resolvable. Do not rely on the name being unresolvable. | string |
| serviceLoadMetrics | The service load metrics is given as an array of ServiceLoadMetric objects. | ServiceLoadMetric[] |
| servicePackageActivationMode | The activation Mode of the service package | 'ExclusiveProcess''SharedProcess' |
| servicePlacementPolicies | A list that describes the correlation of the service with other services. | ServicePlacementPolicy[] |
| serviceTypeName | The name of the service type | string (required) |
| serviceKind | Set the object type | StatefulStateless(required) |


### ServiceCorrelationDescription

| Name | Description | Value |
|-|-|-|
| scheme | The ServiceCorrelationScheme which describes the relationship between this service and the service specified via ServiceName. | 'Affinity''AlignedAffinity''Invalid''NonAlignedAffinity' (required) |
| serviceName | The name of the service that the correlation relationship is established with. | string (required) |


### PartitionSchemeDescription

| Name | Description | Value |
|-|-|-|
| partitionScheme | Set the object type | NamedSingletonUniformInt64Range(required) |


### NamedPartitionSchemeDescription

| Name | Description | Value |
|-|-|-|
| partitionScheme | Specifies how the service is partitioned. | 'Named' (required) |
| count | The number of partitions. | int (required) |
| names | Array of size specified by the âcountâ parameter, for the names of the partitions. | string[] (required) |


### SingletonPartitionSchemeDescription

| Name | Description | Value |
|-|-|-|
| partitionScheme | Specifies how the service is partitioned. | 'Singleton' (required) |


### UniformInt64RangePartitionSchemeDescription

| Name | Description | Value |
|-|-|-|
| partitionScheme | Specifies how the service is partitioned. | 'UniformInt64Range' (required) |
| count | The number of partitions. | int (required) |
| highKey | String indicating the upper bound of the partition key range thatshould be split between the partition âcountâ | string (required) |
| lowKey | String indicating the lower bound of the partition key range thatshould be split between the partition âcountâ | string (required) |


### ServiceLoadMetricDescription

| Name | Description | Value |
|-|-|-|
| defaultLoad | Used only for Stateless services. The default amount of load, as a number, that this service creates for this metric. | int |
| name | The name of the metric. If the service chooses to report load during runtime, the load metric name should match the name that is specified in Name exactly. Note that metric names are case sensitive. | string (required) |
| primaryDefaultLoad | Used only for Stateful services. The default amount of load, as a number, that this service creates for this metric when it is a Primary replica. | int |
| secondaryDefaultLoad | Used only for Stateful services. The default amount of load, as a number, that this service creates for this metric when it is a Secondary replica. | int |
| weight | The service load metric relative weight, compared to other metrics configured for this service, as a number. | 'High''Low''Medium''Zero' |


### ServiceCorrelation

| Name | Description | Value |
|-|-|-|
| scheme | The ServiceCorrelationScheme which describes the relationship between this service and the service specified via ServiceName. | 'AlignedAffinity''NonAlignedAffinity' (required) |
| serviceName | The Arm Resource ID of the service that the correlation relationship is established with. | string (required) |


### Partition

| Name | Description | Value |
|-|-|-|
| partitionScheme | Set the object type | NamedSingletonUniformInt64Range(required) |


### NamedPartitionScheme

| Name | Description | Value |
|-|-|-|
| partitionScheme | Specifies how the service is partitioned. | 'Named' (required) |
| names | Array for the names of the partitions. | string[] (required) |


### SingletonPartitionScheme

| Name | Description | Value |
|-|-|-|
| partitionScheme | Specifies how the service is partitioned. | 'Singleton' (required) |


### UniformInt64RangePartitionScheme

| Name | Description | Value |
|-|-|-|
| partitionScheme | Specifies how the service is partitioned. | 'UniformInt64Range' (required) |
| count | The number of partitions. | int (required) |
| highKey | The upper bound of the partition key range thatshould be split between the partition âCountâ | int (required) |
| lowKey | The lower bound of the partition key range thatshould be split between the partition âCountâ | int (required) |


### ScalingPolicy

| Name | Description | Value |
|-|-|-|
| scalingMechanism | Specifies the mechanism associated with this scaling policy | ScalingMechanism(required) |
| scalingTrigger | Specifies the trigger associated with this scaling policy. | ScalingTrigger(required) |


### ScalingMechanism

| Name | Description | Value |
|-|-|-|
| kind | Set the object type | AddRemoveIncrementalNamedPartitionScalePartitionInstanceCount(required) |


### AddRemoveIncrementalNamedPartitionScalingMechanism

| Name | Description | Value |
|-|-|-|
| kind | Specifies the mechanism associated with this scaling policy. | 'AddRemoveIncrementalNamedPartition' (required) |
| maxPartitionCount | Maximum number of named partitions of the service. | int (required) |
| minPartitionCount | Minimum number of named partitions of the service. | int (required) |
| scaleIncrement | The number of instances to add or remove during a scaling operation. | int (required) |


### PartitionInstanceCountScaleMechanism

| Name | Description | Value |
|-|-|-|
| kind | Specifies the mechanism associated with this scaling policy. | 'ScalePartitionInstanceCount' (required) |
| maxInstanceCount | Maximum number of instances of the partition. | int (required) |
| minInstanceCount | Minimum number of instances of the partition. | int (required) |
| scaleIncrement | The number of instances to add or remove during a scaling operation. | int (required) |


### ScalingTrigger

| Name | Description | Value |
|-|-|-|
| kind | Set the object type | AveragePartitionLoadTriggerAverageServiceLoadTrigger(required) |


### AveragePartitionLoadScalingTrigger

| Name | Description | Value |
|-|-|-|
| kind | Specifies the trigger associated with this scaling policy. | 'AveragePartitionLoadTrigger' (required) |
| lowerLoadThreshold | The lower limit of the load below which a scale in operation should be performed. | int (required) |
| metricName | The name of the metric for which usage should be tracked. | string (required) |
| scaleInterval | The period in seconds on which a decision is made whether to scale or not. This property should come in ISO 8601 format "hh:mm:ss". | string (required) |
| upperLoadThreshold | The upper limit of the load beyond which a scale out operation should be performed. | int (required) |


### AverageServiceLoadScalingTrigger

| Name | Description | Value |
|-|-|-|
| kind | Specifies the trigger associated with this scaling policy. | 'AverageServiceLoadTrigger' (required) |
| lowerLoadThreshold | The lower limit of the load below which a scale in operation should be performed. | int (required) |
| metricName | The name of the metric for which usage should be tracked. | string (required) |
| scaleInterval | The period in seconds on which a decision is made whether to scale or not. This property should come in ISO 8601 format "hh:mm:ss". | string (required) |
| upperLoadThreshold | The upper limit of the load beyond which a scale out operation should be performed. | int (required) |
| useOnlyPrimaryLoad | Flag determines whether only the load of primary replica should be considered for scaling. If set to true, then trigger will only consider the load of primary replicas of stateful service. If set to false, trigger will consider load of all replicas. This parameter cannot be set to true for stateless service. | bool (required) |


### ServiceLoadMetric

| Name | Description | Value |
|-|-|-|
| defaultLoad | Used only for Stateless services. The default amount of load, as a number, that this service creates for this metric. | int |
| name | The name of the metric. If the service chooses to report load during runtime, the load metric name should match the name that is specified in Name exactly. Note that metric names are case sensitive. | string (required) |
| primaryDefaultLoad | Used only for Stateful services. The default amount of load, as a number, that this service creates for this metric when it is a Primary replica. | int |
| secondaryDefaultLoad | Used only for Stateful services. The default amount of load, as a number, that this service creates for this metric when it is a Secondary replica. | int |
| weight | The service load metric relative weight, compared to other metrics configured for this service, as a number. | 'High''Low''Medium''Zero' |


### ServicePlacementPolicy

| Name | Description | Value |
|-|-|-|
| type | Set the object type | InvalidDomainNonPartiallyPlaceServicePreferredPrimaryDomainRequiredDomainRequiredDomainDistribution(required) |


### ServicePlacementInvalidDomainPolicy

| Name | Description | Value |
|-|-|-|
| type | The type of placement policy for a service fabric service. Following are the possible values. | 'InvalidDomain' (required) |
| domainName | The name of the domain that should not be used for placement. | string (required) |


### ServicePlacementNonPartiallyPlaceServicePolicy

| Name | Description | Value |
|-|-|-|
| type | The type of placement policy for a service fabric service. Following are the possible values. | 'NonPartiallyPlaceService' (required) |


### ServicePlacementPreferPrimaryDomainPolicy

| Name | Description | Value |
|-|-|-|
| type | The type of placement policy for a service fabric service. Following are the possible values. | 'PreferredPrimaryDomain' (required) |
| domainName | The name of the domain that should used for placement as per this policy. | string (required) |


### ServicePlacementRequiredDomainPolicy

| Name | Description | Value |
|-|-|-|
| type | The type of placement policy for a service fabric service. Following are the possible values. | 'RequiredDomain' (required) |
| domainName | The name of the domain that should used for placement as per this policy. | string (required) |


### ServicePlacementRequireDomainDistributionPolicy

| Name | Description | Value |
|-|-|-|
| type | The type of placement policy for a service fabric service. Following are the possible values. | 'RequiredDomainDistribution' (required) |
| domainName | The name of the domain that should used for placement as per this policy. | string (required) |


### StatefulServiceProperties

| Name | Description | Value |
|-|-|-|
| serviceKind | The kind of service (Stateless or Stateful). | 'Stateful' (required) |
| hasPersistedState | A flag indicating whether this is a persistent service which stores states on the local disk. If it is then the value of this property is true, if not it is false. | bool |
| minReplicaSetSize | The minimum replica set size as a number. | int |
| quorumLossWaitDuration | The maximum duration for which a partition is allowed to be in a state of quorum loss, represented in ISO 8601 format "hh:mm:ss". | string |
| replicaRestartWaitDuration | The duration between when a replica goes down and when a new replica is created, represented in ISO 8601 format "hh:mm:ss". | string |
| servicePlacementTimeLimit | The duration for which replicas can stay InBuild before reporting that build is stuck, represented in ISO 8601 format "hh:mm:ss". | string |
| standByReplicaKeepDuration | The definition on how long StandBy replicas should be maintained before being removed, represented in ISO 8601 format "hh:mm:ss". | string |
| targetReplicaSetSize | The target replica set size as a number. | int |


### StatelessServiceProperties

| Name | Description | Value |
|-|-|-|
| serviceKind | The kind of service (Stateless or Stateful). | 'Stateless' (required) |
| instanceCount | The instance count. | int (required) |
| minInstanceCount | MinInstanceCount is the minimum number of instances that must be up to meet the EnsureAvailability safety check during operations like upgrade or deactivate node. The actual number that is used is max( MinInstanceCount, ceil( MinInstancePercentage/100.0 * InstanceCount) ). Note, if InstanceCount is set to -1, during MinInstanceCount computation -1 is first converted into the number of nodes on which the instances are allowed to be placed according to the placement constraints on the service. | int |
| minInstancePercentage | MinInstancePercentage is the minimum percentage of InstanceCount that must be up to meet the EnsureAvailability safety check during operations like upgrade or deactivate node. The actual number that is used is max( MinInstanceCount, ceil( MinInstancePercentage/100.0 * InstanceCount) ). Note, if InstanceCount is set to -1, during MinInstancePercentage computation, -1 is first converted into the number of nodes on which the instances are allowed to be placed according to the placement constraints on the service. | int |
## Microsoft.ServiceFabric/clusters/applicationTypes@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceFabric/clusters/applicationTypes@2023-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
  body = jsonencode({
    properties = {}
  })
}

```

### clusters/applicationTypes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | It will be deprecated in New API, resource location depends on the parent resource. | string |
| tags | Azure resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:clusters |
| properties | The application type name properties | ApplicationTypeResourceProperties |
## Microsoft.ServiceFabric/clusters/applicationTypes/versions@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceFabric/clusters/applicationTypes/versions@2023-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
  body = jsonencode({
    properties = {
      appPackageUrl = "string"
      appPackageUrl = "string"
    }
  })
}

```

### clusters/applicationTypes/versions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | It will be deprecated in New API, resource location depends on the parent resource. | string |
| tags | Azure resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:applicationTypes |
| properties | The properties of the application type version resource. | ApplicationTypeVersionResourceProperties |


### ApplicationTypeVersionResourceProperties

| Name | Description | Value |
|-|-|-|
| appPackageUrl | The URL to the application package | string (required) |
| appPackageUrl | The URL to the application package | string (required) |
## Microsoft.ServiceFabric/managedClusters@2023-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceFabric/managedClusters@2023-12-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      addonFeatures = [
        "string"
      ]
      adminPassword = "string"
      adminUserName = "string"
      allowRdpAccess = bool
      applicationTypeVersionsCleanupPolicy = {
        maxUnusedVersionsToKeep = int
      }
      auxiliarySubnets = [
        {
          enableIpv6 = bool
          name = "string"
          networkSecurityGroupId = "string"
          privateEndpointNetworkPolicies = "string"
          privateLinkServiceNetworkPolicies = "string"
        }
      ]
      azureActiveDirectory = {
        clientApplication = "string"
        clusterApplication = "string"
        tenantId = "string"
      }
      clientConnectionPort = int
      clients = [
        {
          commonName = "string"
          isAdmin = bool
          issuerThumbprint = "string"
          thumbprint = "string"
        }
      ]
      clusterCodeVersion = "string"
      clusterUpgradeCadence = "string"
      clusterUpgradeMode = "string"
      ddosProtectionPlanId = "string"
      dnsName = "string"
      enableAutoOSUpgrade = bool
      enableHttpGatewayExclusiveAuthMode = bool
      enableIpv6 = bool
      enableServicePublicIP = bool
      fabricSettings = [
        {
          name = "string"
          parameters = [
            {
              name = "string"
              value = "string"
            }
          ]
        }
      ]
      httpGatewayConnectionPort = int
      httpGatewayTokenAuthConnectionPort = int
      ipTags = [
        {
          ipTagType = "string"
          tag = "string"
        }
      ]
      loadBalancingRules = [
        {
          backendPort = int
          frontendPort = int
          loadDistribution = "string"
          probePort = int
          probeProtocol = "string"
          probeRequestPath = "string"
          protocol = "string"
        }
      ]
      networkSecurityRules = [
        {
          access = "string"
          description = "string"
          destinationAddressPrefix = "string"
          destinationAddressPrefixes = [
            "string"
          ]
          destinationPortRange = "string"
          destinationPortRanges = [
            "string"
          ]
          direction = "string"
          name = "string"
          priority = int
          protocol = "string"
          sourceAddressPrefix = "string"
          sourceAddressPrefixes = [
            "string"
          ]
          sourcePortRange = "string"
          sourcePortRanges = [
            "string"
          ]
        }
      ]
      publicIPPrefixId = "string"
      publicIPv6PrefixId = "string"
      serviceEndpoints = [
        {
          locations = [
            "string"
          ]
          service = "string"
        }
      ]
      subnetId = "string"
      upgradeDescription = {
        deltaHealthPolicy = {
          maxPercentDeltaUnhealthyApplications = int
          maxPercentDeltaUnhealthyNodes = int
          maxPercentUpgradeDomainDeltaUnhealthyNodes = int
        }
        forceRestart = bool
        healthPolicy = {
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
      useCustomVnet = bool
      zonalResiliency = bool
      zonalUpdateMode = "string"
    }
    sku = {
      name = "string"
    }
  })
}

```

### managedClusters

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Azure resource location. | string (required) |
| tags | Azure resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The sku of the managed cluster | Sku(required) |
| properties | The managed cluster resource properties | ManagedClusterProperties |


### ManagedClusterProperties

| Name | Description | Value |
|-|-|-|
| addonFeatures | List of add-on features to enable on the cluster. | String array containing any of:'BackupRestoreService''DnsService''ResourceMonitorService' |
| adminPassword | VM admin user password. | string |
| adminUserName | VM admin user name. | string (required) |
| allowRdpAccess | Setting this to true enables RDP access to the VM. The default NSG rule opens RDP port to Internet which can be overridden with custom Network Security Rules. The default value for this setting is false. | bool |
| applicationTypeVersionsCleanupPolicy | The policy used to clean up unused versions. | ApplicationTypeVersionsCleanupPolicy |
| auxiliarySubnets | Auxiliary subnets for the cluster. | Subnet[] |
| azureActiveDirectory | The AAD authentication settings of the cluster. | AzureActiveDirectory |
| clientConnectionPort | The port used for client connections to the cluster. | int |
| clients | Client certificates that are allowed to manage the cluster. | ClientCertificate[] |
| clusterCodeVersion | The Service Fabric runtime version of the cluster. This property is required whenclusterUpgradeModeis set to 'Manual'. To get list of available Service Fabric versions for new clusters use ClusterVersion API. To get the list of available version for existing clusters useavailableClusterVersions. | string |
| clusterUpgradeCadence | Indicates when new cluster runtime version upgrades will be applied after they are released. By default is Wave0. Only applies whenclusterUpgradeModeis set to 'Automatic'. | 'Wave0''Wave1''Wave2' |
| clusterUpgradeMode | The upgrade mode of the cluster when new Service Fabric runtime version is available. | 'Automatic''Manual' |
| ddosProtectionPlanId | Specify the resource id of a DDoS network protection plan that will be associated with the virtual network of the cluster. | string |
| dnsName | The cluster dns name. | string (required) |
| enableAutoOSUpgrade | Setting this to true enables automatic OS upgrade for the node types that are created using any platform OS image with version 'latest'. The default value for this setting is false. | bool |
| enableHttpGatewayExclusiveAuthMode | If true, token-based authentication is not allowed on the HttpGatewayEndpoint. This is required to support TLS versions 1.3 and above. If token-based authentication is used, HttpGatewayTokenAuthConnectionPort must be defined. | bool |
| enableIpv6 | Setting this to true creates IPv6 address space for the default VNet used by the cluster. This setting cannot be changed once the cluster is created. The default value for this setting is false. | bool |
| enableServicePublicIP | Setting this to true will link the IPv4 address as the ServicePublicIP of the IPv6 address. It can only be set to True if IPv6 is enabled on the cluster. | bool |
| fabricSettings | The list of custom fabric settings to configure the cluster. | SettingsSectionDescription[] |
| httpGatewayConnectionPort | The port used for HTTP connections to the cluster. | int |
| httpGatewayTokenAuthConnectionPort | The port used for token-auth based HTTPS connections to the cluster. Cannot be set to the same port as HttpGatewayEndpoint. | int |
| ipTags | The list of IP tags associated with the default public IP address of the cluster. | IPTag[] |
| loadBalancingRules | Load balancing rules that are applied to the public load balancer of the cluster. | LoadBalancingRule[] |
| networkSecurityRules | Custom Network Security Rules that are applied to the Virtual Network of the cluster. | NetworkSecurityRule[] |
| publicIPPrefixId | Specify the resource id of a public IPv4 prefix that the load balancer will allocate a public IPv4 address from. This setting cannot be changed once the cluster is created. | string |
| publicIPv6PrefixId | Specify the resource id of a public IPv6 prefix that the load balancer will allocate a public IPv6 address from. This setting cannot be changed once the cluster is created. | string |
| serviceEndpoints | Service endpoints for subnets in the cluster. | ServiceEndpoint[] |
| subnetId | If specified, the node types for the cluster are created in this subnet instead of the default VNet. ThenetworkSecurityRulesspecified for the cluster are also applied to this subnet. This setting cannot be changed once the cluster is created. | string |
| upgradeDescription | The policy to use when upgrading the cluster. | ClusterUpgradePolicy |
| useCustomVnet | For new clusters, this parameter indicates that it uses Bring your own VNet, but the subnet is specified at node type level; and for such clusters, the subnetId property is required for node types. | bool |
| zonalResiliency | Indicates if the cluster has zone resiliency. | bool |
| zonalUpdateMode | Indicates the update mode for Cross Az clusters. | 'Fast''Standard' |


### ApplicationTypeVersionsCleanupPolicy

| Name | Description | Value |
|-|-|-|
| maxUnusedVersionsToKeep | Number of unused versions per application type to keep. | int (required) |


### Subnet

| Name | Description | Value |
|-|-|-|
| enableIpv6 | Indicates wether to enable Ipv6 or not. If not provided, it will take the same configuration as the cluster. | bool |
| name | Subnet name. | string (required) |
| networkSecurityGroupId | Full resource id for the network security group. | string |
| privateEndpointNetworkPolicies | Enable or Disable apply network policies on private end point in the subnet. | 'disabled''enabled' |
| privateLinkServiceNetworkPolicies | Enable or Disable apply network policies on private link service in the subnet. | 'disabled''enabled' |


### AzureActiveDirectory

| Name | Description | Value |
|-|-|-|
| clientApplication | Azure active directory client application id. | string |
| clusterApplication | Azure active directory cluster application id. | string |
| tenantId | Azure active directory tenant id. | string |


### ClientCertificate

| Name | Description | Value |
|-|-|-|
| commonName | Certificate common name. | string |
| isAdmin | Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster. | bool (required) |
| issuerThumbprint | Issuer thumbprint for the certificate. Only used together with CommonName. | string |
| thumbprint | Certificate thumbprint. | string |


### SettingsSectionDescription

| Name | Description | Value |
|-|-|-|
| name | The section name of the fabric settings. | string (required) |
| parameters | The collection of parameters in the section. | SettingsParameterDescription[] (required) |


### SettingsParameterDescription

| Name | Description | Value |
|-|-|-|
| name | The parameter name of fabric setting. | string (required) |
| value | The parameter value of fabric setting. | string (required) |


### IPTag

| Name | Description | Value |
|-|-|-|
| ipTagType | The IP tag type. | string (required) |
| tag | The value of the IP tag. | string (required) |


### LoadBalancingRule

| Name | Description | Value |
|-|-|-|
| backendPort | The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535. | int (required) |
| frontendPort | The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 1 and 65534. | int (required) |
| loadDistribution | The load distribution policy for this rule. | string |
| probePort | The prob port used by the load balancing rule. Acceptable values are between 1 and 65535. | int |
| probeProtocol | the reference to the load balancer probe used by the load balancing rule. | 'http''https''tcp' (required) |
| probeRequestPath | The probe request path. Only supported for HTTP/HTTPS probes. | string |
| protocol | The reference to the transport protocol used by the load balancing rule. | 'tcp''udp' (required) |


### NetworkSecurityRule

| Name | Description | Value |
|-|-|-|
| access | The network traffic is allowed or denied. | 'allow''deny' (required) |
| description | Network security rule description. | string |
| destinationAddressPrefix | The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. | string |
| destinationAddressPrefixes | The destination address prefixes. CIDR or destination IP ranges. | string[] |
| destinationPortRange | he destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. | string |
| destinationPortRanges | The destination port ranges. | string[] |
| direction | Network security rule direction. | 'inbound''outbound' (required) |
| name | Network security rule name. | string (required) |
| priority | The priority of the rule. The value can be in the range 1000 to 3000. Values outside this range are reserved for Service Fabric ManagerCluster Resource Provider. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule. | int (required) |
| protocol | Network protocol this rule applies to. | 'ah''esp''http''https''icmp''tcp''udp' (required) |
| sourceAddressPrefix | The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from. | string |
| sourceAddressPrefixes | The CIDR or source IP ranges. | string[] |
| sourcePortRange | The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. | string |
| sourcePortRanges | The source port ranges. | string[] |


### ServiceEndpoint

| Name | Description | Value |
|-|-|-|
| locations | A list of locations. | string[] |
| service | The type of the endpoint service. | string (required) |


### ClusterUpgradePolicy

| Name | Description | Value |
|-|-|-|
| deltaHealthPolicy | The cluster delta health policy defines a health policy used to evaluate the health of the cluster during a cluster upgrade. | ClusterUpgradeDeltaHealthPolicy |
| forceRestart | If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data). | bool |
| healthPolicy | The cluster health policy defines a health policy used to evaluate the health of the cluster during a cluster upgrade. | ClusterHealthPolicy |
| monitoringPolicy | The cluster monitoring policy describes the parameters for monitoring an upgrade in Monitored mode. | ClusterMonitoringPolicy |
| upgradeReplicaSetCheckTimeout | The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues.When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues.The timeout is reset at the start of each upgrade domain. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.This value must be between 00:00:00 and 49710.06:28:15 (unsigned 32 bit integer for seconds) | string |


### ClusterUpgradeDeltaHealthPolicy

| Name | Description | Value |
|-|-|-|
| maxPercentDeltaUnhealthyApplications | The maximum allowed percentage of applications health degradation allowed during cluster upgrades.The delta is measured between the state of the applications at the beginning of upgrade and the state of the applications at the time of the health evaluation.The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits. System services are not included in this.NOTE: This value will overwrite the value specified in properties.UpgradeDescription.HealthPolicy.MaxPercentUnhealthyApplications | int |
| maxPercentDeltaUnhealthyNodes | The maximum allowed percentage of nodes health degradation allowed during cluster upgrades.The delta is measured between the state of the nodes at the beginning of upgrade and the state of the nodes at the time of the health evaluation.The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits. | int (required) |
| maxPercentUpgradeDomainDeltaUnhealthyNodes | The maximum allowed percentage of upgrade domain nodes health degradation allowed during cluster upgrades.The delta is measured between the state of the upgrade domain nodes at the beginning of upgrade and the state of the upgrade domain nodes at the time of the health evaluation.The check is performed after every upgrade domain upgrade completion for all completed upgrade domains to make sure the state of the upgrade domains is within tolerated limits. | int |


### ClusterHealthPolicy

| Name | Description | Value |
|-|-|-|
| maxPercentUnhealthyApplications | The maximum allowed percentage of unhealthy applications before reporting an error. For example, to allow 10% of applications to be unhealthy, this value would be 10.The percentage represents the maximum tolerated percentage of applications that can be unhealthy before the cluster is considered in error.If the percentage is respected but there is at least one unhealthy application, the health is evaluated as Warning.This is calculated by dividing the number of unhealthy applications over the total number of application instances in the cluster, excluding applications of application types that are included in the ApplicationTypeHealthPolicyMap.The computation rounds up to tolerate one failure on small numbers of applications. Default percentage is zero. | int (required) |
| maxPercentUnhealthyNodes | The maximum allowed percentage of unhealthy nodes before reporting an error. For example, to allow 10% of nodes to be unhealthy, this value would be 10.The percentage represents the maximum tolerated percentage of nodes that can be unhealthy before the cluster is considered in error.If the percentage is respected but there is at least one unhealthy node, the health is evaluated as Warning.The percentage is calculated by dividing the number of unhealthy nodes over the total number of nodes in the cluster.The computation rounds up to tolerate one failure on small numbers of nodes. Default percentage is zero.In large clusters, some nodes will always be down or out for repairs, so this percentage should be configured to tolerate that. | int (required) |


### ClusterMonitoringPolicy

| Name | Description | Value |
|-|-|-|
| healthCheckRetryTimeout | The amount of time to retry health evaluation when the application or cluster is unhealthy before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format. | string (required) |
| healthCheckStableDuration | The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. The duration can be in either hh:mm:ss or in d.hh:mm:ss.ms format. | string (required) |
| healthCheckWaitDuration | The length of time to wait after completing an upgrade domain before performing health checks. The duration can be in either hh:mm:ss or in d.hh:mm:ss.ms format. | string (required) |
| upgradeDomainTimeout | The amount of time each upgrade domain has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format. | string (required) |
| upgradeTimeout | The amount of time the overall upgrade has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format. | string (required) |


### Sku

| Name | Description | Value |
|-|-|-|
| name | Sku Name. | 'Basic''Standard' (required) |
## Microsoft.ServiceFabric/managedclusters/applications@2023-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceFabric/managedclusters/applications@2023-12-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      managedIdentities = [
        {
          name = "string"
          principalId = "string"
        }
      ]
      parameters = {
        {customized property} = "string"
      }
      upgradePolicy = {
        applicationHealthPolicy = {
          considerWarningAsError = bool
          defaultServiceTypeHealthPolicy = {
            maxPercentUnhealthyPartitionsPerService = int
            maxPercentUnhealthyReplicasPerPartition = int
            maxPercentUnhealthyServices = int
          }
          maxPercentUnhealthyDeployedApplications = int
          serviceTypeHealthPolicyMap = {
            {customized property} = {
              maxPercentUnhealthyPartitionsPerService = int
              maxPercentUnhealthyReplicasPerPartition = int
              maxPercentUnhealthyServices = int
            }
          }
        }
        forceRestart = bool
        instanceCloseDelayDuration = int
        recreateApplication = bool
        rollingUpgradeMonitoringPolicy = {
          failureAction = "string"
          healthCheckRetryTimeout = "string"
          healthCheckStableDuration = "string"
          healthCheckWaitDuration = "string"
          upgradeDomainTimeout = "string"
          upgradeTimeout = "string"
        }
        upgradeMode = "string"
        upgradeReplicaSetCheckTimeout = int
      }
      version = "string"
    }
  })
}

```

### managedclusters/applications

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location depends on the parent resource. | string |
| tags | Azure resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedclusters |
| identity | Describes the managed identities for an Azure resource. | ManagedIdentity |
| properties | The application resource properties. | ApplicationResourceProperties |


### ManagedIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of managed identity for the resource. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | UserAssignedIdentityMap |


### UserAssignedIdentityMap

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### ApplicationResourceProperties

| Name | Description | Value |
|-|-|-|
| managedIdentities | List of user assigned identities for the application, each mapped to a friendly name. | ApplicationUserAssignedIdentity[] |
| parameters | List of application parameters with overridden values from their default values specified in the application manifest. | ApplicationParameterList |
| upgradePolicy | Describes the policy for a monitored application upgrade. | ApplicationUpgradePolicy |
| version | The version of the application type as defined in the application manifest.This name must be the full Arm Resource ID for the referenced application type version. | string |


### ApplicationUserAssignedIdentity

| Name | Description | Value |
|-|-|-|
| name | The friendly name of user assigned identity. | string (required) |
| principalId | The principal id of user assigned identity. | string (required) |


### ApplicationParameterList

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### ApplicationUpgradePolicy

| Name | Description | Value |
|-|-|-|
| applicationHealthPolicy | Defines a health policy used to evaluate the health of an application or one of its children entities. | ApplicationHealthPolicy |
| forceRestart | If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data). | bool |
| instanceCloseDelayDuration | Duration in seconds, to wait before a stateless instance is closed, to allow the active requests to drain gracefully. This would be effective when the instance is closing during the application/cluster upgrade, only for those instances which have a non-zero delay duration configured in the service description. | int |
| recreateApplication | Determines whether the application should be recreated on update. If value=true, the rest of the upgrade policy parameters are not allowed. | bool |
| rollingUpgradeMonitoringPolicy | The policy used for monitoring the application upgrade | RollingUpgradeMonitoringPolicy |
| upgradeMode | The mode used to monitor health during a rolling upgrade. The values are Monitored, and UnmonitoredAuto. | 'Monitored''UnmonitoredAuto' |
| upgradeReplicaSetCheckTimeout | The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. Valid values are between 0 and 42949672925 inclusive. (unsigned 32-bit integer). | int |


### ApplicationHealthPolicy

| Name | Description | Value |
|-|-|-|
| considerWarningAsError | Indicates whether warnings are treated with the same severity as errors. | bool (required) |
| defaultServiceTypeHealthPolicy | The health policy used by default to evaluate the health of a service type. | ServiceTypeHealthPolicy |
| maxPercentUnhealthyDeployedApplications | The maximum allowed percentage of unhealthy deployed applications. Allowed values are Byte values from zero to 100.The percentage represents the maximum tolerated percentage of deployed applications that can be unhealthy before the application is considered in error.This is calculated by dividing the number of unhealthy deployed applications over the number of nodes where the application is currently deployed on in the cluster.The computation rounds up to tolerate one failure on small numbers of nodes. Default percentage is zero. | int (required) |
| serviceTypeHealthPolicyMap | The map with service type health policy per service type name. The map is empty by default. | ServiceTypeHealthPolicyMap |


### ServiceTypeHealthPolicy

| Name | Description | Value |
|-|-|-|
| maxPercentUnhealthyPartitionsPerService | The maximum allowed percentage of unhealthy partitions per service.The percentage represents the maximum tolerated percentage of partitions that can be unhealthy before the service is considered in error.If the percentage is respected but there is at least one unhealthy partition, the health is evaluated as Warning.The percentage is calculated by dividing the number of unhealthy partitions over the total number of partitions in the service.The computation rounds up to tolerate one failure on small numbers of partitions. | int (required) |
| maxPercentUnhealthyReplicasPerPartition | The maximum allowed percentage of unhealthy replicas per partition.The percentage represents the maximum tolerated percentage of replicas that can be unhealthy before the partition is considered in error.If the percentage is respected but there is at least one unhealthy replica, the health is evaluated as Warning.The percentage is calculated by dividing the number of unhealthy replicas over the total number of replicas in the partition.The computation rounds up to tolerate one failure on small numbers of replicas. | int (required) |
| maxPercentUnhealthyServices | The maximum allowed percentage of unhealthy services.The percentage represents the maximum tolerated percentage of services that can be unhealthy before the application is considered in error.If the percentage is respected but there is at least one unhealthy service, the health is evaluated as Warning.This is calculated by dividing the number of unhealthy services of the specific service type over the total number of services of the specific service type.The computation rounds up to tolerate one failure on small numbers of services. | int (required) |


### ServiceTypeHealthPolicyMap

| Name | Description | Value |
|-|-|-|
| {customized property} |  | ServiceTypeHealthPolicy |


### RollingUpgradeMonitoringPolicy

| Name | Description | Value |
|-|-|-|
| failureAction | The compensating action to perform when a Monitored upgrade encounters monitoring policy or health policy violations. Invalid indicates the failure action is invalid. Rollback specifies that the upgrade will start rolling back automatically. Manual indicates that the upgrade will switch to UnmonitoredManual upgrade mode. | 'Manual''Rollback' (required) |
| healthCheckRetryTimeout | The amount of time to retry health evaluation when the application or cluster is unhealthy before FailureAction is executed. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff". | string (required) |
| healthCheckStableDuration | The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff". | string (required) |
| healthCheckWaitDuration | The amount of time to wait after completing an upgrade domain before applying health policies. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff". | string (required) |
| upgradeDomainTimeout | The amount of time each upgrade domain has to complete before FailureAction is executed. Cannot be larger than 12 hours. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff". | string (required) |
| upgradeTimeout | The amount of time the overall upgrade has to complete before FailureAction is executed. Cannot be larger than 12 hours. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff". | string (required) |
## Microsoft.ServiceFabric/managedclusters/applications/services@2023-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceFabric/managedclusters/applications/services@2023-12-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
  body = jsonencode({
    properties = {
      correlationScheme = [
        {
          scheme = "string"
          serviceName = "string"
        }
      ]
      defaultMoveCost = "string"
      partitionDescription = {
        partitionScheme = "string"
        // For remaining properties, see Partition objects
      }
      placementConstraints = "string"
      scalingPolicies = [
        {
          scalingMechanism = {
            kind = "string"
            // For remaining properties, see ScalingMechanism objects
          }
          scalingTrigger = {
            kind = "string"
            // For remaining properties, see ScalingTrigger objects
          }
        }
      ]
      serviceDnsName = "string"
      serviceLoadMetrics = [
        {
          defaultLoad = int
          name = "string"
          primaryDefaultLoad = int
          secondaryDefaultLoad = int
          weight = "string"
        }
      ]
      servicePackageActivationMode = "string"
      servicePlacementPolicies = [
        {
          type = "string"
          // For remaining properties, see ServicePlacementPolicy objects
        }
      ]
      serviceTypeName = "string"
      serviceKind = "string"
      // For remaining properties, see ServiceResourceProperties objects
    }
  })
}

```

### managedclusters/applications/services

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location depends on the parent resource. | string |
| tags | Azure resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:applications |
| properties | The service resource properties. | ServiceResourceProperties |


### ServiceResourceProperties

| Name | Description | Value |
|-|-|-|
| correlationScheme | A list that describes the correlation of the service with other services. | ServiceCorrelation[] |
| defaultMoveCost | Specifies the move cost for the service. | 'High''Low''Medium''Zero' |
| partitionDescription | Describes how the service is partitioned. | Partition(required) |
| placementConstraints | The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)". | string |
| scalingPolicies | Scaling policies for this service. | ScalingPolicy[] |
| serviceDnsName | Dns name used for the service. If this is specified, then the DNS name can be used to return the IP addresses of service endpoints for application layer protocols (e.g., HTTP).When updating serviceDnsName, old name may be temporarily resolvable. However, rely on new name.When removing serviceDnsName, removed name may temporarily be resolvable. Do not rely on the name being unresolvable. | string |
| serviceLoadMetrics | The service load metrics is given as an array of ServiceLoadMetric objects. | ServiceLoadMetric[] |
| servicePackageActivationMode | The activation Mode of the service package | 'ExclusiveProcess''SharedProcess' |
| servicePlacementPolicies | A list that describes the correlation of the service with other services. | ServicePlacementPolicy[] |
| serviceTypeName | The name of the service type | string (required) |
| serviceKind | Set the object type | StatefulStateless(required) |


### ServiceCorrelation

| Name | Description | Value |
|-|-|-|
| scheme | The ServiceCorrelationScheme which describes the relationship between this service and the service specified via ServiceName. | 'AlignedAffinity''NonAlignedAffinity' (required) |
| serviceName | The Arm Resource ID of the service that the correlation relationship is established with. | string (required) |


### Partition

| Name | Description | Value |
|-|-|-|
| partitionScheme | Set the object type | NamedSingletonUniformInt64Range(required) |


### NamedPartitionScheme

| Name | Description | Value |
|-|-|-|
| partitionScheme | Specifies how the service is partitioned. | 'Named' (required) |
| names | Array for the names of the partitions. | string[] (required) |


### SingletonPartitionScheme

| Name | Description | Value |
|-|-|-|
| partitionScheme | Specifies how the service is partitioned. | 'Singleton' (required) |


### UniformInt64RangePartitionScheme

| Name | Description | Value |
|-|-|-|
| partitionScheme | Specifies how the service is partitioned. | 'UniformInt64Range' (required) |
| count | The number of partitions. | int (required) |
| highKey | The upper bound of the partition key range thatshould be split between the partition âCountâ | int (required) |
| lowKey | The lower bound of the partition key range thatshould be split between the partition âCountâ | int (required) |


### ScalingPolicy

| Name | Description | Value |
|-|-|-|
| scalingMechanism | Specifies the mechanism associated with this scaling policy | ScalingMechanism(required) |
| scalingTrigger | Specifies the trigger associated with this scaling policy. | ScalingTrigger(required) |


### ScalingMechanism

| Name | Description | Value |
|-|-|-|
| kind | Set the object type | AddRemoveIncrementalNamedPartitionScalePartitionInstanceCount(required) |


### AddRemoveIncrementalNamedPartitionScalingMechanism

| Name | Description | Value |
|-|-|-|
| kind | Specifies the mechanism associated with this scaling policy. | 'AddRemoveIncrementalNamedPartition' (required) |
| maxPartitionCount | Maximum number of named partitions of the service. | int (required) |
| minPartitionCount | Minimum number of named partitions of the service. | int (required) |
| scaleIncrement | The number of instances to add or remove during a scaling operation. | int (required) |


### PartitionInstanceCountScaleMechanism

| Name | Description | Value |
|-|-|-|
| kind | Specifies the mechanism associated with this scaling policy. | 'ScalePartitionInstanceCount' (required) |
| maxInstanceCount | Maximum number of instances of the partition. | int (required) |
| minInstanceCount | Minimum number of instances of the partition. | int (required) |
| scaleIncrement | The number of instances to add or remove during a scaling operation. | int (required) |


### ScalingTrigger

| Name | Description | Value |
|-|-|-|
| kind | Set the object type | AveragePartitionLoadTriggerAverageServiceLoadTrigger(required) |


### AveragePartitionLoadScalingTrigger

| Name | Description | Value |
|-|-|-|
| kind | Specifies the trigger associated with this scaling policy. | 'AveragePartitionLoadTrigger' (required) |
| lowerLoadThreshold | The lower limit of the load below which a scale in operation should be performed. | int (required) |
| metricName | The name of the metric for which usage should be tracked. | string (required) |
| scaleInterval | The period in seconds on which a decision is made whether to scale or not. This property should come in ISO 8601 format "hh:mm:ss". | string (required) |
| upperLoadThreshold | The upper limit of the load beyond which a scale out operation should be performed. | int (required) |


### AverageServiceLoadScalingTrigger

| Name | Description | Value |
|-|-|-|
| kind | Specifies the trigger associated with this scaling policy. | 'AverageServiceLoadTrigger' (required) |
| lowerLoadThreshold | The lower limit of the load below which a scale in operation should be performed. | int (required) |
| metricName | The name of the metric for which usage should be tracked. | string (required) |
| scaleInterval | The period in seconds on which a decision is made whether to scale or not. This property should come in ISO 8601 format "hh:mm:ss". | string (required) |
| upperLoadThreshold | The upper limit of the load beyond which a scale out operation should be performed. | int (required) |
| useOnlyPrimaryLoad | Flag determines whether only the load of primary replica should be considered for scaling. If set to true, then trigger will only consider the load of primary replicas of stateful service. If set to false, trigger will consider load of all replicas. This parameter cannot be set to true for stateless service. | bool (required) |


### ServiceLoadMetric

| Name | Description | Value |
|-|-|-|
| defaultLoad | Used only for Stateless services. The default amount of load, as a number, that this service creates for this metric. | int |
| name | The name of the metric. If the service chooses to report load during runtime, the load metric name should match the name that is specified in Name exactly. Note that metric names are case sensitive. | string (required) |
| primaryDefaultLoad | Used only for Stateful services. The default amount of load, as a number, that this service creates for this metric when it is a Primary replica. | int |
| secondaryDefaultLoad | Used only for Stateful services. The default amount of load, as a number, that this service creates for this metric when it is a Secondary replica. | int |
| weight | The service load metric relative weight, compared to other metrics configured for this service, as a number. | 'High''Low''Medium''Zero' |


### ServicePlacementPolicy

| Name | Description | Value |
|-|-|-|
| type | Set the object type | InvalidDomainNonPartiallyPlaceServicePreferredPrimaryDomainRequiredDomainRequiredDomainDistribution(required) |


### ServicePlacementInvalidDomainPolicy

| Name | Description | Value |
|-|-|-|
| type | The type of placement policy for a service fabric service. Following are the possible values. | 'InvalidDomain' (required) |
| domainName | The name of the domain that should not be used for placement. | string (required) |


### ServicePlacementNonPartiallyPlaceServicePolicy

| Name | Description | Value |
|-|-|-|
| type | The type of placement policy for a service fabric service. Following are the possible values. | 'NonPartiallyPlaceService' (required) |


### ServicePlacementPreferPrimaryDomainPolicy

| Name | Description | Value |
|-|-|-|
| type | The type of placement policy for a service fabric service. Following are the possible values. | 'PreferredPrimaryDomain' (required) |
| domainName | The name of the domain that should used for placement as per this policy. | string (required) |


### ServicePlacementRequiredDomainPolicy

| Name | Description | Value |
|-|-|-|
| type | The type of placement policy for a service fabric service. Following are the possible values. | 'RequiredDomain' (required) |
| domainName | The name of the domain that should used for placement as per this policy. | string (required) |


### ServicePlacementRequireDomainDistributionPolicy

| Name | Description | Value |
|-|-|-|
| type | The type of placement policy for a service fabric service. Following are the possible values. | 'RequiredDomainDistribution' (required) |
| domainName | The name of the domain that should used for placement as per this policy. | string (required) |


### StatefulServiceProperties

| Name | Description | Value |
|-|-|-|
| serviceKind | The kind of service (Stateless or Stateful). | 'Stateful' (required) |
| hasPersistedState | A flag indicating whether this is a persistent service which stores states on the local disk. If it is then the value of this property is true, if not it is false. | bool |
| minReplicaSetSize | The minimum replica set size as a number. | int |
| quorumLossWaitDuration | The maximum duration for which a partition is allowed to be in a state of quorum loss, represented in ISO 8601 format "hh:mm:ss". | string |
| replicaRestartWaitDuration | The duration between when a replica goes down and when a new replica is created, represented in ISO 8601 format "hh:mm:ss". | string |
| servicePlacementTimeLimit | The duration for which replicas can stay InBuild before reporting that build is stuck, represented in ISO 8601 format "hh:mm:ss". | string |
| standByReplicaKeepDuration | The definition on how long StandBy replicas should be maintained before being removed, represented in ISO 8601 format "hh:mm:ss". | string |
| targetReplicaSetSize | The target replica set size as a number. | int |


### StatelessServiceProperties

| Name | Description | Value |
|-|-|-|
| serviceKind | The kind of service (Stateless or Stateful). | 'Stateless' (required) |
| instanceCount | The instance count. | int (required) |
| minInstanceCount | MinInstanceCount is the minimum number of instances that must be up to meet the EnsureAvailability safety check during operations like upgrade or deactivate node. The actual number that is used is max( MinInstanceCount, ceil( MinInstancePercentage/100.0 * InstanceCount) ). Note, if InstanceCount is set to -1, during MinInstanceCount computation -1 is first converted into the number of nodes on which the instances are allowed to be placed according to the placement constraints on the service. | int |
| minInstancePercentage | MinInstancePercentage is the minimum percentage of InstanceCount that must be up to meet the EnsureAvailability safety check during operations like upgrade or deactivate node. The actual number that is used is max( MinInstanceCount, ceil( MinInstancePercentage/100.0 * InstanceCount) ). Note, if InstanceCount is set to -1, during MinInstancePercentage computation, -1 is first converted into the number of nodes on which the instances are allowed to be placed according to the placement constraints on the service. | int |
## Microsoft.ServiceFabric/managedclusters/applicationTypes@2023-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceFabric/managedclusters/applicationTypes@2023-12-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
  body = jsonencode({
    properties = {}
  })
}

```

### managedclusters/applicationTypes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location depends on the parent resource. | string |
| tags | Azure resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedclusters |
| properties | The application type name properties | ApplicationTypeResourceProperties |
## Microsoft.ServiceFabric/managedclusters/applicationTypes/versions@2023-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceFabric/managedclusters/applicationTypes/versions@2023-12-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
  body = jsonencode({
    properties = {
      appPackageUrl = "string"
    }
  })
}

```

### managedclusters/applicationTypes/versions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location depends on the parent resource. | string |
| tags | Azure resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:applicationTypes |
| properties | The properties of the application type version resource. | ApplicationTypeVersionResourceProperties |


### ApplicationTypeVersionResourceProperties

| Name | Description | Value |
|-|-|-|
| appPackageUrl | The URL to the application package | string (required) |
## Microsoft.ServiceFabric/managedClusters/nodeTypes@2023-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceFabric/managedClusters/nodeTypes@2023-12-01-preview"
  name = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
  body = jsonencode({
    properties = {
      additionalDataDisks = [
        {
          diskLetter = "string"
          diskSizeGB = int
          diskType = "string"
          lun = int
        }
      ]
      additionalNetworkInterfaceConfigurations = [
        {
          dscpConfiguration = {
            id = "string"
          }
          enableAcceleratedNetworking = bool
          ipConfigurations = [
            {
              applicationGatewayBackendAddressPools = [
                {
                  id = "string"
                }
              ]
              loadBalancerBackendAddressPools = [
                {
                  id = "string"
                }
              ]
              loadBalancerInboundNatPools = [
                {
                  id = "string"
                }
              ]
              name = "string"
              privateIPAddressVersion = "string"
              publicIPAddressConfiguration = {
                ipTags = [
                  {
                    ipTagType = "string"
                    tag = "string"
                  }
                ]
                name = "string"
                publicIPAddressVersion = "string"
              }
              subnet = {
                id = "string"
              }
            }
          ]
          name = "string"
        }
      ]
      applicationPorts = {
        endPort = int
        startPort = int
      }
      capacities = {
        {customized property} = "string"
      }
      dataDiskLetter = "string"
      dataDiskSizeGB = int
      dataDiskType = "string"
      dscpConfigurationId = "string"
      enableAcceleratedNetworking = bool
      enableEncryptionAtHost = bool
      enableNodePublicIP = bool
      enableNodePublicIPv6 = bool
      enableOverProvisioning = bool
      ephemeralPorts = {
        endPort = int
        startPort = int
      }
      evictionPolicy = "string"
      frontendConfigurations = [
        {
          applicationGatewayBackendAddressPoolId = "string"
          ipAddressType = "string"
          loadBalancerBackendAddressPoolId = "string"
          loadBalancerInboundNatPoolId = "string"
        }
      ]
      hostGroupId = "string"
      isPrimary = bool
      isSpotVM = bool
      isStateless = bool
      multiplePlacementGroups = bool
      natGatewayId = "string"
      networkSecurityRules = [
        {
          access = "string"
          description = "string"
          destinationAddressPrefix = "string"
          destinationAddressPrefixes = [
            "string"
          ]
          destinationPortRange = "string"
          destinationPortRanges = [
            "string"
          ]
          direction = "string"
          name = "string"
          priority = int
          protocol = "string"
          sourceAddressPrefix = "string"
          sourceAddressPrefixes = [
            "string"
          ]
          sourcePortRange = "string"
          sourcePortRanges = [
            "string"
          ]
        }
      ]
      placementProperties = {
        {customized property} = "string"
      }
      secureBootEnabled = bool
      securityType = "TrustedLaunch"
      serviceArtifactReferenceId = "string"
      spotRestoreTimeout = "string"
      subnetId = "string"
      useDefaultPublicLoadBalancer = bool
      useEphemeralOSDisk = bool
      useTempDataDisk = bool
      vmExtensions = [
        {
          name = "string"
          properties = {
            autoUpgradeMinorVersion = bool
            enableAutomaticUpgrade = bool
            forceUpdateTag = "string"
            provisionAfterExtensions = [
              "string"
            ]
            publisher = "string"
            setupOrder = "BeforeSFRuntime"
            type = "string"
            typeHandlerVersion = "string"
          }
        }
      ]
      vmImageOffer = "string"
      vmImagePlan = {
        name = "string"
        product = "string"
        promotionCode = "string"
        publisher = "string"
      }
      vmImagePublisher = "string"
      vmImageResourceId = "string"
      vmImageSku = "string"
      vmImageVersion = "string"
      vmInstanceCount = int
      vmManagedIdentity = {
        userAssignedIdentities = [
          "string"
        ]
      }
      vmSecrets = [
        {
          sourceVault = {
            id = "string"
          }
          vaultCertificates = [
            {
              certificateStore = "string"
              certificateUrl = "string"
            }
          ]
        }
      ]
      vmSetupActions = [
        "string"
      ]
      vmSharedGalleryImageId = "string"
      vmSize = "string"
      zones = [
        "string"
      ]
    }
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

### managedClusters/nodeTypes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| tags | Azure resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The node type sku. | NodeTypeSku |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedClusters |
| properties | The node type properties | NodeTypeProperties |


### NodeTypeProperties

| Name | Description | Value |
|-|-|-|
| additionalDataDisks | Additional managed data disks. | VmssDataDisk[] |
| additionalNetworkInterfaceConfigurations | Specifies the settings for any additional secondary network interfaces to attach to the node type. | AdditionalNetworkInterfaceConfiguration[] |
| applicationPorts | The range of ports from which cluster assigned port to Service Fabric applications. | EndpointRangeDescription |
| capacities | The capacity tags applied to the nodes in the node type, the cluster resource manager uses these tags to understand how much resource a node has. | NodeTypePropertiesCapacities |
| dataDiskLetter | Managed data disk letter. It can not use the reserved letter C or D and it can not change after created. | string |
| dataDiskSizeGB | Disk size for the managed disk attached to the vms on the node type in GBs. | int |
| dataDiskType | Managed data disk type. Specifies the storage account type for the managed disk | 'Premium_LRS''StandardSSD_LRS''Standard_LRS' |
| dscpConfigurationId | Specifies the resource id of the DSCP configuration to apply to the node type network interface. | string |
| enableAcceleratedNetworking | Specifies whether the network interface is accelerated networking-enabled. | bool |
| enableEncryptionAtHost | Enable or disable the Host Encryption for the virtual machines on the node type. This will enable the encryption for all the disks including Resource/Temp disk at host itself. Default: The Encryption at host will be disabled unless this property is set to true for the resource. | bool |
| enableNodePublicIP | Specifies whether each node is allocated its own public IPv4 address. This is only supported on secondary node types with custom Load Balancers. | bool |
| enableNodePublicIPv6 | Specifies whether each node is allocated its own public IPv6 address. This is only supported on secondary node types with custom Load Balancers. | bool |
| enableOverProvisioning | Specifies whether the node type should be overprovisioned. It is only allowed for stateless node types. | bool |
| ephemeralPorts | The range of ephemeral ports that nodes in this node type should be configured with. | EndpointRangeDescription |
| evictionPolicy | Specifies the eviction policy for virtual machines in a SPOT node type. Default is Delete. | 'Deallocate''Delete' |
| frontendConfigurations | Indicates the node type uses its own frontend configurations instead of the default one for the cluster. This setting can only be specified for non-primary node types and can not be added or removed after the node type is created. | FrontendConfiguration[] |
| hostGroupId | Specifies the full host group resource Id. This property is used for deploying on azure dedicated hosts. | string |
| isPrimary | Indicates the Service Fabric system services for the cluster will run on this node type. This setting cannot be changed once the node type is created. | bool (required) |
| isSpotVM | Indicates whether the node type will be Spot Virtual Machines. Azure will allocate the VMs if there is capacity available and the VMs can be evicted at any time. | bool |
| isStateless | Indicates if the node type can only host Stateless workloads. | bool |
| multiplePlacementGroups | Indicates if scale set associated with the node type can be composed of multiple placement groups. | bool |
| natGatewayId | Specifies the resource id of a NAT Gateway to attach to the subnet of this node type. Node type must use custom load balancer. | string |
| networkSecurityRules | The Network Security Rules for this node type. This setting can only be specified for node types that are configured with frontend configurations. | NetworkSecurityRule[] |
| placementProperties | The placement tags applied to nodes in the node type, which can be used to indicate where certain services (workload) should run. | NodeTypePropertiesPlacementProperties |
| secureBootEnabled | Specifies whether secure boot should be enabled on the nodeType. Can only be used with TrustedLaunch SecurityType | bool |
| securityType | Specifies the security type of the nodeType. Only TrustedLaunch is currently supported | 'TrustedLaunch' |
| serviceArtifactReferenceId | Specifies the service artifact reference id used to set same image version for all virtual machines in the scale set when using 'latest' image version. | string |
| spotRestoreTimeout | Indicates the time duration after which the platform will not try to restore the VMSS SPOT instances specified as ISO 8601. | string |
| subnetId | Indicates the resource id of the subnet for the node type. | string |
| useDefaultPublicLoadBalancer | Specifies whether the use public load balancer. If not specified and the node type doesn't have its own frontend configuration, it will be attached to the default load balancer. If the node type uses its own Load balancer and useDefaultPublicLoadBalancer is true, then the frontend has to be an Internal Load Balancer. If the node type uses its own Load balancer and useDefaultPublicLoadBalancer is false or not set, then the custom load balancer must include a public load balancer to provide outbound connectivity. | bool |
| useEphemeralOSDisk | Indicates whether to use ephemeral os disk. The sku selected on the vmSize property needs to support this feature. | bool |
| useTempDataDisk | Specifies whether to use the temporary disk for the service fabric data root, in which case no managed data disk will be attached and the temporary disk will be used. It is only allowed for stateless node types. | bool |
| vmExtensions | Set of extensions that should be installed onto the virtual machines. | VmssExtension[] |
| vmImageOffer | The offer type of the Azure Virtual Machines Marketplace image. For example, UbuntuServer or WindowsServer. | string |
| vmImagePlan | Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use. In the Azure portal, find the marketplace image that you want to use and then click Want to deploy programmatically, Get Started ->. Enter any required information and then click Save. | VmImagePlan |
| vmImagePublisher | The publisher of the Azure Virtual Machines Marketplace image. For example, Canonical or MicrosoftWindowsServer. | string |
| vmImageResourceId | Indicates the resource id of the vm image. This parameter is used for custom vm image. | string |
| vmImageSku | The SKU of the Azure Virtual Machines Marketplace image. For example, 14.04.0-LTS or 2012-R2-Datacenter. | string |
| vmImageVersion | The version of the Azure Virtual Machines Marketplace image. A value of 'latest' can be specified to select the latest version of an image. If omitted, the default is 'latest'. | string |
| vmInstanceCount | The number of nodes in the node type.Values:-1 - Use when auto scale rules are configured or sku.capacity is defined0 - Not supported}0 - Use for manual scale. | int (required) |
| vmManagedIdentity | Identities to assign to the virtual machine scale set under the node type. | VmManagedIdentity |
| vmSecrets | The secrets to install in the virtual machines. | VaultSecretGroup[] |
| vmSetupActions | Specifies the actions to be performed on the vms before bootstrapping the service fabric runtime. | String array containing any of:'EnableContainers''EnableHyperV' |
| vmSharedGalleryImageId | Indicates the resource id of the vm shared galleries image. This parameter is used for custom vm image. | string |
| vmSize | The size of virtual machines in the pool. All virtual machines in a pool are the same size. For example, Standard_D3. | string |
| zones | Specifies the availability zones where the node type would span across. If the cluster is not spanning across availability zones, initiates az migration for the cluster. | string[] |


### VmssDataDisk

| Name | Description | Value |
|-|-|-|
| diskLetter | Managed data disk letter. It can not use the reserved letter C or D and it can not change after created. | string (required) |
| diskSizeGB | Disk size for each vm in the node type in GBs. | int (required) |
| diskType | Managed data disk type. Specifies the storage account type for the managed disk | 'Premium_LRS''StandardSSD_LRS''Standard_LRS' (required) |
| lun | Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM. Lun 0 is reserved for the service fabric data disk. | int (required) |


### AdditionalNetworkInterfaceConfiguration

| Name | Description | Value |
|-|-|-|
| dscpConfiguration | Specifies the DSCP configuration to apply to the network interface. | SubResource |
| enableAcceleratedNetworking | Specifies whether the network interface is accelerated networking-enabled. | bool |
| ipConfigurations | Specifies the IP configurations of the network interface. | IpConfiguration[] (required) |
| name | Name of the network interface. | string (required) |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Azure resource identifier. | string |


### IpConfiguration

| Name | Description | Value |
|-|-|-|
| applicationGatewayBackendAddressPools | Specifies an array of references to backend address pools of application gateways. A node type can reference backend address pools of multiple application gateways. Multiple node types cannot use the same application gateway. | SubResource[] |
| loadBalancerBackendAddressPools | Specifies an array of references to backend address pools of load balancers. A node type can reference backend address pools of one public and one internal load balancer. Multiple node types cannot use the same basic sku load balancer. | SubResource[] |
| loadBalancerInboundNatPools | Specifies an array of references to inbound Nat pools of the load balancers. A node type can reference inbound nat pools of one public and one internal load balancer. Multiple node types cannot use the same basic sku load balancer. | SubResource[] |
| name | Name of the network interface. | string (required) |
| privateIPAddressVersion | Specifies whether the IP configuration's private IP is IPv4 or IPv6. Default is IPv4. | 'IPv4''IPv6' |
| publicIPAddressConfiguration | The public IP address configuration of the network interface. | IpConfigurationPublicIPAddressConfiguration |
| subnet | Specifies the subnet of the network interface. | SubResource |


### IpConfigurationPublicIPAddressConfiguration

| Name | Description | Value |
|-|-|-|
| ipTags | Specifies the list of IP tags associated with the public IP address. | IpTag[] |
| name | Name of the network interface. | string (required) |
| publicIPAddressVersion | Specifies whether the IP configuration's public IP is IPv4 or IPv6. Default is IPv4. | 'IPv4''IPv6' |


### IpTag

| Name | Description | Value |
|-|-|-|
| ipTagType | IP tag type. Example: FirstPartyUsage. | string (required) |
| tag | IP tag associated with the public IP. Example: SQL, Storage etc. | string (required) |


### EndpointRangeDescription

| Name | Description | Value |
|-|-|-|
| endPort | End port of a range of ports | int (required) |
| startPort | Starting port of a range of ports | int (required) |


### NodeTypePropertiesCapacities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### FrontendConfiguration

| Name | Description | Value |
|-|-|-|
| applicationGatewayBackendAddressPoolId | The resource Id of application gateway backend address pool. The format of the resource Id is '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways/{applicationGatewayName}/backendAddressPools/{backendAddressPoolName}'. | string |
| ipAddressType | The IP address type of this frontend configuration. If omitted the default value is IPv4. | 'IPv4''IPv6' |
| loadBalancerBackendAddressPoolId | The resource Id of the Load Balancer backend address pool that the VM instances of the node type are associated with. The format of the resource Id is '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/backendAddressPools/{backendAddressPoolName}'. | string |
| loadBalancerInboundNatPoolId | The resource Id of the Load Balancer inbound NAT pool that the VM instances of the node type are associated with. The format of the resource Id is '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/inboundNatPools/{inboundNatPoolName}'. | string |


### NetworkSecurityRule

| Name | Description | Value |
|-|-|-|
| access | The network traffic is allowed or denied. | 'allow''deny' (required) |
| description | Network security rule description. | string |
| destinationAddressPrefix | The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. | string |
| destinationAddressPrefixes | The destination address prefixes. CIDR or destination IP ranges. | string[] |
| destinationPortRange | he destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. | string |
| destinationPortRanges | The destination port ranges. | string[] |
| direction | Network security rule direction. | 'inbound''outbound' (required) |
| name | Network security rule name. | string (required) |
| priority | The priority of the rule. The value can be in the range 1000 to 3000. Values outside this range are reserved for Service Fabric ManagerCluster Resource Provider. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule. | int (required) |
| protocol | Network protocol this rule applies to. | 'ah''esp''http''https''icmp''tcp''udp' (required) |
| sourceAddressPrefix | The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from. | string |
| sourceAddressPrefixes | The CIDR or source IP ranges. | string[] |
| sourcePortRange | The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. | string |
| sourcePortRanges | The source port ranges. | string[] |


### NodeTypePropertiesPlacementProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### VmssExtension

| Name | Description | Value |
|-|-|-|
| name | The name of the extension. | string (required) |
| properties | Describes the properties of a Virtual Machine Scale Set Extension. | VmssExtensionProperties(required) |


### VmssExtensionProperties

| Name | Description | Value |
|-|-|-|
| autoUpgradeMinorVersion | Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. | bool |
| enableAutomaticUpgrade | Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available. | bool |
| forceUpdateTag | If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed. | string |
| protectedSettings | The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. | For Bicep, you can use theany()function. |
| provisionAfterExtensions | Collection of extension names after which this extension needs to be provisioned. | string[] |
| publisher | The name of the extension handler publisher. | string (required) |
| settings | Json formatted public settings for the extension. | For Bicep, you can use theany()function. |
| setupOrder | Indicates the setup order for the extension. | String array containing any of:'BeforeSFRuntime' |
| type | Specifies the type of the extension; an example is "CustomScriptExtension". | string (required) |
| typeHandlerVersion | Specifies the version of the script handler. | string (required) |


### VmImagePlan

| Name | Description | Value |
|-|-|-|
| name | The plan ID. | string |
| product | Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element. | string |
| promotionCode | The promotion code. | string |
| publisher | The publisher ID. | string |


### VmManagedIdentity

| Name | Description | Value |
|-|-|-|
| userAssignedIdentities | The list of user identities associated with the virtual machine scale set under the node type. Each entry will be an ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | string[] |


### VaultSecretGroup

| Name | Description | Value |
|-|-|-|
| sourceVault | The relative URL of the Key Vault containing all of the certificates in VaultCertificates. | SubResource(required) |
| vaultCertificates | The list of key vault references in SourceVault which contain certificates. | VaultCertificate[] (required) |


### VaultCertificate

| Name | Description | Value |
|-|-|-|
| certificateStore | For Windows VMs, specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account.For Linux VMs, the certificate file is placed under the /var/lib/waagent directory, with the file name {UppercaseThumbprint}.crt for the X509 certificate file and {UppercaseThumbprint}.prv for private key. Both of these files are .pem formatted. | string (required) |
| certificateUrl | This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, seeAdd a key or secret to the key vault. In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8:{"data":"{Base64-encoded-certificate}","dataType":"pfx","password":"{pfx-file-password}"} | string (required) |


### NodeTypeSku

| Name | Description | Value |
|-|-|-|
| capacity | The number of nodes in the node type.If present in request it will override properties.vmInstanceCount. | int (required) |
| name | The sku name.Name is internally generated and is used in auto-scale scenarios.Property does not allow to be changed to other values than generated.To avoid deployment errors please omit the property. | string |
| tier | Specifies the tier of the node type.Possible Values:Standard | string |
