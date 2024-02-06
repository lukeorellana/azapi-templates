## Microsoft.DataBoxEdge/dataBoxEdgeDevices@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices@2022-12-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
  }
  body = jsonencode({
    properties = {
      dataResidency = {
        type = "string"
      }
    }
    sku = {
      name = "string"
      tier = "Standard"
    }
    etag = "string"
  })
}

```

### dataBoxEdgeDevices

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The location of the device. This is a supported and registered Azure geographical region (for example, West US, East US, or Southeast Asia). The geographical region of a device cannot be changed once it is created, but if an identical geographical region is specified on update, the request will succeed. | string (required) |
| tags | The list of tags that describe the device. These tags can be used to view and group this device (across resource groups). | Dictionary of tag names and values. SeeTags in templates |
| sku | The SKU type. | Sku |
| etag | The etag for the devices. | string |
| identity | Msi identity of the resource | ResourceIdentity |
| properties | The properties of the Data Box Edge/Gateway device. | DataBoxEdgeDeviceProperties |


### ResourceIdentity

| Name | Description | Value |
|-|-|-|
| type | Identity type | 'None''SystemAssigned''UserAssigned' |


### DataBoxEdgeDeviceProperties

| Name | Description | Value |
|-|-|-|
| dataResidency | The details of data-residency related properties for this resource | DataResidency |


### DataResidency

| Name | Description | Value |
|-|-|-|
| type | DataResidencyType enum | 'GeoZoneReplication''ZoneReplication' |


### Sku

| Name | Description | Value |
|-|-|-|
| name | SKU name. | 'EP2_128_1T4_Mx1_W''EP2_128_GPU1_Mx1_W''EP2_256_2T4_W''EP2_256_GPU2_Mx1''EP2_64_1VPU_W''EP2_64_Mx1_W''Edge''EdgeMR_Mini''EdgeMR_TCP''EdgePR_Base''EdgePR_Base_UPS''EdgeP_Base''EdgeP_High''GPU''Gateway''Management''RCA_Large''RCA_Small''RDC''TCA_Large''TCA_Small''TDC''TEA_1Node''TEA_1Node_Heater''TEA_1Node_UPS''TEA_1Node_UPS_Heater''TEA_4Node_Heater''TEA_4Node_UPS_Heater''TMA' |
| tier | The SKU tier. This is based on the SKU name. | 'Standard' |
## Microsoft.DataBoxEdge/dataBoxEdgeDevices/bandwidthSchedules@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/bandwidthSchedules@2022-12-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      days = [
        "string"
      ]
      rateInMbps = int
      start = "string"
      stop = "string"
    }
  })
}

```

### dataBoxEdgeDevices/bandwidthSchedules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dataBoxEdgeDevices |
| properties | The properties of the bandwidth schedule. | BandwidthScheduleProperties(required) |


### BandwidthScheduleProperties

| Name | Description | Value |
|-|-|-|
| days | The days of the week when this schedule is applicable. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' (required) |
| rateInMbps | The bandwidth rate in Mbps. | int (required) |
| start | The start time of the schedule in UTC. | string (required) |
| stop | The stop time of the schedule in UTC. | string (required) |
## Microsoft.DataBoxEdge/dataBoxEdgeDevices/diagnosticProactiveLogCollectionSettings@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/diagnosticProactiveLogCollectionSettings@2022-12-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      userConsent = "string"
    }
  })
}

```

### dataBoxEdgeDevices/diagnosticProactiveLogCollectionS...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dataBoxEdgeDevices |
| properties | Properties of the diagnostic proactive log collection settings. | ProactiveLogCollectionSettingsProperties(required) |


### ProactiveLogCollectionSettingsProperties

| Name | Description | Value |
|-|-|-|
| userConsent | Proactive diagnostic collection consent flag | 'Disabled''Enabled' (required) |
## Microsoft.DataBoxEdge/dataBoxEdgeDevices/diagnosticRemoteSupportSettings@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/diagnosticRemoteSupportSettings@2022-12-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      remoteSupportSettingsList = [
        {
          accessLevel = "string"
          expirationTimeStampInUTC = "string"
          remoteApplicationType = "string"
        }
      ]
    }
  })
}

```

