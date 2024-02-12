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
readonly parent?: Symbolic name for resource of type:applications;

/**
   * A list that describes the correlation of the service with other services.
   */
readonly correlationScheme?: ServiceCorrelationDescription[];

/**
   * Specifies the move cost for the service.
   */
readonly defaultMoveCost?: 'High''Low''Medium''Zero';

/**
   * Describes how the service is partitioned.
   */
readonly partitionDescription?: PartitionSchemeDescription;

/**
   * The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
   */
readonly placementConstraints?: string;

/**
   * Dns name used for the service. If this is specified, then the DNS name can be used to return the IP addresses of service endpoints for application layer protocols (e.g., HTTP).When updating serviceDnsName, old name may be temporarily resolvable. However, rely on new name.When removing serviceDnsName, removed name may temporarily be resolvable. Do not rely on the name being unresolvable.
   */
readonly serviceDnsName?: string;

/**
   * The service load metrics is given as an array of ServiceLoadMetricDescription objects.
   */
readonly serviceLoadMetrics?: ServiceLoadMetricDescription[];

/**
   * The activation Mode of the service package
   */
readonly servicePackageActivationMode?: 'ExclusiveProcess''SharedProcess';

/**
   * A list that describes the correlation of the service with other services.
   */
readonly servicePlacementPolicies?: object;

/**
   * The name of the service type
   */
readonly serviceTypeName?: string;

/**
   * A list that describes the correlation of the service with other services.
   */
readonly correlationScheme?: ServiceCorrelation[];

/**
   * Specifies the move cost for the service.
   */
readonly defaultMoveCost?: 'High''Low''Medium''Zero';

/**
   * Describes how the service is partitioned.
   */
readonly partitionDescription: Partition;

/**
   * The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
   */
readonly placementConstraints?: string;

/**
   * Scaling policies for this service.
   */
readonly scalingPolicies?: ScalingPolicy[];

/**
   * Dns name used for the service. If this is specified, then the DNS name can be used to return the IP addresses of service endpoints for application layer protocols (e.g., HTTP).When updating serviceDnsName, old name may be temporarily resolvable. However, rely on new name.When removing serviceDnsName, removed name may temporarily be resolvable. Do not rely on the name being unresolvable.
   */
readonly serviceDnsName?: string;

/**
   * The service load metrics is given as an array of ServiceLoadMetric objects.
   */
readonly serviceLoadMetrics?: ServiceLoadMetric[];

/**
   * The activation Mode of the service package
   */
readonly servicePackageActivationMode?: 'ExclusiveProcess''SharedProcess';

/**
   * A list that describes the correlation of the service with other services.
   */
readonly servicePlacementPolicies?: ServicePlacementPolicy[];

/**
   * The name of the service type
   */
readonly serviceTypeName: string;

/**
   * Set the object type
   */
readonly serviceKind: StatefulStateless;

/**
   * The ServiceCorrelationScheme which describes the relationship between this service and the service specified via ServiceName.
   */
readonly scheme: 'Affinity''AlignedAffinity''Invalid''NonAlignedAffinity';

/**
   * The name of the service that the correlation relationship is established with.
   */
readonly serviceName: string;

/**
   * Set the object type
   */
readonly partitionScheme: NamedSingletonUniformInt64Range;

/**
   * Specifies how the service is partitioned.
   */
readonly partitionScheme: 'Named';

/**
   * The number of partitions.
   */
readonly count: number;

/**
   * Array of size specified by the âcountâ parameter, for the names of the partitions.
   */
readonly names: string[];

/**
   * Specifies how the service is partitioned.
   */
readonly partitionScheme: 'Singleton';

/**
   * Specifies how the service is partitioned.
   */
readonly partitionScheme: 'UniformInt64Range';

/**
   * The number of partitions.
   */
readonly count: number;

/**
   * String indicating the upper bound of the partition key range thatshould be split between the partition âcountâ
   */
readonly highKey: string;

/**
   * String indicating the lower bound of the partition key range thatshould be split between the partition âcountâ
   */
readonly lowKey: string;

/**
   * Used only for Stateless services. The default amount of load, as a number, that this service creates for this metric.
   */
readonly defaultLoad?: number;

/**
   * Used only for Stateful services. The default amount of load, as a number, that this service creates for this metric when it is a Primary replica.
   */
