```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/managedEnvironments@2023-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      appLogsConfiguration = {
        destination = "string"
        logAnalyticsConfiguration = {
          customerId = "string"
          sharedKey = "string"
        }
      }
      customDomainConfiguration = {
        certificatePassword = "string"
        dnsSuffix = "string"
      }
      daprAIConnectionString = "string"
      daprAIInstrumentationKey = "string"
      daprConfiguration = {}
      infrastructureResourceGroup = "string"
      kedaConfiguration = {}
      peerAuthentication = {
        mtls = {
          enabled = bool
        }
      }
      vnetConfiguration = {
        dockerBridgeCidr = "string"
        infrastructureSubnetId = "string"
        internal = bool
        platformReservedCidr = "string"
        platformReservedDnsIP = "string"
      }
      workloadProfiles = [
        {
          maximumCount = int
          minimumCount = int
          name = "string"
          workloadProfileType = "string"
        }
      ]
      zoneRedundant = bool
    }
    kind = "string"
  })
}

```

### managedEnvironments

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | Kind of the Environment. | string |
| properties | Managed environment resource specific properties | ManagedEnvironmentProperties |


### ManagedEnvironmentProperties

| Name | Description | Value |
|-|-|-|
| appLogsConfiguration | Cluster configuration which enables the log daemon to exportapp logs to a destination. Currently only "log-analytics" issupported | AppLogsConfiguration |
| customDomainConfiguration | Custom domain configuration for the environment | CustomDomainConfiguration |
| daprAIConnectionString | Application Insights connection string used by Dapr to export Service to Service communication telemetry | string |
| daprAIInstrumentationKey | Azure Monitor instrumentation key used by Dapr to export Service to Service communication telemetry | string |
| daprConfiguration | The configuration of Dapr component. | DaprConfiguration |
| infrastructureResourceGroup | Name of the platform-managed resource group created for the Managed Environment to host infrastructure resources. If a subnet ID is provided, this resource group will be created in the same subscription as the subnet. | string |
| kedaConfiguration | The configuration of Keda component. | KedaConfiguration |
| peerAuthentication | Peer authentication settings for the Managed Environment | ManagedEnvironmentPropertiesPeerAuthentication |
| vnetConfiguration | Vnet configuration for the environment | VnetConfiguration |
| workloadProfiles | Workload profiles configured for the Managed Environment. | WorkloadProfile[] |
| zoneRedundant | Whether or not this Managed Environment is zone-redundant. | bool |


### AppLogsConfiguration

| Name | Description | Value |
|-|-|-|
| destination | Logs destination, can be 'log-analytics', 'azure-monitor' or 'none' | string |
| logAnalyticsConfiguration | Log Analytics configuration, must only be provided when destination is configured as 'log-analytics' | LogAnalyticsConfiguration |


### LogAnalyticsConfiguration

| Name | Description | Value |
|-|-|-|
| customerId | Log analytics customer id | string |
| sharedKey | Log analytics customer key | string |


### CustomDomainConfiguration

| Name | Description | Value |
|-|-|-|
| certificatePassword | Certificate password | string |
| certificateValue | PFX or PEM blob | For Bicep, you can use theany()function. |
| dnsSuffix | Dns suffix for the environment domain | string |


### ManagedEnvironmentPropertiesPeerAuthentication

| Name | Description | Value |
|-|-|-|
| mtls | Mutual TLS authentication settings for the Managed Environment | Mtls |


### Mtls

| Name | Description | Value |
|-|-|-|
| enabled | Boolean indicating whether the mutual TLS authentication is enabled | bool |


### VnetConfiguration

| Name | Description | Value |
|-|-|-|
| dockerBridgeCidr | CIDR notation IP range assigned to the Docker bridge, network. Must not overlap with any other provided IP ranges. | string |
| infrastructureSubnetId | Resource ID of a subnet for infrastructure components. Must not overlap with any other provided IP ranges. | string |
| internal | Boolean indicating the environment only has an internal load balancer. These environments do not have a public static IP resource. They must provide infrastructureSubnetId if enabling this property | bool |
| platformReservedCidr | IP range in CIDR notation that can be reserved for environment infrastructure IP addresses. Must not overlap with any other provided IP ranges. | string |
| platformReservedDnsIP | An IP address from the IP range defined by platformReservedCidr that will be reserved for the internal DNS server. | string |


### WorkloadProfile

| Name | Description | Value |
|-|-|-|
| maximumCount | The maximum capacity. | int |
| minimumCount | The minimum capacity. | int |
| name | Workload profile type for the workloads to run on. | string (required) |
| workloadProfileType | Workload profile type for the workloads to run on. | string (required) |


