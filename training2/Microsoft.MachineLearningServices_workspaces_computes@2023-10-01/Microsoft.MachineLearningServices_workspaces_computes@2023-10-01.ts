import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * The sku of the workspace.
   */
readonly sku?: Sku;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * The identity of the resource.
   */
readonly identity?: ManagedServiceIdentity;

/**
   * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
   */
readonly type: 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned';

/**
   * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
   */
readonly userAssignedIdentities?: UserAssignedIdentities;

/**
   * 
   */
readonly {customized property}?: UserAssignedIdentity;

/**
   * Location for the underlying compute
   */
readonly computeLocation?: string;

/**
   * The description of the Machine Learning compute.
   */
readonly description?: string;

/**
   * Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
   */
readonly disableLocalAuth?: bool;

/**
   * ARM resource id of the underlying compute
   */
readonly resourceId?: string;

/**
   * Set the object type
   */
readonly computeType: AKSAmlComputeComputeInstanceDatabricksDataFactoryDataLakeAnalyticsHDInsightKubernetesSynapseSparkVirtualMachine;

/**
   * The type of compute
   */
readonly computeType: 'AKS';

/**
   * Number of agents
   */
readonly agentCount?: numberConstranumbers:Min value = 0;

/**
   * Agent virtual machine size
   */
readonly agentVmSize?: string;

/**
   * AKS networking configuration for vnet
   */
readonly aksNetworkingConfiguration?: AksNetworkingConfiguration;

/**
   * Cluster full qualified domain name
   */
readonly clusterFqdn?: string;

/**
   * Intended usage of the cluster
   */
readonly clusterPurpose?: 'DenseProd''DevTest''FastProd';

/**
   * Load Balancer Subnet
   */
readonly loadBalancerSubnet?: string;

/**
   * Load Balancer Type
   */
readonly loadBalancerType?: 'InternalLoadBalancer''PublicIp';

/**
   * SSL configuration
   */
readonly sslConfiguration?: SslConfiguration;

/**
   * An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
   */
readonly dnsServiceIP?: stringConstranumbers:Pattern =^(?:(?:25[0-5];

/**
   * A CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the Kubernetes service address range.
   */
readonly dockerBridgeCidr?: stringConstranumbers:Pattern =^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9];

/**
   * A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
   */
readonly serviceCidr?: stringConstranumbers:Pattern =^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9];

/**
   * Virtual network subnet resource ID the compute nodes belong to
   */
readonly subnetId?: string;

/**
   * Cert data
   */
readonly cert?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;

/**
   * CNAME of the cert
   */
readonly cname?: string;

/**
   * Key data
   */
readonly key?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;

/**
   * Leaf domain label of public endpoint
   */
readonly leafDomainLabel?: string;

/**
   * Indicates whether to overwrite existing domain label.
   */
readonly overwriteExistingDomain?: bool;

/**
   * Enable or disable ssl for scoring
   */
readonly status?: 'Auto''Disabled''Enabled';

/**
   * The type of compute
   */
readonly computeType: 'AmlCompute';

/**
   * Enable or disable node public IP address provisioning. Possible values are: Possible values are: true - Indicates that the compute nodes will have public IPs provisioned. false - Indicates that the compute nodes will have a private endpoint and no public IPs.
   */
readonly enableNodePublicIp?: bool;

/**
   * Network is isolated or not
   */
readonly isolatedNetwork?: bool;

/**
   * Compute OS Type
   */
readonly osType?: 'Linux''Windows';

/**
   * A property bag containing additional properties.
   */
readonly propertyBag?: For Bicep, you can use theany()function.;

/**
   * State of the public SSH port. Possible values are: Disabled - Indicates that the public ssh port is closed on all nodes of the cluster. Enabled - Indicates that the public ssh port is open on all nodes of the cluster. NotSpecified - Indicates that the public ssh port is closed on all nodes of the cluster if VNet is defined, else is open all public nodes. It can be default only during cluster creation time, after creation it will be either enabled or disabled.
   */
readonly remoteLoginPortPublicAccess?: 'Disabled''Enabled''NotSpecified';

/**
   * Scale settings for AML Compute
   */
readonly scaleSettings?: ScaleSettings;

/**
   * Virtual network subnet resource ID the compute nodes belong to.
   */
readonly subnet?: ResourceId;

/**
   * Credentials for an administrator user account that will be created on each compute node.
   */
readonly userAccountCredentials?: UserAccountCredentials;

/**
   * Virtual Machine image for AML Compute - windows only
   */
readonly virtualMachineImage?: VirtualMachineImage;

/**
   * Virtual Machine priority
   */
