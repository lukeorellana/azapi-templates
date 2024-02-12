import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * The list of add-on features to enable in the cluster.
   */
readonly addOnFeatures?: String array containing any of:'BackupRestoreService''DnsService''RepairManager''ResourceMonitorService';

/**
   * The policy used to clean up unused versions.
   */
readonly applicationTypeVersionsCleanupPolicy?: ApplicationTypeVersionsCleanupPolicy;

/**
   * The AAD authentication settings of the cluster.
   */
readonly azureActiveDirectory?: AzureActiveDirectory;

/**
   * The certificate to use for securing the cluster. The certificate provided will be used for node to node security within the cluster, SSL certificate for cluster management endpoint and default admin client.
   */
readonly certificate?: CertificateDescription;

/**
   * Describes a list of server certificates referenced by common name that are used to secure the cluster.
   */
readonly certificateCommonNames?: ServerCertificateCommonNames;

/**
   * The list of client certificates referenced by common name that are allowed to manage the cluster.
   */
readonly clientCertificateCommonNames?: ClientCertificateCommonName[];

/**
   * The list of client certificates referenced by thumbprint that are allowed to manage the cluster.
   */
readonly clientCertificateThumbprints?: ClientCertificateThumbprnumber[];

/**
   * The Service Fabric runtime version of the cluster. This property can only by set the user whenupgradeModeis set to 'Manual'. To get list of available Service Fabric versions for new clusters useClusterVersion API. To get the list of available version for existing clusters useavailableClusterVersions.
   */
readonly clusterCodeVersion?: string;

/**
   * The storage account information for storing Service Fabric diagnostic logs.
   */
readonly diagnosticsStorageAccountConfig?: DiagnosticsStorageAccountConfig;

/**
   * If true, token-based authentication is not allowed on the HttpGatewayEndpoint. This is required to support TLS versions 1.3 and above. If token-based authentication is used, HttpGatewayTokenAuthEndpointPort must be defined.
   */
readonly enableHttpGatewayExclusiveAuthMode?: bool;

/**
   * Indicates if the event store service is enabled.
   */
readonly eventStoreServiceEnabled?: bool;

/**
   * The list of custom fabric settings to configure the cluster.
   */
readonly fabricSettings?: SettingsSectionDescription[];

/**
   * Indicates if infrastructure service manager is enabled.
   */
readonly infrastructureServiceManager?: bool;

/**
   * The http management endpoint of the cluster.
   */
readonly managementEndpoint: string;

/**
   * The list of node types in the cluster.
   */
readonly nodeTypes: NodeTypeDescription[];

/**
   * Indicates a list of notification channels for cluster events.
   */
readonly notifications?: Notification[];

/**
   * The reliability level sets the replica set size of system services. Learn aboutReliabilityLevel.- None - Run the System services with a target replica set count of 1. This should only be used for test clusters.- Bronze - Run the System services with a target replica set count of 3. This should only be used for test clusters.- Silver - Run the System services with a target replica set count of 5.- Gold - Run the System services with a target replica set count of 7.- Platinum - Run the System services with a target replica set count of 9.
   */
readonly reliabilityLevel?: 'Bronze''Gold''None''Platinum''Silver';

/**
   * The server certificate used by reverse proxy.
   */
readonly reverseProxyCertificate?: CertificateDescription;

/**
   * Describes a list of server certificates referenced by common name that are used to secure the cluster.
   */
readonly reverseProxyCertificateCommonNames?: ServerCertificateCommonNames;

/**
   * This property controls the logical grouping of VMs in upgrade domains (UDs). This property can't be modified if a node type with multiple Availability Zones is already present in the cluster.
   */
readonly sfZonalUpgradeMode?: 'Hierarchical''Parallel';

/**
   * The policy to use when upgrading the cluster.
   */
readonly upgradeDescription?: ClusterUpgradePolicy;

/**
   * The upgrade mode of the cluster when new Service Fabric runtime version is available.
   */
