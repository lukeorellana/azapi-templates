```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/computes@2023-10-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      computeLocation = "string"
      description = "string"
      disableLocalAuth = bool
      resourceId = "string"
      computeType = "string"
      // For remaining properties, see Compute objects
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
  })
}

```

### workspaces/computes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 3-24 for compute instance3-32 for AML compute2-16 for other compute typesValid characters:Alphanumerics and hyphens. |
| location | Specifies the location of the resource. | string |
| tags | Contains resource tags defined as key/value pairs. | Dictionary of tag names and values. SeeTags in templates |
| sku | The sku of the workspace. | Sku |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| identity | The identity of the resource. | ManagedServiceIdentity |
| properties | Compute properties | Compute |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### Compute

| Name | Description | Value |
|-|-|-|
| computeLocation | Location for the underlying compute | string |
| description | The description of the Machine Learning compute. | string |
| disableLocalAuth | Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication. | bool |
| resourceId | ARM resource id of the underlying compute | string |
| computeType | Set the object type | AKSAmlComputeComputeInstanceDatabricksDataFactoryDataLakeAnalyticsHDInsightKubernetesSynapseSparkVirtualMachine(required) |


### AKS

| Name | Description | Value |
|-|-|-|
| computeType | The type of compute | 'AKS' (required) |
| properties | AKS properties | AKSSchemaProperties |


### AKSSchemaProperties

| Name | Description | Value |
|-|-|-|
| agentCount | Number of agents | intConstraints:Min value = 0 |
| agentVmSize | Agent virtual machine size | string |
| aksNetworkingConfiguration | AKS networking configuration for vnet | AksNetworkingConfiguration |
| clusterFqdn | Cluster full qualified domain name | string |
| clusterPurpose | Intended usage of the cluster | 'DenseProd''DevTest''FastProd' |
| loadBalancerSubnet | Load Balancer Subnet | string |
| loadBalancerType | Load Balancer Type | 'InternalLoadBalancer''PublicIp' |
| sslConfiguration | SSL configuration | SslConfiguration |


### AksNetworkingConfiguration

| Name | Description | Value |
|-|-|-|
| dnsServiceIP | An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr. | stringConstraints:Pattern =^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$ |
| dockerBridgeCidr | A CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the Kubernetes service address range. | stringConstraints:Pattern =^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$ |
| serviceCidr | A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges. | stringConstraints:Pattern =^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$ |
| subnetId | Virtual network subnet resource ID the compute nodes belong to | string |


### SslConfiguration

| Name | Description | Value |
|-|-|-|
| cert | Cert data | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| cname | CNAME of the cert | string |
| key | Key data | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| leafDomainLabel | Leaf domain label of public endpoint | string |
| overwriteExistingDomain | Indicates whether to overwrite existing domain label. | bool |
| status | Enable or disable ssl for scoring | 'Auto''Disabled''Enabled' |


### AmlCompute

| Name | Description | Value |
|-|-|-|
| computeType | The type of compute | 'AmlCompute' (required) |
| properties | Properties of AmlCompute | AmlComputeProperties |


### AmlComputeProperties

| Name | Description | Value |
|-|-|-|
| enableNodePublicIp | Enable or disable node public IP address provisioning. Possible values are: Possible values are: true - Indicates that the compute nodes will have public IPs provisioned. false - Indicates that the compute nodes will have a private endpoint and no public IPs. | bool |
| isolatedNetwork | Network is isolated or not | bool |
| osType | Compute OS Type | 'Linux''Windows' |
| propertyBag | A property bag containing additional properties. | For Bicep, you can use theany()function. |
| remoteLoginPortPublicAccess | State of the public SSH port. Possible values are: Disabled - Indicates that the public ssh port is closed on all nodes of the cluster. Enabled - Indicates that the public ssh port is open on all nodes of the cluster. NotSpecified - Indicates that the public ssh port is closed on all nodes of the cluster if VNet is defined, else is open all public nodes. It can be default only during cluster creation time, after creation it will be either enabled or disabled. | 'Disabled''Enabled''NotSpecified' |
| scaleSettings | Scale settings for AML Compute | ScaleSettings |
| subnet | Virtual network subnet resource ID the compute nodes belong to. | ResourceId |
| userAccountCredentials | Credentials for an administrator user account that will be created on each compute node. | UserAccountCredentials |
| virtualMachineImage | Virtual Machine image for AML Compute - windows only | VirtualMachineImage |
| vmPriority | Virtual Machine priority | 'Dedicated''LowPriority' |
| vmSize | Virtual Machine Size | string |


### ScaleSettings

