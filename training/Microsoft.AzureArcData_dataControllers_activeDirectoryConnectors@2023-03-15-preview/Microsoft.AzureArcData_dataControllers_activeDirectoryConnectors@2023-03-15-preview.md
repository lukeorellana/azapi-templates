```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureArcData/dataControllers/activeDirectoryConnectors@2023-03-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      domainServiceAccountLoginInformation = {
        password = "string"
        username = "string"
      }
      spec = {
        activeDirectory = {
          domainControllers = {
            primaryDomainController = {
              hostname = "string"
            }
            secondaryDomainControllers = [
              {
                hostname = "string"
              }
            ]
          }
          netbiosDomainName = "string"
          ouDistinguishedName = "string"
          realm = "string"
          serviceAccountProvisioning = "string"
        }
        dns = {
          domainName = "string"
          nameserverIPAddresses = [
            "string"
          ]
          preferK8sDnsForPtrLookups = bool
          replicas = int
        }
      }
      status = {
        lastUpdateTime = "string"
        observedGeneration = int
        state = "string"
      }
    }
  })
}

```

### dataControllers/activeDirectoryConnectors

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dataControllers |
| properties | null | ActiveDirectoryConnectorProperties(required) |


### ActiveDirectoryConnectorProperties

| Name | Description | Value |
|-|-|-|
| domainServiceAccountLoginInformation | Username and password for domain service account authentication. | BasicLoginInformation |
| spec | null | ActiveDirectoryConnectorSpec(required) |
| status | null | ActiveDirectoryConnectorStatus |


### BasicLoginInformation

| Name | Description | Value |
|-|-|-|
| password | Login password. | string |
| username | Login username. | string |


### ActiveDirectoryConnectorSpec

| Name | Description | Value |
|-|-|-|
| activeDirectory | null | ActiveDirectoryConnectorDomainDetails(required) |
| dns | null | ActiveDirectoryConnectorDNSDetails(required) |


### ActiveDirectoryConnectorDomainDetails

| Name | Description | Value |
|-|-|-|
| domainControllers | null | ActiveDirectoryDomainControllers |
| netbiosDomainName | NETBIOS name of the Active Directory domain. | string |
| ouDistinguishedName | The distinguished name of the Active Directory Organizational Unit. | string |
| realm | Name (uppercase) of the Active Directory domain that this AD connector will be associated with. | string (required) |
| serviceAccountProvisioning | The service account provisioning mode for this Active Directory connector. | 'automatic''manual' |


### ActiveDirectoryDomainControllers

| Name | Description | Value |
|-|-|-|
| primaryDomainController | Information about the Primary Domain Controller (PDC) in the AD domain. | ActiveDirectoryDomainController |
| secondaryDomainControllers | null | ActiveDirectoryDomainController[] |


### ActiveDirectoryDomainController

| Name | Description | Value |
|-|-|-|
| hostname | Fully-qualified domain name of a domain controller in the AD domain. | string (required) |


### ActiveDirectoryConnectorDNSDetails

| Name | Description | Value |
|-|-|-|
| domainName | DNS domain name for which DNS lookups should be forwarded to the Active Directory DNS servers. | string |
| nameserverIPAddresses | List of Active Directory DNS server IP addresses. | string[] (required) |
| preferK8sDnsForPtrLookups | Flag indicating whether to prefer Kubernetes DNS server response over AD DNS server response for IP address lookups. | bool |
| replicas | Replica count for DNS proxy service. Default value is 1. | int |


### ActiveDirectoryConnectorStatus

| Name | Description | Value |
|-|-|-|
| lastUpdateTime | The time that the custom resource was last updated. | string |
| observedGeneration | The version of the replicaSet associated with the AD connector custom resource. | int |
| state | The state of the AD connector custom resource. | string |