readonly upgradeMode?: 'Automatic''Manual';

/**
   * Indicates the end date and time to pause automatic runtime version upgrades on the cluster for an specific period of time on the cluster (UTC).
   */
readonly upgradePauseEndTimestampUtc?: string;

/**
   * Indicates the start date and time to pause automatic runtime version upgrades on the cluster for an specific period of time on the cluster (UTC).
   */
readonly upgradePauseStartTimestampUtc?: string;

/**
   * Indicates when new cluster runtime version upgrades will be applied after they are released. By default is Wave0. Only applies whenupgradeModeis set to 'Automatic'.
   */
readonly upgradeWave?: 'Wave0''Wave1''Wave2';

/**
   * The VM image VMSS has been configured with. Generic names such as Windows or Linux can be used.
   */
readonly vmImage?: string;

/**
   * This property defines the upgrade mode for the virtual machine scale set, it is mandatory if a node type with multiple Availability Zones is added.
   */
readonly vmssZonalUpgradeMode?: 'Hierarchical''Parallel';

/**
   * Boolean to pause automatic runtime version upgrades to the cluster.
   */
readonly waveUpgradePaused?: bool;

/**
   * Number of unused versions per application type to keep.
   */
readonly maxUnusedVersionsToKeep: number;

/**
   * Number of unused versions per application type to keep.
   */
readonly maxUnusedVersionsToKeep: number;

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
   * Thumbprint of the primary certificate.
   */
readonly thumbprint: string;

/**
   * Thumbprint of the secondary certificate.
   */
readonly thumbprintSecondary?: string;

/**
   * The local certificate store location.
   */
readonly x509StoreName?: 'AddressBook''AuthRoot''CertificateAuthority''Disallowed''My''Root''TrustedPeople''TrustedPublisher';

/**
   * The list of server certificates referenced by common name that are used to secure the cluster.
   */
readonly commonNames?: ServerCertificateCommonName[];

/**
   * The local certificate store location.
   */
readonly x509StoreName?: 'AddressBook''AuthRoot''CertificateAuthority''Disallowed''My''Root''TrustedPeople''TrustedPublisher';

/**
   * The common name of the server certificate.
   */
readonly certificateCommonName: string;

/**
   * The issuer thumbprint of the server certificate.
   */
readonly certificateIssuerThumbprint: string;

/**
   * The common name of the client certificate.
   */
readonly certificateCommonName: string;

/**
   * The issuer thumbprint of the client certificate.
   */
readonly certificateIssuerThumbprint: string;

/**
   * Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.
   */
readonly isAdmin: bool;

/**
   * The thumbprint of the client certificate.
   */
readonly certificateThumbprint: string;

/**
   * Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.
   */
readonly isAdmin: bool;

/**
   * The blob endpoint of the azure storage account.
   */
readonly blobEndpoint: string;

/**
   * The protected diagnostics storage key name.
   */
readonly protectedAccountKeyName: string;

/**
   * The secondary protected diagnostics storage key name. If one of the storage account keys is rotated the cluster will fallback to using the other.
   */
readonly protectedAccountKeyName2?: string;

/**
   * The queue endpoint of the azure storage account.
   */
readonly queueEndpoint: string;

/**
   * The Azure storage account name.
   */
readonly storageAccountName: string;

/**
   * The table endpoint of the azure storage account.
   */
readonly tableEndpoint: string;

/**
   * The collection of parameters in the section.
   */
readonly parameters: SettingsParameterDescription[];

/**
   * The collection of parameters in the section.
   */
readonly parameters: SettingsParameterDescription[];

/**
   * The parameter value of fabric setting.
   */
readonly value: string;

/**
   * The parameter value of fabric setting.
   */
readonly value: string;

/**
   * The range of ports from which cluster assigned port to Service Fabric applications.
   */
readonly applicationPorts?: EndponumberRangeDescription;

