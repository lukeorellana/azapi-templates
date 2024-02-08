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