readonly primaryDefaultLoad?: number;

/**
   * Used only for Stateful services. The default amount of load, as a number, that this service creates for this metric when it is a Secondary replica.
   */
readonly secondaryDefaultLoad?: number;

/**
   * The service load metric relative weight, compared to other metrics configured for this service, as a number.
   */
readonly weight?: 'High''Low''Medium''Zero';

/**
   * The ServiceCorrelationScheme which describes the relationship between this service and the service specified via ServiceName.
   */
readonly scheme: 'AlignedAffinity''NonAlignedAffinity';

/**
   * The Arm Resource ID of the service that the correlation relationship is established with.
   */
readonly serviceName: string;

/**
   * Set the object type
   */
readonly partitionScheme: NamedSingletonUniformInt64Range;

/**
   * Specifies how the service is partitioned.
   */
readonly partitionScheme: 'Named';

/**
   * Array for the names of the partitions.
   */
readonly names: string[];

/**
   * Specifies how the service is partitioned.
   */
readonly partitionScheme: 'Singleton';

/**
   * Specifies how the service is partitioned.
   */
readonly partitionScheme: 'UniformInt64Range';

/**
   * The number of partitions.
   */
readonly count: number;

/**
   * The upper bound of the partition key range thatshould be split between the partition âCountâ
   */
readonly highKey: number;

/**
   * The lower bound of the partition key range thatshould be split between the partition âCountâ
   */
readonly lowKey: number;

/**
   * Specifies the mechanism associated with this scaling policy
   */
readonly scalingMechanism: ScalingMechanism;

/**
   * Specifies the trigger associated with this scaling policy.
   */
readonly scalingTrigger: ScalingTrigger;

/**
   * Set the object type
   */
readonly kind: AddRemoveIncrementalNamedPartitionScalePartitionInstanceCount;

/**
   * Specifies the mechanism associated with this scaling policy.
   */
readonly kind: 'AddRemoveIncrementalNamedPartition';

/**
   * Maximum number of named partitions of the service.
   */
readonly maxPartitionCount: number;

/**
   * Minimum number of named partitions of the service.
   */
readonly minPartitionCount: number;

/**
   * The number of instances to add or remove during a scaling operation.
   */
readonly scaleIncrement: number;

/**
   * Specifies the mechanism associated with this scaling policy.
   */
readonly kind: 'ScalePartitionInstanceCount';

/**
   * Maximum number of instances of the partition.
   */
readonly maxInstanceCount: number;

/**
   * Minimum number of instances of the partition.
   */
readonly minInstanceCount: number;

/**
   * The number of instances to add or remove during a scaling operation.
   */
readonly scaleIncrement: number;

/**
   * Set the object type
   */
readonly kind: AveragePartitionLoadTriggerAverageServiceLoadTrigger;

/**
   * Specifies the trigger associated with this scaling policy.
   */
readonly kind: 'AveragePartitionLoadTrigger';

/**
   * The lower limit of the load below which a scale in operation should be performed.
   */
readonly lowerLoadThreshold: number;

/**
   * The name of the metric for which usage should be tracked.
   */
readonly metricName: string;

/**
   * The period in seconds on which a decision is made whether to scale or not. This property should come in ISO 8601 format "hh:mm:ss".
   */
readonly scaleInterval: string;

/**
   * The upper limit of the load beyond which a scale out operation should be performed.
   */
readonly upperLoadThreshold: number;

/**
   * Specifies the trigger associated with this scaling policy.
   */
readonly kind: 'AverageServiceLoadTrigger';

/**
   * The lower limit of the load below which a scale in operation should be performed.
   */
readonly lowerLoadThreshold: number;

/**
   * The name of the metric for which usage should be tracked.
   */
readonly metricName: string;

/**
   * The period in seconds on which a decision is made whether to scale or not. This property should come in ISO 8601 format "hh:mm:ss".
   */
readonly scaleInterval: string;

/**
   * The upper limit of the load beyond which a scale out operation should be performed.
   */
readonly upperLoadThreshold: number;

/**
   * Flag determines whether only the load of primary replica should be considered for scaling. If set to true, then trigger will only consider the load of primary replicas of stateful service. If set to false, trigger will consider load of all replicas. This parameter cannot be set to true for stateless service.
   */