/**
   * The capacity tags applied to the nodes in the node type, the cluster resource manager uses these tags to understand how much resource a node has.
   */
readonly capacities?: NodeTypeDescriptionCapacities;

/**
   * The TCP cluster management endpoint port.
   */
readonly clientConnectionEndpointPort: number;

/**
   * The durability level of the node type. Learn aboutDurabilityLevel.- Bronze - No privileges. This is the default.- Silver - The infrastructure jobs can be paused for a duration of 10 minutes per UD.- Gold - The infrastructure jobs can be paused for a duration of 2 hours per UD. Gold durability can be enabled only on full node VM skus like D15_V2, G5 etc.
   */
readonly durabilityLevel?: 'Bronze''Gold''Silver';

/**
   * The range of ephemeral ports that nodes in this node type should be configured with.
   */
readonly ephemeralPorts?: EndponumberRangeDescription;

/**
   * The HTTP cluster management endpoint port.
   */
readonly httpGatewayEndpointPort: number;

/**
   * The port used for token-auth based HTTPS connections to the cluster. Cannot be set to the same port as HttpGatewayEndpoint.
   */
readonly httpGatewayTokenAuthEndpointPort?: number;

/**
   * The node type on which system services will run. Only one node type should be marked as primary. Primary node type cannot be deleted or changed for existing clusters.
   */
readonly isPrimary: bool;

/**
   * Indicates if the node type can only host Stateless workloads.
   */
readonly isStateless?: bool;

/**
   * Indicates if the node type is enabled to support multiple zones.
   */
readonly multipleAvailabilityZones?: bool;

/**
   * The placement tags applied to nodes in the node type, which can be used to indicate where certain services (workload) should run.
   */
readonly placementProperties?: NodeTypeDescriptionPlacementProperties;

/**
   * The endpoint used by reverse proxy.
   */
readonly reverseProxyEndpointPort?: number;

/**
   * VMInstanceCount should be 1 to n, where n indicates the number of VM instances corresponding to this nodeType. VMInstanceCount = 0 can be done only in these scenarios: NodeType is a secondary nodeType. Durability = Bronze or Durability >= Bronze and InfrastructureServiceManager = true. If VMInstanceCount = 0, implies the VMs for this nodeType will not be used for the initial cluster size computation.
   */
readonly vmInstanceCount: number;

/**
   * End port of a range of ports
   */
readonly endPort: number;

/**
   * Starting port of a range of ports
   */
readonly startPort: number;

/**
   * End port of a range of ports
   */
readonly endPort: number;

/**
   * Starting port of a range of ports
   */
readonly startPort: number;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * Indicates if the notification is enabled.
   */
readonly isEnabled: bool;

/**
   * The category of notification.
   */
readonly notificationCategory: 'WaveProgress';

/**
   * The level of notification.
   */
readonly notificationLevel: 'All''Critical';

/**
   * List of targets that subscribe to the notification.
   */
readonly notificationTargets: NotificationTarget[];

/**
   * The notification channel indicates the type of receivers subscribed to the notification, either user or subscription.
   */
readonly notificationChannel: 'EmailSubscription''EmailUser';

/**
   * List of targets that subscribe to the notification.
   */
readonly receivers: string[];

/**
   * The cluster delta health policy used when upgrading the cluster.
   */
readonly deltaHealthPolicy?: ClusterUpgradeDeltaHealthPolicy;

/**
   * If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data).
   */
readonly forceRestart?: bool;

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
   * The cluster health policy used when upgrading the cluster.
   */
readonly healthPolicy: ClusterHealthPolicy;

/**
   * The amount of time each upgrade domain has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
   */
readonly upgradeDomainTimeout: string;

/**
   * The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
   */
readonly upgradeReplicaSetCheckTimeout: string;

/**
   * The amount of time the overall upgrade has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
   */
readonly upgradeTimeout: string;

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
   * Defines the application delta health policy map used to evaluate the health of an application or one of its child entities when upgrading the cluster.
   */
