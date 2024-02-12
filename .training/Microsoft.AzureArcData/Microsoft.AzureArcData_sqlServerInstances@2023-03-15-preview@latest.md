```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureArcData/sqlServerInstances@2023-03-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      azureDefenderStatus = "string"
      azureDefenderStatusLastUpdated = "string"
      collation = "string"
      containerResourceId = "string"
      cores = "string"
      currentVersion = "string"
      edition = "string"
      hostType = "string"
      instanceName = "string"
      licenseType = "string"
      patchLevel = "string"
      productId = "string"
      status = "string"
      tcpDynamicPorts = "string"
      tcpStaticPorts = "string"
      vCore = "string"
      version = "string"
    }
  })
}

```

### sqlServerInstances

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | null | SqlServerInstanceProperties |


### SqlServerInstanceProperties

| Name | Description | Value |
|-|-|-|
| azureDefenderStatus | Status of Azure Defender. | 'Protected''Unknown''Unprotected' |
| azureDefenderStatusLastUpdated | Timestamp of last Azure Defender status update. | string |
| collation | SQL Server collation. | string |
| containerResourceId | ARM Resource id of the container resource (Azure Arc for Servers). | string (required) |
| cores | The number of total cores of the Operating System Environment (OSE) hosting the SQL Server instance. | string |
| currentVersion | SQL Server current version. | string |
| edition | SQL Server edition. | 'Business Intelligence''Developer''Enterprise''Evaluation''Express''Standard''Web' |
| hostType | Type of host for Azure Arc SQL Server | 'AWS Kubernetes Service''AWS VMWare Virtual Machine''AWS Virtual Machine''Azure Kubernetes Service''Azure VMWare Virtual Machine''Azure Virtual Machine''Container''GCP Kubernetes Service''GCP VMWare Virtual Machine''GCP Virtual Machine''Other''Physical Server''Virtual Machine' |
| instanceName | SQL Server instance name. | string |
| licenseType | SQL Server license type. | 'Free''HADR''LicenseOnly''PAYG''Paid''ServerCAL''Undefined' |
| patchLevel | SQL Server update level. | string |
| productId | SQL Server product ID. | string |
| status | The cloud connectivity status. | 'Connected''Disconnected''Registered''Unknown' (required) |
| tcpDynamicPorts | Dynamic TCP ports used by SQL Server. | string |
| tcpStaticPorts | Static TCP ports used by SQL Server. | string |
| vCore | The number of logical processors used by the SQL Server instance. | string |
| version | SQL Server version. | 'SQL Server 2012''SQL Server 2014''SQL Server 2016''SQL Server 2017''SQL Server 2019''SQL Server 2022''Unknown' |