readonly useOnlyPrimaryLoad: bool;

/**
   * Used only for Stateless services. The default amount of load, as a number, that this service creates for this metric.
   */
readonly defaultLoad?: number;

/**
   * Used only for Stateful services. The default amount of load, as a number, that this service creates for this metric when it is a Primary replica.
   */
readonly primaryDefaultLoad?: number;

/**
   * Used only for Stateful services. The default amount of load, as a number, that this service creates for this metric when it is a Secondary replica.
   */
readonly secondaryDefaultLoad?: number;

/**
   * The service load metric relative weight, compared to other metrics configured for this service, as a number.
   */
readonly weight?: 'High''Low''Medium''Zero';

/**
   * Set the object type
   */
readonly type: InvalidDomainNonPartiallyPlaceServicePreferredPrimaryDomainRequiredDomainRequiredDomainDistribution;

/**
   * The type of placement policy for a service fabric service. Following are the possible values.
   */
readonly type: 'InvalidDomain';

/**
   * The name of the domain that should not be used for placement.
   */
readonly domainName: string;

/**
   * The type of placement policy for a service fabric service. Following are the possible values.
   */
readonly type: 'NonPartiallyPlaceService';

/**
   * The type of placement policy for a service fabric service. Following are the possible values.
   */
readonly type: 'PreferredPrimaryDomain';

/**
   * The name of the domain that should used for placement as per this policy.
   */
readonly domainName: string;

/**
   * The type of placement policy for a service fabric service. Following are the possible values.
   */
readonly type: 'RequiredDomain';

/**
   * The name of the domain that should used for placement as per this policy.
   */
readonly domainName: string;

/**
   * The type of placement policy for a service fabric service. Following are the possible values.
   */
readonly type: 'RequiredDomainDistribution';

/**
   * The name of the domain that should used for placement as per this policy.
   */
readonly domainName: string;

/**
   * The kind of service (Stateless or Stateful).
   */
readonly serviceKind: 'Stateful';

/**
   * A flag indicating whether this is a persistent service which stores states on the local disk. If it is then the value of this property is true, if not it is false.
   */
readonly hasPersistedState?: bool;

/**
   * The minimum replica set size as a number.
   */
readonly minReplicaSetSize?: number;

/**
   * The maximum duration for which a partition is allowed to be in a state of quorum loss, represented in ISO 8601 format "hh:mm:ss".
   */
readonly quorumLossWaitDuration?: string;

/**
   * The duration between when a replica goes down and when a new replica is created, represented in ISO 8601 format "hh:mm:ss".
   */
readonly replicaRestartWaitDuration?: string;

/**
   * The duration for which replicas can stay InBuild before reporting that build is stuck, represented in ISO 8601 format "hh:mm:ss".
   */
readonly servicePlacementTimeLimit?: string;

/**
   * The definition on how long StandBy replicas should be maintained before being removed, represented in ISO 8601 format "hh:mm:ss".
   */
readonly standByReplicaKeepDuration?: string;

/**
   * The target replica set size as a number.
   */
readonly targetReplicaSetSize?: number;

/**
   * The kind of service (Stateless or Stateful).
   */
readonly serviceKind: 'Stateless';

/**
   * The instance count.
   */
readonly instanceCount: number;

/**
   * MinInstanceCount is the minimum number of instances that must be up to meet the EnsureAvailability safety check during operations like upgrade or deactivate node. The actual number that is used is max( MinInstanceCount, ceil( MinInstancePercentage/100.0 * InstanceCount) ). Note, if InstanceCount is set to -1, during MinInstanceCount computation -1 is first converted into the number of nodes on which the instances are allowed to be placed according to the placement constraints on the service.
   */
readonly minInstanceCount?: number;

/**
   * MinInstancePercentage is the minimum percentage of InstanceCount that must be up to meet the EnsureAvailability safety check during operations like upgrade or deactivate node. The actual number that is used is max( MinInstanceCount, ceil( MinInstancePercentage/100.0 * InstanceCount) ). Note, if InstanceCount is set to -1, during MinInstancePercentage computation, -1 is first converted into the number of nodes on which the instances are allowed to be placed according to the placement constraints on the service.
   */
readonly minInstancePercentage?: number;
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
