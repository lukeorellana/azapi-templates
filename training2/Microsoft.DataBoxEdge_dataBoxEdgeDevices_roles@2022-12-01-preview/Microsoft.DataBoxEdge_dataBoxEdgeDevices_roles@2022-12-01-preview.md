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