### dataBoxEdgeDevices/diagnosticRemoteSupportSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dataBoxEdgeDevices |
| properties | Properties of the remote support  settings. | DiagnosticRemoteSupportSettingsProperties(required) |


### DiagnosticRemoteSupportSettingsProperties

| Name | Description | Value |
|-|-|-|
| remoteSupportSettingsList | Remote support settings list according to the RemoteApplicationType | RemoteSupportSettings[] |


### RemoteSupportSettings

| Name | Description | Value |
|-|-|-|
| accessLevel | Access level allowed for this remote application type | 'FullAccess''None''ReadOnly''ReadWrite' |
| expirationTimeStampInUTC | Expiration time stamp | string |
| remoteApplicationType | Remote application type | 'AllApplications''LocalUI''Powershell''WAC' |
## Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders@2022-12-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      contactInformation = {
        companyName = "string"
        contactPerson = "string"
        emailList = [
          "string"
        ]
        phone = "string"
      }
      shipmentType = "string"
      shippingAddress = {
        addressLine1 = "string"
        addressLine2 = "string"
        addressLine3 = "string"
        city = "string"
        country = "string"
        postalCode = "string"
        state = "string"
      }
    }
  })
}

```

### dataBoxEdgeDevices/orders

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dataBoxEdgeDevices |
| properties | The order properties. | OrderProperties |


### OrderProperties

| Name | Description | Value |
|-|-|-|
| contactInformation | The contact details. | ContactDetails(required) |
| shipmentType | ShipmentType of the order | 'NotApplicable''SelfPickup''ShippedToCustomer' |
| shippingAddress | The shipping address. | Address |


### ContactDetails

| Name | Description | Value |
|-|-|-|
| companyName | The name of the company. | string (required) |
| contactPerson | The contact person name. | string (required) |
| emailList | The email list. | string[] (required) |
| phone | The phone number. | string (required) |


### Address

| Name | Description | Value |
|-|-|-|
| addressLine1 | The address line1. | string |
| addressLine2 | The address line2. | string |
| addressLine3 | The address line3. | string |
| city | The city name. | string |
| country | The country name. | string (required) |
| postalCode | The postal code. | string |
| state | The state name. | string |
## Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles@2022-12-01-preview"
  name = "string"
  parent_id = "string"
  // For remaining properties, see dataBoxEdgeDevices/roles objects
  body = jsonencode({
    kind = "string"
  })
}

```