readonly vmPriority?: 'Dedicated''LowPriority';

/**
   * Virtual Machine Size
   */
readonly vmSize?: string;

/**
   * Max number of nodes to use
   */
readonly maxNodeCount: number;

/**
   * Min number of nodes to use
   */
readonly minNodeCount?: number;

/**
   * Node Idle Time before scaling down amlCompute. This string needs to be in the RFC Format.
   */
readonly nodeIdleTimeBeforeScaleDown?: string;

/**
   * The ID of the resource
   */
readonly id: string;

/**
   * Name of the administrator user account which can be used to SSH to nodes.
   */
readonly adminUserName: string;

/**
   * Password of the administrator user account.
   */
readonly adminUserPassword?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;

/**
   * SSH public key of the administrator user account.
   */
readonly adminUserSshPublicKey?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;

/**
   * Virtual Machine image path
   */
readonly id: string;

/**
   * The type of compute
   */
readonly computeType: 'ComputeInstance';

/**
   * Policy for sharing applications on this compute instance among users of parent workspace. If Personal, only the creator can access applications on this compute instance. When Shared, any workspace user can access applications on this instance depending on his/her assigned role.
   */
readonly applicationSharingPolicy?: 'Personal''Shared';

/**
   * The Compute Instance Authorization type. Available values are personal (default).
   */
readonly computeInstanceAuthorizationType?: 'personal';

/**
   * List of Custom Services added to the compute.
   */
readonly customServices?: CustomService[];

/**
   * Enable or disable node public IP address provisioning. Possible values are: Possible values are: true - Indicates that the compute nodes will have public IPs provisioned. false - Indicates that the compute nodes will have a private endpoint and no public IPs.
   */
readonly enableNodePublicIp?: bool;

/**
   * Settings for a personal compute instance.
   */
readonly personalComputeInstanceSettings?: PersonalComputeInstanceSettings;

/**
   * The list of schedules to be applied on the computes.
   */
readonly schedules?: ComputeSchedules;

/**
   * Details of customized scripts to execute for setting up the cluster.
   */
readonly setupScripts?: SetupScripts;

/**
   * Specifies policy and settings for SSH access.
   */
readonly sshSettings?: ComputeInstanceSshSettings;

/**
   * Virtual network subnet resource ID the compute nodes belong to.
   */
readonly subnet?: ResourceId;

/**
   * Virtual Machine Size
   */
readonly vmSize?: string;

/**
   * Describes the docker settings for the image
   */
readonly docker?: Docker;

/**
   * Configuring the endpoints for the container
   */
readonly endpoints?: Endponumber[];

/**
   * Environment Variable for the container
   */
readonly environmentVariables?: CustomServiceEnvironmentVariables;

/**
   * Describes the Image Specifications
   */
readonly image?: Image;

/**
   * Configuring the volumes for the container
   */
readonly volumes?: VolumeDefinition[];

/**
   * 
   */
readonly {customized property}?: For Bicep, you can use theany()function.;

/**
   * Indicate whether container shall run in privileged or non-privileged mode.
   */
readonly privileged?: bool;

/**
   * 
   */
readonly {customized property}?: For Bicep, you can use theany()function.;

/**
   * Host IP over which the application is exposed from the container
   */
readonly hostIp?: string;

/**
   * Protocol over which communication will happen over this endpoint
   */
readonly protocol?: 'http''tcp''udp';

/**
   * Port over which the application is exposed from container.
   */
readonly published?: number;

/**
   * Application port inside the container.
   */
readonly target?: number;

/**
   * 
   */
readonly {customized property}?: EnvironmentVariable;

/**
   * Type of the Environment Variable. Possible values are: local - For local variable
   */
readonly type?: 'local';

/**
   * Value of the Environment variable
   */
readonly value?: string;

/**
   * 
   */
readonly {customized property}?: For Bicep, you can use theany()function.;

/**
   * Image reference
   */
readonly reference?: string;

/**
   * Type of the image. Possible values are: docker - For docker images. azureml - For AzureML images
   */
readonly type?: 'azureml''docker';

/**
   * 
   */
readonly {customized property}?: For Bicep, you can use theany()function.;

/**
   * Bind Options of the mount
   */
readonly bind?: BindOptions;

/**
   * Consistency of the volume
   */
readonly consistency?: string;

/**
   * Indicate whether to mount volume as readOnly. Default value for this is false.
   */
readonly readOnly?: bool;

/**
   * Source of the mount. For bind mounts this is the host path.
   */
readonly source?: string;

/**
   * Target of the mount. For bind mounts this is the path in the container.
   */
