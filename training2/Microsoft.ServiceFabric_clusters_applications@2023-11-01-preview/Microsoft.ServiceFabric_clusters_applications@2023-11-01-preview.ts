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
readonly parent?: Symbolic name for resource of type:clusters;

/**
   * Describes the managed identities for an Azure resource.
   */
readonly identity?: ManagedIdentity;

/**
   * The type of managed identity for the resource.
   */
readonly type?: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
readonly userAssignedIdentities?: UserAssignedIdentityMap;

/**
   * The type of managed identity for the resource.
   */
readonly type?: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
readonly userAssignedIdentities?: UserAssignedIdentityMap;

/**
   * 
   */
readonly {customized property}?: UserAssignedIdentity;

/**
   * 
   */
readonly {customized property}?: UserAssignedIdentity;

/**
   * List of user assigned identities for the application, each mapped to a friendly name.
   */
readonly managedIdentities?: ApplicationUserAssignedIdentity[];

/**
   * The maximum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. By default, the value of this property is zero and it means that the services can be placed on any node.
   */
readonly maximumNodes?: number;

/**
   * List of application capacity metric description.
   */
readonly metrics?: ApplicationMetricDescription[];

/**
   * The minimum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. If this property is set to zero, no capacity will be reserved. The value of this property cannot be more than the value of the MaximumNodes property.
   */
readonly minimumNodes?: number;

/**
   * List of application parameters with overridden values from their default values specified in the application manifest.
   */
readonly parameters?: ApplicationParameterList;

/**
   * Remove the current application capacity settings.
   */
readonly removeApplicationCapacity?: bool;

/**
   * The application type name as defined in the application manifest.
   */
readonly typeName?: string;

/**
   * The version of the application type as defined in the application manifest.
   */
readonly typeVersion?: string;

/**
   * Describes the policy for a monitored application upgrade.
   */
readonly upgradePolicy?: ApplicationUpgradePolicy;

/**
   * List of user assigned identities for the application, each mapped to a friendly name.
   */
readonly managedIdentities?: ApplicationUserAssignedIdentity[];

/**
   * List of application parameters with overridden values from their default values specified in the application manifest.
   */
readonly parameters?: ApplicationParameterList;

/**
   * Describes the policy for a monitored application upgrade.
   */
readonly upgradePolicy?: ApplicationUpgradePolicy;

/**
   * The version of the application type as defined in the application manifest.This name must be the full Arm Resource ID for the referenced application type version.
   */
readonly version?: string;

/**
   * The principal id of user assigned identity.
   */
readonly principalId: string;

/**
   * The principal id of user assigned identity.
   */
readonly principalId: string;

/**
   * The maximum node capacity for Service Fabric application.This is the maximum Load for an instance of this application on a single node. Even if the capacity of node is greater than this value, Service Fabric will limit the total load of services within the application on each node to this value.If set to zero, capacity for this metric is unlimited on each node.When creating a new application with application capacity defined, the product of MaximumNodes and this value must always be smaller than or equal to TotalApplicationCapacity.When updating existing application with application capacity, the product of MaximumNodes and this value must always be smaller than or equal to TotalApplicationCapacity.
   */
readonly maximumCapacity?: number;

/**
   * The node reservation capacity for Service Fabric application.This is the amount of load which is reserved on nodes which have instances of this application.If MinimumNodes is specified, then the product of these values will be the capacity reserved in the cluster for the application.If set to zero, no capacity is reserved for this metric.When setting application capacity or when updating application capacity; this value must be smaller than or equal to MaximumCapacity for each metric.
   */
readonly reservationCapacity?: number;

/**
   * The total metric capacity for Service Fabric application.This is the total metric capacity for this application in the cluster. Service Fabric will try to limit the sum of loads of services within the application to this value.When creating a new application with application capacity defined, the product of MaximumNodes and MaximumCapacity must always be smaller than or equal to this value.
   */
readonly totalApplicationCapacity?: number;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * Defines a health policy used to evaluate the health of an application or one of its children entities.
   */
readonly applicationHealthPolicy?: ArmApplicationHealthPolicy;

/**
   * If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data).
   */
readonly forceRestart?: bool;

/**
   * Determines whether the application should be recreated on update. If value=true, the rest of the upgrade policy parameters are not allowed and it will result in availability loss.
   */
readonly recreateApplication?: bool;

/**
   * The policy used for monitoring the application upgrade
   */
readonly rollingUpgradeMonitoringPolicy?: ArmRollingUpgradeMonitoringPolicy;

/**
   * The mode used to monitor health during a rolling upgrade. The values are UnmonitoredAuto, UnmonitoredManual, and Monitored.
   */
readonly upgradeMode?: 'Invalid''Monitored''UnmonitoredAuto''UnmonitoredManual';

