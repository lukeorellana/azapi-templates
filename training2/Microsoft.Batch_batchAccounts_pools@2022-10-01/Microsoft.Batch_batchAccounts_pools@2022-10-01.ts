import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BatchBatchaccountsPoolsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:batchAccounts;

/**
   * The type of identity used for the Batch Pool.
   */
readonly identity?: BatchPoolIdentity;

/**
   * The type of identity used for the Batch Pool.
   */
readonly type: 'None''UserAssigned';

/**
   * The list of user identities associated with the Batch pool.
   */
readonly userAssignedIdentities?: object;

/**
   * The list of application licenses must be a subset of available Batch service application licenses. If a license is requested which is not supported, pool creation will fail.
   */
readonly applicationLicenses?: string[];

/**
   * Changes to application package references affect all new compute nodes joining the pool, but do not affect compute nodes that are already in the pool until they are rebooted or reimaged. There is a maximum of 10 application package references on any given pool.
   */
readonly applicationPackages?: ApplicationPackageReference[];

/**
   * For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.Warning: This property is deprecated and will be removed after February, 2024. Please use theAzure KeyVault Extensioninstead.
   */
readonly certificates?: CertificateReference[];

/**
   * Using CloudServiceConfiguration specifies that the nodes should be creating using Azure Cloud Services (PaaS), while VirtualMachineConfiguration uses Azure Virtual Machines (IaaS).
   */
readonly deploymentConfiguration?: DeploymentConfiguration;

/**
   * The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
   */
readonly displayName?: string;

/**
   * This imposes restrictions on which nodes can be assigned to the pool. Enabling this value can reduce the chance of the requested number of nodes to be allocated in the pool. If not specified, this value defaults to 'Disabled'.
   */
readonly interNodeCommunication?: 'Disabled''Enabled';

/**
   * The Batch service does not assign any meaning to metadata; it is solely for the use of user code.
   */
readonly metadata?: MetadataItem[];

/**
   * This supports Azure Files, NFS, CIFS/SMB, and Blobfuse.
   */
readonly mountConfiguration?: MountConfiguration[];

/**
   * The network configuration for a pool.
   */
readonly networkConfiguration?: NetworkConfiguration;

/**
   * Defines the desired size of the pool. This can either be 'fixedScale' where the requested targetDedicatedNodes is specified, or 'autoScale' which defines a formula which is periodically reevaluated. If this property is not specified, the pool will have a fixed scale with 0 targetDedicatedNodes.
   */
readonly scaleSettings?: ScaleSettings;

/**
   * In an PATCH (update) operation, this property can be set to an empty object to remove the start task from the pool.
   */
readonly startTask?: StartTask;

/**
   * If omitted, the default value is Default.
   */
readonly targetNodeCommunicationMode?: 'Classic''Default''Simplified';

/**
   * If not specified, the default is spread.
   */
readonly taskSchedulingPolicy?: TaskSchedulingPolicy;

/**
   * The default value is 1. The maximum value is the smaller of 4 times the number of cores of the vmSize of the pool or 256.
   */
readonly taskSlotsPerNode?: number;

/**
   * The list of user accounts to be created on each node in the pool.
   */
readonly userAccounts?: UserAccount[];

/**
   * For information about available sizes of virtual machines for Cloud Services pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (https://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall. For information about available VM sizes for pools using images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
   */
readonly vmSize?: string;

/**
   * The ID of the application package to install. This must be inside the same batch account as the pool. This can either be a reference to a specific version or the default version if one exists.
   */
readonly id: string;

/**
   * If this is omitted, and no default version is specified for this application, the request fails with the error code InvalidApplicationPackageReferences. If you are calling the REST API directly, the HTTP status code is 409.
   */
readonly version?: string;

/**
   * The fully qualified ID of the certificate to install on the pool. This must be inside the same batch account as the pool.
   */
readonly id: string;

/**
   * The default value is currentUser. This property is applicable only for pools configured with Windows nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows image reference). For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
   */
readonly storeLocation?: 'CurrentUser''LocalMachine';

/**
   * This property is applicable only for pools configured with Windows nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows image reference). Common store names include: My, Root, CA, Trust, Disallowed, TrustedPeople, TrustedPublisher, AuthRoot, AddressBook, but any custom store name can also be used. The default value is My.
   */
readonly storeName?: string;