readonly target?: string;

/**
   * tmpfs option of the mount
   */
readonly tmpfs?: TmpfsOptions;

/**
   * Type of Volume Definition. Possible Values: bind,volume,tmpfs,npipe
   */
readonly type?: 'bind''npipe''tmpfs''volume';

/**
   * Volume Options of the mount
   */
readonly volume?: VolumeOptions;

/**
   * Indicate whether to create host path.
   */
readonly createHostPath?: bool;

/**
   * Type of Bind Option
   */
readonly propagation?: string;

/**
   * Mention the selinux options.
   */
readonly selinux?: string;

/**
   * Mention the Tmpfs size
   */
readonly size?: number;

/**
   * Indicate whether volume is nocopy
   */
readonly nocopy?: bool;

/**
   * A user explicitly assigned to a personal compute instance.
   */
readonly assignedUser?: AssignedUser;

/**
   * Userâs AAD Object Id.
   */
readonly objectId: string;

/**
   * Userâs AAD Tenant Id.
   */
readonly tenantId: string;

/**
   * The list of compute start stop schedules to be applied.
   */
readonly computeStartStop?: ComputeStartStopSchedule[];

/**
   * [Required] The compute power action.
   */
readonly action?: 'Start''Stop';

/**
   * Required if triggerType is Cron.
   */
readonly cron?: Cron;

/**
   * Required if triggerType is Recurrence.
   */
readonly recurrence?: Recurrence;

/**
   * [Deprecated] Not used any more.
   */
readonly schedule?: ScheduleBase;

/**
   * Is the schedule enabled or disabled?
   */
readonly status?: 'Disabled''Enabled';

/**
   * [Required] The schedule trigger type.
   */
readonly triggerType?: 'Cron''Recurrence';

/**
   * [Required] Specifies cron expression of schedule.The expression should follow NCronTab format.
   */
readonly expression?: string;

/**
   * The start time in yyyy-MM-ddTHH:mm:ss format.
   */
readonly startTime?: string;

/**
   * Specifies time zone in which the schedule runs.TimeZone should follow Windows time zone format. Refer:https://docs.microsoft.com/windows-hardware/manufacture/desktop/default-time-zones/>
   */
readonly timeZone?: string;

/**
   * [Required] The frequency to trigger schedule.
   */
readonly frequency?: 'Day''Hour''Minute''Month''Week';

/**
   * [Required] Specifies schedule interval in conjunction with frequency
   */
readonly interval?: number;

/**
   * [Required] The recurrence schedule.
   */
readonly schedule?: ComputeRecurrenceSchedule;

/**
   * The start time in yyyy-MM-ddTHH:mm:ss format.
   */
readonly startTime?: string;

/**
   * Specifies time zone in which the schedule runs.TimeZone should follow Windows time zone format. Refer:https://docs.microsoft.com/windows-hardware/manufacture/desktop/default-time-zones/>
   */
readonly timeZone?: string;

/**
   * [Required] List of hours for the schedule.
   */
readonly hours: number[];

/**
   * [Required] List of minutes for the schedule.
   */
readonly minutes: number[];

/**
   * List of month days for the schedule
   */
readonly monthDays?: number[];

/**
   * List of days for the schedule.
   */
readonly weekDays?: String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';

/**
   * A system assigned id for the schedule.
   */
readonly id?: string;

/**
   * The current deployment state of schedule.
   */
readonly provisioningStatus?: 'Completed''Failed''Provisioning';

/**
   * Is the schedule enabled or disabled?
   */
readonly status?: 'Disabled''Enabled';

/**
   * Customized setup scripts
   */
readonly scripts?: ScriptsToExecute;

/**
   * Script that's run only once during provision of the compute.
   */
readonly creationScript?: ScriptReference;

/**
   * Script that's run every time the machine starts.
   */
readonly startupScript?: ScriptReference;

/**
   * Optional command line arguments passed to the script to run.
   */
readonly scriptArguments?: string;

/**
   * The location of scripts in the mounted volume.
   */
readonly scriptData?: string;

/**
   * The storage source of the script: workspace.
   */
readonly scriptSource?: string;

/**
   * Optional time period passed to timeout command.
   */
readonly timeout?: string;

/**
   * Specifies the SSH rsa public key file as a string. Use "ssh-keygen -t rsa -b 2048" to generate your SSH key pairs.
   */
readonly adminPublicKey?: string;

/**
   * State of the public SSH port. Possible values are: Disabled - Indicates that the public ssh port is closed on this instance. Enabled - Indicates that the public ssh port is open and accessible according to the VNet/subnet policy if applicable.
   */