readonly applicationDeltaHealthPolicies?: ApplicationDeltaHealthPolicyMap;

/**
   * The maximum allowed percentage of applications health degradation allowed during cluster upgrades.The delta is measured between the state of the applications at the beginning of upgrade and the state of the applications at the time of the health evaluation.The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits. System services are not included in this.
   */
readonly maxPercentDeltaUnhealthyApplications: number;

/**
   * The maximum allowed percentage of nodes health degradation allowed during cluster upgrades.The delta is measured between the state of the nodes at the beginning of upgrade and the state of the nodes at the time of the health evaluation.The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits.
   */
readonly maxPercentDeltaUnhealthyNodes: number;

/**
   * The maximum allowed percentage of upgrade domain nodes health degradation allowed during cluster upgrades.The delta is measured between the state of the upgrade domain nodes at the beginning of upgrade and the state of the upgrade domain nodes at the time of the health evaluation.The check is performed after every upgrade domain upgrade completion for all completed upgrade domains to make sure the state of the upgrade domains is within tolerated limits.
   */
readonly maxPercentUpgradeDomainDeltaUnhealthyNodes: number;

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
   * 
   */
readonly {customized property}?: ApplicationDeltaHealthPolicy;

/**
   * The delta health policy used by default to evaluate the health of a service type when upgrading the cluster.
   */
readonly defaultServiceTypeDeltaHealthPolicy?: ServiceTypeDeltaHealthPolicy;

/**
   * The map with service type delta health policy per service type name. The map is empty by default.
   */
readonly serviceTypeDeltaHealthPolicies?: ServiceTypeDeltaHealthPolicyMap;

/**
   * The maximum allowed percentage of services health degradation allowed during cluster upgrades.The delta is measured between the state of the services at the beginning of upgrade and the state of the services at the time of the health evaluation.The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits.
   */
readonly maxPercentDeltaUnhealthyServices?: number;

/**
   * 
   */
readonly {customized property}?: ServiceTypeDeltaHealthPolicy;

/**
   * Defines the application health policy map used to evaluate the health of an application or one of its children entities.
   */
readonly applicationHealthPolicies?: ApplicationHealthPolicyMap;

/**
   * The maximum allowed percentage of unhealthy applications before reporting an error. For example, to allow 10% of applications to be unhealthy, this value would be 10.The percentage represents the maximum tolerated percentage of applications that can be unhealthy before the cluster is considered in error.If the percentage is respected but there is at least one unhealthy application, the health is evaluated as Warning.This is calculated by dividing the number of unhealthy applications over the total number of application instances in the cluster, excluding applications of application types that are included in the ApplicationTypeHealthPolicyMap.The computation rounds up to tolerate one failure on small numbers of applications. Default percentage is zero.
   */
readonly maxPercentUnhealthyApplications?: number;

/**
   * The maximum allowed percentage of unhealthy nodes before reporting an error. For example, to allow 10% of nodes to be unhealthy, this value would be 10.The percentage represents the maximum tolerated percentage of nodes that can be unhealthy before the cluster is considered in error.If the percentage is respected but there is at least one unhealthy node, the health is evaluated as Warning.The percentage is calculated by dividing the number of unhealthy nodes over the total number of nodes in the cluster.The computation rounds up to tolerate one failure on small numbers of nodes. Default percentage is zero.In large clusters, some nodes will always be down or out for repairs, so this percentage should be configured to tolerate that.
   */
readonly maxPercentUnhealthyNodes?: number;

/**
   * The maximum allowed percentage of unhealthy applications before reporting an error. For example, to allow 10% of applications to be unhealthy, this value would be 10.The percentage represents the maximum tolerated percentage of applications that can be unhealthy before the cluster is considered in error.If the percentage is respected but there is at least one unhealthy application, the health is evaluated as Warning.This is calculated by dividing the number of unhealthy applications over the total number of application instances in the cluster, excluding applications of application types that are included in the ApplicationTypeHealthPolicyMap.The computation rounds up to tolerate one failure on small numbers of applications. Default percentage is zero.
   */