/**
   * Which user accounts on the compute node should have access to the private data of the certificate.
   */
readonly visibility?: String array containing any of:'RemoteUser''StartTask''Task';

/**
   * This property and virtualMachineConfiguration are mutually exclusive and one of the properties must be specified. This property cannot be specified if the Batch account was created with its poolAllocationMode property set to 'UserSubscription'.
   */
readonly cloudServiceConfiguration?: CloudServiceConfiguration;

/**
   * This property and cloudServiceConfiguration are mutually exclusive and one of the properties must be specified.
   */
readonly virtualMachineConfiguration?: VirtualMachineConfiguration;

/**
   * Possible values are: 2 - OS Family 2, equivalent to Windows Server 2008 R2 SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS Family 4, equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent to Windows Server 2016. 6 - OS Family 6, equivalent to Windows Server 2019. For more information, see Azure Guest OS Releases (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
   */
readonly osFamily: string;

/**
   * The default value is * which specifies the latest operating system version for the specified OS family.
   */
readonly osVersion?: string;

/**
   * If specified, setup is performed on each node in the pool to allow tasks to run in containers. All regular tasks and job manager tasks run on this pool must specify the containerSettings property, and all other tasks may specify it.
   */
readonly containerConfiguration?: ContainerConfiguration;

/**
   * This property must be specified if the compute nodes in the pool need to have empty data disks attached to them.
   */
readonly dataDisks?: DataDisk[];

/**
   * If specified, encryption is performed on each node in the pool during node provisioning.
   */
readonly diskEncryptionConfiguration?: DiskEncryptionConfiguration;

/**
   * If specified, the extensions mentioned in this configuration will be installed on each node.
   */
readonly extensions?: VMExtension[];

/**
   * A reference to an Azure Virtual Machines Marketplace image or the Azure Image resource of a custom Virtual Machine. To get the list of all imageReferences verified by Azure Batch, see the 'List supported node agent SKUs' operation.
   */
readonly imageReference: ImageReference;

/**
   * This only applies to images that contain the Windows operating system, and should only be used when you hold valid on-premises licenses for the nodes which will be deployed. If omitted, no on-premises licensing discount is applied. Values are:Windows_Server - The on-premises license is for Windows Server.Windows_Client - The on-premises license is for Windows Client.
   */
readonly licenseType?: string;

/**
   * The Batch node agent is a program that runs on each node in the pool, and provides the command-and-control interface between the node and the Batch service. There are different implementations of the node agent, known as SKUs, for different operating systems. You must specify a node agent SKU which matches the selected image reference. To get the list of supported node agent SKUs along with their list of verified image references, see the 'List supported node agent SKUs' operation.
   */
readonly nodeAgentSkuId: string;

/**
   * This configuration will specify rules on how nodes in the pool will be physically allocated.
   */
readonly nodePlacementConfiguration?: NodePlacementConfiguration;

/**
   * Contains configuration for ephemeral OSDisk settings.
   */
readonly osDisk?: OSDisk;

/**
   * This property must not be specified if the imageReference specifies a Linux OS image.
   */
readonly windowsConfiguration?: WindowsConfiguration;

/**
   * This is the full image reference, as would be specified to "docker pull". An image will be sourced from the default Docker registry unless the image is fully qualified with an alternative registry.
   */
readonly containerImageNames?: string[];

/**
   * If any images must be downloaded from a private registry which requires credentials, then those credentials must be provided here.
   */
readonly containerRegistries?: ContainerRegistry[];

/**
   * The container technology to be used.
   */
readonly type: 'DockerCompatible';

/**
   * The reference to a user assigned identity associated with the Batch pool which a compute node will use.
   */
readonly identityReference?: ComputeNodeIdentityReference;

/**
   * The password to log into the registry server.
   */
readonly password?: string;

/**
   * If omitted, the default is "docker.io".
   */
readonly registryServer?: string;

/**
   * The user name to log into the registry server.
   */
readonly username?: string;

/**
   * The ARM resource id of the user assigned identity.
   */
readonly resourceId?: string;

/**
   * Values are:none - The caching mode for the disk is not enabled.readOnly - The caching mode for the disk is read only.readWrite - The caching mode for the disk is read and write.The default value for caching is none. For information about the caching options see:https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
   */
readonly caching?: 'None''ReadOnly''ReadWrite';

/**
   * The initial disk size in GB when creating new data disk.
   */