### dataBoxEdgeDevices/roles

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Set the object type | CloudEdgeManagementIOTKubernetesMEC(required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dataBoxEdgeDevices |


### CloudEdgeManagementRole

| Name | Description | Value |
|-|-|-|
| kind | Role type. | 'CloudEdgeManagement' (required) |
| properties | Properties specific to CloudEdgeManagementRole role. | CloudEdgeManagementRoleProperties |


### CloudEdgeManagementRoleProperties

| Name | Description | Value |
|-|-|-|
| roleStatus | Role status. | 'Disabled''Enabled' (required) |


### IoTRole

| Name | Description | Value |
|-|-|-|
| kind | Role type. | 'IOT' (required) |
| properties | Properties specific to IoT role. | IoTRoleProperties |


### IoTRoleProperties

| Name | Description | Value |
|-|-|-|
| computeResource | Resource allocation | ComputeResource |
| hostPlatform | Host OS supported by the IoT role. | 'Linux''Windows' (required) |
| ioTDeviceDetails | IoT device metadata to which data box edge device needs to be connected. | IoTDeviceInfo(required) |
| ioTEdgeAgentInfo | Iot edge agent details to download the agent and bootstrap iot runtime. | IoTEdgeAgentInfo |
| ioTEdgeDeviceDetails | IoT edge device to which the IoT role needs to be configured. | IoTDeviceInfo(required) |
| roleStatus | Role status. | 'Disabled''Enabled' (required) |
| shareMappings | Mount points of shares in role(s). | MountPointMap[] |


### ComputeResource

| Name | Description | Value |
|-|-|-|
| memoryInGB | Memory in GB | int (required) |
| processorCount | Processor count | int (required) |


### IoTDeviceInfo

| Name | Description | Value |
|-|-|-|
| authentication | Encrypted IoT device/IoT edge device connection string. | Authentication |
| deviceId | ID of the IoT device/edge device. | string (required) |
| ioTHostHub | Host name for the IoT hub associated to the device. | string (required) |
| ioTHostHubId | Id for the IoT hub associated to the device. | string |


### Authentication

| Name | Description | Value |
|-|-|-|
| symmetricKey | Symmetric key for authentication. | SymmetricKey |


### SymmetricKey

| Name | Description | Value |
|-|-|-|
| connectionString | Connection string based on the symmetric key. | AsymmetricEncryptedSecret |


### AsymmetricEncryptedSecret

| Name | Description | Value |
|-|-|-|
| encryptionAlgorithm | The algorithm used to encrypt "Value". | 'AES256''None''RSAES_PKCS1_v_1_5' (required) |
| encryptionCertThumbprint | Thumbprint certificate used to encrypt "Value". If the value is unencrypted, it will be null. | string |
| value | The value of the secret. | string (required) |


### IoTEdgeAgentInfo

| Name | Description | Value |
|-|-|-|
| imageName | Name of the IoT edge agent image. | string (required) |
| imageRepository | Image repository details. | ImageRepositoryCredential |
| tag | Image Tag. | string (required) |


### ImageRepositoryCredential

| Name | Description | Value |
|-|-|-|
| imageRepositoryUrl | Image repository url (e.g.: mcr.microsoft.com). | string (required) |
| password | Repository user password. | AsymmetricEncryptedSecret |
| userName | Repository user name. | string (required) |


### MountPointMap

| Name | Description | Value |
|-|-|-|
| shareId | ID of the share mounted to the role VM. | string (required) |


### KubernetesRole

| Name | Description | Value |
|-|-|-|
| kind | Role type. | 'Kubernetes' (required) |
| properties | Properties specific to Kubernetes role. | KubernetesRoleProperties |


### KubernetesRoleProperties

| Name | Description | Value |
|-|-|-|
| hostPlatform | Host OS supported by the Kubernetes role. | 'Linux''Windows' (required) |
| kubernetesClusterInfo | Kubernetes cluster configuration | KubernetesClusterInfo(required) |
| kubernetesRoleResources | Kubernetes role resources | KubernetesRoleResources(required) |
| roleStatus | Role status. | 'Disabled''Enabled' (required) |


### KubernetesClusterInfo

| Name | Description | Value |
|-|-|-|
| version | Kubernetes cluster version | string (required) |


### KubernetesRoleResources

| Name | Description | Value |
|-|-|-|
| compute | Kubernetes role compute resource | KubernetesRoleCompute(required) |
| storage | Kubernetes role storage resource | KubernetesRoleStorage |


### KubernetesRoleCompute

| Name | Description | Value |
|-|-|-|
| vmProfile | VM profile | string (required) |


### KubernetesRoleStorage

| Name | Description | Value |
|-|-|-|
| endpoints | Mount points of shares in role(s). | MountPointMap[] |


### MECRole

| Name | Description | Value |
|-|-|-|
| kind | Role type. | 'MEC' (required) |
| properties | Properties specific to MEC role. | MECRoleProperties |


### MECRoleProperties

| Name | Description | Value |
|-|-|-|
| connectionString | Activation key of the MEC. | AsymmetricEncryptedSecret |
| controllerEndpoint | Controller Endpoint. | string |
| resourceUniqueId | Unique Id of the Resource. | string |
| roleStatus | Role status. | 'Disabled''Enabled' (required) |
## Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/addons@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/addons@2022-12-01-preview"
  name = "string"
  parent_id = "string"
  // For remaining properties, see dataBoxEdgeDevices/roles/addons objects
  body = jsonencode({
    kind = "string"
  })
}

