```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/kubeEnvironments@2022-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      aksResourceID = "string"
      appLogsConfiguration = {
        destination = "string"
        logAnalyticsConfiguration = {
          customerId = "string"
          sharedKey = "string"
        }
      }
      arcConfiguration = {
        artifactsStorageType = "string"
        artifactStorageAccessMode = "string"
        artifactStorageClassName = "string"
        artifactStorageMountPath = "string"
        artifactStorageNodeName = "string"
        frontEndServiceConfiguration = {
          kind = "string"
        }
        kubeConfig = "string"
      }
      containerAppsConfiguration = {
        appSubnetResourceId = "string"
        controlPlaneSubnetResourceId = "string"
        daprAIInstrumentationKey = "string"
        dockerBridgeCidr = "string"
        platformReservedCidr = "string"
        platformReservedDnsIP = "string"
      }
      environmentType = "string"
      internalLoadBalancerEnabled = bool
      staticIp = "string"
    }
    kind = "string"
    extendedLocation = {
      name = "string"
    }
  })
}

```

### kubeEnvironments

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource Location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | Kind of resource. | string |
| extendedLocation | Extended Location. | ExtendedLocation |
| properties | KubeEnvironment resource specific properties | KubeEnvironmentProperties |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | Name of extended location. | string |


### KubeEnvironmentProperties

| Name | Description | Value |
|-|-|-|
| aksResourceID |  | string |
| appLogsConfiguration | Cluster configuration which enables the log daemon to exportapp logs to a destination. Currently only "log-analytics" issupported | AppLogsConfiguration |
| arcConfiguration | Cluster configuration which determines the ARC clustercomponents types. Eg: Choosing between BuildService kind,FrontEnd Service ArtifactsStorageType etc. | ArcConfiguration |
| containerAppsConfiguration | Cluster configuration for Container Apps Environments to configure Dapr Instrumentation Key and VNET Configuration | ContainerAppsConfiguration |
| environmentType | Type of Kubernetes Environment. Only supported for Container App Environments with value as Managed | string |
| internalLoadBalancerEnabled | Only visible within Vnet/Subnet | bool |
| staticIp | Static IP of the KubeEnvironment | string |


### AppLogsConfiguration

| Name | Description | Value |
|-|-|-|
| destination |  | string |
| logAnalyticsConfiguration |  | LogAnalyticsConfiguration |


### LogAnalyticsConfiguration

| Name | Description | Value |
|-|-|-|
| customerId |  | string |
| sharedKey |  | string |


### ArcConfiguration

| Name | Description | Value |
|-|-|-|
| artifactsStorageType |  | 'LocalNode''NetworkFileSystem' |
| artifactStorageAccessMode |  | string |
| artifactStorageClassName |  | string |
| artifactStorageMountPath |  | string |
| artifactStorageNodeName |  | string |
| frontEndServiceConfiguration |  | FrontEndConfiguration |
| kubeConfig |  | string |


### FrontEndConfiguration

| Name | Description | Value |
|-|-|-|
| kind |  | 'LoadBalancer''NodePort' |


### ContainerAppsConfiguration

| Name | Description | Value |
|-|-|-|
| appSubnetResourceId | Resource ID of a subnet for control plane infrastructure components. This subnet must be in the same VNET as the subnet defined in appSubnetResourceId. Must not overlap with the IP range defined in platformReservedCidr, if defined. | string |
| controlPlaneSubnetResourceId | Resource ID of a subnet for control plane infrastructure components. This subnet must be in the same VNET as the subnet defined in appSubnetResourceId. Must not overlap with the IP range defined in platformReservedCidr, if defined. | string |
| daprAIInstrumentationKey | Azure Monitor instrumentation key used by Dapr to export Service to Service communication telemetry | string |
| dockerBridgeCidr | CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the IP range defined in platformReservedCidr, if defined. | string |
| platformReservedCidr | IP range in CIDR notation that can be reserved for environment infrastructure IP addresses. It must not overlap with any other Subnet IP ranges. | string |
| platformReservedDnsIP | An IP address from the IP range defined by platformReservedCidr that will be reserved for the internal DNS server | string |