readonly diskSizeGB: number;

/**
   * The lun is used to uniquely identify each data disk. If attaching multiple disks, each should have a distinct lun. The value must be between 0 and 63, inclusive.
   */
readonly lun: number;

/**
   * If omitted, the default is "Standard_LRS". Values are:Standard_LRS - The data disk should use standard locally redundant storage.Premium_LRS - The data disk should use premium locally redundant storage.
   */
readonly storageAccountType?: 'Premium_LRS''Standard_LRS';

/**
   * On Linux pool, only "TemporaryDisk" is supported; on Windows pool, "OsDisk" and "TemporaryDisk" must be specified.
   */
readonly targets?: String array containing any of:'OsDisk''TemporaryDisk';

/**
   * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
   */
readonly autoUpgradeMinorVersion?: bool;

/**
   * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
   */
readonly protectedSettings?: For Bicep, you can use theany()function.;

/**
   * Collection of extension names after which this extension needs to be provisioned.
   */
readonly provisionAfterExtensions?: string[];

/**
   * The name of the extension handler publisher.
   */
readonly publisher: string;

/**
   * JSON formatted public settings for the extension.
   */
readonly settings?: For Bicep, you can use theany()function.;

/**
   * The type of the extensions.
   */
readonly type: string;

/**
   * The version of script handler.
   */
readonly typeHandlerVersion?: string;

/**
   * This property is mutually exclusive with other properties. The Shared Image Gallery image must have replicas in the same region as the Azure Batch account. For information about the firewall settings for the Batch node agent to communicate with the Batch service see /azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration.
   */
readonly id?: string;

/**
   * For example, UbuntuServer or WindowsServer.
   */
readonly offer?: string;

/**
   * For example, Canonical or MicrosoftWindowsServer.
   */
readonly publisher?: string;

/**
   * For example, 18.04-LTS or 2022-datacenter.
   */
readonly sku?: string;

/**
   * A value of 'latest' can be specified to select the latest version of an image. If omitted, the default is 'latest'.
   */
readonly version?: string;

/**
   * Allocation policy used by Batch Service to provision the nodes. If not specified, Batch will use the regional policy.
   */
readonly policy?: 'Regional''Zonal';

/**
   * Specifies the ephemeral Disk Settings for the operating system disk used by the virtual machine.
   */
readonly ephemeralOSDiskSettings?: DiffDiskSettings;

/**
   * This property can be used by user in the request to choose which location the operating system should be in. e.g., cache disk space for Ephemeral OS disk provisioning. For more information on Ephemeral OS disk size requirements, please refer to Ephemeral OS disk size requirements for Windows VMs at /azure/virtual-machines/windows/ephemeral-os-disks#size-requirements and Linux VMs at /azure/virtual-machines/linux/ephemeral-os-disks#size-requirements.
   */
readonly placement?: 'CacheDisk';

/**
   * If omitted, the default value is true.
   */
readonly enableAutomaticUpdates?: bool;

/**
   * The value of the metadata item.
   */
readonly value: string;

/**
   * This property is mutually exclusive with all other properties.
   */
readonly azureBlobFileSystemConfiguration?: AzureBlobFileSystemConfiguration;

/**
   * This property is mutually exclusive with all other properties.
   */
readonly azureFileShareConfiguration?: AzureFileShareConfiguration;

/**
   * This property is mutually exclusive with all other properties.
   */
readonly cifsMountConfiguration?: CifsMountConfiguration;

/**
   * This property is mutually exclusive with all other properties.
   */
readonly nfsMountConfiguration?: NFSMountConfiguration;

/**
   * This property is mutually exclusive with both sasKey and identity; exactly one must be specified.
   */
readonly accountKey?: string;

/**
   * The Azure Storage Account name.
   */
readonly accountName: string;

/**
   * These are 'net use' options in Windows and 'mount' options in Linux.
   */
readonly blobfuseOptions?: string;

/**
   * The Azure Blob Storage Container name.
   */
readonly containerName: string;

/**
   * This property is mutually exclusive with both accountKey and sasKey; exactly one must be specified.
   */
readonly identityReference?: ComputeNodeIdentityReference;

/**
   * All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
   */
readonly relativeMountPath: string;

/**
   * This property is mutually exclusive with both accountKey and identity; exactly one must be specified.
   */
readonly sasKey?: string;