readonly maxPercentUnhealthyApplications: number;

/**
   * The maximum allowed percentage of unhealthy nodes before reporting an error. For example, to allow 10% of nodes to be unhealthy, this value would be 10.The percentage represents the maximum tolerated percentage of nodes that can be unhealthy before the cluster is considered in error.If the percentage is respected but there is at least one unhealthy node, the health is evaluated as Warning.The percentage is calculated by dividing the number of unhealthy nodes over the total number of nodes in the cluster.The computation rounds up to tolerate one failure on small numbers of nodes. Default percentage is zero.In large clusters, some nodes will always be down or out for repairs, so this percentage should be configured to tolerate that.
   */
readonly maxPercentUnhealthyNodes: number;

/**
   * 
   */
readonly {customized property}?: ApplicationHealthPolicy;

/**
   * The health policy used by default to evaluate the health of a service type.
   */
readonly defaultServiceTypeHealthPolicy?: ServiceTypeHealthPolicy;

/**
   * The map with service type health policy per service type name. The map is empty by default.
   */
readonly serviceTypeHealthPolicies?: ServiceTypeHealthPolicyMap;

/**
   * Indicates whether warnings are treated with the same severity as errors.
   */
readonly considerWarningAsError: bool;

/**
   * The health policy used by default to evaluate the health of a service type.
   */
readonly defaultServiceTypeHealthPolicy?: ServiceTypeHealthPolicy;

/**
   * The maximum allowed percentage of unhealthy deployed applications. Allowed values are Byte values from zero to 100.The percentage represents the maximum tolerated percentage of deployed applications that can be unhealthy before the application is considered in error.This is calculated by dividing the number of unhealthy deployed applications over the number of nodes where the application is currently deployed on in the cluster.The computation rounds up to tolerate one failure on small numbers of nodes. Default percentage is zero.
   */
readonly maxPercentUnhealthyDeployedApplications: number;

/**
   * The map with service type health policy per service type name. The map is empty by default.
   */
readonly serviceTypeHealthPolicyMap?: ServiceTypeHealthPolicyMap;

/**
   * The maximum percentage of services allowed to be unhealthy before your application is considered in error.
   */
readonly maxPercentUnhealthyServices?: number;

/**
   * The maximum allowed percentage of unhealthy partitions per service.The percentage represents the maximum tolerated percentage of partitions that can be unhealthy before the service is considered in error.If the percentage is respected but there is at least one unhealthy partition, the health is evaluated as Warning.The percentage is calculated by dividing the number of unhealthy partitions over the total number of partitions in the service.The computation rounds up to tolerate one failure on small numbers of partitions.
   */
readonly maxPercentUnhealthyPartitionsPerService: number;

/**
   * The maximum allowed percentage of unhealthy replicas per partition.The percentage represents the maximum tolerated percentage of replicas that can be unhealthy before the partition is considered in error.If the percentage is respected but there is at least one unhealthy replica, the health is evaluated as Warning.The percentage is calculated by dividing the number of unhealthy replicas over the total number of replicas in the partition.The computation rounds up to tolerate one failure on small numbers of replicas.
   */
readonly maxPercentUnhealthyReplicasPerPartition: number;

/**
   * The maximum allowed percentage of unhealthy services.The percentage represents the maximum tolerated percentage of services that can be unhealthy before the application is considered in error.If the percentage is respected but there is at least one unhealthy service, the health is evaluated as Warning.This is calculated by dividing the number of unhealthy services of the specific service type over the total number of services of the specific service type.The computation rounds up to tolerate one failure on small numbers of services.
   */
readonly maxPercentUnhealthyServices: number;

/**
   * 
   */
readonly {customized property}?: ServiceTypeHealthPolicy;

/**
   * 
   */
readonly {customized property}?: ServiceTypeHealthPolicy;

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