readonly sshPublicAccess?: 'Disabled''Enabled';

/**
   * The type of compute
   */
readonly computeType: 'Databricks';

/**
   * Databricks access token
   */
readonly databricksAccessToken?: string;

/**
   * Workspace Url
   */
readonly workspaceUrl?: string;

/**
   * The type of compute
   */
readonly computeType: 'DataFactory';

/**
   * The type of compute
   */
readonly computeType: 'DataLakeAnalytics';

/**
   * DataLake Store Account Name
   */
readonly dataLakeStoreAccountName?: string;

/**
   * The type of compute
   */
readonly computeType: 'HDInsight';

/**
   * Public IP address of the master node of the cluster.
   */
readonly address?: string;

/**
   * Admin credentials for master node of the cluster
   */
readonly administratorAccount?: VirtualMachineSshCredentials;

/**
   * Port open for ssh connections on the master node of the cluster.
   */
readonly sshPort?: number;

/**
   * Password of admin account
   */
readonly password?: string;

/**
   * Private key data
   */
readonly privateKeyData?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;

/**
   * Public key data
   */
readonly publicKeyData?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;

/**
   * Username of admin account
   */
readonly username?: string;

/**
   * The type of compute
   */
readonly computeType: 'Kubernetes';

/**
   * Default instance type
   */
readonly defaultInstanceType?: string;

/**
   * Extension instance release train.
   */
readonly extensionInstanceReleaseTrain?: string;

/**
   * Extension principal-id.
   */
readonly extensionPrincipalId?: string;

/**
   * Instance Type Schema
   */
readonly instanceTypes?: KubernetesPropertiesInstanceTypes;

/**
   * Compute namespace
   */
readonly namespace?: string;

/**
   * Relay connection string.
   */
readonly relayConnectionString?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;

/**
   * ServiceBus connection string.
   */
readonly serviceBusConnectionString?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;

/**
   * VC name.
   */
readonly vcName?: string;

/**
   * 
   */
readonly {customized property}?: InstanceTypeSchema;

/**
   * Node Selector
   */
readonly nodeSelector?: InstanceTypeSchemaNodeSelector;

/**
   * Resource requests/limits for this instance type
   */
readonly resources?: InstanceTypeSchemaResources;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * Resource limits for this instance type
   */
readonly limits?: InstanceResourceSchema;

/**
   * Resource requests for this instance type
   */
readonly requests?: InstanceResourceSchema;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * The type of compute
   */
readonly computeType: 'SynapseSpark';

/**
   * Auto pause properties.
   */
readonly autoPauseProperties?: AutoPauseProperties;

/**
   * Auto scale properties.
   */
readonly autoScaleProperties?: AutoScaleProperties;

/**
   * The number of compute nodes currently assigned to the compute.
   */
readonly nodeCount?: number;

/**
   * Node size.
   */
readonly nodeSize?: string;

/**
   * Node size family.
   */
readonly nodeSizeFamily?: string;

/**
   * Pool name.
   */
readonly poolName?: string;

/**
   * Name of the resource group in which workspace is located.
   */
readonly resourceGroup?: string;

/**
   * Spark version.
   */
readonly sparkVersion?: string;

/**
   * Azure subscription identifier.
   */
readonly subscriptionId?: string;

/**
   * Name of Azure Machine Learning workspace.
   */
readonly workspaceName?: string;

/**
   * 
   */
readonly delayInMinutes?: number;

/**
   * 
   */
readonly enabled?: bool;

/**
   * 
   */
readonly enabled?: bool;

/**
   * 
   */
readonly maxNodeCount?: number;

/**
   * 
   */
readonly minNodeCount?: number;

/**
   * The type of compute
   */
readonly computeType: 'VirtualMachine';

/**
   * Public IP address of the virtual machine.
   */
readonly address?: string;

/**
   * Admin credentials for virtual machine
   */
readonly administratorAccount?: VirtualMachineSshCredentials;

/**
   * Indicates whether this compute will be used for running notebooks.
   */
readonly isNotebookInstanceCompute?: bool;

/**
   * Notebook server port open for ssh connections.
   */
readonly notebookServerPort?: number;

/**
   * Port open for ssh connections.
   */
readonly sshPort?: number;

/**
   * Virtual Machine size
   */
readonly virtualMachineSize?: string;

/**
   * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
   */
readonly capacity?: number;

/**
   * If the service has different generations of hardware, for the same SKU, then that can be captured here.
   */
readonly family?: string;

/**
   * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
   */
readonly size?: string;

/**
   * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
   */
readonly tier?: 'Basic''Free''Premium''Standard';
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