/**
   * The Azure Storage account key.
   */
readonly accountKey: string;

/**
   * The Azure Storage account name.
   */
readonly accountName: string;

/**
   * This is of the form 'https://{account}.file.core.windows.net/'.
   */
readonly azureFileUrl: string;

/**
   * These are 'net use' options in Windows and 'mount' options in Linux.
   */
readonly mountOptions?: string;

/**
   * All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
   */
readonly relativeMountPath: string;

/**
   * These are 'net use' options in Windows and 'mount' options in Linux.
   */
readonly mountOptions?: string;

/**
   * The password to use for authentication against the CIFS file system.
   */
readonly password: string;

/**
   * All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
   */
readonly relativeMountPath: string;

/**
   * The URI of the file system to mount.
   */
readonly source: string;

/**
   * The user to use for authentication against the CIFS file system.
   */
readonly userName: string;

/**
   * These are 'net use' options in Windows and 'mount' options in Linux.
   */
readonly mountOptions?: string;

/**
   * All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
   */
readonly relativeMountPath: string;

/**
   * The URI of the file system to mount.
   */
readonly source: string;

/**
   * The scope of dynamic vnet assignment.
   */
readonly dynamicVnetAssignmentScope?: 'job''none';

/**
   * Pool endpoint configuration is only supported on pools with the virtualMachineConfiguration property.
   */
readonly endpointConfiguration?: PoolEndponumberConfiguration;

/**
   * This property is only supported on Pools with the virtualMachineConfiguration property.
   */
readonly publicIPAddressConfiguration?: PublicIPAddressConfiguration;

/**
   * The virtual network must be in the same region and subscription as the Azure Batch account. The specified subnet should have enough free IP addresses to accommodate the number of nodes in the pool. If the subnet doesn't have enough free IP addresses, the pool will partially allocate compute nodes and a resize error will occur. The 'MicrosoftAzureBatch' service principal must have the 'Classic Virtual Machine Contributor' Role-Based Access Control (RBAC) role for the specified VNet. The specified subnet must allow communication from the Azure Batch service to be able to schedule tasks on the compute nodes. This can be verified by checking if the specified VNet has any associated Network Security Groups (NSG). If communication to the compute nodes in the specified subnet is denied by an NSG, then the Batch service will set the state of the compute nodes to unusable. If the specified VNet has any associated Network Security Groups (NSG), then a few reserved system ports must be enabled for inbound communication. For pools created with a virtual machine configuration, enable ports 29876 and 29877, as well as port 22 for Linux and port 3389 for Windows. For pools created with a cloud service configuration, enable ports 10100, 20100, and 30100. Also enable outbound connections to Azure Storage on port 443. For cloudServiceConfiguration pools, only 'classic' VNETs are supported. For more details see: /azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration
   */
readonly subnetId?: string;

/**
   * The maximum number of inbound NAT pools per Batch pool is 5. If the maximum number of inbound NAT pools is exceeded the request fails with HTTP status code 400. This cannot be specified if the IPAddressProvisioningType is NoPublicIPAddresses.
   */
readonly inboundNatPools: InboundNatPool[];

/**
   * This must be unique within a Batch pool. Acceptable values are between 1 and 65535 except for 22, 3389, 29876 and 29877 as these are reserved. If any reserved values are provided the request fails with HTTP status code 400.
   */
readonly backendPort: number;

/**
   * Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved by the Batch service. All ranges within a pool must be distinct and cannot overlap. If any reserved or overlapping values are provided the request fails with HTTP status code 400.
   */
readonly frontendPortRangeEnd: number;

/**
   * Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved. All ranges within a pool must be distinct and cannot overlap. If any reserved or overlapping values are provided the request fails with HTTP status code 400.
   */
readonly frontendPortRangeStart: number;

/**
   * The maximum number of rules that can be specified across all the endpoints on a Batch pool is 25. If no network security group rules are specified, a default rule will be created to allow inbound access to the specified backendPort. If the maximum number of network security group rules is exceeded the request fails with HTTP status code 400.
   */
readonly networkSecurityGroupRules?: NetworkSecurityGroupRule[];

/**
   * The protocol of the endpoint.
   */
readonly protocol: 'TCP''UDP';

/**
   * The action that should be taken for a specified IP address, subnet range or tag.
   */
readonly access: 'Allow''Deny';