/**
   * The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. Valid values are between 0 and 42949672925 inclusive. (unsigned 32-bit integer).
   */
readonly upgradeReplicaSetCheckTimeout?: string;

/**
   * Defines a health policy used to evaluate the health of an application or one of its children entities.
   */
readonly applicationHealthPolicy?: ApplicationHealthPolicy;

/**
   * If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data).
   */
readonly forceRestart?: bool;

/**
   * Duration in seconds, to wait before a stateless instance is closed, to allow the active requests to drain gracefully. This would be effective when the instance is closing during the application/cluster upgrade, only for those instances which have a non-zero delay duration configured in the service description.
   */
readonly instanceCloseDelayDuration?: number;

/**
   * Determines whether the application should be recreated on update. If value=true, the rest of the upgrade policy parameters are not allowed.
   */
readonly recreateApplication?: bool;

/**
   * The policy used for monitoring the application upgrade
   */
readonly rollingUpgradeMonitoringPolicy?: RollingUpgradeMonitoringPolicy;

/**
   * The mode used to monitor health during a rolling upgrade. The values are Monitored, and UnmonitoredAuto.
   */
readonly upgradeMode?: 'Monitored''UnmonitoredAuto';

/**
   * The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. Valid values are between 0 and 42949672925 inclusive. (unsigned 32-bit integer).
   */
readonly upgradeReplicaSetCheckTimeout?: number;

/**
   * Indicates whether warnings are treated with the same severity as errors.
   */
readonly considerWarningAsError?: bool;

/**
   * The health policy used by default to evaluate the health of a service type.
   */
readonly defaultServiceTypeHealthPolicy?: ArmServiceTypeHealthPolicy;

/**
   * The maximum allowed percentage of unhealthy deployed applications. Allowed values are Byte values from zero to 100.The percentage represents the maximum tolerated percentage of deployed applications that can be unhealthy before the application is considered in error.This is calculated by dividing the number of unhealthy deployed applications over the number of nodes where the application is currently deployed on in the cluster.The computation rounds up to tolerate one failure on small numbers of nodes. Default percentage is zero.
   */
readonly maxPercentUnhealthyDeployedApplications?: number;

/**
   * The map with service type health policy per service type name. The map is empty by default.
   */
readonly serviceTypeHealthPolicyMap?: ArmServiceTypeHealthPolicyMap;

/**
   * The maximum percentage of partitions per service allowed to be unhealthy before your application is considered in error.
   */
readonly maxPercentUnhealthyPartitionsPerService?: number;

/**
   * The maximum percentage of replicas per partition allowed to be unhealthy before your application is considered in error.
   */
readonly maxPercentUnhealthyReplicasPerPartition?: number;

/**
   * The maximum percentage of services allowed to be unhealthy before your application is considered in error.
   */
readonly maxPercentUnhealthyServices?: number;

/**
   * 
   */
readonly {customized property}?: ArmServiceTypeHealthPolicy;

/**
   * The activation Mode of the service package
   */
readonly failureAction?: 'Manual''Rollback';

/**
   * The amount of time to retry health evaluation when the application or cluster is unhealthy before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.
   */
readonly healthCheckRetryTimeout?: string;

/**
   * The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.
   */
readonly healthCheckStableDuration?: string;

/**
   * The amount of time to wait after completing an upgrade domain before applying health policies. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.
   */
readonly healthCheckWaitDuration?: string;

/**
   * The amount of time each upgrade domain has to complete before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.
   */
readonly upgradeDomainTimeout?: string;

/**
   * The amount of time the overall upgrade has to complete before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds.
   */
readonly upgradeTimeout?: string;

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
   * The compensating action to perform when a Monitored upgrade encounters monitoring policy or health policy violations. Invalid indicates the failure action is invalid. Rollback specifies that the upgrade will start rolling back automatically. Manual indicates that the upgrade will switch to UnmonitoredManual upgrade mode.
   */
readonly failureAction: 'Manual''Rollback';

/**
   * The amount of time to retry health evaluation when the application or cluster is unhealthy before FailureAction is executed. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
   */
readonly healthCheckRetryTimeout: string;

/**
   * The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
   */
readonly healthCheckStableDuration: string;

/**
   * The amount of time to wait after completing an upgrade domain before applying health policies. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
   */
readonly healthCheckWaitDuration: string;

/**
   * The amount of time each upgrade domain has to complete before FailureAction is executed. Cannot be larger than 12 hours. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
   */
readonly upgradeDomainTimeout: string;

/**
   * The amount of time the overall upgrade has to complete before FailureAction is executed. Cannot be larger than 12 hours. It is interpreted as a string representing an ISO 8601 duration with following format "hh:mm:ss.fff".
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