| Name | Description | Value |
|-|-|-|
| maxNodeCount | Max number of nodes to use | int (required) |
| minNodeCount | Min number of nodes to use | int |
| nodeIdleTimeBeforeScaleDown | Node Idle Time before scaling down amlCompute. This string needs to be in the RFC Format. | string |


### ResourceId

| Name | Description | Value |
|-|-|-|
| id | The ID of the resource | string (required) |


### UserAccountCredentials

| Name | Description | Value |
|-|-|-|
| adminUserName | Name of the administrator user account which can be used to SSH to nodes. | string (required) |
| adminUserPassword | Password of the administrator user account. | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| adminUserSshPublicKey | SSH public key of the administrator user account. | stringConstraints:Sensitive value. Pass in as a secure parameter. |


### VirtualMachineImage

| Name | Description | Value |
|-|-|-|
| id | Virtual Machine image path | string (required) |


### ComputeInstance

| Name | Description | Value |
|-|-|-|
| computeType | The type of compute | 'ComputeInstance' (required) |
| properties | Properties of ComputeInstance | ComputeInstanceProperties |


### ComputeInstanceProperties

| Name | Description | Value |
|-|-|-|
| applicationSharingPolicy | Policy for sharing applications on this compute instance among users of parent workspace. If Personal, only the creator can access applications on this compute instance. When Shared, any workspace user can access applications on this instance depending on his/her assigned role. | 'Personal''Shared' |
| computeInstanceAuthorizationType | The Compute Instance Authorization type. Available values are personal (default). | 'personal' |
| customServices | List of Custom Services added to the compute. | CustomService[] |
| enableNodePublicIp | Enable or disable node public IP address provisioning. Possible values are: Possible values are: true - Indicates that the compute nodes will have public IPs provisioned. false - Indicates that the compute nodes will have a private endpoint and no public IPs. | bool |
| personalComputeInstanceSettings | Settings for a personal compute instance. | PersonalComputeInstanceSettings |
| schedules | The list of schedules to be applied on the computes. | ComputeSchedules |
| setupScripts | Details of customized scripts to execute for setting up the cluster. | SetupScripts |
| sshSettings | Specifies policy and settings for SSH access. | ComputeInstanceSshSettings |
| subnet | Virtual network subnet resource ID the compute nodes belong to. | ResourceId |
| vmSize | Virtual Machine Size | string |


### CustomService

| Name | Description | Value |
|-|-|-|
| docker | Describes the docker settings for the image | Docker |
| endpoints | Configuring the endpoints for the container | Endpoint[] |
| environmentVariables | Environment Variable for the container | CustomServiceEnvironmentVariables |
| image | Describes the Image Specifications | Image |
| name | Name of the Custom Service | string |
| volumes | Configuring the volumes for the container | VolumeDefinition[] |
| {customized property} |  | For Bicep, you can use theany()function. |


### Docker

| Name | Description | Value |
|-|-|-|
| privileged | Indicate whether container shall run in privileged or non-privileged mode. | bool |
| {customized property} |  | For Bicep, you can use theany()function. |


### Endpoint

| Name | Description | Value |
|-|-|-|
| hostIp | Host IP over which the application is exposed from the container | string |
| name | Name of the Endpoint | string |
| protocol | Protocol over which communication will happen over this endpoint | 'http''tcp''udp' |
| published | Port over which the application is exposed from container. | int |
| target | Application port inside the container. | int |


### CustomServiceEnvironmentVariables

| Name | Description | Value |
|-|-|-|
| {customized property} |  | EnvironmentVariable |


### EnvironmentVariable

| Name | Description | Value |
|-|-|-|
| type | Type of the Environment Variable. Possible values are: local - For local variable | 'local' |
| value | Value of the Environment variable | string |
| {customized property} |  | For Bicep, you can use theany()function. |


### Image

| Name | Description | Value |
|-|-|-|
| reference | Image reference | string |
| type | Type of the image. Possible values are: docker - For docker images. azureml - For AzureML images | 'azureml''docker' |
| {customized property} |  | For Bicep, you can use theany()function. |


### VolumeDefinition

| Name | Description | Value |
|-|-|-|
| bind | Bind Options of the mount | BindOptions |
| consistency | Consistency of the volume | string |
| readOnly | Indicate whether to mount volume as readOnly. Default value for this is false. | bool |
| source | Source of the mount. For bind mounts this is the host path. | string |
| target | Target of the mount. For bind mounts this is the path in the container. | string |
| tmpfs | tmpfs option of the mount | TmpfsOptions |
| type | Type of Volume Definition. Possible Values: bind,volume,tmpfs,npipe | 'bind''npipe''tmpfs''volume' |
| volume | Volume Options of the mount | VolumeOptions |