/**
   * Priorities within a pool must be unique and are evaluated in order of priority. The lower the number the higher the priority. For example, rules could be specified with order numbers of 150, 250, and 350. The rule with the order number of 150 takes precedence over the rule that has an order of 250. Allowed priorities are 150 to 4096. If any reserved or duplicate values are provided the request fails with HTTP status code 400.
   */
readonly priority: number;

/**
   * Valid values are a single IP address (i.e. 10.10.10.10), IP subnet (i.e. 192.168.1.0/24), default tag, or * (for all addresses).  If any other values are provided the request fails with HTTP status code 400.
   */
readonly sourceAddressPrefix: string;

/**
   * Valid values are '*' (for all ports 0 - 65535) or arrays of ports or port ranges (i.e. 100-200). The ports should in the range of 0 to 65535 and the port ranges or ports can't overlap. If any other values are provided the request fails with HTTP status code 400. Default value will be *.
   */
readonly sourcePortRanges?: string[];

/**
   * The number of IPs specified here limits the maximum size of the Pool - 100 dedicated nodes or 100 Spot/low-priority nodes can be allocated for each public IP. For example, a pool needing 250 dedicated VMs would need at least 3 public IPs specified. Each element of this collection is of the form: /subscriptions/{subscription}/resourceGroups/{group}/providers/Microsoft.Network/publicIPAddresses/{ip}.
   */
readonly ipAddressIds?: string[];

/**
   * The default value is BatchManaged
   */
readonly provision?: 'BatchManaged''NoPublicIPAddresses''UserManaged';

/**
   * This property and fixedScale are mutually exclusive and one of the properties must be specified.
   */
readonly autoScale?: AutoScaleSettings;

/**
   * This property and autoScale are mutually exclusive and one of the properties must be specified.
   */
readonly fixedScale?: FixedScaleSettings;

/**
   * If omitted, the default value is 15 minutes (PT15M).
   */
readonly evaluationInterval?: string;

/**
   * A formula for the desired number of compute nodes in the pool.
   */
readonly formula: string;

/**
   * If omitted, the default value is Requeue.
   */
readonly nodeDeallocationOption?: 'Requeue''RetainedData''TaskCompletion''Terminate';

/**
   * The default value is 15 minutes. Timeout values use ISO 8601 format. For example, use PT10M for 10 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service rejects the request with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).
   */
readonly resizeTimeout?: string;

/**
   * At least one of targetDedicatedNodes, targetLowPriorityNodes must be set.
   */
readonly targetDedicatedNodes?: number;

/**
   * At least one of targetDedicatedNodes, targetLowPriorityNodes must be set.
   */
readonly targetLowPriorityNodes?: number;

/**
   * The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. Required if any other properties of the startTask are specified.
   */
readonly commandLine?: string;

/**
   * When this is specified, all directories recursively below the AZ_BATCH_NODE_ROOT_DIR (the root of Azure Batch directories on the node) are mapped into the container, all task environment variables are mapped into the container, and the task command line is executed in the container.
   */
readonly containerSettings?: TaskContainerSettings;

/**
   * A list of environment variable settings for the start task.
   */
readonly environmentSettings?: EnvironmentSetting[];

/**
   * The Batch service retries a task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try the task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the task. If the maximum retry count is -1, the Batch service retries the task without limit.
   */
readonly maxTaskRetryCount?: number;

/**
   * A list of files that the Batch service will download to the compute node before running the command line.
   */
readonly resourceFiles?: ResourceFile[];

/**
   * If omitted, the task runs as a non-administrative user unique to the task.
   */
readonly userIdentity?: UserIdentity;

/**
   * If true and the start task fails on a compute node, the Batch service retries the start task up to its maximum retry count (maxTaskRetryCount). If the task has still not completed successfully after all retries, then the Batch service marks the compute node unusable, and will not schedule tasks to it. This condition can be detected via the node state and scheduling error detail. If false, the Batch service will not wait for the start task to complete. In this case, other tasks can start executing on the compute node while the start task is still running; and even if the start task fails, new tasks will continue to be scheduled on the node. The default is true.
   */
readonly waitForSuccess?: bool;

/**
   * These additional options are supplied as arguments to the "docker create" command, in addition to those controlled by the Batch Service.
   */
readonly containerRunOptions?: string;

/**
   * This is the full image reference, as would be specified to "docker pull". If no tag is provided as part of the image name, the tag ":latest" is used as a default.
   */