```

### dataBoxEdgeDevices/roles/addons

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Set the object type | ArcForKubernetes(required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:roles |


### ArcAddon

| Name | Description | Value |
|-|-|-|
| kind | Addon type. | 'ArcForKubernetes' (required) |
| properties | Properties specific to Arc addon. | ArcAddonProperties(required) |


### ArcAddonProperties

| Name | Description | Value |
|-|-|-|
| resourceGroupName | Arc resource group name | string (required) |
| resourceLocation | Arc resource location | string (required) |
| resourceName | Arc resource Name | string (required) |
| subscriptionId | Arc resource subscription Id | string (required) |
## Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/monitoringConfig@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/monitoringConfig@2022-12-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      metricConfigurations = [
        {
          counterSets = [
            {
              counters = [
                {
                  additionalDimensions = [
                    {
                      sourceName = "string"
                      sourceType = "string"
                    }
                  ]
                  dimensionFilter = [
                    {
                      sourceName = "string"
                      sourceType = "string"
                    }
                  ]
                  instance = "string"
                  name = "string"
                }
              ]
            }
          ]
          mdmAccount = "string"
          metricNameSpace = "string"
          resourceId = "string"
        }
      ]
    }
  })
}

```

### dataBoxEdgeDevices/roles/monitoringConfig

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:roles |
| properties | The metric setting properties. | MonitoringMetricConfigurationProperties(required) |


### MonitoringMetricConfigurationProperties

| Name | Description | Value |
|-|-|-|
| metricConfigurations | The metrics configuration details | MetricConfiguration[] (required) |


### MetricConfiguration

| Name | Description | Value |
|-|-|-|
| counterSets | Host name for the IoT hub associated to the device. | MetricCounterSet[] (required) |
| mdmAccount | The MDM account to which the counters should be pushed. | string |
| metricNameSpace | The MDM namespace to which the counters should be pushed. This is required if MDMAccount is specified | string |
| resourceId | The Resource ID on which the metrics should be pushed. | string (required) |


### MetricCounterSet

| Name | Description | Value |
|-|-|-|
| counters | The counters that should be collected in this set. | MetricCounter[] (required) |


### MetricCounter

| Name | Description | Value |
|-|-|-|
| additionalDimensions | The additional dimensions to be added to metric. | MetricDimension[] |
| dimensionFilter | The dimension filter. | MetricDimension[] |
| instance | The instance from which counter should be collected. | string |
| name | The counter name. | string (required) |


### MetricDimension

| Name | Description | Value |
|-|-|-|
| sourceName | The dimension value. | string (required) |
| sourceType | The dimension type. | string (required) |
## Microsoft.DataBoxEdge/dataBoxEdgeDevices/shares@2022-12-01-preview

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
## Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccountCredentials@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccountCredentials@2022-12-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      accountKey = {
        encryptionAlgorithm = "string"
        encryptionCertThumbprint = "string"
        value = "string"
      }
      accountType = "string"
      alias = "string"
      blobDomainName = "string"
      connectionString = "string"
      sslStatus = "string"
      storageAccountId = "string"
      userName = "string"
    }
  })
}

```

### dataBoxEdgeDevices/storageAccountCredentials

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dataBoxEdgeDevices |
| properties | The storage account credential properties. | StorageAccountCredentialProperties(required) |


### StorageAccountCredentialProperties

| Name | Description | Value |
|-|-|-|
| accountKey | Encrypted storage key. | AsymmetricEncryptedSecret |
| accountType | Type of storage accessed on the storage account. | 'BlobStorage''GeneralPurposeStorage' (required) |
| alias | Alias for the storage account. | string (required) |
| blobDomainName | Blob end point for private clouds. | string |
| connectionString | Connection string for the storage account. Use this string if username and account key are not specified. | string |
| sslStatus | Signifies whether SSL needs to be enabled or not. | 'Disabled''Enabled' (required) |
| storageAccountId | Id of the storage account. | string |
| userName | Username for the storage account. | string |


### AsymmetricEncryptedSecret

| Name | Description | Value |
|-|-|-|
| encryptionAlgorithm | The algorithm used to encrypt "Value". | 'AES256''None''RSAES_PKCS1_v_1_5' (required) |
| encryptionCertThumbprint | Thumbprint certificate used to encrypt "Value". If the value is unencrypted, it will be null. | string |
| value | The value of the secret. | string (required) |
## Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts@2022-12-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      dataPolicy = "string"
      description = "string"
      storageAccountCredentialId = "string"
      storageAccountStatus = "string"
    }
  })
}

```

### dataBoxEdgeDevices/storageAccounts

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dataBoxEdgeDevices |
| properties | The Storage Account properties. | StorageAccountProperties(required) |


### StorageAccountProperties

