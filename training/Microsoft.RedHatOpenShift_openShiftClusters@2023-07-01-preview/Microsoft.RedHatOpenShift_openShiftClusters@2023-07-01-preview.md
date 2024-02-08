```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RedHatOpenShift/openShiftClusters@2023-07-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      apiserverProfile = {
        ip = "string"
        url = "string"
        visibility = "string"
      }
      clusterProfile = {
        domain = "string"
        fipsValidatedModules = "string"
        pullSecret = "string"
        resourceGroupId = "string"
        version = "string"
      }
      consoleProfile = {
        url = "string"
      }
      ingressProfiles = [
        {
          ip = "string"
          name = "string"
          visibility = "string"
        }
      ]
      masterProfile = {
        diskEncryptionSetId = "string"
        encryptionAtHost = "string"
        subnetId = "string"
        vmSize = "string"
      }
      networkProfile = {
        loadBalancerProfile = {
          allocatedOutboundPorts = int
          managedOutboundIps = {
            count = int
          }
          outboundIpPrefixes = [
            {
              id = "string"
            }
          ]
          outboundIps = [
            {
              id = "string"
            }
          ]
        }
        outboundType = "string"
        podCidr = "string"
        serviceCidr = "string"
      }
      provisioningState = "string"
      servicePrincipalProfile = {
        clientId = "string"
        clientSecret = "string"
      }
      workerProfiles = [
        {
          count = int
          diskEncryptionSetId = "string"
          diskSizeGB = int
          encryptionAtHost = "string"
          name = "string"
          subnetId = "string"
          vmSize = "string"
        }
      ]
    }
  })
}

```

### openShiftClusters

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | The cluster properties. | OpenShiftClusterProperties |


### OpenShiftClusterProperties

| Name | Description | Value |
|-|-|-|
| apiserverProfile | The cluster API server profile. | APIServerProfile |
| clusterProfile | The cluster profile. | ClusterProfile |
| consoleProfile | The console profile. | ConsoleProfile |
| ingressProfiles | The cluster ingress profiles. | IngressProfile[] |
| masterProfile | The cluster master profile. | MasterProfile |
| networkProfile | The cluster network profile. | NetworkProfile |
| provisioningState | The cluster provisioning state. | 'AdminUpdating''Creating''Deleting''Failed''Succeeded''Updating' |
| servicePrincipalProfile | The cluster service principal profile. | ServicePrincipalProfile |
| workerProfiles | The cluster worker profiles. | WorkerProfile[] |


### APIServerProfile

| Name | Description | Value |
|-|-|-|
| ip | The IP of the cluster API server. | string |
| url | The URL to access the cluster API server. | string |
| visibility | API server visibility. | 'Private''Public' |


### ClusterProfile

| Name | Description | Value |
|-|-|-|
| domain | The domain for the cluster. | string |
| fipsValidatedModules | If FIPS validated crypto modules are used | 'Disabled''Enabled' |
| pullSecret | The pull secret for the cluster. | string |
| resourceGroupId | The ID of the cluster resource group. | string |
| version | The version of the cluster. | string |


### ConsoleProfile

| Name | Description | Value |
|-|-|-|
| url | The URL to access the cluster console. | string |


### IngressProfile

| Name | Description | Value |
|-|-|-|
| ip | The IP of the ingress. | string |
| name | The ingress profile name. | string |
| visibility | Ingress visibility. | 'Private''Public' |


### MasterProfile

| Name | Description | Value |
|-|-|-|
| diskEncryptionSetId | The resource ID of an associated DiskEncryptionSet, if applicable. | string |
| encryptionAtHost | Whether master virtual machines are encrypted at host. | 'Disabled''Enabled' |
| subnetId | The Azure resource ID of the master subnet. | string |
| vmSize | The size of the master VMs. | string |


### NetworkProfile

| Name | Description | Value |
|-|-|-|
| loadBalancerProfile | The cluster load balancer profile. | LoadBalancerProfile |
| outboundType | The OutboundType used for egress traffic. | 'Loadbalancer''UserDefinedRouting' |
| podCidr | The CIDR used for OpenShift/Kubernetes Pods. | string |
| serviceCidr | The CIDR used for OpenShift/Kubernetes Services. | string |


### LoadBalancerProfile

| Name | Description | Value |
|-|-|-|
| allocatedOutboundPorts | The desired number of allocated SNAT ports per VM. Allowed values are in the range of 0 to 64000 (inclusive). The default value is 1024. | int |
| managedOutboundIps | The desired managed outbound IPs for the cluster public load balancer. | ManagedOutboundIPs |
| outboundIpPrefixes | The desired outbound IP Prefix resources for the cluster load balancer. | OutboundIPPrefix[] |
| outboundIps | The desired outbound IP resources for the cluster load balancer. | OutboundIP[] |


### ManagedOutboundIPs

| Name | Description | Value |
|-|-|-|
| count | Count represents the desired number of IPv4 outbound IPs created and managed by Azure for the cluster public load balancer.  Allowed values are in the range of 1 - 20.  The default value is 1. | int |


### OutboundIPPrefix

| Name | Description | Value |
|-|-|-|
| id | The fully qualified Azure resource id of an IP Prefix resource. | string |


### OutboundIP

| Name | Description | Value |
|-|-|-|
| id | The fully qualified Azure resource id of the IP address resource. | string |


### ServicePrincipalProfile

| Name | Description | Value |
|-|-|-|
| clientId | The client ID used for the cluster. | string |
| clientSecret | The client secret used for the cluster. | string |


### WorkerProfile

| Name | Description | Value |
|-|-|-|
| count | The number of worker VMs. | int |
| diskEncryptionSetId | The resource ID of an associated DiskEncryptionSet, if applicable. | string |
| diskSizeGB | The disk size of the worker VMs. | int |
| encryptionAtHost | Whether master virtual machines are encrypted at host. | 'Disabled''Enabled' |
| name | The worker profile name. | string |
| subnetId | The Azure resource ID of the worker subnet. | string |
| vmSize | The size of the worker VMs. | string |