readonly imageName: string;

/**
   * This setting can be omitted if was already provided at pool creation.
   */
readonly registry?: ContainerRegistry;

/**
   * A flag to indicate where the container task working directory is. The default is 'taskWorkingDirectory'.
   */
readonly workingDirectory?: 'ContainerImageDefault''TaskWorkingDirectory';

/**
   * The value of the environment variable.
   */
readonly value?: string;

/**
   * The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified.
   */
readonly autoStorageContainerName?: string;

/**
   * The property is valid only when autoStorageContainerName or storageContainerUrl is used. This prefix can be a partial filename or a subdirectory. If a prefix is not specified, all the files in the container will be downloaded.
   */
readonly blobPrefix?: string;

/**
   * This property applies only to files being downloaded to Linux compute nodes. It will be ignored if it is specified for a resourceFile which will be downloaded to a Windows node. If this property is not specified for a Linux node, then a default value of 0770 is applied to the file.
   */
readonly fileMode?: string;

/**
   * If the httpUrl property is specified, the filePath is required and describes the path which the file will be downloaded to, including the filename. Otherwise, if the autoStorageContainerName or storageContainerUrl property is specified, filePath is optional and is the directory to download the files to. In the case where filePath is used as a directory, any directory structure already associated with the input data will be retained in full and appended to the specified filePath directory. The specified relative path cannot break out of the task's working directory (for example by using '..').
   */
readonly filePath?: string;

/**
   * The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. If the URL points to Azure Blob Storage, it must be readable from compute nodes. There are three ways to get such a URL for a blob in Azure storage: include a Shared Access Signature (SAS) granting read permissions on the blob, use a managed identity with read permission, or set the ACL for the blob or its container to allow public access.
   */
readonly httpUrl?: string;

/**
   * The reference to a user assigned identity associated with the Batch pool which a compute node will use.
   */
readonly identityReference?: ComputeNodeIdentityReference;

/**
   * The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. This URL must be readable and listable from compute nodes. There are three ways to get such a URL for a container in Azure storage: include a Shared Access Signature (SAS) granting read and list permissions on the container, use a managed identity with read and list permissions, or set the ACL for the container to allow public access.
   */
readonly storageContainerUrl?: string;

/**
   * The userName and autoUser properties are mutually exclusive; you must specify one but not both.
   */
readonly autoUser?: AutoUserSpecification;

/**
   * The userName and autoUser properties are mutually exclusive; you must specify one but not both.
   */
readonly userName?: string;

/**
   * The default value is nonAdmin.
   */
readonly elevationLevel?: 'Admin''NonAdmin';

/**
   * The default value is Pool. If the pool is running Windows a value of Task should be specified if stricter isolation between tasks is required. For example, if the task mutates the registry in a way which could impact other tasks, or if certificates have been specified on the pool which should not be accessible by normal tasks but should be accessible by start tasks.
   */
readonly scope?: 'Pool''Task';

/**
   * How tasks should be distributed across compute nodes.
   */
readonly nodeFillType: 'Pack''Spread';

/**
   * nonAdmin - The auto user is a standard user without elevated access. admin - The auto user is a user with elevated access and operates with full Administrator permissions. The default value is nonAdmin.
   */
readonly elevationLevel?: 'Admin''NonAdmin';

/**
   * This property is ignored if specified on a Windows pool. If not specified, the user is created with the default options.
   */
readonly linuxUserConfiguration?: LinuxUserConfiguration;

/**
   * The password for the user account.
   */
readonly password: string;

/**
   * This property can only be specified if the user is on a Windows pool. If not specified and on a Windows pool, the user is created with the default options.
   */
readonly windowsUserConfiguration?: WindowsUserConfiguration;

/**
   * The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the gid.
   */
readonly gid?: number;

/**
   * The private key must not be password protected. The private key is used to automatically configure asymmetric-key based authentication for SSH between nodes in a Linux pool when the pool's enableInterNodeCommunication property is true (it is ignored if enableInterNodeCommunication is false). It does this by placing the key pair into the user's .ssh directory. If not specified, password-less SSH is not configured between nodes (no modification of the user's .ssh directory is done).
   */
readonly sshPrivateKey?: string;

/**
   * The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the uid.
   */
readonly uid?: number;

