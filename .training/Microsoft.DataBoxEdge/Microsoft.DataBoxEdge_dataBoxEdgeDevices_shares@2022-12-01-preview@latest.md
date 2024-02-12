```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/shares@2022-12-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      accessProtocol = "string"
      azureContainerInfo = {
        containerName = "string"
        dataFormat = "string"
        storageAccountCredentialId = "string"
      }
      clientAccessRights = [
        {
          accessPermission = "string"
          client = "string"
        }
      ]
      dataPolicy = "string"
      description = "string"
      monitoringStatus = "string"
      refreshDetails = {
        errorManifestFile = "string"
        inProgressRefreshJobId = "string"
        lastCompletedRefreshJobTimeInUTC = "string"
        lastJob = "string"
      }
      shareStatus = "string"
      userAccessRights = [
        {
          accessType = "string"
          userId = "string"
        }
      ]
    }
  })
}

```

### dataBoxEdgeDevices/shares

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dataBoxEdgeDevices |
| properties | The share properties. | ShareProperties(required) |


### ShareProperties

| Name | Description | Value |
|-|-|-|
| accessProtocol | Access protocol to be used by the share. | 'NFS''SMB' (required) |
| azureContainerInfo | Azure container mapping for the share. | AzureContainerInfo |
| clientAccessRights | List of IP addresses and corresponding access rights on the share(required for NFS protocol). | ClientAccessRight[] |
| dataPolicy | Data policy of the share. | 'Cloud''Local' |
| description | Description for the share. | string |
| monitoringStatus | Current monitoring status of the share. | 'Disabled''Enabled' (required) |
| refreshDetails | Details of the refresh job on this share. | RefreshDetails |
| shareStatus | Current status of the share. | 'NeedsAttention''OK''Offline''Unknown''Updating' (required) |
| userAccessRights | Mapping of users and corresponding access rights on the share (required for SMB protocol). | UserAccessRight[] |


### AzureContainerInfo

| Name | Description | Value |
|-|-|-|
| containerName | Container name (Based on the data format specified, this represents the name of Azure Files/Page blob/Block blob). | string (required) |
| dataFormat | Storage format used for the file represented by the share. | 'AzureFile''BlockBlob''PageBlob' (required) |
| storageAccountCredentialId | ID of the storage account credential used to access storage. | string (required) |


### ClientAccessRight

| Name | Description | Value |
|-|-|-|
| accessPermission | Type of access to be allowed for the client. | 'NoAccess''ReadOnly''ReadWrite' (required) |
| client | IP of the client. | string (required) |


### RefreshDetails

| Name | Description | Value |
|-|-|-|
| errorManifestFile | Indicates the relative path of the error xml for the last refresh job on this particular share or container, if any. This could be a failed job or a successful job. | string |
| inProgressRefreshJobId | If a refresh job is currently in progress on this share or container, this field indicates the ARM resource ID of that job. The field is empty if no job is in progress. | string |
| lastCompletedRefreshJobTimeInUTC | Indicates the completed time for the last refresh job on this particular share or container, if any.This could be a failed job or a successful job. | string |
| lastJob | Indicates the id of the last refresh job on this particular share or container,if any. This could be a failed job or a successful job. | string |


### UserAccessRight

| Name | Description | Value |
|-|-|-|
| accessType | Type of access to be allowed for the user. | 'Change''Custom''Read' (required) |
| userId | User ID (already existing in the device). | string (required) |


