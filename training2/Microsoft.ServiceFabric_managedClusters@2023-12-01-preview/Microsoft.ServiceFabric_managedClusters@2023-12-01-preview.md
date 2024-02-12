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