/**
   * Specifies login mode for the user. The default value for VirtualMachineConfiguration pools is interactive mode and for CloudServiceConfiguration pools is batch mode.
   */
readonly loginMode?: 'Batch''Interactive';
}

/**
 * BatchBatchaccountsPools resource
 */
export class BatchBatchaccountsPools extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BatchBatchaccountsPoolsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Batch/batchAccounts/pools@2022-10-01";
  }

  protected getResourceBody(props: BatchBatchaccountsPoolsProps): string {
    return JSON.stringify(
        {properties: {applicationLicenses: ["string"], applicationPackages: [{id: "string", version: "string"}], certificates: [{id: "string", storeLocation: "string", storeName: "string", visibility: ["string"]}], deploymentConfiguration: {cloudServiceConfiguration: {osFamily: "string", osVersion: "string"}, virtualMachineConfiguration: {containerConfiguration: {containerImageNames: ["string"], containerRegistries: [{identityReference: {resourceId: "string"}, password: "string", registryServer: "string", username: "string"}], type: "DockerCompatible"}, dataDisks: [{caching: "string", diskSizeGB: "${int}", lun: "${int}", storageAccountType: "string"}], diskEncryptionConfiguration: {targets: ["string"]}, extensions: [{autoUpgradeMinorVersion: "${bool}", name: "string", provisionAfterExtensions: ["string"], publisher: "string", type: "string", typeHandlerVersion: "string"}], imageReference: {id: "string", offer: "string", publisher: "string", sku: "string", version: "string"}, licenseType: "string", nodeAgentSkuId: "string", nodePlacementConfiguration: {policy: "string"}, osDisk: {ephemeralOSDiskSettings: {placement: "CacheDisk"}}, windowsConfiguration: {enableAutomaticUpdates: "${bool}"}}}, displayName: "string", interNodeCommunication: "string", metadata: [{name: "string", value: "string"}], mountConfiguration: [{azureBlobFileSystemConfiguration: {accountKey: "string", accountName: "string", blobfuseOptions: "string", containerName: "string", identityReference: {resourceId: "string"}, relativeMountPath: "string", sasKey: "string"}, azureFileShareConfiguration: {accountKey: "string", accountName: "string", azureFileUrl: "string", mountOptions: "string", relativeMountPath: "string"}, cifsMountConfiguration: {mountOptions: "string", password: "string", relativeMountPath: "string", source: "string", userName: "string"}, nfsMountConfiguration: {mountOptions: "string", relativeMountPath: "string", source: "string"}}], networkConfiguration: {dynamicVnetAssignmentScope: "string", endpointConfiguration: {inboundNatPools: [{backendPort: "${int}", frontendPortRangeEnd: "${int}", frontendPortRangeStart: "${int}", name: "string", networkSecurityGroupRules: [{access: "string", priority: "${int}", sourceAddressPrefix: "string", sourcePortRanges: ["string"]}], protocol: "string"}]}, publicIPAddressConfiguration: {ipAddressIds: ["string"], provision: "string"}, subnetId: "string"}, scaleSettings: {autoScale: {evaluationInterval: "string", formula: "string"}, fixedScale: {nodeDeallocationOption: "string", resizeTimeout: "string", targetDedicatedNodes: "${int}", targetLowPriorityNodes: "${int}"}}, startTask: {commandLine: "string", containerSettings: {containerRunOptions: "string", imageName: "string", registry: {identityReference: {resourceId: "string"}, password: "string", registryServer: "string", username: "string"}, workingDirectory: "string"}, environmentSettings: [{name: "string", value: "string"}], maxTaskRetryCount: "${int}", resourceFiles: [{autoStorageContainerName: "string", blobPrefix: "string", fileMode: "string", filePath: "string", httpUrl: "string", identityReference: {resourceId: "string"}, storageContainerUrl: "string"}], userIdentity: {autoUser: {elevationLevel: "string", scope: "string"}, userName: "string"}, waitForSuccess: "${bool}"}, targetNodeCommunicationMode: "string", taskSchedulingPolicy: {nodeFillType: "string"}, taskSlotsPerNode: "${int}", userAccounts: [{elevationLevel: "string", linuxUserConfiguration: {gid: "${int}", sshPrivateKey: "string", uid: "${int}"}, name: "string", password: "string", windowsUserConfiguration: {loginMode: "string"}}], vmSize: "string"}}
    );
  }
}