| Name | Description | Value |
|-|-|-|
| dataPolicy | Data policy of the storage Account. | 'Cloud''Local' (required) |
| description | Description for the storage Account. | string |
| storageAccountCredentialId | Storage Account Credential Id | string |
| storageAccountStatus | Current status of the storage account | 'NeedsAttention''OK''Offline''Unknown''Updating' |
## Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts/containers@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts/containers@2022-12-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      dataFormat = "string"
    }
  })
}

```

### dataBoxEdgeDevices/storageAccounts/containers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:storageAccounts |
| properties | The container properties. | ContainerProperties(required) |


### ContainerProperties

| Name | Description | Value |
|-|-|-|
| dataFormat | DataFormat for Container | 'AzureFile''BlockBlob''PageBlob' (required) |
## Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers@2022-12-01-preview"
  name = "string"
  parent_id = "string"
  // For remaining properties, see dataBoxEdgeDevices/triggers objects
  body = jsonencode({
    kind = "string"
  })
}

```

### dataBoxEdgeDevices/triggers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Set the object type | FileEventPeriodicTimerEvent(required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dataBoxEdgeDevices |


### FileEventTrigger

| Name | Description | Value |
|-|-|-|
| kind | Trigger Kind. | 'FileEvent' (required) |
| properties | File trigger properties. | FileTriggerProperties(required) |


### FileTriggerProperties

| Name | Description | Value |
|-|-|-|
| customContextTag | A custom context tag typically used to correlate the trigger against its usage. For example, if a periodic timer trigger is intended for certain specific IoT modules in the device, the tag can be the name or the image URL of the module. | string |
| sinkInfo | Role sink info. | RoleSinkInfo(required) |
| sourceInfo | File event source details. | FileSourceInfo(required) |


### RoleSinkInfo

| Name | Description | Value |
|-|-|-|
| roleId | Compute role ID. | string (required) |


### FileSourceInfo

| Name | Description | Value |
|-|-|-|
| shareId | File share ID. | string (required) |


### PeriodicTimerEventTrigger

| Name | Description | Value |
|-|-|-|
| kind | Trigger Kind. | 'PeriodicTimerEvent' (required) |
| properties | Periodic timer trigger properties. | PeriodicTimerProperties(required) |


### PeriodicTimerProperties

| Name | Description | Value |
|-|-|-|
| customContextTag | A custom context tag typically used to correlate the trigger against its usage. For example, if a periodic timer trigger is intended for certain specific IoT modules in the device, the tag can be the name or the image URL of the module. | string |
| sinkInfo | Role Sink information. | RoleSinkInfo(required) |
| sourceInfo | Periodic timer details. | PeriodicTimerSourceInfo(required) |


### PeriodicTimerSourceInfo

| Name | Description | Value |
|-|-|-|
| schedule | Periodic frequency at which timer event needs to be raised. Supports daily, hourly, minutes, and seconds. | string (required) |
| startTime | The time of the day that results in a valid trigger. Schedule is computed with reference to the time specified upto seconds. If timezone is not specified the time will considered to be in device timezone. The value will always be returned as UTC time. | string (required) |
| topic | Topic where periodic events are published to IoT device. | string |
## Microsoft.DataBoxEdge/dataBoxEdgeDevices/users@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/users@2022-12-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      encryptedPassword = {
        encryptionAlgorithm = "string"
        encryptionCertThumbprint = "string"
        value = "string"
      }
      userType = "string"
    }
  })
}

```

### dataBoxEdgeDevices/users

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dataBoxEdgeDevices |
| properties | The storage account credential properties. | UserProperties(required) |


### UserProperties

| Name | Description | Value |
|-|-|-|
| encryptedPassword | The password details. | AsymmetricEncryptedSecret |
| userType | Type of the user. | 'ARM''LocalManagement''Share' (required) |


### AsymmetricEncryptedSecret

| Name | Description | Value |
|-|-|-|
| encryptionAlgorithm | The algorithm used to encrypt "Value". | 'AES256''None''RSAES_PKCS1_v_1_5' (required) |
| encryptionCertThumbprint | Thumbprint certificate used to encrypt "Value". If the value is unencrypted, it will be null. | string |
| value | The value of the secret. | string (required) |