### BindOptions

| Name | Description | Value |
|-|-|-|
| createHostPath | Indicate whether to create host path. | bool |
| propagation | Type of Bind Option | string |
| selinux | Mention the selinux options. | string |


### TmpfsOptions

| Name | Description | Value |
|-|-|-|
| size | Mention the Tmpfs size | int |


### VolumeOptions

| Name | Description | Value |
|-|-|-|
| nocopy | Indicate whether volume is nocopy | bool |


### PersonalComputeInstanceSettings

| Name | Description | Value |
|-|-|-|
| assignedUser | A user explicitly assigned to a personal compute instance. | AssignedUser |


### AssignedUser

| Name | Description | Value |
|-|-|-|
| objectId | Userâs AAD Object Id. | string (required) |
| tenantId | Userâs AAD Tenant Id. | string (required) |


### ComputeSchedules

| Name | Description | Value |
|-|-|-|
| computeStartStop | The list of compute start stop schedules to be applied. | ComputeStartStopSchedule[] |


### ComputeStartStopSchedule

| Name | Description | Value |
|-|-|-|
| action | [Required] The compute power action. | 'Start''Stop' |
| cron | Required if triggerType is Cron. | Cron |
| recurrence | Required if triggerType is Recurrence. | Recurrence |
| schedule | [Deprecated] Not used any more. | ScheduleBase |
| status | Is the schedule enabled or disabled? | 'Disabled''Enabled' |
| triggerType | [Required] The schedule trigger type. | 'Cron''Recurrence' |


### Cron

| Name | Description | Value |
|-|-|-|
| expression | [Required] Specifies cron expression of schedule.The expression should follow NCronTab format. | string |
| startTime | The start time in yyyy-MM-ddTHH:mm:ss format. | string |
| timeZone | Specifies time zone in which the schedule runs.TimeZone should follow Windows time zone format. Refer:https://docs.microsoft.com/windows-hardware/manufacture/desktop/default-time-zones/> | string |


### Recurrence

| Name | Description | Value |
|-|-|-|
| frequency | [Required] The frequency to trigger schedule. | 'Day''Hour''Minute''Month''Week' |
| interval | [Required] Specifies schedule interval in conjunction with frequency | int |
| schedule | [Required] The recurrence schedule. | ComputeRecurrenceSchedule |
| startTime | The start time in yyyy-MM-ddTHH:mm:ss format. | string |
| timeZone | Specifies time zone in which the schedule runs.TimeZone should follow Windows time zone format. Refer:https://docs.microsoft.com/windows-hardware/manufacture/desktop/default-time-zones/> | string |


### ComputeRecurrenceSchedule

| Name | Description | Value |
|-|-|-|
| hours | [Required] List of hours for the schedule. | int[] (required) |
| minutes | [Required] List of minutes for the schedule. | int[] (required) |
| monthDays | List of month days for the schedule | int[] |
| weekDays | List of days for the schedule. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |


### ScheduleBase

| Name | Description | Value |
|-|-|-|
| id | A system assigned id for the schedule. | string |
| provisioningStatus | The current deployment state of schedule. | 'Completed''Failed''Provisioning' |
| status | Is the schedule enabled or disabled? | 'Disabled''Enabled' |


### SetupScripts

| Name | Description | Value |
|-|-|-|
| scripts | Customized setup scripts | ScriptsToExecute |


### ScriptsToExecute

| Name | Description | Value |
|-|-|-|
| creationScript | Script that's run only once during provision of the compute. | ScriptReference |
| startupScript | Script that's run every time the machine starts. | ScriptReference |


### ScriptReference

| Name | Description | Value |
|-|-|-|
| scriptArguments | Optional command line arguments passed to the script to run. | string |
| scriptData | The location of scripts in the mounted volume. | string |
| scriptSource | The storage source of the script: workspace. | string |
| timeout | Optional time period passed to timeout command. | string |


### ComputeInstanceSshSettings

| Name | Description | Value |
|-|-|-|
| adminPublicKey | Specifies the SSH rsa public key file as a string. Use "ssh-keygen -t rsa -b 2048" to generate your SSH key pairs. | string |
| sshPublicAccess | State of the public SSH port. Possible values are: Disabled - Indicates that the public ssh port is closed on this instance. Enabled - Indicates that the public ssh port is open and accessible according to the VNet/subnet policy if applicable. | 'Disabled''Enabled' |


### Databricks

| Name | Description | Value |
|-|-|-|
| computeType | The type of compute | 'Databricks' (required) |
| properties | Properties of Databricks | DatabricksProperties |


### DatabricksProperties

