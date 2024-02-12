```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups@2022-08-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      sqlImageOffer = "string"
      sqlImageSku = "string"
      wsfcDomainProfile = {
        clusterBootstrapAccount = "string"
        clusterOperatorAccount = "string"
        clusterSubnetType = "string"
        domainFqdn = "string"
        fileShareWitnessPath = "string"
        ouPath = "string"
        sqlServiceAccount = "string"
        storageAccountPrimaryKey = "string"
        storageAccountUrl = "string"
      }
    }
  })
}

```

### sqlVirtualMachineGroups

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Resource properties. | SqlVirtualMachineGroupProperties |


### SqlVirtualMachineGroupProperties

| Name | Description | Value |
|-|-|-|
| sqlImageOffer | SQL image offer. Examples may include SQL2016-WS2016, SQL2017-WS2016. | string |
| sqlImageSku | SQL image sku. | 'Developer''Enterprise' |
| wsfcDomainProfile | Cluster Active Directory domain profile. | WsfcDomainProfile |


### WsfcDomainProfile

| Name | Description | Value |
|-|-|-|
| clusterBootstrapAccount | Account name used for creating cluster (at minimum needs permissions to 'Create Computer Objects' in domain). | string |
| clusterOperatorAccount | Account name used for operating cluster i.e. will be part of administrators group on all the participating virtual machines in the cluster. | string |
| clusterSubnetType | Cluster subnet type. | 'MultiSubnet''SingleSubnet' |
| domainFqdn | Fully qualified name of the domain. | string |
| fileShareWitnessPath | Optional path for fileshare witness. | string |
| ouPath | Organizational Unit path in which the nodes and cluster will be present. | string |
| sqlServiceAccount | Account name under which SQL service will run on all participating SQL virtual machines in the cluster. | string |
| storageAccountPrimaryKey | Primary key of the witness storage account. | string |
| storageAccountUrl | Fully qualified ARM resource id of the witness storage account. | string |