| Name | Description | Value |
|-|-|-|
| databricksAccessToken | Databricks access token | string |
| workspaceUrl | Workspace Url | string |


### DataFactory

| Name | Description | Value |
|-|-|-|
| computeType | The type of compute | 'DataFactory' (required) |


### DataLakeAnalytics

| Name | Description | Value |
|-|-|-|
| computeType | The type of compute | 'DataLakeAnalytics' (required) |
| properties |  | DataLakeAnalyticsSchemaProperties |


### DataLakeAnalyticsSchemaProperties

| Name | Description | Value |
|-|-|-|
| dataLakeStoreAccountName | DataLake Store Account Name | string |


### HDInsight

| Name | Description | Value |
|-|-|-|
| computeType | The type of compute | 'HDInsight' (required) |
| properties | HDInsight compute properties | HDInsightProperties |


### HDInsightProperties

| Name | Description | Value |
|-|-|-|
| address | Public IP address of the master node of the cluster. | string |
| administratorAccount | Admin credentials for master node of the cluster | VirtualMachineSshCredentials |
| sshPort | Port open for ssh connections on the master node of the cluster. | int |


### VirtualMachineSshCredentials

| Name | Description | Value |
|-|-|-|
| password | Password of admin account | string |
| privateKeyData | Private key data | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| publicKeyData | Public key data | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| username | Username of admin account | string |


### Kubernetes

| Name | Description | Value |
|-|-|-|
| computeType | The type of compute | 'Kubernetes' (required) |
| properties | Properties of Kubernetes | KubernetesProperties |


### KubernetesProperties

| Name | Description | Value |
|-|-|-|
| defaultInstanceType | Default instance type | string |
| extensionInstanceReleaseTrain | Extension instance release train. | string |
| extensionPrincipalId | Extension principal-id. | string |
| instanceTypes | Instance Type Schema | KubernetesPropertiesInstanceTypes |
| namespace | Compute namespace | string |
| relayConnectionString | Relay connection string. | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| serviceBusConnectionString | ServiceBus connection string. | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| vcName | VC name. | string |


### KubernetesPropertiesInstanceTypes

| Name | Description | Value |
|-|-|-|
| {customized property} |  | InstanceTypeSchema |


### InstanceTypeSchema

| Name | Description | Value |
|-|-|-|
| nodeSelector | Node Selector | InstanceTypeSchemaNodeSelector |
| resources | Resource requests/limits for this instance type | InstanceTypeSchemaResources |


### InstanceTypeSchemaNodeSelector

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### InstanceTypeSchemaResources

| Name | Description | Value |
|-|-|-|
| limits | Resource limits for this instance type | InstanceResourceSchema |
| requests | Resource requests for this instance type | InstanceResourceSchema |


### InstanceResourceSchema

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |


### SynapseSpark

| Name | Description | Value |
|-|-|-|
| computeType | The type of compute | 'SynapseSpark' (required) |
| properties |  | SynapseSparkProperties |


### SynapseSparkProperties

| Name | Description | Value |
|-|-|-|
| autoPauseProperties | Auto pause properties. | AutoPauseProperties |
| autoScaleProperties | Auto scale properties. | AutoScaleProperties |
| nodeCount | The number of compute nodes currently assigned to the compute. | int |
| nodeSize | Node size. | string |
| nodeSizeFamily | Node size family. | string |
| poolName | Pool name. | string |
| resourceGroup | Name of the resource group in which workspace is located. | string |
| sparkVersion | Spark version. | string |
| subscriptionId | Azure subscription identifier. | string |
| workspaceName | Name of Azure Machine Learning workspace. | string |


### AutoPauseProperties

| Name | Description | Value |
|-|-|-|
| delayInMinutes |  | int |
| enabled |  | bool |


### AutoScaleProperties

| Name | Description | Value |
|-|-|-|
| enabled |  | bool |
| maxNodeCount |  | int |
| minNodeCount |  | int |


### VirtualMachine

| Name | Description | Value |
|-|-|-|
| computeType | The type of compute | 'VirtualMachine' (required) |
| properties |  | VirtualMachineSchemaProperties |


### VirtualMachineSchemaProperties

| Name | Description | Value |
|-|-|-|
| address | Public IP address of the virtual machine. | string |
| administratorAccount | Admin credentials for virtual machine | VirtualMachineSshCredentials |
| isNotebookInstanceCompute | Indicates whether this compute will be used for running notebooks. | bool |
| notebookServerPort | Notebook server port open for ssh connections. | int |
| sshPort | Port open for ssh connections. | int |
| virtualMachineSize | Virtual Machine size | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Free''Premium''Standard' |


